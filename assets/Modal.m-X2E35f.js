import{r as f,o,c as s,a as l,t as m,F as u,u as i,s as p,A as h,x as c,B as y,C as x,D as v,z as M}from"./entry.9BiDok8q.js";const k={class:"text-lg font-semibold mb-4"},w={class:"block mb-1"},D=["onUpdate:modelValue"],S=["value"],V=["type","placeholder","onUpdate:modelValue"],N={type:"submit",class:"w-full text-center bg-blue-500 text-white flex justify-center m-auto px-4 py-2 rounded-md"},g={__name:"Form",props:["formData"],emits:["formSubmitted"],setup(a,{emit:d}){const r=d,t=f({}),_=()=>{r("formSubmitted",t.value),t.value={}};return(F,U)=>(o(),s("form",{onSubmit:x(_,["prevent"]),class:"p-4"},[l("h2",k,m(a.formData.formName),1),(o(!0),s(u,null,i(a.formData.inputFields,(e,b)=>(o(),s("div",{key:b,class:"mb-4"},[l("label",w,m(e.labelName)+": ",1),e.type==="select"?p((o(),s("select",{key:0,"onUpdate:modelValue":n=>c(t)[e.name]=n,class:"w-full p-2 border rounded-md"},[(o(!0),s(u,null,i(e.items,n=>(o(),s("option",{value:n},m(n),9,S))),256))],8,D)),[[h,c(t)[e.name]]]):p((o(),s("input",{key:1,type:e.type,placeholder:`Enter ${e.labelName}`,"onUpdate:modelValue":n=>c(t)[e.name]=n,class:"w-full p-2 border rounded-md"},null,8,V)),[[y,c(t)[e.name]]])]))),128)),l("button",N,m(a.formData.formName),1)],32))}},E=g,$={key:0,class:"modal"},B={class:"modal-content"},C={__name:"Modal",props:["isOpen","openModal","closeModal"],setup(a){return(d,r)=>a.isOpen?(o(),s("div",$,[l("div",B,[v(d.$slots,"default"),l("button",{onClick:r[0]||(r[0]=(...t)=>a.closeModal&&a.closeModal(...t)),class:"w-1/2 m-auto flex justify-center bg-red-500 text-white px-4 py-2 rounded-md"}," Close ")])])):M("",!0)}},O=C;export{O as M,E as _};