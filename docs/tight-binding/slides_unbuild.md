---
theme: seriph
background: /cover.jpg
class: text-center
highlighter: shiki
transition: slide-left
title: Tight-Binding Model
mdc: true
githubPages:
  ogp: true
lineNumbers: true
aspectRatio: 16/9
download: true
exportFilename: ''
favicon: https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png
---




# Tight-Binding Model

### H$_3$Li$_36$角形分子のエネルギー準位図

<p class="text-xl">
1Y22F152 <br>
矢澤駿
</p>

<div class="pt-3">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    next page<carbon:arrow-down class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---


<KeyboardAnimation :words="toc1" :speed="80">
</KeyboardAnimation>

<script setup>
import KeyboardAnimation from './components/KeyboardAnimation.vue';

const toc1 = [
  {
    計算:[
      ["k","け"],
      ["い"],
      ["s","さ"],
      ["n","ん"]
    ]
  },
  {
    理論: [
      ['r',  'り'],
      ['r', "ろ"],
      ['n',  'ん'],
    ],
  },
  "-",
  "-",
"-",
  "-",
  {
    ヒュッケル法: [
      ['h',  'y',"ひゅ"],
      ['k',"k","e","っけ"],
      ['r',"る"],
      ['h',"ほ"],
      ['う'],
    ],
  }
];
const toc2 = [
  {
    計算:[
      ["k","け"],
      ["い"],
      ["s","さ"],
      ["n","ん"]
    ]
  },
  {
    理論: [
      ['r',  'り'],
      ['r', "ろ"],
      ['n',  'ん'],
    ],
  },
  "-",
  "-",
"-",
  "-",
  {
    ヒュッケル法: [
      ['h',  'y',"ひゅ"],
      ['k',"k","e","っけ"],
      ['r',"る"],
      ['h',"ほ"],
      ['う'],
    ],
  },
  "(",
  {
    続き: [
      ['t',  'つ'],
      ['z',"ず"],
      ['k',"き"],
    ],
  },
  ")"
];
</script>

___

一般にシュレディンガー方程式はハミルトニアン$\mathscr H$を用いて以下のように書ける
$$
\mathscr H\Psi=E\Psi
$$
また**変分原理**より、任意の関数$\boldsymbol{\Phi}$を用いてエネルギー期待値は以下のように書ける
$$
\braket{\varepsilon}[\boldsymbol{\Phi}]=\frac{\int\boldsymbol{\Phi}^*\mathscr H\boldsymbol{\Phi}d\boldsymbol{r}}{\int\boldsymbol{\Phi}^*\boldsymbol{\Phi}d\boldsymbol{r}}
$$

今回は、**LCAO近似**を用いて、$\boldsymbol{\Phi}$を、$n$原子分子のそれぞれ個々の原子軌道$\{\chi_i\}$の線型結合和$\boldsymbol{\Phi}_n$とする
$$
\boldsymbol{\Phi}=\boldsymbol{\Phi}_n=\sum_i^nc_i\chi_i=
\begin{pmatrix}
  C_1 & C_2 & \cdots & C_n
\end{pmatrix}
\begin{pmatrix}
  \chi_1 \\
  \chi_2 \\
  \vdots \\
  \chi_n
\end{pmatrix}=\mathbb C\Chi
$$

**変分法**でこのエネルギー期待値に最小値を与えるような**未知定数**$\{C_i\}$とその時の**エネルギー**を決定する

---

# 計算理論--ヒュッケル法(続き)
___

このエネルギー期待値に最小値を与える条件がヒュッケル行列$\mathbb H$を用いて以下のように与えられた
$$
\mathbb{H}\mathbb{C}=\varepsilon \mathbb{C}
$$

$$
\mathbb H=\begin{pmatrix}
  H_{11} & H_{12} & \cdots & H_{1(n-1)} & H_{1n} \\
  H_{21} & H_{22} & \cdots & H_{2(n-1)} & H_{2n}  \\
  \vdots & \vdots & \ddots & \vdots & \vdots \\
  H_{(n-1)1} & H_{(n-1)2} & \cdots & H_{(n-1)(n-1)} & H_{(n-1)n} \\
  H_{n1} & H_{n2} & \cdots & H_{n(n-1)} & H_{nn} \\
