import{d as p,z as m,o as c,b as f,e as a,f as v,h as _,c as $,k,q as g,s as h,B as l}from"../modules/vue-Cegr1Sts.js";import{u as d,f as x}from"./context-vR5SqqkU.js";import"../index-BYAU86n5.js";import"../modules/shiki-Di2RkVF8.js";function i(e){return e.startsWith("/")?"/note/docs/example-slidev/"+e.slice(1):e}function y(e,s=!1){const o=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const B={class:"my-auto w-full"},C=p({__name:"cover",props:{background:{default:""}},setup(e){d();const s=e,o=m(()=>y(s.background,!0));return(t,r)=>(c(),f("div",{class:"slidev-layout cover",style:_(o.value)},[a("div",B,[v(t.$slots,"default")])],4))}}),A={__name:"slides.md__slidev_1",setup(e){const{$slidev:s,$nav:o,$clicksContext:t,$clicks:r,$page:b,$renderContext:z,$frontmatter:u}=d();return t.setup(),(P,n)=>(c(),$(C,g(h(l(x)(l(u),0))),{default:k(()=>n[0]||(n[0]=[a("h1",null,"スライドのタイトル",-1),a("p",null,"スライドの説明",-1)])),_:1},16))}};export{A as default};
