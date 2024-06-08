import{p as z,S as m,W as O,X as x,s as h,Y as g,B as S,v as y,x as E,t as b,A as X,k as _,G as w,I as B,y as D,n as F,C as L}from"./index.a36e229f.js";import{c as Y,s as k,d as N,b as j,a as U}from"./selection.a4fe5cec.js";const q={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},$=Object.keys(q);q.all=!0;function P(n){const r={};for(const o of $)n[o]===!0&&(r[o]=!0);return Object.keys(r).length===0?q:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const H=["INPUT","TEXTAREA"];function M(n,r){return r.event===void 0&&n.target!==void 0&&n.target.draggable!==!0&&typeof r.handler=="function"&&H.includes(n.target.nodeName.toUpperCase())===!1&&(n.qClonedBy===void 0||n.qClonedBy.indexOf(r.uid)===-1)}function C(n,r,o){const c=E(n);let e,t=c.left-r.event.x,i=c.top-r.event.y,a=Math.abs(t),u=Math.abs(i);const s=r.direction;s.horizontal===!0&&s.vertical!==!0?e=t<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=i<0?"up":"down":s.up===!0&&i<0?(e="up",a>u&&(s.left===!0&&t<0?e="left":s.right===!0&&t>0&&(e="right"))):s.down===!0&&i>0?(e="down",a>u&&(s.left===!0&&t<0?e="left":s.right===!0&&t>0&&(e="right"))):s.left===!0&&t<0?(e="left",a<u&&(s.up===!0&&i<0?e="up":s.down===!0&&i>0&&(e="down"))):s.right===!0&&t>0&&(e="right",a<u&&(s.up===!0&&i<0?e="up":s.down===!0&&i>0&&(e="down")));let p=!1;if(e===void 0&&o===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,p=!0,e==="left"||e==="right"?(c.left-=t,a=0,t=0):(c.top-=i,u=0,i=0)}return{synthetic:p,payload:{evt:n,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:c,direction:e,isFirst:r.event.isFirst,isFinal:o===!0,duration:Date.now()-r.event.time,distance:{x:a,y:u},offset:{x:t,y:i},delta:{x:c.left-r.event.lastX,y:c.top-r.event.lastY}}}}let I=0;var G=z({name:"touch-pan",beforeMount(n,{value:r,modifiers:o}){if(o.mouse!==!0&&m.has.touch!==!0)return;function c(t,i){o.mouse===!0&&i===!0?X(t):(o.stop===!0&&y(t),o.prevent===!0&&S(t))}const e={uid:"qvtp_"+I++,handler:r,modifiers:o,direction:P(o),noop:O,mouseStart(t){M(t,e)&&x(t)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(M(t,e)){const i=t.target;h(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,i){if(m.is.firefox===!0&&g(n,!0),e.lastEvt=t,i===!0||o.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=t.type.indexOf("mouse")!==-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&S(s),t.cancelBubble===!0&&y(s),Object.assign(s,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:s}}y(t)}const{left:a,top:u}=E(t);e.event={x:a,y:u,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:u}},move(t){if(e.event===void 0)return;const i=E(t),a=i.left-e.event.x,u=i.top-e.event.y;if(a===0&&u===0)return;e.lastEvt=t;const s=e.event.mouse===!0,p=()=>{c(t,s);let l;o.preserveCursor!==!0&&o.preservecursor!==!0&&(l=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Y(),e.styleCleanup=v=>{if(e.styleCleanup=void 0,l!==void 0&&(document.documentElement.style.cursor=l),document.body.classList.remove("non-selectable"),s===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{T(),v()},50):T()}else v!==void 0&&v()}};if(e.event.detected===!0){e.event.isFirst!==!0&&c(t,e.event.mouse);const{payload:l,synthetic:v}=C(t,e,!1);l!==void 0&&(e.handler(l)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&p(),e.event.lastX=l.position.left,e.event.lastY=l.position.top,e.event.lastDir=v===!0?void 0:l.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){p(),e.event.detected=!0,e.move(t);return}const d=Math.abs(a),f=Math.abs(u);d!==f&&(e.direction.horizontal===!0&&d>f||e.direction.vertical===!0&&d<f||e.direction.up===!0&&d<f&&u<0||e.direction.down===!0&&d<f&&u>0||e.direction.left===!0&&d>f&&a<0||e.direction.right===!0&&d>f&&a>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,i){if(e.event!==void 0){if(b(e,"temp"),m.is.firefox===!0&&g(n,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(C(t===void 0?e.lastEvt:t,e).payload);const{payload:a}=C(t===void 0?e.lastEvt:t,e,!0),u=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(u):u()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(n.__qtouchpan=e,o.mouse===!0){const t=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";h(e,"main",[[n,"mousedown","mouseStart",`passive${t}`]])}m.has.touch===!0&&h(e,"main",[[n,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[n,"touchmove","noop","notPassiveCapture"]])},updated(n,r){const o=n.__qtouchpan;o!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&o.end(),o.handler=r.value),o.direction=P(r.modifiers))},beforeUnmount(n){const r=n.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),b(r,"main"),b(r,"temp"),m.is.firefox===!0&&g(n,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete n.__qtouchpan)}});const{passive:A}=L,Q=["both","horizontal","vertical"];var R=_({name:"QScrollObserver",props:{axis:{type:String,validator:n=>Q.includes(n),default:"vertical"},debounce:[String,Number],scrollTarget:k},emits:["scroll"],setup(n,{emit:r}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,e,t;w(()=>n.scrollTarget,()=>{u(),a()});function i(){c!==null&&c();const d=Math.max(0,j(e)),f=U(e),l={top:d-o.position.top,left:f-o.position.left};if(n.axis==="vertical"&&l.top===0||n.axis==="horizontal"&&l.left===0)return;const v=Math.abs(l.top)>=Math.abs(l.left)?l.top<0?"up":"down":l.left<0?"left":"right";o.position={top:d,left:f},o.directionChanged=o.direction!==v,o.delta=l,o.directionChanged===!0&&(o.direction=v,o.inflectionPoint=o.position),r("scroll",{...o})}function a(){e=N(t,n.scrollTarget),e.addEventListener("scroll",s,A),s(!0)}function u(){e!==void 0&&(e.removeEventListener("scroll",s,A),e=void 0)}function s(d){if(d===!0||n.debounce===0||n.debounce==="0")i();else if(c===null){const[f,l]=n.debounce?[setTimeout(i,n.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];c=()=>{l(f),c=null}}}const{proxy:p}=F();return w(()=>p.$q.lang.rtl,i),B(()=>{t=p.$el.parentNode,a()}),D(()=>{c!==null&&c(),u()}),Object.assign(p,{trigger:s,getPosition:()=>o}),O}});export{R as Q,G as T};
