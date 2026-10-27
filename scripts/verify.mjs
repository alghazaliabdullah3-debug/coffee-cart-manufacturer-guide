// Geometry and asset invariants that protect the manufacturer handoff.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createCart} from '../docs/model.js';
import {components} from '../docs/components.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
let vertices;
const gl=new Proxy({getShaderParameter:()=>true,getProgramParameter:()=>true,getAttribLocation:()=>1,bufferData:(_target,data)=>{if(data.length>1000)vertices=data;}},{get:(obj,key)=>key in obj?obj[key]:(..._args)=>({})});
globalThis.devicePixelRatio=1;globalThis.Image=class{set src(value){}};
globalThis.ResizeObserver=class{observe() {}};
globalThis.cancelAnimationFrame=()=>{};
const canvas={clientWidth:900,clientHeight:470,width:900,height:470,getContext:()=>gl,addEventListener:()=>{}};
const model=createCart(canvas);
assert(vertices.length>10000);
assert([...vertices].every(Number.isFinite),'Mesh must contain no invalid values');
const world=[];for(let i=0;i<vertices.length;i+=8)world.push({x:vertices[i]+914.4,y:685.8-vertices[i+2],z:vertices[i+1]+575,group:vertices[i+7]});
const ledge=world.filter(v=>v.group===11),guard=world.filter(v=>v.group===10);
assert(ledge.length&&guard.length);
assert(Math.abs(Math.min(...ledge.map(v=>v.x))+304.8)<.05);
assert(Math.abs(Math.max(...ledge.map(v=>v.x))-2133.6)<.05);
assert(Math.abs(Math.max(...ledge.map(v=>v.y))-1371.6)<.05);
assert(Math.min(...ledge.map(v=>v.y))>24.9,'No serving ledge may close the operator/front edge');
assert(Math.abs(Math.max(...guard.map(v=>v.z))-1150)<.05);
// No counter top triangle may bridge the sink's open area.
for(let i=0;i<world.length;i+=3){const t=world.slice(i,i+3);if(t.every(v=>v.group===16&&Math.abs(v.z-1000)<.01)){const x=t.reduce((s,v)=>s+v.x,0)/3,y=t.reduce((s,v)=>s+v.y,0)/3;assert(!(x>1370.1&&x<1623.9&&y>220.1&&y<575.5),'Countertop must not cover opening 9');}}
for(const view of ['iso','front','rear','left','right','top']){model.view(view);for(const p of [[-304.8,25,1150],[2133.6,25,1150],[40,1371.6,1150],[55,55,0]]){const [x,y]=model.project(p);assert(x>0&&x<900&&y>0&&y<470,`${view} must fit all geometry`);}}
assert.equal(components.length,27);assert.equal(new Set(components.map(p=>p.id)).size,27);
for(const part of components){assert(part.measurements.length&&part.lines.length,`Component ${part.id} needs dimensions`);model.inspect(part.id);for(const line of part.lines)for(const point of [line.a,line.b])assert(model.project(model.scenePoint(point,part.id)).every(Number.isFinite));}
model.explode(1);assert.deepEqual(model.offsetFor(9),model.offsetFor(16),'Sink opening must stay with worktop');assert.deepEqual(model.offsetFor(8),model.offsetFor(16),'Rear holes must stay with worktop');assert.deepEqual(model.offsetFor(15),model.offsetFor(23),'Engraving must stay on walnut');
const exploded=model.geometry();for(let i=0;i<exploded.base.length;i+=8){const [x,y,z]=model.offsetFor(exploded.base[i+7]);assert(Math.abs(exploded.moved[i]-exploded.base[i]-x)<.001);assert(Math.abs(exploded.moved[i+1]-exploded.base[i+1]-z)<.001);assert(Math.abs(exploded.moved[i+2]-exploded.base[i+2]+y)<.001);}
for(const part of components){model.inspect(part.id);assert(model.project(model.scenePoint(part.point,part.id)).every(Number.isFinite));model.isolate(true);assert.equal(model.getState().isolated,true);model.isolate(false);}
model.explode(0);assert.deepEqual([...model.geometry().moved],[...model.geometry().base],'Reassembly must restore exact original geometry');
const spec=JSON.parse(fs.readFileSync(path.join(root,'docs/downloads/cart-specification.json'),'utf8'));
assert.equal(spec.units,'mm');assert.equal(spec.openings.find(p=>p.id===9).width_x,254);assert.equal(spec.openings.find(p=>p.id===9).length_y,355.6);assert.equal(spec.operator_walnut_engraving.engraving_depth,null);assert.deepEqual(spec.removed_feature_ids,[3,4,5,7]);assert.equal(spec.openings.find(p=>p.id===9).bowl_depth,null);
const html=fs.readFileSync(path.join(root,'docs/index.html'),'utf8');
const offline=fs.readFileSync(path.join(root,'docs/offline.html'),'utf8');
const bundle=offline.match(/<script type="module">([\s\S]*?)<\/script>/)?.[1];
assert(bundle,'Offline viewer needs an embedded JavaScript bundle');
new vm.Script(bundle,{filename:'offline-viewer.js'});
for(const match of html.matchAll(/(?:src|href)="([^"#?]+)"/g)){const ref=match[1];if(ref.startsWith('http'))continue;assert(fs.existsSync(path.join(root,'docs',ref)),`Missing local asset: ${ref}`);}
console.log(`PASS: ${vertices.length/8} vertices; 27 dimensioned components; attached cutouts and engraving; exact reassembly; isolated inspection; three-sided ledge; empty sink; six fitted views; local assets.`);
