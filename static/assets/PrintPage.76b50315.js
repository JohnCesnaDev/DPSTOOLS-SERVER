import{Q as I}from"./QBtnToggle.1ab9d2fb.js";import{h as Ne,Q as Fe}from"./QCheckbox.af924e9a.js";import{e as Le,a as ae,Q as G}from"./QBtn.e5e59e16.js";import{Q as Qe}from"./QCircularProgress.2925d6e6.js";import{k as ye,y as we,l as b,T as Me,r as S,a4 as $e,j as z,G as be,a8 as Be,A as ze,z as me,ai as He,n as Pe,J as Re,a1 as ke,a6 as Ue,V as je,a7 as Ie,o as W,c as ee,w as $,i as N,e as E,P as ve,Q as _e,h as De}from"./index.71e904c6.js";import{u as Ve,a as Ke}from"./use-dark.9495cb7f.js";import{Q as xe}from"./QResizeObserver.0135b024.js";import{Q as Ge,T as pe}from"./QScrollObserver.fdd97da4.js";import{b as le}from"./format.de7e9769.js";import{e as Te,f as fe}from"./selection.2a5852a8.js";import{a as Ye}from"./render.3cdd0da6.js";import{Q as Je}from"./QPage.bba94e4d.js";import{api as qe}from"./axios.1d973e8a.js";import{_ as te}from"./BasePanel.39eb5885.js";import"./private.use-form.7bb8ba16.js";import"./QToolbar.5683ae80.js";import"./QCard.bf0efa73.js";var Xe=ye({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(l,{slots:x,emit:p}){let k=!1,T,q,u=null,a=null,m,K;function w(){T&&T(),T=null,k=!1,u!==null&&(clearTimeout(u),u=null),a!==null&&(clearTimeout(a),a=null),q!==void 0&&q.removeEventListener("transitionend",m),m=null}function O(f,P,s){P!==void 0&&(f.style.height=`${P}px`),f.style.transition=`height ${l.duration}ms cubic-bezier(.25, .8, .50, 1)`,k=!0,T=s}function V(f,P){f.style.overflowY=null,f.style.height=null,f.style.transition=null,w(),P!==K&&p(P)}function M(f,P){let s=0;q=f,k===!0?(w(),s=f.offsetHeight===f.scrollHeight?0:void 0):(K="hide",f.style.overflowY="hidden"),O(f,s,P),u=setTimeout(()=>{u=null,f.style.height=`${f.scrollHeight}px`,m=o=>{a=null,(Object(o)!==o||o.target===f)&&V(f,"show")},f.addEventListener("transitionend",m),a=setTimeout(m,l.duration*1.1)},100)}function F(f,P){let s;q=f,k===!0?w():(K="show",f.style.overflowY="hidden",s=f.scrollHeight),O(f,s,P),u=setTimeout(()=>{u=null,f.style.height=0,m=o=>{a=null,(Object(o)!==o||o.target===f)&&V(f,"hide")},f.addEventListener("transitionend",m),a=setTimeout(m,l.duration*1.1)},100)}return we(()=>{k===!0&&w()}),()=>b(Me,{css:!1,appear:l.appear,onEnter:M,onLeave:F},x.default)}});const We=["none","strict","leaf","leaf-filtered"];var el=ye({name:"QTree",props:{...Ve,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:l=>We.includes(l)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:{},noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(l,{slots:x,emit:p}){const{proxy:k}=Pe(),{$q:T}=k,q=Ke(l,T),u=S({}),a=S(l.ticked||[]),m=S(l.expanded||[]);let K={};$e(()=>{K={}});const w=z(()=>`q-tree q-tree--${l.dense===!0?"dense":"standard"}`+(l.noConnectors===!0?" q-tree--no-connectors":"")+(q.value===!0?" q-tree--dark":"")+(l.color!==void 0?` text-${l.color}`:"")),O=z(()=>l.selected!==void 0),V=z(()=>l.icon||T.iconSet.tree.icon),M=z(()=>l.controlColor||l.color),F=z(()=>l.textColor!==void 0?` text-${l.textColor}`:""),f=z(()=>{const t=l.selectedColor||l.color;return t?` text-${t}`:""}),P=z(()=>l.filterMethod!==void 0?l.filterMethod:(t,r)=>{const e=r.toLowerCase();return t[l.labelKey]&&t[l.labelKey].toLowerCase().indexOf(e)!==-1}),s=z(()=>{const t={},r=(e,v)=>{const n=e.tickStrategy||(v?v.tickStrategy:l.tickStrategy),g=e[l.nodeKey],_=e[l.childrenKey]&&Array.isArray(e[l.childrenKey])&&e[l.childrenKey].length!==0,U=e.disabled!==!0&&O.value===!0&&e.selectable!==!1,A=e.disabled!==!0&&e.expandable!==!1,Oe=n!=="none",X=n==="strict",ge=n==="leaf-filtered",ce=n==="leaf"||n==="leaf-filtered";let de=e.disabled!==!0&&e.tickable!==!1;ce===!0&&de===!0&&v&&v.tickable!==!0&&(de=!1);let j=e.lazy;j===!0&&u.value[g]!==void 0&&Array.isArray(e[l.childrenKey])===!0&&(j=u.value[g]);const h={key:g,parent:v,isParent:_,lazy:j,disabled:e.disabled,link:e.disabled!==!0&&(U===!0||A===!0&&(_===!0||j===!0)),children:[],matchesFilter:l.filter?P.value(e,l.filter):!0,selected:g===l.selected&&U===!0,selectable:U,expanded:_===!0?m.value.includes(g):!1,expandable:A,noTick:e.noTick===!0||X!==!0&&j&&j!=="loaded",tickable:de,tickStrategy:n,hasTicking:Oe,strictTicking:X,leafFilteredTicking:ge,leafTicking:ce,ticked:X===!0?a.value.includes(g):_===!0?!1:a.value.includes(g)};if(t[g]=h,_===!0&&(h.children=e[l.childrenKey].map(C=>r(C,h)),l.filter&&(h.matchesFilter!==!0?h.matchesFilter=h.children.some(C=>C.matchesFilter):h.noTick!==!0&&h.disabled!==!0&&h.tickable===!0&&ge===!0&&h.children.every(C=>C.matchesFilter!==!0||C.noTick===!0||C.tickable!==!0)===!0&&(h.tickable=!1)),h.matchesFilter===!0&&(h.noTick!==!0&&X!==!0&&h.children.every(C=>C.noTick)===!0&&(h.noTick=!0),ce))){if(h.ticked=!1,h.indeterminate=h.children.some(C=>C.indeterminate===!0),h.tickable=h.tickable===!0&&h.children.some(C=>C.tickable),h.indeterminate!==!0){const C=h.children.reduce((Se,Ze)=>Ze.ticked===!0?Se+1:Se,0);C===h.children.length?h.ticked=!0:C>0&&(h.indeterminate=!0)}h.indeterminate===!0&&(h.indeterminateNextState=h.children.every(C=>C.tickable!==!0||C.ticked!==!0))}return h};return l.nodes.forEach(e=>r(e,null)),t});be(()=>l.ticked,t=>{a.value=t}),be(()=>l.expanded,t=>{m.value=t});function o(t){const r=[].reduce,e=(v,n)=>{if(v||!n)return v;if(Array.isArray(n)===!0)return r.call(Object(n),e,v);if(n[l.nodeKey]===t)return n;if(n[l.childrenKey])return e(null,n[l.childrenKey])};return e(null,l.nodes)}function c(){return a.value.map(t=>o(t))}function ie(){return m.value.map(t=>o(t))}function re(t){return t&&s.value[t]?s.value[t].expanded:!1}function ne(){l.expanded!==void 0?p("update:expanded",[]):m.value=[]}function D(){const t=[],r=e=>{e[l.childrenKey]&&e[l.childrenKey].length!==0&&e.expandable!==!1&&e.disabled!==!0&&(t.push(e[l.nodeKey]),e[l.childrenKey].forEach(r))};l.nodes.forEach(r),l.expanded!==void 0?p("update:expanded",t):m.value=t}function B(t,r,e=o(t),v=s.value[t]){if(v.lazy&&v.lazy!=="loaded"){if(v.lazy==="loading")return;u.value[t]="loading",Array.isArray(e[l.childrenKey])!==!0&&(e[l.childrenKey]=[]),p("lazyLoad",{node:e,key:t,done:n=>{u.value[t]="loaded",e[l.childrenKey]=Array.isArray(n)===!0?n:[],Re(()=>{const g=s.value[t];g&&g.isParent===!0&&Y(t,!0)})},fail:()=>{delete u.value[t],e[l.childrenKey].length===0&&delete e[l.childrenKey]}})}else v.isParent===!0&&v.expandable===!0&&Y(t,r)}function Y(t,r){let e=m.value;const v=l.expanded!==void 0;if(v===!0&&(e=e.slice()),r){if(l.accordion&&s.value[t]){const n=[];s.value[t].parent?s.value[t].parent.children.forEach(g=>{g.key!==t&&g.expandable===!0&&n.push(g.key)}):l.nodes.forEach(g=>{const _=g[l.nodeKey];_!==t&&n.push(_)}),n.length!==0&&(e=e.filter(g=>n.includes(g)===!1))}e=e.concat([t]).filter((n,g,_)=>_.indexOf(n)===g)}else e=e.filter(n=>n!==t);v===!0?p("update:expanded",e):m.value=e}function oe(t){return t&&s.value[t]?s.value[t].ticked:!1}function Q(t,r){let e=a.value;const v=l.ticked!==void 0;v===!0&&(e=e.slice()),r?e=e.concat(t).filter((n,g,_)=>_.indexOf(n)===g):e=e.filter(n=>t.includes(n)===!1),v===!0&&p("update:ticked",e)}function J(t,r,e){const v={tree:k,node:t,key:e,color:l.color,dark:q.value};return ke(v,"expanded",()=>r.expanded,n=>{n!==r.expanded&&B(e,n)}),ke(v,"ticked",()=>r.ticked,n=>{n!==r.ticked&&Q([e],n)}),v}function L(t){return(l.filter?t.filter(r=>s.value[r[l.nodeKey]].matchesFilter):t).map(r=>i(r))}function ue(t){if(t.icon!==void 0)return b(ae,{class:"q-tree__icon q-mr-sm",name:t.icon,color:t.iconColor});const r=t.img||t.avatar;if(r)return b("img",{class:`q-tree__${t.img?"img":"avatar"} q-mr-sm`,src:r})}function se(){p("afterShow")}function H(){p("afterHide")}function i(t){const r=t[l.nodeKey],e=s.value[r],v=t.header&&x[`header-${t.header}`]||x["default-header"],n=e.isParent===!0?L(t[l.childrenKey]):[],g=n.length!==0||e.lazy&&e.lazy!=="loaded";let _=t.body&&x[`body-${t.body}`]||x["default-body"];const U=v!==void 0||_!==void 0?J(t,e,r):null;return _!==void 0&&(_=b("div",{class:"q-tree__node-body relative-position"},[b("div",{class:F.value},[_(U)])])),b("div",{key:r,class:`q-tree__node relative-position q-tree__node--${g===!0?"parent":"child"}`},[b("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(e.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(e.selected===!0?" q-tree__node--selected":"")+(e.disabled===!0?" q-tree__node--disabled":""),tabindex:e.link===!0?0:-1,ariaExpanded:n.length>0?e.expanded:null,role:"treeitem",onClick:A=>{y(t,e,A)},onKeypress(A){Be(A)!==!0&&(A.keyCode===13?y(t,e,A,!0):A.keyCode===32&&Z(t,e,A,!0))}},[b("div",{class:"q-focus-helper",tabindex:-1,ref:A=>{K[e.key]=A}}),e.lazy==="loading"?b(Le,{class:"q-tree__spinner",color:M.value}):g===!0?b(ae,{class:"q-tree__arrow"+(e.expanded===!0?" q-tree__arrow--rotate":""),name:V.value,onClick(A){Z(t,e,A)}}):null,e.hasTicking===!0&&e.noTick!==!0?b(Ne,{class:"q-tree__tickbox",modelValue:e.indeterminate===!0?null:e.ticked,color:M.value,dark:q.value,dense:!0,keepColor:!0,disable:e.tickable!==!0,onKeydown:ze,"onUpdate:modelValue":A=>{R(e,A)}}):null,b("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(e.selected===!0?f.value:F.value)},[v?v(U):[ue(t),b("div",t[l.labelKey])]])]),g===!0?l.noTransition===!0?e.expanded===!0?b("div",{class:"q-tree__node-collapsible"+F.value,key:`${r}__q`},[_,b("div",{class:"q-tree__children"+(e.disabled===!0?" q-tree__node--disabled":""),role:"group"},n)]):null:b(Xe,{duration:l.duration,onShow:se,onHide:H},()=>me(b("div",{class:"q-tree__node-collapsible"+F.value,key:`${r}__q`},[_,b("div",{class:"q-tree__children"+(e.disabled===!0?" q-tree__node--disabled":""),role:"group"},n)]),[[He,e.expanded]])):_])}function d(t){const r=K[t];r&&r.focus()}function y(t,r,e,v){v!==!0&&r.selectable!==!1&&d(r.key),O.value&&r.selectable?l.noSelectionUnset===!1?p("update:selected",r.key!==l.selected?r.key:null):r.key!==l.selected&&p("update:selected",r.key===void 0?null:r.key):Z(t,r,e,v),typeof t.handler=="function"&&t.handler(t)}function Z(t,r,e,v){e!==void 0&&ze(e),v!==!0&&r.selectable!==!1&&d(r.key),B(r.key,!r.expanded,t,r)}function R(t,r){if(t.indeterminate===!0&&(r=t.indeterminateNextState),t.strictTicking)Q([t.key],r);else if(t.leafTicking){const e=[],v=n=>{n.isParent?(r!==!0&&n.noTick!==!0&&n.tickable===!0&&e.push(n.key),n.leafTicking===!0&&n.children.forEach(v)):n.noTick!==!0&&n.tickable===!0&&(n.leafFilteredTicking!==!0||n.matchesFilter===!0)&&e.push(n.key)};v(t),Q(e,r)}}return l.defaultExpandAll===!0&&D(),Object.assign(k,{getNodeByKey:o,getTickedNodes:c,getExpandedNodes:ie,isExpanded:re,collapseAll:ne,expandAll:D,setExpanded:B,isTicked:oe,setTicked:Q}),()=>{const t=L(l.nodes);return b("div",{class:w.value,role:"tree"},t.length===0?l.filter?l.noResultsLabel||T.lang.tree.noResults:l.noNodesLabel||T.lang.tree.noNodes:t)}}});const Ce=["vertical","horizontal"],he={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ee={prevent:!0,mouse:!0,mouseAllDir:!0},Ae=l=>l>=250?50:Math.ceil(l/5);var ll=ye({name:"QScrollArea",props:{...Ve,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(l,{slots:x,emit:p}){const k=S(!1),T=S(!1),q=S(!1),u={vertical:S(0),horizontal:S(0)},a={vertical:{ref:S(null),position:S(0),size:S(0)},horizontal:{ref:S(null),position:S(0),size:S(0)}},{proxy:m}=Pe(),K=Ke(l,m.$q);let w=null,O;const V=S(null),M=z(()=>"q-scrollarea"+(K.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=z(()=>{const i=a.vertical.size.value-u.vertical.value;if(i<=0)return 0;const d=le(a.vertical.position.value/i,0,1);return Math.round(d*1e4)/1e4}),a.vertical.thumbHidden=z(()=>(l.visible===null?q.value:l.visible)!==!0&&k.value===!1&&T.value===!1||a.vertical.size.value<=u.vertical.value+1),a.vertical.thumbStart=z(()=>a.vertical.percentage.value*(u.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=z(()=>Math.round(le(u.vertical.value*u.vertical.value/a.vertical.size.value,Ae(u.vertical.value),u.vertical.value))),a.vertical.style=z(()=>({...l.thumbStyle,...l.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=z(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=z(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=z(()=>{const i=a.horizontal.size.value-u.horizontal.value;if(i<=0)return 0;const d=le(Math.abs(a.horizontal.position.value)/i,0,1);return Math.round(d*1e4)/1e4}),a.horizontal.thumbHidden=z(()=>(l.visible===null?q.value:l.visible)!==!0&&k.value===!1&&T.value===!1||a.horizontal.size.value<=u.horizontal.value+1),a.horizontal.thumbStart=z(()=>a.horizontal.percentage.value*(u.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=z(()=>Math.round(le(u.horizontal.value*u.horizontal.value/a.horizontal.size.value,Ae(u.horizontal.value),u.horizontal.value))),a.horizontal.style=z(()=>({...l.thumbStyle,...l.horizontalThumbStyle,[m.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=z(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=z(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const F=z(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?l.contentStyle:l.contentActiveStyle),f=[[pe,i=>{D(i,"vertical")},void 0,{vertical:!0,...Ee}]],P=[[pe,i=>{D(i,"horizontal")},void 0,{horizontal:!0,...Ee}]];function s(){const i={};return Ce.forEach(d=>{const y=a[d];i[d+"Position"]=y.position.value,i[d+"Percentage"]=y.percentage.value,i[d+"Size"]=y.size.value,i[d+"ContainerSize"]=u[d].value}),i}const o=Ue(()=>{const i=s();i.ref=m,p("scroll",i)},0);function c(i,d,y){if(Ce.includes(i)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(i==="vertical"?Te:fe)(V.value,d,y)}function ie({height:i,width:d}){let y=!1;u.vertical.value!==i&&(u.vertical.value=i,y=!0),u.horizontal.value!==d&&(u.horizontal.value=d,y=!0),y===!0&&Q()}function re({position:i}){let d=!1;a.vertical.position.value!==i.top&&(a.vertical.position.value=i.top,d=!0),a.horizontal.position.value!==i.left&&(a.horizontal.position.value=i.left,d=!0),d===!0&&Q()}function ne({height:i,width:d}){a.horizontal.size.value!==d&&(a.horizontal.size.value=d,Q()),a.vertical.size.value!==i&&(a.vertical.size.value=i,Q())}function D(i,d){const y=a[d];if(i.isFirst===!0){if(y.thumbHidden.value===!0)return;O=y.position.value,T.value=!0}else if(T.value!==!0)return;i.isFinal===!0&&(T.value=!1);const Z=he[d],R=u[d].value,t=(y.size.value-R)/(R-y.thumbSize.value),r=i.distance[Z.dist],e=O+(i.direction===Z.dir?1:-1)*r*t;J(e,d)}function B(i,d){const y=a[d];if(y.thumbHidden.value!==!0){const Z=i[he[d].offset];if(Z<y.thumbStart.value||Z>y.thumbStart.value+y.thumbSize.value){const R=Z-y.thumbSize.value/2;J(R/u[d].value*y.size.value,d)}y.ref.value!==null&&y.ref.value.dispatchEvent(new MouseEvent(i.type,i))}}function Y(i){B(i,"vertical")}function oe(i){B(i,"horizontal")}function Q(){k.value=!0,w!==null&&clearTimeout(w),w=setTimeout(()=>{w=null,k.value=!1},l.delay),l.onScroll!==void 0&&o()}function J(i,d){V.value[he[d].scroll]=i}let L=null;function ue(){L!==null&&clearTimeout(L),L=setTimeout(()=>{L=null,q.value=!0},m.$q.platform.is.ios?50:0)}function se(){L!==null&&(clearTimeout(L),L=null),q.value=!1}let H=null;return be(()=>m.$q.lang.rtl,i=>{V.value!==null&&fe(V.value,Math.abs(a.horizontal.position.value)*(i===!0?-1:1))}),je(()=>{H={top:a.vertical.position.value,left:a.horizontal.position.value}}),Ie(()=>{if(H===null)return;const i=V.value;i!==null&&(fe(i,H.left),Te(i,H.top))}),we(o.cancel),Object.assign(m,{getScrollTarget:()=>V.value,getScroll:s,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:c,setScrollPercentage(i,d,y){c(i,d*(a[i].size.value-u[i].value)*(i==="horizontal"&&m.$q.lang.rtl===!0?-1:1),y)}}),()=>b("div",{class:M.value,onMouseenter:ue,onMouseleave:se},[b("div",{ref:V,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:l.tabindex!==void 0?l.tabindex:void 0},[b("div",{class:"q-scrollarea__content absolute",style:F.value},Ye(x.default,[b(xe,{debounce:0,onResize:ne})])),b(Ge,{axis:"both",onScroll:re})]),b(xe,{debounce:0,onResize:ie}),b("div",{class:a.vertical.barClass.value,style:[l.barStyle,l.verticalBarStyle],"aria-hidden":"true",onMousedown:Y}),b("div",{class:a.horizontal.barClass.value,style:[l.barStyle,l.horizontalBarStyle],"aria-hidden":"true",onMousedown:oe}),me(b("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),f),me(b("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),P)])}});const tl={class:"column q-col-gutter-md"},al={class:"row q-gutter-md"},il={style:{margin:"15px"}},rl={class:"column q-gutter-md"},nl={class:"row q-gutter-md"},ol={style:{margin:"15px"}},ul={class:"column q-gutter-md"},sl={class:"row items-center"},cl={style:{margin:"15px"}},dl={class:"column q-gutter-md"},Al={setup(l){const x=S([]),p=S(""),k=S([]),T=S([]),q=S("Z:\\G\\GETINGE LANCER"),u=S(),a=S("A4"),m=S(!0),K=S("simplex"),w=S(!0);function O(){u.value=""}function V(){u.value&&u.value.trim()!==""&&(x.value.some(o=>o.label===u.value)||x.value.push({label:u.value,load:!1,icon:"",print:!1,filePath:u.value})),O()}function M(){if(p.value!==""){const s=x.value.findIndex(o=>o.label===p.value);s!==-1&&x.value.splice(s,1),p.value=""}}function F(){x.value=[]}function f(){x.value!=""&&x.value.forEach(s=>{s.load=!0,qe.get("/apiFile",{params:{REF:s.label.toLowerCase(),REP:q.value}}).then(function(o){console.log(o.data),s.children=[],o.data.forEach(c=>{s.children.push({label:c.fileName,filePath:c.filePath,fileExtension:c.fileExtension})}),s.load=!1,s.icon="done",T.value.push(s.label)}).catch(function(o){s.load=!1,s.icon="close"}).then(function(){})})}function P(){k.value.length!="0"&&k.value.forEach(s=>{console.log(s),qe.post("/apiPrint",{params:{REF:s,FO:a.value,CO:m.value,RO:K.value,PO:w.value}}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})})}return(s,o)=>(W(),ee(Je,{class:"flex flex-center"},{default:$(()=>[N("div",tl,[N("div",al,[E(te,{title:"Recherche",width:"1432"},{default:$(()=>[N("div",il,[N("div",rl,[E(I,{class:"rep",modelValue:q.value,"onUpdate:modelValue":o[0]||(o[0]=c=>q.value=c),push:"",glossy:"","toggle-color":"primary",options:[{label:"DISTRAL",value:"Z:\\D\\DISTRAL"},{label:"GETINGE",value:"Z:\\G\\GETINGE LANCER"},{label:"NOVAL",value:"Z:\\N\\NOVAL"}]},null,8,["modelValue"]),E(I,{class:"rep1",modelValue:q.value,"onUpdate:modelValue":o[1]||(o[1]=c=>q.value=c),push:"",glossy:"","toggle-color":"primary",options:[{label:"A",value:"Z:\\A"},{label:"B",value:"Z:\\B"},{label:"C",value:"Z:\\C"},{label:"D",value:"Z:\\D"},{label:"E",value:"Z:\\E"},{label:"F",value:"Z:\\F"},{label:"G",value:"Z:\\G"},{label:"H",value:"Z:\\H"},{label:"I",value:"Z:\\I"},{label:"J",value:"Z:\\J"},{label:"K",value:"Z:\\K"},{label:"L",value:"Z:\\L"},{label:"M",value:"Z:\\M"},{label:"N",value:"Z:\\N"},{label:"O",value:"Z:\\O"},{label:"P",value:"Z:\\P"},{label:"Q",value:"Z:\\Q"},{label:"R",value:"Z:\\R"},{label:"S",value:"Z:\\S"},{label:"T",value:"Z:\\T"},{label:"U",value:"Z:\\U"},{label:"V",value:"Z:\\V"},{label:"W",value:"Z:\\W"},{label:"X",value:"Z:\\X"},{label:"Y",value:"Z:\\Y"},{label:"Z",value:"Z:\\Z"}]},null,8,["modelValue"])])])]),_:1})]),N("div",nl,[E(te,{title:"Fichier",height:"600",width:"200"},{default:$(()=>[N("div",ol,[N("div",ul,[E(Fe,{outlined:"",label:"Fichier","stack-label":"",modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=c=>u.value=c),onFocus:o[3]||(o[3]=c=>O())},null,8,["modelValue"]),E(G,{onClick:V,color:"primary",label:"Ajouter"}),E(G,{onClick:f,color:"primary",label:"Rechercher"}),E(G,{onClick:P,color:"primary",label:"Imprimer"}),E(G,{onClick:M,color:"primary",label:"Supprimer"}),E(G,{onClick:F,color:"primary",label:"Tous Supprimer"})])])]),_:1}),E(te,{title:"liste des fichiers",height:"600",width:"1000"},{default:$(()=>[E(ll,{style:{margin:"15px",height:"500px","max-width":"970px"}},{default:$(()=>[E(el,{nodes:x.value,"node-key":"filePath","tick-strategy":"leaf",selectedColor:"primary",noNodesLabel:" ",noResultsLabel:" ",selected:p.value,"onUpdate:selected":o[4]||(o[4]=c=>p.value=c),ticked:k.value,"onUpdate:ticked":o[5]||(o[5]=c=>k.value=c),expanded:T.value,"onUpdate:expanded":o[6]||(o[6]=c=>T.value=c)},{"default-header":$(c=>[N("div",sl,[c.node.load?(W(),ee(Qe,{key:0,indeterminate:"",size:"20px",color:"primary"})):ve("",!0),c.node.icon==="done"||c.node.icon==="close"?(W(),ee(ae,{key:1,name:c.node.icon,color:c.node.icon==="done"?"green":"red",size:"28px",class:"q-mr-sm"},null,8,["name","color"])):ve("",!0),c.node.print==="print"?(W(),ee(ae,{key:2,name:c.node.print,color:c.node.print==="print"?"green":"red",size:"28px",class:"q-mr-sm"},null,8,["name","color"])):ve("",!0),N("div",null,_e(c.node.label),1)])]),_:1},8,["nodes","selected","ticked","expanded"])]),_:1})]),_:1}),E(te,{title:"param\xE8tres",height:"600",width:"200"},{default:$(()=>[N("div",cl,[N("div",dl,[E(I,{class:"opt",modelValue:a.value,"onUpdate:modelValue":o[7]||(o[7]=c=>a.value=c),push:"",glossy:"","toggle-color":"primary",options:[{label:"A4",value:"A4"},{label:"A3",value:"A3"}]},null,8,["modelValue"]),E(I,{class:"opt",modelValue:m.value,"onUpdate:modelValue":o[8]||(o[8]=c=>m.value=c),push:"",glossy:"","toggle-color":"primary",options:[{label:"N/B",value:!0},{label:"Couleur",value:!1}]},null,8,["modelValue"]),E(I,{class:"opt",modelValue:K.value,"onUpdate:modelValue":o[9]||(o[9]=c=>K.value=c),push:"",glossy:"","toggle-color":"primary",options:[{label:"Simple",value:"simplex"},{label:"R/V",value:"duplex"}]},null,8,["modelValue"]),E(I,{class:"opt",modelValue:w.value,"onUpdate:modelValue":o[10]||(o[10]=c=>w.value=c),push:"",glossy:"","toggle-color":"primary",options:[{label:"1er pages",value:!0},{label:"Toutes",value:!1}]},null,8,["modelValue"]),De(" "+_e(k.value),1)])])]),_:1})])])]),_:1}))}};export{Al as default};