\end{pmatrix}
$$
これは**固有値**が$\varepsilon$**固有ベクトル**が$\mathbb C$となる固有値問題となる。
また$\alpha,t$を以下のように定めておく
$$
\alpha=H_{ii}=\int\chi_i\mathscr H\chi_id\boldsymbol{r},\qquad t_{ij}=H_{ij}=\int\chi_i\mathscr H\chi_jd\boldsymbol{r}\qquad(i\ne j)
$$
ここで$t$は**軌道の種類**と、**原子間の距離**が同じ時は等しい値を取るものとする
---

# ヒュッケル法における正$3$角形分子の計算
___
とらえる**描像**は以下の$xy$平面上の正$3$角形である。便宜上番号付けも行う。
<img src="/triangle-abstract.drawio.svg"></img>

ただしここで**最近接近似**を取り入れ、最も近くに位置する軌道の相互作用エネルギーのみを有効としまた、全ての原子が同じ種類の軌道であるとする

$(i,j)$成分に$i$番目の軌道と$j$番目の軌道の相互作用を対応させると、ヒュッケル行列は以下のように書ける
$$
\mathbb{H}=\begin{pmatrix}
  \alpha & t & t \\
  t & \alpha & t \\
  t & t & \alpha \\
\end{pmatrix}
$$

---

<div class="flex">
<div class="pr-5">
固有値とそれに対応する固有ベクトルを解くと
$$
\begin{align*}
    \varepsilon&=\alpha- t,\alpha- t,\alpha+ 2t \\
    \{\mathbb{C}\}
    &=\left\{\frac{1}{\sqrt2}\begin{pmatrix}
    -1\\0\\1
    \end{pmatrix},
    \frac{1}{\sqrt2}
    \begin{pmatrix}
    -1\\1\\0
    \end{pmatrix},
    \frac{1}{\sqrt3}
    \begin{pmatrix}
    1\\1\\1
    \end{pmatrix}\right\}
\end{align*}
$$

</div>
<div>
エネルギー準位図は以下のようになる
<img src="/triangleMolcular.drawio.svg" class="h-100"></img>
</div>

</div>
---

# ヒュッケル法における正$6$角形の分子の計算
___

<div class="flex">
  <div>

三角形の時と同様に、**最近接近似**を導入したもとで、ヒュッケル行列と、その固有値とそれに対応する固有ベクトルは右の通りである。

**描像**

これもまた$xy$平面に正$6$角形分子を配置する
<img src="/hexagon-abstract.drawio.svg" class="w-60"></img>

  </div>
<div>

$$
\begin{align*}
  \mathbb{H}
  &=\begin{pmatrix}
  \alpha & t & 0 & 0 & 0 & t \\
  t & \alpha & t & 0 & 0 & 0 \\
  0 & t & \alpha & t & 0 & 0 \\
  0 & 0 & t & \alpha & t & 0 \\
  0 & 0 & 0 & t & \alpha & t \\
  t & 0 & 0 & 0 & t & \alpha \\
  \end{pmatrix}\\
  \varepsilon
  &=\alpha-2t,\alpha-t,\alpha-t,\alpha+t,\alpha+t,\alpha+2t\\
  \{\mathbb{C}\}
  &=\left\{
    \frac{1}{\sqrt6}
  \begin{pmatrix}
    -1\\1\\-1\\1\\-1\\1
  \end{pmatrix},
  \frac{1}{2}
  \begin{pmatrix}
    -1\\0\\1\\-1\\0\\1
  \end{pmatrix},
  \frac{1}{2}
  \begin{pmatrix}
    -1\\1\\0\\-1\\1\\0
  \end{pmatrix},
  \frac{1}{2}
  \begin{pmatrix}
    1\\0\\-1\\-1\\0\\1
  \end{pmatrix},
  \frac{1}{2}
  \begin{pmatrix}
    -1\\-1\\0\\1\\1\\0
  \end{pmatrix},
  \frac{1}{\sqrt6}
  \begin{pmatrix}
    1\\1\\1\\1\\1\\1
  \end{pmatrix}
  \right\}
\end{align*}
$$
</div>
</div>


---

これをエネルギー準位図に描画すると以下のようになる

<img src="/hexagon-molcular-pre.drawio.svg" class="h-100"></img>

---

# Tight-Binding Model(強結合近似モデル)
___

電子バンド計算の際に用いられる近似の一つで、系の波動関数を各原子の場所に位置する孤立原子に対する波動関数の重ね合わせにより近似する手法

