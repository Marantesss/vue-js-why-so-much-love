(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function zn(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function at(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=He(o)?cm(o):at(o);if(r)for(const l in r)t[l]=r[l]}return t}else{if(He(e))return e;if(je(e))return e}}const lm=/;(?![^(]*\))/g,im=/:([^]+)/,am=/\/\*.*?\*\//gs;function cm(e){const t={};return e.replace(am,"").split(lm).forEach(n=>{if(n){const o=n.split(im);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function We(e){let t="";if(He(e))t=e;else if(ie(e))for(let n=0;n<e.length;n++){const o=We(e[n]);o&&(t+=o+" ")}else if(je(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Ie(e){if(!e)return null;let{class:t,style:n}=e;return t&&!He(t)&&(e.class=We(t)),n&&(e.style=at(n)),e}const um="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",pm="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Ap=zn(um),dm=zn(pm),fm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hm=zn(fm);function Sp(e){return!!e||e===""}const et=e=>He(e)?e:e==null?"":ie(e)||je(e)&&(e.toString===Ip||!pe(e.toString))?JSON.stringify(e,Fp,2):String(e),Fp=(e,t)=>t&&t.__v_isRef?Fp(e,t.value):us(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r])=>(n[`${o} =>`]=r,n),{})}:Bp(t)?{[`Set(${t.size})`]:[...t.values()]}:je(t)&&!ie(t)&&!Tp(t)?String(t):t,Re=Object.freeze({}),Ms=Object.freeze([]),_t=()=>{},$p=()=>!1,mm=/^on[^a-z]/,Ko=e=>mm.test(e),Tr=e=>e.startsWith("onUpdate:"),Ue=Object.assign,na=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ym=Object.prototype.hasOwnProperty,Ee=(e,t)=>ym.call(e,t),ie=Array.isArray,us=e=>Go(e)==="[object Map]",Bp=e=>Go(e)==="[object Set]",gm=e=>Go(e)==="[object RegExp]",pe=e=>typeof e=="function",He=e=>typeof e=="string",sa=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",oa=e=>je(e)&&pe(e.then)&&pe(e.catch),Ip=Object.prototype.toString,Go=e=>Ip.call(e),ra=e=>Go(e).slice(8,-1),Tp=e=>Go(e)==="[object Object]",la=e=>He(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kr=zn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vm=zn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),tl=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_m=/-(\w)/g,on=tl(e=>e.replace(_m,(t,n)=>n?n.toUpperCase():"")),bm=/\B([A-Z])/g,gn=tl(e=>e.replace(bm,"-$1").toLowerCase()),gs=tl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qn=tl(e=>e?`on${gs(e)}`:""),$o=(e,t)=>!Object.is(e,t),ns=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Or=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},wm=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Cm=e=>{const t=He(e)?Number(e):NaN;return isNaN(t)?e:t};let ac;const Op=()=>ac||(ac=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mr(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let Dt;class Mp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!t&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Dt;try{return Dt=this,t()}finally{Dt=n}}else Mr("cannot run an inactive effect scope.")}on(){Dt=this}off(){Dt=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function km(e){return new Mp(e)}function Em(e,t=Dt){t&&t.active&&t.effects.push(e)}function ia(){return Dt}function jp(e){Dt?Dt.cleanups.push(e):Mr("onScopeDispose() is called when there is no active effect scope to be associated with.")}const aa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Pp=e=>(e.w&Rn)>0,Lp=e=>(e.n&Rn)>0,xm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Rn},Dm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];Pp(r)&&!Lp(r)?r.delete(e):t[n++]=r,r.w&=~Rn,r.n&=~Rn}t.length=n}},jr=new WeakMap;let po=0,Rn=1;const ei=30;let ht;const ps=Symbol("iterate"),ti=Symbol("Map key iterate");class ca{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Em(this,o)}run(){if(!this.active)return this.fn();let t=ht,n=In;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ht,ht=this,In=!0,Rn=1<<++po,po<=ei?xm(this):cc(this),this.fn()}finally{po<=ei&&Dm(this),Rn=1<<--po,ht=this.parent,In=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ht===this?this.deferStop=!0:this.active&&(cc(this),this.onStop&&this.onStop(),this.active=!1)}}function cc(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let In=!0;const Vp=[];function _s(){Vp.push(In),In=!1}function bs(){const e=Vp.pop();In=e===void 0?!0:e}function Ct(e,t,n){if(In&&ht){let o=jr.get(e);o||jr.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=aa()),Rp(r,{effect:ht,target:e,type:t,key:n})}}function Rp(e,t){let n=!1;po<=ei?Lp(e)||(e.n|=Rn,n=!Pp(e)):n=!e.has(ht),n&&(e.add(ht),ht.deps.push(e),ht.onTrack&&ht.onTrack(Object.assign({effect:ht},t)))}function vn(e,t,n,o,r,l){const i=jr.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&ie(e)){const u=Number(o);i.forEach((p,d)=>{(d==="length"||d>=u)&&a.push(p)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":ie(e)?la(n)&&a.push(i.get("length")):(a.push(i.get(ps)),us(e)&&a.push(i.get(ti)));break;case"delete":ie(e)||(a.push(i.get(ps)),us(e)&&a.push(i.get(ti)));break;case"set":us(e)&&a.push(i.get(ps));break}const c={target:e,type:t,key:n,newValue:o,oldValue:r,oldTarget:l};if(a.length===1)a[0]&&ni(a[0],c);else{const u=[];for(const p of a)p&&u.push(...p);ni(aa(u),c)}}function ni(e,t){const n=ie(e)?e:[...e];for(const o of n)o.computed&&uc(o,t);for(const o of n)o.computed||uc(o,t)}function uc(e,t){(e!==ht||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ue({effect:e},t)),e.scheduler?e.scheduler():e.run())}function Am(e,t){var n;return(n=jr.get(e))===null||n===void 0?void 0:n.get(t)}const Sm=zn("__proto__,__v_isRef,__isVue"),Np=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(sa)),Fm=nl(),$m=nl(!1,!0),Bm=nl(!0),Im=nl(!0,!0),pc=Tm();function Tm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=fe(this);for(let l=0,i=this.length;l<i;l++)Ct(o,"get",l+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(fe)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_s();const o=fe(this)[t].apply(this,n);return bs(),o}}),e}function Om(e){const t=fe(this);return Ct(t,"has",e),t.hasOwnProperty(e)}function nl(e=!1,t=!1){return function(o,r,l){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&l===(e?t?Kp:Yp:t?Zp:Up).get(o))return o;const i=ie(o);if(!e){if(i&&Ee(pc,r))return Reflect.get(pc,r,l);if(r==="hasOwnProperty")return Om}const a=Reflect.get(o,r,l);return(sa(r)?Np.has(r):Sm(r))||(e||Ct(o,"get",r),t)?a:Be(a)?i&&la(r)?a:a.value:je(a)?e?en(a):ze(a):a}}const Mm=Hp(),jm=Hp(!0);function Hp(e=!1){return function(n,o,r,l){let i=n[o];if(Nn(i)&&Be(i)&&!Be(r))return!1;if(!e&&(!Pr(r)&&!Nn(r)&&(i=fe(i),r=fe(r)),!ie(n)&&Be(i)&&!Be(r)))return i.value=r,!0;const a=ie(n)&&la(o)?Number(o)<n.length:Ee(n,o),c=Reflect.set(n,o,r,l);return n===fe(l)&&(a?$o(r,i)&&vn(n,"set",o,r,i):vn(n,"add",o,r)),c}}function Pm(e,t){const n=Ee(e,t),o=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&vn(e,"delete",t,void 0,o),r}function Lm(e,t){const n=Reflect.has(e,t);return(!sa(t)||!Np.has(t))&&Ct(e,"has",t),n}function Vm(e){return Ct(e,"iterate",ie(e)?"length":ps),Reflect.ownKeys(e)}const Wp={get:Fm,set:Mm,deleteProperty:Pm,has:Lm,ownKeys:Vm},zp={get:Bm,set(e,t){return Mr(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Mr(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Rm=Ue({},Wp,{get:$m,set:jm}),Nm=Ue({},zp,{get:Im}),ua=e=>e,sl=e=>Reflect.getPrototypeOf(e);function ir(e,t,n=!1,o=!1){e=e.__v_raw;const r=fe(e),l=fe(t);n||(t!==l&&Ct(r,"get",t),Ct(r,"get",l));const{has:i}=sl(r),a=o?ua:n?pa:Bo;if(i.call(r,t))return a(e.get(t));if(i.call(r,l))return a(e.get(l));e!==r&&e.get(t)}function ar(e,t=!1){const n=this.__v_raw,o=fe(n),r=fe(e);return t||(e!==r&&Ct(o,"has",e),Ct(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function cr(e,t=!1){return e=e.__v_raw,!t&&Ct(fe(e),"iterate",ps),Reflect.get(e,"size",e)}function dc(e){e=fe(e);const t=fe(this);return sl(t).has.call(t,e)||(t.add(e),vn(t,"add",e,e)),this}function fc(e,t){t=fe(t);const n=fe(this),{has:o,get:r}=sl(n);let l=o.call(n,e);l?qp(n,o,e):(e=fe(e),l=o.call(n,e));const i=r.call(n,e);return n.set(e,t),l?$o(t,i)&&vn(n,"set",e,t,i):vn(n,"add",e,t),this}function hc(e){const t=fe(this),{has:n,get:o}=sl(t);let r=n.call(t,e);r?qp(t,n,e):(e=fe(e),r=n.call(t,e));const l=o?o.call(t,e):void 0,i=t.delete(e);return r&&vn(t,"delete",e,void 0,l),i}function mc(){const e=fe(this),t=e.size!==0,n=us(e)?new Map(e):new Set(e),o=e.clear();return t&&vn(e,"clear",void 0,void 0,n),o}function ur(e,t){return function(o,r){const l=this,i=l.__v_raw,a=fe(i),c=t?ua:e?pa:Bo;return!e&&Ct(a,"iterate",ps),i.forEach((u,p)=>o.call(r,c(u),c(p),l))}}function pr(e,t,n){return function(...o){const r=this.__v_raw,l=fe(r),i=us(l),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=r[e](...o),p=n?ua:t?pa:Bo;return!t&&Ct(l,"iterate",c?ti:ps),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[p(d[0]),p(d[1])]:p(d),done:f}},[Symbol.iterator](){return this}}}}function Cn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${gs(e)} operation ${n}failed: target is readonly.`,fe(this))}return e==="delete"?!1:this}}function Hm(){const e={get(l){return ir(this,l)},get size(){return cr(this)},has:ar,add:dc,set:fc,delete:hc,clear:mc,forEach:ur(!1,!1)},t={get(l){return ir(this,l,!1,!0)},get size(){return cr(this)},has:ar,add:dc,set:fc,delete:hc,clear:mc,forEach:ur(!1,!0)},n={get(l){return ir(this,l,!0)},get size(){return cr(this,!0)},has(l){return ar.call(this,l,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:ur(!0,!1)},o={get(l){return ir(this,l,!0,!0)},get size(){return cr(this,!0)},has(l){return ar.call(this,l,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=pr(l,!1,!1),n[l]=pr(l,!0,!1),t[l]=pr(l,!1,!0),o[l]=pr(l,!0,!0)}),[e,n,t,o]}const[Wm,zm,qm,Um]=Hm();function ol(e,t){const n=t?e?Um:qm:e?zm:Wm;return(o,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Ee(n,r)&&r in o?n:o,r,l)}const Zm={get:ol(!1,!1)},Ym={get:ol(!1,!0)},Km={get:ol(!0,!1)},Gm={get:ol(!0,!0)};function qp(e,t,n){const o=fe(n);if(o!==n&&t.call(e,o)){const r=ra(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Up=new WeakMap,Zp=new WeakMap,Yp=new WeakMap,Kp=new WeakMap;function Xm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jm(e){return e.__v_skip||!Object.isExtensible(e)?0:Xm(ra(e))}function ze(e){return Nn(e)?e:rl(e,!1,Wp,Zm,Up)}function Qm(e){return rl(e,!1,Rm,Ym,Zp)}function en(e){return rl(e,!0,zp,Km,Yp)}function Ts(e){return rl(e,!0,Nm,Gm,Kp)}function rl(e,t,n,o,r){if(!je(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=r.get(e);if(l)return l;const i=Jm(e);if(i===0)return e;const a=new Proxy(e,i===2?o:n);return r.set(e,a),a}function ds(e){return Nn(e)?ds(e.__v_raw):!!(e&&e.__v_isReactive)}function Nn(e){return!!(e&&e.__v_isReadonly)}function Pr(e){return!!(e&&e.__v_isShallow)}function Lr(e){return ds(e)||Nn(e)}function fe(e){const t=e&&e.__v_raw;return t?fe(t):e}function ll(e){return Or(e,"__v_skip",!0),e}const Bo=e=>je(e)?ze(e):e,pa=e=>je(e)?en(e):e;function da(e){In&&ht&&(e=fe(e),Rp(e.dep||(e.dep=aa()),{target:e,type:"get",key:"value"}))}function fa(e,t){e=fe(e);const n=e.dep;n&&ni(n,{target:e,type:"set",key:"value",newValue:t})}function Be(e){return!!(e&&e.__v_isRef===!0)}function z(e){return Gp(e,!1)}function rn(e){return Gp(e,!0)}function Gp(e,t){return Be(e)?e:new ey(e,t)}class ey{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:fe(t),this._value=n?t:Bo(t)}get value(){return da(this),this._value}set value(t){const n=this.__v_isShallow||Pr(t)||Nn(t);t=n?t:fe(t),$o(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Bo(t),fa(this,t))}}function E(e){return Be(e)?e.value:e}const ty={get:(e,t,n)=>E(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return Be(r)&&!Be(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Xp(e){return ds(e)?e:new Proxy(e,ty)}class ny{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>da(this),()=>fa(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function Jp(e){return new ny(e)}function sy(e){Lr(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ie(e)?new Array(e.length):{};for(const n in e)t[n]=ry(e,n);return t}class oy{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Am(fe(this._object),this._key)}}function ry(e,t,n){const o=e[t];return Be(o)?o:new oy(e,t,n)}var Qp;class ly{constructor(t,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qp]=!1,this._dirty=!0,this.effect=new ca(t,()=>{this._dirty||(this._dirty=!0,fa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=fe(this);return da(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Qp="__v_isReadonly";function iy(e,t,n=!1){let o,r;const l=pe(e);l?(o=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,r=e.set);const i=new ly(o,r,l||!r,n);return t&&!n&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const fs=[];function Er(e){fs.push(e)}function xr(){fs.pop()}function j(e,...t){_s();const n=fs.length?fs[fs.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=ay();if(o)yn(o,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:l})=>`at <${yl(n,l.type)}>`).join(`
`),r]);else{const l=[`[Vue warn]: ${e}`,...t];r.length&&l.push(`
`,...cy(r)),console.warn(...l)}bs()}function ay(){let e=fs[fs.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function cy(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...uy(n))}),t}function uy({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,r=` at <${yl(e.component,e.type,o)}`,l=">"+n;return e.props?[r,...py(e.props),l]:[r+l]}function py(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...ed(o,e[o]))}),n.length>3&&t.push(" ..."),t}function ed(e,t,n){return He(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Be(t)?(t=ed(e,fe(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):pe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=fe(t),n?t:[`${e}=`,t])}function dy(e,t){e!==void 0&&(typeof e!="number"?j(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&j(`${t} is NaN - the duration expression might be incorrect.`))}const ha={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function yn(e,t,n,o){let r;try{r=o?e(...o):e()}catch(l){il(l,t,n)}return r}function Pt(e,t,n,o){if(pe(e)){const l=yn(e,t,n,o);return l&&oa(l)&&l.catch(i=>{il(i,t,n)}),l}const r=[];for(let l=0;l<e.length;l++)r.push(Pt(e[l],t,n,o));return r}function il(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let l=t.parent;const i=t.proxy,a=ha[n];for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,i,a)===!1)return}l=l.parent}const c=t.appContext.config.errorHandler;if(c){yn(c,null,10,[e,i,a]);return}}fy(e,n,r,o)}function fy(e,t,n,o=!0){{const r=ha[t];if(n&&Er(n),j(`Unhandled error${r?` during execution of ${r}`:""}`),n&&xr(),o)throw e;console.error(e)}}let Io=!1,si=!1;const lt=[];let Jt=0;const js=[];let Xt=null,Dn=0;const td=Promise.resolve();let ma=null;const hy=100;function it(e){const t=ma||td;return e?t.then(this?e.bind(this):e):t}function my(e){let t=Jt+1,n=lt.length;for(;t<n;){const o=t+n>>>1;To(lt[o])<e?t=o+1:n=o}return t}function al(e){(!lt.length||!lt.includes(e,Io&&e.allowRecurse?Jt+1:Jt))&&(e.id==null?lt.push(e):lt.splice(my(e.id),0,e),nd())}function nd(){!Io&&!si&&(si=!0,ma=td.then(rd))}function yy(e){const t=lt.indexOf(e);t>Jt&&lt.splice(t,1)}function sd(e){ie(e)?js.push(...e):(!Xt||!Xt.includes(e,e.allowRecurse?Dn+1:Dn))&&js.push(e),nd()}function yc(e,t=Io?Jt+1:0){for(e=e||new Map;t<lt.length;t++){const n=lt[t];if(n&&n.pre){if(ya(e,n))continue;lt.splice(t,1),t--,n()}}}function od(e){if(js.length){const t=[...new Set(js)];if(js.length=0,Xt){Xt.push(...t);return}for(Xt=t,e=e||new Map,Xt.sort((n,o)=>To(n)-To(o)),Dn=0;Dn<Xt.length;Dn++)ya(e,Xt[Dn])||Xt[Dn]();Xt=null,Dn=0}}const To=e=>e.id==null?1/0:e.id,gy=(e,t)=>{const n=To(e)-To(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function rd(e){si=!1,Io=!0,e=e||new Map,lt.sort(gy);const t=n=>ya(e,n);try{for(Jt=0;Jt<lt.length;Jt++){const n=lt[Jt];if(n&&n.active!==!1){if(t(n))continue;yn(n,null,14)}}}finally{Jt=0,lt.length=0,od(e),Io=!1,ma=null,(lt.length||js.length)&&rd(e)}}function ya(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>hy){const o=t.ownerInstance,r=o&&Po(o.type);return j(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let Tn=!1;const Bs=new Set;Op().__VUE_HMR_RUNTIME__={createRecord:Cl(ld),rerender:Cl(by),reload:Cl(wy)};const vs=new Map;function vy(e){const t=e.type.__hmrId;let n=vs.get(t);n||(ld(t,e.type),n=vs.get(t)),n.instances.add(e)}function _y(e){vs.get(e.type.__hmrId).instances.delete(e)}function ld(e,t){return vs.has(e)?!1:(vs.set(e,{initialDef:go(t),instances:new Set}),!0)}function go(e){return Rd(e)?e.__vccOpts:e}function by(e,t){const n=vs.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(o=>{t&&(o.render=t,go(o.type).render=t),o.renderCache=[],Tn=!0,o.update(),Tn=!1}))}function wy(e,t){const n=vs.get(e);if(!n)return;t=go(t),gc(n.initialDef,t);const o=[...n.instances];for(const r of o){const l=go(r.type);Bs.has(l)||(l!==n.initialDef&&gc(l,t),Bs.add(l)),r.appContext.optionsCache.delete(r.type),r.ceReload?(Bs.add(l),r.ceReload(t.styles),Bs.delete(l)):r.parent?al(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}sd(()=>{for(const r of o)Bs.delete(go(r.type))})}function gc(e,t){Ue(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function Cl(e){return(t,n)=>{try{return e(t,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Qt,fo=[],oi=!1;function Xo(e,...t){Qt?Qt.emit(e,...t):oi||fo.push({event:e,args:t})}function id(e,t){var n,o;Qt=e,Qt?(Qt.enabled=!0,fo.forEach(({event:r,args:l})=>Qt.emit(r,...l)),fo=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{id(l,t)}),setTimeout(()=>{Qt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,oi=!0,fo=[])},3e3)):(oi=!0,fo=[])}function Cy(e,t){Xo("app:init",e,t,{Fragment:$e,Text:er,Comment:tt,Static:Dr})}function ky(e){Xo("app:unmount",e)}const ri=ga("component:added"),ad=ga("component:updated"),Ey=ga("component:removed"),xy=e=>{Qt&&typeof Qt.cleanupBuffer=="function"&&!Qt.cleanupBuffer(e)&&Ey(e)};function ga(e){return t=>{Xo(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Dy=cd("perf:start"),Ay=cd("perf:end");function cd(e){return(t,n,o)=>{Xo(e,t.appContext.app,t.uid,t,n,o)}}function Sy(e,t,n){Xo("component:emit",e.appContext.app,e,t,n)}function Fy(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Re;{const{emitsOptions:p,propsOptions:[d]}=e;if(p)if(!(t in p))(!d||!(Qn(t)in d))&&j(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qn(t)}" prop.`);else{const f=p[t];pe(f)&&(f(...n)||j(`Invalid event arguments: event validation failed for event "${t}".`))}}let r=n;const l=t.startsWith("update:"),i=l&&t.slice(7);if(i&&i in o){const p=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:f}=o[p]||Re;f&&(r=n.map(y=>He(y)?y.trim():y)),d&&(r=n.map(wm))}Sy(e,t,r);{const p=t.toLowerCase();p!==t&&o[Qn(p)]&&j(`Event "${p}" is emitted in component ${yl(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${gn(t)}" instead of "${t}".`)}let a,c=o[a=Qn(t)]||o[a=Qn(on(t))];!c&&l&&(c=o[a=Qn(gn(t))]),c&&Pt(c,e,6,r);const u=o[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Pt(u,e,6,r)}}function ud(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const l=e.emits;let i={},a=!1;if(!pe(e)){const c=u=>{const p=ud(u,t,!0);p&&(a=!0,Ue(i,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!a?(je(e)&&o.set(e,null),null):(ie(l)?l.forEach(c=>i[c]=null):Ue(i,l),je(e)&&o.set(e,i),i)}function cl(e,t){return!e||!Ko(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ee(e,t[0].toLowerCase()+t.slice(1))||Ee(e,gn(t))||Ee(e,t))}let Qe=null,ul=null;function Vr(e){const t=Qe;return Qe=e,ul=e&&e.type.__scopeId||null,t}function qn(e){ul=e}function Un(){ul=null}function ne(e,t=Qe,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&$c(-1);const l=Vr(t);let i;try{i=e(...r)}finally{Vr(l),o._d&&$c(1)}return ad(t),i};return o._n=!0,o._c=!0,o._d=!0,o}let li=!1;function Rr(){li=!0}function kl(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:l,propsOptions:[i],slots:a,attrs:c,emit:u,render:p,renderCache:d,data:f,setupState:y,ctx:h,inheritAttrs:v}=e;let _,x;const C=Vr(e);li=!1;try{if(n.shapeFlag&4){const F=r||o;_=qt(p.call(F,F,d,l,y,f,h)),x=c}else{const F=t;c===l&&Rr(),_=qt(F.length>1?F(l,{get attrs(){return Rr(),c},slots:a,emit:u}):F(l,null)),x=t.props?c:By(c)}}catch(F){_o.length=0,il(F,e,1),_=U(tt)}let b=_,D;if(_.patchFlag>0&&_.patchFlag&2048&&([b,D]=$y(_)),x&&v!==!1){const F=Object.keys(x),{shapeFlag:T}=b;if(F.length){if(T&7)i&&F.some(Tr)&&(x=Iy(x,i)),b=Zt(b,x);else if(!li&&b.type!==tt){const L=Object.keys(c),S=[],V=[];for(let G=0,ae=L.length;G<ae;G++){const W=L[G];Ko(W)?Tr(W)||S.push(W[2].toLowerCase()+W.slice(3)):V.push(W)}V.length&&j(`Extraneous non-props attributes (${V.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),S.length&&j(`Extraneous non-emits event listeners (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(vc(b)||j("Runtime directive used on component with non-element root node. The directives will not function as intended."),b=Zt(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(vc(b)||j("Component inside <Transition> renders non-element root node that cannot be animated."),b.transition=n.transition),D?D(b):_=b,Vr(C),_}const $y=e=>{const t=e.children,n=e.dynamicChildren,o=pd(t);if(!o)return[e,void 0];const r=t.indexOf(o),l=n?n.indexOf(o):-1,i=a=>{t[r]=a,n&&(l>-1?n[l]=a:a.patchFlag>0&&(e.dynamicChildren=[...n,a]))};return[qt(o),i]};function pd(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(Hn(o)){if(o.type!==tt||o.children==="v-if"){if(t)return;t=o}}else return}return t}const By=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ko(n))&&((t||(t={}))[n]=e[n]);return t},Iy=(e,t)=>{const n={};for(const o in e)(!Tr(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n},vc=e=>e.shapeFlag&7||e.type===tt;function Ty(e,t,n){const{props:o,children:r,component:l}=e,{props:i,children:a,patchFlag:c}=t,u=l.emitsOptions;if((r||a)&&Tn||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?_c(o,i,u):!!i;if(c&8){const p=t.dynamicProps;for(let d=0;d<p.length;d++){const f=p[d];if(i[f]!==o[f]&&!cl(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:o===i?!1:o?i?_c(o,i,u):!0:!!i;return!1}function _c(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const l=o[r];if(t[l]!==e[l]&&!cl(n,l))return!0}return!1}function Oy({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const dd=e=>e.__isSuspense;function My(e,t){t&&t.pendingBranch?ie(e)?t.effects.push(...e):t.effects.push(e):sd(e)}function At(e,t){if(!Ze)j("provide() can only be used inside setup().");else{let n=Ze.provides;const o=Ze.parent&&Ze.parent.provides;o===n&&(n=Ze.provides=Object.create(o)),n[e]=t}}function Y(e,t,n=!1){const o=Ze||Qe;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&pe(t)?t.call(o.proxy):t;j(`injection "${String(e)}" not found.`)}else j("inject() can only be used inside setup() or functional components.")}function ws(e,t){return va(e,null,t)}const dr={};function ve(e,t,n){return pe(t)||j("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),va(e,t,n)}function va(e,t,{immediate:n,deep:o,flush:r,onTrack:l,onTrigger:i}=Re){t||(n!==void 0&&j('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&j('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=D=>{j("Invalid watch source: ",D,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=ia()===(Ze==null?void 0:Ze.scope)?Ze:null;let u,p=!1,d=!1;if(Be(e)?(u=()=>e.value,p=Pr(e)):ds(e)?(u=()=>e,o=!0):ie(e)?(d=!0,p=e.some(D=>ds(D)||Pr(D)),u=()=>e.map(D=>{if(Be(D))return D.value;if(ds(D))return is(D);if(pe(D))return yn(D,c,2);a(D)})):pe(e)?t?u=()=>yn(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return f&&f(),Pt(e,c,3,[y])}:(u=_t,a(e)),t&&o){const D=u;u=()=>is(D())}let f,y=D=>{f=C.onStop=()=>{yn(D,c,4)}},h;if(jo)if(y=_t,t?n&&Pt(t,c,3,[u(),d?[]:void 0,y]):u(),r==="sync"){const D=Rg();h=D.__watcherHandles||(D.__watcherHandles=[])}else return _t;let v=d?new Array(e.length).fill(dr):dr;const _=()=>{if(C.active)if(t){const D=C.run();(o||p||(d?D.some((F,T)=>$o(F,v[T])):$o(D,v)))&&(f&&f(),Pt(t,c,3,[D,v===dr?void 0:d&&v[0]===dr?[]:v,y]),v=D)}else C.run()};_.allowRecurse=!!t;let x;r==="sync"?x=_:r==="post"?x=()=>st(_,c&&c.suspense):(_.pre=!0,c&&(_.id=c.uid),x=()=>al(_));const C=new ca(u,x);C.onTrack=l,C.onTrigger=i,t?n?_():v=C.run():r==="post"?st(C.run.bind(C),c&&c.suspense):C.run();const b=()=>{C.stop(),c&&c.scope&&na(c.scope.effects,C)};return h&&h.push(b),b}function jy(e,t,n){const o=this.proxy,r=He(e)?e.includes(".")?fd(o,e):()=>o[e]:e.bind(o,o);let l;pe(t)?l=t:(l=t.handler,n=t);const i=Ze;Hs(this);const a=va(r,l.bind(o),n);return i?Hs(i):ms(),a}function fd(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function is(e,t){if(!je(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Be(e))is(e.value,t);else if(ie(e))for(let n=0;n<e.length;n++)is(e[n],t);else if(Bp(e)||us(e))e.forEach(n=>{is(n,t)});else if(Tp(e))for(const n in e)is(e[n],t);return e}function hd(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cs(()=>{e.isMounted=!0}),Qo(()=>{e.isUnmounting=!0}),e}const Tt=[Function,Array],Py={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tt,onEnter:Tt,onAfterEnter:Tt,onEnterCancelled:Tt,onBeforeLeave:Tt,onLeave:Tt,onAfterLeave:Tt,onLeaveCancelled:Tt,onBeforeAppear:Tt,onAppear:Tt,onAfterAppear:Tt,onAppearCancelled:Tt},setup(e,{slots:t}){const n=It(),o=hd();let r;return()=>{const l=t.default&&_a(t.default(),!0);if(!l||!l.length)return;let i=l[0];if(l.length>1){let v=!1;for(const _ of l)if(_.type!==tt){if(v){j("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}i=_,v=!0}}const a=fe(e),{mode:c}=a;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&j(`invalid <transition> mode: ${c}`),o.isLeaving)return El(i);const u=bc(i);if(!u)return El(i);const p=Oo(u,a,o,n);Ns(u,p);const d=n.subTree,f=d&&bc(d);let y=!1;const{getTransitionKey:h}=u.type;if(h){const v=h();r===void 0?r=v:v!==r&&(r=v,y=!0)}if(f&&f.type!==tt&&(!$n(u,f)||y)){const v=Oo(f,a,o,n);if(Ns(f,v),c==="out-in")return o.isLeaving=!0,v.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&n.update()},El(i);c==="in-out"&&u.type!==tt&&(v.delayLeave=(_,x,C)=>{const b=yd(o,f);b[String(f.key)]=f,_._leaveCb=()=>{x(),_._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=C})}return i}}},md=Py;function yd(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Oo(e,t,n,o){const{appear:r,mode:l,persisted:i=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:d,onLeave:f,onAfterLeave:y,onLeaveCancelled:h,onBeforeAppear:v,onAppear:_,onAfterAppear:x,onAppearCancelled:C}=t,b=String(e.key),D=yd(n,e),F=(S,V)=>{S&&Pt(S,o,9,V)},T=(S,V)=>{const G=V[1];F(S,V),ie(S)?S.every(ae=>ae.length<=1)&&G():S.length<=1&&G()},L={mode:l,persisted:i,beforeEnter(S){let V=a;if(!n.isMounted)if(r)V=v||a;else return;S._leaveCb&&S._leaveCb(!0);const G=D[b];G&&$n(e,G)&&G.el._leaveCb&&G.el._leaveCb(),F(V,[S])},enter(S){let V=c,G=u,ae=p;if(!n.isMounted)if(r)V=_||c,G=x||u,ae=C||p;else return;let W=!1;const be=S._enterCb=ye=>{W||(W=!0,ye?F(ae,[S]):F(G,[S]),L.delayedLeave&&L.delayedLeave(),S._enterCb=void 0)};V?T(V,[S,be]):be()},leave(S,V){const G=String(e.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return V();F(d,[S]);let ae=!1;const W=S._leaveCb=be=>{ae||(ae=!0,V(),be?F(h,[S]):F(y,[S]),S._leaveCb=void 0,D[G]===e&&delete D[G])};D[G]=e,f?T(f,[S,W]):W()},clone(S){return Oo(S,t,n,o)}};return L}function El(e){if(Jo(e))return e=Zt(e),e.children=null,e}function bc(e){return Jo(e)?e.children?e.children[0]:void 0:e}function Ns(e,t){e.shapeFlag&6&&e.component?Ns(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _a(e,t=!1,n){let o=[],r=0;for(let l=0;l<e.length;l++){let i=e[l];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:l);i.type===$e?(i.patchFlag&128&&r++,o=o.concat(_a(i.children,t,a))):(t||i.type!==tt)&&o.push(a!=null?Zt(i,{key:a}):i)}if(r>1)for(let l=0;l<o.length;l++)o[l].patchFlag=-2;return o}function Te(e){return pe(e)?{setup:e,name:e.name}:e}const Ps=e=>!!e.type.__asyncLoader,Jo=e=>e.type.__isKeepAlive,Ly={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=It(),o=n.ctx;if(!o.renderer)return()=>{const C=t.default&&t.default();return C&&C.length===1?C[0]:C};const r=new Map,l=new Set;let i=null;n.__v_cache=r;const a=n.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:d}}}=o,f=d("div");o.activate=(C,b,D,F,T)=>{const L=C.component;u(C,b,D,0,a),c(L.vnode,C,b,D,L,a,F,C.slotScopeIds,T),st(()=>{L.isDeactivated=!1,L.a&&ns(L.a);const S=C.props&&C.props.onVnodeMounted;S&&Ot(S,L.parent,C)},a),ri(L)},o.deactivate=C=>{const b=C.component;u(C,f,null,1,a),st(()=>{b.da&&ns(b.da);const D=C.props&&C.props.onVnodeUnmounted;D&&Ot(D,b.parent,C),b.isDeactivated=!0},a),ri(b)};function y(C){xl(C),p(C,n,a,!0)}function h(C){r.forEach((b,D)=>{const F=Po(b.type);F&&(!C||!C(F))&&v(D)})}function v(C){const b=r.get(C);!i||!$n(b,i)?y(b):i&&xl(i),r.delete(C),l.delete(C)}ve(()=>[e.include,e.exclude],([C,b])=>{C&&h(D=>ho(C,D)),b&&h(D=>!ho(b,D))},{flush:"post",deep:!0});let _=null;const x=()=>{_!=null&&r.set(_,Dl(n.subTree))};return Cs(x),dl(x),Qo(()=>{r.forEach(C=>{const{subTree:b,suspense:D}=n,F=Dl(b);if(C.type===F.type&&C.key===F.key){xl(F);const T=F.component.da;T&&st(T,D);return}y(C)})}),()=>{if(_=null,!t.default)return null;const C=t.default(),b=C[0];if(C.length>1)return j("KeepAlive should contain exactly one component child."),i=null,C;if(!Hn(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return i=null,b;let D=Dl(b);const F=D.type,T=Po(Ps(D)?D.type.__asyncResolved||{}:F),{include:L,exclude:S,max:V}=e;if(L&&(!T||!ho(L,T))||S&&T&&ho(S,T))return i=D,b;const G=D.key==null?F:D.key,ae=r.get(G);return D.el&&(D=Zt(D),b.shapeFlag&128&&(b.ssContent=D)),_=G,ae?(D.el=ae.el,D.component=ae.component,D.transition&&Ns(D,D.transition),D.shapeFlag|=512,l.delete(G),l.add(G)):(l.add(G),V&&l.size>parseInt(V,10)&&v(l.values().next().value)),D.shapeFlag|=256,i=D,dd(b.type)?b:D}}},gd=Ly;function ho(e,t){return ie(e)?e.some(n=>ho(n,t)):He(e)?e.split(",").includes(t):gm(e)?e.test(t):!1}function vd(e,t){bd(e,"a",t)}function _d(e,t){bd(e,"da",t)}function bd(e,t,n=Ze){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(pl(t,o,n),n){let r=n.parent;for(;r&&r.parent;)Jo(r.parent.vnode)&&Vy(o,t,n,r),r=r.parent}}function Vy(e,t,n,o){const r=pl(t,e,o,!0);fl(()=>{na(o[t],r)},n)}function xl(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Dl(e){return e.shapeFlag&128?e.ssContent:e}function pl(e,t,n=Ze,o=!1){if(n){const r=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;_s(),Hs(n);const a=Pt(t,n,e,i);return ms(),bs(),a});return o?r.unshift(l):r.push(l),l}else{const r=Qn(ha[e].replace(/ hook$/,""));j(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const bn=e=>(t,n=Ze)=>(!jo||e==="sp")&&pl(e,(...o)=>t(...o),n),Ry=bn("bm"),Cs=bn("m"),Ny=bn("bu"),dl=bn("u"),Qo=bn("bum"),fl=bn("um"),Hy=bn("sp"),Wy=bn("rtg"),zy=bn("rtc");function qy(e,t=Ze){pl("ec",e,t)}function wd(e){vm(e)&&j("Do not use built-in directive ids as custom directive id: "+e)}function Pe(e,t){const n=Qe;if(n===null)return j("withDirectives can only be used inside render functions."),e;const o=ml(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[i,a,c,u=Re]=t[l];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&is(a),r.push({dir:i,instance:o,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function Yn(e,t,n,o){const r=e.dirs,l=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];l&&(a.oldValue=l[i].value);let c=a.dir[o];c&&(_s(),Pt(c,n,8,[e.el,a,e,t]),bs())}}const ii="components",Uy="directives";function Nr(e,t){return Cd(ii,e,!0,t)||e}const Zy=Symbol();function Rt(e){return Cd(Uy,e)}function Cd(e,t,n=!0,o=!1){const r=Qe||Ze;if(r){const l=r.type;if(e===ii){const a=Po(l,!1);if(a&&(a===t||a===on(t)||a===gs(on(t))))return l}const i=wc(r[e]||l[e],t)||wc(r.appContext[e],t);if(!i&&o)return l;if(n&&!i){const a=e===ii?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";j(`Failed to resolve ${e.slice(0,-1)}: ${t}${a}`)}return i}else j(`resolve${gs(e.slice(0,-1))} can only be used in render() or setup().`)}function wc(e,t){return e&&(e[t]||e[on(t)]||e[gs(on(t))])}function Us(e,t,n,o){let r;const l=n&&n[o];if(ie(e)||He(e)){r=new Array(e.length);for(let i=0,a=e.length;i<a;i++)r[i]=t(e[i],i,void 0,l&&l[i])}else if(typeof e=="number"){Number.isInteger(e)||j(`The v-for range expect an integer value but got ${e}.`),r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,l&&l[i])}else if(je(e))if(e[Symbol.iterator])r=Array.from(e,(i,a)=>t(i,a,void 0,l&&l[a]));else{const i=Object.keys(e);r=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const u=i[a];r[a]=t(e[u],u,a,l&&l[a])}}else r=[];return n&&(n[o]=r),r}function Lt(e,t,n={},o,r){if(Qe.isCE||Qe.parent&&Ps(Qe.parent)&&Qe.parent.isCE)return t!=="default"&&(n.name=t),U("slot",n,o&&o());let l=e[t];l&&l.length>1&&(j("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),k();const i=l&&kd(l(n)),a=Q($e,{key:n.key||i&&i.key||`_${t}`},i||(o?o():[]),i&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),l&&l._c&&(l._d=!0),a}function kd(e){return e.some(t=>Hn(t)?!(t.type===tt||t.type===$e&&!kd(t.children)):!0)?e:null}const ai=e=>e?Pd(e)?ml(e)||e.proxy:ai(e.parent):null,hs=Ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>Ts(e.props),$attrs:e=>Ts(e.attrs),$slots:e=>Ts(e.slots),$refs:e=>Ts(e.refs),$parent:e=>ai(e.parent),$root:e=>ai(e.root),$emit:e=>e.emit,$options:e=>wa(e),$forceUpdate:e=>e.f||(e.f=()=>al(e.update)),$nextTick:e=>e.n||(e.n=it.bind(e.proxy)),$watch:e=>jy.bind(e)}),ba=e=>e==="_"||e==="$",Al=(e,t)=>e!==Re&&!e.__isScriptSetup&&Ee(e,t),Ed={get({_:e},t){const{ctx:n,setupState:o,data:r,props:l,accessCache:i,type:a,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return l[t]}else{if(Al(o,t))return i[t]=1,o[t];if(r!==Re&&Ee(r,t))return i[t]=2,r[t];if((u=e.propsOptions[0])&&Ee(u,t))return i[t]=3,l[t];if(n!==Re&&Ee(n,t))return i[t]=4,n[t];ci&&(i[t]=0)}}const p=hs[t];let d,f;if(p)return t==="$attrs"&&(Ct(e,"get",t),Rr()),p(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==Re&&Ee(n,t))return i[t]=4,n[t];if(f=c.config.globalProperties,Ee(f,t))return f[t];Qe&&(!He(t)||t.indexOf("__v")!==0)&&(r!==Re&&ba(t[0])&&Ee(r,t)?j(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Qe&&j(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:o,setupState:r,ctx:l}=e;return Al(r,t)?(r[t]=n,!0):r.__isScriptSetup&&Ee(r,t)?(j(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Re&&Ee(o,t)?(o[t]=n,!0):Ee(e.props,t)?(j(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(j(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(l,t,{enumerable:!0,configurable:!0,value:n}):l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:l}},i){let a;return!!n[i]||e!==Re&&Ee(e,i)||Al(t,i)||(a=l[0])&&Ee(a,i)||Ee(o,i)||Ee(hs,i)||Ee(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ee(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};Ed.ownKeys=e=>(j("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Yy(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(hs).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>hs[n](e),set:_t})}),t}function Ky(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:_t})})}function Gy(e){const{ctx:t,setupState:n}=e;Object.keys(fe(n)).forEach(o=>{if(!n.__isScriptSetup){if(ba(o[0])){j(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n[o],set:_t})}})}function Xy(){const e=Object.create(null);return(t,n)=>{e[n]?j(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let ci=!0;function Jy(e){const t=wa(e),n=e.proxy,o=e.ctx;ci=!1,t.beforeCreate&&Cc(t.beforeCreate,e,"bc");const{data:r,computed:l,methods:i,watch:a,provide:c,inject:u,created:p,beforeMount:d,mounted:f,beforeUpdate:y,updated:h,activated:v,deactivated:_,beforeDestroy:x,beforeUnmount:C,destroyed:b,unmounted:D,render:F,renderTracked:T,renderTriggered:L,errorCaptured:S,serverPrefetch:V,expose:G,inheritAttrs:ae,components:W,directives:be,filters:ye}=t,we=Xy();{const[K]=e.propsOptions;if(K)for(const le in K)we("Props",le)}if(u&&Qy(u,o,we,e.appContext.config.unwrapInjectedRef),i)for(const K in i){const le=i[K];pe(le)?(Object.defineProperty(o,K,{value:le.bind(n),configurable:!0,enumerable:!0,writable:!0}),we("Methods",K)):j(`Method "${K}" has type "${typeof le}" in the component definition. Did you reference the function correctly?`)}if(r){pe(r)||j("The data option must be a function. Plain object usage is no longer supported.");const K=r.call(n,n);if(oa(K)&&j("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!je(K))j("data() should return an object.");else{e.data=ze(K);for(const le in K)we("Data",le),ba(le[0])||Object.defineProperty(o,le,{configurable:!0,enumerable:!0,get:()=>K[le],set:_t})}}if(ci=!0,l)for(const K in l){const le=l[K],Ce=pe(le)?le.bind(n,n):pe(le.get)?le.get.bind(n,n):_t;Ce===_t&&j(`Computed property "${K}" has no getter.`);const Le=!pe(le)&&pe(le.set)?le.set.bind(n):()=>{j(`Write operation failed: computed property "${K}" is readonly.`)},kt=$({get:Ce,set:Le});Object.defineProperty(o,K,{enumerable:!0,configurable:!0,get:()=>kt.value,set:ot=>kt.value=ot}),we("Computed",K)}if(a)for(const K in a)xd(a[K],o,n,K);if(c){const K=pe(c)?c.call(n):c;Reflect.ownKeys(K).forEach(le=>{At(le,K[le])})}p&&Cc(p,e,"c");function Oe(K,le){ie(le)?le.forEach(Ce=>K(Ce.bind(n))):le&&K(le.bind(n))}if(Oe(Ry,d),Oe(Cs,f),Oe(Ny,y),Oe(dl,h),Oe(vd,v),Oe(_d,_),Oe(qy,S),Oe(zy,T),Oe(Wy,L),Oe(Qo,C),Oe(fl,D),Oe(Hy,V),ie(G))if(G.length){const K=e.exposed||(e.exposed={});G.forEach(le=>{Object.defineProperty(K,le,{get:()=>n[le],set:Ce=>n[le]=Ce})})}else e.exposed||(e.exposed={});F&&e.render===_t&&(e.render=F),ae!=null&&(e.inheritAttrs=ae),W&&(e.components=W),be&&(e.directives=be)}function Qy(e,t,n=_t,o=!1){ie(e)&&(e=ui(e));for(const r in e){const l=e[r];let i;je(l)?"default"in l?i=Y(l.from||r,l.default,!0):i=Y(l.from||r):i=Y(l),Be(i)?o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):(j(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[r]=i):t[r]=i,n("Inject",r)}}function Cc(e,t,n){Pt(ie(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function xd(e,t,n,o){const r=o.includes(".")?fd(n,o):()=>n[o];if(He(e)){const l=t[e];pe(l)?ve(r,l):j(`Invalid watch handler specified by key "${e}"`,l)}else if(pe(e))ve(r,e.bind(n));else if(je(e))if(ie(e))e.forEach(l=>xd(l,t,n,o));else{const l=pe(e.handler)?e.handler.bind(n):t[e.handler];pe(l)?ve(r,l,e):j(`Invalid watch handler specified by key "${e.handler}"`,l)}else j(`Invalid watch option: "${o}"`,e)}function wa(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,a=l.get(t);let c;return a?c=a:!r.length&&!n&&!o?c=t:(c={},r.length&&r.forEach(u=>Hr(c,u,i,!0)),Hr(c,t,i)),je(t)&&l.set(t,c),c}function Hr(e,t,n,o=!1){const{mixins:r,extends:l}=t;l&&Hr(e,l,n,!0),r&&r.forEach(i=>Hr(e,i,n,!0));for(const i in t)if(o&&i==="expose")j('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=eg[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const eg={data:kc,props:es,emits:es,methods:es,computed:es,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:es,directives:es,watch:ng,provide:kc,inject:tg};function kc(e,t){return t?e?function(){return Ue(pe(e)?e.call(this,this):e,pe(t)?t.call(this,this):t)}:t:e}function tg(e,t){return es(ui(e),ui(t))}function ui(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pt(e,t){return e?[...new Set([].concat(e,t))]:t}function es(e,t){return e?Ue(Ue(Object.create(null),e),t):t}function ng(e,t){if(!e)return t;if(!t)return e;const n=Ue(Object.create(null),e);for(const o in t)n[o]=pt(e[o],t[o]);return n}function sg(e,t,n,o=!1){const r={},l={};Or(l,hl,1),e.propsDefaults=Object.create(null),Dd(e,t,r,l);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);Sd(t||{},r,e),n?e.props=o?r:Qm(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function og(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function rg(e,t,n,o){const{props:r,attrs:l,vnode:{patchFlag:i}}=e,a=fe(r),[c]=e.propsOptions;let u=!1;if(!og(e)&&(o||i>0)&&!(i&16)){if(i&8){const p=e.vnode.dynamicProps;for(let d=0;d<p.length;d++){let f=p[d];if(cl(e.emitsOptions,f))continue;const y=t[f];if(c)if(Ee(l,f))y!==l[f]&&(l[f]=y,u=!0);else{const h=on(f);r[h]=pi(c,a,h,y,e,!1)}else y!==l[f]&&(l[f]=y,u=!0)}}}else{Dd(e,t,r,l)&&(u=!0);let p;for(const d in a)(!t||!Ee(t,d)&&((p=gn(d))===d||!Ee(t,p)))&&(c?n&&(n[d]!==void 0||n[p]!==void 0)&&(r[d]=pi(c,a,d,void 0,e,!0)):delete r[d]);if(l!==a)for(const d in l)(!t||!Ee(t,d))&&(delete l[d],u=!0)}u&&vn(e,"set","$attrs"),Sd(t||{},r,e)}function Dd(e,t,n,o){const[r,l]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(kr(c))continue;const u=t[c];let p;r&&Ee(r,p=on(c))?!l||!l.includes(p)?n[p]=u:(a||(a={}))[p]=u:cl(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,i=!0)}if(l){const c=fe(n),u=a||Re;for(let p=0;p<l.length;p++){const d=l[p];n[d]=pi(r,c,d,u[d],e,!Ee(u,d))}}return i}function pi(e,t,n,o,r,l){const i=e[n];if(i!=null){const a=Ee(i,"default");if(a&&o===void 0){const c=i.default;if(i.type!==Function&&pe(c)){const{propsDefaults:u}=r;n in u?o=u[n]:(Hs(r),o=u[n]=c.call(null,t),ms())}else o=c}i[0]&&(l&&!a?o=!1:i[1]&&(o===""||o===gn(n))&&(o=!0))}return o}function Ad(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const l=e.props,i={},a=[];let c=!1;if(!pe(e)){const p=d=>{c=!0;const[f,y]=Ad(d,t,!0);Ue(i,f),y&&a.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!l&&!c)return je(e)&&o.set(e,Ms),Ms;if(ie(l))for(let p=0;p<l.length;p++){He(l[p])||j("props must be strings when using array syntax.",l[p]);const d=on(l[p]);Ec(d)&&(i[d]=Re)}else if(l){je(l)||j("invalid props options",l);for(const p in l){const d=on(p);if(Ec(d)){const f=l[p],y=i[d]=ie(f)||pe(f)?{type:f}:Object.assign({},f);if(y){const h=Dc(Boolean,y.type),v=Dc(String,y.type);y[0]=h>-1,y[1]=v<0||h<v,(h>-1||Ee(y,"default"))&&a.push(d)}}}}const u=[i,a];return je(e)&&o.set(e,u),u}function Ec(e){return e[0]!=="$"?!0:(j(`Invalid prop name: "${e}" is a reserved property.`),!1)}function di(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function xc(e,t){return di(e)===di(t)}function Dc(e,t){return ie(t)?t.findIndex(n=>xc(n,e)):pe(t)&&xc(t,e)?0:-1}function Sd(e,t,n){const o=fe(t),r=n.propsOptions[0];for(const l in r){let i=r[l];i!=null&&lg(l,o[l],i,!Ee(e,l)&&!Ee(e,gn(l)))}}function lg(e,t,n,o){const{type:r,required:l,validator:i}=n;if(l&&o){j('Missing required prop: "'+e+'"');return}if(!(t==null&&!n.required)){if(r!=null&&r!==!0){let a=!1;const c=ie(r)?r:[r],u=[];for(let p=0;p<c.length&&!a;p++){const{valid:d,expectedType:f}=ag(t,c[p]);u.push(f||""),a=d}if(!a){j(cg(e,t,u));return}}i&&!i(t)&&j('Invalid prop: custom validator check failed for prop "'+e+'".')}}const ig=zn("String,Number,Boolean,Function,Symbol,BigInt");function ag(e,t){let n;const o=di(t);if(ig(o)){const r=typeof e;n=r===o.toLowerCase(),!n&&r==="object"&&(n=e instanceof t)}else o==="Object"?n=je(e):o==="Array"?n=ie(e):o==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:o}}function cg(e,t,n){let o=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(gs).join(" | ")}`;const r=n[0],l=ra(t),i=Ac(t,r),a=Ac(t,l);return n.length===1&&Sc(r)&&!ug(r,l)&&(o+=` with value ${i}`),o+=`, got ${l} `,Sc(l)&&(o+=`with value ${a}.`),o}function Ac(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function Sc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function ug(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Fd=e=>e[0]==="_"||e==="$stable",Ca=e=>ie(e)?e.map(qt):[qt(e)],pg=(e,t,n)=>{if(t._n)return t;const o=ne((...r)=>(Ze&&j(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ca(t(...r))),n);return o._c=!1,o},$d=(e,t,n)=>{const o=e._ctx;for(const r in e){if(Fd(r))continue;const l=e[r];if(pe(l))t[r]=pg(r,l,o);else if(l!=null){j(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const i=Ca(l);t[r]=()=>i}}},Bd=(e,t)=>{Jo(e.vnode)||j("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Ca(t);e.slots.default=()=>n},dg=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=fe(t),Or(t,"_",n)):$d(t,e.slots={})}else e.slots={},t&&Bd(e,t);Or(e.slots,hl,1)},fg=(e,t,n)=>{const{vnode:o,slots:r}=e;let l=!0,i=Re;if(o.shapeFlag&32){const a=t._;a?Tn?Ue(r,t):n&&a===1?l=!1:(Ue(r,t),!n&&a===1&&delete r._):(l=!t.$stable,$d(t,r)),i=t}else t&&(Bd(e,t),i={default:1});if(l)for(const a in r)!Fd(a)&&!(a in i)&&delete r[a]};function Id(){return{app:null,config:{isNativeTag:$p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hg=0;function mg(e,t){return function(o,r=null){pe(o)||(o=Object.assign({},o)),r!=null&&!je(r)&&(j("root props passed to app.mount() must be an object."),r=null);const l=Id(),i=new Set;let a=!1;const c=l.app={_uid:hg++,_component:o,_props:r,_container:null,_context:l,_instance:null,version:zr,get config(){return l.config},set config(u){j("app.config cannot be replaced. Modify individual options instead.")},use(u,...p){return i.has(u)?j("Plugin has already been applied to target app."):u&&pe(u.install)?(i.add(u),u.install(c,...p)):pe(u)?(i.add(u),u(c,...p)):j('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return l.mixins.includes(u)?j("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):l.mixins.push(u),c},component(u,p){return mi(u,l.config),p?(l.components[u]&&j(`Component "${u}" has already been registered in target app.`),l.components[u]=p,c):l.components[u]},directive(u,p){return wd(u),p?(l.directives[u]&&j(`Directive "${u}" has already been registered in target app.`),l.directives[u]=p,c):l.directives[u]},mount(u,p,d){if(a)j("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&j("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=U(o,r);return f.appContext=l,l.reload=()=>{e(Zt(f),u,d)},p&&t?t(f,u):e(f,u,d),a=!0,c._container=u,u.__vue_app__=c,c._instance=f.component,Cy(c,zr),ml(f.component)||f.component.proxy}},unmount(){a?(e(null,c._container),c._instance=null,ky(c),delete c._container.__vue_app__):j("Cannot unmount an app that is not mounted.")},provide(u,p){return u in l.provides&&j(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),l.provides[u]=p,c}};return c}}function fi(e,t,n,o,r=!1){if(ie(e)){e.forEach((f,y)=>fi(f,t&&(ie(t)?t[y]:t),n,o,r));return}if(Ps(o)&&!r)return;const l=o.shapeFlag&4?ml(o.component)||o.component.proxy:o.el,i=r?null:l,{i:a,r:c}=e;if(!a){j("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,p=a.refs===Re?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==c&&(He(u)?(p[u]=null,Ee(d,u)&&(d[u]=null)):Be(u)&&(u.value=null)),pe(c))yn(c,a,12,[i,p]);else{const f=He(c),y=Be(c);if(f||y){const h=()=>{if(e.f){const v=f?Ee(d,c)?d[c]:p[c]:c.value;r?ie(v)&&na(v,l):ie(v)?v.includes(l)||v.push(l):f?(p[c]=[l],Ee(d,c)&&(d[c]=p[c])):(c.value=[l],e.k&&(p[e.k]=c.value))}else f?(p[c]=i,Ee(d,c)&&(d[c]=i)):y?(c.value=i,e.k&&(p[e.k]=i)):j("Invalid template ref type:",c,`(${typeof c})`)};i?(h.id=-1,st(h,n)):h()}else j("Invalid template ref type:",c,`(${typeof c})`)}}let Qs,Fn;function cn(e,t){e.appContext.config.performance&&Wr()&&Fn.mark(`vue-${t}-${e.uid}`),Dy(e,t,Wr()?Fn.now():Date.now())}function un(e,t){if(e.appContext.config.performance&&Wr()){const n=`vue-${t}-${e.uid}`,o=n+":end";Fn.mark(o),Fn.measure(`<${yl(e,e.type)}> ${t}`,n,o),Fn.clearMarks(n),Fn.clearMarks(o)}Ay(e,t,Wr()?Fn.now():Date.now())}function Wr(){return Qs!==void 0||(typeof window<"u"&&window.performance?(Qs=!0,Fn=window.performance):Qs=!1),Qs}function yg(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const st=My;function gg(e){return vg(e)}function vg(e,t){yg();const n=Op();n.__VUE__=!0,id(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:o,remove:r,patchProp:l,createElement:i,createText:a,createComment:c,setText:u,setElementText:p,parentNode:d,nextSibling:f,setScopeId:y=_t,insertStaticContent:h}=e,v=(g,w,A,M=null,O=null,N=null,Z=!1,R=null,H=Tn?!1:!!w.dynamicChildren)=>{if(g===w)return;g&&!$n(g,w)&&(M=J(g),yt(g,O,N,!0),g=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:P,ref:oe,shapeFlag:ee}=w;switch(P){case er:_(g,w,A,M);break;case tt:x(g,w,A,M);break;case Dr:g==null?C(w,A,M,Z):b(g,w,A,Z);break;case $e:be(g,w,A,M,O,N,Z,R,H);break;default:ee&1?T(g,w,A,M,O,N,Z,R,H):ee&6?ye(g,w,A,M,O,N,Z,R,H):ee&64||ee&128?P.process(g,w,A,M,O,N,Z,R,H,De):j("Invalid VNode type:",P,`(${typeof P})`)}oe!=null&&O&&fi(oe,g&&g.ref,N,w||g,!w)},_=(g,w,A,M)=>{if(g==null)o(w.el=a(w.children),A,M);else{const O=w.el=g.el;w.children!==g.children&&u(O,w.children)}},x=(g,w,A,M)=>{g==null?o(w.el=c(w.children||""),A,M):w.el=g.el},C=(g,w,A,M)=>{[g.el,g.anchor]=h(g.children,w,A,M,g.el,g.anchor)},b=(g,w,A,M)=>{if(w.children!==g.children){const O=f(g.anchor);F(g),[w.el,w.anchor]=h(w.children,A,O,M)}else w.el=g.el,w.anchor=g.anchor},D=({el:g,anchor:w},A,M)=>{let O;for(;g&&g!==w;)O=f(g),o(g,A,M),g=O;o(w,A,M)},F=({el:g,anchor:w})=>{let A;for(;g&&g!==w;)A=f(g),r(g),g=A;r(w)},T=(g,w,A,M,O,N,Z,R,H)=>{Z=Z||w.type==="svg",g==null?L(w,A,M,O,N,Z,R,H):G(g,w,O,N,Z,R,H)},L=(g,w,A,M,O,N,Z,R)=>{let H,P;const{type:oe,props:ee,shapeFlag:re,transition:me,dirs:xe}=g;if(H=g.el=i(g.type,N,ee&&ee.is,ee),re&8?p(H,g.children):re&16&&V(g.children,H,null,M,O,N&&oe!=="foreignObject",Z,R),xe&&Yn(g,null,M,"created"),S(H,g,g.scopeId,Z,M),ee){for(const Ve in ee)Ve!=="value"&&!kr(Ve)&&l(H,Ve,null,ee[Ve],N,g.children,M,O,q);"value"in ee&&l(H,"value",null,ee.value),(P=ee.onVnodeBeforeMount)&&Ot(P,M,g)}Object.defineProperty(H,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(H,"__vueParentComponent",{value:M,enumerable:!1}),xe&&Yn(g,null,M,"beforeMount");const Ne=(!O||O&&!O.pendingBranch)&&me&&!me.persisted;Ne&&me.beforeEnter(H),o(H,w,A),((P=ee&&ee.onVnodeMounted)||Ne||xe)&&st(()=>{P&&Ot(P,M,g),Ne&&me.enter(H),xe&&Yn(g,null,M,"mounted")},O)},S=(g,w,A,M,O)=>{if(A&&y(g,A),M)for(let N=0;N<M.length;N++)y(g,M[N]);if(O){let N=O.subTree;if(N.patchFlag>0&&N.patchFlag&2048&&(N=pd(N.children)||N),w===N){const Z=O.vnode;S(g,Z,Z.scopeId,Z.slotScopeIds,O.parent)}}},V=(g,w,A,M,O,N,Z,R,H=0)=>{for(let P=H;P<g.length;P++){const oe=g[P]=R?An(g[P]):qt(g[P]);v(null,oe,w,A,M,O,N,Z,R)}},G=(g,w,A,M,O,N,Z)=>{const R=w.el=g.el;let{patchFlag:H,dynamicChildren:P,dirs:oe}=w;H|=g.patchFlag&16;const ee=g.props||Re,re=w.props||Re;let me;A&&Kn(A,!1),(me=re.onVnodeBeforeUpdate)&&Ot(me,A,w,g),oe&&Yn(w,g,A,"beforeUpdate"),A&&Kn(A,!0),Tn&&(H=0,Z=!1,P=null);const xe=O&&w.type!=="foreignObject";if(P?(ae(g.dynamicChildren,P,R,A,M,xe,N),A&&A.type.__hmrId&&vo(g,w)):Z||Ce(g,w,R,null,A,M,xe,N,!1),H>0){if(H&16)W(R,w,ee,re,A,M,O);else if(H&2&&ee.class!==re.class&&l(R,"class",null,re.class,O),H&4&&l(R,"style",ee.style,re.style,O),H&8){const Ne=w.dynamicProps;for(let Ve=0;Ve<Ne.length;Ve++){const Ke=Ne[Ve],Ht=ee[Ke],Ds=re[Ke];(Ds!==Ht||Ke==="value")&&l(R,Ke,Ht,Ds,O,g.children,A,M,q)}}H&1&&g.children!==w.children&&p(R,w.children)}else!Z&&P==null&&W(R,w,ee,re,A,M,O);((me=re.onVnodeUpdated)||oe)&&st(()=>{me&&Ot(me,A,w,g),oe&&Yn(w,g,A,"updated")},M)},ae=(g,w,A,M,O,N,Z)=>{for(let R=0;R<w.length;R++){const H=g[R],P=w[R],oe=H.el&&(H.type===$e||!$n(H,P)||H.shapeFlag&70)?d(H.el):A;v(H,P,oe,null,M,O,N,Z,!0)}},W=(g,w,A,M,O,N,Z)=>{if(A!==M){if(A!==Re)for(const R in A)!kr(R)&&!(R in M)&&l(g,R,A[R],null,Z,w.children,O,N,q);for(const R in M){if(kr(R))continue;const H=M[R],P=A[R];H!==P&&R!=="value"&&l(g,R,P,H,Z,w.children,O,N,q)}"value"in M&&l(g,"value",A.value,M.value)}},be=(g,w,A,M,O,N,Z,R,H)=>{const P=w.el=g?g.el:a(""),oe=w.anchor=g?g.anchor:a("");let{patchFlag:ee,dynamicChildren:re,slotScopeIds:me}=w;(Tn||ee&2048)&&(ee=0,H=!1,re=null),me&&(R=R?R.concat(me):me),g==null?(o(P,A,M),o(oe,A,M),V(w.children,A,oe,O,N,Z,R,H)):ee>0&&ee&64&&re&&g.dynamicChildren?(ae(g.dynamicChildren,re,A,O,N,Z,R),O&&O.type.__hmrId?vo(g,w):(w.key!=null||O&&w===O.subTree)&&vo(g,w,!0)):Ce(g,w,A,oe,O,N,Z,R,H)},ye=(g,w,A,M,O,N,Z,R,H)=>{w.slotScopeIds=R,g==null?w.shapeFlag&512?O.ctx.activate(w,A,M,Z,H):we(w,A,M,O,N,Z,H):Oe(g,w,H)},we=(g,w,A,M,O,N,Z)=>{const R=g.component=Fg(g,M,O);if(R.type.__hmrId&&vy(R),Er(g),cn(R,"mount"),Jo(g)&&(R.ctx.renderer=De),cn(R,"init"),Bg(R),un(R,"init"),R.asyncDep){if(O&&O.registerDep(R,K),!g.el){const H=R.subTree=U(tt);x(null,H,w,A)}return}K(R,g,w,A,O,N,Z),xr(),un(R,"mount")},Oe=(g,w,A)=>{const M=w.component=g.component;if(Ty(g,w,A))if(M.asyncDep&&!M.asyncResolved){Er(w),le(M,w,A),xr();return}else M.next=w,yy(M.update),M.update();else w.el=g.el,M.vnode=w},K=(g,w,A,M,O,N,Z)=>{const R=()=>{if(g.isMounted){let{next:oe,bu:ee,u:re,parent:me,vnode:xe}=g,Ne=oe,Ve;Er(oe||g.vnode),Kn(g,!1),oe?(oe.el=xe.el,le(g,oe,Z)):oe=xe,ee&&ns(ee),(Ve=oe.props&&oe.props.onVnodeBeforeUpdate)&&Ot(Ve,me,oe,xe),Kn(g,!0),cn(g,"render");const Ke=kl(g);un(g,"render");const Ht=g.subTree;g.subTree=Ke,cn(g,"patch"),v(Ht,Ke,d(Ht.el),J(Ht),g,O,N),un(g,"patch"),oe.el=Ke.el,Ne===null&&Oy(g,Ke.el),re&&st(re,O),(Ve=oe.props&&oe.props.onVnodeUpdated)&&st(()=>Ot(Ve,me,oe,xe),O),ad(g),xr()}else{let oe;const{el:ee,props:re}=w,{bm:me,m:xe,parent:Ne}=g,Ve=Ps(w);if(Kn(g,!1),me&&ns(me),!Ve&&(oe=re&&re.onVnodeBeforeMount)&&Ot(oe,Ne,w),Kn(g,!0),ee&&ue){const Ke=()=>{cn(g,"render"),g.subTree=kl(g),un(g,"render"),cn(g,"hydrate"),ue(ee,g.subTree,g,O,null),un(g,"hydrate")};Ve?w.type.__asyncLoader().then(()=>!g.isUnmounted&&Ke()):Ke()}else{cn(g,"render");const Ke=g.subTree=kl(g);un(g,"render"),cn(g,"patch"),v(null,Ke,A,M,g,O,N),un(g,"patch"),w.el=Ke.el}if(xe&&st(xe,O),!Ve&&(oe=re&&re.onVnodeMounted)){const Ke=w;st(()=>Ot(oe,Ne,Ke),O)}(w.shapeFlag&256||Ne&&Ps(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&g.a&&st(g.a,O),g.isMounted=!0,ri(g),w=A=M=null}},H=g.effect=new ca(R,()=>al(P),g.scope),P=g.update=()=>H.run();P.id=g.uid,Kn(g,!0),H.onTrack=g.rtc?oe=>ns(g.rtc,oe):void 0,H.onTrigger=g.rtg?oe=>ns(g.rtg,oe):void 0,P.ownerInstance=g,P()},le=(g,w,A)=>{w.component=g;const M=g.vnode.props;g.vnode=w,g.next=null,rg(g,w.props,M,A),fg(g,w.children,A),_s(),yc(),bs()},Ce=(g,w,A,M,O,N,Z,R,H=!1)=>{const P=g&&g.children,oe=g?g.shapeFlag:0,ee=w.children,{patchFlag:re,shapeFlag:me}=w;if(re>0){if(re&128){kt(P,ee,A,M,O,N,Z,R,H);return}else if(re&256){Le(P,ee,A,M,O,N,Z,R,H);return}}me&8?(oe&16&&q(P,O,N),ee!==P&&p(A,ee)):oe&16?me&16?kt(P,ee,A,M,O,N,Z,R,H):q(P,O,N,!0):(oe&8&&p(A,""),me&16&&V(ee,A,M,O,N,Z,R,H))},Le=(g,w,A,M,O,N,Z,R,H)=>{g=g||Ms,w=w||Ms;const P=g.length,oe=w.length,ee=Math.min(P,oe);let re;for(re=0;re<ee;re++){const me=w[re]=H?An(w[re]):qt(w[re]);v(g[re],me,A,null,O,N,Z,R,H)}P>oe?q(g,O,N,!0,!1,ee):V(w,A,M,O,N,Z,R,H,ee)},kt=(g,w,A,M,O,N,Z,R,H)=>{let P=0;const oe=w.length;let ee=g.length-1,re=oe-1;for(;P<=ee&&P<=re;){const me=g[P],xe=w[P]=H?An(w[P]):qt(w[P]);if($n(me,xe))v(me,xe,A,null,O,N,Z,R,H);else break;P++}for(;P<=ee&&P<=re;){const me=g[ee],xe=w[re]=H?An(w[re]):qt(w[re]);if($n(me,xe))v(me,xe,A,null,O,N,Z,R,H);else break;ee--,re--}if(P>ee){if(P<=re){const me=re+1,xe=me<oe?w[me].el:M;for(;P<=re;)v(null,w[P]=H?An(w[P]):qt(w[P]),A,xe,O,N,Z,R,H),P++}}else if(P>re)for(;P<=ee;)yt(g[P],O,N,!0),P++;else{const me=P,xe=P,Ne=new Map;for(P=xe;P<=re;P++){const ut=w[P]=H?An(w[P]):qt(w[P]);ut.key!=null&&(Ne.has(ut.key)&&j("Duplicate keys found during update:",JSON.stringify(ut.key),"Make sure keys are unique."),Ne.set(ut.key,P))}let Ve,Ke=0;const Ht=re-xe+1;let Ds=!1,rc=0;const Js=new Array(Ht);for(P=0;P<Ht;P++)Js[P]=0;for(P=me;P<=ee;P++){const ut=g[P];if(Ke>=Ht){yt(ut,O,N,!0);continue}let Gt;if(ut.key!=null)Gt=Ne.get(ut.key);else for(Ve=xe;Ve<=re;Ve++)if(Js[Ve-xe]===0&&$n(ut,w[Ve])){Gt=Ve;break}Gt===void 0?yt(ut,O,N,!0):(Js[Gt-xe]=P+1,Gt>=rc?rc=Gt:Ds=!0,v(ut,w[Gt],A,null,O,N,Z,R,H),Ke++)}const lc=Ds?_g(Js):Ms;for(Ve=lc.length-1,P=Ht-1;P>=0;P--){const ut=xe+P,Gt=w[ut],ic=ut+1<oe?w[ut+1].el:M;Js[P]===0?v(null,Gt,A,ic,O,N,Z,R,H):Ds&&(Ve<0||P!==lc[Ve]?ot(Gt,A,ic,2):Ve--)}}},ot=(g,w,A,M,O=null)=>{const{el:N,type:Z,transition:R,children:H,shapeFlag:P}=g;if(P&6){ot(g.component.subTree,w,A,M);return}if(P&128){g.suspense.move(w,A,M);return}if(P&64){Z.move(g,w,A,De);return}if(Z===$e){o(N,w,A);for(let ee=0;ee<H.length;ee++)ot(H[ee],w,A,M);o(g.anchor,w,A);return}if(Z===Dr){D(g,w,A);return}if(M!==2&&P&1&&R)if(M===0)R.beforeEnter(N),o(N,w,A),st(()=>R.enter(N),O);else{const{leave:ee,delayLeave:re,afterLeave:me}=R,xe=()=>o(N,w,A),Ne=()=>{ee(N,()=>{xe(),me&&me()})};re?re(N,xe,Ne):Ne()}else o(N,w,A)},yt=(g,w,A,M=!1,O=!1)=>{const{type:N,props:Z,ref:R,children:H,dynamicChildren:P,shapeFlag:oe,patchFlag:ee,dirs:re}=g;if(R!=null&&fi(R,null,A,g,!0),oe&256){w.ctx.deactivate(g);return}const me=oe&1&&re,xe=!Ps(g);let Ne;if(xe&&(Ne=Z&&Z.onVnodeBeforeUnmount)&&Ot(Ne,w,g),oe&6)X(g.component,A,M);else{if(oe&128){g.suspense.unmount(A,M);return}me&&Yn(g,null,w,"beforeUnmount"),oe&64?g.type.remove(g,w,A,O,De,M):P&&(N!==$e||ee>0&&ee&64)?q(P,w,A,!1,!0):(N===$e&&ee&384||!O&&oe&16)&&q(H,w,A),M&&wn(g)}(xe&&(Ne=Z&&Z.onVnodeUnmounted)||me)&&st(()=>{Ne&&Ot(Ne,w,g),me&&Yn(g,null,w,"unmounted")},A)},wn=g=>{const{type:w,el:A,anchor:M,transition:O}=g;if(w===$e){g.patchFlag>0&&g.patchFlag&2048&&O&&!O.persisted?g.children.forEach(Z=>{Z.type===tt?r(Z.el):wn(Z)}):B(A,M);return}if(w===Dr){F(g);return}const N=()=>{r(A),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(g.shapeFlag&1&&O&&!O.persisted){const{leave:Z,delayLeave:R}=O,H=()=>Z(A,N);R?R(g.el,N,H):H()}else N()},B=(g,w)=>{let A;for(;g!==w;)A=f(g),r(g),g=A;r(w)},X=(g,w,A)=>{g.type.__hmrId&&_y(g);const{bum:M,scope:O,update:N,subTree:Z,um:R}=g;M&&ns(M),O.stop(),N&&(N.active=!1,yt(Z,g,w,A)),R&&st(R,w),st(()=>{g.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve()),xy(g)},q=(g,w,A,M=!1,O=!1,N=0)=>{for(let Z=N;Z<g.length;Z++)yt(g[Z],w,A,M,O)},J=g=>g.shapeFlag&6?J(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),ke=(g,w,A)=>{g==null?w._vnode&&yt(w._vnode,null,null,!0):v(w._vnode||null,g,w,null,null,null,A),yc(),od(),w._vnode=g},De={p:v,um:yt,m:ot,r:wn,mt:we,mc:V,pc:Ce,pbc:ae,n:J,o:e};let he,ue;return t&&([he,ue]=t(De)),{render:ke,hydrate:he,createApp:mg(ke,he)}}function Kn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function vo(e,t,n=!1){const o=e.children,r=t.children;if(ie(o)&&ie(r))for(let l=0;l<o.length;l++){const i=o[l];let a=r[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[l]=An(r[l]),a.el=i.el),n||vo(i,a)),a.type===er&&(a.el=i.el),a.type===tt&&!a.el&&(a.el=i.el)}}function _g(e){const t=e.slice(),n=[0];let o,r,l,i,a;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(r=n[n.length-1],e[r]<u){t[o]=r,n.push(o);continue}for(l=0,i=n.length-1;l<i;)a=l+i>>1,e[n[a]]<u?l=a+1:i=a;u<e[n[l]]&&(l>0&&(t[o]=n[l-1]),n[l]=o)}}for(l=n.length,i=n[l-1];l-- >0;)n[l]=i,i=t[i];return n}const bg=e=>e.__isTeleport,Ls=e=>e&&(e.disabled||e.disabled===""),Fc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,hi=(e,t)=>{const n=e&&e.to;if(He(n))if(t){const o=t(n);return o||j(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return j("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Ls(e)&&j(`Invalid Teleport target: ${n}`),n},wg={__isTeleport:!0,process(e,t,n,o,r,l,i,a,c,u){const{mc:p,pc:d,pbc:f,o:{insert:y,querySelector:h,createText:v,createComment:_}}=u,x=Ls(t.props);let{shapeFlag:C,children:b,dynamicChildren:D}=t;if(Tn&&(c=!1,D=null),e==null){const F=t.el=_("teleport start"),T=t.anchor=_("teleport end");y(F,n,o),y(T,n,o);const L=t.target=hi(t.props,h),S=t.targetAnchor=v("");L?(y(S,L),i=i||Fc(L)):x||j("Invalid Teleport target on mount:",L,`(${typeof L})`);const V=(G,ae)=>{C&16&&p(b,G,ae,r,l,i,a,c)};x?V(n,T):L&&V(L,S)}else{t.el=e.el;const F=t.anchor=e.anchor,T=t.target=e.target,L=t.targetAnchor=e.targetAnchor,S=Ls(e.props),V=S?n:T,G=S?F:L;if(i=i||Fc(T),D?(f(e.dynamicChildren,D,V,r,l,i,a),vo(e,t,!0)):c||d(e,t,V,G,r,l,i,a,!1),x)S||fr(t,n,F,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ae=t.target=hi(t.props,h);ae?fr(t,ae,null,u,0):j("Invalid Teleport target on update:",T,`(${typeof T})`)}else S&&fr(t,T,L,u,1)}Td(t)},remove(e,t,n,o,{um:r,o:{remove:l}},i){const{shapeFlag:a,children:c,anchor:u,targetAnchor:p,target:d,props:f}=e;if(d&&l(p),(i||!Ls(f))&&(l(u),a&16))for(let y=0;y<c.length;y++){const h=c[y];r(h,t,n,!0,!!h.dynamicChildren)}},move:fr,hydrate:Cg};function fr(e,t,n,{o:{insert:o},m:r},l=2){l===0&&o(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:c,children:u,props:p}=e,d=l===2;if(d&&o(i,t,n),(!d||Ls(p))&&c&16)for(let f=0;f<u.length;f++)r(u[f],t,n,2);d&&o(a,t,n)}function Cg(e,t,n,o,r,l,{o:{nextSibling:i,parentNode:a,querySelector:c}},u){const p=t.target=hi(t.props,c);if(p){const d=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Ls(t.props))t.anchor=u(i(e),t,a(e),n,o,r,l),t.targetAnchor=d;else{t.anchor=i(e);let f=d;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,p._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(d,t,p,n,o,r,l)}Td(t)}return t.anchor&&i(t.anchor)}const kg=wg;function Td(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const $e=Symbol("Fragment"),er=Symbol("Text"),tt=Symbol("Comment"),Dr=Symbol("Static"),_o=[];let Ut=null;function k(e=!1){_o.push(Ut=e?null:[])}function Eg(){_o.pop(),Ut=_o[_o.length-1]||null}let Mo=1;function $c(e){Mo+=e}function Od(e){return e.dynamicChildren=Mo>0?Ut||Ms:null,Eg(),Mo>0&&Ut&&Ut.push(e),e}function I(e,t,n,o,r,l){return Od(s(e,t,n,o,r,l,!0))}function Q(e,t,n,o,r){return Od(U(e,t,n,o,r,!0))}function Hn(e){return e?e.__v_isVNode===!0:!1}function $n(e,t){return t.shapeFlag&6&&Bs.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const xg=(...e)=>Dg(...e),hl="__vInternal",Md=({key:e})=>e??null,Ar=({ref:e,ref_key:t,ref_for:n})=>e!=null?He(e)||Be(e)||pe(e)?{i:Qe,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,o=0,r=null,l=e===$e?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Md(t),ref:t&&Ar(t),scopeId:ul,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qe};return a?(ka(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),c.key!==c.key&&j("VNode created with invalid key (NaN). VNode type:",c.type),Mo>0&&!i&&Ut&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Ut.push(c),c}const U=xg;function Dg(e,t=null,n=null,o=0,r=null,l=!1){if((!e||e===Zy)&&(e||j(`Invalid vnode type when creating vnode: ${e}.`),e=tt),Hn(e)){const a=Zt(e,t,!0);return n&&ka(a,n),Mo>0&&!l&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(e)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(Rd(e)&&(e=e.__vccOpts),t){t=Fe(t);let{class:a,style:c}=t;a&&!He(a)&&(t.class=We(a)),je(c)&&(Lr(c)&&!ie(c)&&(c=Ue({},c)),t.style=at(c))}const i=He(e)?1:dd(e)?128:bg(e)?64:je(e)?4:pe(e)?2:0;return i&4&&Lr(e)&&(e=fe(e),j("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),s(e,t,n,o,r,i,l,!0)}function Fe(e){return e?Lr(e)||hl in e?Ue({},e):e:null}function Zt(e,t,n=!1){const{props:o,ref:r,patchFlag:l,children:i}=e,a=t?Xe(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Md(a),ref:t&&t.ref?n&&r?ie(r)?r.concat(Ar(t)):[r,Ar(t)]:Ar(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l===-1&&ie(i)?i.map(jd):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function jd(e){const t=Zt(e);return ie(e.children)&&(t.children=e.children.map(jd)),t}function m(e=" ",t=0){return U(er,null,e,t)}function ce(e="",t=!1){return t?(k(),Q(tt,null,e)):U(tt,null,e)}function qt(e){return e==null||typeof e=="boolean"?U(tt):ie(e)?U($e,null,e.slice()):typeof e=="object"?An(e):U(er,null,String(e))}function An(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zt(e)}function ka(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(ie(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),ka(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(hl in t)?t._ctx=Qe:r===3&&Qe&&(Qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else pe(t)?(t={default:t,_ctx:Qe},n=32):(t=String(t),o&64?(n=16,t=[m(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xe(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=We([t.class,o.class]));else if(r==="style")t.style=at([t.style,o.style]);else if(Ko(r)){const l=t[r],i=o[r];i&&l!==i&&!(ie(l)&&l.includes(i))&&(t[r]=l?[].concat(l,i):i)}else r!==""&&(t[r]=o[r])}return t}function Ot(e,t,n,o=null){Pt(e,t,7,[n,o])}const Ag=Id();let Sg=0;function Fg(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||Ag,l={uid:Sg++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ad(o,r),emitsOptions:ud(o,r),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:o.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=Yy(l),l.root=t?t.root:l,l.emit=Fy.bind(null,l),e.ce&&e.ce(l),l}let Ze=null;const It=()=>Ze||Qe,Hs=e=>{Ze=e,e.scope.on()},ms=()=>{Ze&&Ze.scope.off(),Ze=null},$g=zn("slot,component");function mi(e,t){const n=t.isNativeTag||$p;($g(e)||n(e))&&j("Do not use built-in or reserved HTML elements as component id: "+e)}function Pd(e){return e.vnode.shapeFlag&4}let jo=!1;function Bg(e,t=!1){jo=t;const{props:n,children:o}=e.vnode,r=Pd(e);sg(e,n,r,t),dg(e,o);const l=r?Ig(e,t):void 0;return jo=!1,l}function Ig(e,t){var n;const o=e.type;{if(o.name&&mi(o.name,e.appContext.config),o.components){const l=Object.keys(o.components);for(let i=0;i<l.length;i++)mi(l[i],e.appContext.config)}if(o.directives){const l=Object.keys(o.directives);for(let i=0;i<l.length;i++)wd(l[i])}o.compilerOptions&&Tg()&&j('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ll(new Proxy(e.ctx,Ed)),Ky(e);const{setup:r}=o;if(r){const l=e.setupContext=r.length>1?Vd(e):null;Hs(e),_s();const i=yn(r,e,0,[Ts(e.props),l]);if(bs(),ms(),oa(i)){if(i.then(ms,ms),t)return i.then(a=>{Bc(e,a,t)}).catch(a=>{il(a,e,0)});if(e.asyncDep=i,!e.suspense){const a=(n=o.name)!==null&&n!==void 0?n:"Anonymous";j(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Bc(e,i,t)}else Ld(e,t)}function Bc(e,t,n){pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:je(t)?(Hn(t)&&j("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Xp(t),Gy(e)):t!==void 0&&j(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Ld(e,n)}let yi;const Tg=()=>!yi;function Ld(e,t,n){const o=e.type;if(!e.render){if(!t&&yi&&!o.render){const r=o.template||wa(e).template;if(r){cn(e,"compile");const{isCustomElement:l,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=o,u=Ue(Ue({isCustomElement:l,delimiters:a},i),c);o.render=yi(r,u),un(e,"compile")}}e.render=o.render||_t}Hs(e),_s(),Jy(e),bs(),ms(),!o.render&&e.render===_t&&!t&&(o.template?j('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):j("Component is missing template or render function."))}function Og(e){return new Proxy(e.attrs,{get(t,n){return Rr(),Ct(e,"get","$attrs"),t[n]},set(){return j("setupContext.attrs is readonly."),!1},deleteProperty(){return j("setupContext.attrs is readonly."),!1}})}function Vd(e){const t=o=>{if(e.exposed&&j("expose() should be called only once per setup()."),o!=null){let r=typeof o;r==="object"&&(ie(o)?r="array":Be(o)&&(r="ref")),r!=="object"&&j(`expose() should be passed a plain object, received ${r}.`)}e.exposed=o||{}};let n;return Object.freeze({get attrs(){return n||(n=Og(e))},get slots(){return Ts(e.slots)},get emit(){return(o,...r)=>e.emit(o,...r)},expose:t})}function ml(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xp(ll(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hs)return hs[n](e)},has(t,n){return n in t||n in hs}}))}const Mg=/(?:^|[-_])(\w)/g,jg=e=>e.replace(Mg,t=>t.toUpperCase()).replace(/[-_]/g,"");function Po(e,t=!0){return pe(e)?e.displayName||e.name:e.name||t&&e.__name}function yl(e,t,n=!1){let o=Po(t);if(!o&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(o=r[1])}if(!o&&e&&e.parent){const r=l=>{for(const i in l)if(l[i]===t)return i};o=r(e.components||e.parent.type.components)||r(e.appContext.components)}return o?jg(o):n?"App":"Anonymous"}function Rd(e){return pe(e)&&"__vccOpts"in e}const $=(e,t)=>iy(e,t,jo);function Pg(){return Lg().slots}function Lg(){const e=It();return e||j("useContext() called without active instance."),e.setupContext||(e.setupContext=Vd(e))}function wt(e,t,n){const o=arguments.length;return o===2?je(t)&&!ie(t)?Hn(t)?U(e,null,[t]):U(e,t):U(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Hn(n)&&(n=[n]),U(e,t,n))}const Vg=Symbol("ssrContext"),Rg=()=>{{const e=Y(Vg);return e||j("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function Sl(e){return!!(e&&e.__v_isShallow)}function Ng(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},o={style:"color:#9d288c"},r={header(d){return je(d)?d.__isVue?["div",e,"VueInstance"]:Be(d)?["div",{},["span",e,p(d)],"<",a(d.value),">"]:ds(d)?["div",{},["span",e,Sl(d)?"ShallowReactive":"Reactive"],"<",a(d),`>${Nn(d)?" (readonly)":""}`]:Nn(d)?["div",{},["span",e,Sl(d)?"ShallowReadonly":"Readonly"],"<",a(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...l(d.$)]}};function l(d){const f=[];d.type.props&&d.props&&f.push(i("props",fe(d.props))),d.setupState!==Re&&f.push(i("setup",d.setupState)),d.data!==Re&&f.push(i("data",fe(d.data)));const y=c(d,"computed");y&&f.push(i("computed",y));const h=c(d,"inject");return h&&f.push(i("injected",h)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),f}function i(d,f){return f=Ue({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(y=>["div",{},["span",o,y+": "],a(f[y],!1)])]]:["span",{}]}function a(d,f=!0){return typeof d=="number"?["span",t,d]:typeof d=="string"?["span",n,JSON.stringify(d)]:typeof d=="boolean"?["span",o,d]:je(d)?["object",{object:f?fe(d):d}]:["span",n,String(d)]}function c(d,f){const y=d.type;if(pe(y))return;const h={};for(const v in d.ctx)u(y,v,f)&&(h[v]=d.ctx[v]);return h}function u(d,f,y){const h=d[y];if(ie(h)&&h.includes(f)||je(h)&&f in h||d.extends&&u(d.extends,f,y)||d.mixins&&d.mixins.some(v=>u(v,f,y)))return!0}function p(d){return Sl(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const zr="3.2.47",Hg="http://www.w3.org/2000/svg",ss=typeof document<"u"?document:null,Ic=ss&&ss.createElement("template"),Wg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?ss.createElementNS(Hg,e):ss.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>ss.createTextNode(e),createComment:e=>ss.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ss.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,l){const i=n?n.previousSibling:t.lastChild;if(r&&(r===l||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===l||!(r=r.nextSibling)););else{Ic.innerHTML=o?`<svg>${e}</svg>`:e;const a=Ic.content;if(o){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function zg(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function qg(e,t,n){const o=e.style,r=He(n);if(n&&!r){if(t&&!He(t))for(const l in t)n[l]==null&&gi(o,l,"");for(const l in n)gi(o,l,n[l])}else{const l=o.display;r?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=l)}}const Ug=/[^\\];\s*$/,Tc=/\s*!important$/;function gi(e,t,n){if(ie(n))n.forEach(o=>gi(e,t,o));else if(n==null&&(n=""),Ug.test(n)&&j(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const o=Zg(e,t);Tc.test(n)?e.setProperty(gn(o),n.replace(Tc,""),"important"):e[o]=n}}const Oc=["Webkit","Moz","ms"],Fl={};function Zg(e,t){const n=Fl[t];if(n)return n;let o=on(t);if(o!=="filter"&&o in e)return Fl[t]=o;o=gs(o);for(let r=0;r<Oc.length;r++){const l=Oc[r]+o;if(l in e)return Fl[t]=l}return t}const Mc="http://www.w3.org/1999/xlink";function Yg(e,t,n,o,r){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Mc,t.slice(6,t.length)):e.setAttributeNS(Mc,t,n);else{const l=hm(t);n==null||l&&!Sp(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function Kg(e,t,n,o,r,l,i){if(t==="innerHTML"||t==="textContent"){o&&i(o,r,l),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Sp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch(c){a||j(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}a&&e.removeAttribute(t)}function Gg(e,t,n,o){e.addEventListener(t,n,o)}function Xg(e,t,n,o){e.removeEventListener(t,n,o)}function Jg(e,t,n,o,r=null){const l=e._vei||(e._vei={}),i=l[t];if(o&&i)i.value=o;else{const[a,c]=Qg(t);if(o){const u=l[t]=nv(o,r);Gg(e,a,u,c)}else i&&(Xg(e,a,i,c),l[t]=void 0)}}const jc=/(?:Once|Passive|Capture)$/;function Qg(e){let t;if(jc.test(e)){t={};let o;for(;o=e.match(jc);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gn(e.slice(2)),t]}let $l=0;const ev=Promise.resolve(),tv=()=>$l||(ev.then(()=>$l=0),$l=Date.now());function nv(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Pt(sv(o,n.value),t,5,[o])};return n.value=e,n.attached=tv(),n}function sv(e,t){if(ie(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const Pc=/^on[a-z]/,ov=(e,t,n,o,r=!1,l,i,a,c)=>{t==="class"?zg(e,o,r):t==="style"?qg(e,n,o):Ko(t)?Tr(t)||Jg(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rv(e,t,o,r))?Kg(e,t,o,l,i,a,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Yg(e,t,o,r))};function rv(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Pc.test(t)&&pe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Pc.test(t)&&He(n)?!1:t in e}const kn="transition",eo="animation",tr=(e,{slots:t})=>wt(md,Hd(e),t);tr.displayName="Transition";const Nd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lv=tr.props=Ue({},md.props,Nd),Gn=(e,t=[])=>{ie(e)?e.forEach(n=>n(...t)):e&&e(...t)},Lc=e=>e?ie(e)?e.some(t=>t.length>1):e.length>1:!1;function Hd(e){const t={};for(const W in e)W in Nd||(t[W]=e[W]);if(e.css===!1)return t;const{name:n="v",type:o,duration:r,enterFromClass:l=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:u=i,appearToClass:p=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=e,h=iv(r),v=h&&h[0],_=h&&h[1],{onBeforeEnter:x,onEnter:C,onEnterCancelled:b,onLeave:D,onLeaveCancelled:F,onBeforeAppear:T=x,onAppear:L=C,onAppearCancelled:S=b}=t,V=(W,be,ye)=>{xn(W,be?p:a),xn(W,be?u:i),ye&&ye()},G=(W,be)=>{W._isLeaving=!1,xn(W,d),xn(W,y),xn(W,f),be&&be()},ae=W=>(be,ye)=>{const we=W?L:C,Oe=()=>V(be,W,ye);Gn(we,[be,Oe]),Vc(()=>{xn(be,W?c:l),pn(be,W?p:a),Lc(we)||Rc(be,o,v,Oe)})};return Ue(t,{onBeforeEnter(W){Gn(x,[W]),pn(W,l),pn(W,i)},onBeforeAppear(W){Gn(T,[W]),pn(W,c),pn(W,u)},onEnter:ae(!1),onAppear:ae(!0),onLeave(W,be){W._isLeaving=!0;const ye=()=>G(W,be);pn(W,d),zd(),pn(W,f),Vc(()=>{W._isLeaving&&(xn(W,d),pn(W,y),Lc(D)||Rc(W,o,_,ye))}),Gn(D,[W,ye])},onEnterCancelled(W){V(W,!1),Gn(b,[W])},onAppearCancelled(W){V(W,!0),Gn(S,[W])},onLeaveCancelled(W){G(W),Gn(F,[W])}})}function iv(e){if(e==null)return null;if(je(e))return[Bl(e.enter),Bl(e.leave)];{const t=Bl(e);return[t,t]}}function Bl(e){const t=Cm(e);return dy(t,"<transition> explicit duration"),t}function pn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function xn(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Vc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let av=0;function Rc(e,t,n,o){const r=e._endId=++av,l=()=>{r===e._endId&&o()};if(n)return setTimeout(l,n);const{type:i,timeout:a,propCount:c}=Wd(e,t);if(!i)return o();const u=i+"end";let p=0;const d=()=>{e.removeEventListener(u,f),l()},f=y=>{y.target===e&&++p>=c&&d()};setTimeout(()=>{p<c&&d()},a+1),e.addEventListener(u,f)}function Wd(e,t){const n=window.getComputedStyle(e),o=h=>(n[h]||"").split(", "),r=o(`${kn}Delay`),l=o(`${kn}Duration`),i=Nc(r,l),a=o(`${eo}Delay`),c=o(`${eo}Duration`),u=Nc(a,c);let p=null,d=0,f=0;t===kn?i>0&&(p=kn,d=i,f=l.length):t===eo?u>0&&(p=eo,d=u,f=c.length):(d=Math.max(i,u),p=d>0?i>u?kn:eo:null,f=p?p===kn?l.length:c.length:0);const y=p===kn&&/\b(transform|all)(,|$)/.test(o(`${kn}Property`).toString());return{type:p,timeout:d,propCount:f,hasTransform:y}}function Nc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Hc(n)+Hc(e[o])))}function Hc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function zd(){return document.body.offsetHeight}const qd=new WeakMap,Ud=new WeakMap,Zd={name:"TransitionGroup",props:Ue({},lv,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=It(),o=hd();let r,l;return dl(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!hv(r[0].el,n.vnode.el,i))return;r.forEach(pv),r.forEach(dv);const a=r.filter(fv);zd(),a.forEach(c=>{const u=c.el,p=u.style;pn(u,i),p.transform=p.webkitTransform=p.transitionDuration="";const d=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u._moveCb=null,xn(u,i))};u.addEventListener("transitionend",d)})}),()=>{const i=fe(e),a=Hd(i);let c=i.tag||$e;r=l,l=t.default?_a(t.default()):[];for(let u=0;u<l.length;u++){const p=l[u];p.key!=null?Ns(p,Oo(p,a,o,n)):j("<TransitionGroup> children must be keyed.")}if(r)for(let u=0;u<r.length;u++){const p=r[u];Ns(p,Oo(p,a,o,n)),qd.set(p,p.el.getBoundingClientRect())}return U(c,null,l)}}},cv=e=>delete e.mode;Zd.props;const uv=Zd;function pv(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function dv(e){Ud.set(e,e.el.getBoundingClientRect())}function fv(e){const t=qd.get(e),n=Ud.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${o}px,${r}px)`,l.transitionDuration="0s",e}}function hv(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(a=>a&&o.classList.remove(a))}),n.split(/\s+/).forEach(i=>i&&o.classList.add(i)),o.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(o);const{hasTransform:l}=Wd(o);return r.removeChild(o),l}const mv=["ctrl","shift","alt","meta"],yv={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>mv.some(n=>e[`${n}Key`]&&!t.includes(n))},gv=(e,t)=>(n,...o)=>{for(let r=0;r<t.length;r++){const l=yv[t[r]];if(l&&l(n,t))return}return e(n,...o)},vv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hr=(e,t)=>n=>{if(!("key"in n))return;const o=gn(n.key);if(t.some(r=>r===o||vv[r]===o))return e(n)},Yd={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):to(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),to(e,!0),o.enter(e)):o.leave(e,()=>{to(e,!1)}):to(e,t))},beforeUnmount(e,{value:t}){to(e,t)}};function to(e,t){e.style.display=t?e._vod:"none"}const _v=Ue({patchProp:ov},Wg);let Wc;function bv(){return Wc||(Wc=gg(_v))}const wv=(...e)=>{const t=bv().createApp(...e);Cv(t),kv(t);const{mount:n}=t;return t.mount=o=>{const r=Ev(o);if(!r)return;const l=t._component;!pe(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Cv(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Ap(t)||dm(t),writable:!1})}function kv(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){j("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return j(o),n},set(){j(o)}})}}function Ev(e){if(He(e)){const t=document.querySelector(e);return t||j(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&j('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function xv(){Ng()}xv();function vi(e,t={},n){for(const o in e){const r=e[o],l=n?`${n}:${o}`:o;typeof r=="object"&&r!==null?vi(r,t,l):typeof r=="function"&&(t[l]=r)}return t}const Dv={run:e=>e()},Av=()=>Dv,Kd=typeof console.createTask<"u"?console.createTask:Av;function Sv(e,t){const n=t.shift(),o=Kd(n);return e.reduce((r,l)=>r.then(()=>o.run(()=>l(...t))),Promise.resolve())}function Fv(e,t){const n=t.shift(),o=Kd(n);return Promise.all(e.map(r=>o.run(()=>r(...t))))}function Il(e,t){for(const n of[...e])n(t)}class $v{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,o={}){if(!t||typeof n!="function")return()=>{};const r=t;let l;for(;this._deprecatedHooks[t];)l=this._deprecatedHooks[t],t=l.to;if(l&&!o.allowDeprecated){let i=l.message;i||(i=`${r} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let o,r=(...l)=>(typeof o=="function"&&o(),o=void 0,r=void 0,n(...l));return o=this.hook(t,r),o}removeHook(t,n){if(this._hooks[t]){const o=this._hooks[t].indexOf(n);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const o=this._hooks[t]||[];delete this._hooks[t];for(const r of o)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=vi(t),o=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of o.splice(0,o.length))r()}}removeHooks(t){const n=vi(t);for(const o in n)this.removeHook(o,n[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Sv,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Fv,t,...n)}callHookWith(t,n,...o){const r=this._before||this._after?{name:n,args:o,context:{}}:void 0;this._before&&Il(this._before,r);const l=t(n in this._hooks?[...this._hooks[n]]:[],o);return l instanceof Promise?l.finally(()=>{this._after&&r&&Il(this._after,r)}):(this._after&&r&&Il(this._after,r),l)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Bv(){return new $v}function Iv(e){return Array.isArray(e)?e:[e]}const Gd=["title","script","style","noscript"],Tv=["base","meta","link","style","script","noscript"],Ov=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Mv=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],jv=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Xd(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function _i(e){return Xd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Pv(e){let t=9;for(const n of e)for(let o=0;o<n.length;)t=Math.imul(t^n.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Jd(e,t){const{props:n,tag:o}=e;if(Mv.includes(o))return o;if(o==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];o==="meta"&&r.push("name","property","http-equiv");for(const l of r)if(typeof n[l]<"u"){const i=String(n[l]);return t&&!t(i)?!1:`${o}:${l}:${i}`}return!1}const zc=(e,t)=>e==null?t||null:typeof e=="function"?e(t):e,mr=(e,t=!1,n)=>{const{tag:o,$el:r}=e;r&&(Object.entries(o.props).forEach(([l,i])=>{i=String(i);const a=`attr:${l}`;if(l==="class"){if(!i)return;for(const c of i.split(" ")){const u=`${a}:${c}`;n&&n(e,u,()=>r.classList.remove(c)),r.classList.contains(c)||r.classList.add(c)}return}n&&!l.startsWith("data-h-")&&n(e,a,()=>r.removeAttribute(l)),(t||r.getAttribute(l)!==i)&&r.setAttribute(l,i)}),Gd.includes(o.tag)&&(o.textContent&&o.textContent!==r.textContent?r.textContent=o.textContent:o.innerHTML&&o.innerHTML!==r.innerHTML&&(r.innerHTML=o.innerHTML)))};let no=!1;async function Qd(e,t={}){var f,y;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const o=t.document||e.resolvedOptions.document||window.document,r=(await e.resolveTags()).map(a);if(e.resolvedOptions.experimentalHashHydration&&(no=no||e._hash||!1,no)){const h=Pv(r.map(v=>v.tag._h));if(no===h)return;no=h}const l=e._popSideEffectQueue();e.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([v,_])=>{l[v]=_})});const i=(h,v,_)=>{v=`${h.renderId}:${v}`,h.entry&&(h.entry._sde[v]=_),delete l[v]};function a(h){const v=e.headEntries().find(x=>x._i===h._e),_={renderId:!h.key&&h._d?h._d:_i(h),$el:null,shouldRender:!0,tag:h,entry:v,markSideEffect:(x,C)=>i(_,x,C)};return _}const c=[],u={body:[],head:[]},p=h=>{e._elMap[h.renderId]=h.$el,c.push(h),i(h,"el",()=>{var v;(v=h.$el)==null||v.remove(),delete e._elMap[h.renderId]})};for(const h of r){if(await e.hooks.callHook("dom:beforeRenderTag",h),!h.shouldRender)continue;const{tag:v}=h;if(v.tag==="title"){o.title=v.textContent||"",c.push(h);continue}if(v.tag==="htmlAttrs"||v.tag==="bodyAttrs"){h.$el=o[v.tag==="htmlAttrs"?"documentElement":"body"],mr(h,!1,i),c.push(h);continue}if(h.$el=e._elMap[h.renderId],!h.$el&&v.key&&(h.$el=o.querySelector(`${(f=v.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${v.tag}[data-h-${v._h}]`)),h.$el){h.tag._d&&mr(h),p(h);continue}u[(y=v.tagPosition)!=null&&y.startsWith("body")?"body":"head"].push(h)}const d={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([h,v])=>{var x;if(!v.length)return;const _=(x=o==null?void 0:o[h])==null?void 0:x.children;if(_){for(const C of[..._].reverse()){const b=C.tagName.toLowerCase();if(!Tv.includes(b))continue;const D=C.getAttributeNames().reduce((S,V)=>({...S,[V]:C.getAttribute(V)}),{}),F={tag:b,props:D};C.innerHTML&&(F.innerHTML=C.innerHTML);const T=_i(F);let L=v.findIndex(S=>(S==null?void 0:S.renderId)===T);if(L===-1){const S=Jd(F);L=v.findIndex(V=>(V==null?void 0:V.tag._d)&&V.tag._d===S)}if(L!==-1){const S=v[L];S.$el=C,mr(S),p(S),delete v[L]}}v.forEach(C=>{const b=C.tag.tagPosition||"head";d[b]=d[b]||o.createDocumentFragment(),C.$el||(C.$el=o.createElement(C.tag.tag),mr(C,!0)),d[b].appendChild(C.$el),p(C)})}}),d.head&&o.head.appendChild(d.head),d.bodyOpen&&o.body.insertBefore(d.bodyOpen,o.body.firstChild),d.bodyClose&&o.body.appendChild(d.bodyClose);for(const h of c)await e.hooks.callHook("dom:renderTag",h);Object.values(l).forEach(h=>h())}let Tl=null;async function ef(e,t={}){function n(){return Tl=null,Qd(e,t)}const o=t.delayFn||(r=>setTimeout(r,10));return Tl=Tl||new Promise(r=>o(()=>r(n())))}const Lv=e=>({hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),ef(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}});function Vv(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const qc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Uc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in qc?qc[t]:10}const Rv=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Nv(){return{hooks:{"tags:resolve":e=>{const t=n=>{var o;return(o=e.tags.find(r=>r._d===n))==null?void 0:o._p};for(const{prefix:n,offset:o}of Rv)for(const r of e.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(n))){const l=t(r.tagPriority.replace(n,""));typeof l<"u"&&(r._p=l+o)}e.tags.sort((n,o)=>n._p-o._p).sort((n,o)=>Uc(n)-Uc(o))}}}}const Hv=()=>({hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(r=>r.tag==="titleTemplate");const o=t.findIndex(r=>r.tag==="title");if(o!==-1&&n!==-1){const r=zc(t[n].textContent,t[o].textContent);r!==null?t[o].textContent=r||t[o].textContent:delete t[o]}else if(n!==-1){const r=zc(t[n].textContent);r!==null&&(t[n].textContent=r,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}),Wv=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),zv=["link","style","script","noscript"],qv=()=>({hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=_i(e)),e.key&&zv.includes(e.tag)&&(e._h=Xd(e.key),e.props[`data-h-${e._h}`]="")}}}),Zc=["script","link","bodyAttrs"],Uv=()=>{const e=(t,n)=>{const o={},r={};Object.entries(n.props).forEach(([i,a])=>{i.startsWith("on")&&typeof a=="function"?r[i]=a:o[i]=a});let l;return t==="dom"&&n.tag==="script"&&typeof o.src=="string"&&typeof r.onload<"u"&&(l=o.src,delete o.src),{props:o,eventHandlers:r,delayedSrc:l}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!Zc.includes(n.tag)||!Object.entries(n.props).find(([o,r])=>o.startsWith("on")&&typeof r=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!Zc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([l,i])=>l.startsWith("on")&&typeof i=="function"))return;const{props:n,eventHandlers:o,delayedSrc:r}=e("dom",t.tag);Object.keys(o).length&&(t.tag.props=n,t.tag._eventHandlers=o,t.tag._delayedSrc=r)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([r,l])=>{const i=`${t.tag._d||t.tag._p}:${r}`,a=r.slice(2).toLowerCase(),c=`data-h-${a}`;if(t.markSideEffect(i,()=>{}),n.hasAttribute(c))return;const u=l;n.setAttribute(c,""),o.addEventListener(a,u),t.entry&&(t.entry._sde[i]=()=>{o.removeEventListener(a,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}},Zv=["templateParams","htmlAttrs","bodyAttrs"],Yv=()=>({hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(n=>{e.props[n]&&(e.key=e.props[n],delete e.props[n])});const t=e.key?`${e.tag}:${e.key}`:Jd(e);t&&(e._d=t)},"tags:resolve":function(e){const t={};e.tags.forEach(o=>{const r=o._d||o._p,l=t[r];if(l){let i=o==null?void 0:o.tagDuplicateStrategy;if(!i&&Zv.includes(o.tag)&&(i="merge"),i==="merge"){const c=l.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),t[r].props={...c,...o.props};return}else if(o._e===l._e){l._duped=l._duped||[],o._d=`${l._d}:${l._duped.length+1}`,l._duped.push(o);return}const a=Object.keys(o.props).length;if((a===0||a===1&&typeof o.props["data-h-key"]<"u")&&!o.innerHTML&&!o.textContent){delete t[r];return}}t[r]=o});const n=[];Object.values(t).forEach(o=>{const r=o._duped;delete o._duped,n.push(o),r&&n.push(...r)}),e.tags=n}}});function yr(e,t){function n(l){if(["s","pageTitle"].includes(l))return t.pageTitle;let i;return l.includes(".")?i=l.split(".").reduce((a,c)=>a&&a[c]||void 0,t):i=t[l],typeof i<"u"?i||"":!1}let o=e;try{o=decodeURI(e)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const i=n(l.slice(1));typeof i=="string"&&(e=e.replaceAll(new RegExp(`\\${l}(\\W|$)`,"g"),`${i}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function Kv(){return{hooks:{"tags:resolve":e=>{var l;const{tags:t}=e,n=(l=t.find(i=>i.tag==="title"))==null?void 0:l.textContent,o=t.findIndex(i=>i.tag==="templateParams"),r=o!==-1?t[o].props:{};r.pageTitle=r.pageTitle||n||"";for(const i of t)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=yr(i.textContent,r);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=yr(i.props.content,r);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=yr(i.props.href,r);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(a,c)=>typeof c=="string"?yr(c,r):c)}catch{}e.tags=t.filter(i=>i.tag!=="templateParams")}}}}const Gv=typeof window<"u";let tf;const Xv=e=>tf=e,Jv=()=>tf;async function Qv(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await t1(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(o=>jv.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Gd.includes(n.tag))&&(n[o]=n.props[o]),delete n.props[o]}),["innerHTML","textContent"].forEach(o=>{if(n.tag==="script"&&typeof n[o]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[o]=JSON.parse(n[o])}catch{n[o]=""}typeof n[o]=="object"&&(n[o]=JSON.stringify(n[o]))}),n.props.class&&(n.props.class=e1(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(o=>({...n,props:{...n.props,content:o}})):n)}function e1(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function t1(e,t){for(const n of Object.keys(t)){const o=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=o?"true":"":String(t[n])==="false"&&(o?t[n]="false":delete t[n])}return t}const n1=10;async function s1(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,o])=>typeof o<"u"&&Ov.includes(n)).forEach(([n,o])=>{const r=Iv(o);t.push(...r.map(l=>Qv(n,l)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,o)=>(n._e=e._i,n._p=(e._i<<n1)+o,n))}const o1=()=>[Yv(),Nv(),Kv(),Hv(),qv(),Uv(),Wv()],r1=(e={})=>[Lv({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function l1(e={}){const t=i1({...e,plugins:[...r1(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Vv(t.resolvedOptions.document)),Xv(t),t}function i1(e={}){let t=[],n={},o=0;const r=Bv();e!=null&&e.hooks&&r.addHooks(e.hooks),e.plugins=[...o1(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks)),e.document=e.document||(Gv?document:void 0);const l=()=>r.callHook("entries:updated",i),i={resolvedOptions:e,headEntries(){return t},get hooks(){return r},use(a){a.hooks&&r.addHooks(a.hooks)},push(a,c){const u={_i:o++,input:a,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),t.push(u),l(),{dispose(){t=t.filter(p=>p._i!==u._i?!0:(n={...n,...p._sde||{}},p._sde={},l(),!1))},patch(p){t=t.map(d=>(d._i===u._i&&(u.input=d.input=p,l()),d))}}},async resolveTags(){const a={tags:[],entries:[...t]};await r.callHook("entries:resolve",a);for(const c of a.entries){const u=c._t||(p=>p);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const p of await s1(c)){const d={tag:p,entry:c,resolvedOptions:i.resolvedOptions};await r.callHook("tag:normalise",d),a.tags.push(d.tag)}}return await r.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return i.hooks.callHook("init",i),i}function a1(e){return typeof e=="function"?e():E(e)}function qr(e,t=""){if(e instanceof Promise)return e;const n=a1(e);return!e||!n?n:Array.isArray(n)?n.map(o=>qr(o,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([o,r])=>o==="titleTemplate"||o.startsWith("on")?[o,E(r)]:[o,qr(r,o)])):n}const c1=zr.startsWith("3"),u1=typeof window<"u",nf="usehead";function Ea(){return It()&&Y(nf)||Jv()}function p1(e){return{install(n){c1&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(nf,e))}}.install}function d1(e={}){const t=l1({...e,domDelayFn:n=>setTimeout(()=>it(()=>n()),10),plugins:[f1(),...(e==null?void 0:e.plugins)||[]]});return t.install=p1(t),t}const f1=()=>({hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=qr(t.input)}}});function h1(e,t={}){const n=Ea(),o=z(!1),r=z({});ws(()=>{r.value=o.value?{}:qr(e)});const l=n.push(r.value,t);return ve(r,a=>{l.patch(a)}),It()&&(Qo(()=>{l.dispose()}),_d(()=>{o.value=!0}),vd(()=>{o.value=!1})),l}function m1(e,t={}){return Ea().push(e,t)}function xa(e,t={}){var o;const n=Ea();if(n){const r=u1||!!((o=n.resolvedOptions)!=null&&o.document);return t.mode==="server"&&r||t.mode==="client"&&!r?void 0:r?h1(e,t):m1(e,t)}}const y1=e=>xa({htmlAttrs:e});function g1(e,t){const n=d1(t||{}),o={unhead:n,install(r){zr.startsWith("3")&&(r.config.globalProperties.$head=n,r.provide("usehead",n))},use(r){n.use(r)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(r,l){return n.push(r,l)},addEntry(r,l){return n.push(r,l)},addHeadObjs(r,l){return n.push(r,l)},addReactiveEntry(r,l){const i=xa(r,l);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,l){l?Qd(n,{document:r}):ef(n,{delayFn:i=>setTimeout(()=>i(),50),document:r})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=o.addHeadObjs,n.updateDOM=o.updateDOM,n.hooks.hook("dom:beforeRender",r=>{for(const l of o.hooks["before:dom"])l()===!1&&(r.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const bo=Symbol("v-click-clicks"),os=Symbol("v-click-clicks-elements"),bi=Symbol("v-click-clicks-order-map"),wo=Symbol("v-click-clicks-disabled"),sf=Symbol("slidev-slide-scale"),te=Symbol("slidev-slidev-context"),v1=Symbol("slidev-route"),_1=Symbol("slidev-slide-context"),ts="slidev-vclick-target",Ol="slidev-vclick-hidden",b1="slidev-vclick-fade",Ml="slidev-vclick-hidden-explicitly",so="slidev-vclick-current",gr="slidev-vclick-prior",w1=["localhost","127.0.0.1"];let C1=e=>crypto.getRandomValues(new Uint8Array(e)),k1=(e,t,n)=>{let o=(2<<Math.log(e.length-1)/Math.LN2)-1,r=-~(1.6*o*t/e.length);return(l=t)=>{let i="";for(;;){let a=n(r),c=r;for(;c--;)if(i+=e[a[c]&o]||"",i.length===l)return i}}},E1=(e,t=21)=>k1(e,t,C1),x1=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function wi(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function D1(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const r=[];let l=t;for(;l<n;)r.push(l),l+=o||1;return r}function A1(e){return e!=null}function S1(e,t){return Object.fromEntries(Object.entries(e).map(([n,o])=>t(n,o)).filter(A1))}const mo={theme:"vuetiful",title:"Vue.js - Why so much love?",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Source Sans Pro"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"IBM Plex Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"IBM Plex Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Source Sans Pro","IBM Plex Serif","IBM Plex Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",hightlighter:"shiki",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center"},Se=mo,On=Se.aspectRatio??16/9,Mn=Se.canvasWidth??980,Da=Math.ceil(Mn/On),Aa=$(()=>S1(Se.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Nt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const ks=ze({page:0,clicks:0});let F1=[],$1=[];Nt(ks,"$syncUp",!0);Nt(ks,"$syncDown",!0);Nt(ks,"$paused",!1);Nt(ks,"$onSet",e=>F1.push(e));Nt(ks,"$onPatch",e=>$1.push(e));Nt(ks,"$patch",async()=>!1);function of(e,t,n=!1){const o=[];let r=!1,l=!1,i,a;const c=ze(t);function u(y){o.push(y)}function p(y,h){c[y]!==h&&(clearTimeout(i),r=!0,c[y]=h,i=setTimeout(()=>r=!1,0))}function d(y){r||(clearTimeout(a),l=!0,Object.entries(y).forEach(([h,v])=>{c[h]=v}),a=setTimeout(()=>l=!1,0))}function f(y){let h;n?n&&window.addEventListener("storage",_=>{_&&_.key===y&&_.newValue&&d(JSON.parse(_.newValue))}):(h=new BroadcastChannel(y),h.addEventListener("message",_=>d(_.data)));function v(){!n&&h&&!l?h.postMessage(fe(c)):n&&!l&&window.localStorage.setItem(y,JSON.stringify(c)),r||o.forEach(_=>_(c))}if(ve(c,v,{deep:!0}),n){const _=window.localStorage.getItem(y);_&&d(JSON.parse(_))}}return{init:f,onPatch:u,patch:p,state:c}}const{init:B1,onPatch:I1,patch:oo,state:jl}=of(ks,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Es=ze({});let T1=[],O1=[];Nt(Es,"$syncUp",!0);Nt(Es,"$syncDown",!0);Nt(Es,"$paused",!1);Nt(Es,"$onSet",e=>T1.push(e));Nt(Es,"$onPatch",e=>O1.push(e));Nt(Es,"$patch",async()=>!1);const{init:M1,onPatch:j1,patch:rf,state:Ur}=of(Es,{},!1),P1="modulepreload",L1=function(e){return"/vue-js-why-so-much-love/"+e},Yc={},jn=function(t,n,o){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=L1(l),l in Yc)return;Yc[l]=!0;const i=l.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!o)for(let p=r.length-1;p>=0;p--){const d=r[p];if(d.href===l&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${a}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":P1,i||(u.as="script",u.crossOrigin=""),u.href=l,document.head.appendChild(u),i)return new Promise((p,d)=>{u.addEventListener("load",p),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};var Kc;const Yt=typeof window<"u",V1=e=>typeof e<"u",R1=Object.prototype.toString,Lo=e=>typeof e=="function",N1=e=>typeof e=="number",lf=e=>typeof e=="string",Ci=e=>R1.call(e)==="[object Object]",ki=()=>+Date.now(),Vs=()=>{},H1=Yt&&((Kc=window==null?void 0:window.navigator)==null?void 0:Kc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function rt(e){return typeof e=="function"?e():E(e)}function W1(e,t){function n(...o){return new Promise((r,l)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(r).catch(l)})}return n}const af=e=>e();function z1(e=af){const t=z(!0);function n(){t.value=!1}function o(){t.value=!0}const r=(...l)=>{t.value&&e(...l)};return{isActive:en(t),pause:n,resume:o,eventFilter:r}}function q1(e){return e}function U1(e,t){var n;if(typeof e=="number")return e+t;const o=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(o.length),l=parseFloat(o)+t;return Number.isNaN(l)?e:l+r}function Z1(e,t){let n,o,r;const l=z(!0),i=()=>{l.value=!0,r()};ve(e,i,{flush:"sync"});const a=Lo(t)?t:t.get,c=Lo(t)?void 0:t.set,u=Jp((p,d)=>(o=p,r=d,{get(){return l.value&&(n=a(),l.value=!1),o(),n},set(f){c==null||c(f)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function ln(e){return ia()?(jp(e),!0):!1}function Y1(e){if(!Be(e))return ze(e);const t=new Proxy({},{get(n,o,r){return E(Reflect.get(e.value,o,r))},set(n,o,r){return Be(e.value[o])&&!Be(r)?e.value[o].value=r:e.value[o]=r,!0},deleteProperty(n,o){return Reflect.deleteProperty(e.value,o)},has(n,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return ze(t)}function cf(e){return typeof e=="function"?$(e):z(e)}var K1=Object.defineProperty,G1=Object.defineProperties,X1=Object.getOwnPropertyDescriptors,Gc=Object.getOwnPropertySymbols,J1=Object.prototype.hasOwnProperty,Q1=Object.prototype.propertyIsEnumerable,Xc=(e,t,n)=>t in e?K1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,e0=(e,t)=>{for(var n in t||(t={}))J1.call(t,n)&&Xc(e,n,t[n]);if(Gc)for(var n of Gc(t))Q1.call(t,n)&&Xc(e,n,t[n]);return e},t0=(e,t)=>G1(e,X1(t));function n0(e){if(!Be(e))return sy(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=Jp(()=>({get(){return e.value[n]},set(o){if(Array.isArray(e.value)){const r=[...e.value];r[n]=o,e.value=r}else{const r=t0(e0({},e.value),{[n]:o});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function Sa(e,t=!0){It()?Cs(e):t?e():it(e)}function s0(e){It()&&fl(e)}function o0(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:r=!1}=n;let l=null;const i=z(!1);function a(){l&&(clearInterval(l),l=null)}function c(){i.value=!1,a()}function u(){const p=rt(t);p<=0||(i.value=!0,r&&e(),a(),l=setInterval(e,p))}if(o&&Yt&&u(),Be(t)||Lo(t)){const p=ve(t,()=>{i.value&&Yt&&u()});ln(p)}return ln(c),{isActive:i,pause:c,resume:u}}function r0(e,t,n={}){const{immediate:o=!0}=n,r=z(!1);let l=null;function i(){l&&(clearTimeout(l),l=null)}function a(){r.value=!1,i()}function c(...u){i(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=null,e(...u)},rt(t))}return o&&(r.value=!0,Yt&&c()),ln(a),{isPending:en(r),start:c,stop:a}}function uf(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,r=Be(e),l=z(e);function i(a){if(arguments.length)return l.value=a,l.value;{const c=rt(n);return l.value=l.value===c?rt(o):c,l.value}}return r?i:[l,i]}var Jc=Object.getOwnPropertySymbols,l0=Object.prototype.hasOwnProperty,i0=Object.prototype.propertyIsEnumerable,a0=(e,t)=>{var n={};for(var o in e)l0.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Jc)for(var o of Jc(e))t.indexOf(o)<0&&i0.call(e,o)&&(n[o]=e[o]);return n};function c0(e,t,n={}){const o=n,{eventFilter:r=af}=o,l=a0(o,["eventFilter"]);return ve(e,W1(r,t),l)}var u0=Object.defineProperty,p0=Object.defineProperties,d0=Object.getOwnPropertyDescriptors,Zr=Object.getOwnPropertySymbols,pf=Object.prototype.hasOwnProperty,df=Object.prototype.propertyIsEnumerable,Qc=(e,t,n)=>t in e?u0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f0=(e,t)=>{for(var n in t||(t={}))pf.call(t,n)&&Qc(e,n,t[n]);if(Zr)for(var n of Zr(t))df.call(t,n)&&Qc(e,n,t[n]);return e},h0=(e,t)=>p0(e,d0(t)),m0=(e,t)=>{var n={};for(var o in e)pf.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Zr)for(var o of Zr(e))t.indexOf(o)<0&&df.call(e,o)&&(n[o]=e[o]);return n};function y0(e,t,n={}){const o=n,{eventFilter:r}=o,l=m0(o,["eventFilter"]),{eventFilter:i,pause:a,resume:c,isActive:u}=z1(r);return{stop:c0(e,t,h0(f0({},l),{eventFilter:i})),pause:a,resume:c,isActive:u}}function Ft(e){var t;const n=rt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const nt=Yt?window:void 0,ff=Yt?window.document:void 0,g0=Yt?window.navigator:void 0;function _e(...e){let t,n,o,r;if(lf(e[0])||Array.isArray(e[0])?([n,o,r]=e,t=nt):[t,n,o,r]=e,!t)return Vs;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const l=[],i=()=>{l.forEach(p=>p()),l.length=0},a=(p,d,f,y)=>(p.addEventListener(d,f,y),()=>p.removeEventListener(d,f,y)),c=ve(()=>[Ft(t),rt(r)],([p,d])=>{i(),p&&l.push(...n.flatMap(f=>o.map(y=>a(p,f,y,d))))},{immediate:!0,flush:"post"}),u=()=>{c(),i()};return ln(u),u}let eu=!1;function v0(e,t,n={}){const{window:o=nt,ignore:r=[],capture:l=!0,detectIframe:i=!1}=n;if(!o)return;H1&&!eu&&(eu=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",Vs)));let a=!0;const c=f=>r.some(y=>{if(typeof y=="string")return Array.from(o.document.querySelectorAll(y)).some(h=>h===f.target||f.composedPath().includes(h));{const h=Ft(y);return h&&(f.target===h||f.composedPath().includes(h))}}),p=[_e(o,"click",f=>{const y=Ft(e);if(!(!y||y===f.target||f.composedPath().includes(y))){if(f.detail===0&&(a=!c(f)),!a){a=!0;return}t(f)}},{passive:!0,capture:l}),_e(o,"pointerdown",f=>{const y=Ft(e);y&&(a=!f.composedPath().includes(y)&&!c(f))},{passive:!0}),i&&_e(o,"blur",f=>{var y;const h=Ft(e);((y=o.document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&t(f)})].filter(Boolean);return()=>p.forEach(f=>f())}const _0=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function b0(...e){let t,n,o={};e.length===3?(t=e[0],n=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],o=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:r=nt,eventName:l="keydown",passive:i=!1}=o,a=_0(t);return _e(r,l,u=>{a(u)&&n(u)},i)}function w0(e={}){var t;const{window:n=nt}=e,o=(t=e.document)!=null?t:n==null?void 0:n.document,r=Z1(()=>null,()=>o==null?void 0:o.activeElement);return n&&(_e(n,"blur",l=>{l.relatedTarget===null&&r.trigger()},!0),_e(n,"focus",r.trigger,!0)),r}function nr(e,t=!1){const n=z(),o=()=>n.value=!!e();return o(),Sa(o,t),n}function Is(e,t={}){const{window:n=nt}=t,o=nr(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const l=z(!1),i=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a))},a=()=>{o.value&&(i(),r=n.matchMedia(cf(e).value),l.value=r.matches,"addEventListener"in r?r.addEventListener("change",a):r.addListener(a))};return ws(a),ln(()=>i()),l}const C0={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var k0=Object.defineProperty,tu=Object.getOwnPropertySymbols,E0=Object.prototype.hasOwnProperty,x0=Object.prototype.propertyIsEnumerable,nu=(e,t,n)=>t in e?k0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D0=(e,t)=>{for(var n in t||(t={}))E0.call(t,n)&&nu(e,n,t[n]);if(tu)for(var n of tu(t))x0.call(t,n)&&nu(e,n,t[n]);return e};function A0(e,t={}){function n(a,c){let u=e[a];return c!=null&&(u=U1(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=nt}=t;function r(a){return o?o.matchMedia(a).matches:!1}const l=a=>Is(`(min-width: ${n(a)})`,t),i=Object.keys(e).reduce((a,c)=>(Object.defineProperty(a,c,{get:()=>l(c),enumerable:!0,configurable:!0}),a),{});return D0({greater(a){return Is(`(min-width: ${n(a,.1)})`,t)},greaterOrEqual:l,smaller(a){return Is(`(max-width: ${n(a,-.1)})`,t)},smallerOrEqual(a){return Is(`(max-width: ${n(a)})`,t)},between(a,c){return Is(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(a){return r(`(min-width: ${n(a,.1)})`)},isGreaterOrEqual(a){return r(`(min-width: ${n(a)})`)},isSmaller(a){return r(`(max-width: ${n(a,-.1)})`)},isSmallerOrEqual(a){return r(`(max-width: ${n(a)})`)},isInBetween(a,c){return r(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`)}},i)}function S0(e={}){const{navigator:t=g0,read:n=!1,source:o,copiedDuring:r=1500,legacy:l=!1}=e,i=["copy","cut"],a=nr(()=>t&&"clipboard"in t),c=$(()=>a.value||l),u=z(""),p=z(!1),d=r0(()=>p.value=!1,r);function f(){a.value?t.clipboard.readText().then(_=>{u.value=_}):u.value=v()}if(c.value&&n)for(const _ of i)_e(_,f);async function y(_=rt(o)){c.value&&_!=null&&(a.value?await t.clipboard.writeText(_):h(_),u.value=_,p.value=!0,d.start())}function h(_){const x=document.createElement("textarea");x.value=_??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function v(){var _,x,C;return(C=(x=(_=document==null?void 0:document.getSelection)==null?void 0:_.call(document))==null?void 0:x.toString())!=null?C:""}return{isSupported:c,text:u,copied:p,copy:y}}function F0(e){return JSON.parse(JSON.stringify(e))}const Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xi="__vueuse_ssr_handlers__";Ei[xi]=Ei[xi]||{};const $0=Ei[xi];function B0(e,t){return $0[e]||t}function I0(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var T0=Object.defineProperty,su=Object.getOwnPropertySymbols,O0=Object.prototype.hasOwnProperty,M0=Object.prototype.propertyIsEnumerable,ou=(e,t,n)=>t in e?T0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ru=(e,t)=>{for(var n in t||(t={}))O0.call(t,n)&&ou(e,n,t[n]);if(su)for(var n of su(t))M0.call(t,n)&&ou(e,n,t[n]);return e};const j0={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},lu="vueuse-storage";function P0(e,t,n,o={}){var r;const{flush:l="pre",deep:i=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:d=nt,eventFilter:f,onError:y=S=>{console.error(S)}}=o,h=(p?rn:z)(t);if(!n)try{n=B0("getDefaultStorage",()=>{var S;return(S=nt)==null?void 0:S.localStorage})()}catch(S){y(S)}if(!n)return h;const v=rt(t),_=I0(v),x=(r=o.serializer)!=null?r:j0[_],{pause:C,resume:b}=y0(h,()=>D(h.value),{flush:l,deep:i,eventFilter:f});return d&&a&&(_e(d,"storage",L),_e(d,lu,T)),L(),h;function D(S){try{if(S==null)n.removeItem(e);else{const V=x.write(S),G=n.getItem(e);G!==V&&(n.setItem(e,V),d&&d.dispatchEvent(new CustomEvent(lu,{detail:{key:e,oldValue:G,newValue:V,storageArea:n}})))}}catch(V){y(V)}}function F(S){const V=S?S.newValue:n.getItem(e);if(V==null)return c&&v!==null&&n.setItem(e,x.write(v)),v;if(!S&&u){const G=x.read(V);return Lo(u)?u(G,v):_==="object"&&!Array.isArray(G)?ru(ru({},v),G):G}else return typeof V!="string"?V:x.read(V)}function T(S){L(S.detail)}function L(S){if(!(S&&S.storageArea!==n)){if(S&&S.key==null){h.value=v;return}if(!(S&&S.key!==e)){C();try{h.value=F(S)}catch(V){y(V)}finally{S?it(b):b()}}}}}function L0(e){return Is("(prefers-color-scheme: dark)",e)}var V0=Object.defineProperty,R0=Object.defineProperties,N0=Object.getOwnPropertyDescriptors,iu=Object.getOwnPropertySymbols,H0=Object.prototype.hasOwnProperty,W0=Object.prototype.propertyIsEnumerable,au=(e,t,n)=>t in e?V0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z0=(e,t)=>{for(var n in t||(t={}))H0.call(t,n)&&au(e,n,t[n]);if(iu)for(var n of iu(t))W0.call(t,n)&&au(e,n,t[n]);return e},q0=(e,t)=>R0(e,N0(t));function L$(e,t={}){var n,o,r;const l=(n=t.draggingElement)!=null?n:nt,i=(o=t.handle)!=null?o:e,a=z((r=rt(t.initialValue))!=null?r:{x:0,y:0}),c=z(),u=h=>t.pointerTypes?t.pointerTypes.includes(h.pointerType):!0,p=h=>{rt(t.preventDefault)&&h.preventDefault(),rt(t.stopPropagation)&&h.stopPropagation()},d=h=>{var v;if(!u(h)||rt(t.exact)&&h.target!==rt(e))return;const _=rt(e).getBoundingClientRect(),x={x:h.clientX-_.left,y:h.clientY-_.top};((v=t.onStart)==null?void 0:v.call(t,x,h))!==!1&&(c.value=x,p(h))},f=h=>{var v;u(h)&&c.value&&(a.value={x:h.clientX-c.value.x,y:h.clientY-c.value.y},(v=t.onMove)==null||v.call(t,a.value,h),p(h))},y=h=>{var v;u(h)&&c.value&&(c.value=void 0,(v=t.onEnd)==null||v.call(t,a.value,h),p(h))};return Yt&&(_e(i,"pointerdown",d,!0),_e(l,"pointermove",f,!0),_e(l,"pointerup",y,!0)),q0(z0({},n0(a)),{position:a,isDragging:$(()=>!!c.value),style:$(()=>`left:${a.value.x}px;top:${a.value.y}px;`)})}var cu=Object.getOwnPropertySymbols,U0=Object.prototype.hasOwnProperty,Z0=Object.prototype.propertyIsEnumerable,Y0=(e,t)=>{var n={};for(var o in e)U0.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&cu)for(var o of cu(e))t.indexOf(o)<0&&Z0.call(e,o)&&(n[o]=e[o]);return n};function K0(e,t,n={}){const o=n,{window:r=nt}=o,l=Y0(o,["window"]);let i;const a=nr(()=>r&&"ResizeObserver"in r),c=()=>{i&&(i.disconnect(),i=void 0)},u=ve(()=>Ft(e),d=>{c(),a.value&&r&&d&&(i=new ResizeObserver(t),i.observe(d,l))},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return ln(p),{isSupported:a,stop:p}}function G0(e,t={}){const{immediate:n=!0,window:o=nt}=t,r=z(!1);let l=0,i=null;function a(p){if(!r.value||!o)return;const d=p-l;e({delta:d,timestamp:p}),l=p,i=o.requestAnimationFrame(a)}function c(){!r.value&&o&&(r.value=!0,i=o.requestAnimationFrame(a))}function u(){r.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return n&&c(),ln(u),{isActive:en(r),pause:u,resume:c}}function X0(e,t={width:0,height:0},n={}){const{window:o=nt,box:r="content-box"}=n,l=$(()=>{var c,u;return(u=(c=Ft(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),i=z(t.width),a=z(t.height);return K0(e,([c])=>{const u=r==="border-box"?c.borderBoxSize:r==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&l.value){const p=Ft(e);if(p){const d=o.getComputedStyle(p);i.value=parseFloat(d.width),a.value=parseFloat(d.height)}}else if(u){const p=Array.isArray(u)?u:[u];i.value=p.reduce((d,{inlineSize:f})=>d+f,0),a.value=p.reduce((d,{blockSize:f})=>d+f,0)}else i.value=c.contentRect.width,a.value=c.contentRect.height},n),ve(()=>Ft(e),c=>{i.value=c?t.width:0,a.value=c?t.height:0}),{width:i,height:a}}const uu=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function J0(e,t={}){const{document:n=ff,autoExit:o=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),l=z(!1);let i=uu[0];const a=nr(()=>{if(n){for(const v of uu)if(v[1]in n)return i=v,!0}else return!1;return!1}),[c,u,p,,d]=i;async function f(){a.value&&(n!=null&&n[p]&&await n[u](),l.value=!1)}async function y(){if(!a.value)return;await f();const v=Ft(r);v&&(await v[c](),l.value=!0)}async function h(){l.value?await f():await y()}return n&&_e(n,d,()=>{l.value=!!(n!=null&&n[p])},!1),o&&ln(f),{isSupported:a,isFullscreen:l,enter:y,exit:f,toggle:h}}function Q0(e,t,n={}){const{root:o,rootMargin:r="0px",threshold:l=.1,window:i=nt}=n,a=nr(()=>i&&"IntersectionObserver"in i);let c=Vs;const u=a.value?ve(()=>({el:Ft(e),root:Ft(o)}),({el:d,root:f})=>{if(c(),!d)return;const y=new IntersectionObserver(t,{root:f,rootMargin:r,threshold:l});y.observe(d),c=()=>{y.disconnect(),c=Vs}},{immediate:!0,flush:"post"}):Vs,p=()=>{c(),u()};return ln(p),{isSupported:a,stop:p}}function Kt(e,t,n={}){const{window:o=nt}=n;return P0(e,t,o==null?void 0:o.localStorage,n)}const e_={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function t_(e={}){const{reactive:t=!1,target:n=nt,aliasMap:o=e_,passive:r=!0,onEventFired:l=Vs}=e,i=ze(new Set),a={toJSON(){return{}},current:i},c=t?ze(a):a,u=new Set,p=new Set;function d(v,_){v in c&&(t?c[v]=_:c[v].value=_)}function f(){i.clear();for(const v of p)d(v,!1)}function y(v,_){var x,C;const b=(x=v.key)==null?void 0:x.toLowerCase(),F=[(C=v.code)==null?void 0:C.toLowerCase(),b].filter(Boolean);b&&(_?i.add(b):i.delete(b));for(const T of F)p.add(T),d(T,_);b==="meta"&&!_?(u.forEach(T=>{i.delete(T),d(T,!1)}),u.clear()):typeof v.getModifierState=="function"&&v.getModifierState("Meta")&&_&&[...i,...F].forEach(T=>u.add(T))}_e(n,"keydown",v=>(y(v,!0),l(v)),{passive:r}),_e(n,"keyup",v=>(y(v,!1),l(v)),{passive:r}),_e("blur",f,{passive:!0}),_e("focus",f,{passive:!0});const h=new Proxy(c,{get(v,_,x){if(typeof _!="string")return Reflect.get(v,_,x);if(_=_.toLowerCase(),_ in o&&(_=o[_]),!(_ in c))if(/[+_-]/.test(_)){const b=_.split(/[+_-]/g).map(D=>D.trim());c[_]=$(()=>b.every(D=>E(h[D])))}else c[_]=z(!1);const C=Reflect.get(v,_,x);return t?E(C):C}});return h}function V$(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:r={x:0,y:0},window:l=nt,eventFilter:i}=e,a=z(r.x),c=z(r.y),u=z(null),p=v=>{t==="page"?(a.value=v.pageX,c.value=v.pageY):t==="client"?(a.value=v.clientX,c.value=v.clientY):t==="movement"&&(a.value=v.movementX,c.value=v.movementY),u.value="mouse"},d=()=>{a.value=r.x,c.value=r.y},f=v=>{if(v.touches.length>0){const _=v.touches[0];t==="page"?(a.value=_.pageX,c.value=_.pageY):t==="client"&&(a.value=_.clientX,c.value=_.clientY),u.value="touch"}},y=v=>i===void 0?p(v):i(()=>p(v),{}),h=v=>i===void 0?f(v):i(()=>f(v),{});return l&&(_e(l,"mousemove",y,{passive:!0}),_e(l,"dragover",y,{passive:!0}),n&&t!=="movement"&&(_e(l,"touchstart",h,{passive:!0}),_e(l,"touchmove",h,{passive:!0}),o&&_e(l,"touchend",d,{passive:!0}))),{x:a,y:c,sourceType:u}}var mn;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(mn||(mn={}));function n_(e,t={}){const n=cf(e),{threshold:o=50,onSwipe:r,onSwipeEnd:l,onSwipeStart:i}=t,a=ze({x:0,y:0}),c=(T,L)=>{a.x=T,a.y=L},u=ze({x:0,y:0}),p=(T,L)=>{u.x=T,u.y=L},d=$(()=>a.x-u.x),f=$(()=>a.y-u.y),{max:y,abs:h}=Math,v=$(()=>y(h(d.value),h(f.value))>=o),_=z(!1),x=z(!1),C=$(()=>v.value?h(d.value)>h(f.value)?d.value>0?mn.LEFT:mn.RIGHT:f.value>0?mn.UP:mn.DOWN:mn.NONE),b=T=>{var L,S,V;const G=T.buttons===0,ae=T.buttons===1;return(V=(S=(L=t.pointerTypes)==null?void 0:L.includes(T.pointerType))!=null?S:G||ae)!=null?V:!0},D=[_e(e,"pointerdown",T=>{var L,S;if(!b(T))return;x.value=!0,(S=(L=n.value)==null?void 0:L.style)==null||S.setProperty("touch-action","none");const V=T.target;V==null||V.setPointerCapture(T.pointerId);const{clientX:G,clientY:ae}=T;c(G,ae),p(G,ae),i==null||i(T)}),_e(e,"pointermove",T=>{if(!b(T)||!x.value)return;const{clientX:L,clientY:S}=T;p(L,S),!_.value&&v.value&&(_.value=!0),_.value&&(r==null||r(T))}),_e(e,"pointerup",T=>{var L,S;b(T)&&(_.value&&(l==null||l(T,C.value)),x.value=!1,_.value=!1,(S=(L=n.value)==null?void 0:L.style)==null||S.setProperty("touch-action","initial"))})],F=()=>D.forEach(T=>T());return{isSwiping:en(_),direction:en(C),posStart:en(a),posEnd:en(u),distanceX:d,distanceY:f,stop:F}}let s_=0;function R$(e,t={}){const n=z(!1),{document:o=ff,immediate:r=!0,manual:l=!1,id:i=`vueuse_styletag_${++s_}`}=t,a=z(e);let c=()=>{};const u=()=>{if(!o)return;const d=o.getElementById(i)||o.createElement("style");d.isConnected||(d.type="text/css",d.id=i,t.media&&(d.media=t.media),o.head.appendChild(d)),!n.value&&(c=ve(a,f=>{d.textContent=f},{immediate:!0}),n.value=!0)},p=()=>{!o||!n.value||(c(),o.head.removeChild(o.getElementById(i)),n.value=!1)};return r&&!l&&Sa(u),l||ln(p),{id:i,css:a,unload:p,load:u,isLoaded:en(n)}}var o_=Object.defineProperty,pu=Object.getOwnPropertySymbols,r_=Object.prototype.hasOwnProperty,l_=Object.prototype.propertyIsEnumerable,du=(e,t,n)=>t in e?o_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i_=(e,t)=>{for(var n in t||(t={}))r_.call(t,n)&&du(e,n,t[n]);if(pu)for(var n of pu(t))l_.call(t,n)&&du(e,n,t[n]);return e};function N$(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:r="requestAnimationFrame",callback:l}=e,i=z(ki()+n),a=()=>i.value=ki()+n,c=l?()=>{a(),l(i.value)}:a,u=r==="requestAnimationFrame"?G0(c,{immediate:o}):o0(c,r,{immediate:o});return t?i_({timestamp:i},u):i}var a_=Object.defineProperty,fu=Object.getOwnPropertySymbols,c_=Object.prototype.hasOwnProperty,u_=Object.prototype.propertyIsEnumerable,hu=(e,t,n)=>t in e?a_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p_=(e,t)=>{for(var n in t||(t={}))c_.call(t,n)&&hu(e,n,t[n]);if(fu)for(var n of fu(t))u_.call(t,n)&&hu(e,n,t[n]);return e};const d_={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};p_({linear:q1},d_);function tn(e,t,n,o={}){var r,l,i;const{clone:a=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:d}=o,f=It(),y=n||(f==null?void 0:f.emit)||((r=f==null?void 0:f.$emit)==null?void 0:r.bind(f))||((i=(l=f==null?void 0:f.proxy)==null?void 0:l.$emit)==null?void 0:i.bind(f==null?void 0:f.proxy));let h=u;t||(t="modelValue"),h=u||h||`update:${t.toString()}`;const v=x=>a?Lo(a)?a(x):F0(x):x,_=()=>V1(e[t])?v(e[t]):d;if(c){const x=_(),C=z(x);return ve(()=>e[t],b=>C.value=v(b)),ve(C,b=>{(b!==e[t]||p)&&y(h,b)},{deep:p}),C}else return $({get(){return _()},set(x){y(h,x)}})}function H$({window:e=nt}={}){if(!e)return z(!1);const t=z(e.document.hasFocus());return _e(e,"blur",()=>{t.value=!1}),_e(e,"focus",()=>{t.value=!0}),t}function f_(e={}){const{window:t=nt,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:r=!0,includeScrollbar:l=!0}=e,i=z(n),a=z(o),c=()=>{t&&(l?(i.value=t.innerWidth,a.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};return c(),Sa(c),_e("resize",c,{passive:!0}),r&&_e("orientationchange",c,{passive:!0}),{width:i,height:a}}function h_(){return hf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function hf(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const m_=typeof Proxy=="function",y_="devtools-plugin:setup",g_="plugin:settings:set";let As,Di;function v_(){var e;return As!==void 0||(typeof window<"u"&&window.performance?(As=!0,Di=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(As=!0,Di=global.perf_hooks.performance):As=!1),As}function __(){return v_()?Di.now():Date.now()}class b_{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const o={};if(t.settings)for(const i in t.settings){const a=t.settings[i];o[i]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let l=Object.assign({},o);try{const i=localStorage.getItem(r),a=JSON.parse(i);Object.assign(l,a)}catch{}this.fallbacks={getSettings(){return l},setSettings(i){try{localStorage.setItem(r,JSON.stringify(i))}catch{}l=i},now(){return __()}},n&&n.on(g_,(i,a)=>{i===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(i,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(i,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function w_(e,t){const n=e,o=hf(),r=h_(),l=m_&&n.enableEarlyProxy;if(r&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))r.emit(y_,e,t);else{const i=l?new b_(n,r):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const fn=typeof window<"u";function C_(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Me=Object.assign;function Pl(e,t){const n={};for(const o in t){const r=t[o];n[o]=Bt(r)?r.map(e):e(r)}return n}const Co=()=>{},Bt=Array.isArray;function Ae(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const k_=/\/$/,E_=e=>e.replace(k_,"");function Ll(e,t,n="/"){let o,r={},l="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(o=t.slice(0,c),l=t.slice(c+1,a>-1?a:t.length),r=e(l)),a>-1&&(o=o||t.slice(0,a),i=t.slice(a,t.length)),o=A_(o??t,n),{fullPath:o+(l&&"?")+l+i,path:o,query:r,hash:i}}function x_(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function mu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function yu(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&Wn(t.matched[o],n.matched[r])&&mf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Wn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function mf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!D_(e[n],t[n]))return!1;return!0}function D_(e,t){return Bt(e)?gu(e,t):Bt(t)?gu(t,e):e===t}function gu(e,t){return Bt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function A_(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ae(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),o=e.split("/");let r=n.length-1,l,i;for(l=0;l<o.length;l++)if(i=o[l],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(l-(l===o.length?1:0)).join("/")}var Vo;(function(e){e.pop="pop",e.push="push"})(Vo||(Vo={}));var ko;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ko||(ko={}));function S_(e){if(!e)if(fn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),E_(e)}const F_=/^[^#]+#/;function $_(e,t){return e.replace(F_,"#")+t}function B_(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const gl=()=>({left:window.pageXOffset,top:window.pageYOffset});function I_(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const l=document.querySelector(e.el);if(o&&l){Ae(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ae(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){Ae(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=B_(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function vu(e,t){return(history.state?history.state.position-t:-1)+e}const Ai=new Map;function T_(e,t){Ai.set(e,t)}function O_(e){const t=Ai.get(e);return Ai.delete(e),t}let M_=()=>location.protocol+"//"+location.host;function yf(e,t){const{pathname:n,search:o,hash:r}=t,l=e.indexOf("#");if(l>-1){let a=r.includes(e.slice(l))?e.slice(l).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),mu(c,"")}return mu(n,e)+o+r}function j_(e,t,n,o){let r=[],l=[],i=null;const a=({state:f})=>{const y=yf(e,location),h=n.value,v=t.value;let _=0;if(f){if(n.value=y,t.value=f,i&&i===h){i=null;return}_=v?f.position-v.position:0}else o(y);r.forEach(x=>{x(n.value,h,{delta:_,type:Vo.pop,direction:_?_>0?ko.forward:ko.back:ko.unknown})})};function c(){i=n.value}function u(f){r.push(f);const y=()=>{const h=r.indexOf(f);h>-1&&r.splice(h,1)};return l.push(y),y}function p(){const{history:f}=window;f.state&&f.replaceState(Me({},f.state,{scroll:gl()}),"")}function d(){for(const f of l)f();l=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:u,destroy:d}}function _u(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?gl():null}}function P_(e){const{history:t,location:n}=window,o={value:yf(e,n)},r={value:t.state};r.value||l(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,u,p){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:M_()+e+c;try{t[p?"replaceState":"pushState"](u,"",f),r.value=u}catch(y){Ae("Error with push/replace State",y),n[p?"replace":"assign"](f)}}function i(c,u){const p=Me({},t.state,_u(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});l(c,p,!0),o.value=c}function a(c,u){const p=Me({},r.value,t.state,{forward:c,scroll:gl()});t.state||Ae(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(p.current,p,!0);const d=Me({},_u(o.value,c,null),{position:p.position+1},u);l(c,d,!1),o.value=c}return{location:o,state:r,push:a,replace:i}}function L_(e){e=S_(e);const t=P_(e),n=j_(e,t.state,t.location,t.replace);function o(l,i=!0){i||n.pauseListeners(),history.go(l)}const r=Me({location:"",base:e,go:o,createHref:$_.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function V_(e){return typeof e=="string"||e&&typeof e=="object"}function gf(e){return typeof e=="string"||typeof e=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vf=Symbol("navigation failure");var bu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(bu||(bu={}));const R_={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${H_(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Ws(e,t){return Me(new Error(R_[e](t)),{type:e,[vf]:!0},t)}function an(e,t){return e instanceof Error&&vf in e&&(t==null||!!(e.type&t))}const N_=["params","query","hash"];function H_(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of N_)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const wu="[^/]+?",W_={sensitive:!1,strict:!1,start:!0,end:!0},z_=/[.+*?^${}()[\]/\\]/g;function q_(e,t){const n=Me({},W_,t),o=[];let r=n.start?"^":"";const l=[];for(const u of e){const p=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const f=u[d];let y=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(z_,"\\$&"),y+=40;else if(f.type===1){const{value:h,repeatable:v,optional:_,regexp:x}=f;l.push({name:h,repeatable:v,optional:_});const C=x||wu;if(C!==wu){y+=10;try{new RegExp(`(${C})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${h}" (${C}): `+D.message)}}let b=v?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(b=_&&u.length<2?`(?:/${b})`:"/"+b),_&&(b+="?"),r+=b,y+=20,_&&(y+=-8),v&&(y+=-20),C===".*"&&(y+=-50)}p.push(y)}o.push(p)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function a(u){const p=u.match(i),d={};if(!p)return null;for(let f=1;f<p.length;f++){const y=p[f]||"",h=l[f-1];d[h.name]=y&&h.repeatable?y.split("/"):y}return d}function c(u){let p="",d=!1;for(const f of e){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const y of f)if(y.type===0)p+=y.value;else if(y.type===1){const{value:h,repeatable:v,optional:_}=y,x=h in u?u[h]:"";if(Bt(x)&&!v)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const C=Bt(x)?x.join("/"):x;if(!C)if(_)f.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${h}"`);p+=C}}return p||"/"}return{re:i,score:o,keys:l,parse:a,stringify:c}}function U_(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Z_(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const l=U_(o[n],r[n]);if(l)return l;n++}if(Math.abs(r.length-o.length)===1){if(Cu(o))return 1;if(Cu(r))return-1}return r.length-o.length}function Cu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Y_={type:0,value:""},K_=/[a-zA-Z0-9_]/;function G_(e){if(!e)return[[]];if(e==="/")return[[Y_]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,o=n;const r=[];let l;function i(){l&&r.push(l),l=[]}let a=0,c,u="",p="";function d(){u&&(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),i()):c===":"?(d(),n=1):f();break;case 4:f(),n=o;break;case 1:c==="("?n=2:K_.test(c)?f():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),r}function X_(e,t,n){const o=q_(G_(e.path),n);{const l=new Set;for(const i of o.keys)l.has(i.name)&&Ae(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),l.add(i.name)}const r=Me(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function J_(e,t){const n=[],o=new Map;t=xu({strict:!1,end:!0,sensitive:!1},t);function r(p){return o.get(p)}function l(p,d,f){const y=!f,h=Q_(p);sb(h,d),h.aliasOf=f&&f.record;const v=xu(t,p),_=[h];if("alias"in p){const b=typeof p.alias=="string"?[p.alias]:p.alias;for(const D of b)_.push(Me({},h,{components:f?f.record.components:h.components,path:D,aliasOf:f?f.record:h}))}let x,C;for(const b of _){const{path:D}=b;if(d&&D[0]!=="/"){const F=d.record.path,T=F[F.length-1]==="/"?"":"/";b.path=d.record.path+(D&&T+D)}if(b.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=X_(b,d,v),d&&D[0]==="/"&&ob(x,d),f?(f.alias.push(x),nb(f,x)):(C=C||x,C!==x&&C.alias.push(x),y&&p.name&&!Eu(x)&&i(p.name)),h.children){const F=h.children;for(let T=0;T<F.length;T++)l(F[T],x,f&&f.children[T])}f=f||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return C?()=>{i(C)}:Co}function i(p){if(gf(p)){const d=o.get(p);d&&(o.delete(p),n.splice(n.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=n.indexOf(p);d>-1&&(n.splice(d,1),p.record.name&&o.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function a(){return n}function c(p){let d=0;for(;d<n.length&&Z_(p,n[d])>=0&&(p.record.path!==n[d].record.path||!_f(p,n[d]));)d++;n.splice(d,0,p),p.record.name&&!Eu(p)&&o.set(p.record.name,p)}function u(p,d){let f,y={},h,v;if("name"in p&&p.name){if(f=o.get(p.name),!f)throw Ws(1,{location:p});{const C=Object.keys(p.params||{}).filter(b=>!f.keys.find(D=>D.name===b));C.length&&Ae(`Discarded invalid param(s) "${C.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=f.record.name,y=Me(ku(d.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),p.params&&ku(p.params,f.keys.map(C=>C.name))),h=f.stringify(y)}else if("path"in p)h=p.path,h.startsWith("/")||Ae(`The Matcher cannot resolve relative paths but received "${h}". Unless you directly called \`matcher.resolve("${h}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(C=>C.re.test(h)),f&&(y=f.parse(h),v=f.record.name);else{if(f=d.name?o.get(d.name):n.find(C=>C.re.test(d.path)),!f)throw Ws(1,{location:p,currentLocation:d});v=f.record.name,y=Me({},d.params,p.params),h=f.stringify(y)}const _=[];let x=f;for(;x;)_.unshift(x.record),x=x.parent;return{name:v,path:h,params:y,matched:_,meta:tb(_)}}return e.forEach(p=>l(p)),{addRoute:l,resolve:u,removeRoute:i,getRoutes:a,getRecordMatcher:r}}function ku(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Q_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:eb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function eb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function Eu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function tb(e){return e.reduce((t,n)=>Me(t,n.meta),{})}function xu(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Si(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function nb(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(Si.bind(null,n)))return Ae(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(Si.bind(null,n)))return Ae(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function sb(e,t){t&&t.record.name&&!e.name&&!e.path&&Ae(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function ob(e,t){for(const n of t.keys)if(!e.keys.find(Si.bind(null,n)))return Ae(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function _f(e,t){return t.children.some(n=>n===e||_f(e,n))}const bf=/#/g,rb=/&/g,lb=/\//g,ib=/=/g,ab=/\?/g,wf=/\+/g,cb=/%5B/g,ub=/%5D/g,Cf=/%5E/g,pb=/%60/g,kf=/%7B/g,db=/%7C/g,Ef=/%7D/g,fb=/%20/g;function Fa(e){return encodeURI(""+e).replace(db,"|").replace(cb,"[").replace(ub,"]")}function hb(e){return Fa(e).replace(kf,"{").replace(Ef,"}").replace(Cf,"^")}function Fi(e){return Fa(e).replace(wf,"%2B").replace(fb,"+").replace(bf,"%23").replace(rb,"%26").replace(pb,"`").replace(kf,"{").replace(Ef,"}").replace(Cf,"^")}function mb(e){return Fi(e).replace(ib,"%3D")}function yb(e){return Fa(e).replace(bf,"%23").replace(ab,"%3F")}function gb(e){return e==null?"":yb(e).replace(lb,"%2F")}function Ro(e){try{return decodeURIComponent(""+e)}catch{Ae(`Error decoding "${e}". Using original value`)}return""+e}function vb(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const l=o[r].replace(wf," "),i=l.indexOf("="),a=Ro(i<0?l:l.slice(0,i)),c=i<0?null:Ro(l.slice(i+1));if(a in t){let u=t[a];Bt(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function Du(e){let t="";for(let n in e){const o=e[n];if(n=mb(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Bt(o)?o.map(l=>l&&Fi(l)):[o&&Fi(o)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function _b(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Bt(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const bb=Symbol("router view location matched"),Au=Symbol("router view depth"),$a=Symbol("router"),xf=Symbol("route location"),$i=Symbol("router view location");function ro(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Sn(e,t,n,o,r){const l=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((i,a)=>{const c=d=>{d===!1?a(Ws(4,{from:n,to:t})):d instanceof Error?a(d):V_(d)?a(Ws(2,{from:t,to:d})):(l&&o.enterCallbacks[r]===l&&typeof d=="function"&&l.push(d),i())},u=e.call(o&&o.instances[r],t,n,wb(c,t,n));let p=Promise.resolve(u);if(e.length<3&&(p=p.then(c)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)p=p.then(f=>c._called?f:(Ae(d),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Ae(d),a(new Error("Invalid navigation guard"));return}}p.catch(d=>a(d))})}function wb(e,t,n){let o=0;return function(){o++===1&&Ae(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function Vl(e,t,n,o){const r=[];for(const l of e){!l.components&&!l.children.length&&Ae(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const i in l.components){let a=l.components[i];{if(!a||typeof a!="object"&&typeof a!="function")throw Ae(`Component "${i}" in record with path "${l.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){Ae(`Component "${i}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,Ae(`Component "${i}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[i]))if(Cb(a)){const u=(a.__vccOpts||a)[t];u&&r.push(Sn(u,n,o,l,i))}else{let c=a();"catch"in c||(Ae(`Component "${i}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${l.path}"`));const p=C_(u)?u.default:u;l.components[i]=p;const f=(p.__vccOpts||p)[t];return f&&Sn(f,n,o,l,i)()}))}}}return r}function Cb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Su(e){const t=Y($a),n=Y(xf),o=$(()=>t.resolve(E(e.to))),r=$(()=>{const{matched:c}=o.value,{length:u}=c,p=c[u-1],d=n.matched;if(!p||!d.length)return-1;const f=d.findIndex(Wn.bind(null,p));if(f>-1)return f;const y=Fu(c[u-2]);return u>1&&Fu(p)===y&&d[d.length-1].path!==y?d.findIndex(Wn.bind(null,c[u-2])):f}),l=$(()=>r.value>-1&&Db(n.params,o.value.params)),i=$(()=>r.value>-1&&r.value===n.matched.length-1&&mf(n.params,o.value.params));function a(c={}){return xb(c)?t[E(e.replace)?"replace":"push"](E(e.to)).catch(Co):Promise.resolve()}if(fn){const c=It();if(c){const u={route:o.value,isActive:l.value,isExactActive:i.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),ws(()=>{u.route=o.value,u.isActive=l.value,u.isExactActive=i.value},{flush:"post"})}}return{route:o,href:$(()=>o.value.href),isActive:l,isExactActive:i,navigate:a}}const kb=Te({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Su,setup(e,{slots:t}){const n=ze(Su(e)),{options:o}=Y($a),r=$(()=>({[$u(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[$u(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:wt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},l)}}}),Eb=kb;function xb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Db(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Bt(r)||r.length!==o.length||o.some((l,i)=>l!==r[i]))return!1}return!0}function Fu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $u=(e,t,n)=>e??t??n,Ab=Te({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){Fb();const o=Y($i),r=$(()=>e.route||o.value),l=Y(Au,0),i=$(()=>{let u=E(l);const{matched:p}=r.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),a=$(()=>r.value.matched[i.value]);At(Au,$(()=>i.value+1)),At(bb,a),At($i,r);const c=z();return ve(()=>[c.value,a.value,e.name],([u,p,d],[f,y,h])=>{p&&(p.instances[d]=u,y&&y!==p&&u&&u===f&&(p.leaveGuards.size||(p.leaveGuards=y.leaveGuards),p.updateGuards.size||(p.updateGuards=y.updateGuards))),u&&p&&(!y||!Wn(p,y)||!f)&&(p.enterCallbacks[d]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,p=e.name,d=a.value,f=d&&d.components[p];if(!f)return Bu(n.default,{Component:f,route:u});const y=d.props[p],h=y?y===!0?u.params:typeof y=="function"?y(u):y:null,_=wt(f,Me({},h,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[p]=null)},ref:c}));if(fn&&_.ref){const x={depth:i.value,name:d.name,path:d.path,meta:d.meta};(Bt(_.ref)?_.ref.map(b=>b.i):[_.ref.i]).forEach(b=>{b.__vrv_devtools=x})}return Bu(n.default,{Component:_,route:u})||_}}});function Bu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Sb=Ab;function Fb(){const e=It(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";Ae(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function lo(e,t){const n=Me({},e,{matched:e.matched.map(o=>Lb(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function vr(e){return{_custom:{display:e}}}let $b=0;function Bb(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=$b++;w_({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((p,d)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:lo(t.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:p,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;p.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Df})}Bt(d.__vrl_devtools)&&(d.__devtoolsApi=r,d.__vrl_devtools.forEach(f=>{let y=Ff,h="";f.isExactActive?(y=Sf,h="This is exactly active"):f.isActive&&(y=Af,h="This link is active"),p.tags.push({label:f.route.path,textColor:0,tooltip:h,backgroundColor:y})}))}),ve(t.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(a),r.sendInspectorState(a)});const l="router:navigations:"+o;r.addTimelineLayer({id:l,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((p,d)=>{r.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:r.now(),data:{error:p},groupId:d.meta.__navigationId}})});let i=0;t.beforeEach((p,d)=>{const f={guard:vr("beforeEach"),from:lo(d,"Current Location during this navigation"),to:lo(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:i++}),r.addTimelineEvent({layerId:l,event:{time:r.now(),title:"Start of navigation",subtitle:p.fullPath,data:f,groupId:p.meta.__navigationId}})}),t.afterEach((p,d,f)=>{const y={guard:vr("afterEach")};f?(y.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},y.status=vr("❌")):y.status=vr("✅"),y.from=lo(d,"Current Location during this navigation"),y.to=lo(p,"Target location"),r.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:p.fullPath,time:r.now(),data:y,logType:f?"warning":"default",groupId:p.meta.__navigationId}})});const a="router-inspector:"+o;r.addInspector({id:a,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const p=u;let d=n.getRoutes().filter(f=>!f.parent);d.forEach(If),p.filter&&(d=d.filter(f=>Bi(f,p.filter.toLowerCase()))),d.forEach(f=>Bf(f,t.currentRoute.value)),p.rootNodes=d.map($f)}let u;r.on.getInspectorTree(p=>{u=p,p.app===e&&p.inspectorId===a&&c()}),r.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===a){const f=n.getRoutes().find(y=>y.record.__vd_id===p.nodeId);f&&(p.state={options:Tb(f)})}}),r.sendInspectorTree(a),r.sendInspectorState(a)})}function Ib(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function Tb(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${Ib(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const Df=15485081,Af=2450411,Sf=8702998,Ob=2282478,Ff=16486972,Mb=6710886;function $f(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:Ob}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Ff}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Df}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Sf}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Af}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Mb});let o=n.__vd_id;return o==null&&(o=String(jb++),n.__vd_id=o),{id:o,label:n.path,tags:t,children:e.children.map($f)}}let jb=0;const Pb=/^\/(.*)\/([a-z]*)$/;function Bf(e,t){const n=t.matched.length&&Wn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(o=>Wn(o,e.record))),e.children.forEach(o=>Bf(o,t))}function If(e){e.__vd_match=!1,e.children.forEach(If)}function Bi(e,t){const n=String(e.re).match(Pb);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(i=>Bi(i,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const r=e.record.path.toLowerCase(),l=Ro(r);return!t.startsWith("/")&&(l.includes(t)||r.includes(t))||l.startsWith(t)||r.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(i=>Bi(i,t))}function Lb(e,t){const n={};for(const o in e)t.includes(o)||(n[o]=e[o]);return n}function Vb(e){const t=J_(e.routes,e),n=e.parseQuery||vb,o=e.stringifyQuery||Du,r=e.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=ro(),i=ro(),a=ro(),c=rn(En);let u=En;fn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Pl.bind(null,B=>""+B),d=Pl.bind(null,gb),f=Pl.bind(null,Ro);function y(B,X){let q,J;return gf(B)?(q=t.getRecordMatcher(B),J=X):J=B,t.addRoute(J,q)}function h(B){const X=t.getRecordMatcher(B);X?t.removeRoute(X):Ae(`Cannot remove non-existent route "${String(B)}"`)}function v(){return t.getRoutes().map(B=>B.record)}function _(B){return!!t.getRecordMatcher(B)}function x(B,X){if(X=Me({},X||c.value),typeof B=="string"){const ue=Ll(n,B,X.path),g=t.resolve({path:ue.path},X),w=r.createHref(ue.fullPath);return w.startsWith("//")?Ae(`Location "${B}" resolved to "${w}". A resolved location cannot start with multiple slashes.`):g.matched.length||Ae(`No match found for location with path "${B}"`),Me(ue,g,{params:f(g.params),hash:Ro(ue.hash),redirectedFrom:void 0,href:w})}let q;if("path"in B)"params"in B&&!("name"in B)&&Object.keys(B.params).length&&Ae(`Path "${B.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),q=Me({},B,{path:Ll(n,B.path,X.path).path});else{const ue=Me({},B.params);for(const g in ue)ue[g]==null&&delete ue[g];q=Me({},B,{params:d(B.params)}),X.params=d(X.params)}const J=t.resolve(q,X),ke=B.hash||"";ke&&!ke.startsWith("#")&&Ae(`A \`hash\` should always start with the character "#". Replace "${ke}" with "#${ke}".`),J.params=p(f(J.params));const De=x_(o,Me({},B,{hash:hb(ke),path:J.path})),he=r.createHref(De);return he.startsWith("//")?Ae(`Location "${B}" resolved to "${he}". A resolved location cannot start with multiple slashes.`):J.matched.length||Ae(`No match found for location with path "${"path"in B?B.path:B}"`),Me({fullPath:De,hash:ke,query:o===Du?_b(B.query):B.query||{}},J,{redirectedFrom:void 0,href:he})}function C(B){return typeof B=="string"?Ll(n,B,c.value.path):Me({},B)}function b(B,X){if(u!==B)return Ws(8,{from:X,to:B})}function D(B){return L(B)}function F(B){return D(Me(C(B),{replace:!0}))}function T(B){const X=B.matched[B.matched.length-1];if(X&&X.redirect){const{redirect:q}=X;let J=typeof q=="function"?q(B):q;if(typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=C(J):{path:J},J.params={}),!("path"in J)&&!("name"in J))throw Ae(`Invalid redirect found:
${JSON.stringify(J,null,2)}
 when navigating to "${B.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Me({query:B.query,hash:B.hash,params:"path"in J?{}:B.params},J)}}function L(B,X){const q=u=x(B),J=c.value,ke=B.state,De=B.force,he=B.replace===!0,ue=T(q);if(ue)return L(Me(C(ue),{state:typeof ue=="object"?Me({},ke,ue.state):ke,force:De,replace:he}),X||q);const g=q;g.redirectedFrom=X;let w;return!De&&yu(o,J,q)&&(w=Ws(16,{to:g,from:J}),Le(J,J,!0,!1)),(w?Promise.resolve(w):V(g,J)).catch(A=>an(A)?an(A,2)?A:Ce(A):K(A,g,J)).then(A=>{if(A){if(an(A,2))return yu(o,x(A.to),g)&&X&&(X._count=X._count?X._count+1:1)>10?(Ae(`Detected an infinite redirection in a navigation guard when going from "${J.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):L(Me({replace:he},C(A.to),{state:typeof A.to=="object"?Me({},ke,A.to.state):ke,force:De}),X||g)}else A=ae(g,J,!0,he,ke);return G(g,J,A),A})}function S(B,X){const q=b(B,X);return q?Promise.reject(q):Promise.resolve()}function V(B,X){let q;const[J,ke,De]=Rb(B,X);q=Vl(J.reverse(),"beforeRouteLeave",B,X);for(const ue of J)ue.leaveGuards.forEach(g=>{q.push(Sn(g,B,X))});const he=S.bind(null,B,X);return q.push(he),Ss(q).then(()=>{q=[];for(const ue of l.list())q.push(Sn(ue,B,X));return q.push(he),Ss(q)}).then(()=>{q=Vl(ke,"beforeRouteUpdate",B,X);for(const ue of ke)ue.updateGuards.forEach(g=>{q.push(Sn(g,B,X))});return q.push(he),Ss(q)}).then(()=>{q=[];for(const ue of B.matched)if(ue.beforeEnter&&!X.matched.includes(ue))if(Bt(ue.beforeEnter))for(const g of ue.beforeEnter)q.push(Sn(g,B,X));else q.push(Sn(ue.beforeEnter,B,X));return q.push(he),Ss(q)}).then(()=>(B.matched.forEach(ue=>ue.enterCallbacks={}),q=Vl(De,"beforeRouteEnter",B,X),q.push(he),Ss(q))).then(()=>{q=[];for(const ue of i.list())q.push(Sn(ue,B,X));return q.push(he),Ss(q)}).catch(ue=>an(ue,8)?ue:Promise.reject(ue))}function G(B,X,q){for(const J of a.list())J(B,X,q)}function ae(B,X,q,J,ke){const De=b(B,X);if(De)return De;const he=X===En,ue=fn?history.state:{};q&&(J||he?r.replace(B.fullPath,Me({scroll:he&&ue&&ue.scroll},ke)):r.push(B.fullPath,ke)),c.value=B,Le(B,X,q,he),Ce()}let W;function be(){W||(W=r.listen((B,X,q)=>{if(!wn.listening)return;const J=x(B),ke=T(J);if(ke){L(Me(ke,{replace:!0}),J).catch(Co);return}u=J;const De=c.value;fn&&T_(vu(De.fullPath,q.delta),gl()),V(J,De).catch(he=>an(he,12)?he:an(he,2)?(L(he.to,J).then(ue=>{an(ue,20)&&!q.delta&&q.type===Vo.pop&&r.go(-1,!1)}).catch(Co),Promise.reject()):(q.delta&&r.go(-q.delta,!1),K(he,J,De))).then(he=>{he=he||ae(J,De,!1),he&&(q.delta&&!an(he,8)?r.go(-q.delta,!1):q.type===Vo.pop&&an(he,20)&&r.go(-1,!1)),G(J,De,he)}).catch(Co)}))}let ye=ro(),we=ro(),Oe;function K(B,X,q){Ce(B);const J=we.list();return J.length?J.forEach(ke=>ke(B,X,q)):(Ae("uncaught error during route navigation:"),console.error(B)),Promise.reject(B)}function le(){return Oe&&c.value!==En?Promise.resolve():new Promise((B,X)=>{ye.add([B,X])})}function Ce(B){return Oe||(Oe=!B,be(),ye.list().forEach(([X,q])=>B?q(B):X()),ye.reset()),B}function Le(B,X,q,J){const{scrollBehavior:ke}=e;if(!fn||!ke)return Promise.resolve();const De=!q&&O_(vu(B.fullPath,0))||(J||!q)&&history.state&&history.state.scroll||null;return it().then(()=>ke(B,X,De)).then(he=>he&&I_(he)).catch(he=>K(he,B,X))}const kt=B=>r.go(B);let ot;const yt=new Set,wn={currentRoute:c,listening:!0,addRoute:y,removeRoute:h,hasRoute:_,getRoutes:v,resolve:x,options:e,push:D,replace:F,go:kt,back:()=>kt(-1),forward:()=>kt(1),beforeEach:l.add,beforeResolve:i.add,afterEach:a.add,onError:we.add,isReady:le,install(B){const X=this;B.component("RouterLink",Eb),B.component("RouterView",Sb),B.config.globalProperties.$router=X,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>E(c)}),fn&&!ot&&c.value===En&&(ot=!0,D(r.location).catch(ke=>{Ae("Unexpected error when starting the router:",ke)}));const q={};for(const ke in En)q[ke]=$(()=>c.value[ke]);B.provide($a,X),B.provide(xf,ze(q)),B.provide($i,c);const J=B.unmount;yt.add(B),B.unmount=function(){yt.delete(B),yt.size<1&&(u=En,W&&W(),W=null,c.value=En,ot=!1,Oe=!1),J()},fn&&Bb(B,X,t)}};return wn}function Ss(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Rb(e,t){const n=[],o=[],r=[],l=Math.max(t.matched.length,e.matched.length);for(let i=0;i<l;i++){const a=t.matched[i];a&&(e.matched.find(u=>Wn(u,a))?o.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>Wn(u,c))||r.push(c))}return[n,o,r]}const Rl=z(!1),Eo=z(!1),Os=z(!1),Nb=z(!0),Ii=A0({xs:460,...C0}),ys=f_(),Tf=t_(),Hb=$(()=>ys.height.value-ys.width.value/On>180),Of=J0(Yt?document.body:null),Pn=w0(),Wb=$(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Pn.value)==null?void 0:e.tagName)||"")||((t=Pn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),zb=$(()=>{var e;return["BUTTON","A"].includes(((e=Pn.value)==null?void 0:e.tagName)||"")});Kt("slidev-camera","default");Kt("slidev-mic","default");const Sr=Kt("slidev-scale",0),dt=Kt("slidev-show-overview",!1),Nl=Kt("slidev-presenter-cursor",!0),Iu=Kt("slidev-show-editor",!1);Kt("slidev-editor-width",Yt?window.innerWidth*.4:100);const Mf=uf(dt);function Tu(e,t,n,o=r=>r){return e*o(.5-t*(.5-n))}function qb(e){return[-e[0],-e[1]]}function zt(e,t){return[e[0]+t[0],e[1]+t[1]]}function Mt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Wt(e,t){return[e[0]*t,e[1]*t]}function Ub(e,t){return[e[0]/t,e[1]/t]}function io(e){return[e[1],-e[0]]}function Ou(e,t){return e[0]*t[0]+e[1]*t[1]}function Zb(e,t){return e[0]===t[0]&&e[1]===t[1]}function Yb(e){return Math.hypot(e[0],e[1])}function Kb(e){return e[0]*e[0]+e[1]*e[1]}function Mu(e,t){return Kb(Mt(e,t))}function jf(e){return Ub(e,Yb(e))}function Gb(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function ao(e,t,n){let o=Math.sin(n),r=Math.cos(n),l=e[0]-t[0],i=e[1]-t[1],a=l*r-i*o,c=l*o+i*r;return[a+t[0],c+t[1]]}function Ti(e,t,n){return zt(e,Wt(Mt(t,e),n))}function ju(e,t,n){return zt(e,Wt(t,n))}var{min:Fs,PI:Xb}=Math,Pu=.275,co=Xb+1e-4;function Jb(e,t={}){let{size:n=16,smoothing:o=.5,thinning:r=.5,simulatePressure:l=!0,easing:i=K=>K,start:a={},end:c={},last:u=!1}=t,{cap:p=!0,easing:d=K=>K*(2-K)}=a,{cap:f=!0,easing:y=K=>--K*K*K+1}=c;if(e.length===0||n<=0)return[];let h=e[e.length-1].runningLength,v=a.taper===!1?0:a.taper===!0?Math.max(n,h):a.taper,_=c.taper===!1?0:c.taper===!0?Math.max(n,h):c.taper,x=Math.pow(n*o,2),C=[],b=[],D=e.slice(0,10).reduce((K,le)=>{let Ce=le.pressure;if(l){let Le=Fs(1,le.distance/n),kt=Fs(1,1-Le);Ce=Fs(1,K+(kt-K)*(Le*Pu))}return(K+Ce)/2},e[0].pressure),F=Tu(n,r,e[e.length-1].pressure,i),T,L=e[0].vector,S=e[0].point,V=S,G=S,ae=V,W=!1;for(let K=0;K<e.length;K++){let{pressure:le}=e[K],{point:Ce,vector:Le,distance:kt,runningLength:ot}=e[K];if(K<e.length-1&&h-ot<3)continue;if(r){if(l){let De=Fs(1,kt/n),he=Fs(1,1-De);le=Fs(1,D+(he-D)*(De*Pu))}F=Tu(n,r,le,i)}else F=n/2;T===void 0&&(T=F);let yt=ot<v?d(ot/v):1,wn=h-ot<_?y((h-ot)/_):1;F=Math.max(.01,F*Math.min(yt,wn));let B=(K<e.length-1?e[K+1]:e[K]).vector,X=K<e.length-1?Ou(Le,B):1,q=Ou(Le,L)<0&&!W,J=X!==null&&X<0;if(q||J){let De=Wt(io(L),F);for(let he=1/13,ue=0;ue<=1;ue+=he)G=ao(Mt(Ce,De),Ce,co*ue),C.push(G),ae=ao(zt(Ce,De),Ce,co*-ue),b.push(ae);S=G,V=ae,J&&(W=!0);continue}if(W=!1,K===e.length-1){let De=Wt(io(Le),F);C.push(Mt(Ce,De)),b.push(zt(Ce,De));continue}let ke=Wt(io(Ti(B,Le,X)),F);G=Mt(Ce,ke),(K<=1||Mu(S,G)>x)&&(C.push(G),S=G),ae=zt(Ce,ke),(K<=1||Mu(V,ae)>x)&&(b.push(ae),V=ae),D=le,L=Le}let be=e[0].point.slice(0,2),ye=e.length>1?e[e.length-1].point.slice(0,2):zt(e[0].point,[1,1]),we=[],Oe=[];if(e.length===1){if(!(v||_)||u){let K=ju(be,jf(io(Mt(be,ye))),-(T||F)),le=[];for(let Ce=1/13,Le=Ce;Le<=1;Le+=Ce)le.push(ao(K,be,co*2*Le));return le}}else{if(!(v||_&&e.length===1))if(p)for(let le=1/13,Ce=le;Ce<=1;Ce+=le){let Le=ao(b[0],be,co*Ce);we.push(Le)}else{let le=Mt(C[0],b[0]),Ce=Wt(le,.5),Le=Wt(le,.51);we.push(Mt(be,Ce),Mt(be,Le),zt(be,Le),zt(be,Ce))}let K=io(qb(e[e.length-1].vector));if(_||v&&e.length===1)Oe.push(ye);else if(f){let le=ju(ye,K,F);for(let Ce=1/29,Le=Ce;Le<1;Le+=Ce)Oe.push(ao(le,ye,co*3*Le))}else Oe.push(zt(ye,Wt(K,F)),zt(ye,Wt(K,F*.99)),Mt(ye,Wt(K,F*.99)),Mt(ye,Wt(K,F)))}return C.concat(Oe,b.reverse(),we)}function Qb(e,t={}){var n;let{streamline:o=.5,size:r=16,last:l=!1}=t;if(e.length===0)return[];let i=.15+(1-o)*.85,a=Array.isArray(e[0])?e:e.map(({x:y,y:h,pressure:v=.5})=>[y,h,v]);if(a.length===2){let y=a[1];a=a.slice(0,-1);for(let h=1;h<5;h++)a.push(Ti(a[0],y,h/4))}a.length===1&&(a=[...a,[...zt(a[0],[1,1]),...a[0].slice(2)]]);let c=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,d=c[0],f=a.length-1;for(let y=1;y<a.length;y++){let h=l&&y===f?a[y].slice(0,2):Ti(d.point,a[y],i);if(Zb(d.point,h))continue;let v=Gb(h,d.point);if(p+=v,y<f&&!u){if(p<r)continue;u=!0}d={point:h,pressure:a[y][2]>=0?a[y][2]:.5,vector:jf(Mt(d.point,h)),distance:v,runningLength:p},c.push(d)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function ew(e,t={}){return Jb(Qb(e,t),t)}var tw=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let o=0,r=n.length;o<r;o++)n[o](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(r=>t!==r)}}});function Yr(e,t){return e-t}function nw(e){return e<0?-1:1}function Kr(e){return[Math.abs(e),nw(e)]}function Pf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var sw=2,hn=sw,Zs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*o,y:(e.pageY-r.top)*o,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const l=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*o,y:l.y*o,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",o.fill??"transparent"),n.setAttribute("stroke",o.color),n.setAttribute("stroke-width",o.size.toString()),n.setAttribute("stroke-linecap","round"),o.dasharray&&n.setAttribute("stroke-dasharray",o.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(hn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},ow=class extends Zs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=ew(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((o,[r,l],i,a)=>{const[c,u]=a[(i+1)%a.length];return o.push(r,l,(r+c)/2,(l+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},rw=class extends Zs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Kr(e.x-this.start.x),[o,r]=Kr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[l,i]=[this.start.x,this.start.x+t*n].sort(Yr),[a,c]=[this.start.y,this.start.y+o*r].sort(Yr);this.attr("cx",(l+i)/2),this.attr("cy",(a+c)/2),this.attr("rx",(i-l)/2),this.attr("ry",(c-a)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Lf(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(r),n.appendChild(o),n}var lw=class extends Zs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Pf(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Lf(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const o=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let l=o/r;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+r*l,n=this.start.y+r):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},iw=class extends Zs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Kr(e.x-this.start.x),[o,r]=Kr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[l,i]=[this.start.x,this.start.x+t*n].sort(Yr),[a,c]=[this.start.y,this.start.y+o*r].sort(Yr);this.attr("x",l),this.attr("y",a),this.attr("width",i-l),this.attr("height",c-a)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function aw(e,t){const n=e.x-t.x,o=e.y-t.y;return n*n+o*o}function cw(e,t,n){let o=t.x,r=t.y,l=n.x-o,i=n.y-r;if(l!==0||i!==0){const a=((e.x-o)*l+(e.y-r)*i)/(l*l+i*i);a>1?(o=n.x,r=n.y):a>0&&(o+=l*a,r+=i*a)}return l=e.x-o,i=e.y-r,l*l+i*i}function uw(e,t){let n=e[0];const o=[n];let r;for(let l=1,i=e.length;l<i;l++)r=e[l],aw(r,n)>t&&(o.push(r),n=r);return n!==r&&r&&o.push(r),o}function Oi(e,t,n,o,r){let l=o,i=0;for(let a=t+1;a<n;a++){const c=cw(e[a],e[t],e[n]);c>l&&(i=a,l=c)}l>o&&(i-t>1&&Oi(e,t,i,o,r),r.push(e[i]),n-i>1&&Oi(e,i,n,o,r))}function pw(e,t){const n=e.length-1,o=[e[0]];return Oi(e,0,n,t,o),o.push(e[n]),o}function Lu(e,t,n=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=n?e:uw(e,o),e=pw(e,o),e}var dw=class extends Zs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Pf();const t=Lf(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Lu(this.points,1,!0),this.count=0),this.attr("d",Ru(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ru(Lu(this.points,1,!0))),!e.getTotalLength()))}};function fw(e,t){const n=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(n**2+o**2),angle:Math.atan2(o,n)}}function Vu(e,t,n,o){const r=t||e,l=n||e,i=.2,a=fw(r,l),c=a.angle+(o?Math.PI:0),u=a.length*i,p=e.x+Math.cos(c)*u,d=e.y+Math.sin(c)*u;return{x:p,y:d}}function hw(e,t,n){const o=Vu(n[t-1],n[t-2],e),r=Vu(e,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(hn)},${o.y.toFixed(hn)} ${r.x.toFixed(hn)},${r.y.toFixed(hn)} ${e.x.toFixed(hn)},${e.y.toFixed(hn)}`}function Ru(e){return e.reduce((t,n,o,r)=>o===0?`M ${n.x.toFixed(hn)},${n.y.toFixed(hn)}`:`${t} ${hw(n,o,r)}`,"")}var mw=class extends Zs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,o)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const l=n[r];if(l.getTotalLength){const i=l.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const c=l.getPointAtLength(i*a/this.pathSubFactor),u=l.getPointAtLength(i*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:a,element:o||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,o=e.x2,r=t.x1,l=t.x2,i=e.y1,a=e.y2,c=t.y1,u=t.y2,p=(n-o)*(c-u)-(i-a)*(r-l),d=(n*a-i*o)*(r-l)-(n-o)*(r*u-c*l),f=(n*a-i*o)*(c-u)-(i-a)*(r*u-c*l),y=(h,v,_)=>h>=v&&h<=_?!0:h>=_&&h<=v;if(p===0)return!1;{const h={x:d/p,y:f/p};return y(h.x,n,o)&&y(h.y,i,a)&&y(h.x,r,l)&&y(h.y,c,u)}}};function yw(e){return{draw:new dw(e),stylus:new ow(e),line:new lw(e),rectangle:new iw(e),ellipse:new rw(e),eraseLine:new mw(e)}}var gw=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=tw(),this._models=yw(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),r=this.eventMove.bind(this),l=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function vw(e){return new gw(e)}const Mi=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],nn=Kt("slidev-drawing-enabled",!1),W$=Kt("slidev-drawing-pinned",!1),_w=z(!1),bw=z(!1),ww=z(!1),No=z(!1),as=Y1(Kt("slidev-drawing-brush",{color:Mi[0],size:4,mode:"stylus"})),Nu=z("stylus"),Vf=$(()=>Se.drawings.syncAll||vt.value);let Ho=!1;const uo=$({get(){return Nu.value},set(e){Nu.value=e,e==="arrow"?(as.mode="line",as.arrowEnd=!0):(as.mode=e,as.arrowEnd=!1)}}),Cw=ze({brush:as,acceptsInputTypes:$(()=>nn.value&&(!Se.drawings.presenterOnly||vt.value)?void 0:["pen"]),coordinateTransform:!1}),mt=ll(vw(Cw));function kw(){mt.clear(),Vf.value&&rf(Ye.value,"")}function Ba(){var e;bw.value=mt.canRedo(),_w.value=mt.canUndo(),ww.value=!!((e=mt.el)!=null&&e.children.length)}function Ew(e){Ho=!0;const t=Ur[e||Ye.value];t!=null?mt.load(t):mt.clear(),Ba(),Ho=!1}mt.on("changed",()=>{if(Ba(),!Ho){const e=mt.dump(),t=Ye.value;(Ur[t]||"")!==e&&Vf.value&&rf(t,mt.dump())}});j1(e=>{Ho=!0,e[Ye.value]!=null&&mt.load(e[Ye.value]||""),Ho=!1,Ba()});it(()=>{ve(Ye,()=>{mt.mounted&&Ew()},{immediate:!0})});mt.on("start",()=>No.value=!0);mt.on("end",()=>No.value=!1);window.addEventListener("keydown",e=>{if(!nn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?mt.redo():mt.undo():e.code==="Escape"?nn.value=!1:e.code==="KeyL"&&t?uo.value="line":e.code==="KeyA"&&t?uo.value="arrow":e.code==="KeyS"&&t?uo.value="stylus":e.code==="KeyR"&&t?uo.value="rectangle":e.code==="KeyE"&&t?uo.value="ellipse":e.code==="KeyC"&&t?kw():e.code.startsWith("Digit")&&t&&+e.code[5]<=Mi.length?as.color=Mi[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Je(...e){return $(()=>e.every(t=>rt(t)))}function xt(e){return $(()=>!rt(e))}const Hu=L0(),Hl=Kt("slidev-color-schema","auto"),ji=$(()=>Se.colorSchema!=="auto"),Ia=$({get(){return ji.value?Se.colorSchema==="dark":Hl.value==="auto"?Hu.value:Hl.value==="dark"},set(e){ji.value||(Hl.value=e===Hu.value?"auto":e?"dark":"light")}}),Rf=uf(Ia);Yt&&ve(Ia,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Fr=z(1),$r=$(()=>Ge.length-1),$t=z(0),Ta=z(0);function xw(){$t.value>Fr.value&&($t.value-=1)}function Dw(){$t.value<$r.value&&($t.value+=1)}function Aw(){if($t.value>Fr.value){let e=$t.value-Ta.value;e<Fr.value&&(e=Fr.value),$t.value=e}}function Sw(){if($t.value<$r.value){let e=$t.value+Ta.value;e>$r.value&&(e=$r.value),$t.value=e}}function Fw(){const{escape:e,space:t,shift:n,left:o,right:r,up:l,down:i,enter:a,d:c,g:u,o:p}=Tf;let d=[{name:"next_space",key:Je(t,xt(n)),fn:Ln,autoRepeat:!0},{name:"prev_space",key:Je(t,n),fn:Vn,autoRepeat:!0},{name:"next_right",key:Je(r,xt(n),xt(dt)),fn:Ln,autoRepeat:!0},{name:"prev_left",key:Je(o,xt(n),xt(dt)),fn:Vn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Ln,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Vn,autoRepeat:!0},{name:"next_down",key:Je(i,xt(dt)),fn:zo,autoRepeat:!0},{name:"prev_up",key:Je(l,xt(dt)),fn:()=>qo(!1),autoRepeat:!0},{name:"next_shift",key:Je(r,n),fn:zo,autoRepeat:!0},{name:"prev_shift",key:Je(o,n),fn:()=>qo(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(c,xt(nn)),fn:Rf},{name:"toggle_overview",key:Je(p,xt(nn)),fn:Mf},{name:"hide_overview",key:Je(e,xt(nn)),fn:()=>dt.value=!1},{name:"goto",key:Je(u,xt(nn)),fn:()=>Os.value=!Os.value},{name:"next_overview",key:Je(r,dt),fn:Dw},{name:"prev_overview",key:Je(o,dt),fn:xw},{name:"up_overview",key:Je(l,dt),fn:Aw},{name:"down_overview",key:Je(i,dt),fn:Sw},{name:"goto_from_overview",key:Je(a,dt),fn:()=>{qs($t.value),dt.value=!1}}];const f=new Set(d.map(h=>h.name));if(d.filter(h=>h.name&&f.has(h.name)).length===0){const h=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(h),console.warn(h)}return d}const Nf=Je(xt(Wb),xt(zb),Nb);function $w(e,t,n=!1){typeof e=="string"&&(e=Tf[e]);const o=Je(e,Nf);let r=0,l;const i=()=>{if(clearTimeout(l),!o.value){r=0;return}n&&(l=setTimeout(i,Math.max(1e3-r*250,150)),r++),t()};return ve(o,i,{flush:"sync"})}function Bw(e,t){return b0(e,n=>{Nf.value&&(n.repeat||t())})}function Iw(){const e=Fw();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&$w(n.key,n.fn,n.autoRepeat)}),Bw("f",()=>Of.toggle())}const Tw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ow=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Mw=[Ow];function jw(e,t){return k(),I("svg",Tw,Mw)}const Pw={name:"carbon-close",render:jw};function Oa(e,t=""){var r,l;const n=["slidev-page",t],o=(l=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:l.no;return o!=null&&n.push(`slidev-page-${o}`),n.filter(Boolean).join(" ")}const Lw=Te({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;Y(te);const n=z(),o=X0(n),r=$(()=>t.width?t.width:o.width.value),l=$(()=>t.width?t.width/On:o.height.value);t.width&&ws(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${l.value}px`)});const i=$(()=>r.value/l.value),a=$(()=>t.scale&&!zs.value?t.scale:i.value<On?r.value/Mn:l.value*On/Mn),c=$(()=>({height:`${Da}px`,width:`${Mn}px`,transform:`translate(-50%, -50%) scale(${a.value})`})),u=$(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return At(sf,a),(p,d)=>(k(),I("div",{id:"slide-container",ref_key:"root",ref:n,class:We(E(u))},[s("div",{id:"slide-content",style:at(E(c))},[Lt(p.$slots,"default")],4),Lt(p.$slots,"controls")],2))}});const se=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Hf=se(Lw,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ma=Te({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=tn(e,"clicks",t),o=tn(e,"clicksElements",t),r=tn(e,"clicksDisabled",t),l=tn(e,"clicksOrderMap",t);o.value.length=0,At(v1,e.route),At(_1,e.context),At(bo,n),At(wo,r),At(os,o),At(bi,l)},render(){var e,t;return this.$props.is?wt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),Vw=["innerHTML"],Rw=Te({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return Y(te),(t,n)=>E(Ur)[e.page]?(k(),I("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:E(Ur)[e.page]},null,8,Vw)):ce("v-if",!0)}}),Wf=se(Rw,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Nw=Object.freeze(Object.defineProperty({__proto__:null,default:Wf},Symbol.toStringTag,{value:"Module"})),Hw={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Ww=["onClick"],zw=Te({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;Y(te);const o=tn(n,"modelValue",t);function r(){o.value=!1}function l(y){qs(y),r()}function i(y){return y===$t.value}const a=Ii.smaller("xs"),c=Ii.smaller("sm"),u=4*16*2,p=2*16,d=$(()=>a.value?ys.width.value-u:c.value?(ys.width.value-u-p)/2:300),f=$(()=>Math.floor((ys.width.value-u)/(d.value+p)));return ws(()=>{$t.value=Ye.value,Ta.value=f.value}),(y,h)=>{const v=Pw;return k(),I($e,null,[Pe(s("div",Hw,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:at(`grid-template-columns: repeat(auto-fit,minmax(${E(d)}px,1fr))`)},[(k(!0),I($e,null,Us(E(Ge).slice(0,-1),(_,x)=>(k(),I("div",{key:_.path,class:"relative"},[s("div",{class:We(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(x+1),"border-gray-400":!i(x+1)}]),style:at(E(Aa)),onClick:C=>l(+_.path)},[(k(),Q(Hf,{key:_.path,width:E(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:ne(()=>[U(E(Ma),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:We(E(Oa)(_)),route:_,context:"overview"},null,8,["is","class","route"]),U(Wf,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,Ww),s("div",{class:"absolute top-0 opacity-50",style:at(`left: ${E(d)+5}px`)},et(x+1),5)]))),128))],4)],512),[[Yd,E(o)]]),E(o)?(k(),I("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[U(v)])):ce("v-if",!0)],64)}}});const qw=se(zw,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Uw="/vue-js-why-so-much-love/assets/logo-b72bde5d.png",Zw={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Yw=Te({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;Y(te);const o=tn(n,"modelValue",t);function r(){o.value=!1}return(l,i)=>(k(),Q(gd,null,[E(o)?(k(),I("div",Zw,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=a=>r())}),s("div",{class:We(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[Lt(l.$slots,"default")],2)])):ce("v-if",!0)],1024))}}),Kw=se(Yw,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/Modal.vue"]]),Gw={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Xw=["innerHTML"],Jw=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:Uw,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),m("dev ")])])],-1),Qw=Te({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;Y(te);const o=tn(n,"modelValue",t),r=$(()=>typeof Se.info=="string");return(l,i)=>(k(),Q(Kw,{modelValue:E(o),"onUpdate:modelValue":i[0]||(i[0]=a=>Be(o)?o.value=a:null),class:"px-6 py-4"},{default:ne(()=>[s("div",Gw,[E(r)?(k(),I("div",{key:0,class:"mb-4",innerHTML:E(Se).info},null,8,Xw)):ce("v-if",!0),Jw])]),_:1},8,["modelValue"]))}});const e2=se(Qw,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function _n(e){return Array.isArray?Array.isArray(e):Uf(e)==="[object Array]"}const t2=1/0;function n2(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-t2?"-0":t}function s2(e){return e==null?"":n2(e)}function sn(e){return typeof e=="string"}function zf(e){return typeof e=="number"}function o2(e){return e===!0||e===!1||r2(e)&&Uf(e)=="[object Boolean]"}function qf(e){return typeof e=="object"}function r2(e){return qf(e)&&e!==null}function St(e){return e!=null}function Wl(e){return!e.trim().length}function Uf(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const l2="Incorrect 'index' type",i2=e=>`Invalid value for key ${e}`,a2=e=>`Pattern length exceeds max of ${e}.`,c2=e=>`Missing ${e} property in key`,u2=e=>`Property 'weight' in key '${e}' must be a positive integer`,Wu=Object.prototype.hasOwnProperty;class p2{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(o=>{let r=Zf(o);n+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(o=>{o.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Zf(e){let t=null,n=null,o=null,r=1,l=null;if(sn(e)||_n(e))o=e,t=zu(e),n=Pi(e);else{if(!Wu.call(e,"name"))throw new Error(c2("name"));const i=e.name;if(o=i,Wu.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(u2(i));t=zu(i),n=Pi(i),l=e.getFn}return{path:t,id:n,weight:r,src:o,getFn:l}}function zu(e){return _n(e)?e:e.split(".")}function Pi(e){return _n(e)?e.join("."):e}function d2(e,t){let n=[],o=!1;const r=(l,i,a)=>{if(St(l))if(!i[a])n.push(l);else{let c=i[a];const u=l[c];if(!St(u))return;if(a===i.length-1&&(sn(u)||zf(u)||o2(u)))n.push(s2(u));else if(_n(u)){o=!0;for(let p=0,d=u.length;p<d;p+=1)r(u[p],i,a+1)}else i.length&&r(u,i,a+1)}};return r(e,sn(t)?t.split("."):t,0),o?n:n[0]}const f2={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},h2={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},m2={location:0,threshold:.6,distance:100},y2={useExtendedSearch:!1,getFn:d2,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var de={...h2,...f2,...m2,...y2};const g2=/[^ ]+/g;function v2(e=1,t=3){const n=new Map,o=Math.pow(10,t);return{get(r){const l=r.match(g2).length;if(n.has(l))return n.get(l);const i=1/Math.pow(l,.5*e),a=parseFloat(Math.round(i*o)/o);return n.set(l,a),a},clear(){n.clear()}}}class ja{constructor({getFn:t=de.getFn,fieldNormWeight:n=de.fieldNormWeight}={}){this.norm=v2(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,o)=>{this._keysMap[n.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,sn(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();sn(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,o=this.size();n<o;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!St(t)||Wl(t))return;let o={v:t,i:n,n:this.norm.get(t)};this.records.push(o)}_addObject(t,n){let o={i:n,$:{}};this.keys.forEach((r,l)=>{let i=r.getFn?r.getFn(t):this.getFn(t,r.path);if(St(i)){if(_n(i)){let a=[];const c=[{nestedArrIndex:-1,value:i}];for(;c.length;){const{nestedArrIndex:u,value:p}=c.pop();if(St(p))if(sn(p)&&!Wl(p)){let d={v:p,i:u,n:this.norm.get(p)};a.push(d)}else _n(p)&&p.forEach((d,f)=>{c.push({nestedArrIndex:f,value:d})})}o.$[l]=a}else if(sn(i)&&!Wl(i)){let a={v:i,n:this.norm.get(i)};o.$[l]=a}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Yf(e,t,{getFn:n=de.getFn,fieldNormWeight:o=de.fieldNormWeight}={}){const r=new ja({getFn:n,fieldNormWeight:o});return r.setKeys(e.map(Zf)),r.setSources(t),r.create(),r}function _2(e,{getFn:t=de.getFn,fieldNormWeight:n=de.fieldNormWeight}={}){const{keys:o,records:r}=e,l=new ja({getFn:t,fieldNormWeight:n});return l.setKeys(o),l.setIndexRecords(r),l}function _r(e,{errors:t=0,currentLocation:n=0,expectedLocation:o=0,distance:r=de.distance,ignoreLocation:l=de.ignoreLocation}={}){const i=t/e.length;if(l)return i;const a=Math.abs(o-n);return r?i+a/r:a?1:i}function b2(e=[],t=de.minMatchCharLength){let n=[],o=-1,r=-1,l=0;for(let i=e.length;l<i;l+=1){let a=e[l];a&&o===-1?o=l:!a&&o!==-1&&(r=l-1,r-o+1>=t&&n.push([o,r]),o=-1)}return e[l-1]&&l-o>=t&&n.push([o,l-1]),n}const rs=32;function w2(e,t,n,{location:o=de.location,distance:r=de.distance,threshold:l=de.threshold,findAllMatches:i=de.findAllMatches,minMatchCharLength:a=de.minMatchCharLength,includeMatches:c=de.includeMatches,ignoreLocation:u=de.ignoreLocation}={}){if(t.length>rs)throw new Error(a2(rs));const p=t.length,d=e.length,f=Math.max(0,Math.min(o,d));let y=l,h=f;const v=a>1||c,_=v?Array(d):[];let x;for(;(x=e.indexOf(t,h))>-1;){let L=_r(t,{currentLocation:x,expectedLocation:f,distance:r,ignoreLocation:u});if(y=Math.min(L,y),h=x+p,v){let S=0;for(;S<p;)_[x+S]=1,S+=1}}h=-1;let C=[],b=1,D=p+d;const F=1<<p-1;for(let L=0;L<p;L+=1){let S=0,V=D;for(;S<V;)_r(t,{errors:L,currentLocation:f+V,expectedLocation:f,distance:r,ignoreLocation:u})<=y?S=V:D=V,V=Math.floor((D-S)/2+S);D=V;let G=Math.max(1,f-V+1),ae=i?d:Math.min(f+V,d)+p,W=Array(ae+2);W[ae+1]=(1<<L)-1;for(let ye=ae;ye>=G;ye-=1){let we=ye-1,Oe=n[e.charAt(we)];if(v&&(_[we]=+!!Oe),W[ye]=(W[ye+1]<<1|1)&Oe,L&&(W[ye]|=(C[ye+1]|C[ye])<<1|1|C[ye+1]),W[ye]&F&&(b=_r(t,{errors:L,currentLocation:we,expectedLocation:f,distance:r,ignoreLocation:u}),b<=y)){if(y=b,h=we,h<=f)break;G=Math.max(1,2*f-h)}}if(_r(t,{errors:L+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:u})>y)break;C=W}const T={isMatch:h>=0,score:Math.max(.001,b)};if(v){const L=b2(_,a);L.length?c&&(T.indices=L):T.isMatch=!1}return T}function C2(e){let t={};for(let n=0,o=e.length;n<o;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<o-n-1}return t}class Kf{constructor(t,{location:n=de.location,threshold:o=de.threshold,distance:r=de.distance,includeMatches:l=de.includeMatches,findAllMatches:i=de.findAllMatches,minMatchCharLength:a=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:u=de.ignoreLocation}={}){if(this.options={location:n,threshold:o,distance:r,includeMatches:l,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(f,y)=>{this.chunks.push({pattern:f,alphabet:C2(f),startIndex:y})},d=this.pattern.length;if(d>rs){let f=0;const y=d%rs,h=d-y;for(;f<h;)p(this.pattern.substr(f,rs),f),f+=rs;if(y){const v=d-rs;p(this.pattern.substr(v),v)}}else p(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:o}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let h={isMatch:!0,score:0};return o&&(h.indices=[[0,t.length-1]]),h}const{location:r,distance:l,threshold:i,findAllMatches:a,minMatchCharLength:c,ignoreLocation:u}=this.options;let p=[],d=0,f=!1;this.chunks.forEach(({pattern:h,alphabet:v,startIndex:_})=>{const{isMatch:x,score:C,indices:b}=w2(t,h,v,{location:r+_,distance:l,threshold:i,findAllMatches:a,minMatchCharLength:c,includeMatches:o,ignoreLocation:u});x&&(f=!0),d+=C,x&&b&&(p=[...p,...b])});let y={isMatch:f,score:f?d/this.chunks.length:1};return f&&o&&(y.indices=p),y}}class Zn{constructor(t){this.pattern=t}static isMultiMatch(t){return qu(t,this.multiRegex)}static isSingleMatch(t){return qu(t,this.singleRegex)}search(){}}function qu(e,t){const n=e.match(t);return n?n[1]:null}class k2 extends Zn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class E2 extends Zn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class x2 extends Zn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class D2 extends Zn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class A2 extends Zn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class S2 extends Zn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Gf extends Zn{constructor(t,{location:n=de.location,threshold:o=de.threshold,distance:r=de.distance,includeMatches:l=de.includeMatches,findAllMatches:i=de.findAllMatches,minMatchCharLength:a=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:u=de.ignoreLocation}={}){super(t),this._bitapSearch=new Kf(t,{location:n,threshold:o,distance:r,includeMatches:l,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Xf extends Zn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,o;const r=[],l=this.pattern.length;for(;(o=t.indexOf(this.pattern,n))>-1;)n=o+l,r.push([o,n-1]);const i=!!r.length;return{isMatch:i,score:i?0:1,indices:r}}}const Li=[k2,Xf,x2,D2,S2,A2,E2,Gf],Uu=Li.length,F2=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,$2="|";function B2(e,t={}){return e.split($2).map(n=>{let o=n.trim().split(F2).filter(l=>l&&!!l.trim()),r=[];for(let l=0,i=o.length;l<i;l+=1){const a=o[l];let c=!1,u=-1;for(;!c&&++u<Uu;){const p=Li[u];let d=p.isMultiMatch(a);d&&(r.push(new p(d,t)),c=!0)}if(!c)for(u=-1;++u<Uu;){const p=Li[u];let d=p.isSingleMatch(a);if(d){r.push(new p(d,t));break}}}return r})}const I2=new Set([Gf.type,Xf.type]);class T2{constructor(t,{isCaseSensitive:n=de.isCaseSensitive,includeMatches:o=de.includeMatches,minMatchCharLength:r=de.minMatchCharLength,ignoreLocation:l=de.ignoreLocation,findAllMatches:i=de.findAllMatches,location:a=de.location,threshold:c=de.threshold,distance:u=de.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:o,minMatchCharLength:r,findAllMatches:i,ignoreLocation:l,location:a,threshold:c,distance:u},this.pattern=n?t:t.toLowerCase(),this.query=B2(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let l=0,i=[],a=0;for(let c=0,u=n.length;c<u;c+=1){const p=n[c];i.length=0,l=0;for(let d=0,f=p.length;d<f;d+=1){const y=p[d],{isMatch:h,indices:v,score:_}=y.search(t);if(h){if(l+=1,a+=_,o){const x=y.constructor.type;I2.has(x)?i=[...i,...v]:i.push(v)}}else{a=0,l=0,i.length=0;break}}if(l){let d={isMatch:!0,score:a/l};return o&&(d.indices=i),d}}return{isMatch:!1,score:1}}}const Vi=[];function O2(...e){Vi.push(...e)}function Ri(e,t){for(let n=0,o=Vi.length;n<o;n+=1){let r=Vi[n];if(r.condition(e,t))return new r(e,t)}return new Kf(e,t)}const Gr={AND:"$and",OR:"$or"},Ni={PATH:"$path",PATTERN:"$val"},Hi=e=>!!(e[Gr.AND]||e[Gr.OR]),M2=e=>!!e[Ni.PATH],j2=e=>!_n(e)&&qf(e)&&!Hi(e),Zu=e=>({[Gr.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Jf(e,t,{auto:n=!0}={}){const o=r=>{let l=Object.keys(r);const i=M2(r);if(!i&&l.length>1&&!Hi(r))return o(Zu(r));if(j2(r)){const c=i?r[Ni.PATH]:l[0],u=i?r[Ni.PATTERN]:r[c];if(!sn(u))throw new Error(i2(c));const p={keyId:Pi(c),pattern:u};return n&&(p.searcher=Ri(u,t)),p}let a={children:[],operator:l[0]};return l.forEach(c=>{const u=r[c];_n(u)&&u.forEach(p=>{a.children.push(o(p))})}),a};return Hi(e)||(e=Zu(e)),o(e)}function P2(e,{ignoreFieldNorm:t=de.ignoreFieldNorm}){e.forEach(n=>{let o=1;n.matches.forEach(({key:r,norm:l,score:i})=>{const a=r?r.weight:null;o*=Math.pow(i===0&&a?Number.EPSILON:i,(a||1)*(t?1:l))}),n.score=o})}function L2(e,t){const n=e.matches;t.matches=[],St(n)&&n.forEach(o=>{if(!St(o.indices)||!o.indices.length)return;const{indices:r,value:l}=o;let i={indices:r,value:l};o.key&&(i.key=o.key.src),o.idx>-1&&(i.refIndex=o.idx),t.matches.push(i)})}function V2(e,t){t.score=e.score}function R2(e,t,{includeMatches:n=de.includeMatches,includeScore:o=de.includeScore}={}){const r=[];return n&&r.push(L2),o&&r.push(V2),e.map(l=>{const{idx:i}=l,a={item:t[i],refIndex:i};return r.length&&r.forEach(c=>{c(l,a)}),a})}class Ys{constructor(t,n={},o){this.options={...de,...n},this.options.useExtendedSearch,this._keyStore=new p2(this.options.keys),this.setCollection(t,o)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof ja))throw new Error(l2);this._myIndex=n||Yf(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){St(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let o=0,r=this._docs.length;o<r;o+=1){const l=this._docs[o];t(l,o)&&(this.removeAt(o),o-=1,r-=1,n.push(l))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:o,includeScore:r,shouldSort:l,sortFn:i,ignoreFieldNorm:a}=this.options;let c=sn(t)?sn(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return P2(c,{ignoreFieldNorm:a}),l&&c.sort(i),zf(n)&&n>-1&&(c=c.slice(0,n)),R2(c,this._docs,{includeMatches:o,includeScore:r})}_searchStringList(t){const n=Ri(t,this.options),{records:o}=this._myIndex,r=[];return o.forEach(({v:l,i,n:a})=>{if(!St(l))return;const{isMatch:c,score:u,indices:p}=n.searchIn(l);c&&r.push({item:l,idx:i,matches:[{score:u,value:l,norm:a,indices:p}]})}),r}_searchLogical(t){const n=Jf(t,this.options),o=(a,c,u)=>{if(!a.children){const{keyId:d,searcher:f}=a,y=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(c,d),searcher:f});return y&&y.length?[{idx:u,item:c,matches:y}]:[]}const p=[];for(let d=0,f=a.children.length;d<f;d+=1){const y=a.children[d],h=o(y,c,u);if(h.length)p.push(...h);else if(a.operator===Gr.AND)return[]}return p},r=this._myIndex.records,l={},i=[];return r.forEach(({$:a,i:c})=>{if(St(a)){let u=o(n,a,c);u.length&&(l[c]||(l[c]={idx:c,item:a,matches:[]},i.push(l[c])),u.forEach(({matches:p})=>{l[c].matches.push(...p)}))}}),i}_searchObjectList(t){const n=Ri(t,this.options),{keys:o,records:r}=this._myIndex,l=[];return r.forEach(({$:i,i:a})=>{if(!St(i))return;let c=[];o.forEach((u,p)=>{c.push(...this._findMatches({key:u,value:i[p],searcher:n}))}),c.length&&l.push({idx:a,item:i,matches:c})}),l}_findMatches({key:t,value:n,searcher:o}){if(!St(n))return[];let r=[];if(_n(n))n.forEach(({v:l,i,n:a})=>{if(!St(l))return;const{isMatch:c,score:u,indices:p}=o.searchIn(l);c&&r.push({score:u,key:t,value:l,idx:i,norm:a,indices:p})});else{const{v:l,n:i}=n,{isMatch:a,score:c,indices:u}=o.searchIn(l);a&&r.push({score:c,key:t,value:l,norm:i,indices:u})}return r}}Ys.version="6.6.2";Ys.createIndex=Yf;Ys.parseIndex=_2;Ys.config=de;Ys.parseQuery=Jf;O2(T2);const N2={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},H2=["value","disabled","onKeydown"],W2=["border","onClick"],z2={"w-4":"","text-right":"",op50:"","text-sm":""},q2=Te({__name:"Goto",setup(e){Y(te);const t=z(),n=z(),o=z(),r=z(),l=z(""),i=z(0);function a(b){return b!=null}const c=$(()=>new Ys(Ge.map(b=>{var D;return(D=b.meta)==null?void 0:D.slide}).filter(a),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=$(()=>l.value.startsWith("/")?l.value.substring(1):l.value),p=$(()=>c.value.search(u.value).map(b=>b.item)),d=$(()=>!!p.value.length);function f(){if(d.value){const b=p.value.at(i.value||0);b&&qs(b.no)}y()}function y(){l.value="",Os.value=!1}function h(b){b.preventDefault(),i.value++,i.value>=p.value.length&&(i.value=0),_()}function v(b){b.preventDefault(),i.value--,i.value<=-2&&(i.value=p.value.length-1),_()}function _(){var D;const b=(D=r.value)==null?void 0:D[i.value];b&&o.value&&(b.offsetTop+b.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:b.offsetTop+b.offsetHeight-o.value.offsetHeight+1}):b.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:b.offsetTop}))}function x(b){i.value=0,l.value=b.target.value}function C(b){qs(b),y()}return ve(Os,async b=>{var D;b?(l.value="",i.value=0,setTimeout(()=>{var F;return(F=n.value)==null?void 0:F.focus()},0)):(D=n.value)==null||D.blur()}),ve(Pn,()=>{var b;(b=t.value)!=null&&b.contains(Pn.value)||y()}),(b,D)=>(k(),I("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:We(["fixed right-5 transition-all",E(Os)?"top-5":"-top-20"])},[s("div",N2,[s("input",{ref_key:"input",ref:n,value:l.value,type:"text",disabled:!E(Os),class:We(["outline-none bg-transparent",{"text-red-400":!E(d)&&l.value}]),placeholder:"Goto...",onKeydown:[hr(f,["enter"]),hr(y,["escape"]),hr(h,["down"]),hr(v,["up"])],onInput:x},null,42,H2)]),E(p).length>0?(k(),I("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(k(!0),I($e,null,Us(E(p),(F,T)=>(k(),I("li",{ref_for:!0,ref_key:"items",ref:r,key:F.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:T===0?"":"t main",class:We(i.value===T?"bg-active op100":"op80"),onClick:gv(L=>C(F.no),["stop"])},[s("div",z2,et(F.no),1),m(" "+et(F.title),1)],10,W2))),128))],512)):ce("v-if",!0)],2))}});const U2=se(q2,[["__scopeId","data-v-f5ee02a7"],["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/Goto.vue"]]),Z2=Te({__name:"Controls",setup(e){Y(te);const t=rn(),n=rn();return(o,r)=>(k(),I($e,null,[U(qw,{modelValue:E(dt),"onUpdate:modelValue":r[0]||(r[0]=l=>Be(dt)?dt.value=l:null)},null,8,["modelValue"]),U(U2),E(t)?(k(),Q(E(t),{key:0})):ce("v-if",!0),E(n)?(k(),Q(E(n),{key:1,modelValue:E(Rl),"onUpdate:modelValue":r[1]||(r[1]=l=>Be(Rl)?Rl.value=l:null)},null,8,["modelValue"])):ce("v-if",!0),E(Se).info?(k(),Q(e2,{key:2,modelValue:E(Eo),"onUpdate:modelValue":r[2]||(r[2]=l=>Be(Eo)?Eo.value=l:null)},null,8,["modelValue"])):ce("v-if",!0)],64))}}),Y2=se(Z2,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/Controls.vue"]]),K2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},G2=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),X2=[G2];function J2(e,t){return k(),I("svg",K2,X2)}const Q2={name:"carbon-settings-adjust",render:J2},eC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tC=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),nC=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),sC=[tC,nC];function oC(e,t){return k(),I("svg",eC,sC)}const rC={name:"carbon-information",render:oC},lC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iC=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),aC=[iC];function cC(e,t){return k(),I("svg",lC,aC)}const uC={name:"carbon-download",render:cC},pC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dC=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),fC=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),hC=[dC,fC];function mC(e,t){return k(),I("svg",pC,hC)}const yC={name:"carbon-user-speaker",render:mC},gC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vC=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),_C=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),bC=[vC,_C];function wC(e,t){return k(),I("svg",gC,bC)}const CC={name:"carbon-presentation-file",render:wC},kC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},EC=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),xC=[EC];function DC(e,t){return k(),I("svg",kC,xC)}const AC={name:"carbon-pen",render:DC},SC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},FC=s("g",{fill:"currentColor"},[s("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),s("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),$C=[FC];function BC(e,t){return k(),I("svg",SC,$C)}const IC={name:"ph-cursor-duotone",render:BC},TC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},OC=s("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),MC=[OC];function jC(e,t){return k(),I("svg",TC,MC)}const Qf={name:"ph-cursor-fill",render:jC},PC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},LC=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),VC=[LC];function RC(e,t){return k(),I("svg",PC,VC)}const NC={name:"carbon-sun",render:RC},HC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},WC=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),zC=[WC];function qC(e,t){return k(),I("svg",HC,zC)}const UC={name:"carbon-moon",render:qC},ZC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},YC=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),KC=[YC];function GC(e,t){return k(),I("svg",ZC,KC)}const XC={name:"carbon-apps",render:GC},JC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},QC=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),e3=[QC];function t3(e,t){return k(),I("svg",JC,e3)}const eh={name:"carbon-arrow-right",render:t3},n3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s3=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),o3=[s3];function r3(e,t){return k(),I("svg",n3,o3)}const l3={name:"carbon-arrow-left",render:r3},i3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a3=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),c3=[a3];function u3(e,t){return k(),I("svg",i3,c3)}const p3={name:"carbon-maximize",render:u3},d3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f3=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),h3=[f3];function m3(e,t){return k(),I("svg",d3,h3)}const y3={name:"carbon-minimize",render:m3},g3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v3=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),_3=[v3];function b3(e,t){return k(),I("svg",g3,_3)}const w3={name:"carbon-checkmark",render:b3},C3={class:"select-list"},k3={class:"title"},E3={class:"items"},x3=["onClick"],D3=Te({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;Y(te);const o=tn(n,"modelValue",t,{passive:!0});return(r,l)=>{const i=w3;return k(),I("div",C3,[s("div",k3,et(e.title),1),s("div",E3,[(k(!0),I($e,null,Us(e.items,a=>(k(),I("div",{key:a.value,class:We(["item",{active:E(o)===a.value}]),onClick:()=>{var c;o.value=a.value,(c=a.onClick)==null||c.call(a)}},[U(i,{class:We(["text-green-500",{"opacity-0":E(o)!==a.value}])},null,8,["class"]),m(" "+et(a.display||a.value),1)],10,x3))),128))])])}}});const A3=se(D3,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/SelectList.vue"]]),S3={class:"text-sm"},F3=Te({__name:"Settings",setup(e){Y(te);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(k(),I("div",S3,[U(A3,{modelValue:E(Sr),"onUpdate:modelValue":o[0]||(o[0]=r=>Be(Sr)?Sr.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),$3=se(F3,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/Settings.vue"]]),B3={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},I3=Te({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;Y(te);const o=tn(n,"modelValue",t,{passive:!0}),r=z();return v0(r,()=>{o.value=!1}),(l,i)=>(k(),I("div",{ref_key:"el",ref:r,class:"flex relative"},[s("button",{class:We({disabled:e.disabled}),onClick:i[0]||(i[0]=a=>o.value=!E(o))},[Lt(l.$slots,"button",{class:We({disabled:e.disabled})})],2),(k(),Q(gd,null,[E(o)?(k(),I("div",B3,[Lt(l.$slots,"menu")])):ce("v-if",!0)],1024))],512))}}),T3=se(I3,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/MenuButton.vue"]]),O3={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},M3={__name:"VerticalDivider",setup(e){return Y(te),(t,n)=>(k(),I("div",O3))}},br=se(M3,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),j3={render(){return[]}},P3={class:"slidev-icon-btn"},L3={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},V3={class:"my-auto"},R3={class:"opacity-50"},N3=Te({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;Y(te);const n=Ii.smaller("md"),{isFullscreen:o,toggle:r}=Of,l=$(()=>zi.value?`?password=${zi.value}`:""),i=$(()=>`/presenter/${Ye.value}${l.value}`),a=$(()=>`/${Ye.value}${l.value}`),c=z();function u(){c.value&&Pn.value&&c.value.contains(Pn.value)&&Pn.value.blur()}const p=$(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=rn(),f=rn();return jn(()=>import("./DrawingControls-7d30698f.js"),[]).then(y=>f.value=y.default),(y,h)=>{const v=y3,_=p3,x=l3,C=eh,b=XC,D=UC,F=NC,T=Qf,L=IC,S=AC,V=CC,G=Nr("RouterLink"),ae=yC,W=uC,be=rC,ye=Q2;return k(),I("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[s("div",{class:We(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E(p)]),onMouseleave:u},[E(dn)?ce("v-if",!0):(k(),I("button",{key:0,class:"slidev-icon-btn",onClick:h[0]||(h[0]=(...we)=>E(r)&&E(r)(...we))},[E(o)?(k(),Q(v,{key:0})):(k(),Q(_,{key:1}))])),s("button",{class:We(["slidev-icon-btn",{disabled:!E(s9)}]),onClick:h[1]||(h[1]=(...we)=>E(Vn)&&E(Vn)(...we))},[U(x)],2),s("button",{class:We(["slidev-icon-btn",{disabled:!E(n9)}]),title:"Next",onClick:h[2]||(h[2]=(...we)=>E(Ln)&&E(Ln)(...we))},[U(C)],2),E(dn)?ce("v-if",!0):(k(),I("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=we=>E(Mf)())},[U(b)])),E(ji)?ce("v-if",!0):(k(),I("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=we=>E(Rf)())},[E(Ia)?(k(),Q(D,{key:0})):(k(),Q(F,{key:1}))])),U(br),E(dn)?ce("v-if",!0):(k(),I($e,{key:3},[!E(vt)&&!E(n)&&E(d)?(k(),I($e,{key:0},[U(E(d)),U(br)],64)):ce("v-if",!0),E(vt)?(k(),I("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=we=>Nl.value=!E(Nl))},[E(Nl)?(k(),Q(T,{key:0})):(k(),Q(L,{key:1,class:"opacity-50"}))])):ce("v-if",!0)],64)),(!E(Se).drawings.presenterOnly||E(vt))&&!E(dn)?(k(),I($e,{key:4},[s("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=we=>nn.value=!E(nn))},[U(S),E(nn)?(k(),I("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:at({background:E(as).color})},null,4)):ce("v-if",!0)]),U(br)],64)):ce("v-if",!0),E(dn)?ce("v-if",!0):(k(),I($e,{key:5},[E(vt)?(k(),Q(G,{key:0,to:E(a),class:"slidev-icon-btn",title:"Play Mode"},{default:ne(()=>[U(V)]),_:1},8,["to"])):ce("v-if",!0),E(X5)?(k(),Q(G,{key:1,to:E(i),class:"slidev-icon-btn",title:"Presenter Mode"},{default:ne(()=>[U(ae)]),_:1},8,["to"])):ce("v-if",!0),ce("v-if",!0)],64)),(k(),I($e,{key:6},[E(Se).download?(k(),I("button",{key:0,class:"slidev-icon-btn",onClick:h[8]||(h[8]=(...we)=>E(qi)&&E(qi)(...we))},[U(W)])):ce("v-if",!0)],64)),!E(vt)&&E(Se).info&&!E(dn)?(k(),I("button",{key:7,class:"slidev-icon-btn",onClick:h[9]||(h[9]=we=>Eo.value=!E(Eo))},[U(be)])):ce("v-if",!0),!E(vt)&&!E(dn)?(k(),Q(T3,{key:8},{button:ne(()=>[s("button",P3,[U(ye)])]),menu:ne(()=>[U($3)]),_:1})):ce("v-if",!0),E(dn)?ce("v-if",!0):(k(),Q(br,{key:9})),s("div",L3,[s("div",V3,[m(et(E(Ye))+" ",1),s("span",R3,"/ "+et(E(J5)),1)])]),U(E(j3))],34)],512)}}}),H3=se(N3,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/NavControls.vue"]]),th={render(){return[]}},nh={render(){return[]}},W3={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},z3=Te({__name:"PresenterMouse",setup(e){return Y(te),(t,n)=>{const o=Qf;return E(jl).cursor?(k(),I("div",W3,[U(o,{class:"absolute",style:at({left:`${E(jl).cursor.x}%`,top:`${E(jl).cursor.y}%`})},null,8,["style"])])):ce("v-if",!0)}}}),q3=se(z3,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),U3=Te({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){Y(te),ve(ft,()=>{var o,r;(o=ft.value)!=null&&o.meta&&ft.value.meta.preload!==!1&&(ft.value.meta.__preloaded=!0),(r=zl.value)!=null&&r.meta&&zl.value.meta.preload!==!1&&(zl.value.meta.__preloaded=!0)},{immediate:!0});const t=rn();jn(()=>import("./DrawingLayer-8c57bbf0.js"),[]).then(o=>t.value=o.default);const n=$(()=>Ge.filter(o=>{var r;return((r=o.meta)==null?void 0:r.__preloaded)||o===ft.value}));return(o,r)=>(k(),I($e,null,[ce(" Global Bottom "),U(E(nh)),ce(" Slides "),U(uv,Xe(E(l9),{id:"slideshow",tag:"div"}),{default:ne(()=>[(k(!0),I($e,null,Us(E(n),l=>{var i;return Pe((k(),Q(E(Ma),{key:l.path,is:l==null?void 0:l.component,clicks:l===E(ft)?E(jt):0,"clicks-elements":((i=l.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:We(E(Oa)(l)),route:l,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Yd,l===E(ft)]])}),128))]),_:1},16),ce(" Global Top "),U(E(th)),E(t)?(k(),Q(E(t),{key:0})):ce("v-if",!0),E(vt)?ce("v-if",!0):(k(),Q(q3,{key:1}))],64))}});const Z3=se(U3,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Y3=Te({__name:"PrintStyle",setup(e){Y(te);function t(n,{slots:o}){if(o.default)return wt("style",o.default())}return(n,o)=>(k(),Q(t,null,{default:ne(()=>[m(" @page { size: "+et(E(Mn))+"px "+et(E(Da))+"px; margin: 0px; } ",1)]),_:1}))}}),sh=se(Y3,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/PrintStyle.vue"]]),K3=Te({__name:"Play",setup(e){Y(te),Iw();const t=z();function n(l){var i;Iu.value||((i=l.target)==null?void 0:i.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Ln():Vn())}i9(t);const o=$(()=>Hb.value||Iu.value);rn();const r=rn();return jn(()=>import("./DrawingControls-7d30698f.js"),[]).then(l=>r.value=l.default),(l,i)=>(k(),I($e,null,[E(zs)?(k(),Q(sh,{key:0})):ce("v-if",!0),s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:at(E(Aa))},[U(Hf,{class:"w-full h-full",style:at({background:"var(--slidev-slide-container-background, black)"}),width:E(zs)?E(ys).width.value:void 0,scale:E(Sr),onPointerdown:n},{default:ne(()=>[U(Z3,{context:"slide"})]),controls:ne(()=>[s("div",{class:We(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[E(o)?"opacity-100 right-0":"opacity-0 p-2",E(No)?"pointer-events-none":""]])},[U(H3,{class:"m-auto",persist:E(o)},null,8,["persist"])],2),!E(Se).drawings.presenterOnly&&!E(dn)&&E(r)?(k(),Q(E(r),{key:0,class:"ml-0"})):ce("v-if",!0)]),_:1},8,["style","width","scale"]),ce("v-if",!0)],4),U(Y2)],64))}}),G3=se(K3,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function oh(e){return typeof e>"u"||e===null}function X3(e){return typeof e=="object"&&e!==null}function J3(e){return Array.isArray(e)?e:oh(e)?[]:[e]}function Q3(e,t){var n,o,r,l;if(t)for(l=Object.keys(t),n=0,o=l.length;n<o;n+=1)r=l[n],e[r]=t[r];return e}function ek(e,t){var n="",o;for(o=0;o<t;o+=1)n+=e;return n}function tk(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var nk=oh,sk=X3,ok=J3,rk=ek,lk=tk,ik=Q3,Pa={isNothing:nk,isObject:sk,toArray:ok,repeat:rk,isNegativeZero:lk,extend:ik};function rh(e,t){var n="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),o+" "+n):o}function Wo(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=rh(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Wo.prototype=Object.create(Error.prototype);Wo.prototype.constructor=Wo;Wo.prototype.toString=function(t){return this.name+": "+rh(this,t)};var ls=Wo,ak=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ck=["scalar","sequence","mapping"];function uk(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(o){t[String(o)]=n})}),t}function pk(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(ak.indexOf(n)===-1)throw new ls('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=uk(t.styleAliases||null),ck.indexOf(this.kind)===-1)throw new ls('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var ct=pk;function Yu(e,t){var n=[];return e[t].forEach(function(o){var r=n.length;n.forEach(function(l,i){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(r=i)}),n[r]=o}),n}function dk(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function o(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(o);return e}function Wi(e){return this.extend(e)}Wi.prototype.extend=function(t){var n=[],o=[];if(t instanceof ct)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new ls("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(l){if(!(l instanceof ct))throw new ls("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new ls("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new ls("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof ct))throw new ls("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(Wi.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(o),r.compiledImplicit=Yu(r,"implicit"),r.compiledExplicit=Yu(r,"explicit"),r.compiledTypeMap=dk(r.compiledImplicit,r.compiledExplicit),r};var fk=Wi,hk=new ct("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),mk=new ct("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),yk=new ct("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),gk=new fk({explicit:[hk,mk,yk]});function vk(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function _k(){return null}function bk(e){return e===null}var wk=new ct("tag:yaml.org,2002:null",{kind:"scalar",resolve:vk,construct:_k,predicate:bk,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Ck(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function kk(e){return e==="true"||e==="True"||e==="TRUE"}function Ek(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var xk=new ct("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Ck,construct:kk,predicate:Ek,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Dk(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ak(e){return 48<=e&&e<=55}function Sk(e){return 48<=e&&e<=57}function Fk(e){if(e===null)return!1;var t=e.length,n=0,o=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;o=!0}return o&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!Dk(e.charCodeAt(n)))return!1;o=!0}return o&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!Ak(e.charCodeAt(n)))return!1;o=!0}return o&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!Sk(e.charCodeAt(n)))return!1;o=!0}return!(!o||r==="_")}function $k(e){var t=e,n=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(n=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function Bk(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Pa.isNegativeZero(e)}var Ik=new ct("tag:yaml.org,2002:int",{kind:"scalar",resolve:Fk,construct:$k,predicate:Bk,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Tk=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Ok(e){return!(e===null||!Tk.test(e)||e[e.length-1]==="_")}function Mk(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var jk=/^[-+]?[0-9]+e/;function Pk(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Pa.isNegativeZero(e))return"-0.0";return n=e.toString(10),jk.test(n)?n.replace("e",".e"):n}function Lk(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Pa.isNegativeZero(e))}var Vk=new ct("tag:yaml.org,2002:float",{kind:"scalar",resolve:Ok,construct:Mk,predicate:Lk,represent:Pk,defaultStyle:"lowercase"}),Rk=gk.extend({implicit:[wk,xk,Ik,Vk]}),Nk=Rk,lh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ih=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Hk(e){return e===null?!1:lh.exec(e)!==null||ih.exec(e)!==null}function Wk(e){var t,n,o,r,l,i,a,c=0,u=null,p,d,f;if(t=lh.exec(e),t===null&&(t=ih.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,o,r));if(l=+t[4],i=+t[5],a=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],d=+(t[11]||0),u=(p*60+d)*6e4,t[9]==="-"&&(u=-u)),f=new Date(Date.UTC(n,o,r,l,i,a,c)),u&&f.setTime(f.getTime()-u),f}function zk(e){return e.toISOString()}var qk=new ct("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Hk,construct:Wk,instanceOf:Date,represent:zk});function Uk(e){return e==="<<"||e===null}var Zk=new ct("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Uk}),La=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Yk(e){if(e===null)return!1;var t,n,o=0,r=e.length,l=La;for(n=0;n<r;n++)if(t=l.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function Kk(e){var t,n,o=e.replace(/[\r\n=]/g,""),r=o.length,l=La,i=0,a=[];for(t=0;t<r;t++)t%4===0&&t&&(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)),i=i<<6|l.indexOf(o.charAt(t));return n=r%4*6,n===0?(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)):n===18?(a.push(i>>10&255),a.push(i>>2&255)):n===12&&a.push(i>>4&255),new Uint8Array(a)}function Gk(e){var t="",n=0,o,r,l=e.length,i=La;for(o=0;o<l;o++)o%3===0&&o&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[o];return r=l%3,r===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):r===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):r===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function Xk(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Jk=new ct("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Yk,construct:Kk,predicate:Xk,represent:Gk}),Qk=Object.prototype.hasOwnProperty,eE=Object.prototype.toString;function tE(e){if(e===null)return!0;var t=[],n,o,r,l,i,a=e;for(n=0,o=a.length;n<o;n+=1){if(r=a[n],i=!1,eE.call(r)!=="[object Object]")return!1;for(l in r)if(Qk.call(r,l))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function nE(e){return e!==null?e:[]}var sE=new ct("tag:yaml.org,2002:omap",{kind:"sequence",resolve:tE,construct:nE}),oE=Object.prototype.toString;function rE(e){if(e===null)return!0;var t,n,o,r,l,i=e;for(l=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(o=i[t],oE.call(o)!=="[object Object]"||(r=Object.keys(o),r.length!==1))return!1;l[t]=[r[0],o[r[0]]]}return!0}function lE(e){if(e===null)return[];var t,n,o,r,l,i=e;for(l=new Array(i.length),t=0,n=i.length;t<n;t+=1)o=i[t],r=Object.keys(o),l[t]=[r[0],o[r[0]]];return l}var iE=new ct("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:rE,construct:lE}),aE=Object.prototype.hasOwnProperty;function cE(e){if(e===null)return!0;var t,n=e;for(t in n)if(aE.call(n,t)&&n[t]!==null)return!1;return!0}function uE(e){return e!==null?e:{}}var pE=new ct("tag:yaml.org,2002:set",{kind:"mapping",resolve:cE,construct:uE});Nk.extend({implicit:[qk,Zk],explicit:[Jk,sE,iE,pE]});function Ku(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var dE=new Array(256),fE=new Array(256);for(var $s=0;$s<256;$s++)dE[$s]=Ku($s)?1:0,fE[$s]=Ku($s);function hE(e){return Array.from(new Set(e))}function Gu(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const r=[];let l=t;for(;l<n;)r.push(l),l+=o||1;return r}function ah(e,t){if(!t||t==="all"||t==="*")return Gu(1,e+1);const n=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))n.push(+o);else{const[r,l]=o.split("-",2);n.push(...Gu(+r,l?+l+1:e+1))}return hE(n).filter(o=>o<=e).sort((o,r)=>o-r)}function ch(e){const t=$(()=>e.value.path),n=$(()=>Ge.length-1),o=$(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=$(()=>vl(o.value)),l=$(()=>Ge.find(f=>f.path===`${o.value}`)),i=$(()=>{var f,y,h;return(h=(y=(f=l.value)==null?void 0:f.meta)==null?void 0:y.slide)==null?void 0:h.id}),a=$(()=>{var f,y;return((y=(f=l.value)==null?void 0:f.meta)==null?void 0:y.layout)||(o.value===1?"cover":"default")}),c=$(()=>Ge.find(f=>f.path===`${Math.min(Ge.length,o.value+1)}`)),u=$(()=>Ge.filter(f=>{var y,h;return(h=(y=f.meta)==null?void 0:y.slide)==null?void 0:h.title}).reduce((f,y)=>(za(f,y),f),[])),p=$(()=>qa(u.value,l.value)),d=$(()=>Ua(p.value));return{route:e,path:t,total:n,currentPage:o,currentPath:r,currentRoute:l,currentSlideId:i,currentLayout:a,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:d,downloadPDF:qi,next:Ln,nextSlide:zo,openInEditor:a9,prev:Vn,prevSlide:qo}}function uh(e,t,n){const o=z(0);it(()=>{bt.afterEach(async()=>{await it(),o.value+=1})});const r=$(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=$(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??r.value.length)}),i=$(()=>n.value<Ge.length-1||e.value<l.value),a=$(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:l,hasNext:i,hasPrev:a}}const mE=["id"],yE=Te({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,o=tn(n,"clicksElements",t),r=$(()=>({height:`${Da}px`,width:`${Mn}px`})),l=rn();jn(()=>Promise.resolve().then(()=>Nw),void 0).then(u=>l.value=u.default);const i=$(()=>n.clicks),a=uh(i,n.nav.currentRoute,n.nav.currentPage),c=$(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return At(te,ze({nav:{...n.nav,...a},configs:Se,themeConfigs:$(()=>Se.themeConfig)})),(u,p)=>{var d;return k(),I("div",{id:E(c),class:"print-slide-container",style:at(E(r))},[U(E(nh)),U(E(Ma),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":E(o),"onUpdate:clicksElements":p[0]||(p[0]=f=>Be(o)?o.value=f:null),clicks:E(i),"clicks-disabled":!1,class:We(E(Oa)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),E(l)?(k(),Q(E(l),{key:0,page:+e.route.path},null,8,["page"])):ce("v-if",!0),U(E(th))],12,mE)}}}),Xu=se(yE,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),gE=Te({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var l;const t=e;Y(te);const n=z(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),o=$(()=>t.route),r=ch(o);return(i,a)=>(k(),I($e,null,[U(Xu,{"clicks-elements":n.value,"onUpdate:clicksElements":a[0]||(a[0]=c=>n.value=c),clicks:0,nav:E(r),route:E(o)},null,8,["clicks-elements","nav","route"]),E(xo)?ce("v-if",!0):(k(!0),I($e,{key:0},Us(n.value.length,c=>(k(),Q(Xu,{key:c,clicks:c,nav:E(r),route:E(o)},null,8,["clicks","nav","route"]))),128))],64))}}),vE=se(gE,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/PrintSlide.vue"]]),_E={id:"print-content"},bE=Te({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;Y(te);const n=$(()=>t.width),o=$(()=>t.width/On),r=$(()=>n.value/o.value),l=$(()=>r.value<On?n.value/Mn:o.value*On/Mn);let i=Ge.slice(0,-1);Vt.value.query.range&&(i=ah(i.length,Vt.value.query.range).map(u=>i[u-1]));const a=$(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return At(sf,l),(c,u)=>(k(),I("div",{id:"print-container",class:We(E(a))},[s("div",_E,[(k(!0),I($e,null,Us(E(i),p=>(k(),Q(vE,{key:p.path,route:p},null,8,["route"]))),128))]),Lt(c.$slots,"controls")],2))}});const wE=se(bE,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/PrintContainer.vue"]]),CE=Te({__name:"Print",setup(e){return Y(te),ws(()=>{zs?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(k(),I($e,null,[E(zs)?(k(),Q(sh,{key:0})):ce("v-if",!0),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:at(E(Aa))},[U(wE,{class:"w-full h-full",style:at({background:"var(--slidev-slide-container-background, black)"}),width:E(ys).width.value},null,8,["style","width"])],4)],64))}});const kE=se(CE,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/internals/Print.vue"]]);const EE={class:"slidev-layout end"},xE={__name:"end",setup(e){return Y(te),(t,n)=>(k(),I("div",EE," END "))}},DE=se(xE,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/layouts/end.vue"]]),Va={highlighter:String,fonts:Object,layout:String,titleRow:Boolean},AE="/vue-js-why-so-much-love/assets/bg-cover-fa358a41.svg",SE="/vue-js-why-so-much-love/assets/bg-cover-alt-929da8bd.svg";const FE={class:"slidev-layout cover flex items-center justify-center"},$E={class:"absolute inset-0 z-1"},BE=["src"],IE={class:"w-full absolute z-2"},TE={key:0,class:"bg-white dark:bg-vblue py-12 border-t-4 border-b-4 border-vgreen text-center shadow-lg shadow-light-300/50 light:shadow-gray-300/50"},OE={class:"absolute bottom-4 text-center w-full"},ME={__name:"cover",props:{...Va,showHint:Boolean,altCover:Boolean},setup(e){const t=Y(te);return(n,o)=>{const r=eh,l=Rt("click");return k(),I("div",FE,[s("div",$E,[s("img",{src:e.altCover?E(SE):E(AE),alt:"",class:We(E(t).nav.clicks?"opacity-50":"opacity-80")},null,10,BE)]),Pe((k(),I("div",IE,[U(tr,{appear:"","enter-from-class":"transform scale-85 opacity-0 translate-y-8","enter-active-class":"transition-all duration-200 origin-bottom ease-in","enter-to-class":"transform scale-100"},{default:ne(()=>[E(t).nav.clicks===1?(k(),I("div",TE,[Lt(n.$slots,"default",{},void 0,!0)])):ce("v-if",!0)]),_:3})])),[[l]]),s("div",OE,[e.showHint?(k(),I("span",{key:0,onClick:o[0]||(o[0]=(...i)=>E(t).nav.next&&E(t).nav.next(...i)),class:"px-2 p-1 rounded cursor-pointer text-white bg-white bg-opacity-10 hover:bg-opacity-20"},[m(" Press Space to continue "),U(r,{class:"inline"})])):ce("v-if",!0)])])}}},jE=se(ME,[["__scopeId","data-v-fcaf6ecc"],["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/slidev-theme-vuetiful/layouts/cover.vue"]]),PE=s("h1",null,"Vue.js - Why so much love?",-1),LE=s("p",null,"Gonçalo Marantes",-1),VE=s("div",{class:"pt-12 font-thin"},[m(" Portugal.Vue - April 5"),s("sup",null,"th"),m(", 2023 ")],-1),RE={__name:"1",setup(e){const t={theme:"vuetiful",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",css:"unocss"};return Y(te),(n,o)=>(k(),Q(jE,Ie(Fe(t)),{default:ne(()=>[PE,LE,VE]),_:1},16))}},NE=se(RE,[["__file","/@slidev/slides/1.md"]]);const HE={class:"customTitleRow"},WE={key:1},zE={__name:"default",props:{...Va,class:String,cols:String},setup(e){const t=e,n=Y(te),o=$(()=>{if(!t.cols)return null;switch(t.cols){case"1-1":return"grid-cols-2";case"1-2":return"grid-cols-[1fr,2fr]";case"2-1":return"grid-cols-[2fr,1fr]";default:return t.cols}});return(r,l)=>(k(),I("div",{class:We(["slidev-layout grid gap-y-3 gap-x-5 default",[r.titleRow?"grid-rows-[60px,1fr]":null,E(o)]])},[r.titleRow?(k(),I("div",{key:0,class:We(e.cols?"col-span-2":null)},[s("h1",HE,et(E(n).nav.currentRoute.meta.title),1)],2)):ce("v-if",!0),s("div",null,[Lt(r.$slots,"default")]),e.cols?(k(),I("div",WE,[Lt(r.$slots,"right")])):ce("v-if",!0)],2))}},qe=se(zE,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/slidev-theme-vuetiful/layouts/default.vue"]]),qE=s("h1",null,"What can you expect from this talk?",-1),UE=s("p",null,"We’re going to talk about Vue (well duh…) by discussing the following topics:",-1),ZE=s("ul",null,[s("li",null,[m("🙋‍♂️ "),s("strong",null,"Who am I?"),m(" - And why should you even listen to me in the first place")]),s("li",null,[m("🧑‍💻 "),s("strong",null,"My experience"),m(" - spoiler alert: it has been great so far :)")]),s("li",null,[m("🗝️ "),s("strong",null,"Key concepts"),m(" - Nothing too fancy, just an overview and framework comparison")]),s("li",null,[m("🤑 "),s("strong",null,"Benefits"),m(" - The actual love part")]),s("li",null,[m("😪 "),s("strong",null,"Challenges"),m(" - What’s love without a little hate?")]),s("li",null,[m("🗂️ "),s("strong",null,"A survey"),m(" - What do Infraspeak developers think?")]),s("li",null,[m("❓ "),s("strong",null,"Q/A"),m(" - Make me look smart")])],-1),YE={__name:"2",setup(e){const t={transition:"fade-out"};return Y(te),(n,o)=>(k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[qE,UE,ZE]),_:1},16))}},KE=se(YE,[["__file","/@slidev/slides/2.md"]]),GE="/vue-js-why-so-much-love/assets/eu-a-comer-a7c62bb9.jpg";const Ra=e=>(qn("data-v-1475a574"),e=e(),Un(),e),XE=Ra(()=>s("h1",null,"1. Who am I?",-1)),JE={grid:"~ cols-3 gap-2 gap-y-2 wrap"},QE=Ra(()=>s("div",{class:"col-span-2"},[s("ul",null,[s("li",null,"📛 Gonçalo Marantes"),s("li",null,"🏙️ Porto, Gondomar"),s("li",null,"🎓 M.Sc. in Informatics and Computing Engineering from FEUP"),s("li",null,"💙 Working as a Frontend Developer @ Infraspeak for ~ 7 month"),s("li",null,"💚 Frequent user of Vue and its ecosystem (since 2018)"),s("li",null,"🏋️‍♂️ Casually lifting heavy weights")])],-1)),e4=Ra(()=>s("div",null,[s("img",{border:"rounded-xl",src:GE})],-1)),t4={class:"col-span-3 justify-self-center"},n4={border:"rounded-xl",class:"h-52",src:"https://media.tenor.com/OHqk2q_b44oAAAAC/shrek-donkey.gif"},s4={__name:"3",setup(e){const t={srcSequence:"./pages/1-who-am-i.md"};return Y(te),(n,o)=>{const r=Rt("click");return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[XE,s("div",JE,[QE,e4,s("div",t4,[Pe(s("img",n4,null,512),[[r]])])])]),_:1},16)}}},o4=se(s4,[["__scopeId","data-v-1475a574"],["__file","/@slidev/slides/3.md"]]),r4="/vue-js-why-so-much-love/assets/bg-section-0e83db59.svg";const l4={class:"slidev-layout section"},i4={class:"absolute inset-0 z-1"},a4={key:0,src:r4,alt:"",class:"opacity-80"},c4={class:"flex flex-col justify-center h-full z-2"},u4=s("hr",{class:"w-48 border-t-5 border-vgreen"},null,-1),p4={class:"mt-4"},d4={inject:{$slidev:{from:te}},name:"SectionSlide"},f4=Object.assign(d4,{props:Va,setup(e){return(t,n)=>(k(),I("div",l4,[s("div",i4,[U(tr,{appear:"",name:"section"},{default:ne(()=>[t.$slidev.nav.currentLayout==="section"?(k(),I("img",a4)):ce("v-if",!0)]),_:1})]),s("div",c4,[u4,s("div",p4,[Lt(t.$slots,"default")])])]))}}),Ks=se(f4,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/slidev-theme-vuetiful/layouts/section.vue"]]);const ph=e=>(qn("data-v-7c118cf2"),e=e(),Un(),e),h4=ph(()=>s("h1",null,"2. My experience",-1)),m4=ph(()=>s("p",null,"Pretty awesome 😎",-1)),y4={__name:"4",setup(e){const t={layout:"section",srcSequence:"./pages/2-my-experience.md"};return Y(te),(n,o)=>(k(),Q(Ks,Ie(Fe(t)),{default:ne(()=>[h4,m4]),_:1},16))}},g4=se(y4,[["__scopeId","data-v-7c118cf2"],["__file","/@slidev/slides/4.md"]]),v4=["width","height"],_4=["id"],b4=["fill"],w4=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],C4=Te({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(e){Y(te);const n=E1("abcedfghijklmn",10)();return(o,r)=>(k(),I("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[s("defs",null,[s("marker",{id:E(n),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[s("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor"},null,8,b4)],8,_4)]),s("line",{x1:+e.x1,y1:+e.y1,x2:+e.x2,y2:+e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${E(n)})`},null,8,w4)],8,v4))}}),k4=se(C4,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/builtin/Arrow.vue"]]),E4="/vue-js-why-so-much-love/assets/ieee-website-c11fc257.png",x4="/vue-js-why-so-much-love/assets/tinder-match-82b3472f.jpg";const Na=e=>(qn("data-v-90fd6163"),e=e(),Un(),e),D4=Na(()=>s("hr",null,null,-1)),A4=Na(()=>s("h1",null,"Love at first sight 💕",-1)),S4=Na(()=>s("a",{href:"https://ieee.fe.up.pt/",target:"_blank"},[s("img",{border:"rounded",src:E4,class:"ieee"})],-1)),F4={position:"absolute",class:"top-40 left-30 w-64",rotate:"10",border:"rounded",src:x4},$4={__name:"5",setup(e){const t={srcSequence:"./pages/2-my-experience.md"};return Y(te),(n,o)=>{const r=k4,l=Rt("click");return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[D4,A4,S4,Pe(U(r,{x1:"400",y1:"420",x2:"580",y2:"290",color:"red"},null,512),[[l,1]]),s("p",null,[Pe(s("img",F4,null,512),[[l,2]])])]),_:1},16)}}},B4=se($4,[["__scopeId","data-v-90fd6163"],["__file","/@slidev/slides/5.md"]]);const Gs=e=>(qn("data-v-2abe3208"),e=e(),Un(),e),I4=Gs(()=>s("h1",null,"3. Key concepts",-1)),T4={grid:"~ cols-3"},O4={col:"span-2"},M4=Gs(()=>s("blockquote",null,[s("p",null,[m("Vue (pronounced "),s("em",null,"/vjuː/"),m(", like "),s("em",null,"view"),m(") is a "),s("strong",null,"JavaScript framework"),m(" for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a "),s("strong",null,"declarative"),m(" and "),s("strong",null,"component-based"),m(" programming model that helps you efficiently develop user interfaces, be they simple or complex. "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")])])],-1)),j4=Gs(()=>s("br",null,null,-1)),P4=Gs(()=>s("br",null,null,-1)),L4=Gs(()=>s("hr",{class:"footnotes-sep"},null,-1)),V4=Gs(()=>s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://vuejs.org/guide/introduction.html#what-is-vue",target:"_blank",rel:"noopener"},"https://vuejs.org/guide/introduction.html#what-is-vue"),m(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])])])],-1)),R4={__name:"6",setup(e){const t={layout:"section",srcSequence:"./pages/3-key-concepts.md"};return Y(te),(n,o)=>{const r=Rt("click");return k(),Q(Ks,Ie(Fe(t)),{default:ne(()=>[I4,s("div",T4,[s("div",O4,[M4,s("ul",null,[Pe((k(),I("li",null,[m("JavaScript")])),[[r,1]]),Pe((k(),I("li",null,[m("Declarative")])),[[r,2]]),Pe((k(),I("li",null,[m("Component-based")])),[[r,3]]),Pe((k(),I("li",null,[m("Reactivity")])),[[r,4]])]),Pe((k(),I("p",null,[m("But... what does this all mean? 🤔 (Don't worry, we'll get there)")])),[[r,5]])])]),j4,P4,L4,V4]),_:1},16)}}},N4=se(R4,[["__scopeId","data-v-2abe3208"],["__file","/@slidev/slides/6.md"]]),H4="/vue-js-why-so-much-love/assets/vue-timeline-48b6c64c.png",W4="/vue-js-why-so-much-love/assets/evan-creating-vue-022110a6.jpg",z4=s("h1",null,"Vue Timeline",-1),q4=s("p",null,"Vue is almost 10 years old since its initial release! 🎂",-1),U4=s("img",{src:H4},null,-1),Z4={position:"absolute",class:"top-30 left-30 w-98",rotate:"10",border:"rounded",src:W4},Y4=s("p",null,[s("strong",null,"Fun fact:"),m(" its releases are named after animes! 🇯🇵")],-1),K4={__name:"7",setup(e){const t={srcSequence:"./pages/3-key-concepts.md"};return Y(te),(n,o)=>{const r=Rt("click");return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[z4,q4,U4,s("p",null,[Pe(s("img",Z4,null,512),[[r]])]),Y4]),_:1},16)}}},G4=se(K4,[["__file","/@slidev/slides/7.md"]]),X4={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},J4=s("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),Q4=[J4];function ex(e,t){return k(),I("svg",X4,Q4)}const tx={name:"ph-clipboard",render:ex},nx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},sx=s("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),ox=[sx];function rx(e,t){return k(),I("svg",nx,ox)}const lx={name:"ph-check-circle",render:rx},ix=["title"],ax=Te({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;Y(te);const n=Y(bo),o=Y(os),r=Y(wo);function l(d=5){const f=[],y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=y.length;for(let v=0;v<d;v++)f.push(y.charAt(Math.floor(Math.random()*h)));return f.join("")}const i=z(),a=It();Cs(()=>{const d=t.at==null?o==null?void 0:o.value.length:t.at,f=$(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(d||0)),t.ranges.length-1)),y=$(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const h=l(),v=D1(t.ranges.length-1).map(_=>h+_);o!=null&&o.value&&(o.value.push(...v),fl(()=>v.forEach(_=>wi(o.value,_)),a))}ws(()=>{if(!i.value)return;const v=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const _ of v){const x=Array.from(_.querySelectorAll(".line")),C=ah(x.length,y.value);if(x.forEach((b,D)=>{const F=C.includes(D+1);b.classList.toggle(ts,!0),b.classList.toggle("highlighted",F),b.classList.toggle("dishonored",!F)}),t.maxHeight){const b=Array.from(_.querySelectorAll(".line.highlighted"));b.reduce((F,T)=>T.offsetHeight+F,0)>i.value.offsetHeight?b[0].scrollIntoView({behavior:"smooth",block:"start"}):b.length>0&&b[Math.round((b.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=S0();function p(){var f,y;const d=(y=(f=i.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:y.textContent;d&&u(d)}return(d,f)=>{const y=lx,h=tx;return k(),I("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:at({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Lt(d.$slots,"default"),E(Se).codeCopy?(k(),I("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:E(c)?"Copied":"Copy",onClick:f[0]||(f[0]=v=>p())},[E(c)?(k(),Q(y,{key:0,class:"p-2 w-8 h-8"})):(k(),Q(h,{key:1,class:"p-2 w-8 h-8"}))],8,ix)):ce("v-if",!0)],4)}}}),xs=se(ax,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),cx=s("h1",null,"Declarative Syntax",-1),ux=s("p",null,"HTML-based template syntax to declaratively bind rendered DOM",-1),px={grid:"~ cols-2 gap-4"},dx=s("p",null,[m('Text interpolation with "Mustache"'),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")]),m(" syntax")],-1),fx=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"span"),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}},"Message: {{ msg }}"),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"span"),s("span",{style:{color:"#7FDBCA"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<span>"),s("span",{style:{color:"#403F53"}},"Message: {{ msg }}"),s("span",{style:{color:"#994CC3"}},"</span>")])])])],-1),hx=s("p",null,"Attribute binding",-1),mx=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"button")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    :"),s("span",{style:{color:"#C5E478","font-style":"italic"}},"disabled"),s("span",{style:{color:"#D6DEEB"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#D6DEEB"}},"isButtonDisabled"),s("span",{style:{color:"#D9F5DD"}},'"')]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    :"),s("span",{style:{color:"#C5E478","font-style":"italic"}},"class"),s("span",{style:{color:"#D6DEEB"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#D6DEEB"}},"isButtonDisabled")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"        "),s("span",{style:{color:"#C792EA"}},"?"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#ECC48D"}},"button--disabled"),s("span",{style:{color:"#D9F5DD"}},"'")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"        "),s("span",{style:{color:"#C792EA"}},":"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#ECC48D"}},"button"),s("span",{style:{color:"#D9F5DD"}},`'"`)]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}},"Button"),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<button")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    :"),s("span",{style:{color:"#4876D6","font-style":"italic"}},"disabled"),s("span",{style:{color:"#403F53"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#403F53"}},"isButtonDisabled"),s("span",{style:{color:"#111111"}},'"')]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    :"),s("span",{style:{color:"#4876D6","font-style":"italic"}},"class"),s("span",{style:{color:"#403F53"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#403F53"}},"isButtonDisabled")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"        "),s("span",{style:{color:"#994CC3"}},"?"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#C96765"}},"button--disabled"),s("span",{style:{color:"#111111"}},"'")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"        "),s("span",{style:{color:"#994CC3"}},":"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#C96765"}},"button"),s("span",{style:{color:"#111111"}},`'"`)]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},">"),s("span",{style:{color:"#403F53"}},"Button"),s("span",{style:{color:"#994CC3"}},"</button>")])])])],-1),yx=s("p",null,[m("Using directives"),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn2",id:"fnref2"},"[2]")]),m(" for:")],-1),gx=s("ol",null,[s("li",null,"Conditional rendering")],-1),vx=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"span"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"v-if"),s("span",{style:{color:"#D6DEEB"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#D6DEEB"}},"isVisible"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}},"Welcome to Portugal.vue"),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"span"),s("span",{style:{color:"#7FDBCA"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<span"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"v-if"),s("span",{style:{color:"#403F53"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#403F53"}},"isVisible"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">"),s("span",{style:{color:"#403F53"}},"Welcome to Portugal.vue"),s("span",{style:{color:"#994CC3"}},"</span>")])])])],-1),_x=s("ol",{start:"2"},[s("li",null,"List rendering")],-1),bx=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"li"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"v-for"),s("span",{style:{color:"#D6DEEB"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#D6DEEB"}},"item "),s("span",{style:{color:"#7FDBCA"}},"in"),s("span",{style:{color:"#D6DEEB"}}," items"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  {{ item.message }}")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"li"),s("span",{style:{color:"#7FDBCA"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<li"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"v-for"),s("span",{style:{color:"#403F53"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#403F53"}},"item "),s("span",{style:{color:"#0C969B"}},"in"),s("span",{style:{color:"#403F53"}}," items"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  {{ item.message }}")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"</li>")])])])],-1),wx=s("ol",{start:"3"},[s("li",null,"Much more (take a look at the docs 📑)")],-1),Cx=s("hr",{class:"footnotes-sep"},null,-1),kx=s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"http://mustache.github.io/",target:"_blank",rel:"noopener"},"http://mustache.github.io/"),m(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])]),s("li",{id:"fn2",class:"footnote-item"},[s("p",null,[s("a",{href:"https://vuejs.org/api/built-in-directives.html",target:"_blank",rel:"noopener"},"https://vuejs.org/api/built-in-directives.html"),m(),s("a",{href:"#fnref2",class:"footnote-backref"},"↩︎")])])])],-1),Ex={__name:"8",setup(e){const t={srcSequence:"./pages/3-key-concepts.md"};return Y(te),(n,o)=>{const r=xs,l=Rt("click");return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[cx,ux,s("div",px,[Pe((k(),I("div",null,[dx,U(r,Xe({},{ranges:[""]}),{default:ne(()=>[fx]),_:1},16),hx,U(r,Xe({},{ranges:[""]}),{default:ne(()=>[mx]),_:1},16)])),[[l]]),Pe((k(),I("div",null,[yx,gx,U(r,Xe({},{ranges:[""]}),{default:ne(()=>[vx]),_:1},16),_x,U(r,Xe({},{ranges:[""]}),{default:ne(()=>[bx]),_:1},16),wx])),[[l]])]),Cx,kx]),_:1},16)}}},xx=se(Ex,[["__file","/@slidev/slides/8.md"]]),Dx={flex:"~",w:"min",border:"~ main rounded-md"},Ax={m:"auto",p:"2"},Sx=Te({__name:"Counter",setup(e){Y(te);const t=z(0);return(n,o)=>(k(),I("div",Dx,[s("button",{border:"r main",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:o[0]||(o[0]=r=>t.value-=1)}," - "),s("span",Ax,et(t.value),1),s("button",{border:"l main",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:o[1]||(o[1]=r=>t.value+=1)}," + ")]))}}),Fx=se(Sx,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/components/Counter.vue"]]),$x=s("h1",null,"Let’s take a look at a quick example",-1),Bx=s("p",null,"Anyway, let’s build a counter app:",-1),Ix={grid:"~ cols-2 gap-10"},Tx=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"script"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"setup"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"lang"),s("span",{style:{color:"#D6DEEB"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"ts"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA","font-style":"italic"}},"import"),s("span",{style:{color:"#D6DEEB"}}," { ref } "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"from"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#ECC48D"}},"vue"),s("span",{style:{color:"#D9F5DD"}},"'")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"counter"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"ref"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"script"),s("span",{style:{color:"#7FDBCA"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<script"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"setup"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"lang"),s("span",{style:{color:"#403F53"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"ts"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3","font-style":"italic"}},"import"),s("span",{style:{color:"#403F53"}}," { ref } "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"from"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#C96765"}},"vue"),s("span",{style:{color:"#111111"}},"'")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"const"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"counter"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"ref"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#AA0982"}},"0"),s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<\/script>")])])])],-1),Ox=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"script"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"lang"),s("span",{style:{color:"#D6DEEB"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"ts"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA","font-style":"italic"}},"import"),s("span",{style:{color:"#D6DEEB"}}," { defineComponent } "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"from"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#ECC48D"}},"vue"),s("span",{style:{color:"#D9F5DD"}},"'")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA","font-style":"italic"}},"export"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"default"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"defineComponent"),s("span",{style:{color:"#D6DEEB"}},"({")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"data"),s("span",{style:{color:"#D9F5DD"}},"()"),s("span",{style:{color:"#D6DEEB"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"        "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"return"),s("span",{style:{color:"#D6DEEB"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"            counter: "),s("span",{style:{color:"#F78C6C"}},"0")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"        }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"})")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"script"),s("span",{style:{color:"#7FDBCA"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<script"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"lang"),s("span",{style:{color:"#403F53"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"ts"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3","font-style":"italic"}},"import"),s("span",{style:{color:"#403F53"}}," { defineComponent } "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"from"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#C96765"}},"vue"),s("span",{style:{color:"#111111"}},"'")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3","font-style":"italic"}},"export"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"default"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"defineComponent"),s("span",{style:{color:"#403F53"}},"({")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"data"),s("span",{style:{color:"#111111"}},"()"),s("span",{style:{color:"#403F53"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"        "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"return"),s("span",{style:{color:"#403F53"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"            counter: "),s("span",{style:{color:"#AA0982"}},"0")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"        }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"})")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<\/script>")])])])],-1),Mx=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"template"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"div"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"@click"),s("span",{style:{color:"#7FDBCA"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"() => counter -= 1"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}}," - "),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    {{ counter }}")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"@click"),s("span",{style:{color:"#7FDBCA"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"() => counter += 1"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}}," + "),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"div"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"template"),s("span",{style:{color:"#7FDBCA"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<template>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#994CC3"}},"<div>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#994CC3"}},"<button "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"@click"),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"() => counter -= 1"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">"),s("span",{style:{color:"#403F53"}}," - "),s("span",{style:{color:"#994CC3"}},"</button>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    {{ counter }}")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#994CC3"}},"<button "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"@click"),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"() => counter += 1"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">"),s("span",{style:{color:"#403F53"}}," + "),s("span",{style:{color:"#994CC3"}},"</button>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#994CC3"}},"</div>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"</template>")])])])],-1),jx={__name:"9",setup(e){const t={srcSequence:"./pages/3-key-concepts.md"};return Y(te),(n,o)=>{const r=xs,l=Fx;return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[$x,Bx,s("div",Ix,[s("div",null,[U(r,Xe({},{ranges:["all","4"]}),{default:ne(()=>[Tx]),_:1},16),U(r,Xe({},{ranges:["all","7"]}),{default:ne(()=>[Ox]),_:1},16)]),s("div",null,[U(r,Xe({},{ranges:["all","4","3,5"]}),{default:ne(()=>[Mx]),_:1},16),U(l)])])]),_:1},16)}}},Px=se(jx,[["__file","/@slidev/slides/9.md"]]),Lx=s("h1",null,"Building the same app using an imperative syntax",-1),Vx={grid:"~ cols-5 gap-10"},Rx={class:"col-span-3"},Nx=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"increaseButton"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#7FDBCA","font-style":"italic"}},"document"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"getElementById"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"increase"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"decreaseButton"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#7FDBCA","font-style":"italic"}},"document"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"getElementById"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"decrease"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"counter"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#7FDBCA","font-style":"italic"}},"document"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"getElementById"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"counter"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA","font-style":"italic"}},"increaseButton"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"addEventListener"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"click"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#D6DEEB"}},", "),s("span",{style:{color:"#D9F5DD"}},"()"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#D6DEEB"}}," ")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#7FDBCA","font-style":"italic"}},"counter"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#BAEBE2"}},"innerHTML"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"parseInt"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#7FDBCA","font-style":"italic"}},"counter"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#BAEBE2"}},"innerHTML"),s("span",{style:{color:"#D6DEEB"}},") "),s("span",{style:{color:"#C792EA"}},"+"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#D6DEEB"}},";")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}}," ")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA","font-style":"italic"}},"decreaseButton"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"addEventListener"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"click"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#D6DEEB"}},", "),s("span",{style:{color:"#D9F5DD"}},"()"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA"}},"=>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#7FDBCA","font-style":"italic"}},"counter"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#BAEBE2"}},"innerHTML"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"parseInt"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#7FDBCA","font-style":"italic"}},"counter"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#BAEBE2"}},"innerHTML"),s("span",{style:{color:"#D6DEEB"}},") "),s("span",{style:{color:"#C792EA"}},"-"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#D6DEEB"}},";")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},")")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"const"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"increaseButton"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#0C969B","font-style":"italic"}},"document"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#4876D6","font-style":"italic"}},"getElementById"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"increase"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"const"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"decreaseButton"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#0C969B","font-style":"italic"}},"document"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#4876D6","font-style":"italic"}},"getElementById"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"decrease"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"const"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"counter"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#0C969B","font-style":"italic"}},"document"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#4876D6","font-style":"italic"}},"getElementById"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"counter"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0C969B","font-style":"italic"}},"increaseButton"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#4876D6","font-style":"italic"}},"addEventListener"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"click"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#403F53"}},", "),s("span",{style:{color:"#111111"}},"()"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3"}},"=>"),s("span",{style:{color:"#403F53"}}," ")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#0C969B","font-style":"italic"}},"counter"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#0C969B"}},"innerHTML"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"parseInt"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#0C969B","font-style":"italic"}},"counter"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#0C969B"}},"innerHTML"),s("span",{style:{color:"#403F53"}},") "),s("span",{style:{color:"#994CC3"}},"+"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#AA0982"}},"1"),s("span",{style:{color:"#403F53"}},";")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}}," ")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0C969B","font-style":"italic"}},"decreaseButton"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#4876D6","font-style":"italic"}},"addEventListener"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"click"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#403F53"}},", "),s("span",{style:{color:"#111111"}},"()"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3"}},"=>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#0C969B","font-style":"italic"}},"counter"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#0C969B"}},"innerHTML"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"parseInt"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#0C969B","font-style":"italic"}},"counter"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#0C969B"}},"innerHTML"),s("span",{style:{color:"#403F53"}},") "),s("span",{style:{color:"#994CC3"}},"-"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#AA0982"}},"1"),s("span",{style:{color:"#403F53"}},";")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},")")])])])],-1),Hx={class:"col-span-2"},Wx=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"div"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"id"),s("span",{style:{color:"#7FDBCA"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"increase"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}}," - "),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"span"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"id"),s("span",{style:{color:"#7FDBCA"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"counter"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}}," 0 "),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"span"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"id"),s("span",{style:{color:"#7FDBCA"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"decrease"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}}," + "),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"div"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"script"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"src"),s("span",{style:{color:"#7FDBCA"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"app.js"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},"></"),s("span",{style:{color:"#CAECE6"}},"script"),s("span",{style:{color:"#7FDBCA"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<div>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#994CC3"}},"<button "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"id"),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"increase"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">"),s("span",{style:{color:"#403F53"}}," - "),s("span",{style:{color:"#994CC3"}},"</button>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#994CC3"}},"<span "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"id"),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"counter"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">"),s("span",{style:{color:"#403F53"}}," 0 "),s("span",{style:{color:"#994CC3"}},"</span>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#994CC3"}},"<button "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"id"),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"decrease"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">"),s("span",{style:{color:"#403F53"}}," + "),s("span",{style:{color:"#994CC3"}},"</button>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"</div>")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<script "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"src"),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"app.js"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},"><\/script>")])])])],-1),zx={__name:"10",setup(e){const t={srcSequence:"./pages/3-key-concepts.md"};return Y(te),(n,o)=>{const r=xs;return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[Lx,s("div",Vx,[s("div",Rx,[U(r,Xe({},{ranges:["all","6,10"]}),{default:ne(()=>[Nx]),_:1},16)]),s("div",Hx,[U(r,Xe({},{ranges:[""]}),{default:ne(()=>[Wx]),_:1},16)])])]),_:1},16)}}},qx=se(zx,[["__file","/@slidev/slides/10.md"]]),Ux=s("h1",null,"Reactivity",-1),Zx=s("blockquote",null,[s("p",null,[m("Reactivity is a programming paradigm that allows us to adjust to changes in a "),s("strong",null,"declarative"),m(" manner. "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")])])],-1),Yx=s("br",null,null,-1),Kx={grid:"~ cols-6 gap-10"},Gx=s("div",{class:"col-span-2"},[s("img",{src:"https://www.benlcollins.com/ebook_35_tips_gifs/gifs/conditional_formatting.gif"})],-1),Xx={class:"col-span-4"},Jx=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"let"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"A0"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#F78C6C"}},"1")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"let"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"A1"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#F78C6C"}},"2")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"let"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"A2"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"A0"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"+"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"A1")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"console"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"log"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#82AAFF"}},"A2"),s("span",{style:{color:"#D6DEEB"}},") "),s("span",{style:{color:"#637777"}},"//"),s("span",{style:{color:"#637777","font-style":"italic"}}," 3")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"A0"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#F78C6C"}},"2")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"console"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"log"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#82AAFF"}},"A2"),s("span",{style:{color:"#D6DEEB"}},") "),s("span",{style:{color:"#637777"}},"//"),s("span",{style:{color:"#637777","font-style":"italic"}}," Still 3 not 4 😢")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"let"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"A0"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#AA0982"}},"1")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"let"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"A1"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#AA0982"}},"2")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"let"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"A2"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"A0"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"+"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"A1")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"console"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#4876D6","font-style":"italic"}},"log"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#4876D6"}},"A2"),s("span",{style:{color:"#403F53"}},") "),s("span",{style:{color:"#939DBB"}},"//"),s("span",{style:{color:"#939DBB","font-style":"italic"}}," 3")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4876D6"}},"A0"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#AA0982"}},"2")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"console"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#4876D6","font-style":"italic"}},"log"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#4876D6"}},"A2"),s("span",{style:{color:"#403F53"}},") "),s("span",{style:{color:"#939DBB"}},"//"),s("span",{style:{color:"#939DBB","font-style":"italic"}}," Still 3 not 4 😢")])])])],-1),Qx=s("p",null,[m("How reactivity works in Vue is an advanced topic, but you still figure it out "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn2",id:"fnref2"},"[2]")])],-1),e6=s("hr",{class:"footnotes-sep"},null,-1),t6=s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity",target:"_blank",rel:"noopener"},"https://vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity"),m(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])]),s("li",{id:"fn2",class:"footnote-item"},[s("p",null,[s("a",{href:"https://vuejs.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue",target:"_blank",rel:"noopener"},"https://vuejs.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue"),m(),s("a",{href:"#fnref2",class:"footnote-backref"},"↩︎")])])])],-1),n6={__name:"11",setup(e){const t={srcSequence:"./pages/3-key-concepts.md"};return Y(te),(n,o)=>{const r=xs;return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[Ux,Zx,Yx,s("div",Kx,[Gx,s("div",Xx,[U(r,Xe({},{ranges:[""]}),{default:ne(()=>[Jx]),_:1},16),Qx])]),e6,t6]),_:1},16)}}},s6=se(n6,[["__file","/@slidev/slides/11.md"]]),o6=s("h1",null,"Single File Components",-1),r6=s("blockquote",null,[s("p",null,[m("A Vue Single-File Component (SFC), conventionally using the "),s("code",null,"*.vue"),m(" file extension, is a custom file format that uses an HTML-like syntax to describe a Vue component. (…)")]),s("p",null,[m("Each "),s("code",null,"*.vue"),m(" file consists of three types of top-level language blocks: "),s("code",null,"<template>"),m(", "),s("code",null,"<script>"),m(", and "),s("code",null,"<style>"),m(", (…) "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")])])],-1),l6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"template"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"lang"),s("span",{style:{color:"#D6DEEB"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"html (default) | pug | ..."),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#637777"}},"<!--"),s("span",{style:{color:"#637777","font-style":"italic"}}," Your HTML/PUG/Whatever can go here "),s("span",{style:{color:"#637777"}},"-->")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"template"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"script"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"[setup]"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"lang"),s("span",{style:{color:"#D6DEEB"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"js (default) | ts"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#637777"}},"/*"),s("span",{style:{color:"#637777","font-style":"italic"}}," Logic goes here "),s("span",{style:{color:"#637777"}},"*/")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"script"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"style"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"[scoped]"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"lang"),s("span",{style:{color:"#D6DEEB"}},"="),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#ECC48D"}},"css (default) | scss | sass | less"),s("span",{style:{color:"#D9F5DD"}},'"'),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}}," ")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#637777"}},"/*"),s("span",{style:{color:"#637777","font-style":"italic"}}," styles go here "),s("span",{style:{color:"#637777"}},"*/")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"style"),s("span",{style:{color:"#7FDBCA"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<template"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"lang"),s("span",{style:{color:"#403F53"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"html (default) | pug | ..."),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#989FB1"}},"<!--"),s("span",{style:{color:"#989FB1","font-style":"italic"}}," Your HTML/PUG/Whatever can go here "),s("span",{style:{color:"#989FB1"}},"-->")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"</template>")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<script"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"[setup]"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"lang"),s("span",{style:{color:"#403F53"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"js (default) | ts"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#989FB1"}},"/*"),s("span",{style:{color:"#989FB1","font-style":"italic"}}," Logic goes here "),s("span",{style:{color:"#989FB1"}},"*/")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<\/script>")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"<style"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"[scoped]"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"lang"),s("span",{style:{color:"#403F53"}},"="),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#C96765"}},"css (default) | scss | sass | less"),s("span",{style:{color:"#111111"}},'"'),s("span",{style:{color:"#994CC3"}},">"),s("span",{style:{color:"#403F53"}}," ")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#989FB1"}},"/*"),s("span",{style:{color:"#989FB1","font-style":"italic"}}," styles go here "),s("span",{style:{color:"#989FB1"}},"*/")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"</style>")])])])],-1),i6=s("hr",{class:"footnotes-sep"},null,-1),a6=s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://vuejs.org/api/sfc-spec.html#overview",target:"_blank",rel:"noopener"},"https://vuejs.org/api/sfc-spec.html#overview"),m(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])])])],-1),c6={__name:"12",setup(e){const t={transition:"slide-up",srcSequence:"./pages/3-key-concepts.md"};return Y(te),(n,o)=>{const r=xs;return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[o6,r6,U(r,Xe({},{ranges:[""]}),{default:ne(()=>[l6]),_:1},16),i6,a6]),_:1},16)}}},u6=se(c6,[["__file","/@slidev/slides/12.md"]]);const Ha=e=>(qn("data-v-213e2124"),e=e(),Un(),e),p6=Ha(()=>s("h1",null,"4. Benefits",-1)),d6=Ha(()=>s("p",null,"You right now:",-1)),f6=Ha(()=>s("blockquote",null,[s("p",null,[s("em",null,"Alright, Vue seems cool… but is it for me?")])],-1)),h6={__name:"13",setup(e){const t={layout:"section",srcSequence:"./pages/4-benefits.md"};return Y(te),(n,o)=>{const r=Rt("click");return k(),Q(Ks,Ie(Fe(t)),{default:ne(()=>[p6,d6,f6,Pe((k(),I("p",null,[m("Probably... it depends... But I bet it is.")])),[[r]])]),_:1},16)}}},m6=se(h6,[["__scopeId","data-v-213e2124"],["__file","/@slidev/slides/13.md"]]),y6=s("h1",null,"Why I like Single File Components",-1),g6={text:"center 6"},v6={grid:"~ cols-2 gap-10",class:"justify-center"},_6=s("img",{class:"h-20 mx-auto my-4",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"},null,-1),b6=s("p",null,[m("React component files structure "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")])],-1),w6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#d6deeb"}},"/ foo")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#d6deeb"}},"├── foo.js")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#d6deeb"}},"└── foo.css")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#403f53"}},"/ foo")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403f53"}},"├── foo.js")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403f53"}},"└── foo.css")])])])],-1),C6=[_6,b6,w6],k6=s("img",{class:"h-20 mx-auto my-4",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"},null,-1),E6=s("p",null,[m("Angular component files structure "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn2",id:"fnref2"},"[2]")])],-1),x6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#d6deeb"}},"/ foo")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#d6deeb"}},"├── foo.component.ts")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#d6deeb"}},"├── foo.component.html")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#d6deeb"}},"└── foo.component.css")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#403f53"}},"/ foo")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403f53"}},"├── foo.component.ts")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403f53"}},"├── foo.component.html")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403f53"}},"└── foo.component.css")])])])],-1),D6=[k6,E6,x6],A6={position:"absolute",top:"50",left:"100",rotate:"10",background:"red",flex:"~ gap-4",items:"center"},S6=s("img",{class:"h-20",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"},null,-1),F6=s("img",{class:"h-20",src:"https://em-content.zobj.net/thumbs/160/apple/96/white-heavy-check-mark_2705.png"},null,-1),$6=[S6,F6],B6=s("hr",{class:"footnotes-sep"},null,-1),I6=s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://legacy.reactjs.org/docs/faq-structure.html",target:"_blank",rel:"noopener"},"https://legacy.reactjs.org/docs/faq-structure.html"),m(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])]),s("li",{id:"fn2",class:"footnote-item"},[s("p",null,[s("a",{href:"https://angular.io/guide/file-structure#application-source-files",target:"_blank",rel:"noopener"},"https://angular.io/guide/file-structure#application-source-files"),m(),s("a",{href:"#fnref2",class:"footnote-backref"},"↩︎")])])])],-1),T6={__name:"14",setup(e){const t={srcSequence:"./pages/4-benefits.md"};return Y(te),(n,o)=>{const r=Rt("click");return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[y6,Pe((k(),I("p",g6,[m("One file to rule them all! 💍")])),[[r]]),s("div",v6,[Pe((k(),I("div",null,C6)),[[r]]),Pe((k(),I("div",null,D6)),[[r]])]),Pe((k(),I("div",A6,$6)),[[r]]),B6,I6]),_:1},16)}}},O6=se(T6,[["__file","/@slidev/slides/14.md"]]),M6="/vue-js-why-so-much-love/assets/grandma-vue-init-aac81b30.jpg",j6=s("h1",null,"Ease of use",-1),P6=s("p",null,"This is my personal opinion, but Vue just makes sense in my little goldfish brain!",-1),L6=s("ul",null,[s("li",null,"⌨️ One command and you’re ready to go;"),s("li",null,"⚡ You can probably get it up and running in under 5 minutes;"),s("li",null,"📊 It can be as simple or as complex as you want;"),s("li",null,"🔋 It comes with batteries included;"),s("li",null,"📄 SFCs tend to make things simple;"),s("li",null,"👵 You can probably teach it to your grandma;")],-1),V6=s("p",null,[s("img",{position:"absolute",bottom:"4",right:"2",class:"mx-auto h-60",src:M6})],-1),R6={__name:"15",setup(e){const t={srcSequence:"./pages/4-benefits.md"};return Y(te),(n,o)=>(k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[j6,P6,L6,V6]),_:1},16))}},N6=se(R6,[["__file","/@slidev/slides/15.md"]]),H6=s("h1",null,"Batteries included and instructions for dummies",-1),W6=s("p",null,"There are recommended ways of doing stuff (this is double edged-sword):",-1),z6=s("ul",null,[s("li",null,[m("📋 "),s("strong",null,"State Manegement:"),m(" Pinia (or VueX for Vue 2)")]),s("li",null,[m("🚦 "),s("strong",null,"Routing:"),m(" Vue Router")]),s("li",null,[m("🧪 "),s("strong",null,"Testing:"),m(" Vitest")]),s("li",null,[m("🎁 "),s("strong",null,"Scaffolding/Bundler:"),m(" Vite (vue-cli for Vue 2)")]),s("li",null,[m("🧑‍💻 "),s("strong",null,"IDE Support for SFC:"),m(" Volar (Vetur for Vue 2)")]),s("li",null,[m("🖨️ "),s("strong",null,"SSR/SSG:"),m(" Nuxt (You can still do it manually)")])],-1),q6={__name:"16",setup(e){const t={srcSequence:"./pages/4-benefits.md"};return Y(te),(n,o)=>(k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[H6,W6,z6]),_:1},16))}},U6=se(q6,[["__file","/@slidev/slides/16.md"]]),Z6="/vue-js-why-so-much-love/assets/ape-meme-06c63384.jpg",Y6=s("h1",null,"Strong community",-1),K6=s("p",null,'This is not unique to Vue (React did it first), but most likely there’s a Vue "port" for that library you’re considering using!',-1),G6=s("p",null,"The vue ecosystem is blooming, and you can easily find the tool or information you need to get your job done.",-1),X6=s("p",null,"I mean, just look at us right now 🎉",-1),J6=s("p",null,'There’s also a lot of "official" learning resources: 🤓',-1),Q6=s("ul",null,[s("li",null,[s("a",{href:"https://www.vuemastery.com/",target:"_blank",rel:"noopener"},"Vue Mastery")]),s("li",null,[s("a",{href:"https://vueschool.io/",target:"_blank",rel:"noopener"},"Vue School")])],-1),eD=s("p",null,[s("img",{position:"absolute",bottom:"4",right:"2",class:"mx-auto h-60",src:Z6})],-1),tD={__name:"17",setup(e){const t={srcSequence:"./pages/4-benefits.md"};return Y(te),(n,o)=>(k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[Y6,K6,G6,X6,J6,Q6,eD]),_:1},16))}},nD=se(tD,[["__file","/@slidev/slides/17.md"]]),sD="/vue-js-why-so-much-love/assets/benchmark-operations-fa4995b8.png",oD="/vue-js-why-so-much-love/assets/benchmark-startup-fc31dd07.png",rD="/vue-js-why-so-much-love/assets/benchmark-memory-099562a7.png",lD=s("h1",null,"How performant is Vue?",-1),iD=s("p",null,[m("TLDR: Vue 3 tends to be one of the most performant frameworks, going hand in hand with the latests versions of Svetle "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")])],-1),aD=s("div",{grid:"~ cols-3 gap-10",class:"justify-center"},[s("img",{src:sD}),s("img",{src:oD}),s("img",{src:rD})],-1),cD=s("p",null,[s("strong",null,"Disclaimer:"),m(" These charts only tell part of the story, there are some caveats you should look out for. Plus, performance is not everything :)")],-1),uD=s("hr",{class:"footnotes-sep"},null,-1),pD=s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://krausest.github.io/js-framework-benchmark/2023/table_chrome_111.0.5563.64.html#eyJmcmFtZXdvcmtzIjpbImtleWVkL2FuZ3VsYXIiLCJrZXllZC9yZWFjdCIsImtleWVkL3N2ZWx0ZSIsImtleWVkL3Z1ZSIsIm5vbi1rZXllZC9yZWFjdCIsIm5vbi1rZXllZC9zdmVsdGUiLCJub24ta2V5ZWQvdnVlIl0sImJlbmNobWFya3MiOlsiMDFfcnVuMWsiLCIwMl9yZXBsYWNlMWsiLCIwM191cGRhdGUxMHRoMWtfeDE2IiwiMDRfc2VsZWN0MWsiLCIwNV9zd2FwMWsiLCIwNl9yZW1vdmUtb25lLTFrIiwiMDdfY3JlYXRlMTBrIiwiMDhfY3JlYXRlMWstYWZ0ZXIxa194MiIsIjA5X2NsZWFyMWtfeDgiLCIyMV9yZWFkeS1tZW1vcnkiLCIyMl9ydW4tbWVtb3J5IiwiMjNfdXBkYXRlNS1tZW1vcnkiLCIyNV9ydW4tY2xlYXItbWVtb3J5IiwiMjZfcnVuLTEway1tZW1vcnkiLCIzMV9zdGFydHVwLWNpIiwiMzRfc3RhcnR1cC10b3RhbGJ5dGVzIl0sImRpc3BsYXlNb2RlIjoxLCJjYXRlZ29yaWVzIjpbMSwyLDMsNCw1XX0=",target:"_blank",rel:"noopener"},"JS framework Benchmark (2023)"),m(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])])])],-1),dD={__name:"18",setup(e){const t={srcSequence:"./pages/4-benefits.md"};return Y(te),(n,o)=>(k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[lD,iD,aD,cD,uD,pD]),_:1},16))}},fD=se(dD,[["__file","/@slidev/slides/18.md"]]),hD=s("h1",null,[m("What do developers say? "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")])],-1),mD=s("iframe",{class:"mx-auto",width:"600",height:"371",frameborder:"0",scrolling:"no",src:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=855587019&format=interactive"},null,-1),yD=s("hr",{class:"footnotes-sep"},null,-1),gD=s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://survey.stackoverflow.co/2022/#section-most-popular-technologies-web-frameworks-and-technologies",target:"_blank",rel:"noopener"},"Stakoverflow Survey (2022): Most popular web frameworks and technologies"),m(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])])])],-1),vD={__name:"19",setup(e){const t={srcSequence:"./pages/4-benefits.md"};return Y(te),(n,o)=>(k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[hD,mD,yD,gD]),_:1},16))}},_D=se(vD,[["__file","/@slidev/slides/19.md"]]),bD=s("h1",null,[m("What’s the market working with? "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")])],-1),wD=s("iframe",{class:"mx-auto",width:"600",height:"371",seamless:"",frameborder:"0",scrolling:"no",src:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=713110289&format=interactive"},null,-1),CD=s("hr",{class:"footnotes-sep"},null,-1),kD=s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://trends.builtwith.com/javascript",target:"_blank",rel:"noopener"},"Built With Statistics"),m(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])])])],-1),ED={__name:"20",setup(e){const t={transition:"slide-up",srcSequence:"./pages/4-benefits.md"};return Y(te),(n,o)=>(k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[bD,wD,CD,kD]),_:1},16))}},xD=se(ED,[["__file","/@slidev/slides/20.md"]]);const dh=e=>(qn("data-v-95c30a12"),e=e(),Un(),e),DD=dh(()=>s("h1",null,"5. Challenges",-1)),AD=dh(()=>s("div",{grid:"~ cols-3"},[s("div",{col:"span-2"},[s("p",null,"There are two sides to every coin, and Vue is no exception."),s("blockquote",null,[s("p",null,[m('"'),s("em",null,"Inside each of us, there is the seed of both good and evil. It’s a constant struggle as to which one will win. And one cannot exist without the other."),m('" - Eric Burdon')])])])],-1)),SD={__name:"21",setup(e){const t={layout:"section",srcSequence:"./pages/5-challenges.md"};return Y(te),(n,o)=>(k(),Q(Ks,Ie(Fe(t)),{default:ne(()=>[DD,AD]),_:1},16))}},FD=se(SD,[["__scopeId","data-v-95c30a12"],["__file","/@slidev/slides/21.md"]]),$D="/vue-js-why-so-much-love/assets/vue-3-meme-api-buttons-07e16ced.jpg",BD="/vue-js-why-so-much-love/assets/vue-3-meme-separate-repo-57d9907b.jpg",ID="/vue-js-why-so-much-love/assets/vue-3-meme-api-changes-934a7120.jpg",TD="/vue-js-why-so-much-love/assets/vue-3-meme-migrating-to-vue-3-dd94e4c9.jpg",OD=s("h1",null,"The elephant in the room 🐘",-1),MD=s("p",null,"Imagine you’re learning Vue for the first time:",-1),jD={position:"absolute",top:"10",right:"30",class:"w-60",rotate:"10",src:$D},PD=s("img",{position:"absolute",bottom:"10",left:"6",class:"h-40",rotate:"-20",src:BD},null,-1),LD=s("p",null,[s("img",{position:"absolute",bottom:"10",right:"90",rotate:"5",class:"h-60",src:ID})],-1),VD=s("p",null,[s("img",{position:"absolute",bottom:"4",right:"2",rotate:"10",class:"h-40",src:TD})],-1),RD=[PD,LD,VD],ND={__name:"22",setup(e){const t={srcSequence:"./pages/5-challenges.md"};return Y(te),(n,o)=>{const r=Rt("click");return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[OD,MD,s("ol",null,[Pe((k(),I("li",null,[m("you take a look at the docs")])),[[r]]),Pe((k(),I("li",null,[m("you start looking at code snippets")])),[[r]]),Pe((k(),I("li",null,[m("you find out there's a Vue 2 and a Vue 3")])),[[r]]),Pe((k(),I("li",null,[m("you quickly question every decision you've ever made")])),[[r]])]),s("p",null,[Pe(s("img",jD,null,512),[[r]])]),Pe((k(),I("div",null,RD)),[[r]])]),_:1},16)}}},HD=se(ND,[["__file","/@slidev/slides/22.md"]]),WD=s("h1",null,"This problem is not unique to Vue",-1),zD={grid:"~ cols-2 gap-2"},qD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#FFCB8B"}},"App"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"extends"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#FFCB8B"}},"React"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#C5E478"}},"Component"),s("span",{style:{color:"#D6DEEB"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#82AAFF"}},"constructor"),s("span",{style:{color:"#D9F5DD"}},"("),s("span",{style:{color:"#D7DBE0"}},"props"),s("span",{style:{color:"#D9F5DD"}},")"),s("span",{style:{color:"#D6DEEB"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#7FDBCA"}},"super"),s("span",{style:{color:"#D6DEEB"}},"(props)")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#7FDBCA"}},"this"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#BAEBE2"}},"state"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#D6DEEB"}}," { change: "),s("span",{style:{color:"#FF5874"}},"true"),s("span",{style:{color:"#D6DEEB"}}," }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"render"),s("span",{style:{color:"#D9F5DD"}},"()"),s("span",{style:{color:"#D6DEEB"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"return"),s("span",{style:{color:"#D6DEEB"}}," (")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"      "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"div"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"        "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"onClick"),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#D3423E"}},"{"),s("span",{style:{color:"#D9F5DD"}},"()"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#C792EA"}},"=>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"          this"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"setState"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#7FDBCA"}},"{ change: "),s("span",{style:{color:"#C792EA"}},"!"),s("span",{style:{color:"#7FDBCA"}},"this"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#FAF39F","font-style":"italic"}},"state"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#BAEBE2"}},"change"),s("span",{style:{color:"#7FDBCA"}}," }"),s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7FDBCA"}},"        "),s("span",{style:{color:"#D3423E"}},"}"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"          Click Here!")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"        "),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"        "),s("span",{style:{color:"#D3423E"}},"{"),s("span",{style:{color:"#7FDBCA"}},"this"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#FAF39F","font-style":"italic"}},"state"),s("span",{style:{color:"#C792EA","font-style":"italic"}},"."),s("span",{style:{color:"#BAEBE2"}},"change")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"          "),s("span",{style:{color:"#C792EA"}},"?"),s("span",{style:{color:"#D6DEEB"}}," ("),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"h1"),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}},"This"),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"h1"),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"          "),s("span",{style:{color:"#C792EA"}},":"),s("span",{style:{color:"#D6DEEB"}}," ("),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"h1"),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}},"Or that"),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"h1"),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB"}},")"),s("span",{style:{color:"#D3423E"}},"}")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"      "),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"div"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"    )")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"class"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#111111"}},"App"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"extends"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#111111"}},"React"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#4876D6"}},"Component"),s("span",{style:{color:"#403F53"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#4876D6"}},"constructor"),s("span",{style:{color:"#111111"}},"("),s("span",{style:{color:"#403F53"}},"props"),s("span",{style:{color:"#111111"}},")"),s("span",{style:{color:"#403F53"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#0C969B"}},"super"),s("span",{style:{color:"#403F53"}},"(props)")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#0C969B"}},"this"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#0C969B"}},"state"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#403F53"}}," { change: "),s("span",{style:{color:"#BC5454"}},"true"),s("span",{style:{color:"#403F53"}}," }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"render"),s("span",{style:{color:"#111111"}},"()"),s("span",{style:{color:"#403F53"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"return"),s("span",{style:{color:"#403F53"}}," (")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"      "),s("span",{style:{color:"#994CC3"}},"<div>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"        "),s("span",{style:{color:"#994CC3"}},"<button "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"onClick"),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#D3423E"}},"{"),s("span",{style:{color:"#111111"}},"()"),s("span",{style:{color:"#994CC3"}}," =>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"          "),s("span",{style:{color:"#0C969B"}},"this"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#4876D6","font-style":"italic"}},"setState"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#994CC3"}},"{ change: !"),s("span",{style:{color:"#0C969B"}},"this"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#111111","font-style":"italic"}},"state"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#0C969B"}},"change"),s("span",{style:{color:"#994CC3"}}," }"),s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"        "),s("span",{style:{color:"#D3423E"}},"}"),s("span",{style:{color:"#994CC3"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"          Click Here!")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"        "),s("span",{style:{color:"#994CC3"}},"</button>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"        "),s("span",{style:{color:"#D3423E"}},"{"),s("span",{style:{color:"#0C969B"}},"this"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#111111","font-style":"italic"}},"state"),s("span",{style:{color:"#994CC3","font-style":"italic"}},"."),s("span",{style:{color:"#0C969B"}},"change")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"          "),s("span",{style:{color:"#994CC3"}},"?"),s("span",{style:{color:"#403F53"}}," ("),s("span",{style:{color:"#994CC3"}},"<h1>"),s("span",{style:{color:"#403F53"}},"This"),s("span",{style:{color:"#994CC3"}},"</h1>"),s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"          "),s("span",{style:{color:"#994CC3"}},":"),s("span",{style:{color:"#403F53"}}," ("),s("span",{style:{color:"#994CC3"}},"<h1>"),s("span",{style:{color:"#403F53"}},"Or that"),s("span",{style:{color:"#994CC3"}},"</h1>"),s("span",{style:{color:"#403F53"}},")"),s("span",{style:{color:"#D3423E"}},"}")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"      "),s("span",{style:{color:"#994CC3"}},"</div>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"    )")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"}")])])])],-1),UD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"App"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#D9F5DD"}},"("),s("span",{style:{color:"#D7DBE0","font-style":"italic"}},"props"),s("span",{style:{color:"#D9F5DD"}},")"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"{")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA","font-style":"italic"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"["),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"change"),s("span",{style:{color:"#C792EA"}},","),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"setChange"),s("span",{style:{color:"#C792EA"}},"]"),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#C792EA","font-style":"italic"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"useState"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#FF5874","font-style":"italic"}},"true"),s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA","font-style":"italic"}},"  return "),s("span",{style:{color:"#D6DEEB"}},"(")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA","font-style":"italic"}},"    "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"div"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB","font-style":"italic"}},"      "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#C5E478","font-style":"italic"}},"onClick"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#C792EA"}},"="),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#D3423E"}},"{"),s("span",{style:{color:"#D9F5DD"}},"()"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#7FDBCA"}}," "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"setChange"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#C792EA"}},"!"),s("span",{style:{color:"#D6DEEB"}},"change)"),s("span",{style:{color:"#D3423E"}},"}"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"        Click Here!")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"      "),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"button"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB","font-style":"italic"}},"      "),s("span",{style:{color:"#D3423E"}},"{"),s("span",{style:{color:"#D6DEEB","font-style":"italic"}}," change")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB","font-style":"italic"}},"        "),s("span",{style:{color:"#C792EA"}},"?"),s("span",{style:{color:"#D6DEEB","font-style":"italic"}}," "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"h1"),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB","font-style":"italic"}},"This"),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"h1"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB","font-style":"italic"}},"        "),s("span",{style:{color:"#C792EA"}},":"),s("span",{style:{color:"#D6DEEB","font-style":"italic"}}," "),s("span",{style:{color:"#7FDBCA"}},"<"),s("span",{style:{color:"#CAECE6"}},"h1"),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D6DEEB","font-style":"italic"}},"Or that"),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"h1"),s("span",{style:{color:"#7FDBCA"}},">"),s("span",{style:{color:"#D3423E"}},"}")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB","font-style":"italic"}},"    "),s("span",{style:{color:"#7FDBCA"}},"</"),s("span",{style:{color:"#CAECE6"}},"div"),s("span",{style:{color:"#7FDBCA"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA","font-style":"italic"}},"    "),s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA","font-style":"italic"}},"  "),s("span",{style:{color:"#C792EA"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#994CC3"}},"const"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"App"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#111111"}},"("),s("span",{style:{color:"#403F53","font-style":"italic"}},"props"),s("span",{style:{color:"#111111"}},")"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"=>"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"{")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3","font-style":"italic"}},"  "),s("span",{style:{color:"#994CC3"}},"const"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"["),s("span",{style:{color:"#4876D6","font-style":"italic"}},"change"),s("span",{style:{color:"#994CC3"}},","),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"setChange"),s("span",{style:{color:"#994CC3"}},"]"),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"="),s("span",{style:{color:"#994CC3","font-style":"italic"}}," "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"useState"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#BC5454","font-style":"italic"}},"true"),s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3","font-style":"italic"}},"  return "),s("span",{style:{color:"#403F53"}},"(")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3","font-style":"italic"}},"    "),s("span",{style:{color:"#994CC3"}},"<div>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53","font-style":"italic"}},"      "),s("span",{style:{color:"#994CC3"}},"<button "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"onClick"),s("span",{style:{color:"#994CC3"}}," = "),s("span",{style:{color:"#D3423E"}},"{"),s("span",{style:{color:"#111111"}},"()"),s("span",{style:{color:"#994CC3"}}," => "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"setChange"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#994CC3"}},"!"),s("span",{style:{color:"#403F53"}},"change)"),s("span",{style:{color:"#D3423E"}},"}"),s("span",{style:{color:"#994CC3"}},">")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"        Click Here!")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"      "),s("span",{style:{color:"#994CC3"}},"</button>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53","font-style":"italic"}},"      "),s("span",{style:{color:"#D3423E"}},"{"),s("span",{style:{color:"#403F53","font-style":"italic"}}," change")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53","font-style":"italic"}},"        "),s("span",{style:{color:"#994CC3"}},"?"),s("span",{style:{color:"#403F53","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"<h1>"),s("span",{style:{color:"#403F53","font-style":"italic"}},"This"),s("span",{style:{color:"#994CC3"}},"</h1>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53","font-style":"italic"}},"        "),s("span",{style:{color:"#994CC3"}},":"),s("span",{style:{color:"#403F53","font-style":"italic"}}," "),s("span",{style:{color:"#994CC3"}},"<h1>"),s("span",{style:{color:"#403F53","font-style":"italic"}},"Or that"),s("span",{style:{color:"#994CC3"}},"</h1>"),s("span",{style:{color:"#D3423E"}},"}")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53","font-style":"italic"}},"    "),s("span",{style:{color:"#994CC3"}},"</div>")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3","font-style":"italic"}},"    "),s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3","font-style":"italic"}},"  "),s("span",{style:{color:"#994CC3"}},"}")])])])],-1),ZD={__name:"23",setup(e){const t={srcSequence:"./pages/5-challenges.md"};return Y(te),(n,o)=>{const r=xs;return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[WD,s("div",zD,[U(r,Xe({},{ranges:[""]}),{default:ne(()=>[qD]),_:1},16),U(r,Xe({},{ranges:[""]}),{default:ne(()=>[UD]),_:1},16)])]),_:1},16)}}},YD=se(ZD,[["__file","/@slidev/slides/23.md"]]),KD=s("h1",null,"Migrating to Vue 3 is inevitable",-1),GD=s("ul",null,[s("li",null,[m("Vue "),s("code",null,"2.7"),m(" is the final release of Vue 2, which will reach its Enf of Life on December 31"),s("sup",null,"st"),m(", 2023"),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")]),m(";")]),s("li",null,[m("Thankfully, there’s a migration guide and build "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn2",id:"fnref2"},"[2]")]),m(" which backports some of the features of Vue 3 to Vue 2;")]),s("li",null,[s("a",{href:"https://www.linkedin.com/in/jagoncalves/",target:"_blank",rel:"noopener"},"João Gonçalves"),m(" wrote a pretty awesome blog post about this topic "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn3",id:"fnref3"},"[3]")])])],-1),XD=s("br",null,null,-1),JD=s("br",null,null,-1),QD=s("br",null,null,-1),eA=s("br",null,null,-1),tA=s("br",null,null,-1),nA=s("br",null,null,-1),sA=s("hr",{class:"footnotes-sep"},null,-1),oA=s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://v2.vuejs.org/lts/",target:"_blank",rel:"noopener"},"Vue 2 LTS, EOL & Extended Support"),m(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])]),s("li",{id:"fn2",class:"footnote-item"},[s("p",null,[s("a",{href:"https://v3-migration.vuejs.org/migration-build.html#migration-build",target:"_blank",rel:"noopener"},"Vue 3 Migration Build"),m(),s("a",{href:"#fnref2",class:"footnote-backref"},"↩︎")])]),s("li",{id:"fn3",class:"footnote-item"},[s("p",null,[s("a",{href:"https://www.pixelmatters.com/blog/how-to-migrate-from-vue-2-to-vue-3",target:"_blank",rel:"noopener"},"How to migrate from Vue 2 to Vue 3"),m(),s("a",{href:"#fnref3",class:"footnote-backref"},"↩︎")])])])],-1),rA={__name:"24",setup(e){const t={srcSequence:"./pages/5-challenges.md"};return Y(te),(n,o)=>(k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[KD,GD,XD,JD,QD,eA,tA,nA,sA,oA]),_:1},16))}},lA=se(rA,[["__file","/@slidev/slides/24.md"]]),iA="/vue-js-why-so-much-love/assets/vue-3-meme-superiority-3f2cd4c8.jpg",aA=s("h1",null,"Summing it up",-1),cA=s("ul",null,[s("li",null,"Go with Vue 3 and don’t look back"),s("li",null,"If you’re using modern typescript I’d say composition API is the way to go"),s("li",null,"If you’re working on a small POC use options API")],-1),uA={position:"absolute",bottom:"12",right:"6",rotate:"10",class:"h-60",src:iA},pA={__name:"25",setup(e){const t={transition:"slide-up",srcSequence:"./pages/5-challenges.md"};return Y(te),(n,o)=>{const r=Rt("click");return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[aA,cA,s("p",null,[Pe(s("img",uA,null,512),[[r]])])]),_:1},16)}}},dA=se(pA,[["__file","/@slidev/slides/25.md"]]),fA="/vue-js-why-so-much-love/assets/survey-59295f9d.png";const Wa=e=>(qn("data-v-90effb36"),e=e(),Un(),e),hA=Wa(()=>s("h1",null,"6. A survey",-1)),mA=Wa(()=>s("div",{grid:"~ cols-3"},[s("div",{col:"span-2"},[s("p",null,"I’ve conducted a survey aimed at finding out what do Infraspeak developers think about vue. I wanted to learn:"),s("ol",null,[s("li",null,"How long they’ve been working with vue;"),s("li",null,"What do they LOVE about vue;"),s("li",null,"What do they HATE about vue;"),s("li",null,"What would they change about vue;"),s("li",null,"How does Vue compare with other frameworks;")])])],-1)),yA=Wa(()=>s("p",null,[s("img",{position:"absolute",bottom:"6",right:"64",rotate:"10",class:"w-50",src:fA,shadow:"xl"})],-1)),gA={__name:"26",setup(e){const t={layout:"section",srcSequence:"./pages/6-survey.md"};return Y(te),(n,o)=>(k(),Q(Ks,Ie(Fe(t)),{default:ne(()=>[hA,mA,yA]),_:1},16))}},vA=se(gA,[["__scopeId","data-v-90effb36"],["__file","/@slidev/slides/26.md"]]),_A=s("h1",null,"Seniority of respondents",-1),bA=s("iframe",{class:"mx-auto",width:"600",height:"371",seamless:"",frameborder:"0",scrolling:"no",src:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT3RPFemS8aIqaTmqsTEbafwi4zipdSNJs2ITZRXtm7UJGdFDQJzpGKIcgJwHQaDBO69lPGATM4ImY4/pubchart?oid=1624060856&format=interactive"},null,-1),wA={__name:"27",setup(e){const t={srcSequence:"./pages/6-survey.md"};return Y(te),(n,o)=>(k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[_A,bA]),_:1},16))}},CA=se(wA,[["__file","/@slidev/slides/27.md"]]),kA=s("h1",null,"What do they think about vue",-1),EA={grid:"~ cols-2 gap-2"},xA=s("p",{text:"center xl"},"Love 💚",-1),DA=s("ol",null,[s("li",null,"Simplicity"),s("li",null,"Easy to learn and teach"),s("li",null,"Awesome documentation"),s("li",null,"Awesome ecosystem and community"),s("li",null,"SFCs"),s("li",null,"Exciting features in the making")],-1),AA=[xA,DA],SA=s("p",{text:"center xl"},"Hate 🤬",-1),FA=s("ol",null,[s("li",null,"Composition API has divided the community"),s("li",null,"Paradigm shift with composition API bringing unnecessary features"),s("li",null,"Lack of TypeScript support for Vue 2"),s("li",null,'Too much abstraction ("Magic")'),s("li",null,[m("Vue 3 migration is a pain "),s("ol",null,[s("li",null,"Library migrations"),s("li",null,"Lack of a dedicated tool")])]),s("li",null,"Too much boilerplate code")],-1),$A=[SA,FA],BA={__name:"28",setup(e){const t={srcSequence:"./pages/6-survey.md"};return Y(te),(n,o)=>{const r=Rt("click");return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[kA,s("div",EA,[Pe((k(),I("div",null,AA)),[[r]]),Pe((k(),I("div",null,$A)),[[r]])])]),_:1},16)}}},IA=se(BA,[["__file","/@slidev/slides/28.md"]]),TA=s("h1",null,"What would they change about vue",-1),OA=s("ol",null,[s("li",null,"🔪 Kill the composition API"),s("li",null,"Two way data binding (too much abstraction)"),s("li",null,[m("Keep support for class-based components with TS Decorators "),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")])])],-1),MA={grid:"~ cols-2 gap-2"},jA=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"@"),s("span",{style:{color:"#D6DEEB"}},"Component")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA","font-style":"italic"}},"export"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"default"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#FFCB8B"}},"YourComponent"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"extends"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478"}},"Vue"),s("span",{style:{color:"#D6DEEB"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#82AAFF"}},"@"),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"Prop"),s("span",{style:{color:"#D6DEEB"}},"(Number)")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"readonly"),s("span",{style:{color:"#D6DEEB"}}," propA"),s("span",{style:{color:"#7FDBCA"}},":"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478"}},"number"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#7FDBCA"}},"|"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478"}},"undefined")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#82AAFF"}},"@"),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"Prop"),s("span",{style:{color:"#D6DEEB"}},"({ default: "),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#ECC48D"}},"default value"),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#D6DEEB"}}," })")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"readonly"),s("span",{style:{color:"#D6DEEB"}}," propB"),s("span",{style:{color:"#7FDBCA"}},"!:"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478"}},"string")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#82AAFF"}},"@"),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"Prop"),s("span",{style:{color:"#D6DEEB"}},"([String, Boolean])")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#C792EA","font-style":"italic"}},"readonly"),s("span",{style:{color:"#D6DEEB"}}," propC"),s("span",{style:{color:"#7FDBCA"}},":"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478"}},"string"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#7FDBCA"}},"|"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478"}},"boolean"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#7FDBCA"}},"|"),s("span",{style:{color:"#D6DEEB"}}," "),s("span",{style:{color:"#C5E478"}},"undefined")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#82AAFF"}},"@"),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"Emit"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#ECC48D"}},"my-event"),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"emitMyEvent"),s("span",{style:{color:"#D9F5DD"}},"()"),s("span",{style:{color:"#D6DEEB"}}," { "),s("span",{style:{color:"#637777"}},"/*"),s("span",{style:{color:"#637777","font-style":"italic"}}," ... "),s("span",{style:{color:"#637777"}},"*/"),s("span",{style:{color:"#D6DEEB"}}," }")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4876D6"}},"@"),s("span",{style:{color:"#403F53"}},"Component")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#994CC3","font-style":"italic"}},"export"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"default"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3"}},"class"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#111111"}},"YourComponent"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"extends"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6"}},"Vue"),s("span",{style:{color:"#403F53"}}," {")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#4876D6"}},"@"),s("span",{style:{color:"#4876D6","font-style":"italic"}},"Prop"),s("span",{style:{color:"#403F53"}},"(Number)")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"readonly"),s("span",{style:{color:"#403F53"}}," propA"),s("span",{style:{color:"#0C969B"}},":"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6"}},"number"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#0C969B"}},"|"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6"}},"undefined")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#4876D6"}},"@"),s("span",{style:{color:"#4876D6","font-style":"italic"}},"Prop"),s("span",{style:{color:"#403F53"}},"({ default: "),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#C96765"}},"default value"),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#403F53"}}," })")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"readonly"),s("span",{style:{color:"#403F53"}}," propB"),s("span",{style:{color:"#0C969B"}},"!:"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6"}},"string")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#4876D6"}},"@"),s("span",{style:{color:"#4876D6","font-style":"italic"}},"Prop"),s("span",{style:{color:"#403F53"}},"([String, Boolean])")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#994CC3","font-style":"italic"}},"readonly"),s("span",{style:{color:"#403F53"}}," propC"),s("span",{style:{color:"#0C969B"}},":"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6"}},"string"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#0C969B"}},"|"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6"}},"boolean"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#0C969B"}},"|"),s("span",{style:{color:"#403F53"}}," "),s("span",{style:{color:"#4876D6"}},"undefined")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#4876D6"}},"@"),s("span",{style:{color:"#4876D6","font-style":"italic"}},"Emit"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#C96765"}},"my-event"),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"emitMyEvent"),s("span",{style:{color:"#111111"}},"()"),s("span",{style:{color:"#403F53"}}," { "),s("span",{style:{color:"#989FB1"}},"/*"),s("span",{style:{color:"#989FB1","font-style":"italic"}}," ... "),s("span",{style:{color:"#989FB1"}},"*/"),s("span",{style:{color:"#403F53"}}," }")])])])],-1),PA=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Night Owl",style:{"background-color":"#011627"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#82AAFF"}},"@"),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"Ref"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#ECC48D"}},"aButton"),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  readonly button"),s("span",{style:{color:"#C792EA"}},"!"),s("span",{style:{color:"#D6DEEB"}},": HTMLButtonElement")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  get "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"myComputedProperty"),s("span",{style:{color:"#D6DEEB"}},"() { "),s("span",{style:{color:"#637777"}},"/*"),s("span",{style:{color:"#637777","font-style":"italic"}}," ... "),s("span",{style:{color:"#637777"}},"*/"),s("span",{style:{color:"#D6DEEB"}}," }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  ")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#82AAFF"}},"@"),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"Watch"),s("span",{style:{color:"#D6DEEB"}},"("),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#ECC48D"}},"child"),s("span",{style:{color:"#D9F5DD"}},"'"),s("span",{style:{color:"#D6DEEB"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"onChildChanged"),s("span",{style:{color:"#D6DEEB"}},"(val: string, oldVal: string) {}")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"  "),s("span",{style:{color:"#82AAFF","font-style":"italic"}},"myMethod"),s("span",{style:{color:"#D6DEEB"}},"(num: number): number { "),s("span",{style:{color:"#637777"}},"/*"),s("span",{style:{color:"#637777","font-style":"italic"}},"..."),s("span",{style:{color:"#637777"}},"*/"),s("span",{style:{color:"#D6DEEB"}}," }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D6DEEB"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Night Owl Light",style:{"background-color":"#FBFBFB"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#4876D6"}},"@"),s("span",{style:{color:"#4876D6","font-style":"italic"}},"Ref"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#C96765"}},"aButton"),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  readonly button"),s("span",{style:{color:"#994CC3"}},"!"),s("span",{style:{color:"#403F53"}},": HTMLButtonElement")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  get "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"myComputedProperty"),s("span",{style:{color:"#403F53"}},"() { "),s("span",{style:{color:"#989FB1"}},"/*"),s("span",{style:{color:"#989FB1","font-style":"italic"}}," ... "),s("span",{style:{color:"#989FB1"}},"*/"),s("span",{style:{color:"#403F53"}}," }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  ")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#4876D6"}},"@"),s("span",{style:{color:"#4876D6","font-style":"italic"}},"Watch"),s("span",{style:{color:"#403F53"}},"("),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#C96765"}},"child"),s("span",{style:{color:"#111111"}},"'"),s("span",{style:{color:"#403F53"}},")")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"onChildChanged"),s("span",{style:{color:"#403F53"}},"(val: string, oldVal: string) {}")]),m(`
`),s("span",{class:"line"}),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"  "),s("span",{style:{color:"#4876D6","font-style":"italic"}},"myMethod"),s("span",{style:{color:"#403F53"}},"(num: number): number { "),s("span",{style:{color:"#989FB1"}},"/*"),s("span",{style:{color:"#989FB1","font-style":"italic"}},"..."),s("span",{style:{color:"#989FB1"}},"*/"),s("span",{style:{color:"#403F53"}}," }")]),m(`
`),s("span",{class:"line"},[s("span",{style:{color:"#403F53"}},"}")])])])],-1),LA=s("hr",{class:"footnotes-sep"},null,-1),VA=s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://class-component.vuejs.org/",target:"_blank",rel:"noopener"},"https://class-component.vuejs.org/"),m(" & "),s("a",{href:"https://github.com/kaorun343/vue-property-decorator",target:"_blank",rel:"noopener"},"https://github.com/kaorun343/vue-property-decorator"),m(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])])])],-1),RA={__name:"29",setup(e){const t={srcSequence:"./pages/6-survey.md"};return Y(te),(n,o)=>{const r=xs,l=Rt("click");return k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[TA,OA,Pe((k(),I("div",MA,[s("div",null,[U(r,Xe({},{ranges:[""]}),{default:ne(()=>[jA]),_:1},16)]),s("div",null,[U(r,Xe({},{ranges:[""]}),{default:ne(()=>[PA]),_:1},16)])])),[[l]]),LA,VA]),_:1},16)}}},NA=se(RA,[["__file","/@slidev/slides/29.md"]]),HA=s("h1",null,"How does it compare with other frameworks",-1),WA=s("ol",null,[s("li",null,"Simpler and more enjoyable to work with"),s("li",null,"Easier to test and less file clutter"),s("li",null,"Shorter learning curve"),s("li",null,"Vue is a good middle ground between React’s speed and Angular’s simplicity")],-1),zA={__name:"30",setup(e){const t={transition:"slide-up",srcSequence:"./pages/6-survey.md"};return Y(te),(n,o)=>(k(),Q(qe,Ie(Fe(t)),{default:ne(()=>[HA,WA]),_:1},16))}},qA=se(zA,[["__file","/@slidev/slides/30.md"]]);const UA=e=>(qn("data-v-cfb7fa05"),e=e(),Un(),e),ZA=UA(()=>s("h1",null,"7. Q&A",-1)),YA={__name:"31",setup(e){const t={layout:"section",srcSequence:"./pages/7-q-and-a.md"};return Y(te),(n,o)=>(k(),Q(Ks,Ie(Fe(t)),{default:ne(()=>[ZA]),_:1},16))}},KA=se(YA,[["__scopeId","data-v-cfb7fa05"],["__file","/@slidev/slides/31.md"]]),GA={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},XA=s("path",{fill:"currentColor",d:"M5.004 7h-.029a2.235 2.235 0 1 1 .057-4.457A2.235 2.235 0 1 1 5.004 7Zm-1.986 3h4v12h-4zm14.5 0a4.473 4.473 0 0 0-3.5 1.703V10h-4v12h4v-5.5a2 2 0 0 1 4 0V22h4v-7.5a4.5 4.5 0 0 0-4.5-4.5Z"},null,-1),JA=[XA];function QA(e,t){return k(),I("svg",GA,JA)}const e5={name:"uim-linkedin-alt",render:QA},t5={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},n5=s("path",{fill:"currentColor",d:"M18 22a1 1 0 0 1-.5-.134L12 18.694l-5.5 3.172A1 1 0 0 1 5 21V5a3.003 3.003 0 0 1 3-3h8a3.003 3.003 0 0 1 3 3v16a1 1 0 0 1-1 1Z"},null,-1),s5=[n5];function o5(e,t){return k(),I("svg",t5,s5)}const r5={name:"uim-bookmark",render:o5},l5={class:"slidev-icon",viewBox:"0 0 256 250",width:"1.2em",height:"1.2em"},i5=s("path",{fill:"#161614",d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"},null,-1),a5=[i5];function c5(e,t){return k(),I("svg",l5,a5)}const u5={name:"logos-github-icon",render:c5},p5={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},d5=s("path",{fill:"currentColor",d:"M12 18a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 12 18Z",opacity:".5"},null,-1),f5=s("path",{fill:"currentColor",d:"M14.64 16.772a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 7 21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1a4.988 4.988 0 0 0-2.36-4.228Z"},null,-1),h5=s("path",{fill:"currentColor",d:"M21 12a.996.996 0 0 1-.664-.252L12 4.338l-8.336 7.41a1 1 0 0 1-1.328-1.496l9-8a.999.999 0 0 1 1.328 0l9 8A1 1 0 0 1 21 12Z",opacity:".5"},null,-1),m5=s("path",{fill:"currentColor",d:"m12 4.338l-8 7.111V21a1 1 0 0 0 1 1h3a1 1 0 0 1-1-1a4.988 4.988 0 0 1 2.36-4.228A3.469 3.469 0 0 1 8.5 14.5a3.5 3.5 0 0 1 7 0a3.469 3.469 0 0 1-.86 2.272A4.988 4.988 0 0 1 17 21a1 1 0 0 1-1 1h3a1 1 0 0 0 1-1v-9.551Z",opacity:".25"},null,-1),y5=[d5,f5,h5,m5];function g5(e,t){return k(),I("svg",p5,y5)}const v5={name:"uim-house-user",render:g5},_5={class:"slidev-icon",viewBox:"0 0 256 209",width:"1.2em",height:"1.2em"},b5=s("path",{fill:"#55acee",d:"M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"},null,-1),w5=[b5];function C5(e,t){return k(),I("svg",_5,w5)}const k5={name:"logos-twitter",render:C5},E5="/vue-js-why-so-much-love/assets/bg-outro-3dc489d4.svg";const x5={class:"slidev-layout outro"},D5={class:"absolute inset-0 -z-1"},A5={key:0,src:E5,alt:"",class:"opacity-80"},S5={key:0,class:"text-center !text-5xl"},F5={"data-x":"links",class:"text-white absolute bottom-8 left-4 flex flex-col gap-2"},$5={key:0,"data-x":"twitter"},B5=["href"],I5={key:1,"data-x":"site"},T5=["href"],O5={key:2,"data-x":"repo"},M5=["href"],j5={key:3,"data-x":"slides"},P5=["href"],L5={key:4,"data-x":"linkedin"},V5=["href"],R5={key:5,"data-x":"polywork",target:"_blank",ref:"noopener noreferrer"},N5=["href"],H5={__name:"outro",props:{title:String,showTitle:Boolean,repository:String,twitter:String,linkedin:String,polywork:String,website:String,hostedSlides:String},setup(e){const t=e,n=Y(te),o=/^https?:\/\//,r=i=>o.test(i)?i:`https://${i}`,l=$(()=>{var i,a,c,u;return(i=t.twitter)!=null&&i.startsWith("@")?`https://www.twitter.com/${t.twitter.slice(1)}`:(a=t.twitter)!=null&&a.startsWith("http")||(c=t.twitter)!=null&&c.startsWith("www")||(u=t.twitter)!=null&&u.startsWith("twitter.com")?t.twitter:`https://www.twitter.com/${t.twitter}`});return(i,a)=>{const c=k5,u=v5,p=u5,d=r5,f=e5;return k(),I("div",x5,[s("div",D5,[U(tr,{appear:"",name:"outro"},{default:ne(()=>[E(n).nav.currentLayout==="outro"?(k(),I("img",A5)):ce("v-if",!0)]),_:1})]),i.$props.showTitle!==!1?(k(),I("h1",S5,et(E(n).nav.currentRoute.meta.title),1)):ce("v-if",!0),s("div",null,[Lt(i.$slots,"default")]),s("div",F5,[i.$props.twitter?(k(),I("div",$5,[U(c,{class:"inline-block mr-3"}),s("a",{href:E(l),target:"_blank",ref:"noopener noreferrer"},et(i.$props.twitter),9,B5)])):ce("v-if",!0),i.$props.website?(k(),I("div",I5,[U(u,{class:"inline-block mr-3"}),s("a",{href:r(i.$props.website),target:"_blank",ref:"noopener noreferrer"},et(i.$props.website),9,T5)])):ce("v-if",!0),i.$props.repository?(k(),I("div",O5,[U(p,{class:"inline-block mr-3"}),s("a",{href:r(i.$props.repository),target:"_blank",ref:"noopener noreferrer"},et(i.$props.repository),9,M5)])):ce("v-if",!0),i.$props.hostedSlides?(k(),I("div",j5,[U(d,{class:"inline-block mr-3"}),s("a",{href:r(i.$props.hostedSlides),target:"_blank",ref:"noopener noreferrer"}," Slides: "+et(i.$props.hostedSlides),9,P5)])):ce("v-if",!0),i.$props.linkedin?(k(),I("div",L5,[U(f,{class:"inline-block mr-3 text-blue-600"}),s("a",{href:r(i.$props.linkedin),target:"_blank",ref:"noopener noreferrer"},et(i.$props.linkedin),9,V5)])):ce("v-if",!0),i.$props.polywork?(k(),I("div",R5,[m(" Polywork "),s("a",{href:r(i.$props.polywork)},et(i.$props.polywork),9,N5)],512)):ce("v-if",!0)])])}}},W5=se(H5,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/slidev-theme-vuetiful/layouts/outro.vue"]]),z5=s("h1",null,"Thank you :)",-1),q5={__name:"32",setup(e){const t={layout:"outro",twitter:"@marantesss",instagram:"@marantesss",website:"https://goncalomarantes.com",repository:"https://github.com/Marantesss/vue-js-why-so-much-love",hostedSlides:"https://goncalomarantes.com/vue-js-why-so-much-love"};return Y(te),(n,o)=>(k(),Q(W5,Ie(Fe(t)),{default:ne(()=>[z5]),_:1},16))}},U5=se(q5,[["__file","/@slidev/slides/32.md"]]),Z5=[{path:"1",name:"page-1",component:NE,meta:{theme:"vuetiful",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",css:"unocss",title:"Vue.js - Why so much love?",slide:{raw:`---
theme: vuetiful
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
css: unocss
title: Vue.js - Why so much love?
---

# Vue.js - Why so much love?

Gonçalo Marantes

<div class="pt-12 font-thin">
  Portugal.Vue - April 5<sup>th</sup>, 2023
</div>

<!--
Greet and blah blah|
-->
`,title:"Vue.js - Why so much love?",content:`# Vue.js - Why so much love?

Gonçalo Marantes

<div class="pt-12 font-thin">
  Portugal.Vue - April 5<sup>th</sup>, 2023
</div>`,frontmatter:{theme:"vuetiful",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",css:"unocss",title:"Vue.js - Why so much love?"},note:"Greet and blah blah|",index:0,start:0,end:30,noteHTML:`<p>Greet and blah blah|</p>
`,filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:KE,meta:{transition:"fade-out",slide:{raw:`---
transition: fade-out
---

# What can you expect from this talk?

We're going to talk about Vue (well duh...) by discussing the following topics:

- 🙋‍♂️ **Who am I?** - And why should you even listen to me in the first place
- 🧑‍💻 **My experience** - spoiler alert: it has been great so far :)
- 🗝️ **Key concepts** - Nothing too fancy, just an overview and framework comparison
- 🤑 **Benefits** - The actual love part
- 😪 **Challenges** - What's love without a little hate?
- 🗂️ **A survey** - What do Infraspeak developers think?
- ❓ **Q/A** - Make me look smart

<!--
You can have \`style\` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles

Here is another comment.
-->
`,title:"What can you expect from this talk?",level:1,content:`# What can you expect from this talk?

We're going to talk about Vue (well duh...) by discussing the following topics:

- 🙋‍♂️ **Who am I?** - And why should you even listen to me in the first place
- 🧑‍💻 **My experience** - spoiler alert: it has been great so far :)
- 🗝️ **Key concepts** - Nothing too fancy, just an overview and framework comparison
- 🤑 **Benefits** - The actual love part
- 😪 **Challenges** - What's love without a little hate?
- 🗂️ **A survey** - What do Infraspeak developers think?
- ❓ **Q/A** - Make me look smart`,frontmatter:{transition:"fade-out"},note:`You can have \`style\` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles

Here is another comment.`,index:1,start:30,end:53,noteHTML:`<p>You can have <code>style</code> tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles</p>
<p>Here is another comment.</p>
`,filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:o4,meta:{title:"1. Who am I?",srcSequence:"./pages/1-who-am-i.md",slide:{raw:null,title:"1. Who am I?",level:1,content:`# 1. Who am I?

<div grid="~ cols-3 gap-2 gap-y-2 wrap">
<div class="col-span-2">

- 📛 Gonçalo Marantes
- 🏙️ Porto, Gondomar
- 🎓 M.Sc. in Informatics and Computing Engineering from FEUP
- 💙 Working as a Frontend Developer @ Infraspeak for ~ 7 month
- 💚 Frequent user of Vue and its ecosystem (since 2018)
- 🏋️‍♂️ Casually lifting heavy weights

</div>
<div>

<img border="rounded-xl" src="/img/eu-a-comer.jpg" />
</div>

<div class="col-span-3 justify-self-center">
<img v-click border="rounded-xl" class="h-52" src="https://media.tenor.com/OHqk2q_b44oAAAAC/shrek-donkey.gif" />
</div>

</div>

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{title:"1. Who am I?",srcSequence:"./pages/1-who-am-i.md"},index:2,start:0,end:36,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/1-who-am-i.md",raw:`# 1. Who am I?

<div grid="~ cols-3 gap-2 gap-y-2 wrap">
<div class="col-span-2">

- 📛 Gonçalo Marantes
- 🏙️ Porto, Gondomar
- 🎓 M.Sc. in Informatics and Computing Engineering from FEUP
- 💙 Working as a Frontend Developer @ Infraspeak for ~ 7 month
- 💚 Frequent user of Vue and its ecosystem (since 2018)
- 🏋️‍♂️ Casually lifting heavy weights

</div>
<div>

<img border="rounded-xl" src="/img/eu-a-comer.jpg" />
</div>

<div class="col-span-3 justify-self-center">
<img v-click border="rounded-xl" class="h-52" src="https://media.tenor.com/OHqk2q_b44oAAAAC/shrek-donkey.gif" />
</div>

</div>

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>
`,title:"1. Who am I?",level:1,content:`# 1. Who am I?

<div grid="~ cols-3 gap-2 gap-y-2 wrap">
<div class="col-span-2">

- 📛 Gonçalo Marantes
- 🏙️ Porto, Gondomar
- 🎓 M.Sc. in Informatics and Computing Engineering from FEUP
- 💙 Working as a Frontend Developer @ Infraspeak for ~ 7 month
- 💚 Frequent user of Vue and its ecosystem (since 2018)
- 🏋️‍♂️ Casually lifting heavy weights

</div>
<div>

<img border="rounded-xl" src="/img/eu-a-comer.jpg" />
</div>

<div class="col-span-3 justify-self-center">
<img v-click border="rounded-xl" class="h-52" src="https://media.tenor.com/OHqk2q_b44oAAAAC/shrek-donkey.gif" />
</div>

</div>

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{title:"1. Who am I?"},index:0,start:0,end:36},inline:{raw:`---
src: ./pages/1-who-am-i.md
---
`,content:"",frontmatter:{},index:2,start:53,end:57},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/1-who-am-i.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:g4,meta:{layout:"section",title:"2. My experience",srcSequence:"./pages/2-my-experience.md",slide:{raw:null,title:"2. My experience",level:1,content:`# 2. My experience

Pretty awesome 😎

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"2. My experience",srcSequence:"./pages/2-my-experience.md"},index:3,start:0,end:20,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/2-my-experience.md",raw:`---
layout: section
---

# 2. My experience

Pretty awesome 😎

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>
`,title:"2. My experience",level:1,content:`# 2. My experience

Pretty awesome 😎

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"2. My experience"},index:0,start:0,end:20},inline:{raw:`---
src: ./pages/2-my-experience.md
---
`,content:"",frontmatter:{},index:3,start:57,end:61},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/2-my-experience.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:B4,meta:{srcSequence:"./pages/2-my-experience.md",slide:{raw:`---
# Love at first sight 💕

<a href="https://ieee.fe.up.pt/" target="_blank">
    <img border="rounded" src="/img/ieee-website.png" class="ieee"/>
</a>

<arrow v-click="1" x1="400" y1="420" x2="580" y2="290" color="red" />

<img
    position="absolute"
    class="top-40 left-30 w-64"
    rotate="10"
    v-click="2"
    border="rounded"
    src="/img/tinder-match.jpg" />

<style>
.ieee {
    position: absolute;
    width: 54rem;
    clip: rect(0rem, 54rem, 26rem, 0rem);
}

h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>
    
`,title:"Love at first sight 💕",level:1,content:`---
# Love at first sight 💕

<a href="https://ieee.fe.up.pt/" target="_blank">
    <img border="rounded" src="/img/ieee-website.png" class="ieee"/>
</a>

<arrow v-click="1" x1="400" y1="420" x2="580" y2="290" color="red" />

<img
    position="absolute"
    class="top-40 left-30 w-64"
    rotate="10"
    v-click="2"
    border="rounded"
    src="/img/tinder-match.jpg" />

<style>
.ieee {
    position: absolute;
    width: 54rem;
    clip: rect(0rem, 54rem, 26rem, 0rem);
}

h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{srcSequence:"./pages/2-my-experience.md"},index:4,start:20,end:56,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/2-my-experience.md",raw:`---
# Love at first sight 💕

<a href="https://ieee.fe.up.pt/" target="_blank">
    <img border="rounded" src="/img/ieee-website.png" class="ieee"/>
</a>

<arrow v-click="1" x1="400" y1="420" x2="580" y2="290" color="red" />

<img
    position="absolute"
    class="top-40 left-30 w-64"
    rotate="10"
    v-click="2"
    border="rounded"
    src="/img/tinder-match.jpg" />

<style>
.ieee {
    position: absolute;
    width: 54rem;
    clip: rect(0rem, 54rem, 26rem, 0rem);
}

h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>
    
`,title:"Love at first sight 💕",level:1,content:`---
# Love at first sight 💕

<a href="https://ieee.fe.up.pt/" target="_blank">
    <img border="rounded" src="/img/ieee-website.png" class="ieee"/>
</a>

<arrow v-click="1" x1="400" y1="420" x2="580" y2="290" color="red" />

<img
    position="absolute"
    class="top-40 left-30 w-64"
    rotate="10"
    v-click="2"
    border="rounded"
    src="/img/tinder-match.jpg" />

<style>
.ieee {
    position: absolute;
    width: 54rem;
    clip: rect(0rem, 54rem, 26rem, 0rem);
}

h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{},index:1,start:20,end:56},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/2-my-experience.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:N4,meta:{layout:"section",title:"3. Key concepts",srcSequence:"./pages/3-key-concepts.md",slide:{raw:null,title:"3. Key concepts",level:1,content:`# 3. Key concepts

<div grid="~ cols-3">

<div col="span-2">

> Vue (pronounced */vjuː/*, like *view*) is a **JavaScript framework** for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a **declarative** and **component-based** programming model that helps you efficiently develop user interfaces, be they simple or complex. [^1]

<ul>
    <li v-click="1">JavaScript</li>
    <li v-click="2">Declarative</li>
    <li v-click="3">Component-based</li>
    <li v-click="4">Reactivity</li>
</ul>

<p v-click="5">But... what does this all mean? 🤔 (Don't worry, we'll get there)</p>

</div>
</div>

<br />
<br />

[^1]: https://vuejs.org/guide/introduction.html#what-is-vue

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"3. Key concepts",srcSequence:"./pages/3-key-concepts.md"},index:5,start:0,end:41,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",raw:`---
layout: section
---

# 3. Key concepts

<div grid="~ cols-3">

<div col="span-2">

> Vue (pronounced */vjuː/*, like *view*) is a **JavaScript framework** for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a **declarative** and **component-based** programming model that helps you efficiently develop user interfaces, be they simple or complex. [^1]

<ul>
    <li v-click="1">JavaScript</li>
    <li v-click="2">Declarative</li>
    <li v-click="3">Component-based</li>
    <li v-click="4">Reactivity</li>
</ul>

<p v-click="5">But... what does this all mean? 🤔 (Don't worry, we'll get there)</p>

</div>
</div>

<br />
<br />

[^1]: https://vuejs.org/guide/introduction.html#what-is-vue

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>
`,title:"3. Key concepts",level:1,content:`# 3. Key concepts

<div grid="~ cols-3">

<div col="span-2">

> Vue (pronounced */vjuː/*, like *view*) is a **JavaScript framework** for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a **declarative** and **component-based** programming model that helps you efficiently develop user interfaces, be they simple or complex. [^1]

<ul>
    <li v-click="1">JavaScript</li>
    <li v-click="2">Declarative</li>
    <li v-click="3">Component-based</li>
    <li v-click="4">Reactivity</li>
</ul>

<p v-click="5">But... what does this all mean? 🤔 (Don't worry, we'll get there)</p>

</div>
</div>

<br />
<br />

[^1]: https://vuejs.org/guide/introduction.html#what-is-vue

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"3. Key concepts"},index:0,start:0,end:41},inline:{raw:`---
src: ./pages/3-key-concepts.md
---
`,content:"",frontmatter:{},index:4,start:61,end:65},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:G4,meta:{srcSequence:"./pages/3-key-concepts.md",slide:{raw:`
# Vue Timeline

Vue is almost 10 years old since its initial release! 🎂

<img src="/img/vue-timeline.png" />

<img
    v-click
    position="absolute"
    class="top-30 left-30 w-98"
    rotate="10"
    border="rounded"
    src="/img/evan-creating-vue.jpg" />

**Fun fact:** its releases are named after animes! 🇯🇵
`,title:"Vue Timeline",level:1,content:`# Vue Timeline

Vue is almost 10 years old since its initial release! 🎂

<img src="/img/vue-timeline.png" />

<img
    v-click
    position="absolute"
    class="top-30 left-30 w-98"
    rotate="10"
    border="rounded"
    src="/img/evan-creating-vue.jpg" />

**Fun fact:** its releases are named after animes! 🇯🇵`,frontmatter:{srcSequence:"./pages/3-key-concepts.md"},index:6,start:42,end:59,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",raw:`
# Vue Timeline

Vue is almost 10 years old since its initial release! 🎂

<img src="/img/vue-timeline.png" />

<img
    v-click
    position="absolute"
    class="top-30 left-30 w-98"
    rotate="10"
    border="rounded"
    src="/img/evan-creating-vue.jpg" />

**Fun fact:** its releases are named after animes! 🇯🇵
`,title:"Vue Timeline",level:1,content:`# Vue Timeline

Vue is almost 10 years old since its initial release! 🎂

<img src="/img/vue-timeline.png" />

<img
    v-click
    position="absolute"
    class="top-30 left-30 w-98"
    rotate="10"
    border="rounded"
    src="/img/evan-creating-vue.jpg" />

**Fun fact:** its releases are named after animes! 🇯🇵`,frontmatter:{},index:1,start:42,end:59},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:xx,meta:{srcSequence:"./pages/3-key-concepts.md",slide:{raw:`
# Declarative Syntax

HTML-based template syntax to declaratively bind rendered DOM

<div grid="~ cols-2 gap-4">
<div v-click>

Text interpolation with "Mustache"[^1] syntax

\`\`\`vue
<span>Message: {{ msg }}</span>
\`\`\`

Attribute binding

\`\`\`vue
<button
    :disabled="isButtonDisabled"
    :class="isButtonDisabled
        ? 'button--disabled'
        : 'button'"
>Button</button>
\`\`\`

</div>
<div v-click>

Using directives[^2] for:

1. Conditional rendering

\`\`\`vue
<span v-if="isVisible">Welcome to Portugal.vue</span>
\`\`\`

2. List rendering

\`\`\`vue
<li v-for="item in items">
  {{ item.message }}
</li>
\`\`\`

3. Much more (take a look at the docs 📑)


</div>
</div>

[^1]: http://mustache.github.io/
[^2]: https://vuejs.org/api/built-in-directives.html
`,title:"Declarative Syntax",level:1,content:`# Declarative Syntax

HTML-based template syntax to declaratively bind rendered DOM

<div grid="~ cols-2 gap-4">
<div v-click>

Text interpolation with "Mustache"[^1] syntax

\`\`\`vue
<span>Message: {{ msg }}</span>
\`\`\`

Attribute binding

\`\`\`vue
<button
    :disabled="isButtonDisabled"
    :class="isButtonDisabled
        ? 'button--disabled'
        : 'button'"
>Button</button>
\`\`\`

</div>
<div v-click>

Using directives[^2] for:

1. Conditional rendering

\`\`\`vue
<span v-if="isVisible">Welcome to Portugal.vue</span>
\`\`\`

2. List rendering

\`\`\`vue
<li v-for="item in items">
  {{ item.message }}
</li>
\`\`\`

3. Much more (take a look at the docs 📑)


</div>
</div>

[^1]: http://mustache.github.io/
[^2]: https://vuejs.org/api/built-in-directives.html`,frontmatter:{srcSequence:"./pages/3-key-concepts.md"},index:7,start:60,end:113,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",raw:`
# Declarative Syntax

HTML-based template syntax to declaratively bind rendered DOM

<div grid="~ cols-2 gap-4">
<div v-click>

Text interpolation with "Mustache"[^1] syntax

\`\`\`vue
<span>Message: {{ msg }}</span>
\`\`\`

Attribute binding

\`\`\`vue
<button
    :disabled="isButtonDisabled"
    :class="isButtonDisabled
        ? 'button--disabled'
        : 'button'"
>Button</button>
\`\`\`

</div>
<div v-click>

Using directives[^2] for:

1. Conditional rendering

\`\`\`vue
<span v-if="isVisible">Welcome to Portugal.vue</span>
\`\`\`

2. List rendering

\`\`\`vue
<li v-for="item in items">
  {{ item.message }}
</li>
\`\`\`

3. Much more (take a look at the docs 📑)


</div>
</div>

[^1]: http://mustache.github.io/
[^2]: https://vuejs.org/api/built-in-directives.html
`,title:"Declarative Syntax",level:1,content:`# Declarative Syntax

HTML-based template syntax to declaratively bind rendered DOM

<div grid="~ cols-2 gap-4">
<div v-click>

Text interpolation with "Mustache"[^1] syntax

\`\`\`vue
<span>Message: {{ msg }}</span>
\`\`\`

Attribute binding

\`\`\`vue
<button
    :disabled="isButtonDisabled"
    :class="isButtonDisabled
        ? 'button--disabled'
        : 'button'"
>Button</button>
\`\`\`

</div>
<div v-click>

Using directives[^2] for:

1. Conditional rendering

\`\`\`vue
<span v-if="isVisible">Welcome to Portugal.vue</span>
\`\`\`

2. List rendering

\`\`\`vue
<li v-for="item in items">
  {{ item.message }}
</li>
\`\`\`

3. Much more (take a look at the docs 📑)


</div>
</div>

[^1]: http://mustache.github.io/
[^2]: https://vuejs.org/api/built-in-directives.html`,frontmatter:{},index:2,start:60,end:113},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Px,meta:{srcSequence:"./pages/3-key-concepts.md",slide:{raw:`
# Let's take a look at a quick example

Anyway, let's build a counter app:

<div grid="~ cols-2 gap-10">
<div>

\`\`\`vue {all|4}
<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
<\/script>

\`\`\`

\`\`\`vue {all|7}
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            counter: 0
        }
    }
})
<\/script>

\`\`\`
</div>

<div>


\`\`\`vue {all|4|3,5}
<template>
  <div>
    <button @click="() => counter -= 1"> - </button>
    {{ counter }}
    <button @click="() => counter += 1"> + </button>
  </div>
</template>
\`\`\`

<Counter />

</div>
</div>
`,title:"Let's take a look at a quick example",level:1,content:`# Let's take a look at a quick example

Anyway, let's build a counter app:

<div grid="~ cols-2 gap-10">
<div>

\`\`\`vue {all|4}
<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
<\/script>

\`\`\`

\`\`\`vue {all|7}
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            counter: 0
        }
    }
})
<\/script>

\`\`\`
</div>

<div>


\`\`\`vue {all|4|3,5}
<template>
  <div>
    <button @click="() => counter -= 1"> - </button>
    {{ counter }}
    <button @click="() => counter += 1"> + </button>
  </div>
</template>
\`\`\`

<Counter />

</div>
</div>`,frontmatter:{srcSequence:"./pages/3-key-concepts.md"},index:8,start:114,end:165,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",raw:`
# Let's take a look at a quick example

Anyway, let's build a counter app:

<div grid="~ cols-2 gap-10">
<div>

\`\`\`vue {all|4}
<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
<\/script>

\`\`\`

\`\`\`vue {all|7}
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            counter: 0
        }
    }
})
<\/script>

\`\`\`
</div>

<div>


\`\`\`vue {all|4|3,5}
<template>
  <div>
    <button @click="() => counter -= 1"> - </button>
    {{ counter }}
    <button @click="() => counter += 1"> + </button>
  </div>
</template>
\`\`\`

<Counter />

</div>
</div>
`,title:"Let's take a look at a quick example",level:1,content:`# Let's take a look at a quick example

Anyway, let's build a counter app:

<div grid="~ cols-2 gap-10">
<div>

\`\`\`vue {all|4}
<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
<\/script>

\`\`\`

\`\`\`vue {all|7}
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            counter: 0
        }
    }
})
<\/script>

\`\`\`
</div>

<div>


\`\`\`vue {all|4|3,5}
<template>
  <div>
    <button @click="() => counter -= 1"> - </button>
    {{ counter }}
    <button @click="() => counter += 1"> + </button>
  </div>
</template>
\`\`\`

<Counter />

</div>
</div>`,frontmatter:{},index:3,start:114,end:165},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:qx,meta:{srcSequence:"./pages/3-key-concepts.md",slide:{raw:`
# Building the same app using an imperative syntax

<div grid="~ cols-5 gap-10">

<div class="col-span-3">

\`\`\`js {all|6,10}
const increaseButton = document.getElementById("increase")
const decreaseButton = document.getElementById("decrease")
const counter = document.getElementById("counter")

increaseButton.addEventListener("click", () => 
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
)
 
decreaseButton.addEventListener("click", () =>
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
)
\`\`\`
</div>

<div class="col-span-2">

\`\`\`html
<div>
    <button id="increase"> - </button>
    <span id="counter"> 0 </span>
    <button id="decrease"> + </button>
</div>

<script src="app.js"><\/script>   
\`\`\`
</div>

</div>
`,title:"Building the same app using an imperative syntax",level:1,content:`# Building the same app using an imperative syntax

<div grid="~ cols-5 gap-10">

<div class="col-span-3">

\`\`\`js {all|6,10}
const increaseButton = document.getElementById("increase")
const decreaseButton = document.getElementById("decrease")
const counter = document.getElementById("counter")

increaseButton.addEventListener("click", () => 
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
)
 
decreaseButton.addEventListener("click", () =>
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
)
\`\`\`
</div>

<div class="col-span-2">

\`\`\`html
<div>
    <button id="increase"> - </button>
    <span id="counter"> 0 </span>
    <button id="decrease"> + </button>
</div>

<script src="app.js"><\/script>   
\`\`\`
</div>

</div>`,frontmatter:{srcSequence:"./pages/3-key-concepts.md"},index:9,start:166,end:203,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",raw:`
# Building the same app using an imperative syntax

<div grid="~ cols-5 gap-10">

<div class="col-span-3">

\`\`\`js {all|6,10}
const increaseButton = document.getElementById("increase")
const decreaseButton = document.getElementById("decrease")
const counter = document.getElementById("counter")

increaseButton.addEventListener("click", () => 
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
)
 
decreaseButton.addEventListener("click", () =>
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
)
\`\`\`
</div>

<div class="col-span-2">

\`\`\`html
<div>
    <button id="increase"> - </button>
    <span id="counter"> 0 </span>
    <button id="decrease"> + </button>
</div>

<script src="app.js"><\/script>   
\`\`\`
</div>

</div>
`,title:"Building the same app using an imperative syntax",level:1,content:`# Building the same app using an imperative syntax

<div grid="~ cols-5 gap-10">

<div class="col-span-3">

\`\`\`js {all|6,10}
const increaseButton = document.getElementById("increase")
const decreaseButton = document.getElementById("decrease")
const counter = document.getElementById("counter")

increaseButton.addEventListener("click", () => 
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
)
 
decreaseButton.addEventListener("click", () =>
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
)
\`\`\`
</div>

<div class="col-span-2">

\`\`\`html
<div>
    <button id="increase"> - </button>
    <span id="counter"> 0 </span>
    <button id="decrease"> + </button>
</div>

<script src="app.js"><\/script>   
\`\`\`
</div>

</div>`,frontmatter:{},index:4,start:166,end:203},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:s6,meta:{srcSequence:"./pages/3-key-concepts.md",slide:{raw:`
# Reactivity

> Reactivity is a programming paradigm that allows us to adjust to changes in a **declarative** manner. [^1]

<br />

<div grid="~ cols-6 gap-10">
<div class="col-span-2">
<img
    src="https://www.benlcollins.com/ebook_35_tips_gifs/gifs/conditional_formatting.gif"
/>
</div>
<div class="col-span-4">

\`\`\`ts
let A0 = 1
let A1 = 2
let A2 = A0 + A1

console.log(A2) // 3

A0 = 2
console.log(A2) // Still 3 not 4 😢
\`\`\`

How reactivity works in Vue is an advanced topic, but you still figure it out [^2]

</div>
</div>


[^1]: https://vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity
[^2]: https://vuejs.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue
`,title:"Reactivity",level:1,content:`# Reactivity

> Reactivity is a programming paradigm that allows us to adjust to changes in a **declarative** manner. [^1]

<br />

<div grid="~ cols-6 gap-10">
<div class="col-span-2">
<img
    src="https://www.benlcollins.com/ebook_35_tips_gifs/gifs/conditional_formatting.gif"
/>
</div>
<div class="col-span-4">

\`\`\`ts
let A0 = 1
let A1 = 2
let A2 = A0 + A1

console.log(A2) // 3

A0 = 2
console.log(A2) // Still 3 not 4 😢
\`\`\`

How reactivity works in Vue is an advanced topic, but you still figure it out [^2]

</div>
</div>


[^1]: https://vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity
[^2]: https://vuejs.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue`,frontmatter:{srcSequence:"./pages/3-key-concepts.md"},index:10,start:204,end:239,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",raw:`
# Reactivity

> Reactivity is a programming paradigm that allows us to adjust to changes in a **declarative** manner. [^1]

<br />

<div grid="~ cols-6 gap-10">
<div class="col-span-2">
<img
    src="https://www.benlcollins.com/ebook_35_tips_gifs/gifs/conditional_formatting.gif"
/>
</div>
<div class="col-span-4">

\`\`\`ts
let A0 = 1
let A1 = 2
let A2 = A0 + A1

console.log(A2) // 3

A0 = 2
console.log(A2) // Still 3 not 4 😢
\`\`\`

How reactivity works in Vue is an advanced topic, but you still figure it out [^2]

</div>
</div>


[^1]: https://vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity
[^2]: https://vuejs.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue
`,title:"Reactivity",level:1,content:`# Reactivity

> Reactivity is a programming paradigm that allows us to adjust to changes in a **declarative** manner. [^1]

<br />

<div grid="~ cols-6 gap-10">
<div class="col-span-2">
<img
    src="https://www.benlcollins.com/ebook_35_tips_gifs/gifs/conditional_formatting.gif"
/>
</div>
<div class="col-span-4">

\`\`\`ts
let A0 = 1
let A1 = 2
let A2 = A0 + A1

console.log(A2) // 3

A0 = 2
console.log(A2) // Still 3 not 4 😢
\`\`\`

How reactivity works in Vue is an advanced topic, but you still figure it out [^2]

</div>
</div>


[^1]: https://vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity
[^2]: https://vuejs.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue`,frontmatter:{},index:5,start:204,end:239},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:u6,meta:{transition:"slide-up",srcSequence:"./pages/3-key-concepts.md",slide:{raw:`---
transition: slide-up
---

# Single File Components


> A Vue Single-File Component (SFC), conventionally using the \`*.vue\` file extension, is a custom file format that uses an HTML-like syntax to describe a Vue component. (...)
>
> Each \`*.vue\` file consists of three types of top-level language blocks: \`<template>\`, \`<script>\`, and \`<style>\`, (...) [^1]

\`\`\`vue
<template lang="html (default) | pug | ...">
    <!-- Your HTML/PUG/Whatever can go here -->
</template>

<script [setup] lang="js (default) | ts">
    /* Logic goes here */
<\/script>

<style [scoped] lang="css (default) | scss | sass | less"> 
    /* styles go here */
</style>
\`\`\`

[^1]: https://vuejs.org/api/sfc-spec.html#overview
`,title:"Single File Components",level:1,content:`# Single File Components


> A Vue Single-File Component (SFC), conventionally using the \`*.vue\` file extension, is a custom file format that uses an HTML-like syntax to describe a Vue component. (...)
>
> Each \`*.vue\` file consists of three types of top-level language blocks: \`<template>\`, \`<script>\`, and \`<style>\`, (...) [^1]

\`\`\`vue
<template lang="html (default) | pug | ...">
    <!-- Your HTML/PUG/Whatever can go here -->
</template>

<script [setup] lang="js (default) | ts">
    /* Logic goes here */
<\/script>

<style [scoped] lang="css (default) | scss | sass | less"> 
    /* styles go here */
</style>
\`\`\`

[^1]: https://vuejs.org/api/sfc-spec.html#overview`,frontmatter:{transition:"slide-up",srcSequence:"./pages/3-key-concepts.md"},index:11,start:239,end:266,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",raw:`---
transition: slide-up
---

# Single File Components


> A Vue Single-File Component (SFC), conventionally using the \`*.vue\` file extension, is a custom file format that uses an HTML-like syntax to describe a Vue component. (...)
>
> Each \`*.vue\` file consists of three types of top-level language blocks: \`<template>\`, \`<script>\`, and \`<style>\`, (...) [^1]

\`\`\`vue
<template lang="html (default) | pug | ...">
    <!-- Your HTML/PUG/Whatever can go here -->
</template>

<script [setup] lang="js (default) | ts">
    /* Logic goes here */
<\/script>

<style [scoped] lang="css (default) | scss | sass | less"> 
    /* styles go here */
</style>
\`\`\`

[^1]: https://vuejs.org/api/sfc-spec.html#overview
`,title:"Single File Components",level:1,content:`# Single File Components


> A Vue Single-File Component (SFC), conventionally using the \`*.vue\` file extension, is a custom file format that uses an HTML-like syntax to describe a Vue component. (...)
>
> Each \`*.vue\` file consists of three types of top-level language blocks: \`<template>\`, \`<script>\`, and \`<style>\`, (...) [^1]

\`\`\`vue
<template lang="html (default) | pug | ...">
    <!-- Your HTML/PUG/Whatever can go here -->
</template>

<script [setup] lang="js (default) | ts">
    /* Logic goes here */
<\/script>

<style [scoped] lang="css (default) | scss | sass | less"> 
    /* styles go here */
</style>
\`\`\`

[^1]: https://vuejs.org/api/sfc-spec.html#overview`,frontmatter:{transition:"slide-up"},index:6,start:239,end:266},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/3-key-concepts.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:m6,meta:{layout:"section",title:"4. Benefits",srcSequence:"./pages/4-benefits.md",slide:{raw:null,title:"4. Benefits",level:1,content:`# 4. Benefits

You right now:

> *Alright, Vue seems cool... but is it for me?*

<p v-click>Probably... it depends... But I bet it is.</p>

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"4. Benefits",srcSequence:"./pages/4-benefits.md"},index:12,start:0,end:24,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",raw:`---
layout: section
---

# 4. Benefits

You right now:

> *Alright, Vue seems cool... but is it for me?*

<p v-click>Probably... it depends... But I bet it is.</p>

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>
`,title:"4. Benefits",level:1,content:`# 4. Benefits

You right now:

> *Alright, Vue seems cool... but is it for me?*

<p v-click>Probably... it depends... But I bet it is.</p>

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"4. Benefits"},index:0,start:0,end:24},inline:{raw:`---
src: ./pages/4-benefits.md
---
`,content:"",frontmatter:{},index:5,start:65,end:69},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:O6,meta:{srcSequence:"./pages/4-benefits.md",slide:{raw:`
# Why I like Single File Components

<p v-click text="center 6">One file to rule them all! 💍</p>

<div grid="~ cols-2 gap-10" class="justify-center">
<div v-click>
<img
    class="h-20 mx-auto my-4"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
/>

React component files structure [^1]

\`\`\`
/ foo
├── foo.js
└── foo.css
\`\`\`

</div>

<div v-click>
<img
    class="h-20 mx-auto my-4"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
/>

Angular component files structure [^2]

\`\`\`
/ foo
├── foo.component.ts
├── foo.component.html
└── foo.component.css
\`\`\`
</div>
</div>

<div
    v-click
    position="absolute"
    top="50"
    left="100"
    rotate="10"
    background="red"
    flex="~ gap-4"
    items="center">
    <img
        class="h-20"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
    />
    <img
        class="h-20"
        src="https://em-content.zobj.net/thumbs/160/apple/96/white-heavy-check-mark_2705.png"
    />
</div>


[^1]: https://legacy.reactjs.org/docs/faq-structure.html
[^2]: https://angular.io/guide/file-structure#application-source-files
`,title:"Why I like Single File Components",level:1,content:`# Why I like Single File Components

<p v-click text="center 6">One file to rule them all! 💍</p>

<div grid="~ cols-2 gap-10" class="justify-center">
<div v-click>
<img
    class="h-20 mx-auto my-4"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
/>

React component files structure [^1]

\`\`\`
/ foo
├── foo.js
└── foo.css
\`\`\`

</div>

<div v-click>
<img
    class="h-20 mx-auto my-4"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
/>

Angular component files structure [^2]

\`\`\`
/ foo
├── foo.component.ts
├── foo.component.html
└── foo.component.css
\`\`\`
</div>
</div>

<div
    v-click
    position="absolute"
    top="50"
    left="100"
    rotate="10"
    background="red"
    flex="~ gap-4"
    items="center">
    <img
        class="h-20"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
    />
    <img
        class="h-20"
        src="https://em-content.zobj.net/thumbs/160/apple/96/white-heavy-check-mark_2705.png"
    />
</div>


[^1]: https://legacy.reactjs.org/docs/faq-structure.html
[^2]: https://angular.io/guide/file-structure#application-source-files`,frontmatter:{srcSequence:"./pages/4-benefits.md"},index:13,start:25,end:87,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",raw:`
# Why I like Single File Components

<p v-click text="center 6">One file to rule them all! 💍</p>

<div grid="~ cols-2 gap-10" class="justify-center">
<div v-click>
<img
    class="h-20 mx-auto my-4"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
/>

React component files structure [^1]

\`\`\`
/ foo
├── foo.js
└── foo.css
\`\`\`

</div>

<div v-click>
<img
    class="h-20 mx-auto my-4"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
/>

Angular component files structure [^2]

\`\`\`
/ foo
├── foo.component.ts
├── foo.component.html
└── foo.component.css
\`\`\`
</div>
</div>

<div
    v-click
    position="absolute"
    top="50"
    left="100"
    rotate="10"
    background="red"
    flex="~ gap-4"
    items="center">
    <img
        class="h-20"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
    />
    <img
        class="h-20"
        src="https://em-content.zobj.net/thumbs/160/apple/96/white-heavy-check-mark_2705.png"
    />
</div>


[^1]: https://legacy.reactjs.org/docs/faq-structure.html
[^2]: https://angular.io/guide/file-structure#application-source-files
`,title:"Why I like Single File Components",level:1,content:`# Why I like Single File Components

<p v-click text="center 6">One file to rule them all! 💍</p>

<div grid="~ cols-2 gap-10" class="justify-center">
<div v-click>
<img
    class="h-20 mx-auto my-4"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
/>

React component files structure [^1]

\`\`\`
/ foo
├── foo.js
└── foo.css
\`\`\`

</div>

<div v-click>
<img
    class="h-20 mx-auto my-4"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
/>

Angular component files structure [^2]

\`\`\`
/ foo
├── foo.component.ts
├── foo.component.html
└── foo.component.css
\`\`\`
</div>
</div>

<div
    v-click
    position="absolute"
    top="50"
    left="100"
    rotate="10"
    background="red"
    flex="~ gap-4"
    items="center">
    <img
        class="h-20"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
    />
    <img
        class="h-20"
        src="https://em-content.zobj.net/thumbs/160/apple/96/white-heavy-check-mark_2705.png"
    />
</div>


[^1]: https://legacy.reactjs.org/docs/faq-structure.html
[^2]: https://angular.io/guide/file-structure#application-source-files`,frontmatter:{},index:1,start:25,end:87},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:N6,meta:{srcSequence:"./pages/4-benefits.md",slide:{raw:`
# Ease of use

This is my personal opinion, but Vue just makes sense in my little goldfish brain!
- ⌨️ One command and you're ready to go;
- ⚡ You can probably get it up and running in under 5 minutes;
- 📊 It can be as simple or as complex as you want;
- 🔋 It comes with batteries included;
- 📄 SFCs tend to make things simple;
- 👵 You can probably teach it to your grandma;

<img
    position="absolute"
    bottom="4"
    right="2"
    class="mx-auto h-60"
    src="/img/grandma-vue-init.jpg"
/>
`,title:"Ease of use",level:1,content:`# Ease of use

This is my personal opinion, but Vue just makes sense in my little goldfish brain!
- ⌨️ One command and you're ready to go;
- ⚡ You can probably get it up and running in under 5 minutes;
- 📊 It can be as simple or as complex as you want;
- 🔋 It comes with batteries included;
- 📄 SFCs tend to make things simple;
- 👵 You can probably teach it to your grandma;

<img
    position="absolute"
    bottom="4"
    right="2"
    class="mx-auto h-60"
    src="/img/grandma-vue-init.jpg"
/>`,frontmatter:{srcSequence:"./pages/4-benefits.md"},index:14,start:88,end:107,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",raw:`
# Ease of use

This is my personal opinion, but Vue just makes sense in my little goldfish brain!
- ⌨️ One command and you're ready to go;
- ⚡ You can probably get it up and running in under 5 minutes;
- 📊 It can be as simple or as complex as you want;
- 🔋 It comes with batteries included;
- 📄 SFCs tend to make things simple;
- 👵 You can probably teach it to your grandma;

<img
    position="absolute"
    bottom="4"
    right="2"
    class="mx-auto h-60"
    src="/img/grandma-vue-init.jpg"
/>
`,title:"Ease of use",level:1,content:`# Ease of use

This is my personal opinion, but Vue just makes sense in my little goldfish brain!
- ⌨️ One command and you're ready to go;
- ⚡ You can probably get it up and running in under 5 minutes;
- 📊 It can be as simple or as complex as you want;
- 🔋 It comes with batteries included;
- 📄 SFCs tend to make things simple;
- 👵 You can probably teach it to your grandma;

<img
    position="absolute"
    bottom="4"
    right="2"
    class="mx-auto h-60"
    src="/img/grandma-vue-init.jpg"
/>`,frontmatter:{},index:2,start:88,end:107},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:U6,meta:{srcSequence:"./pages/4-benefits.md",slide:{raw:`
# Batteries included and instructions for dummies

There are recommended ways of doing stuff (this is double edged-sword):
- 📋 **State Manegement:** Pinia (or VueX for Vue 2)
- 🚦 **Routing:** Vue Router
- 🧪 **Testing:** Vitest
- 🎁 **Scaffolding/Bundler:** Vite (vue-cli for Vue 2)
- 🧑‍💻 **IDE Support for SFC:** Volar (Vetur for Vue 2)
- 🖨️ **SSR/SSG:** Nuxt (You can still do it manually)
`,title:"Batteries included and instructions for dummies",level:1,content:`# Batteries included and instructions for dummies

There are recommended ways of doing stuff (this is double edged-sword):
- 📋 **State Manegement:** Pinia (or VueX for Vue 2)
- 🚦 **Routing:** Vue Router
- 🧪 **Testing:** Vitest
- 🎁 **Scaffolding/Bundler:** Vite (vue-cli for Vue 2)
- 🧑‍💻 **IDE Support for SFC:** Volar (Vetur for Vue 2)
- 🖨️ **SSR/SSG:** Nuxt (You can still do it manually)`,frontmatter:{srcSequence:"./pages/4-benefits.md"},index:15,start:108,end:119,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",raw:`
# Batteries included and instructions for dummies

There are recommended ways of doing stuff (this is double edged-sword):
- 📋 **State Manegement:** Pinia (or VueX for Vue 2)
- 🚦 **Routing:** Vue Router
- 🧪 **Testing:** Vitest
- 🎁 **Scaffolding/Bundler:** Vite (vue-cli for Vue 2)
- 🧑‍💻 **IDE Support for SFC:** Volar (Vetur for Vue 2)
- 🖨️ **SSR/SSG:** Nuxt (You can still do it manually)
`,title:"Batteries included and instructions for dummies",level:1,content:`# Batteries included and instructions for dummies

There are recommended ways of doing stuff (this is double edged-sword):
- 📋 **State Manegement:** Pinia (or VueX for Vue 2)
- 🚦 **Routing:** Vue Router
- 🧪 **Testing:** Vitest
- 🎁 **Scaffolding/Bundler:** Vite (vue-cli for Vue 2)
- 🧑‍💻 **IDE Support for SFC:** Volar (Vetur for Vue 2)
- 🖨️ **SSR/SSG:** Nuxt (You can still do it manually)`,frontmatter:{},index:3,start:108,end:119},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:nD,meta:{srcSequence:"./pages/4-benefits.md",slide:{raw:`
# Strong community

This is not unique to Vue (React did it first), but most likely there's a Vue "port" for that library you're considering using!

The vue ecosystem is blooming, and you can easily find the tool or information you need to get your job done.

I mean, just look at us right now 🎉

There's also a lot of "official" learning resources: 🤓
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)

<img
    position="absolute"
    bottom="4"
    right="2"
    class="mx-auto h-60"
    src="/img/ape-meme.jpg"
/>
`,title:"Strong community",level:1,content:`# Strong community

This is not unique to Vue (React did it first), but most likely there's a Vue "port" for that library you're considering using!

The vue ecosystem is blooming, and you can easily find the tool or information you need to get your job done.

I mean, just look at us right now 🎉

There's also a lot of "official" learning resources: 🤓
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)

<img
    position="absolute"
    bottom="4"
    right="2"
    class="mx-auto h-60"
    src="/img/ape-meme.jpg"
/>`,frontmatter:{srcSequence:"./pages/4-benefits.md"},index:16,start:120,end:141,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",raw:`
# Strong community

This is not unique to Vue (React did it first), but most likely there's a Vue "port" for that library you're considering using!

The vue ecosystem is blooming, and you can easily find the tool or information you need to get your job done.

I mean, just look at us right now 🎉

There's also a lot of "official" learning resources: 🤓
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)

<img
    position="absolute"
    bottom="4"
    right="2"
    class="mx-auto h-60"
    src="/img/ape-meme.jpg"
/>
`,title:"Strong community",level:1,content:`# Strong community

This is not unique to Vue (React did it first), but most likely there's a Vue "port" for that library you're considering using!

The vue ecosystem is blooming, and you can easily find the tool or information you need to get your job done.

I mean, just look at us right now 🎉

There's also a lot of "official" learning resources: 🤓
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)

<img
    position="absolute"
    bottom="4"
    right="2"
    class="mx-auto h-60"
    src="/img/ape-meme.jpg"
/>`,frontmatter:{},index:4,start:120,end:141},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:fD,meta:{srcSequence:"./pages/4-benefits.md",slide:{raw:`
# How performant is Vue?

TLDR: Vue 3 tends to be one of the most performant frameworks, going hand in hand with the latests versions of Svetle [^1]

<div grid="~ cols-3 gap-10" class="justify-center">
    <img src="/img/benchmark-operations.png" />
    <img src="/img/benchmark-startup.png" />
    <img src="/img/benchmark-memory.png" />
</div>

**Disclaimer:** These charts only tell part of the story, there are some caveats you should look out for. Plus, performance is not everything :)

[^1]: [JS framework Benchmark (2023)](https://krausest.github.io/js-framework-benchmark/2023/table_chrome_111.0.5563.64.html#eyJmcmFtZXdvcmtzIjpbImtleWVkL2FuZ3VsYXIiLCJrZXllZC9yZWFjdCIsImtleWVkL3N2ZWx0ZSIsImtleWVkL3Z1ZSIsIm5vbi1rZXllZC9yZWFjdCIsIm5vbi1rZXllZC9zdmVsdGUiLCJub24ta2V5ZWQvdnVlIl0sImJlbmNobWFya3MiOlsiMDFfcnVuMWsiLCIwMl9yZXBsYWNlMWsiLCIwM191cGRhdGUxMHRoMWtfeDE2IiwiMDRfc2VsZWN0MWsiLCIwNV9zd2FwMWsiLCIwNl9yZW1vdmUtb25lLTFrIiwiMDdfY3JlYXRlMTBrIiwiMDhfY3JlYXRlMWstYWZ0ZXIxa194MiIsIjA5X2NsZWFyMWtfeDgiLCIyMV9yZWFkeS1tZW1vcnkiLCIyMl9ydW4tbWVtb3J5IiwiMjNfdXBkYXRlNS1tZW1vcnkiLCIyNV9ydW4tY2xlYXItbWVtb3J5IiwiMjZfcnVuLTEway1tZW1vcnkiLCIzMV9zdGFydHVwLWNpIiwiMzRfc3RhcnR1cC10b3RhbGJ5dGVzIl0sImRpc3BsYXlNb2RlIjoxLCJjYXRlZ29yaWVzIjpbMSwyLDMsNCw1XX0=)
`,title:"How performant is Vue?",level:1,content:`# How performant is Vue?

TLDR: Vue 3 tends to be one of the most performant frameworks, going hand in hand with the latests versions of Svetle [^1]

<div grid="~ cols-3 gap-10" class="justify-center">
    <img src="/img/benchmark-operations.png" />
    <img src="/img/benchmark-startup.png" />
    <img src="/img/benchmark-memory.png" />
</div>

**Disclaimer:** These charts only tell part of the story, there are some caveats you should look out for. Plus, performance is not everything :)

[^1]: [JS framework Benchmark (2023)](https://krausest.github.io/js-framework-benchmark/2023/table_chrome_111.0.5563.64.html#eyJmcmFtZXdvcmtzIjpbImtleWVkL2FuZ3VsYXIiLCJrZXllZC9yZWFjdCIsImtleWVkL3N2ZWx0ZSIsImtleWVkL3Z1ZSIsIm5vbi1rZXllZC9yZWFjdCIsIm5vbi1rZXllZC9zdmVsdGUiLCJub24ta2V5ZWQvdnVlIl0sImJlbmNobWFya3MiOlsiMDFfcnVuMWsiLCIwMl9yZXBsYWNlMWsiLCIwM191cGRhdGUxMHRoMWtfeDE2IiwiMDRfc2VsZWN0MWsiLCIwNV9zd2FwMWsiLCIwNl9yZW1vdmUtb25lLTFrIiwiMDdfY3JlYXRlMTBrIiwiMDhfY3JlYXRlMWstYWZ0ZXIxa194MiIsIjA5X2NsZWFyMWtfeDgiLCIyMV9yZWFkeS1tZW1vcnkiLCIyMl9ydW4tbWVtb3J5IiwiMjNfdXBkYXRlNS1tZW1vcnkiLCIyNV9ydW4tY2xlYXItbWVtb3J5IiwiMjZfcnVuLTEway1tZW1vcnkiLCIzMV9zdGFydHVwLWNpIiwiMzRfc3RhcnR1cC10b3RhbGJ5dGVzIl0sImRpc3BsYXlNb2RlIjoxLCJjYXRlZ29yaWVzIjpbMSwyLDMsNCw1XX0=)`,frontmatter:{srcSequence:"./pages/4-benefits.md"},index:17,start:142,end:157,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",raw:`
# How performant is Vue?

TLDR: Vue 3 tends to be one of the most performant frameworks, going hand in hand with the latests versions of Svetle [^1]

<div grid="~ cols-3 gap-10" class="justify-center">
    <img src="/img/benchmark-operations.png" />
    <img src="/img/benchmark-startup.png" />
    <img src="/img/benchmark-memory.png" />
</div>

**Disclaimer:** These charts only tell part of the story, there are some caveats you should look out for. Plus, performance is not everything :)

[^1]: [JS framework Benchmark (2023)](https://krausest.github.io/js-framework-benchmark/2023/table_chrome_111.0.5563.64.html#eyJmcmFtZXdvcmtzIjpbImtleWVkL2FuZ3VsYXIiLCJrZXllZC9yZWFjdCIsImtleWVkL3N2ZWx0ZSIsImtleWVkL3Z1ZSIsIm5vbi1rZXllZC9yZWFjdCIsIm5vbi1rZXllZC9zdmVsdGUiLCJub24ta2V5ZWQvdnVlIl0sImJlbmNobWFya3MiOlsiMDFfcnVuMWsiLCIwMl9yZXBsYWNlMWsiLCIwM191cGRhdGUxMHRoMWtfeDE2IiwiMDRfc2VsZWN0MWsiLCIwNV9zd2FwMWsiLCIwNl9yZW1vdmUtb25lLTFrIiwiMDdfY3JlYXRlMTBrIiwiMDhfY3JlYXRlMWstYWZ0ZXIxa194MiIsIjA5X2NsZWFyMWtfeDgiLCIyMV9yZWFkeS1tZW1vcnkiLCIyMl9ydW4tbWVtb3J5IiwiMjNfdXBkYXRlNS1tZW1vcnkiLCIyNV9ydW4tY2xlYXItbWVtb3J5IiwiMjZfcnVuLTEway1tZW1vcnkiLCIzMV9zdGFydHVwLWNpIiwiMzRfc3RhcnR1cC10b3RhbGJ5dGVzIl0sImRpc3BsYXlNb2RlIjoxLCJjYXRlZ29yaWVzIjpbMSwyLDMsNCw1XX0=)
`,title:"How performant is Vue?",level:1,content:`# How performant is Vue?

TLDR: Vue 3 tends to be one of the most performant frameworks, going hand in hand with the latests versions of Svetle [^1]

<div grid="~ cols-3 gap-10" class="justify-center">
    <img src="/img/benchmark-operations.png" />
    <img src="/img/benchmark-startup.png" />
    <img src="/img/benchmark-memory.png" />
</div>

**Disclaimer:** These charts only tell part of the story, there are some caveats you should look out for. Plus, performance is not everything :)

[^1]: [JS framework Benchmark (2023)](https://krausest.github.io/js-framework-benchmark/2023/table_chrome_111.0.5563.64.html#eyJmcmFtZXdvcmtzIjpbImtleWVkL2FuZ3VsYXIiLCJrZXllZC9yZWFjdCIsImtleWVkL3N2ZWx0ZSIsImtleWVkL3Z1ZSIsIm5vbi1rZXllZC9yZWFjdCIsIm5vbi1rZXllZC9zdmVsdGUiLCJub24ta2V5ZWQvdnVlIl0sImJlbmNobWFya3MiOlsiMDFfcnVuMWsiLCIwMl9yZXBsYWNlMWsiLCIwM191cGRhdGUxMHRoMWtfeDE2IiwiMDRfc2VsZWN0MWsiLCIwNV9zd2FwMWsiLCIwNl9yZW1vdmUtb25lLTFrIiwiMDdfY3JlYXRlMTBrIiwiMDhfY3JlYXRlMWstYWZ0ZXIxa194MiIsIjA5X2NsZWFyMWtfeDgiLCIyMV9yZWFkeS1tZW1vcnkiLCIyMl9ydW4tbWVtb3J5IiwiMjNfdXBkYXRlNS1tZW1vcnkiLCIyNV9ydW4tY2xlYXItbWVtb3J5IiwiMjZfcnVuLTEway1tZW1vcnkiLCIzMV9zdGFydHVwLWNpIiwiMzRfc3RhcnR1cC10b3RhbGJ5dGVzIl0sImRpc3BsYXlNb2RlIjoxLCJjYXRlZ29yaWVzIjpbMSwyLDMsNCw1XX0=)`,frontmatter:{},index:5,start:142,end:157},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:_D,meta:{srcSequence:"./pages/4-benefits.md",slide:{raw:`
# What do developers say? [^1]

<iframe class="mx-auto" width="600" height="371" frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=855587019&amp;format=interactive"></iframe>

[^1]: [Stakoverflow Survey (2022): Most popular web frameworks and technologies](https://survey.stackoverflow.co/2022/#section-most-popular-technologies-web-frameworks-and-technologies)
`,title:"What do developers say? [^1]",level:1,content:`# What do developers say? [^1]

<iframe class="mx-auto" width="600" height="371" frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=855587019&amp;format=interactive"></iframe>

[^1]: [Stakoverflow Survey (2022): Most popular web frameworks and technologies](https://survey.stackoverflow.co/2022/#section-most-popular-technologies-web-frameworks-and-technologies)`,frontmatter:{srcSequence:"./pages/4-benefits.md"},index:18,start:158,end:165,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",raw:`
# What do developers say? [^1]

<iframe class="mx-auto" width="600" height="371" frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=855587019&amp;format=interactive"></iframe>

[^1]: [Stakoverflow Survey (2022): Most popular web frameworks and technologies](https://survey.stackoverflow.co/2022/#section-most-popular-technologies-web-frameworks-and-technologies)
`,title:"What do developers say? [^1]",level:1,content:`# What do developers say? [^1]

<iframe class="mx-auto" width="600" height="371" frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=855587019&amp;format=interactive"></iframe>

[^1]: [Stakoverflow Survey (2022): Most popular web frameworks and technologies](https://survey.stackoverflow.co/2022/#section-most-popular-technologies-web-frameworks-and-technologies)`,frontmatter:{},index:6,start:158,end:165},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:xD,meta:{transition:"slide-up",srcSequence:"./pages/4-benefits.md",slide:{raw:`---
transition: slide-up
---

# What's the market working with? [^1]

<iframe class="mx-auto" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=713110289&amp;format=interactive"></iframe>

[^1]: [Built With Statistics](https://trends.builtwith.com/javascript)
`,title:"What's the market working with? [^1]",level:1,content:`# What's the market working with? [^1]

<iframe class="mx-auto" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=713110289&amp;format=interactive"></iframe>

[^1]: [Built With Statistics](https://trends.builtwith.com/javascript)`,frontmatter:{transition:"slide-up",srcSequence:"./pages/4-benefits.md"},index:19,start:165,end:175,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",raw:`---
transition: slide-up
---

# What's the market working with? [^1]

<iframe class="mx-auto" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=713110289&amp;format=interactive"></iframe>

[^1]: [Built With Statistics](https://trends.builtwith.com/javascript)
`,title:"What's the market working with? [^1]",level:1,content:`# What's the market working with? [^1]

<iframe class="mx-auto" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVxYRuA-vuA337tp7VQjsBz5zIF8dVirAqD-brMQnDy8xaPx0lhUll5p9SFRMOGn4HVZ5T42yQHjz_/pubchart?oid=713110289&amp;format=interactive"></iframe>

[^1]: [Built With Statistics](https://trends.builtwith.com/javascript)`,frontmatter:{transition:"slide-up"},index:7,start:165,end:175},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/4-benefits.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:FD,meta:{layout:"section",title:"5. Challenges",srcSequence:"./pages/5-challenges.md",slide:{raw:null,title:"5. Challenges",level:1,content:`# 5. Challenges

<div grid="~ cols-3">

<div col="span-2">

There are two sides to every coin, and Vue is no exception.

> "*Inside each of us, there is the seed of both good and evil. It's a constant struggle as to which one will win. And one cannot exist without the other.*" - Eric Burdon

</div>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"5. Challenges",srcSequence:"./pages/5-challenges.md"},index:20,start:0,end:29,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/5-challenges.md",raw:`---
layout: section
---

# 5. Challenges

<div grid="~ cols-3">

<div col="span-2">

There are two sides to every coin, and Vue is no exception.

> "*Inside each of us, there is the seed of both good and evil. It's a constant struggle as to which one will win. And one cannot exist without the other.*" - Eric Burdon

</div>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"5. Challenges",level:1,content:`# 5. Challenges

<div grid="~ cols-3">

<div col="span-2">

There are two sides to every coin, and Vue is no exception.

> "*Inside each of us, there is the seed of both good and evil. It's a constant struggle as to which one will win. And one cannot exist without the other.*" - Eric Burdon

</div>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"5. Challenges"},index:0,start:0,end:29},inline:{raw:`---
src: ./pages/5-challenges.md
---
`,content:"",frontmatter:{},index:6,start:69,end:73},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/5-challenges.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:HD,meta:{srcSequence:"./pages/5-challenges.md",slide:{raw:`
# The elephant in the room 🐘

Imagine you're learning Vue for the first time:
<ol>
  <li v-click>you take a look at the docs</li>
  <li v-click>you start looking at code snippets</li>
  <li v-click>you find out there's a Vue 2 and a Vue 3</li>
  <li v-click>you quickly question every decision you've ever made</li>
</ol>

<img
    v-click
    position="absolute"
    top="10"
    right="30"
    class="w-60"
    rotate="10"
    src="/img/vue-3-meme-api-buttons.jpg"
/>

<div v-click>
<img
    position="absolute"
    bottom="10"
    left="6"
    class="h-40"
    rotate="-20"
    src="/img/vue-3-meme-separate-repo.jpg"
/>

<img
    position="absolute"
    bottom="10"
    right="90"
    rotate="5"
    class="h-60"
    src="/img/vue-3-meme-api-changes.jpg"
/>

<img
    position="absolute"
    bottom="4"
    right="2"
    rotate="10"
    class="h-40"
    src="/img/vue-3-meme-migrating-to-vue-3.jpg"
/>
</div>
`,title:"The elephant in the room 🐘",level:1,content:`# The elephant in the room 🐘

Imagine you're learning Vue for the first time:
<ol>
  <li v-click>you take a look at the docs</li>
  <li v-click>you start looking at code snippets</li>
  <li v-click>you find out there's a Vue 2 and a Vue 3</li>
  <li v-click>you quickly question every decision you've ever made</li>
</ol>

<img
    v-click
    position="absolute"
    top="10"
    right="30"
    class="w-60"
    rotate="10"
    src="/img/vue-3-meme-api-buttons.jpg"
/>

<div v-click>
<img
    position="absolute"
    bottom="10"
    left="6"
    class="h-40"
    rotate="-20"
    src="/img/vue-3-meme-separate-repo.jpg"
/>

<img
    position="absolute"
    bottom="10"
    right="90"
    rotate="5"
    class="h-60"
    src="/img/vue-3-meme-api-changes.jpg"
/>

<img
    position="absolute"
    bottom="4"
    right="2"
    rotate="10"
    class="h-40"
    src="/img/vue-3-meme-migrating-to-vue-3.jpg"
/>
</div>`,frontmatter:{srcSequence:"./pages/5-challenges.md"},index:21,start:30,end:80,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/5-challenges.md",raw:`
# The elephant in the room 🐘

Imagine you're learning Vue for the first time:
<ol>
  <li v-click>you take a look at the docs</li>
  <li v-click>you start looking at code snippets</li>
  <li v-click>you find out there's a Vue 2 and a Vue 3</li>
  <li v-click>you quickly question every decision you've ever made</li>
</ol>

<img
    v-click
    position="absolute"
    top="10"
    right="30"
    class="w-60"
    rotate="10"
    src="/img/vue-3-meme-api-buttons.jpg"
/>

<div v-click>
<img
    position="absolute"
    bottom="10"
    left="6"
    class="h-40"
    rotate="-20"
    src="/img/vue-3-meme-separate-repo.jpg"
/>

<img
    position="absolute"
    bottom="10"
    right="90"
    rotate="5"
    class="h-60"
    src="/img/vue-3-meme-api-changes.jpg"
/>

<img
    position="absolute"
    bottom="4"
    right="2"
    rotate="10"
    class="h-40"
    src="/img/vue-3-meme-migrating-to-vue-3.jpg"
/>
</div>
`,title:"The elephant in the room 🐘",level:1,content:`# The elephant in the room 🐘

Imagine you're learning Vue for the first time:
<ol>
  <li v-click>you take a look at the docs</li>
  <li v-click>you start looking at code snippets</li>
  <li v-click>you find out there's a Vue 2 and a Vue 3</li>
  <li v-click>you quickly question every decision you've ever made</li>
</ol>

<img
    v-click
    position="absolute"
    top="10"
    right="30"
    class="w-60"
    rotate="10"
    src="/img/vue-3-meme-api-buttons.jpg"
/>

<div v-click>
<img
    position="absolute"
    bottom="10"
    left="6"
    class="h-40"
    rotate="-20"
    src="/img/vue-3-meme-separate-repo.jpg"
/>

<img
    position="absolute"
    bottom="10"
    right="90"
    rotate="5"
    class="h-60"
    src="/img/vue-3-meme-api-changes.jpg"
/>

<img
    position="absolute"
    bottom="4"
    right="2"
    rotate="10"
    class="h-40"
    src="/img/vue-3-meme-migrating-to-vue-3.jpg"
/>
</div>`,frontmatter:{},index:1,start:30,end:80},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/5-challenges.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:YD,meta:{srcSequence:"./pages/5-challenges.md",slide:{raw:`
# This problem is not unique to Vue

<div grid="~ cols-2 gap-2">

\`\`\`tsx
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { change: true }
  }
  render() {
    return (
      <div>
        <button onClick={() =>
          this.setState({ change: !this.state.change })
        }>
          Click Here!
        </button>
        {this.state.change
          ? (<h1>This</h1>)
          : (<h1>Or that</h1>)}
      </div>
    )
  }
}
\`\`\`

\`\`\`tsx
const App = (props) => {
  const [change, setChange] = useState(true)
  return (
    <div>
      <button onClick = {() => setChange(!change)}>
        Click Here!
      </button>
      { change
        ? <h1>This</h1>
        : <h1>Or that</h1>}
    </div>
    )
  }
\`\`\`

</div>

<!--
Up to this day you can still find React projects that are still using the old Class components syntax (before React \`v16.8\`). Even if this syntax was dropped back in 2019 in favor of functional components and hooks.
-->
`,title:"This problem is not unique to Vue",level:1,content:`# This problem is not unique to Vue

<div grid="~ cols-2 gap-2">

\`\`\`tsx
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { change: true }
  }
  render() {
    return (
      <div>
        <button onClick={() =>
          this.setState({ change: !this.state.change })
        }>
          Click Here!
        </button>
        {this.state.change
          ? (<h1>This</h1>)
          : (<h1>Or that</h1>)}
      </div>
    )
  }
}
\`\`\`

\`\`\`tsx
const App = (props) => {
  const [change, setChange] = useState(true)
  return (
    <div>
      <button onClick = {() => setChange(!change)}>
        Click Here!
      </button>
      { change
        ? <h1>This</h1>
        : <h1>Or that</h1>}
    </div>
    )
  }
\`\`\`

</div>`,frontmatter:{srcSequence:"./pages/5-challenges.md"},note:"Up to this day you can still find React projects that are still using the old Class components syntax (before React `v16.8`). Even if this syntax was dropped back in 2019 in favor of functional components and hooks.",index:22,start:81,end:131,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/5-challenges.md",raw:`
# This problem is not unique to Vue

<div grid="~ cols-2 gap-2">

\`\`\`tsx
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { change: true }
  }
  render() {
    return (
      <div>
        <button onClick={() =>
          this.setState({ change: !this.state.change })
        }>
          Click Here!
        </button>
        {this.state.change
          ? (<h1>This</h1>)
          : (<h1>Or that</h1>)}
      </div>
    )
  }
}
\`\`\`

\`\`\`tsx
const App = (props) => {
  const [change, setChange] = useState(true)
  return (
    <div>
      <button onClick = {() => setChange(!change)}>
        Click Here!
      </button>
      { change
        ? <h1>This</h1>
        : <h1>Or that</h1>}
    </div>
    )
  }
\`\`\`

</div>

<!--
Up to this day you can still find React projects that are still using the old Class components syntax (before React \`v16.8\`). Even if this syntax was dropped back in 2019 in favor of functional components and hooks.
-->
`,title:"This problem is not unique to Vue",level:1,content:`# This problem is not unique to Vue

<div grid="~ cols-2 gap-2">

\`\`\`tsx
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { change: true }
  }
  render() {
    return (
      <div>
        <button onClick={() =>
          this.setState({ change: !this.state.change })
        }>
          Click Here!
        </button>
        {this.state.change
          ? (<h1>This</h1>)
          : (<h1>Or that</h1>)}
      </div>
    )
  }
}
\`\`\`

\`\`\`tsx
const App = (props) => {
  const [change, setChange] = useState(true)
  return (
    <div>
      <button onClick = {() => setChange(!change)}>
        Click Here!
      </button>
      { change
        ? <h1>This</h1>
        : <h1>Or that</h1>}
    </div>
    )
  }
\`\`\`

</div>`,frontmatter:{},note:"Up to this day you can still find React projects that are still using the old Class components syntax (before React `v16.8`). Even if this syntax was dropped back in 2019 in favor of functional components and hooks.",index:2,start:81,end:131},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/5-challenges.md",noteHTML:`<p>Up to this day you can still find React projects that are still using the old Class components syntax (before React <code>v16.8</code>). Even if this syntax was dropped back in 2019 in favor of functional components and hooks.</p>
`,id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:lA,meta:{srcSequence:"./pages/5-challenges.md",slide:{raw:`
# Migrating to Vue 3 is inevitable

- Vue \`2.7\` is the final release of Vue 2, which will reach its Enf of Life on December 31<sup>st</sup>, 2023[^1];
- Thankfully, there's a migration guide and build [^2] which backports some of the features of Vue 3 to Vue 2;
- [João Gonçalves](https://www.linkedin.com/in/jagoncalves/) wrote a pretty awesome blog post about this topic [^3]

<br>
<br>
<br>
<br>
<br>
<br>

[^1]: [Vue 2 LTS, EOL & Extended Support](https://v2.vuejs.org/lts/)
[^2]: [Vue 3 Migration Build](https://v3-migration.vuejs.org/migration-build.html#migration-build)
[^3]: [How to migrate from Vue 2 to Vue 3](https://www.pixelmatters.com/blog/how-to-migrate-from-vue-2-to-vue-3)
`,title:"Migrating to Vue 3 is inevitable",level:1,content:`# Migrating to Vue 3 is inevitable

- Vue \`2.7\` is the final release of Vue 2, which will reach its Enf of Life on December 31<sup>st</sup>, 2023[^1];
- Thankfully, there's a migration guide and build [^2] which backports some of the features of Vue 3 to Vue 2;
- [João Gonçalves](https://www.linkedin.com/in/jagoncalves/) wrote a pretty awesome blog post about this topic [^3]

<br>
<br>
<br>
<br>
<br>
<br>

[^1]: [Vue 2 LTS, EOL & Extended Support](https://v2.vuejs.org/lts/)
[^2]: [Vue 3 Migration Build](https://v3-migration.vuejs.org/migration-build.html#migration-build)
[^3]: [How to migrate from Vue 2 to Vue 3](https://www.pixelmatters.com/blog/how-to-migrate-from-vue-2-to-vue-3)`,frontmatter:{srcSequence:"./pages/5-challenges.md"},index:23,start:132,end:150,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/5-challenges.md",raw:`
# Migrating to Vue 3 is inevitable

- Vue \`2.7\` is the final release of Vue 2, which will reach its Enf of Life on December 31<sup>st</sup>, 2023[^1];
- Thankfully, there's a migration guide and build [^2] which backports some of the features of Vue 3 to Vue 2;
- [João Gonçalves](https://www.linkedin.com/in/jagoncalves/) wrote a pretty awesome blog post about this topic [^3]

<br>
<br>
<br>
<br>
<br>
<br>

[^1]: [Vue 2 LTS, EOL & Extended Support](https://v2.vuejs.org/lts/)
[^2]: [Vue 3 Migration Build](https://v3-migration.vuejs.org/migration-build.html#migration-build)
[^3]: [How to migrate from Vue 2 to Vue 3](https://www.pixelmatters.com/blog/how-to-migrate-from-vue-2-to-vue-3)
`,title:"Migrating to Vue 3 is inevitable",level:1,content:`# Migrating to Vue 3 is inevitable

- Vue \`2.7\` is the final release of Vue 2, which will reach its Enf of Life on December 31<sup>st</sup>, 2023[^1];
- Thankfully, there's a migration guide and build [^2] which backports some of the features of Vue 3 to Vue 2;
- [João Gonçalves](https://www.linkedin.com/in/jagoncalves/) wrote a pretty awesome blog post about this topic [^3]

<br>
<br>
<br>
<br>
<br>
<br>

[^1]: [Vue 2 LTS, EOL & Extended Support](https://v2.vuejs.org/lts/)
[^2]: [Vue 3 Migration Build](https://v3-migration.vuejs.org/migration-build.html#migration-build)
[^3]: [How to migrate from Vue 2 to Vue 3](https://www.pixelmatters.com/blog/how-to-migrate-from-vue-2-to-vue-3)`,frontmatter:{},index:3,start:132,end:150},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/5-challenges.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:dA,meta:{transition:"slide-up",srcSequence:"./pages/5-challenges.md",slide:{raw:`---
transition: slide-up
---

# Summing it up

- Go with Vue 3 and don't look back
- If you're using modern typescript I'd say composition API is the way to go
- If you're working on a small POC use options API

<img
  v-click
  position="absolute"
  bottom="12"
  right="6"
  rotate="10"
  class="h-60"
  src="/img/vue-3-meme-superiority.jpg"
/>
`,title:"Summing it up",level:1,content:`# Summing it up

- Go with Vue 3 and don't look back
- If you're using modern typescript I'd say composition API is the way to go
- If you're working on a small POC use options API

<img
  v-click
  position="absolute"
  bottom="12"
  right="6"
  rotate="10"
  class="h-60"
  src="/img/vue-3-meme-superiority.jpg"
/>`,frontmatter:{transition:"slide-up",srcSequence:"./pages/5-challenges.md"},index:24,start:150,end:170,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/5-challenges.md",raw:`---
transition: slide-up
---

# Summing it up

- Go with Vue 3 and don't look back
- If you're using modern typescript I'd say composition API is the way to go
- If you're working on a small POC use options API

<img
  v-click
  position="absolute"
  bottom="12"
  right="6"
  rotate="10"
  class="h-60"
  src="/img/vue-3-meme-superiority.jpg"
/>
`,title:"Summing it up",level:1,content:`# Summing it up

- Go with Vue 3 and don't look back
- If you're using modern typescript I'd say composition API is the way to go
- If you're working on a small POC use options API

<img
  v-click
  position="absolute"
  bottom="12"
  right="6"
  rotate="10"
  class="h-60"
  src="/img/vue-3-meme-superiority.jpg"
/>`,frontmatter:{transition:"slide-up"},index:4,start:150,end:170},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/5-challenges.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:vA,meta:{layout:"section",title:"6. A survey",srcSequence:"./pages/6-survey.md",slide:{raw:null,title:"6. A survey",level:1,content:`# 6. A survey

<div grid="~ cols-3">

<div col="span-2">

I've conducted a survey aimed at finding out what do Infraspeak developers think about vue. I wanted to learn:

1. How long they've been working with vue;
2. What do they LOVE about vue;
3. What do they HATE about vue;
4. What would they change about vue;
5. How does Vue compare with other frameworks;

</div>
</div>

<img
  position="absolute"
  bottom="6"
  right="64"
  rotate="10"
  class="w-50"
  src="/img/survey.png"
  shadow="xl"
/>

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"6. A survey",srcSequence:"./pages/6-survey.md"},index:25,start:0,end:43,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/6-survey.md",raw:`---
layout: section
---

# 6. A survey

<div grid="~ cols-3">

<div col="span-2">

I've conducted a survey aimed at finding out what do Infraspeak developers think about vue. I wanted to learn:

1. How long they've been working with vue;
2. What do they LOVE about vue;
3. What do they HATE about vue;
4. What would they change about vue;
5. How does Vue compare with other frameworks;

</div>
</div>

<img
  position="absolute"
  bottom="6"
  right="64"
  rotate="10"
  class="w-50"
  src="/img/survey.png"
  shadow="xl"
/>

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>
`,title:"6. A survey",level:1,content:`# 6. A survey

<div grid="~ cols-3">

<div col="span-2">

I've conducted a survey aimed at finding out what do Infraspeak developers think about vue. I wanted to learn:

1. How long they've been working with vue;
2. What do they LOVE about vue;
3. What do they HATE about vue;
4. What would they change about vue;
5. How does Vue compare with other frameworks;

</div>
</div>

<img
  position="absolute"
  bottom="6"
  right="64"
  rotate="10"
  class="w-50"
  src="/img/survey.png"
  shadow="xl"
/>

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"6. A survey"},index:0,start:0,end:43},inline:{raw:`---
src: ./pages/6-survey.md
---
`,content:"",frontmatter:{},index:7,start:73,end:77},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/6-survey.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:CA,meta:{srcSequence:"./pages/6-survey.md",slide:{raw:`
# Seniority of respondents

<iframe class="mx-auto" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT3RPFemS8aIqaTmqsTEbafwi4zipdSNJs2ITZRXtm7UJGdFDQJzpGKIcgJwHQaDBO69lPGATM4ImY4/pubchart?oid=1624060856&amp;format=interactive"></iframe>
`,title:"Seniority of respondents",level:1,content:`# Seniority of respondents

<iframe class="mx-auto" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT3RPFemS8aIqaTmqsTEbafwi4zipdSNJs2ITZRXtm7UJGdFDQJzpGKIcgJwHQaDBO69lPGATM4ImY4/pubchart?oid=1624060856&amp;format=interactive"></iframe>`,frontmatter:{srcSequence:"./pages/6-survey.md"},index:26,start:44,end:49,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/6-survey.md",raw:`
# Seniority of respondents

<iframe class="mx-auto" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT3RPFemS8aIqaTmqsTEbafwi4zipdSNJs2ITZRXtm7UJGdFDQJzpGKIcgJwHQaDBO69lPGATM4ImY4/pubchart?oid=1624060856&amp;format=interactive"></iframe>
`,title:"Seniority of respondents",level:1,content:`# Seniority of respondents

<iframe class="mx-auto" width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT3RPFemS8aIqaTmqsTEbafwi4zipdSNJs2ITZRXtm7UJGdFDQJzpGKIcgJwHQaDBO69lPGATM4ImY4/pubchart?oid=1624060856&amp;format=interactive"></iframe>`,frontmatter:{},index:1,start:44,end:49},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/6-survey.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:IA,meta:{srcSequence:"./pages/6-survey.md",slide:{raw:`
# What do they think about vue

<div grid="~ cols-2 gap-2">

<div v-click>

<p text="center xl">Love 💚</p> 

1. Simplicity
2. Easy to learn and teach
3. Awesome documentation
4. Awesome ecosystem and community
5. SFCs
6. Exciting features in the making

</div>

<div v-click>

<p text="center xl">Hate 🤬</p> 

1. Composition API has divided the community
2. Paradigm shift with composition API bringing unnecessary features
3. Lack of TypeScript support for Vue 2
4. Too much abstraction ("Magic")
5. Vue 3 migration is a pain
    1. Library migrations
    2. Lack of a dedicated tool
6. Too much boilerplate code

</div>

</div>
`,title:"What do they think about vue",level:1,content:`# What do they think about vue

<div grid="~ cols-2 gap-2">

<div v-click>

<p text="center xl">Love 💚</p> 

1. Simplicity
2. Easy to learn and teach
3. Awesome documentation
4. Awesome ecosystem and community
5. SFCs
6. Exciting features in the making

</div>

<div v-click>

<p text="center xl">Hate 🤬</p> 

1. Composition API has divided the community
2. Paradigm shift with composition API bringing unnecessary features
3. Lack of TypeScript support for Vue 2
4. Too much abstraction ("Magic")
5. Vue 3 migration is a pain
    1. Library migrations
    2. Lack of a dedicated tool
6. Too much boilerplate code

</div>

</div>`,frontmatter:{srcSequence:"./pages/6-survey.md"},index:27,start:50,end:85,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/6-survey.md",raw:`
# What do they think about vue

<div grid="~ cols-2 gap-2">

<div v-click>

<p text="center xl">Love 💚</p> 

1. Simplicity
2. Easy to learn and teach
3. Awesome documentation
4. Awesome ecosystem and community
5. SFCs
6. Exciting features in the making

</div>

<div v-click>

<p text="center xl">Hate 🤬</p> 

1. Composition API has divided the community
2. Paradigm shift with composition API bringing unnecessary features
3. Lack of TypeScript support for Vue 2
4. Too much abstraction ("Magic")
5. Vue 3 migration is a pain
    1. Library migrations
    2. Lack of a dedicated tool
6. Too much boilerplate code

</div>

</div>
`,title:"What do they think about vue",level:1,content:`# What do they think about vue

<div grid="~ cols-2 gap-2">

<div v-click>

<p text="center xl">Love 💚</p> 

1. Simplicity
2. Easy to learn and teach
3. Awesome documentation
4. Awesome ecosystem and community
5. SFCs
6. Exciting features in the making

</div>

<div v-click>

<p text="center xl">Hate 🤬</p> 

1. Composition API has divided the community
2. Paradigm shift with composition API bringing unnecessary features
3. Lack of TypeScript support for Vue 2
4. Too much abstraction ("Magic")
5. Vue 3 migration is a pain
    1. Library migrations
    2. Lack of a dedicated tool
6. Too much boilerplate code

</div>

</div>`,frontmatter:{},index:2,start:50,end:85},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/6-survey.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:NA,meta:{srcSequence:"./pages/6-survey.md",slide:{raw:`
# What would they change about vue

1. 🔪 Kill the composition API
2. Two way data binding (too much abstraction)
3. Keep support for class-based components with TS Decorators [^1]

<div grid="~ cols-2 gap-2" v-click>

<div>

\`\`\`ts
@Component
export default class YourComponent extends Vue {
  @Prop(Number)
  readonly propA: number | undefined
  @Prop({ default: 'default value' })
  readonly propB!: string
  @Prop([String, Boolean])
  readonly propC: string | boolean | undefined

  @Emit('my-event')
  emitMyEvent() { /* ... */ }
\`\`\`

</div>

<div>

\`\`\`ts
  @Ref('aButton')
  readonly button!: HTMLButtonElement

  get myComputedProperty() { /* ... */ }
  
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  myMethod(num: number): number { /*...*/ }
}
\`\`\`

</div>
</div>


[^1]: https://class-component.vuejs.org/ & https://github.com/kaorun343/vue-property-decorator
`,title:"What would they change about vue",level:1,content:`# What would they change about vue

1. 🔪 Kill the composition API
2. Two way data binding (too much abstraction)
3. Keep support for class-based components with TS Decorators [^1]

<div grid="~ cols-2 gap-2" v-click>

<div>

\`\`\`ts
@Component
export default class YourComponent extends Vue {
  @Prop(Number)
  readonly propA: number | undefined
  @Prop({ default: 'default value' })
  readonly propB!: string
  @Prop([String, Boolean])
  readonly propC: string | boolean | undefined

  @Emit('my-event')
  emitMyEvent() { /* ... */ }
\`\`\`

</div>

<div>

\`\`\`ts
  @Ref('aButton')
  readonly button!: HTMLButtonElement

  get myComputedProperty() { /* ... */ }
  
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  myMethod(num: number): number { /*...*/ }
}
\`\`\`

</div>
</div>


[^1]: https://class-component.vuejs.org/ & https://github.com/kaorun343/vue-property-decorator`,frontmatter:{srcSequence:"./pages/6-survey.md"},index:28,start:86,end:134,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/6-survey.md",raw:`
# What would they change about vue

1. 🔪 Kill the composition API
2. Two way data binding (too much abstraction)
3. Keep support for class-based components with TS Decorators [^1]

<div grid="~ cols-2 gap-2" v-click>

<div>

\`\`\`ts
@Component
export default class YourComponent extends Vue {
  @Prop(Number)
  readonly propA: number | undefined
  @Prop({ default: 'default value' })
  readonly propB!: string
  @Prop([String, Boolean])
  readonly propC: string | boolean | undefined

  @Emit('my-event')
  emitMyEvent() { /* ... */ }
\`\`\`

</div>

<div>

\`\`\`ts
  @Ref('aButton')
  readonly button!: HTMLButtonElement

  get myComputedProperty() { /* ... */ }
  
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  myMethod(num: number): number { /*...*/ }
}
\`\`\`

</div>
</div>


[^1]: https://class-component.vuejs.org/ & https://github.com/kaorun343/vue-property-decorator
`,title:"What would they change about vue",level:1,content:`# What would they change about vue

1. 🔪 Kill the composition API
2. Two way data binding (too much abstraction)
3. Keep support for class-based components with TS Decorators [^1]

<div grid="~ cols-2 gap-2" v-click>

<div>

\`\`\`ts
@Component
export default class YourComponent extends Vue {
  @Prop(Number)
  readonly propA: number | undefined
  @Prop({ default: 'default value' })
  readonly propB!: string
  @Prop([String, Boolean])
  readonly propC: string | boolean | undefined

  @Emit('my-event')
  emitMyEvent() { /* ... */ }
\`\`\`

</div>

<div>

\`\`\`ts
  @Ref('aButton')
  readonly button!: HTMLButtonElement

  get myComputedProperty() { /* ... */ }
  
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  myMethod(num: number): number { /*...*/ }
}
\`\`\`

</div>
</div>


[^1]: https://class-component.vuejs.org/ & https://github.com/kaorun343/vue-property-decorator`,frontmatter:{},index:3,start:86,end:134},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/6-survey.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:qA,meta:{transition:"slide-up",srcSequence:"./pages/6-survey.md",slide:{raw:`---
transition: slide-up
---

# How does it compare with other frameworks

1. Simpler and more enjoyable to work with
2. Easier to test and less file clutter
3. Shorter learning curve
4. Vue is a good middle ground between React's speed and Angular's simplicity
`,title:"How does it compare with other frameworks",level:1,content:`# How does it compare with other frameworks

1. Simpler and more enjoyable to work with
2. Easier to test and less file clutter
3. Shorter learning curve
4. Vue is a good middle ground between React's speed and Angular's simplicity`,frontmatter:{transition:"slide-up",srcSequence:"./pages/6-survey.md"},index:29,start:134,end:145,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/6-survey.md",raw:`---
transition: slide-up
---

# How does it compare with other frameworks

1. Simpler and more enjoyable to work with
2. Easier to test and less file clutter
3. Shorter learning curve
4. Vue is a good middle ground between React's speed and Angular's simplicity
`,title:"How does it compare with other frameworks",level:1,content:`# How does it compare with other frameworks

1. Simpler and more enjoyable to work with
2. Easier to test and less file clutter
3. Shorter learning curve
4. Vue is a good middle ground between React's speed and Angular's simplicity`,frontmatter:{transition:"slide-up"},index:4,start:134,end:145},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/6-survey.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:KA,meta:{layout:"section",title:"7. Q&A",srcSequence:"./pages/7-q-and-a.md",slide:{raw:null,title:"7. Q&A",level:1,content:`# 7. Q&A

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"7. Q&A",srcSequence:"./pages/7-q-and-a.md"},index:30,start:0,end:18,source:{filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/7-q-and-a.md",raw:`---
layout: section
---

# 7. Q&A

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>
`,title:"7. Q&A",level:1,content:`# 7. Q&A

<style>
h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{layout:"section",title:"7. Q&A"},index:0,start:0,end:18},inline:{raw:`---
src: ./pages/7-q-and-a.md
---
`,content:"",frontmatter:{},index:8,start:77,end:81},filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/pages/7-q-and-a.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:U5,meta:{layout:"outro",title:"Outro",twitter:"@marantesss",instagram:"@marantesss",website:"https://goncalomarantes.com",repository:"https://github.com/Marantesss/vue-js-why-so-much-love",hostedSlides:"https://goncalomarantes.com/vue-js-why-so-much-love",slide:{raw:`---
layout: outro 
title: Outro
twitter: '@marantesss'
instagram: '@marantesss'
website: 'https://goncalomarantes.com'
repository: 'https://github.com/Marantesss/vue-js-why-so-much-love'
hostedSlides: 'https://goncalomarantes.com/vue-js-why-so-much-love'
---

# Thank you :)`,title:"Outro",content:"# Thank you :)",frontmatter:{layout:"outro",title:"Outro",twitter:"@marantesss",instagram:"@marantesss",website:"https://goncalomarantes.com",repository:"https://github.com/Marantesss/vue-js-why-so-much-love",hostedSlides:"https://goncalomarantes.com/vue-js-why-so-much-love"},index:31,start:81,end:92,noteHTML:"",filepath:"/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",component:DE,meta:{layout:"end"}}],Ge=Z5,yo=[{name:"play",path:"/",component:G3,children:[...Ge]},{name:"print",path:"/print",component:kE},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!mo.remote||mo.remote===t.query.password)return!0;if(mo.remote&&t.query.password===void 0){const n=prompt("Enter password");if(mo.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};yo.push({path:"/presenter/print",component:()=>jn(()=>import("./PresenterPrint-eab71974.js"),["assets/PresenterPrint-eab71974.js","assets/NoteDisplay-4dbc4336.js"])}),yo.push({name:"notes",path:"/notes",component:()=>jn(()=>import("./NotesView-10477f08.js"),["assets/NotesView-10477f08.js","assets/NoteDisplay-4dbc4336.js"]),beforeEnter:e}),yo.push({name:"presenter",path:"/presenter/:no",component:()=>jn(()=>import("./Presenter-892422f6.js"),["assets/Presenter-892422f6.js","assets/NoteDisplay-4dbc4336.js","assets/DrawingControls-7d30698f.js","assets/Presenter-aa6741a8.css"]),beforeEnter:e}),yo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const bt=Vb({history:L_("/vue-js-why-so-much-love"),routes:yo});function Y5(e,t,{mode:n="replace"}={}){return $({get(){const o=bt.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){it(()=>{bt[E(n)]({query:{...bt.currentRoute.value.query,[e]:o}})})}})}const fh=z(0);it(()=>{bt.afterEach(async()=>{await it(),fh.value+=1})});const hh=z(0),Vt=$(()=>bt.currentRoute.value),zs=$(()=>Vt.value.query.print!==void 0),K5=$(()=>Vt.value.query.print==="clicks"),dn=$(()=>Vt.value.query.embedded!==void 0),vt=$(()=>Vt.value.path.startsWith("/presenter")),G5=$(()=>Vt.value.path.startsWith("/notes")),xo=$(()=>zs.value&&!K5.value),zi=$(()=>Vt.value.query.password),X5=$(()=>!vt.value&&(!Se.remote||zi.value===Se.remote)),Ju=Y5("clicks","0"),J5=$(()=>Ge.length-1),Q5=$(()=>Vt.value.path),Ye=$(()=>parseInt(Q5.value.split(/\//g).slice(-1)[0])||1);$(()=>vl(Ye.value));const ft=$(()=>Ge.find(e=>e.path===`${Ye.value}`));$(()=>{var e,t,n;return(n=(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});$(()=>{var e,t;return((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Ye.value===1?"cover":"default")});const zl=$(()=>Ge.find(e=>e.path===`${Math.min(Ge.length,Ye.value+1)}`)),e9=$(()=>Ge.find(e=>e.path===`${Math.max(1,Ye.value-1)}`)),t9=$(()=>{var e,t;return fh.value,((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),jt=$({get(){if(xo.value)return 99999;let e=+(Ju.value||0);return isNaN(e)&&(e=0),e},set(e){Ju.value=e.toString()}}),Xr=$(()=>{var e,t;return+(((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.clicks)??t9.value.length)}),n9=$(()=>Ye.value<Ge.length-1||jt.value<Xr.value),s9=$(()=>Ye.value>1||jt.value>0),o9=$(()=>Ge.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(za(e,t),e),[])),r9=$(()=>qa(o9.value,ft.value));$(()=>Ua(r9.value));const l9=$(()=>p9(hh.value,ft.value,e9.value));ve(ft,(e,t)=>{hh.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Ln(){Xr.value<=jt.value?zo():jt.value+=1}async function Vn(){jt.value<=0?await qo():jt.value-=1}function vl(e){return vt.value?`/presenter/${e}`:`/${e}`}function zo(){const e=Math.min(Ge.length,Ye.value+1);return qs(e)}async function qo(e=!0){const t=Math.max(1,Ye.value-1);await qs(t),e&&Xr.value&&bt.replace({query:{...Vt.value.query,clicks:Xr.value}})}function qs(e,t){return bt.push({path:vl(e),query:{...Vt.value.query,clicks:t}})}function i9(e){const t=z(0),{direction:n,distanceX:o,distanceY:r}=n_(e,{onSwipeStart(l){l.pointerType==="touch"&&(No.value||(t.value=ki()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||No.value)return;const i=Math.abs(o.value),a=Math.abs(r.value);i/window.innerWidth>.3||i>100?n.value===mn.LEFT?Ln():Vn():(a/window.innerHeight>.4||a>200)&&(n.value===mn.DOWN?qo():zo())}})}async function qi(){const{saveAs:e}=await jn(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(lf(Se.download)?Se.download:Se.exportFilename?`${Se.exportFilename}.pdf`:"/vue-js-why-so-much-loveslidev-exported.pdf",`${Se.title}.pdf`)}async function a9(e){var t,n;if(e==null){const o=(n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function za(e,t,n=1){var r,l,i,a,c;const o=(l=(r=t.meta)==null?void 0:r.slide)==null?void 0:l.level;o&&o>n&&e.length>0?za(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((i=t.meta)!=null&&i.hideInToc),title:(c=(a=t.meta)==null?void 0:a.slide)==null?void 0:c.title})}function qa(e,t,n=!1,o){return e.map(r=>{const l={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return l.children.length>0&&(l.children=qa(l.children,t,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function Ua(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Ua(n.children,t+1)}))}const c9={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function u9(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:c9[e.name]||e.name;if(n.includes("|")){const[o,r]=n.split("|").map(l=>l.trim());n=t?r:o}if(n)return{...e,name:n}}function p9(e,t,n){var r,l;let o=e>0?(r=n==null?void 0:n.meta)==null?void 0:r.transition:(l=t==null?void 0:t.meta)==null?void 0:l.transition;return o||(o=Se.transition),u9(o,e<0)}function d9(){const e=Se.titleTemplate.replace("%s",Se.title||"Slidev");xa({title:e}),y1(Se.htmlAttrs),B1(`${e} - shared`),M1(`${e} - drawings`);const t=`${location.origin}_${x1()}`;function n(){G5.value||!vt.value&&!w1.includes(location.host.split(":")[0])||(vt.value?(oo("page",+Ye.value),oo("clicks",jt.value)):(oo("viewerPage",+Ye.value),oo("viewerClicks",jt.value)),oo("lastUpdate",{id:t,type:vt.value?"presenter":"viewer",time:new Date().getTime()}))}bt.afterEach(n),ve(jt,n),I1(o=>{var l;bt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=o.lastUpdate)==null?void 0:l.type)==="presenter"&&(+o.page!=+Ye.value||+jt.value!=+o.clicks)&&bt.replace({path:vl(o.page),query:{...bt.currentRoute.value.query,clicks:o.clicks||0}})})}const f9=Te({__name:"App",setup(e){return Y(te),d9(),(t,n)=>{const o=Nr("RouterView"),r=Nr("StarportCarrier");return k(),I($e,null,[U(o),U(r)],64)}}}),h9=se(f9,[["__file","/home/runner/work/vue-js-why-so-much-love/vue-js-why-so-much-love/node_modules/@slidev/client/App.vue"]]);const m9=`<template>
  <h1>Hello World"</h1>
  <button @click="show = !show">Toggle Message</button>
  <div v-if="show" class="message">{{ message }}</div>
</template>
<script>
export default {
  data: () => ({
    show: false,
    message: 'Great to be here!',
  }),
}
<\/script>
<style scoped>
.message {
  color: red;
}
</style>
`,y9={"App.vue":m9},g9={simple:y9},v9=({app:e})=>{e.provide("repl-content",g9)};function ql(e){return e!==null&&typeof e=="object"}function Ui(e,t,n=".",o){if(!ql(t))return Ui(e,{},n,o);const r=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const i=e[l];i!=null&&(o&&o(r,l,i,n)||(Array.isArray(i)&&Array.isArray(r[l])?r[l]=[...i,...r[l]]:ql(i)&&ql(r[l])?r[l]=Ui(i,r[l],(n?`${n}.`:"")+l.toString(),o):r[l]=i))}return r}function _9(e){return(...t)=>t.reduce((n,o)=>Ui(n,o,"",e),{})}const b9=_9(),mh=1/60*1e3,w9=typeof performance<"u"?()=>performance.now():()=>Date.now(),yh=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(w9()),mh);function C9(e){let t=[],n=[],o=0,r=!1,l=!1;const i=new WeakSet,a={schedule:(c,u=!1,p=!1)=>{const d=p&&r,f=d?t:n;return u&&i.add(c),f.indexOf(c)===-1&&(f.push(c),d&&r&&(o=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),i.delete(c)},process:c=>{if(r){l=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const p=t[u];p(c),i.has(p)&&(a.schedule(p),e())}r=!1,l&&(l=!1,a.process(c))}};return a}const k9=40;let Zi=!0,Uo=!1,Yi=!1;const Rs={delta:0,timestamp:0},sr=["read","update","preRender","render","postRender"],_l=sr.reduce((e,t)=>(e[t]=C9(()=>Uo=!0),e),{}),Ki=sr.reduce((e,t)=>{const n=_l[t];return e[t]=(o,r=!1,l=!1)=>(Uo||D9(),n.schedule(o,r,l)),e},{}),E9=sr.reduce((e,t)=>(e[t]=_l[t].cancel,e),{});sr.reduce((e,t)=>(e[t]=()=>_l[t].process(Rs),e),{});const x9=e=>_l[e].process(Rs),gh=e=>{Uo=!1,Rs.delta=Zi?mh:Math.max(Math.min(e-Rs.timestamp,k9),1),Rs.timestamp=e,Yi=!0,sr.forEach(x9),Yi=!1,Uo&&(Zi=!1,yh(gh))},D9=()=>{Uo=!0,Zi=!0,Yi||yh(gh)},vh=()=>Rs;function _h(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}var Za=function(){},Zo=function(){};Za=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Zo=function(e,t){if(!e)throw new Error(t)};const Gi=(e,t,n)=>Math.min(Math.max(n,e),t),Ul=.001,A9=.01,Qu=10,S9=.05,F9=1;function $9({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let r,l;Za(e<=Qu*1e3,"Spring duration must be 10 seconds or less");let i=1-t;i=Gi(S9,F9,i),e=Gi(A9,Qu,e/1e3),i<1?(r=u=>{const p=u*i,d=p*e,f=p-n,y=Xi(u,i),h=Math.exp(-d);return Ul-f/y*h},l=u=>{const d=u*i*e,f=d*n+n,y=Math.pow(i,2)*Math.pow(u,2)*e,h=Math.exp(-d),v=Xi(Math.pow(u,2),i);return(-r(u)+Ul>0?-1:1)*((f-y)*h)/v}):(r=u=>{const p=Math.exp(-u*e),d=(u-n)*e+1;return-Ul+p*d},l=u=>{const p=Math.exp(-u*e),d=(n-u)*(e*e);return p*d});const a=5/e,c=I9(r,l,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:i*2*Math.sqrt(o*u),duration:e}}}const B9=12;function I9(e,t,n){let o=n;for(let r=1;r<B9;r++)o=o-e(o)/t(o);return o}function Xi(e,t){return e*Math.sqrt(1-t*t)}const T9=["duration","bounce"],O9=["stiffness","damping","mass"];function ep(e,t){return t.some(n=>e[n]!==void 0)}function M9(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ep(e,O9)&&ep(e,T9)){const n=$9(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Ya(e){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:r}=e,l=_h(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:a,damping:c,mass:u,velocity:p,duration:d,isResolvedFromDuration:f}=M9(l),y=tp,h=tp;function v(){const _=p?-(p/1e3):0,x=n-t,C=c/(2*Math.sqrt(a*u)),b=Math.sqrt(a/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),C<1){const D=Xi(b,C);y=F=>{const T=Math.exp(-C*b*F);return n-T*((_+C*b*x)/D*Math.sin(D*F)+x*Math.cos(D*F))},h=F=>{const T=Math.exp(-C*b*F);return C*b*T*(Math.sin(D*F)*(_+C*b*x)/D+x*Math.cos(D*F))-T*(Math.cos(D*F)*(_+C*b*x)-D*x*Math.sin(D*F))}}else if(C===1)y=D=>n-Math.exp(-b*D)*(x+(_+b*x)*D);else{const D=b*Math.sqrt(C*C-1);y=F=>{const T=Math.exp(-C*b*F),L=Math.min(D*F,300);return n-T*((_+C*b*x)*Math.sinh(L)+D*x*Math.cosh(L))/D}}}return v(),{next:_=>{const x=y(_);if(f)i.done=_>=d;else{const C=h(_)*1e3,b=Math.abs(C)<=o,D=Math.abs(n-x)<=r;i.done=b&&D}return i.value=i.done?n:x,i},flipTarget:()=>{p=-p,[t,n]=[n,t],v()}}}Ya.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const tp=e=>0,bh=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},Ka=(e,t,n)=>-n*e+n*t+e,wh=(e,t)=>n=>Math.max(Math.min(n,t),e),Do=e=>e%1?Number(e.toFixed(5)):e,Yo=/(-)?([\d]*\.?[\d])+/g,Ji=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,j9=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function or(e){return typeof e=="string"}const rr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ao=Object.assign(Object.assign({},rr),{transform:wh(0,1)}),wr=Object.assign(Object.assign({},rr),{default:1}),Ga=e=>({test:t=>or(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Xn=Ga("deg"),So=Ga("%"),ge=Ga("px"),np=Object.assign(Object.assign({},So),{parse:e=>So.parse(e)/100,transform:e=>So.transform(e*100)}),Xa=(e,t)=>n=>!!(or(n)&&j9.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Ch=(e,t,n)=>o=>{if(!or(o))return o;const[r,l,i,a]=o.match(Yo);return{[e]:parseFloat(r),[t]:parseFloat(l),[n]:parseFloat(i),alpha:a!==void 0?parseFloat(a):1}},cs={test:Xa("hsl","hue"),parse:Ch("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+So.transform(Do(t))+", "+So.transform(Do(n))+", "+Do(Ao.transform(o))+")"},P9=wh(0,255),Zl=Object.assign(Object.assign({},rr),{transform:e=>Math.round(P9(e))}),Bn={test:Xa("rgb","red"),parse:Ch("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+Zl.transform(e)+", "+Zl.transform(t)+", "+Zl.transform(n)+", "+Do(Ao.transform(o))+")"};function L9(e){let t="",n="",o="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const Qi={test:Xa("#"),parse:L9,transform:Bn.transform},gt={test:e=>Bn.test(e)||Qi.test(e)||cs.test(e),parse:e=>Bn.test(e)?Bn.parse(e):cs.test(e)?cs.parse(e):Qi.parse(e),transform:e=>or(e)?e:e.hasOwnProperty("red")?Bn.transform(e):cs.transform(e)},kh="${c}",Eh="${n}";function V9(e){var t,n,o,r;return isNaN(e)&&or(e)&&((n=(t=e.match(Yo))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(o=e.match(Ji))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function xh(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(Ji);o&&(n=o.length,e=e.replace(Ji,kh),t.push(...o.map(gt.parse)));const r=e.match(Yo);return r&&(e=e.replace(Yo,Eh),t.push(...r.map(rr.parse))),{values:t,numColors:n,tokenised:e}}function Dh(e){return xh(e).values}function Ah(e){const{values:t,numColors:n,tokenised:o}=xh(e),r=t.length;return l=>{let i=o;for(let a=0;a<r;a++)i=i.replace(a<n?kh:Eh,a<n?gt.transform(l[a]):Do(l[a]));return i}}const R9=e=>typeof e=="number"?0:e;function N9(e){const t=Dh(e);return Ah(e)(t.map(R9))}const lr={test:V9,parse:Dh,createTransformer:Ah,getAnimatableNone:N9},H9=new Set(["brightness","contrast","saturate","opacity"]);function W9(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Yo)||[];if(!o)return e;const r=n.replace(o,"");let l=H9.has(t)?1:0;return o!==n&&(l*=100),t+"("+l+r+")"}const z9=/([a-z-]*)\(.*?\)/g,ea=Object.assign(Object.assign({},lr),{getAnimatableNone:e=>{const t=e.match(z9);return t?t.map(W9).join(" "):e}});function Yl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function sp({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let r=0,l=0,i=0;if(!t)r=l=i=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;r=Yl(c,a,e+1/3),l=Yl(c,a,e),i=Yl(c,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(l*255),blue:Math.round(i*255),alpha:o}}const q9=(e,t,n)=>{const o=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-o)+o))},U9=[Qi,Bn,cs],op=e=>U9.find(t=>t.test(e)),rp=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Sh=(e,t)=>{let n=op(e),o=op(t);Zo(!!n,rp(e)),Zo(!!o,rp(t));let r=n.parse(e),l=o.parse(t);n===cs&&(r=sp(r),n=Bn),o===cs&&(l=sp(l),o=Bn);const i=Object.assign({},r);return a=>{for(const c in i)c!=="alpha"&&(i[c]=q9(r[c],l[c],a));return i.alpha=Ka(r.alpha,l.alpha,a),n.transform(i)}},Z9=e=>typeof e=="number",Y9=(e,t)=>n=>t(e(n)),Fh=(...e)=>e.reduce(Y9);function $h(e,t){return Z9(e)?n=>Ka(e,t,n):gt.test(e)?Sh(e,t):Ih(e,t)}const Bh=(e,t)=>{const n=[...e],o=n.length,r=e.map((l,i)=>$h(l,t[i]));return l=>{for(let i=0;i<o;i++)n[i]=r[i](l);return n}},K9=(e,t)=>{const n=Object.assign(Object.assign({},e),t),o={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(o[r]=$h(e[r],t[r]));return r=>{for(const l in o)n[l]=o[l](r);return n}};function lp(e){const t=lr.parse(e),n=t.length;let o=0,r=0,l=0;for(let i=0;i<n;i++)o||typeof t[i]=="number"?o++:t[i].hue!==void 0?l++:r++;return{parsed:t,numNumbers:o,numRGB:r,numHSL:l}}const Ih=(e,t)=>{const n=lr.createTransformer(t),o=lp(e),r=lp(t);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?Fh(Bh(o.parsed,r.parsed),n):(Za(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i=>`${i>0?t:e}`)},G9=(e,t)=>n=>Ka(e,t,n);function X9(e){if(typeof e=="number")return G9;if(typeof e=="string")return gt.test(e)?Sh:Ih;if(Array.isArray(e))return Bh;if(typeof e=="object")return K9}function J9(e,t,n){const o=[],r=n||X9(e[0]),l=e.length-1;for(let i=0;i<l;i++){let a=r(e[i],e[i+1]);if(t){const c=Array.isArray(t)?t[i]:t;a=Fh(c,a)}o.push(a)}return o}function Q9([e,t],[n]){return o=>n(bh(e,t,o))}function eS(e,t){const n=e.length,o=n-1;return r=>{let l=0,i=!1;if(r<=e[0]?i=!0:r>=e[o]&&(l=o-1,i=!0),!i){let c=1;for(;c<n&&!(e[c]>r||c===o);c++);l=c-1}const a=bh(e[l],e[l+1],r);return t[l](a)}}function Th(e,t,{clamp:n=!0,ease:o,mixer:r}={}){const l=e.length;Zo(l===t.length,"Both input and output ranges must be the same length"),Zo(!o||!Array.isArray(o)||o.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=J9(t,o,r),a=l===2?Q9(e,i):eS(e,i);return n?c=>a(Gi(e[0],e[l-1],c)):a}const bl=e=>t=>1-e(1-t),Ja=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tS=e=>t=>Math.pow(t,e),Oh=e=>t=>t*t*((e+1)*t-e),nS=e=>{const t=Oh(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Mh=1.525,sS=4/11,oS=8/11,rS=9/10,jh=e=>e,Qa=tS(2),lS=bl(Qa),Ph=Ja(Qa),Lh=e=>1-Math.sin(Math.acos(e)),Vh=bl(Lh),iS=Ja(Vh),ec=Oh(Mh),aS=bl(ec),cS=Ja(ec),uS=nS(Mh),pS=4356/361,dS=35442/1805,fS=16061/1805,Jr=e=>{if(e===1||e===0)return e;const t=e*e;return e<sS?7.5625*t:e<oS?9.075*t-9.9*e+3.4:e<rS?pS*t-dS*e+fS:10.8*e*e-20.52*e+10.72},hS=bl(Jr),mS=e=>e<.5?.5*(1-Jr(1-e*2)):.5*Jr(e*2-1)+.5;function yS(e,t){return e.map(()=>t||Ph).splice(0,e.length-1)}function gS(e){const t=e.length;return e.map((n,o)=>o!==0?o/(t-1):0)}function vS(e,t){return e.map(n=>n*t)}function Br({from:e=0,to:t=1,ease:n,offset:o,duration:r=300}){const l={done:!1,value:e},i=Array.isArray(t)?t:[e,t],a=vS(o&&o.length===i.length?o:gS(i),r);function c(){return Th(a,i,{ease:Array.isArray(n)?n:yS(i,n)})}let u=c();return{next:p=>(l.value=u(p),l.done=p>=r,l),flipTarget:()=>{i.reverse(),u=c()}}}function _S({velocity:e=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:l}){const i={done:!1,value:t};let a=n*e;const c=t+a,u=l===void 0?c:l(c);return u!==c&&(a=u-t),{next:p=>{const d=-a*Math.exp(-p/o);return i.done=!(d>r||d<-r),i.value=i.done?u:u+d,i},flipTarget:()=>{}}}const ip={keyframes:Br,spring:Ya,decay:_S};function bS(e){if(Array.isArray(e.to))return Br;if(ip[e.type])return ip[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Br:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Ya:Br}function Rh(e,t,n=0){return e-t-n}function wS(e,t,n=0,o=!0){return o?Rh(t+-e,t,n):t-(e-t)+n}function CS(e,t,n,o){return o?e>=t+n:e<=-n}const kS=e=>{const t=({delta:n})=>e(n);return{start:()=>Ki.update(t,!0),stop:()=>E9.update(t)}};function Nh(e){var t,n,{from:o,autoplay:r=!0,driver:l=kS,elapsed:i=0,repeat:a=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:d,onComplete:f,onRepeat:y,onUpdate:h}=e,v=_h(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=v,x,C=0,b=v.duration,D,F=!1,T=!0,L;const S=bS(v);!((n=(t=S).needsInterpolation)===null||n===void 0)&&n.call(t,o,_)&&(L=Th([0,100],[o,_],{clamp:!1}),o=0,_=100);const V=S(Object.assign(Object.assign({},v),{from:o,to:_}));function G(){C++,c==="reverse"?(T=C%2===0,i=wS(i,b,u,T)):(i=Rh(i,b,u),c==="mirror"&&V.flipTarget()),F=!1,y&&y()}function ae(){x.stop(),f&&f()}function W(ye){if(T||(ye=-ye),i+=ye,!F){const we=V.next(Math.max(0,i));D=we.value,L&&(D=L(D)),F=T?we.done:i<=0}h==null||h(D),F&&(C===0&&(b??(b=i)),C<a?CS(i,b,u,T)&&G():ae())}function be(){p==null||p(),x=l(W),x.start()}return r&&be(),{stop:()=>{d==null||d(),x.stop()}}}function Hh(e,t){return t?e*(1e3/t):0}function ES({from:e=0,velocity:t=0,min:n,max:o,power:r=.8,timeConstant:l=750,bounceStiffness:i=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:d,onComplete:f,onStop:y}){let h;function v(b){return n!==void 0&&b<n||o!==void 0&&b>o}function _(b){return n===void 0?o:o===void 0||Math.abs(n-b)<Math.abs(o-b)?n:o}function x(b){h==null||h.stop(),h=Nh(Object.assign(Object.assign({},b),{driver:p,onUpdate:D=>{var F;d==null||d(D),(F=b.onUpdate)===null||F===void 0||F.call(b,D)},onComplete:f,onStop:y}))}function C(b){x(Object.assign({type:"spring",stiffness:i,damping:a,restDelta:c},b))}if(v(e))C({from:e,velocity:t,to:_(e)});else{let b=r*t+e;typeof u<"u"&&(b=u(b));const D=_(b),F=D===n?-1:1;let T,L;const S=V=>{T=L,L=V,t=Hh(V-T,vh().delta),(F===1&&V>D||F===-1&&V<D)&&C({from:V,to:D,velocity:t})};x({type:"decay",from:e,velocity:t,timeConstant:l,power:r,restDelta:c,modifyTarget:u,onUpdate:v(b)?S:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const Wh=(e,t)=>1-3*t+3*e,zh=(e,t)=>3*t-6*e,qh=e=>3*e,Qr=(e,t,n)=>((Wh(t,n)*e+zh(t,n))*e+qh(t))*e,Uh=(e,t,n)=>3*Wh(t,n)*e*e+2*zh(t,n)*e+qh(t),xS=1e-7,DS=10;function AS(e,t,n,o,r){let l,i,a=0;do i=t+(n-t)/2,l=Qr(i,o,r)-e,l>0?n=i:t=i;while(Math.abs(l)>xS&&++a<DS);return i}const SS=8,FS=.001;function $S(e,t,n,o){for(let r=0;r<SS;++r){const l=Uh(t,n,o);if(l===0)return t;const i=Qr(t,n,o)-e;t-=i/l}return t}const Ir=11,Cr=1/(Ir-1);function BS(e,t,n,o){if(e===t&&n===o)return jh;const r=new Float32Array(Ir);for(let i=0;i<Ir;++i)r[i]=Qr(i*Cr,e,n);function l(i){let a=0,c=1;const u=Ir-1;for(;c!==u&&r[c]<=i;++c)a+=Cr;--c;const p=(i-r[c])/(r[c+1]-r[c]),d=a+p*Cr,f=Uh(d,e,n);return f>=FS?$S(i,d,e,n):f===0?d:AS(i,a,a+Cr,e,n)}return i=>i===0||i===1?i:Qr(l(i),t,o)}const Kl={};class IS{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(this.subscriptions.size)for(const r of this.subscriptions)r(t,n,o)}clear(){this.subscriptions.clear()}}const ap=e=>!isNaN(parseFloat(e));class TS{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new IS,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:r}=vh();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),Ki.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ki.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=ap(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=ap(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Hh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function OS(e){return new TS(e)}const{isArray:MS}=Array;function jS(){const e=z({}),t=o=>{const r=l=>{e.value[l]&&(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};o?MS(o)?o.forEach(r):r(o):Object.keys(e.value).forEach(r)},n=(o,r,l)=>{if(e.value[o])return e.value[o];const i=OS(r);return i.onChange(a=>l[o]=a),e.value[o]=i,i};return s0(t),{motionValues:e,get:n,stop:t}}const PS=e=>Array.isArray(e),Jn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Gl=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),LS=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Xl=()=>({type:"keyframes",ease:"linear",duration:300}),VS=e=>({type:"keyframes",duration:800,values:e}),cp={default:LS,x:Jn,y:Jn,z:Jn,rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scaleX:Gl,scaleY:Gl,scale:Gl,backgroundColor:Xl,color:Xl,opacity:Xl},Zh=(e,t)=>{let n;return PS(t)?n=VS:n=cp[e]||cp.default,{to:t,...n(t)}},up={...rr,transform:Math.round},Yh={color:gt,backgroundColor:gt,outlineColor:gt,fill:gt,stroke:gt,borderColor:gt,borderTopColor:gt,borderRightColor:gt,borderBottomColor:gt,borderLeftColor:gt,borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,radius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,size:ge,top:ge,right:ge,bottom:ge,left:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,rotate:Xn,rotateX:Xn,rotateY:Xn,rotateZ:Xn,scale:wr,scaleX:wr,scaleY:wr,scaleZ:wr,skew:Xn,skewX:Xn,skewY:Xn,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:Ao,originX:np,originY:np,originZ:ge,zIndex:up,filter:ea,WebkitFilter:ea,fillOpacity:Ao,strokeOpacity:Ao,numOctaves:up},tc=e=>Yh[e],Kh=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function RS(e,t){let n=tc(e);return n!==ea&&(n=lr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const NS={linear:jh,easeIn:Qa,easeInOut:Ph,easeOut:lS,circIn:Lh,circInOut:iS,circOut:Vh,backIn:ec,backInOut:cS,backOut:aS,anticipate:uS,bounceIn:hS,bounceInOut:mS,bounceOut:Jr},pp=e=>{if(Array.isArray(e)){const[t,n,o,r]=e;return BS(t,n,o,r)}else if(typeof e=="string")return NS[e];return e},HS=e=>Array.isArray(e)&&typeof e[0]!="number",dp=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&lr.test(t)&&!t.startsWith("url("));function WS(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function zS({ease:e,times:t,delay:n,...o}){const r={...o};return t&&(r.offset=t),e&&(r.ease=HS(e)?e.map(pp):pp(e)),n&&(r.elapsed=-n),r}function qS(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),WS(t),US(e)||(e={...e,...Zh(n,t.to)}),{...t,...zS(e)}}function US({delay:e,repeat:t,repeatType:n,repeatDelay:o,from:r,...l}){return!!Object.keys(l).length}function ZS(e,t){return e[t]||e.default||e}function YS(e,t,n,o,r){const l=ZS(o,e);let i=l.from===null||l.from===void 0?t.get():l.from;const a=dp(e,n);i==="none"&&a&&typeof n=="string"&&(i=RS(e,n));const c=dp(e,i);function u(d){const f={from:i,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:y=>t.set(y)};return l.type==="inertia"||l.type==="decay"?ES({...f,...l}):Nh({...qS(l,f,e),onUpdate:y=>{f.onUpdate(y),l.onUpdate&&l.onUpdate(y)},onComplete:()=>{o.onComplete&&o.onComplete(),r&&r(),d&&d()}})}function p(d){return t.set(n),o.onComplete&&o.onComplete(),r&&r(),d&&d(),{stop:()=>{}}}return!c||!a||l.type===!1?p:u}function KS(){const{motionValues:e,stop:t,get:n}=jS();return{motionValues:e,stop:t,push:(r,l,i,a={},c)=>{const u=i[r],p=n(r,u,i);if(a&&a.immediate){p.set(l);return}const d=YS(r,p,l,a,c);p.start(d)}}}function GS(e,t={},{motionValues:n,push:o,stop:r}=KS()){const l=E(t),i=z(!1);ve(n,d=>{i.value=Object.values(d).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const a=d=>{if(!l||!l[d])throw new Error(`The variant ${d} does not exist.`);return l[d]},c=d=>(typeof d=="string"&&(d=a(d)),Promise.all(Object.entries(d).map(([f,y])=>{if(f!=="transition")return new Promise(h=>o(f,y,e,d.transition||Zh(f,d[f]),h))}).filter(Boolean)));return{isAnimating:i,apply:c,set:d=>{const f=Ci(d)?d:a(d);Object.entries(f).forEach(([y,h])=>{y!=="transition"&&o(y,h,e,{immediate:!0})})},leave:async d=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){d();return}await c(f),d()},stop:r}}const nc=typeof window<"u",XS=()=>nc&&window.onpointerdown===null,JS=()=>nc&&window.ontouchstart===null,QS=()=>nc&&window.onmousedown===null;function eF({target:e,state:t,variants:n,apply:o}){const r=E(n),l=z(!1),i=z(!1),a=z(!1),c=$(()=>{let p=[];return r&&(r.hovered&&(p=[...p,...Object.keys(r.hovered)]),r.tapped&&(p=[...p,...Object.keys(r.tapped)]),r.focused&&(p=[...p,...Object.keys(r.focused)])),p}),u=$(()=>{const p={};Object.assign(p,t.value),l.value&&r.hovered&&Object.assign(p,r.hovered),i.value&&r.tapped&&Object.assign(p,r.tapped),a.value&&r.focused&&Object.assign(p,r.focused);for(const d in p)c.value.includes(d)||delete p[d];return p});r.hovered&&(_e(e,"mouseenter",()=>l.value=!0),_e(e,"mouseleave",()=>{l.value=!1,i.value=!1}),_e(e,"mouseout",()=>{l.value=!1,i.value=!1})),r.tapped&&(QS()&&(_e(e,"mousedown",()=>i.value=!0),_e(e,"mouseup",()=>i.value=!1)),XS()&&(_e(e,"pointerdown",()=>i.value=!0),_e(e,"pointerup",()=>i.value=!1)),JS()&&(_e(e,"touchstart",()=>i.value=!0),_e(e,"touchend",()=>i.value=!1))),r.focused&&(_e(e,"focus",()=>a.value=!0),_e(e,"blur",()=>a.value=!1)),ve(u,o)}function tF({set:e,target:t,apply:n,variants:o,variant:r}){const l=E(o);ve(()=>t,()=>{l&&(l.initial&&e("initial"),l.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function nF({state:e,apply:t}){ve(e,n=>{n&&t(n)},{immediate:!0})}function sF({target:e,variants:t,variant:n}){const o=E(t);o&&(o.visible||o.visibleOnce)&&Q0(e,([{isIntersecting:r}])=>{o.visible?r?n.value="visible":n.value="initial":o.visibleOnce&&(r&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function oF(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&tF(e),t.syncVariants&&nF(e),t.visibilityHooks&&sF(e),t.eventListeners&&eF(e)}function Gh(e={}){const t=ze({...e}),n=z({});return ve(t,()=>{const o={};for(const[r,l]of Object.entries(t)){const i=tc(r),a=Kh(l,i);o[r]=a}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}function sc(e,t){ve(()=>Ft(e),n=>{n&&t(n)},{immediate:!0})}const rF={x:"translateX",y:"translateY",z:"translateZ"};function Xh(e={},t=!0){const n=ze({...e}),o=z("");return ve(n,r=>{let l="",i=!1;if(t&&(r.x||r.y||r.z)){const a=[r.x||0,r.y||0,r.z||0].map(ge.transform).join(",");l+=`translate3d(${a}) `,i=!0}for(const[a,c]of Object.entries(r)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const u=tc(a),p=Kh(c,u);l+=`${rF[a]||a}(${p}) `}t&&!i&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}const lF=["","X","Y","Z"],iF=["perspective","translate","scale","rotate","skew"],Jh=["transformPerspective","x","y","z"];iF.forEach(e=>{lF.forEach(t=>{const n=e+t;Jh.push(n)})});const aF=new Set(Jh);function oc(e){return aF.has(e)}const cF=new Set(["originX","originY","originZ"]);function Qh(e){return cF.has(e)}function uF(e){const t={},n={};return Object.entries(e).forEach(([o,r])=>{oc(o)||Qh(o)?t[o]=r:n[o]=r}),{transform:t,style:n}}function em(e){const{transform:t,style:n}=uF(e),{transform:o}=Xh(t),{style:r}=Gh(n);return o.value&&(r.value.transform=o.value),r.value}function pF(e,t){let n,o;const{state:r,style:l}=Gh();return sc(e,i=>{o=i;for(const a of Object.keys(Yh))i.style[a]===null||i.style[a]===""||oc(a)||Qh(a)||(r[a]=i.style[a]);n&&Object.entries(n).forEach(([a,c])=>i.style[a]=c),t&&t(r)}),ve(l,i=>{if(!o){n=i;return}for(const a in i)o.style[a]=i[a]},{immediate:!0}),{style:r}}function dF(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,r)=>{if(!r)return o;const[l,i]=r.split("("),c=i.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...o,[l]:u}},{})}function fF(e,t){Object.entries(dF(t)).forEach(([n,o])=>{const r=["x","y","z"];if(n==="translate3d"){if(o===0){r.forEach(l=>e[l]=0);return}o.forEach((l,i)=>e[r[i]]=l);return}if(o=parseFloat(o),n==="translateX"){e.x=o;return}if(n==="translateY"){e.y=o;return}if(n==="translateZ"){e.z=o;return}e[n]=o})}function hF(e,t){let n,o;const{state:r,transform:l}=Xh();return sc(e,i=>{o=i,i.style.transform&&fF(r,i.style.transform),n&&(i.style.transform=n),t&&t(r)}),ve(l,i=>{if(!o){n=i;return}o.style.transform=i},{immediate:!0}),{transform:r}}function mF(e,t){const n=ze({}),o=i=>Object.entries(i).forEach(([a,c])=>n[a]=c),{style:r}=pF(e,o),{transform:l}=hF(e,o);return ve(n,i=>{Object.entries(i).forEach(([a,c])=>{const u=oc(a)?l:r;u[a]&&u[a]===c||(u[a]=c)})},{immediate:!0,deep:!0}),sc(e,()=>t&&o(t)),{motionProperties:n,style:r,transform:l}}function yF(e={}){const t=E(e),n=z();return{state:$(()=>{if(n.value)return t[n.value]}),variant:n}}function tm(e,t={},n){const{motionProperties:o}=mF(e),{variant:r,state:l}=yF(t),i=GS(o,t),a={target:e,variant:r,variants:t,state:l,motionProperties:o,...i};return oF(a,n),a}const gF=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],vF=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Ci(n.variants)&&(t.value={...t.value,...n.variants}),gF.forEach(o=>{if(o==="delay"){if(n&&n[o]&&N1(n[o])){const r=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&Ci(n[o])&&(t.value[o]=n[o])}))},Jl=e=>({created:(n,o,r)=>{const l=o.value&&typeof o.value=="string"?o.value:r.key;l&&Kl[l]&&Kl[l].stop();const i=z(e||{});typeof o.value=="object"&&(i.value=o.value),vF(r,i);const a=tm(n,i);n.motionInstance=a,l&&(Kl[l]=a)},getSSRProps(n,o){let{initial:r}=n.value||o&&(o==null?void 0:o.props)||{};r=E(r);const l=b9((e==null?void 0:e.initial)||{},r||{});return!l||Object.keys(l).length===0?void 0:{style:em(l)}}}),_F={initial:{opacity:0},enter:{opacity:1}},bF={initial:{opacity:0},visible:{opacity:1}},wF={initial:{opacity:0},visibleOnce:{opacity:1}},CF={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},kF={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},EF={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},xF={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},DF={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},AF={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},SF={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},FF={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},$F={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},BF={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},IF={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},TF={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},OF={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},MF={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},jF={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},PF={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},LF={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},VF={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},RF={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},NF={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},HF={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},WF={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},zF={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},qF={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},UF={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},ZF={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},YF={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ta={__proto__:null,fade:_F,fadeVisible:bF,fadeVisibleOnce:wF,pop:CF,popVisible:kF,popVisibleOnce:EF,rollBottom:OF,rollLeft:xF,rollRight:SF,rollTop:BF,rollVisibleBottom:MF,rollVisibleLeft:DF,rollVisibleOnceBottom:jF,rollVisibleOnceLeft:AF,rollVisibleOnceRight:$F,rollVisibleOnceTop:TF,rollVisibleRight:FF,rollVisibleTop:IF,slideBottom:UF,slideLeft:PF,slideRight:RF,slideTop:WF,slideVisibleBottom:ZF,slideVisibleLeft:LF,slideVisibleOnceBottom:YF,slideVisibleOnceLeft:VF,slideVisibleOnceRight:HF,slideVisibleOnceTop:qF,slideVisibleRight:NF,slideVisibleTop:zF},KF=Te({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var a;const t=Pg(),n=ze({});if(!e.is&&!t.default)return()=>wt("div",{});const o=$(()=>{let c;return e.preset&&(c=ta[e.preset]),c}),r=$(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=$(()=>{const c={...r.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),i=$(()=>{if(!e.is)return;let c=e.is;return typeof i.value=="string"&&!Ap(c)&&(c=Nr(c)),c});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var p;(p=u.variants)!=null&&p.initial&&u.set("initial"),setTimeout(()=>{var d,f,y;(d=u.variants)!=null&&d.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(y=u.variants)!=null&&y.visibleOnce&&u.apply("visibleOnce")},10)};dl(()=>Object.entries(n).forEach(([u,p])=>c(p)))}return{slots:t,component:i,motionConfig:l,instances:n}},render({slots:e,motionConfig:t,instances:n,component:o}){var a;const r=em(t.initial||{}),l=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:p})=>{const d=tm(p,t);n[u]=d},c);if(o){const c=wt(o,void 0,e);return l(c,0),c}return(((a=e.default)==null?void 0:a.call(e))||[]).map((c,u)=>l(c,u))}});function GF(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(o,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const XF={install(e,t){if(e.directive("motion",Jl()),e.component("Motion",KF),!t||t&&!t.excludePresets)for(const n in ta){const o=ta[n];e.directive(`motion-${GF(n)}`,Jl(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,e.directive(`motion-${n}`,Jl(o))}}};var fp;const Fo=typeof window<"u",JF=Object.prototype.toString,QF=e=>JF.call(e)==="[object Object]";Fo&&((fp=window==null?void 0:window.navigator)!=null&&fp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function e$(e){return ia()?(jp(e),!0):!1}function t$(e){var t;const n=E(e);return(t=n==null?void 0:n.$el)!=null?t:n}const n$=Fo?window:void 0,hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mp="__vueuse_ssr_handlers__";hp[mp]=hp[mp]||{};function s$(e,t={}){const{immediate:n=!0,window:o=n$}=t,r=z(!1);let l=null;function i(){!r.value||!o||(e(),l=o.requestAnimationFrame(i))}function a(){!r.value&&o&&(r.value=!0,i())}function c(){r.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return n&&a(),e$(c),{isActive:r,pause:c,resume:a}}var yp;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(yp||(yp={}));const wl="vue-starport-injection",nm="vue-starport-options",o$={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},sm={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var r$=Object.defineProperty,el=Object.getOwnPropertySymbols,om=Object.prototype.hasOwnProperty,rm=Object.prototype.propertyIsEnumerable,gp=(e,t,n)=>t in e?r$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l$=(e,t)=>{for(var n in t||(t={}))om.call(t,n)&&gp(e,n,t[n]);if(el)for(var n of el(t))rm.call(t,n)&&gp(e,n,t[n]);return e},vp=(e,t)=>{var n={};for(var o in e)om.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&el)for(var o of el(e))t.indexOf(o)<0&&rm.call(e,o)&&(n[o]=e[o]);return n};const i$=Te({name:"StarportProxy",props:l$({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},sm),setup(e,t){const n=Y(wl),o=$(()=>n.getInstance(e.port,e.component)),r=z(),l=o.value.generateId(),i=z(!1);return o.value.isVisible||(o.value.land(),i.value=!0),Cs(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=r.value,await it(),i.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const a=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${a} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Qo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,i.value=!1,!o.value.options.keepAlive&&(await it(),await it(),!o.value.el&&n.dispose(o.value.port))}),ve(()=>e,async()=>{o.value.props&&await it();const a=e,{props:c}=a,u=vp(a,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const a=e,{initialProps:c,mountedProps:u}=a,p=vp(a,["initialProps","mountedProps"]),d=Xe(p,(i.value?u:c)||{});return wt("div",Xe(d,{id:l,ref:r,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?wt(t.slots.default):void 0)}}});var a$=Object.defineProperty,c$=Object.defineProperties,u$=Object.getOwnPropertyDescriptors,_p=Object.getOwnPropertySymbols,p$=Object.prototype.hasOwnProperty,d$=Object.prototype.propertyIsEnumerable,bp=(e,t,n)=>t in e?a$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f$=(e,t)=>{for(var n in t||(t={}))p$.call(t,n)&&bp(e,n,t[n]);if(_p)for(var n of _p(t))d$.call(t,n)&&bp(e,n,t[n]);return e},h$=(e,t)=>c$(e,u$(t));const m$=Te({name:"Starport",inheritAttrs:!0,props:sm,setup(e,t){const n=z(!1);return Cs(()=>{if(n.value=!0,!Y(wl))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var i,a;const o=(a=(i=t.slots).default)==null?void 0:a.call(i);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const r=o[0];let l=r.type;return(!QF(l)||Hn(l))&&(l={render(){return o}}),wt(i$,h$(f$({},e),{key:e.port,component:ll(l),props:r.props}))}}});function y$(e){const t=ze({height:0,width:0,left:0,top:0,update:o,listen:l,pause:i,margin:"0px",padding:"0px"}),n=Fo?document.documentElement||document.body:void 0;function o(){if(!Fo)return;const a=t$(e);if(!a)return;const{height:c,width:u,left:p,top:d}=a.getBoundingClientRect(),f=window.getComputedStyle(a),y=f.margin,h=f.padding;Object.assign(t,{height:c,width:u,left:p,top:n.scrollTop+d,margin:y,padding:h})}const r=s$(o,{immediate:!1});function l(){Fo&&(o(),r.resume())}function i(){r.pause()}return t}let g$=(e,t=21)=>(n=t)=>{let o="",r=n;for(;r--;)o+=e[Math.random()*e.length|0];return o};const wp=g$("abcdefghijklmnopqrstuvwxyz",5);function Cp(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function v$(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var _$=Object.defineProperty,kp=Object.getOwnPropertySymbols,b$=Object.prototype.hasOwnProperty,w$=Object.prototype.propertyIsEnumerable,Ep=(e,t,n)=>t in e?_$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ql=(e,t)=>{for(var n in t||(t={}))b$.call(t,n)&&Ep(e,n,t[n]);if(kp)for(var n of kp(t))w$.call(t,n)&&Ep(e,n,t[n]);return e};function C$(e,t,n={}){const o=v$(t),r=Cp(o)||wp(),l=z(),i=z(null),a=z(!1),c=z(!1),u=km(!0),p=z({}),d=$(()=>Ql(Ql(Ql({},o$),n),p.value)),f=z(0);let y;u.run(()=>{y=y$(l),ve(l,async x=>{x&&(c.value=!0),await it(),l.value||(c.value=!1)})});const h=Cp(e);function v(){return`starport-${r}-${h}-${wp()}`}const _=v();return ze({el:l,id:_,port:e,props:i,rect:y,scope:u,isLanded:a,isVisible:c,options:d,liftOffTime:f,component:t,componentName:o,componentId:r,generateId:v,setLocalOptions(x={}){p.value=JSON.parse(JSON.stringify(x))},elRef(){return l},liftOff(){a.value&&(a.value=!1,f.value=Date.now(),y.listen())},land(){a.value||(a.value=!0,y.pause())}})}function k$(e){const t=ze(new Map);function n(r,l){let i=t.get(r);return i||(i=C$(r,l,e),t.set(r,i)),i.component=l,i}function o(r){var l;(l=t.get(r))==null||l.scope.stop(),t.delete(r)}return{portMap:t,dispose:o,getInstance:n}}var E$=Object.defineProperty,x$=Object.defineProperties,D$=Object.getOwnPropertyDescriptors,xp=Object.getOwnPropertySymbols,A$=Object.prototype.hasOwnProperty,S$=Object.prototype.propertyIsEnumerable,Dp=(e,t,n)=>t in e?E$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F$=(e,t)=>{for(var n in t||(t={}))A$.call(t,n)&&Dp(e,n,t[n]);if(xp)for(var n of xp(t))S$.call(t,n)&&Dp(e,n,t[n]);return e},$$=(e,t)=>x$(e,D$(t));const B$=Te({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=Y(wl);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=$(()=>t.getInstance(e.port,e.component)),o=$(()=>{var i;return((i=n.value.el)==null?void 0:i.id)||n.value.id}),r=$(()=>{const i=Date.now()-n.value.liftOffTime,a=Math.max(0,n.value.options.duration-i),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?$$(F$({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${a}ms`,transitionTimingFunction:n.value.options.easing}),u)}),l={onTransitionend(i){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${i.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const i=!!(n.value.isLanded&&n.value.el);return wt("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},wt(kg,{to:i?`#${o.value}`:"body",disabled:!i},wt(n.value.component,Xe(l,n.value.props))))}}}),I$=Te({name:"StarportCarrier",setup(e,{slots:t}){const n=k$(Y(nm,{}));return It().appContext.app.provide(wl,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([l,{component:i}])=>wt(B$,{key:l,port:l,component:i}))]}}});function T$(e={}){return{install(t){t.provide(nm,e),t.component("Starport",m$),t.component("StarportCarrier",I$)}}}function O$(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(XF),e.app.use(T$({keepAlive:!0})),v9(e)}function Et(e,t,n){var o;return((o=e.instance)==null?void 0:o.$).provides[t]??n}function M$(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var p,d,f,y,h,v;if(xo.value||(p=Et(n,wo))!=null&&p.value)return;const o=Et(n,os),r=Et(n,bo),l=Et(n,bi),i=n.modifiers.hide!==!1&&n.modifiers.hide!=null,a=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((d=o==null?void 0:o.value)==null?void 0:d.length)||0,u=a?b1:Ol;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),n.value==null&&(n.value=(y=o==null?void 0:o.value)==null?void 0:y.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((h=o==null?void 0:o.value)==null?void 0:h.length)||0)+Number(n.value)),!(l!=null&&l.value.has(n.value)))l==null||l.value.set(n.value,[t]);else if(!((v=l==null?void 0:l.value.get(n.value))!=null&&v.includes(t))){const _=(l==null?void 0:l.value.get(n.value))||[];l==null||l.value.set(n.value,[t].concat(_))}t==null||t.classList.toggle(ts,!0),r&&ve(r,()=>{const _=(r==null?void 0:r.value)??0,x=n.value!=null?_>=n.value:_>c;t.classList.contains(Ml)||t.classList.toggle(u,!x),i!==!1&&i!==void 0&&t.classList.toggle(u,x),t.classList.toggle(so,!1);const C=l==null?void 0:l.value.get(_);C==null||C.forEach((b,D)=>{b.classList.toggle(gr,!1),D===C.length-1?b.classList.toggle(so,!0):b.classList.toggle(gr,!0)}),t.classList.contains(so)||t.classList.toggle(gr,x)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(ts,!1);const o=Et(n,os);o!=null&&o.value&&wi(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var a,c,u;if(xo.value||(a=Et(n,wo))!=null&&a.value)return;const o=Et(n,os),r=Et(n,bo),l=Et(n,bi),i=o==null?void 0:o.value.length;n.value==null&&(n.value=o==null?void 0:o.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((c=o==null?void 0:o.value)==null?void 0:c.length)||0)+Number(n.value)),l!=null&&l.value.has(n.value)?(u=l==null?void 0:l.value.get(n.value))==null||u.push(t):l==null||l.value.set(n.value,[t]),t==null||t.classList.toggle(ts,!0),r&&ve(r,()=>{const p=(r.value??0)>=(n.value??i??0);t.classList.contains(Ml)||t.classList.toggle(Ol,!p),t.classList.toggle(so,!1),t.classList.contains(so)||t.classList.toggle(gr,p)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(ts,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var i,a,c;if(xo.value||(i=Et(n,wo))!=null&&i.value)return;const o=Et(n,os),r=Et(n,bo),l=((a=o==null?void 0:o.value)==null?void 0:a.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(ts,!0),r&&ve(r,()=>{const u=(r==null?void 0:r.value)??0,p=n.value!=null?u>=n.value:u>l;t.classList.toggle(Ol,p),t.classList.toggle(Ml,p)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(ts,!1);const o=Et(n,os);o!=null&&o.value&&wi(o.value,t)}})}}}function j$(e,t){const n=ch(e),o=uh(t,n.currentRoute,n.currentPage);return{nav:{...n,...o},configs:Se,themeConfigs:$(()=>Se.themeConfig)}}function P$(){return{install(e){const t=j$(Vt,jt);e.provide(te,ze(t))}}}const Xs=wv(h9);Xs.use(bt);Xs.use(g1());Xs.use(M$());Xs.use(P$());O$({app:Xs,router:bt});Xs.mount("#app");export{Z3 as $,p3 as A,z as B,N$ as C,ft as D,We as E,$e as F,Iw as G,i9 as H,jt as I,Xr as J,n9 as K,zl as L,Cs as M,ze as N,V$ as O,H$ as P,ve as Q,ne as R,Hf as S,Be as T,dt as U,qw as V,qn as W,Un as X,No as Y,Nl as Z,se as _,te as a,Oa as a0,Ma as a1,Ye as a2,H3 as a3,U2 as a4,L$ as a5,Lt as a6,uo as a7,as as a8,nn as a9,Mi as aa,_w as ab,bw as ac,ww as ad,kw as ae,Pe as af,Yd as ag,W$ as ah,mt as ai,br as aj,AC as ak,sf as al,Ew as am,Qo as an,xa as b,Se as c,Te as d,iy as e,I as f,s as g,E as h,Y as i,Ge as j,J5 as k,m as l,U as m,at as n,k as o,ce as p,Aa as q,Us as r,Kt as s,et as t,R$ as u,$ as v,jl as w,Q as x,Of as y,y3 as z};
