import {createBrandRenderer} from './branding.js';
// One shared millimetre-based model for every view. No remote dependencies.
export function createCart(canvas, onFrame = () => {}) {
  const gl=canvas.getContext('webgl',{alpha:true,antialias:true,preserveDrawingBuffer:true});
  if(!gl) throw new Error('WebGL unavailable');
  const vs=`attribute vec3 aPosition;attribute vec3 aNormal;attribute float aMaterial;attribute float aGroup;uniform mat4 uMVP;varying vec3 vP;varying vec3 vN;varying float vM;varying float vG;void main(){vP=aPosition;vN=aNormal;vM=aMaterial;vG=aGroup;gl_Position=uMVP*vec4(aPosition,1.0);}`;
  const fs=`precision highp float;varying vec3 vP;varying vec3 vN;varying float vM;varying float vG;uniform vec3 uEye;uniform float uSelected;uniform float uHideLedge;void main(){if(uHideLedge>.5 && vG>9.5 && vG<11.5)discard;vec3 n=normalize(vN);vec3 v=normalize(uEye-vP);vec3 l=normalize(vec3(-.5,1.0,.8));float d=max(dot(n,l),0.0);vec3 r=reflect(-v,n);vec3 color;if(vM<.5){float band1=pow(max(0.0,1.0-abs(r.x+.22)*1.35),7.0);float band2=pow(max(0.0,1.0-abs(r.x-.65)*2.5),9.0);float env=.42+.24*(r.y*.5+.5)+.25*band1+.13*band2;float grain=sin(vP.y*5.1+vP.x*.01)*.004;color=vec3(.87,.90,.92)*(env+grain)+vec3(.14)*d;}else if(vM<1.5){float grain=sin(vP.z*.17+sin(vP.x*.012)*1.7+sin(vP.z*.051)*2.0)*.5+.5;grain+=sin(vP.z*.81+vP.x*.013)*.11;color=mix(vec3(.23,.105,.050),vec3(.45,.245,.125),grain*.65+.18)*(.65+.47*d);color+=pow(max(dot(reflect(-l,n),v),0.0),25.0)*.12;}else if(vM<2.5){color=vec3(.055,.060,.063)*(.55+.7*d);}else{color=vec3(.025,.034,.041)*(.7+.3*d);}if(vM<.5)color+=pow(max(dot(reflect(-l,n),v),0.0),42.0)*.40;if(abs(vG-10.0)<.1)color*=.72;if(abs(vG-11.0)<.1)color*=1.12;if(uSelected>.5 && abs(vG-uSelected)<.1)color=mix(color,vec3(.10,.62,.56),.55);gl_FragColor=vec4(color,1.0);}`;
  function shader(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;}
  const program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vs));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fs));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));gl.useProgram(program);
  const data=[]; let group=0;
  const sub=(a,b)=>a.map((x,i)=>x-b[i]);const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const norm=a=>{let d=Math.hypot(...a)||1;return a.map(x=>x/d);};
  const dot=(a,b)=>a.reduce((t,x,i)=>t+x*b[i],0);
  const L=1828.8,D=1066.8,P=304.8,R=40;
  const convert=p=>[p[0]-L/2,p[2]-575,(D+P)/2-p[1]];
  function tri(a,b,c,m=0){a=convert(a);b=convert(b);c=convert(c);let n=norm(cross(sub(b,a),sub(c,a)));for(let p of [a,b,c])data.push(...p,...n,m,group);}
  function quad(a,b,c,d,m=0){tri(a,b,c,m);tri(a,c,d,m);}
  function box(x,y,z,w,d,h,m=0){let a=[x,y,z],b=[x+w,y,z],c=[x+w,y+d,z],e=[x,y+d,z],f=[x,y,z+h],g=[x+w,y,z+h],j=[x+w,y+d,z+h],k=[x,y+d,z+h];quad(f,g,j,k,m);quad(e,c,b,a,m);quad(a,b,g,f,m);quad(b,c,j,g,m);quad(c,e,k,j,m);quad(e,a,f,k,m);}
  function beam(a,b,r=6,m=0,n=10){let axis=norm(sub(b,a)),ref=Math.abs(axis[2])<.8?[0,0,1]:[0,1,0],u=norm(cross(axis,ref)),v=cross(axis,u);let ring=(p,t)=>p.map((q,j)=>q+r*(u[j]*Math.cos(t)+v[j]*Math.sin(t)));for(let i=0;i<n;i++){let t=i*2*Math.PI/n,t2=(i+1)*2*Math.PI/n;quad(ring(a,t),ring(a,t2),ring(b,t2),ring(b,t),m);tri(a,ring(a,t2),ring(a,t),m);tri(b,ring(b,t),ring(b,t2),m);}}
  function disc(x,y,z,r,axis='z',m=3,n=48){const pt=t=>axis==='z'?[x+r*Math.cos(t),y+r*Math.sin(t),z]:[x+r*Math.cos(t),y,z+r*Math.sin(t)];for(let i=0;i<n;i++)tri([x,y,z],pt(i*2*Math.PI/n),pt((i+1)*2*Math.PI/n),m);}
  function ring(x,y,z,ro,ri,axis='z',m=0,n=48){const pt=(t,r)=>axis==='z'?[x+r*Math.cos(t),y+r*Math.sin(t),z]:[x+r*Math.cos(t),y,z+r*Math.sin(t)];for(let i=0;i<n;i++){let a=i*2*Math.PI/n,b=(i+1)*2*Math.PI/n;quad(pt(a,ro),pt(b,ro),pt(b,ri),pt(a,ri),m);}}
  function strip(path,width,z,h,m=0){let left=[],right=[];for(let i=0;i<path.length;i++){let a=path[Math.max(i-1,0)],b=path[Math.min(i+1,path.length-1)],dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy);left.push([path[i][0]-dy/len*width/2,path[i][1]+dx/len*width/2]);right.push([path[i][0]+dy/len*width/2,path[i][1]-dx/len*width/2]);}let p=(q,h)=>[q[0],q[1],h];for(let i=0;i<path.length-1;i++){quad(p(left[i],z+h),p(right[i],z+h),p(right[i+1],z+h),p(left[i+1],z+h),m);quad(p(left[i],z),p(left[i],z+h),p(left[i+1],z+h),p(left[i+1],z),m);quad(p(right[i+1],z),p(right[i+1],z+h),p(right[i],z+h),p(right[i],z),m);}for(let i of [0,path.length-1])quad(p(left[i],z),p(right[i],z),p(right[i],z+h),p(left[i],z+h),m);}
  // Revision C: 72 x 42 inch body; proposed modules 580 / 220 / 520 / 508.8 mm.
  box(0,0,100,L,D,30);box(0,D-18,130,L,18,845);box(0,20,130,18,D-38,845);box(L-18,20,130,18,D-38,845);
  for(let x of [10,L-35])for(let y of [12,D-45])box(x,y,100,25,30,875);
  box(800,25,130,20,D-65,845);box(1300,25,130,20,D-65,845);box(820,25,130,480,D-65,20);box(820,D-63,150,480,5,805);box(820,0,955,480,25,20);
  box(30,0,130,260,20,635);box(300,0,130,265,20,635);box(30,-3,780,750,25,175,1);
  box(590,0,130,195,20,635);box(605,-2,130,165,20,225);
  for(let z of [635,470]){disc(690,-3,z,52,'y',3);ring(690,-7,z,59,45,'y',0);ring(690,-8,z,46,41,'y',0);for(let a of [-2.5,-1.57,-.65]){let p=[690+40*Math.cos(a),-10,z+40*Math.sin(a)],q=[690+12*Math.cos(a),-10,z+12*Math.sin(a)];beam(p,q,2.7);}}
  // Upper service fascia and lower sink-base door; owner supplies sink.
  box(1340,0,545,L-1370,20,410);box(1340,0,130,L-1370,20,405);
  box(1360,-3,504,L-1410,8,12,2);box(1360,-7,513,L-1410,8,5);
  // Counter split into four pieces so the 254 x 355.6 sink is a real opening.
  const sink={x:1370,y:220,l:254,w:355.6,installed:false};
  box(0,0,975,sink.x,D,25);box(sink.x+sink.l,0,975,L-sink.x-sink.l,D,25);
  box(sink.x,0,975,sink.l,sink.y,25);box(sink.x,sink.y+sink.w,975,sink.l,D-sink.y-sink.w,25);
  function inset(x,y,w,d,mode='well'){
    box(x-3,y-3,1000.2,w+6,d+6,1.0);box(x,y,1001.5,w,d,.7,mode==='tray'?0:3);
    if(mode==='tray')for(let q=y+12;q<y+d-5;q+=26)box(x+6,q,1003,w-12,4,2);
  }
  // Removed features 3, 4, 5 and 7. Feature 6 is the front-left knockbox.
  group=6; inset(90,90,138,150);beam([96,165,1008],[222,165,1008],9,2,16);
  group=1; inset(1210,270,100,230);
  group=2; disc(1260,155,1001.5,45);ring(1260,155,1002,50,45);
  group=8; for(let x of [660,1100,1540]){disc(x,D-170,1001.5,15);ring(x,D-170,1002,17,15);}
  // Feature 9 is a through-cutout only. No bowl, basin walls, bottom or drain.
  // The dark plane is the cabinet base far below the opening.
  group=9; box(1325,25,130.2,L-1350,D-50,.5,3);
  // Full side guard: steel along rear plus BOTH ENTIRE ends, operator edge open.
  group=10; let guard=[[0,25],[0,D-R]];
  for(let i=1;i<=16;i++){let a=Math.PI-i*Math.PI/32;guard.push([R+R*Math.cos(a),D-R+R*Math.sin(a)]);}
  guard.push([L-R,D]);for(let i=1;i<=16;i++){let a=Math.PI/2-i*Math.PI/32;guard.push([L-R+R*Math.cos(a),D-R+R*Math.sin(a)]);}guard.push([L,25]);
  strip(guard,3,1000,150);strip(guard,10,1145,5);
  // 12-inch outward serving shelf at guard top; open along operator edge.
  group=11; const rc=R+P/2;
  let serving=[[-P/2,25],[-P/2,D-R]];
  for(let i=1;i<=24;i++){let a=Math.PI-i*Math.PI/48;serving.push([R+rc*Math.cos(a),D-R+rc*Math.sin(a)]);}
  serving.push([L-R,D+P/2]);for(let i=1;i<=24;i++){let a=Math.PI/2-i*Math.PI/48;serving.push([L-R+rc*Math.cos(a),D-R+rc*Math.sin(a)]);}serving.push([L+P/2,25]);
  strip(serving,P,1130,20);
  for(let x of [150,L/2,L-150])beam([x,D,1020],[x,D+P-25,1125],7);
  for(let y of [200,D-220]){beam([0,y,1020],[-P+25,y,1125],7);beam([L,y,1020],[L+P-25,y,1125],7);}
  group=12; let rail=[[-55,D-250],[-55,D]];
  for(let i=1;i<=20;i++){let a=Math.PI-i*Math.PI/40;rail.push([55*Math.cos(a),D+55*Math.sin(a)]);}
  rail.push([L,D+55]);for(let i=1;i<=20;i++){let a=Math.PI/2-i*Math.PI/40;rail.push([L+55*Math.cos(a),D+55*Math.sin(a)]);}rail.push([L+55,D-250]);strip(rail,50,975,25,1);
  for(let x of [140,L/2,L-140]){box(x,D,865,18,8,105);beam([x+9,D+8,870],[x+9,D+55,972],5);}
  // Original walnut folding wing stowed against left end under serving shelf.
  group=13; box(-25,0,675,25,420,300,1);beam([-28,0,975],[-28,420,975],5);
  for(let y of [45,365])beam([-34,y,710],[-34,y,960],5);
  // Four swivel casters, including forks and hubs.
  group=0; for(let x of [55,L-55])for(let y of [55,D-55]){beam([x,y,70],[x,y,101],14);box(x-20,y-22,95,40,44,5);beam([x,y-19,35],[x,y-19,78],7);beam([x,y+19,35],[x,y+19,78],7);beam([x,y-13,35],[x,y+13,35],35,2,36);disc(x,y-13.5,35,15,'y',0);disc(x,y+13.5,35,15,'y',0);}

  const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(data),gl.STATIC_DRAW);
  function bindCart(){gl.useProgram(program);gl.bindBuffer(gl.ARRAY_BUFFER,buffer);for(const [name,size,offset] of [['aPosition',3,0],['aNormal',3,12],['aMaterial',1,24],['aGroup',1,28]]){const loc=gl.getAttribLocation(program,name);gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,size,gl.FLOAT,false,32,offset);}}

  const locM=gl.getUniformLocation(program,'uMVP'),locE=gl.getUniformLocation(program,'uEye'),locS=gl.getUniformLocation(program,'uSelected'),locH=gl.getUniformLocation(program,'uHideLedge');
  gl.enable(gl.DEPTH_TEST);gl.disable(gl.CULL_FACE);gl.clearColor(0,0,0,0);
  function mul(a,b){const o=new Float32Array(16);for(let i=0;i<4;i++)for(let j=0;j<4;j++)for(let k=0;k<4;k++)o[j*4+i]+=a[k*4+i]*b[j*4+k];return o;}
  function lookAt(e,t){const z=norm(sub(e,t)),x=norm(cross([0,1,0],z)),y=cross(z,x);return new Float32Array([x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-dot(x,e),-dot(y,e),-dot(z,e),1]);}
  function ortho(l,r,b,t,n,f){return new Float32Array([2/(r-l),0,0,0,0,2/(t-b),0,0,0,0,-2/(f-n),0,-(r+l)/(r-l),-(t+b)/(t-b),-(f+n)/(f-n),1]);}
  const transform=(m,p)=>[0,1,2,3].map(i=>m[i]*p[0]+m[4+i]*p[1]+m[8+i]*p[2]+m[12+i]);
  let yaw=-.56,pitch=.40,zoom=1,focus=null,selected=0,hide=false,running=false,last=0,raf=0,mvp;
  const corners=[];for(const x of [-P-130,L+P+180])for(const y of [-130,D+P+150])for(const z of [0,1250])corners.push(convert([x,y,z]));
  function draw(){const dpr=Math.min(devicePixelRatio||1,2),w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);}gl.viewport(0,0,canvas.width,canvas.height);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);const target=focus?convert([405,0,867.5]):[0,0,0];const eye=[Math.sin(yaw)*Math.cos(pitch)*4000,Math.sin(pitch)*4000,Math.cos(yaw)*Math.cos(pitch)*4000].map((v,i)=>v+target[i]),view=lookAt(eye,target);let mx=0,my=0;const fitCorners=focus?[[0,-30,750],[810,-30,750],[0,140,1000],[810,140,1000]].map(convert):corners;for(const p of fitCorners){const q=transform(view,p);mx=Math.max(mx,Math.abs(q[0]));my=Math.max(my,Math.abs(q[1]));}let width=Math.max(mx*2,my*2*w/h)*1.08/zoom,height=width*h/w;mvp=mul(ortho(-width/2,width/2,-height/2,height/2,1,9000),view);bindCart();gl.uniformMatrix4fv(locM,false,mvp);gl.uniform3fv(locE,eye);gl.uniform1f(locS,selected);gl.uniform1f(locH,hide?1:0);gl.drawArrays(gl.TRIANGLES,0,data.length/8);renderLED(mvp);onFrame({yaw,pitch,zoom,running,focus});}
  const renderLED=createBrandRenderer(gl,convert,draw);
  function project(p){if(!mvp)return [0,0];const q=transform(mvp,convert(p));return[(q[0]/q[3]+1)*canvas.clientWidth/2,(1-q[1]/q[3])*canvas.clientHeight/2];}
  function animate(t){if(!running)return;const dt=last?Math.min(t-last,40):0;last=t;yaw+=dt*.00022;draw();raf=requestAnimationFrame(animate);}
  function stop(){running=false;last=0;cancelAnimationFrame(raf);draw();}
  let drag=null;
  canvas.addEventListener('pointerdown',e=>{stop();drag={x:e.clientX,y:e.clientY,yaw,pitch};canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(!drag)return;yaw=drag.yaw-(e.clientX-drag.x)*.009;pitch=Math.max(.02,Math.min(1.565,drag.pitch+(e.clientY-drag.y)*.007));draw();});
  canvas.addEventListener('pointerup',()=>{drag=null;});canvas.addEventListener('pointercancel',()=>{drag=null;});
  canvas.addEventListener('wheel',e=>{e.preventDefault();zoom=Math.max(.65,Math.min(1.8,zoom-e.deltaY*.0006));draw();},{passive:false});
  canvas.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-','0'].includes(e.key)){e.preventDefault();stop();if(e.key==='ArrowLeft')yaw-=.15;if(e.key==='ArrowRight')yaw+=.15;if(e.key==='ArrowUp')pitch=Math.min(1.565,pitch+.1);if(e.key==='ArrowDown')pitch=Math.max(.02,pitch-.1);if(e.key==='+')zoom=Math.min(1.8,zoom+.1);if(e.key==='-')zoom=Math.max(.65,zoom-.1);if(e.key==='0')zoom=1;draw();}});
  const observer=new ResizeObserver(draw);observer.observe(canvas);
  return {draw,project,canvas,vertexCount:data.length/8,
    view(name){stop();focus=null;const views={iso:[-.56,.40],front:[0,.12],rear:[Math.PI,.28],left:[-Math.PI/2,.30],right:[Math.PI/2,.30],top:[0,1.565]};[yaw,pitch]=views[name]||views.iso;zoom=1;draw();},
    focusEngraving(){stop();focus='engraving';yaw=0;pitch=.03;zoom=1;draw();},
    restore(s){if([s.yaw,s.pitch,s.zoom].every(Number.isFinite)){yaw=s.yaw;pitch=Math.max(.02,Math.min(1.565,s.pitch));zoom=Math.max(.65,Math.min(1.8,s.zoom));draw();}},
    highlight(id){selected=Number(id)||0;draw();},
    hideLedge(v){hide=v;draw();},
    fit(){zoom=1;draw();},
    zoom(v){zoom=Math.max(.65,Math.min(1.8,zoom+v));draw();},
    spin(){if(running)stop();else{running=true;last=0;raf=requestAnimationFrame(animate);}return running;},
    stop, getState:()=>({yaw,pitch,zoom,running,hide,selected,focus})
  };
}