要は分子の形に注目して、その分子のエネルギー準位を、それを構成する部分に分けて結合(混成)の様式を考える手法のことで、なぜそのエネルギーの位置にそのようなエネルギーの準位が出るのかに解釈を与えるもの

やがては全ての分子を1原子の軌道(基底)同士の結合(混成)に還元させることが目的


## 混成の条件

1. **同じ既約表現にある波動関数が混成する**
2. **近しいエネルギーの波動関数が混成する**

今回の目的

**Tight-Binding Model**を用いて、H$_3$Li$_3$$6$角形分子のエネルギーの計算とその準位図がどこから起因するものなのかを調べる

---

# 計算理論--Tight-Binding
___

$\alpha$(on-site energy)と$t_{ij}$(transfer energy)は固体物性表の値とハリソンの方法による計算によって与えられる。
今回は水素分子の結合長$0.7414[\AA]$を基準としてそれを1辺とする正$6$角形分子を考える。
(引用元: \[1\])
また、その中でも$xy$平面に以下のような水素原子とリチウム原子がたがい違いに配置されている分子を考える
<img src="/H3Li3-abstract.drawio.svg"></img>

まず、固体元素表の値から,HとLiのon-site energy, $\alpha$の値が求められる

<div class="flex">
<div>

|   | $\alpha$ |
|:-:| :------: |
| H | -13.6 |
| Li | -5.48 |

</div>
</div>
---

# 計算理論--Tight-Binding(続き)
___


$t$はハリソンの方法を用いることで、2つの軌道と、そのそれぞれの軌道の種類から以下のように与えられる
$$
t_{ijp}=\eta_{ijp}\frac{\hbar^2}{md^2}
$$

今回、H,Liともに$s$軌道を考えているため、

ハリソン定数は$\eta_{ijp}=\eta_{ss\sigma}=-1.40[-]$と決定されさらに電子の質量と核間距離とディラック定数に関して

$m=9.11\times10^{-31}[kg],\quad d=0.7414[\AA],\quad \hbar=1.05\times10^{-34}[J・s]$とすると以下のように求められる

$$
t_{ss\sigma}=-1.4\frac{1.05^2\times10^{-68}}{9.11\times10^{-31}\times 0.7414^2\times10^{-20}}=-3.08\times10^{-18}\qquad [\frac{J^2・s^2}{kg・m^2}]
$$
これはさらに、$[\frac{J^2}{N・m}]=[J]$と$1eV=1.60\times10^{-19}[J]$より

$$
t_{ss\sigma}=\frac{-3.08\times10^{-18}}{1.60\times10^{-19}}=-19.3\qquad [eV]
$$

---

# 簡約
___
どのような**既約表現**が出てくるかは**点群**とそれのもとで**基底**を定めた分子を**簡約する**こと決まる<br>
以下の$\Gamma$は既約表現$i$の個数$A_i$の和を表していてこのように求められる
$$
\Gamma=\sum_iA_i=\sum_i\frac{1}{h}\sum_R\chi(R)\chi_i(R)
$$
ただし、$R$:対称操作, $\chi$:基底が張る表現行列の指標, $\chi_i$:規約表現の指標, $h$:対称操作の数である

点群と基底で分子を簡約することで、どのような既約表現がいくつ出てくるかを事前に知れるため大変有用である<br>

今回、$6$角形のリチウム水素H$_3$Li$_3$分子の場合、点群は$D_{3h}$、基底は$1s(\times6)$である。よってこのもとで$1s$軌道を基底としたリチウム水素分子を簡約する
$$
\begin{align*}
  D_{3h}=\{E,2C_3,3C_2,\sigma_h,2S_3,3\sigma_v\}
\end{align*}
$$



---

# 簡約(続き)
___

<div class="flex">
<div class=pr-5>

便宜上以下のように$xy$平面にH$_3$Li$_3$に配置した分子に対して番号を振る

<img src="/Li3H3.drawio.svg" class="h-30"></img>

また一例として、$C_2$に対する表現行列の例は以下のようになる
$$
\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0  \\
0 & 0 & 1 & 0 & 0 & 0  \\
0 & 1 & 0 & 0 & 0 & 0  \\
0 & 0 & 0 & 1 & 0 & 0  \\
0 & 0 & 0 & 0 & 0 & 1  \\
0 & 0 & 0 & 0 & 1 & 0  \\
\end{pmatrix}
\begin{pmatrix}
H_1\\H_2\\H_3\\Li_1\\Li_2\\Li_3
\end{pmatrix}
=\begin{pmatrix}
H_1\\H_2\\H_3\\Li_1\\Li_2\\Li_3
\end{pmatrix}
$$

