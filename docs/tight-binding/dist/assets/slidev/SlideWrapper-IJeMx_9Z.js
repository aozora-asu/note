import{B as t,o as s,b as r,e as c,h as v,g as i,x as m,v as g,d as C,z as p,aj as o,t as _,S as k,l as f,c as $,as as j,i as P}from"../modules/vue-BXtvC8uh.js";import{N as h,a as b,a7 as w,a8 as x,a9 as y,aa as z,ab as B,ac as N,ad as G,ae as O,y as R,af as T,A as V,_ as q}from"../index-xRU-mnTK.js";const A={key:0,class:"absolute top-0 left-0 font-size-5 w-full"},D={key:0,class:"absolute top-0 right-5"},E={key:1,class:"absolute top-0 right-5"},I={__name:"global-top",setup(l){const{$slidev:e}=h();return b(),w(),x(()=>{}),y(()=>{}),(a,n)=>t(e).nav.currentPage!==t(e).nav.total?(s(),r("header",A,[c("div",{class:"bg-blue-400 h-7",style:v({width:(t(e).nav.currentPage-1)/(t(e).nav.total-2)*100+"%",transition:"width 0.3s ease"})},null,4),t(e).nav.currentPage-1<7?(s(),r("p",D," Hückel Method ")):i("v-if",!0),t(e).nav.currentPage-1>=7?(s(),r("p",E," Tight-Binding Model ")):i("v-if",!0),n[0]||(n[0]=c("p",{class:"absolute top-0 left-5"},"2022/12/14",-1))])):i("v-if",!0)}},L={key:0,class:"absolute bottom-0 right-0 font-size-5 w-full text-right"},M={class:"px-4"},W={__name:"global-bottom",setup(l){const{$slidev:e}=h();return b(),x(()=>{}),y(()=>{}),(a,n)=>t(e).nav.currentPage!==1&&t(e).nav.currentPage!==t(e).nav.total?(s(),r("footer",L,[c("div",M,m(t(e).nav.currentPage-1)+" / "+m(t(e).nav.total-2),1),c("div",{class:"bg-blue-500 h-2",style:v({width:(t(e).nav.currentPage-1)/(t(e).nav.total-2)*100+"%",transition:"width 0.3s ease"})},null,4)])):i("v-if",!0)}},U={render:()=>[g(I)]},X={render:()=>[g(W)]},F={render:()=>[]},H={render:()=>[]},Z=["data-slidev-no"],J=C({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(l){const e=l,a=p(()=>{var d,u;return((u=(d=e.route.meta)==null?void 0:d.slide)==null?void 0:u.frontmatter.zoom)??1});o(z,e.route),o(B,e.route.meta.slide.frontmatter),o(N,_(e.route.no)),o(G,_(e.renderContext)),o(O,k(e,"clicksContext")),o(T,a);const n=p(()=>a.value===1?void 0:{width:`${100/a.value}%`,height:`${100/a.value}%`,transformOrigin:"top left",transform:`scale(${a.value})`}),S=p(()=>({...n.value,"user-select":R.selectable?void 0:"none"}));return(d,u)=>(s(),r("div",{"data-slidev-no":e.route.no,class:P(t(V)(l.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:v(S.value)},[f(t(H)),(s(),$(j(e.route.component))),f(t(F))],14,Z))}}),Y=q(J,[["__scopeId","data-v-70cda8f5"]]);export{X as G,Y as S,U as a};
