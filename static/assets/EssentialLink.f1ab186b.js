import{Q as oe}from"./QResizeObserver.303fcc65.js";import{k as j,D as ie,E as Q,r as q,j as n,G as f,y as Se,l as g,H as K,n as G,I as We,J as de,z as Ve,K as qe,L as De,M as Re,N,O as Ie,d as Fe,_ as Ae,o as fe,c as ve,w as I,e as E,P as Ne,h as he,Q as me}from"./index.3d57119a.js";import{b as Ee,c as ye,h as ke,a as Ue}from"./render.489cad2f.js";import{u as je,b as Ke,c as Ge,d as Je,e as Xe,f as Ye,g as ge,a as be,h as Ze}from"./QItem.9b88334d.js";import{u as et,a as tt}from"./use-dark.ab9b48eb.js";import{T as le,Q as at}from"./QScrollObserver.06573e37.js";import{b as U}from"./format.de7e9769.js";import{g as ne}from"./selection.c3d9b9e6.js";import{a as lt}from"./QBtn.1fc8a42d.js";var yt=j({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:p,emit:h}){const{proxy:{$q:c}}=G(),i=ie(K,Q);if(i===Q)return console.error("QHeader needs to be child of QLayout"),Q;const s=q(parseInt(e.heightHint,10)),k=q(!0),z=n(()=>e.reveal===!0||i.view.value.indexOf("H")!==-1||c.platform.is.ios&&i.isContainer.value===!0),L=n(()=>{if(e.modelValue!==!0)return 0;if(z.value===!0)return k.value===!0?s.value:0;const l=s.value-i.scroll.value.position;return l>0?l:0}),b=n(()=>e.modelValue!==!0||z.value===!0&&k.value!==!0),a=n(()=>e.modelValue===!0&&b.value===!0&&e.reveal===!0),_=n(()=>"q-header q-layout__section--marginal "+(z.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(b.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=n(()=>{const l=i.rows.value.top,w={};return l[0]==="l"&&i.left.space===!0&&(w[c.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),l[2]==="r"&&i.right.space===!0&&(w[c.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),w});function m(l,w){i.update("header",l,w)}function d(l,w){l.value!==w&&(l.value=w)}function B({height:l}){d(s,l),m("size",l)}function y(l){a.value===!0&&d(k,!0),h("focusin",l)}f(()=>e.modelValue,l=>{m("space",l),d(k,!0),i.animate()}),f(L,l=>{m("offset",l)}),f(()=>e.reveal,l=>{l===!1&&d(k,e.modelValue)}),f(k,l=>{i.animate(),h("reveal",l)}),f(i.scroll,l=>{e.reveal===!0&&d(k,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const u={};return i.instances.header=u,e.modelValue===!0&&m("size",s.value),m("space",e.modelValue),m("offset",L.value),Se(()=>{i.instances.header===u&&(i.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const l=Ee(p.default,[]);return e.elevated===!0&&l.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(g(oe,{debounce:0,onResize:B})),g("header",{class:_.value,style:C.value,onFocusin:y},l)}}});const we=150;var gt=j({name:"QDrawer",inheritAttrs:!1,props:{...je,...et,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ke,"onLayout","miniState"],setup(e,{slots:p,emit:h,attrs:c}){const i=G(),{proxy:{$q:s}}=i,k=tt(e,s),{preventBodyScroll:z}=Ye(),{registerTimeout:L,removeTimeout:b}=Ge(),a=ie(K,Q);if(a===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let _,C=null,m;const d=q(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),B=n(()=>e.mini===!0&&d.value!==!0),y=n(()=>B.value===!0?e.miniWidth:e.width),u=q(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),l=n(()=>e.persistent!==!0&&(d.value===!0||xe.value===!0));function w(t,o){if(H(),t!==!1&&a.animate(),$(0),d.value===!0){const S=a.instances[F.value];S!==void 0&&S.belowBreakpoint===!0&&S.hide(!1),O(1),a.isContainer.value!==!0&&z(!0)}else O(0),t!==!1&&ee(!1);L(()=>{t!==!1&&ee(!0),o!==!0&&h("show",t)},we)}function r(t,o){D(),t!==!1&&a.animate(),O(0),$(W.value*y.value),te(),o!==!0?L(()=>{h("hide",t)},we):b()}const{show:v,hide:x}=Je({showing:u,hideOnRouteChange:l,handleShow:w,handleHide:r}),{addToHistory:H,removeFromHistory:D}=Xe(u,x,l),M={belowBreakpoint:d,hide:x},T=n(()=>e.side==="right"),W=n(()=>(s.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),re=q(0),V=q(!1),J=q(!1),ue=q(y.value*W.value),F=n(()=>T.value===!0?"left":"right"),X=n(()=>u.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:y.value:0),Y=n(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(T.value?"R":"L")!==-1||s.platform.is.ios===!0&&a.isContainer.value===!0),R=n(()=>e.overlay===!1&&u.value===!0&&d.value===!1),xe=n(()=>e.overlay===!0&&u.value===!0&&d.value===!1),$e=n(()=>"fullscreen q-drawer__backdrop"+(u.value===!1&&V.value===!1?" hidden":"")),Ce=n(()=>({backgroundColor:`rgba(0,0,0,${re.value*.4})`})),se=n(()=>T.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),pe=n(()=>T.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),ze=n(()=>{const t={};return a.header.space===!0&&se.value===!1&&(Y.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&pe.value===!1&&(Y.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Le=n(()=>{const t={width:`${y.value}px`,transform:`translateX(${ue.value}px)`};return d.value===!0?t:Object.assign(t,ze.value)}),Be=n(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Te=n(()=>`q-drawer q-drawer--${e.side}`+(J.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(k.value===!0?" q-drawer--dark q-dark":"")+(V.value===!0?" no-transition":u.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(Y.value===!0||R.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(se.value===!0?" q-drawer--top-padding":""))),Qe=n(()=>{const t=s.lang.rtl===!0?e.side:F.value;return[[le,He,void 0,{[t]:!0,mouse:!0}]]}),Oe=n(()=>{const t=s.lang.rtl===!0?F.value:e.side;return[[le,ce,void 0,{[t]:!0,mouse:!0}]]}),Pe=n(()=>{const t=s.lang.rtl===!0?F.value:e.side;return[[le,ce,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function Z(){Me(d,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}f(d,t=>{t===!0?(_=u.value,u.value===!0&&x(!1)):e.overlay===!1&&e.behavior!=="mobile"&&_!==!1&&(u.value===!0?($(0),O(0),te()):v(!1))}),f(()=>e.side,(t,o)=>{a.instances[o]===M&&(a.instances[o]=void 0,a[o].space=!1,a[o].offset=0),a.instances[t]=M,a[t].size=y.value,a[t].space=R.value,a[t].offset=X.value}),f(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&Z()}),f(()=>e.behavior+e.breakpoint,Z),f(a.isContainer,t=>{u.value===!0&&z(t!==!0),t===!0&&Z()}),f(a.scrollbarWidth,()=>{$(u.value===!0?0:void 0)}),f(X,t=>{P("offset",t)}),f(R,t=>{h("onLayout",t),P("space",t)}),f(T,()=>{$()}),f(y,t=>{$(),ae(e.miniToOverlay,t)}),f(()=>e.miniToOverlay,t=>{ae(t,y.value)}),f(()=>s.lang.rtl,()=>{$()}),f(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(_e(),a.animate())}),f(B,t=>{h("miniState",t)});function $(t){t===void 0?de(()=>{t=u.value===!0?0:y.value,$(W.value*t)}):(a.isContainer.value===!0&&T.value===!0&&(d.value===!0||Math.abs(t)===y.value)&&(t+=W.value*a.scrollbarWidth.value),ue.value=t)}function O(t){re.value=t}function ee(t){const o=t===!0?"remove":a.isContainer.value!==!0?"add":"";o!==""&&document.body.classList[o]("q-body--drawer-toggle")}function _e(){C!==null&&clearTimeout(C),i.proxy&&i.proxy.$el&&i.proxy.$el.classList.add("q-drawer--mini-animate"),J.value=!0,C=setTimeout(()=>{C=null,J.value=!1,i&&i.proxy&&i.proxy.$el&&i.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function He(t){if(u.value!==!1)return;const o=y.value,S=U(t.distance.x,0,o);if(t.isFinal===!0){S>=Math.min(75,o)===!0?v():(a.animate(),O(0),$(W.value*o)),V.value=!1;return}$((s.lang.rtl===!0?T.value!==!0:T.value)?Math.max(o-S,0):Math.min(0,S-o)),O(U(S/o,0,1)),t.isFirst===!0&&(V.value=!0)}function ce(t){if(u.value!==!0)return;const o=y.value,S=t.direction===e.side,A=(s.lang.rtl===!0?S!==!0:S)?U(t.distance.x,0,o):0;if(t.isFinal===!0){Math.abs(A)<Math.min(75,o)===!0?(a.animate(),O(1),$(0)):x(),V.value=!1;return}$(W.value*A),O(U(1-A/o,0,1)),t.isFirst===!0&&(V.value=!0)}function te(){z(!1),ee(!0)}function P(t,o){a.update(e.side,t,o)}function Me(t,o){t.value!==o&&(t.value=o)}function ae(t,o){P("size",t===!0?e.miniWidth:o)}return a.instances[e.side]=M,ae(e.miniToOverlay,y.value),P("space",R.value),P("offset",X.value),e.showIfAbove===!0&&e.modelValue!==!0&&u.value===!0&&e["onUpdate:modelValue"]!==void 0&&h("update:modelValue",!0),We(()=>{h("onLayout",R.value),h("miniState",B.value),_=e.showIfAbove===!0;const t=()=>{(u.value===!0?w:r)(!1,!0)};if(a.totalWidth.value!==0){de(t);return}m=f(a.totalWidth,()=>{m(),m=void 0,u.value===!1&&e.showIfAbove===!0&&d.value===!1?v(!1):t()})}),Se(()=>{m!==void 0&&m(),C!==null&&(clearTimeout(C),C=null),u.value===!0&&te(),a.instances[e.side]===M&&(a.instances[e.side]=void 0,P("size",0),P("offset",0),P("space",!1))}),()=>{const t=[];d.value===!0&&(e.noSwipeOpen===!1&&t.push(Ve(g("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Qe.value)),t.push(ye("div",{ref:"backdrop",class:$e.value,style:Ce.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",e.noSwipeBackdrop!==!0&&u.value===!0,()=>Pe.value)));const o=B.value===!0&&p.mini!==void 0,S=[g("div",{...c,key:""+o,class:[Be.value,c.class]},o===!0?p.mini():ke(p.default))];return e.elevated===!0&&u.value===!0&&S.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(ye("aside",{ref:"content",class:Te.value,style:Le.value},S,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>Oe.value)),g("div",{class:"q-drawer-container"},t)}}}),bt=j({name:"QPageContainer",setup(e,{slots:p}){const{proxy:{$q:h}}=G(),c=ie(K,Q);if(c===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;qe(De,!0);const i=n(()=>{const s={};return c.header.space===!0&&(s.paddingTop=`${c.header.size}px`),c.right.space===!0&&(s[`padding${h.lang.rtl===!0?"Left":"Right"}`]=`${c.right.size}px`),c.footer.space===!0&&(s.paddingBottom=`${c.footer.size}px`),c.left.space===!0&&(s[`padding${h.lang.rtl===!0?"Right":"Left"}`]=`${c.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:i.value},ke(p.default))}}),wt=j({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:p,emit:h}){const{proxy:{$q:c}}=G(),i=q(null),s=q(c.screen.height),k=q(e.container===!0?0:c.screen.width),z=q({position:0,direction:"down",inflectionPoint:0}),L=q(0),b=q(Re.value===!0?0:ne()),a=n(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),_=n(()=>e.container===!1?{minHeight:c.screen.height+"px"}:null),C=n(()=>b.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${b.value}px`}:null),m=n(()=>b.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${b.value}px`,width:`calc(100% + ${b.value}px)`}:null);function d(r){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};z.value=v,e.onScroll!==void 0&&h("scroll",v)}}function B(r){const{height:v,width:x}=r;let H=!1;s.value!==v&&(H=!0,s.value=v,e.onScrollHeight!==void 0&&h("scrollHeight",v),u()),k.value!==x&&(H=!0,k.value=x),H===!0&&e.onResize!==void 0&&h("resize",r)}function y({height:r}){L.value!==r&&(L.value=r,u())}function u(){if(e.container===!0){const r=s.value>L.value?ne():0;b.value!==r&&(b.value=r)}}let l=null;const w={instances:{},view:n(()=>e.view),isContainer:n(()=>e.container),rootRef:i,height:s,containerHeight:L,scrollbarWidth:b,totalWidth:n(()=>k.value+b.value),rows:n(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:N({size:0,offset:0,space:!1}),right:N({size:300,offset:0,space:!1}),footer:N({size:0,offset:0,space:!1}),left:N({size:300,offset:0,space:!1}),scroll:z,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,v,x){w[r][v]=x}};if(qe(K,w),ne()>0){let x=function(){r=null,v.classList.remove("hide-scrollbar")},H=function(){if(r===null){if(v.scrollHeight>c.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(x,300)},D=function(M){r!==null&&M==="remove"&&(clearTimeout(r),x()),window[`${M}EventListener`]("resize",H)},r=null;const v=document.body;f(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),Ie(()=>{D("remove")})}return()=>{const r=Ue(p.default,[g(at,{onScroll:d}),g(oe,{onResize:B})]),v=g("div",{class:a.value,style:_.value,ref:e.container===!0?void 0:i,tabindex:-1},r);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:i},[g(oe,{onResize:y}),g("div",{class:"absolute-full",style:C.value},[g("div",{class:"scroll",style:m.value},[v])])]):v}}});const nt=Fe({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function ot(e,p,h,c,i,s){return fe(),ve(Ze,{clickable:"",tag:"a",to:e.link},{default:I(()=>[e.icon?(fe(),ve(ge,{key:0,avatar:""},{default:I(()=>[E(lt,{name:e.icon},null,8,["name"])]),_:1})):Ne("",!0),E(ge,null,{default:I(()=>[E(be,null,{default:I(()=>[he(me(e.title),1)]),_:1}),E(be,{caption:""},{default:I(()=>[he(me(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var St=Ae(nt,[["render",ot]]);export{St as E,wt as Q,yt as a,gt as b,bt as c};
