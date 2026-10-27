import {createInspectionUI} from './inspection-ui.js';
import {createCart} from './model.js';
import {copy,parts,dimensions,intent,review} from './content.js';

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const params=new URLSearchParams(location.search);
let lang='en',selected=Number(params.get('part'))||11,view=params.get('view')||'iso';
if(!parts.some(p=>p.id===selected))selected=11;
if(!['iso','front','rear','left','right','top'].includes(view))view='iso';
let model,showDimensions=true,frame={},toastTimer;
const inspection=createInspectionUI({getModel:()=>model,getSelected:()=>selected,getFrame:()=>frame,getDimensions:()=>showDimensions,onSelect:setPart});
const tr=value=>Array.isArray(value)?value[lang==='en'?1:0]:value;
const t=key=>tr(copy[key]||[key,key]);
function notify(message){$('#announcement').textContent=message;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#announcement').textContent='',4000);}
function setPart(id){selected=Number(id);showDimensions=true;$('#dimensions').checked=true;if([10,11].includes(selected)){$('#hide-ledge').checked=false;model?.hideLedge(false);}model?.inspect(selected);view=parts.find(p=>p.id===selected).home;$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));renderPart();renderPlan();$('#component-select').value=String(selected);syncControls();syncURL();}
function setView(name){view=name;$('#isolate-part').checked=false;model?.view(name);$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===name));updateSpin();syncURL();}
function syncURL(){const q=new URLSearchParams({lang,view,part:String(selected)});const state=model?.getState();if(state?.explosion)q.set('explode',Math.round(state.explosion*100));if(state?.focus)q.set('focus',state.focus.id);if(state?.isolated)q.set('isolate','1');history.replaceState(null,'',`${location.pathname}?${q}${location.hash}`);}
function badge(status){return `<span class="badge ${status==='proposed'?'proposed':''}">${t(status)}</span>`;}
function renderPart(){const p=parts.find(p=>p.id===selected);$('#part-tabs').innerHTML=parts.map(part=>`<button type="button" data-part="${part.id}" class="${selected===part.id?'active':''}" aria-pressed="${selected===part.id}">#${part.id} ${tr(part.tab).replace(/^\d+\s+/, '')}</button>`).join('');$('#part-detail').innerHTML=`<div class="part-number">${t('part')} / ${String(p.id).padStart(2,'0')}</div><h3>${tr(p.name)}</h3><p class="part-measure">${p.measurements[0].value}</p>${badge(p.status)}<p class="part-note">${tr(p.note)}</p>${selected===14?'<button type="button" id="rear-sign-view" class="text-link">View customer rear ↗</button><p class="small muted"><a href="assets/studio-roast-logo-original-v2.jpeg" target="_blank" rel="noopener">Supplied logo reference ↗</a></p>':selected===15?'<button type="button" id="engraving-view" class="text-link">Inspect engraving up close ↗</button>':''}`;$('#part-top').hidden=![1,2,6,8,9].includes(selected);renderHotspots();}
function renderSchedule(){const order=[6,1,2,8,9];$('#cutout-list').innerHTML=order.map(id=>{const p=parts.find(p=>p.id===id);return `<div class="cutout-row"><span class="cutout-id">${id}</span><div><button data-inspect="${id}" type="button"><strong>${tr(p.tab)}</strong></button><span class="row-dims">${p.measure} mm</span><p>${t('location')}: X=${Array.isArray(p.x)?p.x.join(' / '):p.x}, Y=${p.y} · ${lang==='zh'?'定位待确认':'Position proposed'}</p><p>${p.status==='confirmed'?(lang==='zh'?'开口尺寸：客户指定':'Opening size: client specified'):(lang==='zh'?'开口尺寸：方案待确认':'Opening size: proposed')}</p></div></div>`;}).join('');$('#dimension-table tbody').innerHTML=dimensions.map(([name,measure,status,note])=>`<tr><td>${tr(name)}</td><td>${measure}<span class="table-note">${tr(note)}</span></td><td>${badge(status)}</td></tr>`).join('');}
function renderText(){document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.title=lang==='zh'?'咖啡推车 · Coffee Cart | Revision D':'Coffee Cart · 3D Manufacturer Guide | Revision D';$$('[data-i18n]').forEach(el=>el.innerHTML=t(el.dataset.i18n));$('#cart').setAttribute('aria-label',lang==='zh'?'可旋转咖啡推车模型。方向键旋转，加减键缩放。':'Rotatable coffee cart. Arrow keys rotate; plus and minus zoom.');$('#intent-list').innerHTML=intent.map(v=>`<li>${tr(v)}</li>`).join('');$('#review-list').innerHTML=review.map(v=>`<li>${tr(v)}</li>`).join('');$('#component-select').innerHTML=parts.map(p=>`<option value="${p.id}">#${p.id} · ${p.name}</option>`).join('');$('#component-select').value=String(selected);renderPart();renderSchedule();renderPlan();renderComponentTable();updateSpin();drawAnnotations();}

