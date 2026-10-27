import {components} from './components.js';

export function createInspectionUI({getModel,getSelected,getFrame,getDimensions,onSelect}){
 const stage=document.querySelector('#stage'),canvas=document.querySelector('#cart'),svg=document.querySelector('#annotations'),hotspots=document.querySelector('#hotspots'),readout=document.querySelector('#viewer-readout');
 let scope='all',hovered=null,readoutKey='';
 const byId=new Map(components.map(p=>[p.id,p]));
 function ids(){const result=components.filter(p=>scope==='all'||p.category===scope||p.id===getSelected());return result;}
 function render(){hotspots.innerHTML=ids().map(p=>`<button type="button" class="hotspot ${p.id===getSelected()?'active':''}" data-hotspot="${p.id}" title="#${p.id} · ${p.name}" aria-label="Component ${p.id}: ${p.name}" aria-pressed="${p.id===getSelected()}">${p.id}</button>`).join('');update();}
 hotspots.addEventListener('click',e=>{const button=e.target.closest('[data-hotspot]');if(button)onSelect(Number(button.dataset.hotspot));});
 hotspots.addEventListener('pointerover',e=>{const button=e.target.closest('[data-hotspot]');hovered=button?Number(button.dataset.hotspot):null;update();});hotspots.addEventListener('pointerleave',()=>{hovered=null;update();});
 function update(){const model=getModel();if(!model)return;const selected=getSelected(),part=byId.get(selected),frame=getFrame(),w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
   stage.classList.toggle('isolated-led',frame.isolated&&selected===14);
   const nodes=[...hotspots.querySelectorAll('[data-hotspot]')].map(el=>{const id=Number(el.dataset.hotspot),p=byId.get(id),position=model.project(model.scenePoint(p.point,id));return{el,id,p,position};});
   nodes.sort((a,b)=>a.position[0]-b.position[0]);const split=Math.ceil(nodes.length/2);
   for(const [side,column] of [[0,nodes.slice(0,split)],[1,nodes.slice(split)]]){column.sort((a,b)=>a.position[1]-b.position[1]);const top=54,bottom=h-55,gap=Math.min(34,(bottom-top)/Math.max(1,column.length-1)),start=(top+bottom-gap*(column.length-1))/2;column.forEach((node,i)=>{node.label=[side?w-22:22,start+i*gap];node.el.style.left=node.label[0]+'px';node.el.style.top=node.label[1]+'px';node.el.classList.toggle('active',node.id===selected);node.el.classList.toggle('out-of-view',node.position[0]<0||node.position[0]>w||node.position[1]<0||node.position[1]>h);});}
   const lines=[];
   for(const node of nodes){const active=node.id===selected||node.id===hovered;if(!active&&frame.focus)continue;const [x,y]=node.position,[lx,ly]=node.label,px=Math.max(40,Math.min(w-40,x)),py=Math.max(30,Math.min(h-35,y));lines.push(`<path class="component-leader ${active?'':'passive'}" d="M${lx} ${ly} L${px} ${py}"/><circle class="component-anchor ${active?'':'passive'}" cx="${px}" cy="${py}" r="3"/>`);}
   const occupied=[];
   function dimension(line){const a=model.project(model.scenePoint(line.a,part.id)),b=model.project(model.scenePoint(line.b,part.id)),dx=b[0]-a[0],dy=b[1]-a[1],length=Math.hypot(dx,dy)||1,nx=-dy/length*4,ny=dx/length*4;const midpoint=[(a[0]+b[0])/2,(a[1]+b[1])/2];let x=Math.max(100,Math.min(w-100,midpoint[0])),y=Math.max(47,Math.min(h-45,midpoint[1]-10));for(let attempt=0;attempt<8&&occupied.some(p=>Math.abs(p[0]-x)<125&&Math.abs(p[1]-y)<19);attempt++)y=Math.min(h-44,y+21);occupied.push([x,y]);const proposed=line.status==='proposed';return `<g><path class="dimension-line ${proposed?'dimension-proposed':''}" d="M${a[0]} ${a[1]} L${b[0]} ${b[1]} M${a[0]-nx} ${a[1]-ny} l${nx*2} ${ny*2} M${b[0]-nx} ${b[1]-ny} l${nx*2} ${ny*2}"/><text class="dimension-label ${proposed?'proposed-label':''}" x="${x}" y="${y}" text-anchor="middle">${line.text}${proposed?' · P':''}</text></g>`;}
   if(getDimensions())for(const line of part.lines)lines.push(dimension(line));
   if(frame.explosion>0&&!frame.focus){const a=model.project(part.point),b=model.project(model.scenePoint(part.point,part.id));lines.unshift(`<path class="assembly-trace" d="M${a[0]} ${a[1]}L${b[0]} ${b[1]}"/>`);}
   svg.innerHTML=lines.join('');
   const key=selected+':'+getDimensions();if(key!==readoutKey){readoutKey=key;readout.hidden=!getDimensions();readout.innerHTML=`<div class="readout-title"><span>COMPONENT ${String(part.id).padStart(2,'0')}</span><strong>${part.name}</strong><small>Assembled sizes · mm · P = proposed</small></div><dl>${part.measurements.map(m=>`<div><dt>${m.label}</dt><dd class="${m.status==='proposed'?'proposed-value':''}">${m.value}${m.status==='proposed'?' <abbr title="Proposed model reference; factory confirmation required">P</abbr>':''}</dd></div>`).join('')}</dl>`;}
 }
 return{render,update,setScope(value){scope=value;render();}};
}
