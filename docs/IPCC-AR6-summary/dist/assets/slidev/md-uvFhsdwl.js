import{d as p,z as m,o as i,b as f,e as n,f as v,h as _,c as $,k as h,q as k,s as x,B as c}from"../modules/vue-Cegr1Sts.js";import{u as d,f as C}from"./context-eMT0GmDj.js";import"../index-PPyuky6B.js";import"../modules/shiki-Di2RkVF8.js";function l(e){return e.startsWith("/")?"/note/IPCC-AR6-summary/dist/"+e.slice(1):e}function g(e,o=!1){const s=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const y={class:"my-auto w-full"},B=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){d();const o=e,s=m(()=>g(o.background,!0));return(t,r)=>(i(),f("div",{class:"slidev-layout cover text-center",style:_(s.value)},[n("div",y,[v(t.$slots,"default")])],4))}}),I={__name:"slides.md__slidev_1",setup(e){const{$slidev:o,$nav:s,$clicksContext:t,$clicks:r,$page:P,$renderContext:b,$frontmatter:u}=d();return t.setup(),(z,a)=>(i(),$(B,k(x(c(C)(c(u),0))),{default:h(()=>a[0]||(a[0]=[n("h1",null,"IPCC 第6次評価報告書 (AR6) - 概要",-1),n("div",{class:"text-center"}," 気候変動に関する政府間パネルによる最新の科学的知見と政策決定者向けの要約 ",-1)])),_:1},16))}};export{I as default};
