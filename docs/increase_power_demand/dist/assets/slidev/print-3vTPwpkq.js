import{d as _,ak as u,z as h,o as n,b as l,e as t,x as s,B as r,F as f,ah as g,ac as v,l as x,g as b}from"../modules/vue-vWtuqWGm.js";import{a as k,u as y,z as m}from"../index-CuxrjaIM.js";import{_ as N}from"./NoteDisplay.vue_vue_type_style_index_0_lang-D6BU5Jm5.js";import"../modules/shiki-DU3eGCQ8.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},z={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},C={key:0,class:"border-main mb-8"},A=_({__name:"print",setup(D){const{slides:d,total:p}=k();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const i=h(()=>d.value.map(o=>{var a;return(a=o.meta)==null?void 0:a.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,a)=>(n(),l("div",w,[t("div",B,[t("div",L,[t("h1",T,s(r(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(n(!0),l(f,null,g(i.value,(e,c)=>(n(),l("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",z,[t("div",H,[t("div",S,s(e==null?void 0:e.no)+"/"+s(r(p)),1),v(" "+s(e==null?void 0:e.title)+" ",1),a[0]||(a[0]=t("div",{class:"flex-auto"},null,-1))])]),x(N,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),l("hr",C)):b("v-if",!0)]))),128))])]))}});export{A as default};
