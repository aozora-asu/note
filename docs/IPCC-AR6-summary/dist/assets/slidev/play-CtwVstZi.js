const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-CnZ0t1mi.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-BdR8_bDM.js","assets/modules/unplugin-icons-BUn9wfbF.js","assets/modules/vue-BoRon-WM.js","assets/modules/shiki-DuDioCMK.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/SlideWrapper-CVjKjZ_h.js","assets/index-LOt9dnAh.js","assets/index-SQ_YvUAt.css","assets/SlideWrapper-D-K3WWJb.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-BtSIzpm5.js","assets/slidev/shortcuts-CZigPGRw.js","assets/slidev/context-DI9PKrfe.js","assets/shortcuts-326FZQrK.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{d as v,ab as z,o,c as u,B as e,b as _,e as l,f as N,i as S,g as n,ai as R,z as E,k as b,aa as P,aj as $,O as k,l as m,F as B,h as A,x as D,v as I,t as W}from"../modules/vue-BoRon-WM.js";import{c as H,a as L}from"./SlideWrapper-CVjKjZ_h.js";import{v as h,a as M,w as O,x,y as w,d as V,z as T,A as U,B as j,l as C,D as F,E as G}from"../index-LOt9dnAh.js";import{b as K,G as X,c as Y,u as q,r as J,a as Q,S as Z,_ as ee,o as te}from"./shortcuts-CZigPGRw.js";import{n as oe}from"../modules/unplugin-icons-BUn9wfbF.js";import"../modules/shiki-DuDioCMK.js";import"./context-DI9PKrfe.js";import"./IconButton.vue_vue_type_script_setup_true_lang-BtSIzpm5.js";const se="/note/IPCC-AR6-summary/dist/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:i}){const r=p,a=z(r,"modelValue",i);function d(){a.value=!1}return(f,s)=>(o(),u(R,null,[e(a)?(o(),_("div",ae,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),l("div",{class:S(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[N(f.$slots,"default")],2)])):n("v-if",!0)],1024))}}),ne={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],re=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:i}){const a=z(p,"modelValue",i),d=E(()=>typeof h.info=="string");return(f,s)=>(o(),u(le,{modelValue:e(a),"onUpdate:modelValue":s[0]||(s[0]=c=>$(a)?a.value=c:null),class:"px-6 py-4"},{default:b(()=>[l("div",ne,[d.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(h).info},null,8,ie)):n("v-if",!0),s[1]||(s[1]=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),P("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ue=v({__name:"Controls",setup(p){const{isEmbedded:i}=M(),r=!h.drawings.presenterOnly&&!i.value,t=k();r&&O(()=>import("./DrawingControls-CnZ0t1mi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(f=>t.value=f.default);const a=k(),d=k();return(f,s)=>(o(),_(B,null,[t.value?(o(),u(e(t),{key:0})):n("v-if",!0),m(K),m(X),a.value?(o(),u(e(a),{key:1})):n("v-if",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(x),"onUpdate:modelValue":s[0]||(s[0]=c=>$(x)?x.value=c:null)},null,8,["modelValue"])):n("v-if",!0),e(h).info?(o(),u(re,{key:3,modelValue:e(w),"onUpdate:modelValue":s[1]||(s[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):n("v-if",!0),m(Y)],64))}}),de={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ce=v({__name:"PresenterMouse",setup(p){return(i,r)=>{const t=oe;return e(V).cursor?(o(),_("div",de,[m(t,{class:"absolute stroke-white dark:stroke-black",style:A({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):n("v-if",!0)}}}),me=v({__name:"PrintStyle",setup(p){function i(r,{slots:t}){if(t.default)return I("style",t.default())}return(r,t)=>(o(),u(i,null,{default:b(()=>[P(" @page { size: "+D(e(T))+"px "+D(e(U))+"px; margin: 0px; } ",1)]),_:1}))}}),he=v({__name:"play",setup(p){const{next:i,prev:r,isPrintMode:t}=M(),{isDrawing:a}=H(),d=W();function f(y){var g;C.value||y.button===0&&((g=y.target)==null?void 0:g.id)==="slide-container"&&(y.pageX/window.innerWidth>.5?i():r())}q(d),J(),Q();const s=E(()=>j.value||C.value),c=k();return(y,g)=>(o(),_(B,null,[e(t)?(o(),u(me,{key:0})):n("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:d,class:S(["grid",e(G)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(L,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(F).width.value:void 0,"is-main":"",onPointerdown:f,onContextmenu:e(te)},{default:b(()=>[m(Z,{"render-context":"slide"}),m(ce)]),controls:b(()=>[e(t)?n("v-if",!0):(o(),_("div",{key:0,class:S(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(a)?"pointer-events-none":""]])},[m(ee,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(C)?(o(),u(e(c),{key:0,resize:!0})):n("v-if",!0)],2),e(t)?n("v-if",!0):(o(),u(ue,{key:1})),g[0]||(g[0]=l("div",{id:"twoslash-container"},null,-1))],64))}});export{he as default};