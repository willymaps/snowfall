function b(){}const lt=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function I(){return Object.create(null)}function x(t){t.forEach(Q)}function F(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Bt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function at(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ht(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Lt(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Wt(t,e,n,i,r,l){if(r){const s=U(e,n,i,l);t.p(s,r)}}function Gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const V=typeof window<"u";let _t=V?()=>window.performance.now():()=>Date.now(),W=V?t=>requestAnimationFrame(t):b;const $=new Set;function X(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&W(X)}function dt(t){let e;return $.size===0&&W(X),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let O=!1;function ht(){O=!0}function mt(){O=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:pt(1,r,h=>e[n[h]].claim_order,u))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,r=Math.max(a,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(s[c],_)}}function gt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=tt("style");return bt(Y(t),e),e.sheet}function bt(t,e){return gt(t.head||t,e),e.sheet}function xt(t,e){if(O){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){O&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Jt(){return G(" ")}function Kt(){return G("")}function Qt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ut(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:vt(t,e,n)}function Et(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){Nt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function nt(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Vt(t,e,n){return nt(t,e,n,tt)}function Xt(t,e,n){return nt(t,e,n,wt)}function At(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function Yt(t){return At(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ee(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ne(t,e){return new t(e)}const j=new Map;let M=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:$t(e),rules:{}};return j.set(t,n),n}function J(t,e,n,i,r,l,s,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${s(g,1-g)}}
`}const _=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Ct(_)}_${o}`,h=Y(t),{stylesheet:f,rules:d}=j.get(h)||St(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function kt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Dt())}function Dt(){W(()=>{M||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),j.clear())})}let N;function E(t){N=t}function A(){if(!N)throw new Error("Function called outside component initialization");return N}function ie(t){A().$$.on_mount.push(t)}function re(t){A().$$.after_update.push(t)}function se(t){A().$$.on_destroy.push(t)}function oe(){const t=A();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=it(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function ce(t,e){return A().$$.context.set(t,e),e}const v=[],K=[],D=[],H=[],rt=Promise.resolve();let L=!1;function st(){L||(L=!0,rt.then(ot))}function le(){return st(),rt}function P(t){D.push(t)}function ue(t){H.push(t)}const z=new Set;let k=0;function ot(){const t=N;do{for(;k<v.length;){const e=v[k];k++,E(e),Tt(e.$$)}for(E(null),v.length=0,k=0;K.length;)K.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];z.has(n)||(z.add(n),n())}D.length=0}while(v.length);for(;H.length;)H.pop()();L=!1,z.clear(),E(t)}function Tt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let w;function jt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function B(t,e,n){t.dispatchEvent(it(`${e?"intro":"outro"}${n}`))}const T=new Set;let p;function ae(){p={r:0,c:[],p}}function fe(){p.r||x(p.c),p=p.p}function Mt(t,e){t&&t.i&&(T.delete(t),t.i(e))}function _e(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),p.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Pt={duration:0};function de(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,o=null,c=null,u=null;function _(){u&&kt(t,u)}function a(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=lt,tick:g=b,css:R}=l||Pt,q={start:_t()+d,b:f};f||(q.group=p,p.r+=1),o||c?c=q:(R&&(_(),u=J(t,s,f,m,d,y,R)),f&&g(0,1),o=a(q,m),P(()=>B(t,f,"start")),dt(C=>{if(c&&C>c.start&&(o=a(c,m),c=null,B(t,o.b,"start"),R&&(_(),u=J(t,s,o.b,o.duration,0,y,l.css))),o){if(C>=o.end)g(s=o.b,1-s),B(t,o.b,"end"),c||(o.b?_():--o.group.r||x(o.group.c)),o=null;else if(C>=o.start){const ct=C-o.start;s=o.a+o.d*y(ct/o.duration),g(s,1-s)}}return!!(o||c)}))}return{run(f){F(l)?jt().then(()=>{l=l(r),h(f)}):h(f)},end(){_(),o=c=null}}}const he=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function me(t,e,n,i){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,i===void 0&&n(t.$$.ctx[r]))}function pe(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||P(()=>{const s=t.$$.on_mount.map(Q).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...s):x(s),t.$$.on_mount=[]}),l.forEach(P)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(v.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,r,l,s,o=[-1]){const c=N;E(t);const u=t.$$={fragment:null,ctx:[],props:l,update:b,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&qt(t,a)),h}):[],u.update(),_=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ht();const a=Et(e.target);u.fragment&&u.fragment.l(a),a.forEach(Z)}else u.fragment&&u.fragment.c();e.intro&&Mt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),mt(),ot()}E(c)}class $e{$destroy(){Rt(this,1),this.$destroy=b}$on(e,n){if(!F(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{le as A,b as B,Bt as C,xt as D,Lt as E,Wt as F,Gt as G,Ft as H,Ht as I,P as J,Ut as K,Qt as L,he as M,K as N,lt as O,ee as P,de as Q,oe as R,$e as S,ce as T,se as U,me as V,ue as W,wt as X,Xt as Y,Jt as a,It as b,Yt as c,fe as d,Kt as e,Mt as f,ae as g,Z as h,ge as i,re as j,tt as k,Vt as l,Et as m,vt as n,ie as o,te as p,G as q,At as r,zt as s,_e as t,Zt as u,ne as v,pe as w,ye as x,Ot as y,Rt as z};
