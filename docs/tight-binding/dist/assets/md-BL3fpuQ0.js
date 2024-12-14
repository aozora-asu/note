import{_ as N}from"./slidev/KaTexBlockWrapper.vue_vue_type_script_setup_true_lang-BO8OKF5a.js";import{t as E,o as m,b as i,g as d,B as z,F as j,ah as B,x as L,f as I,c as S,k as x,l as k,e as s,ac as l,m as P,q as O,s as V}from"./modules/vue-BXtvC8uh.js";import{I as K}from"./slidev/default-BhKcVucw.js";import{_ as q,N as A,a7 as F,a8 as X,ag as D}from"./index-CSieAYDl.js";import"./slidev/chunk-KUD5POMT-2xBs6wcT.js";import"./modules/shiki-BUsG8TlL.js";const R={key:0,class:"static_text"},W={key:0},G={key:0},J={key:1},Q={key:1},U={__name:"KeyboardAnimation",props:{speed:{type:Number,default:100},words:{type:Array,required:!0}},setup(_){A();const M=_,v=F(),C=E(null),T=p=>new Promise(t=>setTimeout(t,p)),H=async()=>{const p=document.getElementsByClassName("typing_text"),t=M.speed,n=M.words;!p||p.length===0||!Array.isArray(n)||isNaN(t)||(await T(800),Array.from(p).forEach(u=>{let a=0;const o=(c,y,e=null)=>{let g=0;const h=c.length-1,r=document.createElement("span");r.className=`t${y}`,e===null?u.appendChild(r):e.appendChild(r);const b=setInterval(()=>{const f=c[g],w=r.innerHTML;r.innerHTML=w+f,g++,g>h&&(r.innerHTML=f,clearInterval(b))},t)};for(let c=0;c<n.length;c++){let y=c+1;const e=n[c],g=typeof e;if(g==="object")if(Array.isArray(e))setTimeout(()=>{o(e,y)},a),a+=e.length*t;else{const h=document.createElement("span");h.className=`wrp${c}`;const r=Object.values(e);let b=0;setTimeout(()=>{u.appendChild(h)},a+t);for(const f of r)for(const w of f){const $=y+b;setTimeout(()=>{o(w,$,h)},a),a+=w.length*t,b++}setTimeout(()=>{h.innerHTML="",h.innerHTML=Object.keys(e)},a+t),a+=t}else g==="string"&&(setTimeout(()=>{o(e,y)},a),a+=e.length*t)}}))};return X(()=>{v.value&&setTimeout(H,40)}),(p,t)=>(m(),i("div",null,[d(" スライドが非アクティブなときは、wordをそのまま表示する "),z(v)?d("v-if",!0):(m(),i("div",R,[(m(!0),i(j,null,B(_.words,(n,u)=>(m(),i("span",{key:u},[d(" セクション名を表示 "),typeof n=="object"?(m(),i("span",W,[Array.isArray(n)?(m(),i("span",G,L(n[n.length-1]),1)):(m(),i("span",J,L(Object.keys(n)[0]),1))])):d("v-if",!0),typeof n=="string"?(m(),i("span",Q,L(n),1)):d("v-if",!0)]))),128))])),d(" スライドがアクティブなときは、タイピングアニメーションを表示 "),z(v)?(m(),i("div",{key:1,ref_key:"typingContainer",ref:C,class:"typing_text"},null,512)):I(p.$slots,"default",{key:2},void 0,!0)]))}},Y=q(U,[["__scopeId","data-v-26e57126"]]),es={__name:"slides.md__slidev_2",setup(_){const{$slidev:M,$nav:v,$clicksContext:C,$clicks:T,$page:H,$renderContext:p,$frontmatter:t}=A();C.setup();const n=[{計算:[["k","け"],["い"],["s","さ"],["n","ん"]]},{理論:[["r","り"],["r","ろ"],["n","ん"]]},"-","-","-","-",{ヒュッケル法:[["h","y","ひゅ"],["k","k","e","っけ"],["r","る"],["h","ほ"],["う"]]}];return(u,a)=>{const o=N;return m(),S(K,O(V(z(D)(z(t),1))),{default:x(()=>[k(Y,{words:n,speed:80}),a[3]||(a[3]=s("hr",null,null,-1)),a[4]||(a[4]=s("p",null,[l("一般にシュレディンガー方程式はハミルトニアン"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"H")]),s("annotation",{encoding:"application/x-tex"},"\\mathscr H")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7em"}}),s("span",{class:"mord mathscr",style:{"margin-right":"0.29694em"}},"H")])])]),l("を用いて以下のように書ける")],-1)),k(o,P({},{ranges:[]}),{default:x(()=>a[0]||(a[0]=[s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"H"),s("mi",{mathvariant:"normal"},"Ψ"),s("mo",null,"="),s("mi",null,"E"),s("mi",{mathvariant:"normal"},"Ψ")]),s("annotation",{encoding:"application/x-tex"},"\\mathscr H\\Psi=E\\Psi ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7em"}}),s("span",{class:"mord mathscr",style:{"margin-right":"0.29694em"}},"H"),s("span",{class:"mord"},"Ψ"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E"),s("span",{class:"mord"},"Ψ")])])])])],-1)])),_:1},16),a[5]||(a[5]=s("p",null,[l("また"),s("strong",null,"変分原理"),l("より、任意の関数"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"bold"},"Φ")]),s("annotation",{encoding:"application/x-tex"},"\\boldsymbol{\\Phi}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6861em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"Φ")])])])])]),l("を用いてエネルギー期待値は以下のように書ける")],-1)),k(o,P({},{ranges:[]}),{default:x(()=>a[1]||(a[1]=[s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mpadded",null,[s("mo",{stretchy:"false"},"⟨"),s("mi",null,"ε"),s("mo",{stretchy:"false"},"⟩")]),s("mo",{stretchy:"false"},"["),s("mi",{mathvariant:"bold"},"Φ"),s("mo",{stretchy:"false"},"]"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mo",null,"∫"),s("msup",null,[s("mi",{mathvariant:"bold"},"Φ"),s("mo",null,"∗")]),s("mi",{mathvariant:"script"},"H"),s("mi",{mathvariant:"bold"},"Φ"),s("mi",null,"d"),s("mi",{mathvariant:"bold-italic"},"r")]),s("mrow",null,[s("mo",null,"∫"),s("msup",null,[s("mi",{mathvariant:"bold"},"Φ"),s("mo",null,"∗")]),s("mi",{mathvariant:"bold"},"Φ"),s("mi",null,"d"),s("mi",{mathvariant:"bold-italic"},"r")])])]),s("annotation",{encoding:"application/x-tex"},"\\braket{\\varepsilon}[\\boldsymbol{\\Phi}]=\\frac{\\int\\boldsymbol{\\Phi}^*\\mathscr H\\boldsymbol{\\Phi}d\\boldsymbol{r}}{\\int\\boldsymbol{\\Phi}^*\\boldsymbol{\\Phi}d\\boldsymbol{r}} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"minner"},[s("span",{class:"mopen"},"⟨"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"ε")]),s("span",{class:"mclose"},"⟩")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"["),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"Φ")])]),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.5022em","vertical-align":"-1.0011em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5011em"}},[s("span",{style:{top:"-2.305em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-symbol small-op",style:{"margin-right":"0.19445em",position:"relative",top:"-0.0006em"}},"∫"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"Φ")])]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7647em"}},[s("span",{style:{top:"-3.139em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mbin mtight"},"∗")])])])])])])]),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"Φ")])]),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.03194em"}},"r")])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.6961em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-symbol small-op",style:{"margin-right":"0.19445em",position:"relative",top:"-0.0006em"}},"∫"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"Φ")])]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7647em"}},[s("span",{style:{top:"-3.139em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mbin mtight"},"∗")])])])])])])]),s("span",{class:"mord mathscr",style:{"margin-right":"0.29694em"}},"H"),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"Φ")])]),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.03194em"}},"r")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.0011em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1)])),_:1},16),a[6]||(a[6]=s("p",null,[l("今回は、"),s("strong",null,"LCAO近似"),l("を用いて、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"bold"},"Φ")]),s("annotation",{encoding:"application/x-tex"},"\\boldsymbol{\\Phi}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6861em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"Φ")])])])])]),l("を、"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),l("原子分子のそれぞれ個々の原子軌道"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"{"),s("msub",null,[s("mi",null,"χ"),s("mi",null,"i")]),s("mo",{stretchy:"false"},"}")]),s("annotation",{encoding:"application/x-tex"},"\\{\\chi_i\\}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"{"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},"}")])])]),l("の線型結合和"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",{mathvariant:"bold"},"Φ"),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"\\boldsymbol{\\Phi}_n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8361em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"Φ")])]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),l("とする")],-1)),k(o,P({},{ranges:[]}),{default:x(()=>a[2]||(a[2]=[s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"bold"},"Φ"),s("mo",null,"="),s("msub",null,[s("mi",{mathvariant:"bold"},"Φ"),s("mi",null,"n")]),s("mo",null,"="),s("munderover",null,[s("mo",null,"∑"),s("mi",null,"i"),s("mi",null,"n")]),s("msub",null,[s("mi",null,"c"),s("mi",null,"i")]),s("msub",null,[s("mi",null,"χ"),s("mi",null,"i")]),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"("),s("mtable",{rowspacing:"0.16em",columnalign:"center center center center",columnspacing:"1em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"C"),s("mn",null,"1")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"C"),s("mn",null,"2")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mo",{lspace:"0em",rspace:"0em"},"⋯")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"C"),s("mi",null,"n")])])])])]),s("mo",{fence:"true"},")")]),s("mrow",null,[s("mo",{fence:"true"},"("),s("mtable",{rowspacing:"0.16em",columnalign:"center",columnspacing:"1em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"χ"),s("mn",null,"1")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"χ"),s("mn",null,"2")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mi",null,[s("mi",{mathvariant:"normal"},"⋮"),s("mpadded",{height:"0em",voffset:"0em"},[s("mspace",{mathbackground:"black",width:"0em",height:"1.5em"})])])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"χ"),s("mi",null,"n")])])])])]),s("mo",{fence:"true"},")")]),s("mo",null,"="),s("mi",{mathvariant:"double-struck"},"C"),s("mi",{mathvariant:"normal"},"X")]),s("annotation",{encoding:"application/x-tex"},"\\boldsymbol{\\Phi}=\\boldsymbol{\\Phi}_n=\\sum_i^nc_i\\chi_i= \\begin{pmatrix} C_1 & C_2 & \\cdots & C_n \\end{pmatrix} \\begin{pmatrix} \\chi_1 \\\\ \\chi_2 \\\\ \\vdots \\\\ \\chi_n \\end{pmatrix}=\\mathbb C\\Chi ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6861em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"Φ")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8361em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"Φ")])]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.9291em","vertical-align":"-1.2777em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"c"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"5.46em","vertical-align":"-2.48em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size1"},"(")]),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.85em"}},[s("span",{style:{top:"-3.01em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.35em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.85em"}},[s("span",{style:{top:"-3.01em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.35em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.85em"}},[s("span",{style:{top:"-3.01em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"minner"},"⋯")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.35em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.85em"}},[s("span",{style:{top:"-3.01em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.35em"}},[s("span")])])])])])]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size1"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.95em"}},[s("span",{style:{top:"-4.95em"}},[s("span",{class:"pstrut",style:{height:"7.4em"}}),s("span",{style:{width:"0.875em",height:"5.400em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.875em",height:"5.400em",viewBox:"0 0 875 5400"},[s("path",{d:`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,1884c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-1892c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.45em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.98em"}},[s("span",{style:{top:"-5.8275em"}},[s("span",{class:"pstrut",style:{height:"3.6875em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-4.6275em"}},[s("span",{class:"pstrut",style:{height:"3.6875em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-2.7675em"}},[s("span",{class:"pstrut",style:{height:"3.6875em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord"},"⋮"),s("span",{class:"mord rule",style:{"border-right-width":"0em","border-top-width":"1.5em",bottom:"0em"}})])])]),s("span",{style:{top:"-1.5675em"}},[s("span",{class:"pstrut",style:{height:"3.6875em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.48em"}},[s("span")])])])])])]),s("span",{class:"mclose"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.95em"}},[s("span",{style:{top:"-4.95em"}},[s("span",{class:"pstrut",style:{height:"7.4em"}}),s("span",{style:{width:"0.875em",height:"5.400em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.875em",height:"5.400em",viewBox:"0 0 875 5400"},[s("path",{d:`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,1809
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-1944c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.45em"}},[s("span")])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6889em"}}),s("span",{class:"mord mathbb"},"C"),s("span",{class:"mord mathrm"},"X")])])])])],-1)])),_:1},16),a[7]||(a[7]=s("p",null,[s("strong",null,"変分法"),l("でこのエネルギー期待値に最小値を与えるような"),s("strong",null,"未知定数"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"{"),s("msub",null,[s("mi",null,"C"),s("mi",null,"i")]),s("mo",{stretchy:"false"},"}")]),s("annotation",{encoding:"application/x-tex"},"\\{C_i\\}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"{"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},"}")])])]),l("とその時の"),s("strong",null,"エネルギー"),l("を決定する")],-1))]),_:1},16)}}};export{es as default};