// Dimensioned orthographic plan. Coordinates match the shared 3D model exactly.
function renderPlan(){const L=1828.8,D=1066.8,P=304.8;
 const txt=(x,y,text,extra='')=>`<text x="${x}" y="${y}" ${extra}>${text}</text>`;
 const line=(x1,y1,x2,y2,cls='')=>`<path d="M${x1},${y1} L${x2},${y2}" class="${cls}"/>`;
 const dim=(x1,y1,x2,y2,text,vertical=false)=>`<g stroke="#78988b" stroke-width="2" fill="none">${line(x1,y1,x2,y2)}${vertical?line(x1-12,y1-12,x1+12,y1+12)+line(x2-12,y2-12,x2+12,y2+12):line(x1-12,y1+12,x1+12,y1-12)+line(x2-12,y2+12,x2+12,y2-12)}</g>${vertical?txt(x1+50,(y1+y2)/2,text,`transform="rotate(90 ${x1+50} ${(y1+y2)/2})" text-anchor="middle"`):txt((x1+x2)/2,y1-22,text,'text-anchor="middle"')}`;
 const shape=(id,child)=>`<g class="plan-feature ${selected===id?'selected':''}" data-plan="${id}" tabindex="0" role="button" aria-label="${tr(parts.find(p=>p.id===id).name)}">${child}</g>`;
 const rect=(p,fill='#bac8c0')=>`<rect class="feature-shape" x="${p.x}" y="${D-p.y-p.d}" width="${p.l}" height="${p.d}" fill="${fill}" stroke="#426558" stroke-width="3" rx="3"/>`;
 const number=(x,y,id,white=false)=>`<circle cx="${x}" cy="${y}" r="34" fill="${white?'#edf5ed':'#234d42'}"/>${txt(x,y+12,id,`text-anchor="middle" fill="${white?'#234d42':'white'}" font-size="34"`)}`;
 let feature='';for(const id of [6,1,9]){const p=parts.find(p=>p.id===id),cx=p.x+p.l/2,cy=D-p.y-p.d/2;feature+=shape(id,rect(p,id===9?'#e5ece5':'#aab9af')+number(cx,cy-10,id)+txt(cx,cy+61,`${p.measure}`,`font-size="${id===9?27:24}" text-anchor="middle" fill="#2e5548"`));}
 const p2=parts.find(p=>p.id===2);feature+=shape(2,`<circle class="feature-shape" cx="${p2.x}" cy="${D-p2.y}" r="45" fill="#aab9af" stroke="#426558" stroke-width="3"/>`+number(p2.x,D-p2.y,2));
 const p8=parts.find(p=>p.id===8);feature+=shape(8,p8.x.map(x=>`<circle class="feature-shape" cx="${x}" cy="${D-p8.y}" r="15" fill="#557969"/>`).join('')+number(1100,100,8));
 const shelfPath='M-304.8 1041.8 L-304.8 40 A344.8 344.8 0 0 1 40 -304.8 L1788.8 -304.8 A344.8 344.8 0 0 1 2133.6 40 L2133.6 1041.8 L1828.8 1041.8 L1828.8 40 A40 40 0 0 0 1788.8 0 L40 0 A40 40 0 0 0 0 40 L0 1041.8 Z';
 $('#top-plan').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-540 -560 2990 2050" role="img" aria-label="${t('topPlan')}" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="36" fill="#496a58"><defs><pattern id="plan-grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M100 0H0V100" fill="none" stroke="#f1f4ee" stroke-width="2"/></pattern></defs><rect x="-500" y="-520" width="2900" height="1950" fill="url(#plan-grid)"/><rect x="0" y="0" width="${L}" height="${D}" fill="#f6f8f2" stroke="#526f5b" stroke-width="4" rx="6"/>${shape(11,`<path class="feature-shape" d="${shelfPath}" fill="#d8e3d3" stroke="#7a9678" stroke-width="3"/>`)}<path d="M0 1041.8V40Q0 0 40 0H1788.8Q1828.8 0 1828.8 40V1041.8" fill="none" stroke="#375c4c" stroke-width="8"/>${feature}${txt(L/2,-156,`${t('rearSide')} · 304.8 mm`, 'text-anchor="middle" font-size="34"')}${txt(L/2,D+85,t('frontOpen'),'text-anchor="middle" font-size="34" fill="#327364"')}${txt(1497,D-220-355.6-44,`${lang==='zh'?'9 水槽开口':'9 SINK OPENING'} · 254 × 355.6 mm`,'text-anchor="middle" font-size="31"')}${txt(159,D-90+80,'138 × 150 mm','text-anchor="middle" font-size="30"')}${dim(-P,-410,L+P,-410,'2438.4 mm')}${dim(0,D+225,L,D+225,'1828.8 mm')}${dim(-420,0,-420,D,'1066.8 mm',true)}${dim(2270,-P,2270,D,'1371.6 mm',true)}<g stroke="#8da18b" stroke-width="2" fill="none">${line(-P,-330,-P,-445)}${line(L+P,-330,L+P,-445)}${line(0,D+130,0,D+255)}${line(L,D+130,L,D+255)}${line(-345,0,-450,0)}${line(-345,D,-450,D)}${line(2160,-P,2300,-P)}${line(2160,D,2300,D)}</g><circle cx="0" cy="${D}" r="10" fill="#466c55"/>${txt(-55,D+68,'O','font-size="32"')}<path d="M0 ${D}h170m-15 -12l15 12-15 12 M0 ${D}v-170m-12 15l12-15 12 15" stroke="#587d64" stroke-width="3" fill="none"/>${txt(160,D-25,'X','font-size="30"')}${txt(23,D-160,'Y','font-size="30"')}${txt(0,1430,t('removed'),'font-size="28" fill="#879280"')}</svg>`;
}

