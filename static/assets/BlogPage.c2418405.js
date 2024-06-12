import{e as ae,b as ce,a as pe,Q as te}from"./QBtn.1fc8a42d.js";import{Q as ve}from"./QCircularProgress.77a0426f.js";import{u as fe,a as me}from"./use-dark.ab9b48eb.js";import{r as q,j as y,n as ue,v as re,A as ne,S as _e,l as v,K as ge,$ as he,G as Fe,y as be,a0 as ye,a1 as qe,a2 as Se,k as xe,a3 as ze,o as Ue,c as we,w as ke,i as Be,e as Ce}from"./index.3d57119a.js";import{h as le}from"./format.de7e9769.js";import{Q as Re}from"./QPage.65cfbcb2.js";import"./axios.6eaa92f0.js";import"./render.489cad2f.js";function M(o,f,u,l){const r=[];return o.forEach(m=>{l(m)===!0?r.push(m):f.push({failedPropValidation:u,file:m})}),r}function H(o){o&&o.dataTransfer&&(o.dataTransfer.dropEffect="copy"),ne(o)}const Ee={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},je=["rejected"];function Le({editable:o,dnd:f,getFileInput:u,addFilesToQueue:l}){const{props:r,emit:m,proxy:C}=ue(),z=q(null),A=y(()=>r.accept!==void 0?r.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),R=y(()=>parseInt(r.maxFiles,10)),E=y(()=>parseInt(r.maxTotalSize,10));function O(t){if(o.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&re(t);else{const F=u();F&&F!==t.target&&F.click(t)}}function j(t){o.value&&t&&l(null,t)}function L(t,F,P,N){let s=Array.from(F||t.target.files);const p=[],x=()=>{p.length!==0&&m("rejected",p)};if(r.accept!==void 0&&A.value.indexOf("*/")===-1&&(s=M(s,p,"accept",i=>A.value.some(g=>i.type.toUpperCase().startsWith(g)||i.name.toUpperCase().endsWith(g))),s.length===0))return x();if(r.maxFileSize!==void 0){const i=parseInt(r.maxFileSize,10);if(s=M(s,p,"max-file-size",g=>g.size<=i),s.length===0)return x()}if(r.multiple!==!0&&s.length!==0&&(s=[s[0]]),s.forEach(i=>{i.__key=i.webkitRelativePath+i.lastModified+i.name+i.size}),N===!0){const i=P.map(g=>g.__key);s=M(s,p,"duplicate",g=>i.includes(g.__key)===!1)}if(s.length===0)return x();if(r.maxTotalSize!==void 0){let i=N===!0?P.reduce((g,w)=>g+w.size,0):0;if(s=M(s,p,"max-total-size",g=>(i+=g.size,i<=E.value)),s.length===0)return x()}if(typeof r.filter=="function"){const i=r.filter(s);s=M(s,p,"filter",g=>i.includes(g))}if(r.maxFiles!==void 0){let i=N===!0?P.length:0;if(s=M(s,p,"max-files",()=>(i++,i<=R.value)),s.length===0)return x()}if(x(),s.length!==0)return s}function e(t){H(t),f.value!==!0&&(f.value=!0)}function _(t){ne(t),(t.relatedTarget!==null||_e.is.safari!==!0?t.relatedTarget!==z.value:document.elementsFromPoint(t.clientX,t.clientY).includes(z.value)===!1)===!0&&(f.value=!1)}function S(t){H(t);const F=t.dataTransfer.files;F.length!==0&&l(null,F),f.value=!1}function c(t){if(f.value===!0)return v("div",{ref:z,class:`q-${t}__dnd absolute-full`,onDragenter:H,onDragover:H,onDragleave:_,onDrop:S})}return Object.assign(C,{pickFiles:O,addFiles:j}),{pickFiles:O,addFiles:j,onDragover:e,onDragleave:_,processFiles:L,getDndNode:c,maxFilesNumber:R,maxTotalSizeNumber:E}}function oe(o){return(o*100).toFixed(2)+"%"}const Pe={...fe,...Ee,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},se=[...je,"start","finish","added","removed"];function Ne(o,f){const u=ue(),{props:l,slots:r,emit:m,proxy:C}=u,{$q:z}=C,A=me(l,z);function R(a,d,h){if(a.__status=d,d==="idle"){a.__uploaded=0,a.__progress=0,a.__sizeLabel=le(a.size),a.__progressLabel="0.00%";return}if(d==="failed"){C.$forceUpdate();return}a.__uploaded=d==="uploaded"?a.size:h,a.__progress=d==="uploaded"?1:Math.min(.9999,a.__uploaded/a.size),a.__progressLabel=oe(a.__progress),C.$forceUpdate()}const E=y(()=>l.disable!==!0&&l.readonly!==!0),O=q(!1),j=q(null),L=q(null),e={files:q([]),queuedFiles:q([]),uploadedFiles:q([]),uploadedSize:q(0),updateFileStatus:R,isAlive:()=>ce(u)===!1},{pickFiles:_,addFiles:S,onDragover:c,onDragleave:t,processFiles:F,getDndNode:P,maxFilesNumber:N,maxTotalSizeNumber:s}=Le({editable:E,dnd:O,getFileInput:Y,addFilesToQueue:J});Object.assign(e,o({props:l,slots:r,emit:m,helpers:e,exposeApi:a=>{Object.assign(e,a)}})),e.isBusy===void 0&&(e.isBusy=q(!1));const p=q(0),x=y(()=>p.value===0?0:e.uploadedSize.value/p.value),i=y(()=>oe(x.value)),g=y(()=>le(p.value)),w=y(()=>E.value===!0&&e.isUploading.value!==!0&&(l.multiple===!0||e.queuedFiles.value.length===0)&&(l.maxFiles===void 0||e.files.value.length<N.value)&&(l.maxTotalSize===void 0||p.value<s.value)),n=y(()=>E.value===!0&&e.isBusy.value!==!0&&e.isUploading.value!==!0&&e.queuedFiles.value.length!==0);ge(he,Z);const T=y(()=>"q-uploader column no-wrap"+(A.value===!0?" q-uploader--dark q-dark":"")+(l.bordered===!0?" q-uploader--bordered":"")+(l.square===!0?" q-uploader--square no-border-radius":"")+(l.flat===!0?" q-uploader--flat no-shadow":"")+(l.disable===!0?" disabled q-uploader--disable":"")+(O.value===!0?" q-uploader--dnd":"")),D=y(()=>"q-uploader__header"+(l.color!==void 0?` bg-${l.color}`:"")+(l.textColor!==void 0?` text-${l.textColor}`:""));Fe(e.isUploading,(a,d)=>{d===!1&&a===!0?m("start"):d===!0&&a===!1&&m("finish")});function I(){l.disable===!1&&(e.abort(),e.uploadedSize.value=0,p.value=0,K(),e.files.value=[],e.queuedFiles.value=[],e.uploadedFiles.value=[])}function U(){l.disable===!1&&G(["uploaded"],()=>{e.uploadedFiles.value=[]})}function W(){G(["idle","failed"],({size:a})=>{p.value-=a,e.queuedFiles.value=[]})}function G(a,d){if(l.disable===!0)return;const h={files:[],size:0},k=e.files.value.filter(b=>a.indexOf(b.__status)===-1?!0:(h.size+=b.size,h.files.push(b),b.__img!==void 0&&window.URL.revokeObjectURL(b.__img.src),!1));h.files.length!==0&&(e.files.value=k,d(h),m("removed",h.files))}function X(a){l.disable||(a.__status==="uploaded"?e.uploadedFiles.value=e.uploadedFiles.value.filter(d=>d.__key!==a.__key):a.__status==="uploading"?a.__abort():p.value-=a.size,e.files.value=e.files.value.filter(d=>d.__key!==a.__key?!0:(d.__img!==void 0&&window.URL.revokeObjectURL(d.__img.src),!1)),e.queuedFiles.value=e.queuedFiles.value.filter(d=>d.__key!==a.__key),m("removed",[a]))}function K(){e.files.value.forEach(a=>{a.__img!==void 0&&window.URL.revokeObjectURL(a.__img.src)})}function Y(){return L.value||j.value.getElementsByClassName("q-uploader__input")[0]}function J(a,d){const h=F(a,d,e.files.value,!0),k=Y();k!=null&&(k.value=""),h!==void 0&&(h.forEach(b=>{if(e.updateFileStatus(b,"idle"),p.value+=b.size,l.noThumbnails!==!0&&b.type.toUpperCase().startsWith("IMAGE")){const ee=new Image;ee.src=window.URL.createObjectURL(b),b.__img=ee}}),e.files.value=e.files.value.concat(h),e.queuedFiles.value=e.queuedFiles.value.concat(h),m("added",h),l.autoUpload===!0&&e.upload())}function V(){n.value===!0&&e.upload()}function $(a,d,h){if(a===!0){const k={type:"a",key:d,icon:z.iconSet.uploader[d],flat:!0,dense:!0};let b;return d==="add"?(k.onClick=_,b=Z):k.onClick=h,v(te,k,b)}}function Z(){return v("input",{ref:L,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:l.accept,multiple:l.multiple===!0?"multiple":void 0,capture:l.capture,onMousedown:re,onClick:_,onChange:J})}function ie(){return r.header!==void 0?r.header(Q):[v("div",{class:"q-uploader__header-content column"},[v("div",{class:"flex flex-center no-wrap q-gutter-xs"},[$(e.queuedFiles.value.length!==0,"removeQueue",W),$(e.uploadedFiles.value.length!==0,"removeUploaded",U),e.isUploading.value===!0?v(ae,{class:"q-uploader__spinner"}):null,v("div",{class:"col column justify-center"},[l.label!==void 0?v("div",{class:"q-uploader__title"},[l.label]):null,v("div",{class:"q-uploader__subtitle"},[g.value+" / "+i.value])]),$(w.value,"add"),$(l.hideUploadBtn===!1&&n.value===!0,"upload",e.upload),$(e.isUploading.value,"clear",e.abort)])])]}function de(){return r.list!==void 0?r.list(Q):e.files.value.map(a=>v("div",{key:a.__key,class:"q-uploader__file relative-position"+(l.noThumbnails!==!0&&a.__img!==void 0?" q-uploader__file--img":"")+(a.__status==="failed"?" q-uploader__file--failed":a.__status==="uploaded"?" q-uploader__file--uploaded":""),style:l.noThumbnails!==!0&&a.__img!==void 0?{backgroundImage:'url("'+a.__img.src+'")'}:null},[v("div",{class:"q-uploader__file-header row flex-center no-wrap"},[a.__status==="failed"?v(pe,{class:"q-uploader__file-status",name:z.iconSet.type.negative,color:"negative"}):null,v("div",{class:"q-uploader__file-header-content col"},[v("div",{class:"q-uploader__title"},[a.name]),v("div",{class:"q-uploader__subtitle row items-center no-wrap"},[a.__sizeLabel+" / "+a.__progressLabel])]),a.__status==="uploading"?v(ve,{value:a.__progress,min:0,max:1,indeterminate:a.__progress===0}):v(te,{round:!0,dense:!0,flat:!0,icon:z.iconSet.uploader[a.__status==="uploaded"?"done":"clear"],onClick:()=>{X(a)}})])]))}be(()=>{e.isUploading.value===!0&&e.abort(),e.files.value.length!==0&&K()});const Q={};for(const a in e)ye(e[a])===!0?qe(Q,a,()=>e[a].value):Q[a]=e[a];return Object.assign(Q,{upload:V,reset:I,removeUploadedFiles:U,removeQueuedFiles:W,removeFile:X,pickFiles:_,addFiles:S}),Se(Q,{canAddFiles:()=>w.value,canUpload:()=>n.value,uploadSizeLabel:()=>g.value,uploadProgressLabel:()=>i.value}),f({...e,upload:V,reset:I,removeUploadedFiles:U,removeQueuedFiles:W,removeFile:X,pickFiles:_,addFiles:S,canAddFiles:w,canUpload:n,uploadSizeLabel:g,uploadProgressLabel:i}),()=>{const a=[v("div",{class:D.value},ie()),v("div",{class:"q-uploader__list scroll"},de()),P("uploader")];e.isBusy.value===!0&&a.push(v("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[v(ae)]));const d={ref:j,class:T.value};return w.value===!0&&Object.assign(d,{onDragover:c,onDragleave:t}),v("div",d,a)}}const Oe=()=>!0;function Te(o){const f={};return o.forEach(u=>{f[u]=Oe}),f}const Ae=Te(se);var De=({name:o,props:f,emits:u,injectPlugin:l})=>xe({name:o,props:{...Pe,...f},emits:ze(u)===!0?{...Ae,...u}:[...se,...u],setup(r,{expose:m}){return Ne(l,m)}});function B(o){return typeof o=="function"?o:()=>o}const Ie="QUploader",Qe={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>o=>o.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},Me=["factoryFailed","uploaded","failed","uploading"];function $e({props:o,emit:f,helpers:u}){const l=q([]),r=q([]),m=q(0),C=y(()=>({url:B(o.url),method:B(o.method),headers:B(o.headers),formFields:B(o.formFields),fieldName:B(o.fieldName),withCredentials:B(o.withCredentials),sendRaw:B(o.sendRaw),batch:B(o.batch)})),z=y(()=>m.value>0),A=y(()=>r.value.length!==0);let R;function E(){l.value.forEach(e=>{e.abort()}),r.value.length!==0&&(R=!0)}function O(){const e=u.queuedFiles.value.slice(0);u.queuedFiles.value=[],C.value.batch(e)?j(e):e.forEach(_=>{j([_])})}function j(e){if(m.value++,typeof o.factory!="function"){L(e,{});return}const _=o.factory(e);if(!_)f("factoryFailed",new Error("QUploader: factory() does not return properly"),e),m.value--;else if(typeof _.catch=="function"&&typeof _.then=="function"){r.value.push(_);const S=c=>{u.isAlive()===!0&&(r.value=r.value.filter(t=>t!==_),r.value.length===0&&(R=!1),u.queuedFiles.value=u.queuedFiles.value.concat(e),e.forEach(t=>{u.updateFileStatus(t,"failed")}),f("factoryFailed",c,e),m.value--)};_.then(c=>{R===!0?S(new Error("Aborted")):u.isAlive()===!0&&(r.value=r.value.filter(t=>t!==_),L(e,c))}).catch(S)}else L(e,_||{})}function L(e,_){const S=new FormData,c=new XMLHttpRequest,t=(n,T)=>_[n]!==void 0?B(_[n])(T):C.value[n](T),F=t("url",e);if(!F){console.error("q-uploader: invalid or no URL specified"),m.value--;return}const P=t("formFields",e);P!==void 0&&P.forEach(n=>{S.append(n.name,n.value)});let N=0,s=0,p=0,x=0,i;c.upload.addEventListener("progress",n=>{if(i===!0)return;const T=Math.min(x,n.loaded);u.uploadedSize.value+=T-p,p=T;let D=p-s;for(let I=N;D>0&&I<e.length;I++){const U=e[I];if(D>U.size)D-=U.size,N++,s+=U.size,u.updateFileStatus(U,"uploading",U.size);else{u.updateFileStatus(U,"uploading",D);return}}},!1),c.onreadystatechange=()=>{c.readyState<4||(c.status&&c.status<400?(u.uploadedFiles.value=u.uploadedFiles.value.concat(e),e.forEach(n=>{u.updateFileStatus(n,"uploaded")}),f("uploaded",{files:e,xhr:c})):(i=!0,u.uploadedSize.value-=p,u.queuedFiles.value=u.queuedFiles.value.concat(e),e.forEach(n=>{u.updateFileStatus(n,"failed")}),f("failed",{files:e,xhr:c})),m.value--,l.value=l.value.filter(n=>n!==c))},c.open(t("method",e),F),t("withCredentials",e)===!0&&(c.withCredentials=!0);const g=t("headers",e);g!==void 0&&g.forEach(n=>{c.setRequestHeader(n.name,n.value)});const w=t("sendRaw",e);e.forEach(n=>{u.updateFileStatus(n,"uploading",0),w!==!0&&S.append(t("fieldName",n),n,n.name),n.xhr=c,n.__abort=()=>{c.abort()},x+=n.size}),f("uploading",{files:e,xhr:c}),l.value.push(c),w===!0?c.send(new Blob(e)):c.send(S)}return{isUploading:z,isBusy:A,abort:E,upload:O}}var We={name:Ie,props:Qe,emits:Me,injectPlugin:$e},He=De(We);const Xe={class:"column items-start"},ta={setup(o){return(f,u)=>(Ue(),we(Re,{class:"flex flex-center"},{default:ke(()=>[Be("div",Xe,[Ce(He,{url:"http://192.168.1.210:3000/upload",style:{"max-width":"300px"}})])]),_:1}))}};export{ta as default};
