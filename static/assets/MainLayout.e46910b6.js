import{Q as u}from"./QBtn.e5e59e16.js";import{Q as d,a as m}from"./QToolbar.5683ae80.js";import{E as f,Q as _,a as k,b as h,c as L}from"./EssentialLink.5aa1abb9.js";import{Q as b,a as g}from"./QItem.7cdcef96.js";import{_ as Q,d as v,r as w,a as r,o as n,c as l,w as o,e,f as C,g as D,F as T,h as s,i as V,m as y}from"./index.71e904c6.js";import"./render.3cdd0da6.js";import"./QResizeObserver.0135b024.js";import"./use-dark.9495cb7f.js";import"./QScrollObserver.fdd97da4.js";import"./selection.2a5852a8.js";import"./format.de7e9769.js";const P=[{title:"Acceuil",caption:"page d'aceuil",icon:"home",link:"acceuil"},{title:"Impression",caption:"Impression Fichier",icon:"print",link:"print"},{title:"Achat",caption:"Commande fournisseur",icon:"shopping_cart",link:"achat"},{title:"Devis",caption:"Commande fournisseur",icon:"shopping_cart",link:"devis"},{title:"Debit Tube",caption:"Calcul Debit Tube",icon:"carpenter",link:"tube"},{title:"Poid T\xF4le",caption:"Calcul Poid T\xF4le",icon:"scale",link:"poid"},{title:"A propos",caption:"Patch note",icon:"help",link:"apropos"}],B=v({name:"MainLayout",components:{EssentialLink:f},setup(){const t=w(!1);return{essentialLinks:P,leftDrawerOpen:t,toggleLeftDrawer(){t.value=!t.value}}}}),E=s("DPS Tools"),F=V("div",null,"V0.0.7",-1),M=s("Menu");function $(t,i,A,I,N,O){const c=r("EssentialLink"),p=r("router-view");return n(),l(_,{view:"hHh Lpr lFf"},{default:o(()=>[e(k,{elevated:""},{default:o(()=>[e(d,null,{default:o(()=>[e(u,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),e(m,null,{default:o(()=>[E]),_:1}),F]),_:1})]),_:1}),e(h,{modelValue:t.leftDrawerOpen,"onUpdate:modelValue":i[0]||(i[0]=a=>t.leftDrawerOpen=a),"show-if-above":"",bordered:""},{default:o(()=>[e(b,null,{default:o(()=>[e(g,{header:""},{default:o(()=>[M]),_:1}),(n(!0),C(T,null,D(t.essentialLinks,a=>(n(),l(c,y({key:a.title},a),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),e(L,{style:{background:"grey"}},{default:o(()=>[e(p)]),_:1})]),_:1})}var W=Q(B,[["render",$]]);export{W as default};