function renderHotspots(){inspection.render();}
function positionHotspots(){inspection.update();}
function drawAnnotations(){inspection.update();}
function syncControls(){const state=model?.getState();if(!state)return;if(state.focus){view=parts.find(p=>p.id===state.focus.id).home;$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));}$('#isolate-part').checked=state.isolated;$('#explode-toggle').setAttribute('aria-pressed',String(state.explosion>0));$('#explode-toggle').textContent=state.explosion?'Reassemble cart':'Explode cart';$('#explode-range').value=Math.round(state.explosion*100);$('#explode-value').textContent=state.explosion?Math.round(state.explosion*100)+'% separated':'Assembled';$('#explosion-note').hidden=!state.explosion;updateSpin();}
function renderComponentTable(){$('#component-dimensions tbody').innerHTML=parts.map(p=>`<tr><td><button type="button" data-component-row="${p.id}">#${p.id} ${p.name}</button></td><td>${p.measurements.map(m=>`<span class="component-spec-row">${m.label}: <strong>${m.value}</strong>${m.status==='proposed'?' · P':''}</span>`).join('')}</td></tr>`).join('');}
function setExplosion(value){const entering=Number(value)>0&&!model?.getState().explosion;if(entering){view='iso';$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view==='iso'));}$('#isolate-part').checked=false;model?.explode(Number(value)/100);syncControls();syncURL();updateSpin();}
function updateSpin(){const spin=$('#spin');const running=model?.getState().running||false;spin.setAttribute('aria-pressed',String(running));spin.innerHTML=`<span class="spin-icon">↻</span><span>${t(running?'pause':'spin')}</span>`;}



