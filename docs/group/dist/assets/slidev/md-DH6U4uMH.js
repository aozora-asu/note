import{d as p,z as m,o as c,b as f,e as i,f as _,h as v,c as $,k as g,q as h,s as k,B as a}from"../modules/vue-DLZbx_hB.js";import{u,f as x}from"./context-CBXvoZLh.js";import"../index-VH4m5bXX.js";import"../modules/shiki-BQJBwW9n.js";function l(e){return e.startsWith("/")?"/note/group/dist/"+e.slice(1):e}function y(e,s=!1){const o=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const B={class:"my-auto w-full"},C=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const s=e,o=m(()=>y(s.background,!0));return(t,r)=>(c(),f("div",{class:"slidev-layout cover text-center",style:v(o.value)},[i("div",B,[_(t.$slots,"default")])],4))}}),A={__name:"slides.md__slidev_1",setup(e){const{$slidev:s,$nav:o,$clicksContext:t,$clicks:r,$page:b,$renderContext:z,$frontmatter:d}=u();return t.setup(),(P,n)=>(c(),$(C,h(k(a(x)(a(d),0))),{default:g(()=>n[0]||(n[0]=[i("h1",null,"群論",-1)])),_:1},16))}};export{A as default};
