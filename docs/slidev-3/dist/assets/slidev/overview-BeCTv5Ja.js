import{d as te,e as ne,_ as oe,f as le}from"../modules/unplugin-icons-BYuIMoSK.js";import{d as J,ab as ie,ac as ae,t as T,ad as se,E as U,D as ce,a4 as re,n as Q,B as c,o as i,c as g,i as S,h as z,ae as ue,af as de,b,j as me,K as pe,z as L,R as ve,O as fe,e as s,F as j,ag as q,k as N,x as y,g as V,l as w}from"../modules/vue-Cegr1Sts.js";import{u as he,a as ge,s as ke,c as _e,C as X,i as be,b as K,t as xe,g as G,p as ye}from"../index-6bDq46Sh.js";import{u as we,S as Ce,_ as $e,a as De}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-Ca7HbvUR.js";import{_ as W}from"./IconButton.vue_vue_type_script_setup_true_lang-CbQO9hYK.js";import{_ as Se,C as Ee}from"./ClicksSlider-BTVlwm2d.js";import"../modules/shiki-Di2RkVF8.js";const Me=["placeholder"],He=J({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},highlight:{default:!0},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(C,{emit:A}){const o=C,x=A,r=ie(o,"editing",x,{passive:!0}),{info:f,update:$}=we(ae(o,"no")),p=T("");let E;const{ignoreUpdates:k}=se(p,a=>{if(!r.value)return;const m=o.no;clearTimeout(E),E=setTimeout(()=>{$({note:a},m)},500)});U(()=>{var a;return(a=f.value)==null?void 0:a.note},(a="")=>{r.value||(clearTimeout(E),k(()=>{p.value=a}))},{immediate:!0,flush:"sync"});const d=T(),_=T();ce(()=>{var a;r.value&&((a=d.value)==null||a.focus())}),re(d,()=>{r.value=!1});function B(){!o.autoHeight||!d.value||!r.value||d.value.scrollHeight>d.value.clientHeight&&(d.value.style.height=`${d.value.scrollHeight}px`)}function R(a){r.value&&a.metaKey&&a.key==="s"&&(a.preventDefault(),$({note:p.value},o.no))}return U([p,r],()=>{Q(()=>{B()})},{flush:"post",immediate:!0}),(a,m)=>{var M;return c(r)?ue((i(),b("textarea",{key:1,ref_key:"inputEl",ref:d,"onUpdate:modelValue":m[2]||(m[2]=h=>p.value=h),class:S(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",o.class]),style:z([{"line-height":"1.75"},[o.style,_.value!=null?{height:`${_.value}px`}:{}]]),placeholder:C.placeholder,onKeydown:[m[3]||(m[3]=me(h=>r.value=!1,["esc"])),R]},null,46,Me)),[[de,p.value]]):(i(),g(Se,{key:0,class:S(["border-transparent border-2",[o.class,p.value?"":"opacity-25 italic select-none"]]),style:z(o.style),note:p.value||C.placeholder,"note-html":(M=c(f))==null?void 0:M.noteHTML,"clicks-context":C.clicksContext,"auto-scroll":!C.autoHeight,highlight:o.highlight,onMarkerClick:m[0]||(m[0]=(h,H)=>x("markerClick",h,H)),onMarkerDblclick:m[1]||(m[1]=(h,H)=>x("markerDblclick",h,H))},null,8,["class","style","note","note-html","clicks-context","auto-scroll","highlight"]))}}}),Ne={class:"h-screen w-screen of-hidden flex"},Te={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},Be={class:"relative"},Ie={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},Ve=["onClick"],Ke={p2:"",border:"t main"},We={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},ze={class:"text-3xl op20 mb2"},Re=["onDblclick"],Le={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},Oe={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},Ae={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},Fe={class:"text-xs op50"},O=450,Ye=J({__name:"overview",setup(C){he({title:`Overview - ${ke}`});const{openInEditor:A,slides:o}=ge(),x=pe(new Map),r=T([]),f=T(null),$=L(()=>o.value.map(t=>{var e,l;return a(((l=(e=t.meta)==null?void 0:e.slide)==null?void 0:l.note)||"")})),p=L(()=>$.value.reduce((t,e)=>t+e,0)),E=L(()=>o.value.map(t=>B(t)).reduce((t,e)=>t+e,0)),k=ve(),d=new WeakMap;function _(t){return d.has(t)||d.set(t,_e(t,X)),d.get(t)}function B(t){var e,l;return((e=t.meta)==null?void 0:e.clicks)||((l=_(t))==null?void 0:l.total)}function R(t){k.value===t?k.value=void 0:k.value=t}function a(t){var e;return((e=t.match(/[\w`'\-]+/g))==null?void 0:e.length)||0}function m(t){const e=t.getBoundingClientRect(),l=20;return e.top>=0-l&&e.left>=0-l&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+l&&e.right<=(window.innerWidth||document.documentElement.clientWidth)+l}function M(){const t=[];Array.from(x.entries()).forEach(([e,l])=>{m(l)&&t.push(e)}),r.value=t}function h(t){const e=document.createElement("a");e.target="_blank",e.href=ye+t.slice(1),e.click()}function H(t){const e=x.get(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function Y(t,e,l){const D=_(l);D.current===e?D.current=X:D.current=e,t.preventDefault()}return fe(()=>{Q(()=>{M()})}),(t,e)=>{const l=te,D=ne,Z=oe,ee=le;return i(),b("div",Ne,[s("nav",Te,[s("div",Be,[s("div",Ie,[(i(!0),b(j,null,q(c(o),(n,v)=>{var u,I,F,P;return i(),b("div",{key:n.no,class:"relative",style:{direction:"ltr"}},[s("button",{class:S(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",r.value.includes(v)?"op100 text-primary bg-gray:5":"op20"]),onClick:Pe=>H(v)},[s("div",null,y(v+1),1)],10,Ve),(I=(u=n.meta)==null?void 0:u.slide)!=null&&I.title?(i(),b("div",{key:0,class:S(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",r.value.includes(v)?"text-primary":"text-main important-text-op-50"])},y((P=(F=n.meta)==null?void 0:F.slide)==null?void 0:P.title),3)):V("v-if",!0)])}),128))])]),s("div",Ke,[c(be)?(i(),g(W,{key:1,title:c(K)?"Dark mode":"Light mode","pointer-events-none":"",op50:""},{default:N(()=>[c(K)?(i(),g(l,{key:0})):(i(),g(D,{key:1}))]),_:1},8,["title"])):(i(),g(W,{key:0,title:c(K)?"Switch to light mode theme":"Switch to dark mode theme",onClick:e[0]||(e[0]=n=>c(xe)())},{default:N(()=>[c(K)?(i(),g(l,{key:0})):(i(),g(D,{key:1}))]),_:1},8,["title"]))])]),s("main",{class:"flex-1 h-full of-auto",style:z(`grid-template-columns: repeat(auto-fit,minmax(${O}px,1fr))`),onScroll:M},[(i(!0),b(j,null,q(c(o),(n,v)=>(i(),b("div",{key:n.no,ref_for:!0,ref:u=>x.set(v,u),class:S(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",v===0?"pt5":""])},[s("div",We,[s("div",ze,y(v+1),1),w(W,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:u=>h(c(G)(n,!1))},{default:N(()=>[w(Z)]),_:2},1032,["onClick"]),V("v-if",!0)]),s("div",{class:"flex flex-col gap-2 my5",style:z({width:`${O}px`})},[s("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:u=>h(c(G)(n,!1))},[(i(),g(De,{key:n.no,width:O,class:"pointer-events-none important:[&_*]:select-none"},{default:N(()=>[w(Ce,{"clicks-context":_(n),route:n,"render-context":"overview"},null,8,["clicks-context","route"]),w($e,{page:n.no},null,8,["page"])]),_:2},1024))],40,Re),B(n)?(i(),g(Ee,{key:0,active:k.value===n,"clicks-context":_(n),class:"w-full mt-2",onDblclick:u=>R(n),onClick:u=>k.value=n},null,8,["active","clicks-context","onDblclick","onClick"])):V("v-if",!0)],4),s("div",Le,[w(W,{title:"Edit Note",class:S(["rounded-full w-9 h-9 text-sm",f.value===n.no?"important:op0":""]),onClick:u=>f.value=n.no},{default:N(()=>[w(ee)]),_:2},1032,["class","onClick"])]),w(He,{no:n.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,highlight:k.value===n,editing:f.value===n.no,"clicks-context":_(n),onDblclick:u=>f.value!==n.no?f.value=n.no:null,"onUpdate:editing":e[1]||(e[1]=u=>f.value=null),onMarkerClick:(u,I)=>Y(u,I,n)},null,8,["no","highlight","editing","clicks-context","onDblclick","onMarkerClick"]),$.value[v]>0?(i(),b("div",Oe,y($.value[v])+" words ",1)):V("v-if",!0)],2))),128))],36),s("div",Ae,[s("div",Fe,y(c(o).length)+" slides · "+y(E.value+c(o).length-1)+" clicks · "+y(p.value)+" words ",1)])])}}});export{Ye as default};