try{model=createCart($('#cart'),state=>{frame=state;inspection.update();});model.view(view);model.highlight(selected);}catch(error){console.warn(error.message);$('#webgl-fallback').hidden=false;$('#cart').hidden=true;$$('.model-tools button,.viewbar button,.zoom-controls button,.model-tools input').forEach(el=>el.disabled=true);}

$$('[data-view]').forEach(button=>button.addEventListener('click',()=>setView(button.dataset.view)));
$('#part-detail').addEventListener('click',e=>{if(e.target.closest('#rear-sign-view'))setView('rear');if(e.target.closest('#engraving-view')){setView('front');model?.focusEngraving();}});
$('#part-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-part]');if(b)setPart(b.dataset.part);});
$('#component-select').addEventListener('change',e=>setPart(e.target.value));
$('#label-scope').addEventListener('change',e=>inspection.setScope(e.target.value));
$('#explode-toggle').addEventListener('click',()=>setExplosion(model?.getState().explosion?0:100));
$('#explode-range').addEventListener('input',e=>setExplosion(e.target.value));
$('#isolate-part').addEventListener('change',e=>{model?.isolate(e.target.checked);syncControls();syncURL();});
$('#focus-selected').addEventListener('click',()=>{model?.inspect(selected);syncControls();syncURL();});
$('#component-dimensions').addEventListener('click',e=>{const b=e.target.closest('[data-component-row]');if(b){setPart(b.dataset.componentRow);$('#explore').scrollIntoView({behavior:'smooth'});}});
$('#cutout-list').addEventListener('click',e=>{const b=e.target.closest('[data-inspect]');if(b){setPart(b.dataset.inspect);setView('top');$('#explore').scrollIntoView({behavior:'smooth'});}});
function selectPlan(e){const b=e.target.closest('[data-plan]');if(b){setPart(b.dataset.plan);setView('top');$('#explore').scrollIntoView({behavior:'smooth'});}}
$('#top-plan').addEventListener('click',selectPlan);$('#top-plan').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectPlan(e);}});
$('#part-top').addEventListener('click',()=>{$('#hide-ledge').checked=true;model?.hideLedge(true);setView('top');});
$('#dimensions').addEventListener('change',e=>{showDimensions=e.target.checked;drawAnnotations();});
$('#hide-ledge').addEventListener('change',e=>model?.hideLedge(e.target.checked));
$('#spin').addEventListener('click',()=>{model?.spin();updateSpin();});
$('#cart').addEventListener('pointerdown',()=>{updateSpin();$$('[data-view]').forEach(b=>b.classList.remove('active'));});
$('#zoom-in').addEventListener('click',()=>model?.zoom(.12));$('#zoom-out').addEventListener('click',()=>model?.zoom(-.12));$('#fit').addEventListener('click',()=>model?.fit());
$('#print').addEventListener('click',()=>{model?.stop();updateSpin();window.print();});
$('#share').addEventListener('click',async()=>{syncURL();if(model){const state=model.getState(),url=new URL(location.href);for(const key of ['yaw','pitch','zoom'])url.searchParams.set(key,state[key].toFixed(4));if(state.focus)url.searchParams.set('focus',state.focus.id);url.searchParams.set('hide',state.hide?'1':'0');url.searchParams.set('dims',showDimensions?'1':'0');history.replaceState(null,'',url);}try{await navigator.clipboard.writeText(location.href);notify(t('copied'));}catch{notify(t('copyFail'));}});
$('#save-view').addEventListener('click',()=>{
  if(!model)return;
  model.stop();updateSpin();model.draw();
  const source=$('#cart'),out=document.createElement('canvas');
  out.width=source.width;out.height=source.height+240;
  const ctx=out.getContext('2d');ctx.fillStyle='#f7f9f3';ctx.fillRect(0,0,out.width,out.height);ctx.drawImage(source,0,140);
  const scale=source.width/source.clientWidth;
  ctx.save();ctx.translate(0,140);ctx.scale(scale,scale);
  for(const path of $$('#annotations path')){ctx.strokeStyle=path.classList.contains('dimension-proposed')?'#b99754':'#609386';ctx.lineWidth=1;ctx.stroke(new Path2D(path.getAttribute('d')));}
  for(const text of $$('#annotations text')){ctx.font='10px Segoe UI, Microsoft YaHei, sans-serif';ctx.textAlign='center';ctx.lineWidth=5;ctx.lineJoin='round';ctx.strokeStyle='#f9fcf7';ctx.fillStyle=text.classList.contains('proposed-label')?'#9b681c':'#426c64';const x=Number(text.getAttribute('x')),y=Number(text.getAttribute('y'));ctx.strokeText(text.textContent,x,y);ctx.fillText(text.textContent,x,y);}
  ctx.restore();ctx.fillStyle='#163f3c';ctx.font='24px Segoe UI, Microsoft YaHei, sans-serif';ctx.fillText('STUDIO ROAST / REVISION D / mm',30,35);const part=parts.find(p=>p.id===selected);ctx.font='18px Segoe UI,sans-serif';ctx.fillText('#'+part.id+' '+part.name,30,65);ctx.font='15px Segoe UI,sans-serif';ctx.fillText(part.measurements.slice(0,2).map(m=>m.label+': '+m.value).join(' | '),30,92);ctx.fillText('Nominal assembled sizes. P = proposed. Exploded spacing is illustrative.',30,117);ctx.font='18px Segoe UI, Microsoft YaHei, sans-serif';ctx.fillText(lang==='zh'?'设计意图参考 · 最终加工图及未定尺寸须确认':'Design reference · Final shop drawings and proposed dimensions require confirmation',30,out.height-30);
  let a=$('#export-ready');if(!a){a=document.createElement('a');a.id='export-ready';a.className='text-link';$('#save-view').after(a);}
  a.download=`studio-roast-rev-d-${view}.png`;a.href=out.toDataURL('image/png');a.textContent=lang==='zh'?'下载已生成的 PNG ↓':'Download prepared PNG ↓';a.click();notify(t('saved'));
});


renderText();setView(view);
if(params.has('explode'))setExplosion(Number(params.get('explode')));
if(params.has('focus'))model?.inspect(selected);
if(params.get('isolate')==='1')model?.isolate(true);
if(params.has('yaw')&&params.has('pitch')&&params.has('zoom'))model?.restore({yaw:Number(params.get('yaw')),pitch:Number(params.get('pitch')),zoom:Number(params.get('zoom'))});
if(params.get('hide')==='1'){$('#hide-ledge').checked=true;model?.hideLedge(true);}
if(params.get('dims')==='0'){$('#dimensions').checked=false;showDimensions=false;drawAnnotations();}
window.addEventListener('beforeprint',()=>model?.draw());
window.addEventListener('afterprint',()=>model?.draw());

syncControls();inspection.render();syncURL();
