import{Q as r,a as m}from"./QToolbar.c2aaabbc.js";import{l as V,k as h,r as v,o as Q,c as q,w as a,i as s,e as l,Q as g,h as i}from"./index.3d57119a.js";import{Q as p}from"./QCard.d0fb1973.js";import{Q as n}from"./QBtnToggle.4fdfb6ff.js";import{Q as y}from"./QBtn.1fc8a42d.js";import{Q as w}from"./QPage.65cfbcb2.js";import"./axios.6eaa92f0.js";import"./render.489cad2f.js";import"./use-dark.ab9b48eb.js";import"./private.use-form.95f631f2.js";const C=V("div",{class:"q-space"});var x=h({name:"QSpace",setup(){return()=>C}});const k={class:"column items-start"},T={class:"Poid q-gutter-md"},U=i("Calcule poids t\xF4le"),B={style:{"font-size":"21px"}},P=i("Mati\xE8re"),N={style:{margin:"10px"}},S={class:"column"},z=i("Dimension"),A={style:{margin:"10px"}},D={class:"column"},$=i("Epaisseur"),E={style:{margin:"10px"}},F={class:"column"},I=i("Quantit\xE9"),L={style:{"font-size":"21px"}},M={style:{margin:"10px"}},j={class:"column"},el={setup(G){const c=v(),_=v(),t=v(),u=v(),b=v();function d(){if(c.value!=null&&_.value!=null&&t.value!=null&&u.value!=null){let f=c.value*_.value*t.value*u.value;b.value=f.toFixed(2)}}return(f,e)=>(Q(),q(w,{class:"flex flex-center"},{default:a(()=>[s("div",k,[s("div",T,[l(p,{class:"shadow-10 q-card--bordered"},{default:a(()=>[l(r,{class:"bg-primary text-white"},{default:a(()=>[l(m,null,{default:a(()=>[U]),_:1}),l(x),s("div",B,"poids = "+g(b.value)+"kg",1)]),_:1})]),_:1}),l(p,{class:"shadow-10 q-card--bordered"},{default:a(()=>[l(r,null,{default:a(()=>[l(m,null,{default:a(()=>[P]),_:1})]),_:1}),s("div",N,[s("div",S,[l(n,{modelValue:c.value,"onUpdate:modelValue":[e[0]||(e[0]=o=>c.value=o),d],push:"",glossy:"","toggle-color":"primary",options:[{label:"Acier",value:7.8},{label:"Inox",value:8.02},{label:"Alu",value:2.74},{label:"Cuivre",value:8.92},{label:"Laiton",value:8.3}]},null,8,["modelValue","options"])])])]),_:1}),l(p,{class:"shadow-10 q-card--bordered"},{default:a(()=>[l(r,null,{default:a(()=>[l(m,null,{default:a(()=>[z]),_:1})]),_:1}),s("div",A,[s("div",D,[l(n,{modelValue:_.value,"onUpdate:modelValue":[e[1]||(e[1]=o=>_.value=o),d],push:"",glossy:"","toggle-color":"primary",options:[{label:"2000x1000",value:2},{label:"2500x1250",value:3.125},{label:"3000x1500",value:4.5},{label:"4000x1500",value:6},{label:"4000x2000",value:8}]},null,8,["modelValue","options"])])])]),_:1}),l(p,{class:"shadow-10 q-card--bordered"},{default:a(()=>[l(r,null,{default:a(()=>[l(m,null,{default:a(()=>[$]),_:1})]),_:1}),s("div",E,[s("div",F,[l(n,{modelValue:t.value,"onUpdate:modelValue":[e[2]||(e[2]=o=>t.value=o),d],push:"",glossy:"","toggle-color":"primary",options:[{label:"10/10",value:1},{label:"15/10",value:1.5},{label:"20/10",value:2},{label:"25/10",value:2.5},{label:"30/10",value:3}]},null,8,["modelValue","options"]),l(n,{modelValue:t.value,"onUpdate:modelValue":[e[3]||(e[3]=o=>t.value=o),d],push:"",glossy:"","toggle-color":"primary",options:[{label:"4mm",value:4},{label:"5mm",value:5},{label:"6mm",value:6},{label:"8mm",value:8},{label:"10mm",value:10}]},null,8,["modelValue"]),l(n,{modelValue:t.value,"onUpdate:modelValue":[e[4]||(e[4]=o=>t.value=o),d],push:"",glossy:"","toggle-color":"primary",options:[{label:"12mm",value:12},{label:"15mm",value:15},{label:"20mm",value:20},{label:"25mm",value:25},{label:"30mm",value:30}]},null,8,["modelValue"])])])]),_:1}),l(p,{class:"shadow-10 q-card--bordered"},{default:a(()=>[l(r,null,{default:a(()=>[l(m,null,{default:a(()=>[I]),_:1}),l(x),s("div",L,[l(y,{color:"primary",dense:"",label:"-",disable:u.value===1||u.value===void 0,onClick:e[5]||(e[5]=o=>{u.value--,d()})},null,8,["disable"]),i(" "+g(u.value)+" ",1),l(y,{color:"primary",dense:"",label:"+",disable:u.value===void 0,onClick:e[6]||(e[6]=o=>{u.value++,d()})},null,8,["disable"])])]),_:1}),s("div",M,[s("div",j,[l(n,{modelValue:u.value,"onUpdate:modelValue":[e[7]||(e[7]=o=>u.value=o),d],push:"",glossy:"","toggle-color":"primary",options:[{label:"1",value:1},{label:"5",value:5},{label:"10",value:10},{label:"50",value:50},{label:"100",value:100}]},null,8,["modelValue"])])])]),_:1})])])]),_:1}))}};export{el as default};
