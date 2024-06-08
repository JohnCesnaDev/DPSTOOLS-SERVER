import{j as o,k as F,l as v,n as V,u as fe,p as ve,q as N,s as ge,t as me,v as ae,x as he,r as H,y as be,z as ye,A as P,B as ke,T as pe,C as xe}from"./index.b82d1154.js";import{h as qe,a as z}from"./render.6176833f.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function ie(e,t=Q){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const U="0 0 24 24",W=e=>e,I=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":I,"ion-ios":I,"ion-logo":I,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},le={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},$e=new RegExp("^("+Object.keys(ue).join("|")+")"),Ee=new RegExp("^("+Object.keys(le).join("|")+")"),X=new RegExp("^("+Object.keys(se).join("|")+")"),Se=/^[Mm]\s?[-+]?\.?\d/,we=/^img:/,Re=/^svguse:/,Be=/^ion-/,Ce=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Y=F({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=V(),n=ie(e),l=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=o(()=>{let c,i=e.name;if(i==="none"||!i)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(i);if(s!==void 0)if(s.icon!==void 0){if(i=s.icon,i==="none"||!i)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Se.test(i)===!0){const[s,y=U]=i.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[k,h,p]=u.split("@@");return v("path",{style:h,d:k,transform:p})})}}if(we.test(i)===!0)return{img:!0,src:i.substring(4)};if(Re.test(i)===!0){const[s,y=U]=i.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const b=i.match($e);if(b!==null)c=ue[b[1]](i);else if(Ce.test(i)===!0)c=i;else if(Be.test(i)===!0)c=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(X.test(i)===!0){c="notranslate material-symbols";const s=i.match(X);s!==null&&(i=i.substring(6),c+=se[s[1]]),q=i}else{c="notranslate material-icons";const s=i.match(Ee);s!==null&&(i=i.substring(2),c+=le[s[1]]),q=i}return{cls:c,content:q}});return()=>{const c={class:l.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,qe(t.default)):f.value.img===!0?v(e.tag,c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}});const Le={size:{type:[String,Number],default:"1em"},color:String};function _e(e){return{cSize:o(()=>e.size in Q?`${Q[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Pe=F({name:"QSpinner",props:{...Le,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=_e(e);return()=>v("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Te(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function Ze(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=fe(e);if(t)return t.$el||t}function et(e,t){if(e==null||e.contains(t)===!0)return!0;for(let a=e.nextElementSibling;a!==null;a=a.nextElementSibling)if(a.contains(t))return!0;return!1}function Oe(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function G(e,t,a,n){a.modifiers.stop===!0&&ae(e);const l=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),i=document.createElement("span"),q=he(e),{left:b,top:s,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),h=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-b-h}px`,x=`${(u-k)/2}px`,_=f?x:`${q.top-s-h}px`;i.className="q-ripple__inner",Te(i,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${_},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${l?" text-"+l:""}`,c.setAttribute("dir","ltr"),c.appendChild(i),t.appendChild(c);const C=()=>{c.remove(),clearTimeout(L)};a.abort.push(C);let L=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,i.style.opacity=.2,L=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,L=setTimeout(()=>{c.remove(),a.abort.splice(a.abort.indexOf(C),1)},275)},250)},50)}function J(e,{modifiers:t,value:a,arg:n}){const l=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}var Ae=ve({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&G(l,e,n,l.qKeyEvent===!0)},keystart:Oe(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&N(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&G(l,e,n,!0)},300)};J(n,t),e.__qripple=n,ge(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&J(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),me(t,"main"),delete e._qripple)}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},je=Object.keys(oe),Me={align:{type:String,validator:e=>je.includes(e)}};function ze(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function tt(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function Ke(e){return e.appContext.config.globalProperties.$router!==void 0}function nt(e){return e.isUnmounted===!0||e.isDeactivated===!0}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function De(e,t){for(const a in t){const n=t[a],l=e[a];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((f,c)=>f!==l[c]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Ie(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ne(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Ie(e[a],t[a])===!1)return!1;return!0}const ce={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},at={...ce,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Qe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=V(),{props:n,proxy:l,emit:f}=a,c=Ke(a),i=o(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?o(()=>c===!0&&n.disable!==!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>c===!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),b=o(()=>q.value===!0?_(n.to):null),s=o(()=>b.value!==null),y=o(()=>i.value===!0||s.value===!0),u=o(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=o(()=>i.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:b.value.href,target:n.target}:{}),h=o(()=>{if(s.value===!1)return-1;const{matched:g}=b.value,{length:$}=g,S=g[$-1];if(S===void 0)return-1;const R=l.$route.matched;if(R.length===0)return-1;const B=R.findIndex(ee.bind(null,S));if(B!==-1)return B;const K=Z(g[$-2]);return $>1&&Z(S)===K&&R[R.length-1].path!==K?R.findIndex(ee.bind(null,g[$-2])):B}),p=o(()=>s.value===!0&&h.value!==-1&&De(l.$route.params,b.value.params)),d=o(()=>p.value===!0&&h.value===l.$route.matched.length-1&&Ne(l.$route.params,b.value.params)),x=o(()=>s.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(g){try{return l.$router.resolve(g)}catch{}return null}function C(g,{returnRouterError:$,to:S=n.to,replace:R=n.replace}={}){if(n.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||n.target==="_blank")return Promise.resolve(!1);g.preventDefault();const B=l.$router[R===!0?"replace":"push"](S);return $===!0?B:B.then(()=>{}).catch(()=>{})}function L(g){if(s.value===!0){const $=S=>C(g,S);f("click",g,$),g.defaultPrevented!==!0&&$()}else f("click",g)}return{hasRouterLink:s,hasHrefLink:i,hasLink:y,linkTag:u,resolvedLink:b,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:C,navigateOnClick:L}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Fe={xs:8,sm:10,md:14,lg:20,xl:24},Ve=["button","submit","reset"],He=/[^\s]\/[^\s]/,Ue=["flat","outline","push","unelevated"];function de(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}function rt(e){const t=de(e);return t!==void 0?{[t]:!0}:{}}const We={...re,...ce,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Ue.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Me.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Xe={...We,round:Boolean};function Ye(e){const t=ie(e,Fe),a=ze(e),{hasRouterLink:n,hasLink:l,linkTag:f,linkAttrs:c,navigateOnClick:i}=Qe({fallbackTag:"button"}),q=o(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),b=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),u=o(()=>de(e,"standard")),k=o(()=>{const d={tabindex:y.value};return l.value===!0?Object.assign(d,c.value):Ve.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&He.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),h=o(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:l,linkTag:f,navigateOnClick:i,isActionable:s}}const{passiveCapture:E}=xe;let T=null,O=null,A=null;var it=F({name:"QBtn",props:{...Xe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=V(),{classes:l,style:f,innerClasses:c,attributes:i,hasLink:q,linkTag:b,navigateOnClick:s,isActionable:y}=Ye(e),u=H(null),k=H(null);let h=null,p,d=null;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),C=o(()=>({center:e.round})),L=o(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),g=o(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if(y.value===!0){const r={onClick:S,onKeydown:R,onMousedown:K};if(n.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${m}`]=B}return r}return{onClick:P}}),$=o(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:f.value,...i.value,...g.value}));function S(r){if(u.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&u.value.contains(m)===!1&&m.contains(u.value)===!1){u.value.focus();const D=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",D,E),u.value!==null&&u.value.removeEventListener("blur",D,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",D,E),u.value.addEventListener("blur",D,E)}}s(r)}}function R(r){u.value!==null&&(a("keydown",r),N(r,[13,32])===!0&&O!==u.value&&(O!==null&&j(),r.defaultPrevented!==!0&&(u.value.focus(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),u.value.addEventListener("blur",w,E)),P(r)))}function B(r){u.value!==null&&(a("touchstart",r),r.defaultPrevented!==!0&&(T!==u.value&&(T!==null&&j(),T=u.value,h=r.target,h.addEventListener("touchcancel",w,E),h.addEventListener("touchend",w,E)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function K(r){u.value!==null&&(r.qSkipRipple=p===!0,a("mousedown",r),r.defaultPrevented!==!0&&A!==u.value&&(A!==null&&j(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,E)))}function w(r){if(u.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===u.value)){if(r!==void 0&&r.type==="keyup"){if(O===u.value&&N(r,[13,32])===!0){const m=new MouseEvent("click",r);m.qKeyEvent=!0,r.defaultPrevented===!0&&ke(m),r.cancelBubble===!0&&ae(m),u.value.dispatchEvent(m),P(r),r.qKeyEvent=!0}a("keyup",r)}j()}}function j(r){const m=k.value;r!==!0&&(T===u.value||A===u.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),T===u.value&&(h!==null&&(h.removeEventListener("touchcancel",w,E),h.removeEventListener("touchend",w,E)),T=h=null),A===u.value&&(document.removeEventListener("mouseup",w,E),A=null),O===u.value&&(document.removeEventListener("keyup",w,!0),u.value!==null&&u.value.removeEventListener("blur",w,E),O=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function M(r){P(r),r.qSkipRipple=!0}return be(()=>{j(!0)}),Object.assign(n,{click:r=>{y.value===!0&&S(r)}}),()=>{let r=[];e.icon!==void 0&&r.push(v(Y,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&r.push(v("span",{class:"block"},[e.label])),r=z(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(v(Y,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:L.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},r)),e.loading!==null&&m.push(v(pe,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Pe)])]:null)),ye(v(b.value,$.value,m),[[Ae,_.value,void 0,C.value]])}}});export{it as Q,Ae as R,Y as a,nt as b,Qe as c,Te as d,Pe as e,re as f,Ze as g,ie as h,tt as i,et as j,Me as k,ze as l,rt as m,at as u,Ke as v};