</div>

<div>

よって$\chi(C_2)=2$となる。よくみると、($H_1$~$H_3$)と($Li_1$~$Li_3$)に分かれた*Block-out*行列の形をしている。

これから敷衍すると、ちょうど$D_{3h}$で$1s(\times 3)$の時の$\chi(R)$の2倍であるとわかる

よって$\chi(R)$は以下のようになる

| $D_{3h}$ | $E$ | $2C_3$ | $3C_2$ | $\sigma_h$ | $2S_3$ | $3\sigma_v$|
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| $\chi(R)$ | $3\times2$ | $0$ | $1\times2$ | $3\times2$ |0|  $1\times2$  |



</div>
</div>

---

簡約計算過程

$E,C_2\sigma_h,\sigma_v$についてのみ計算すれば良いということを踏まえて
$$
\begin{align*}

A(a_1')&=\frac{1}{12}(1\times1\times6+2\times1\times0+3\times1\times2+1\times1\times6+2\times1\times0+3\times1\times2)=2\\
A(a_2')&=\frac{1}{12}(1\times6-1\times6+1\times6-1\times6)=0\\
A(e')&=\frac{1}{12}(2\times6+0\times6+2\times6+0\times6)=2\\
A(a_1'')&=\frac{1}{12}(1\times6+1\times6-1\times6-1\times6)=0\\
A(a_2'')&=\frac{1}{12}(1\times6-1\times6-1\times6+1\times6)=0\\
A(e'')&=\frac{1}{12}(2\times6+0\times6-2\times6+0\times6)=0\\

\end{align*}
$$
よって
$$
\Gamma=2a_1'+2e'
$$

---

# 正$6$角形をTight-Binding Modelに従って考える
___


<div class="flex">
<img src="/hexagon-molcular-final.drawio.svg" class="h-100"></img>
<div>
簡約結果のと比べてみても
$$
\Gamma=2e'+2a_1'
$$
現れる規約表現が一致していることがわかる。
図は$xy$平面に分子を配置した
<img src="/Li3H3.drawio.svg"></img>
H$_3$Li$_3$分子は$D_{3h}$点群の6個の$1s$軌道基底で規約表現を振り

H$_3$,Li$_3$正三角形分子は$D_{3h}$および$C_{2v}$点群のそれぞれ3つの$1s$軌道基底で振った
</div>

</div>

<!-- ---

# 考察--分かったことわからなかったこと
___

- 縮退している点で、ヒュッケル法で求めた固有ベクトルではうまく既約表現が振れなかった
  - $\rightarrow$同じエネルギー固有値に対する固有ベクトルの線型結合もまた、同じエネルギーに対する固有ベクトルになる、という性質を生かして、基底を直行する形に直すと規約表現が振りやすくなった
- 反結合性軌道の波動関数の規約表現が$A$表現になった, $A$表現は全対称だから不思議に思った。
  - $\rightarrow B$表現がない点群もあるから全然不思議なことではないが、珍しいと思った -->

---

# 参考文献
___
1. 鈴木信夫 「日本科学会編 科学便覧 基礎編II」 丸善株式会社
2. 中崎昌雄 「分子の対称と群論」  東京化学同人
3.  [点群のまとめと座標表](https://www.iwanami.co.jp/files/moreinfo/0051900/PG.pdf) 
4.  [SI単位換算表](https://www.ohm.jp/media/tech_cooling205.pdf)
   


<!-- # 既約表現を振るコツ

___

既約表現はその分子が属する「点群」と、「その点群の対称操作による位相の状態の変化」から与えられるもの。
ポイントは、

- **基底ベクトルが直行性を満たしてない**と既約表現が触れない
  - (必要であれば、同じエネルギー固有値に対する固有ベクトルの線型結合はまた、同じエネルギーに対する固有ベクトルとなることを用いる)

また混成前の分子に既約表現を振る際、注意するべき点は
- 混成後の分子の形に対して、混成前の分子それぞれの位置関係が変わらないような対称操作を集めた点群の既約表現を振るとよいということ -->

