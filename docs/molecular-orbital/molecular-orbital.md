---
theme: seriph
background: /cover.png

highlighter: shiki
info: |
  ## molecular-orbital
  Presentation slides for molecular-orbital.
transition: slide-left
title: 分子軌道法
mdc: true
githubPages:
  ogp: true
lineNumbers: true
aspectRatio: 16/9
exportFilename: ''
favicon: https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png
css: windicss
---

# 分子軌道法 *Hartree Fock*

<!-- Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
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
</div> -->


---
## 多原子系のハミルトニアン

多原子系のハミルトニアンを導入する。
### 古典的全エネルギー
古典的な全エネルギーは以下のように書ける

$$
\begin{equation}
  E=
  \underbrace{\frac{1}{2m}\sum_i p_i^2}_{電子 K}
  \underbrace{+\frac{1}{2}\sum_a\frac{1}{M_a}p_a^2}_{原子核 K}
  \underbrace{-\sum_i\sum_a\frac{1}{4\pi\varepsilon_0}\frac{Z_ae}{r_{ia}}}_{核-電子}
  \underbrace{+\sum_i\sum_{j>i}\frac{1}{4\pi\varepsilon_0}\frac{e^2}{r_{ij}}}_{電子-電子}
  \underbrace{+\sum_a\sum_{b>a}\frac{1}{4\pi\varepsilon_0}\frac{Z_aZ_b}{R_{ab}}}_{核-核}
\end{equation}
$$


以下用いる単位系は**原子単位系**

:::note 原子単位系 atomic unit
ハートリー単位系とも
水素の*Borh*半径$a_0$を1とするような単位系。他にも
$4\pi\varepsilon_0,e,m_e,\hbar=1$
とする。
(SI)単位系に対して、(a.u.)と表記する
:::

### 対応原理を適用
対応原理$p=-i\hbar\nabla,E\rightarrow \mathscr H$を作用させると、ハミルトニアンは一般的に以下のように与えられる。
$$
\begin{equation}
    \mathscr{H'}=
  \underbrace{-\frac{1}{2}\sum_i\nabla_i^2}_{電子 K}
  \underbrace{-\frac{1}{2}\sum_a\frac{1}{M_a}\nabla_a^2}_{原子核 K}
  \underbrace{-\sum_i\sum_a\frac{Z_a}{r_{ia}}}_{核-電子}
  \underbrace{+\sum_i\sum_{j>i}\frac{1}{r_{ij}}}_{電子-電子}
  \underbrace{+\sum_a\sum_{b>a}\frac{Z_aZ_b}{R_{ab}}}_{核-核}
\end{equation}
$$
$M_a, Z_a$は原子核の質量と核荷電, $K$: 運動エネルギー $Kinetic$ $energy$




以下では核の運動エネルギーを無視する**Born-Oppenheimer近似**を用いる。
:::note Born-Oppenheimer近似
核の運動エネルギーを無視する近似
電子に比べると、核(陽子, 中性子)の質量が1840倍も大きいため、電子が核周りを運動する際に核は全く動かない、と捉えても良い、という近似

ハンマー投げをする際に、鉄球の回転によって人間の回転が少し歪む、という現象を無視する、みたいなイメージ。(これは遠心力と角運動量保存によるもの)
:::

核同士の相互作用は**定数**となるため、ハミルトニアンの線形性より、
$$
\begin{equation*}
  \left(
    \underbrace{-\frac{1}{2}\sum_i\nabla_i^2}_{電子 K}
    \underbrace{-\sum_i\sum_a\frac{Z_a}{r_{ia}}}_{核-電子}
    \underbrace{+\sum_i\sum_{j>i}\frac{1}{r_{ij}}}_{電子-電子}
    \underbrace{+\sum_a\sum_{b>a}\frac{Z_aZ_b}{R_{ab}}}_{核-核}
  \right)\Psi=E'\Psi
\end{equation*}
$$
$$
\begin{equation*}
  \left(
    \underbrace{-\frac{1}{2}\sum_i\nabla_i^2}_{電子 K}
    \underbrace{-\sum_i\sum_a\frac{Z_a}{r_{ia}}}_{核-電子}
    \underbrace{+\sum_i\sum_{j>i}\frac{1}{r_{ij}}}_{電子-電子}
  \right)\Psi=
  \left(
    E'-\underbrace{\sum_a\sum_{b>a}\frac{Z_aZ_b}{R_{ab}}}_{核-核}
  \right)
 \Psi
\end{equation*}
$$
つまり核の相互作用項を右辺に押し付けて、核に関する情報を全て取り除くと、ハミルトニアン$\mathscr{H}$以下のようになる。
$$
\begin{align}
    \mathscr{H}&=
  \underbrace{-\frac{1}{2}\sum_i\nabla_i^2}_{電子 K}
  \underbrace{-\sum_i\sum_a\frac{Z_a}{r_{ia}}}_{核-電子}
  \underbrace{+\sum_i\sum_{j>i}\frac{1}{r_{ij}}}_{電子-電子}\notag\\
  &=\sum_i\mathscr{H}_{core}(i)+\sum_i\sum_{j>i}\frac{1}{r_{ij}}\\
  \mathscr{H}_{core}(i)&=-\frac{1}{2}\nabla^2_i-\sum_a\frac{Z_a}{r_{ia}}
\end{align}
$$
$$
\begin{equation}
    E=E'-\underbrace{\sum_a\sum_{b>a}\frac{Z_aZ_b}{R_{ab}}}_{核-核}
\end{equation}
$$
$E$: 電子のエネルギー, $\Psi$: 電子の座標
これは固定された原子核の場における電子に関するシュレディンガー方程式となる

:::question
ハミルトニアンの核-電子, 電子-電子の項も一応定数(?)だから右辺に押し付けられないの??
$$
\underbrace{-\sum_i\sum_a\frac{Z_a}{r_{ia}}}_{核-電子}
  \underbrace{+\sum_i\sum_{j>i}\frac{1}{r_{ij}}}_{電子-電子}
$$
$\rightarrow$実際には演算子だからダメ
:::
<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->


今、さらに注目する電子の数を外側の$2n$個に絞るとする。すると注目していない電子たちと原子核がまた新たな原子核を作っているように見える。内部の電子は原子核とともに分子骨格を作っていると考えるのである。
すると一つの分子中の$2n$個の電子たちの系のハミルトニアンは以下のように書ける

$$
\begin{align}
    \mathscr{H}&=-\frac{1}{2}\sum_i^N\nabla_i^2-\sum_i^N\sum_a^N\frac{Z_a}{r_{ia}}+\sum_i^N\sum_{j>i}^N\frac{1}{r_{ij}}
\end{align}
$$

$$
\begin{align}
  \mathscr{H}(1,2,\cdots,2n)&=\sum_i^{2n}\mathscr{H}_{core}(i)+\sum_i^{2n}\sum_{j>i}\frac{1}{r_{ij}}\\
  \mathscr{H}_{core}(i)&=-\frac{1}{2}\nabla_i^2-\sum_a(\frac{Z_a}{r_{ia}})
\end{align}
$$
:::warning
ここで、$Z_a$は内部電子の効果も含んだ核荷電である
:::
これを近似的に解いていく方法を考える

---

## スレーター行列式を使った波動関数の表示

$2n$電子系の波動関数は、スレーター行列式を用いれば以下のように書ける
$$
\begin{align}
  \Psi
&=\frac{1}{\sqrt{2n!}}\left| \begin{matrix}
  \phi_1(1)\alpha(1) & \phi_1(2)\alpha(2) & \phi_1(3)\alpha(3) & \cdots &\phi_1(2n)\alpha(2n)\\
  \phi_1(1)\beta(1) & \phi_1(2)\beta(2) & \phi_1(3)\beta(3) & \cdots &\phi_1(2n)\beta(2n)\\
  \phi_2(1)\alpha(1) & \phi_2(2)\alpha(2) & \phi_2(3)\alpha(3) & \cdots &\phi_2(2n)\alpha(2n)\\
  \vdots & \vdots & \vdots & \ddots &\vdots\\
  \phi_n(1)\beta(1) & \phi_n(2)\beta(2) & \phi_n(3)\beta(3) & \cdots &\phi_n(2n)\beta(2n)\\
\end{matrix}\right|\notag\\
&\colonequals\frac{1}{\sqrt{2n!}}\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\cdots\bar{\phi_n}(2n)\right|
\end{align}
$$
ただし$\bar{\phi}$は$\beta$スピンを持っていることを表している。
**反対称化**した関数で、$ASMO(antisymmetrized MO)$関数と呼ばれる
:::note スレーター行列式
スレーター行列式は、電子状態を表すために使われる一つの表現形式
一般に、$N$個の電子が$N$個の軌道${\chi_i}$にはいる時の電子状態(全波動関数)$\Phi$が以下のように記述されるというもの
$$
\Psi\colonequals \ket{\chi_1,\chi_2\cdots,\chi_N}=\frac{1}{\sqrt{N!}}\left| \begin{matrix}
  \chi_1(x_1) & \chi_2(x_1) & \cdots & \chi_N(x_1)\\
  \chi_1(x_2) & \chi_2(x_2) & \cdots & \chi_N(x_2)\\
  \vdots & \vdots & \ddots & \vdots \\
  \chi_1(x_N) & \chi_2(x_N) & \cdots & \chi_N(x_N)\\
\end{matrix}\right|
$$
ここで、$x_i$は$i$番目の電子を表している。
しかしこの行列表現形式には問題もある。
- 電子が$\alpha,\beta$どちらか一方のスピンしか持っていないという前提
- 全体の波動関数が個々の軌道に入る電子状態の線型結合で表せるという近似(**軌道近似**と呼ばれる)

実際には真の波動関数は、このスレーター行列の無限の線型結合で表せる。
:::
:::tip この行列表現形式の1番嬉しいところ
以下の二つの現象と操作が対応しているところ
$$
\begin{align}
  &\begin{align*}
    &\textbf{2つ電子の位置を入れ変えると}\\
    &\textbf{波動関数は逆符号になる}
  \end{align*}
  &\leftrightarrows \,\,\,\,\,\,\,\,\,\,\,\,&
  \begin{align*}
    &\textbf{行列の行 or 列を入れ替えると}\\
    &\textbf{-1倍になる}
  \end{align*}\\
  &\begin{align*}
    &\textbf{任意の2つの粒子が同じ座標を持つと}\\
    &\textbf{0(パウリの排他原理)}
  \end{align*}
  &\leftrightarrows \,\,\,\,\,\,\,\,\,\,\,\,&
  \begin{align*}
    &\textbf{任意の2つの行、または列が同じ時は}\\
    &\textbf{0になる(余因子展開しようとすればわかる)}
  \end{align*}\\
  &\begin{align*}
    &\textbf{全ての粒子は区別できない。}
  \end{align*}
  &\leftrightarrows \,\,\,\,\,\,\,\,\,\,\,\,&
  \begin{align*}
    &\textbf{全ての置換パターンが考慮される}\\
  \end{align*}
\end{align}
$$
:::

:::question
なんでこんな表し方していいの??
:::

変分原理
$$
\begin{equation}
  \frac{\partial E}{\partial \Psi}=0
\end{equation}
$$
これを満たすような$\{\phi_i\}$を決定すればいいのだが、その前に$E$を求める。

## エネルギーの決定


いま、$\Psi$が実数関数であることを仮定しているため、エネルギーは以下のように書ける
$$
\begin{align*}
  E=&\int\Psi^*\mathscr{H}\Psi d\boldsymbol{r}\\
  =&\int \frac{1}{\sqrt{2n!}}\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\cdots\bar{\phi_n}(2n)\right|
\left\{\sum_i^{2n}\mathscr{H}_{core}(i)+\sum_i^{2n}\sum_{j>i}\frac{1}{r_{ij}}\right\}\\
&\times
\frac{1}{\sqrt{2n!}}\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\cdots\bar{\phi_n}(2n)\right|
d\boldsymbol{r}
\end{align*}
$$



今、ここでは、$n=2$の場合を考えてみる。この時エネルギーは以下のように表される
$$
\begin{align*}
  E=&\int\Psi^*\mathscr{H}\Psi d\boldsymbol{r}\\
  =&\frac{1}{4!}\int\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\bar{\phi_2}(4)\right|
\left\{\sum_i^{4}\mathscr{H}_{core}(i)+\sum_i^{4}\sum_{j>i}\frac{1}{r_{ij}}\right\}\\
&\times
\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\bar{\phi_2}(4)\right|
d\boldsymbol{r}
\end{align*}
$$
ここで行列式$\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\bar{\phi_n}(4)\right|$を展開しようとすると、$\phi_1()\bar{\phi}_1()\phi_2()\bar{\phi}_2()$の中に$1$~$4$の電子を割り当てた項が出てくる。また全ての置換パターンが出てくるため以下のように書き直すことができる

$$
\begin{align*}
  E=&\frac{1}{4!} \int\sum_{\sigma \in \mathfrak{S}_4}sgn(\sigma)\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))\\
  &\times \mathscr{H}\sum_{\sigma' \in \mathfrak{S}_4}sgn(\sigma')\phi_1(\sigma'(1))\bar{\phi}_1(\sigma'(2))\phi_2(\sigma'(3))\bar{\phi}_2(\sigma'(4))
d\boldsymbol{r}
\end{align*}
$$


:::tip
行列式の定義式を確認してみる
$n$次正方行列$A=(a_{ij})$の行列式は以下のようにしてかける
$$
det A=\sum_{\sigma \in \mathfrak{S}_n}sgn (\sigma)a_{1\sigma(1)}a_{2\sigma(2)}a_{3\sigma(3)}\cdots a_{n\sigma(n)}
$$

ここで、$\mathfrak{S}_n$は置換全体の集合$\{\sigma(n)\}$を表す。
また、$sgn\sigma$は置換$\sigma$の符号を表していて
$$
sgn(\sigma)=\left\{
  \begin{align*}
    1&(\sigma:偶置換)\\
    -1&(\sigma:奇置換)
  \end{align*}
\right.
$$
偶置換$\rightarrow$偶数回の置換が必要
奇置換$\rightarrow$奇数回の置換が必要
(1,2,3,4,5)$\rightarrow$(1,2,3,4,5)これは0回置換、偶置換
(1,2,3,4,5)$\rightarrow$(1,4,3,2,5)これは1回置換、奇置換
:::
:::question おもに(10)式
置換を使ったこの導出の考え方は微妙？
:::

$$
\begin{align}
  E=&\frac{1}{4!}\int|\phi_1(1)\bar{\phi}_1(2)\phi_2(3)\bar{\phi}_2(4)|\mathscr{H}\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\bar{\phi_2}(4)\right|
d\boldsymbol{r}\notag\\
=&\underbrace{\frac{1}{4!}\int|\phi_1(1)\bar{\phi}_1(2)\phi_2(3)\bar{\phi}_2(4)|
\left\{\sum_i^{4}\mathscr{H}_{core}(i)\right\}\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\bar{\phi_2}(4)\right|d\boldsymbol{r}}_{I:i番目(1つ)の電子に関する演算子の総和}\notag\\
&+\underbrace{\frac{1}{4!}\int|\phi_1(1)\bar{\phi}_1(2)\phi_2(3)\bar{\phi}_2(4)|\left\{\sum_i^{4}\sum_{j>i}\frac{1}{r_{ij}}\right\}\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\bar{\phi_2}(4)\right|
d\boldsymbol{r}}_{G:電子-核間の演算子の和}
\end{align}
$$



$\mathscr{H}_{core}(i)$は$i$番目の電子についての演算を表しているため、計算が容易である。
### $I$の計算
$$
\begin{align*}
  I=&\frac{1}{4!}\int\sum_{\sigma' \in \mathfrak{S}_4}sgn(\sigma')\phi_1(\sigma'(1))\bar{\phi}_1(\sigma'(2))\phi_2(\sigma'(3))\bar{\phi}_2(\sigma'(4))\\
  &\times\left\{\sum_i^{4}\mathscr{H}_{core}(i)\right\}\left\{\sum_{\sigma \in \mathfrak{S}_4}sgn(\sigma)\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))\right\}d\boldsymbol{r}\\
  =&\frac{1}{4!}\int\sum_{\sigma' \in \mathfrak{S}_4}sgn(\sigma')\phi_1(\sigma'(1))\bar{\phi}_1(\sigma'(2))\phi_2(\sigma'(3))\bar{\phi}_2(\sigma'(4))\\
  &\times\left\{\sum_i^{4}\sum_{\sigma \in \mathfrak{S}_4}\mathscr{H}_{core}(i)sgn(\sigma)\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))\right\}d\boldsymbol{r}\\
  =&\frac{1}{4!}\sum_{\sigma' \in \mathfrak{S}_4}\sum_i^{4}\sum_{\sigma \in \mathfrak{S}_4}\int sgn(\sigma')\phi_1(\sigma'(1))\bar{\phi}_1(\sigma'(2))\phi_2(\sigma'(3))\bar{\phi}_2(\sigma'(4))\\
  &\times\mathscr{H}_{core}(i)sgn(\sigma)\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))d\boldsymbol{r}\\
\end{align*}
$$
$\sigma'\ne\sigma$の部分は$\phi$の規格直行性より$0$となる。(演算子の左右で、配列が異なるものは0になる)

$$
\begin{align*}
  I=&\frac{1}{4!}\sum_i^{4}\sum_{\sigma \in \mathfrak{S}_4}\int sgn(\sigma)\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))\\
  &\times\mathscr{H}_{core}(i)sgn(\sigma)\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))d\boldsymbol{r}\\
  =&\frac{1}{4!}\sum_i^{4}\sum_{\sigma \in \mathfrak{S}_4}\int\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))\\
  &\times\mathscr{H}_{core}(i)\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))d\boldsymbol{r}\\
\end{align*}
$$

変数を入れ替えても積分結果は変わらないため
$$
\begin{align}
  I=&\sum_i^{4}\int\phi_1(1)\bar{\phi}_1(2)\phi_2(3)\bar{\phi}_2(4)\mathscr{H}_{core}(i)\phi_1(1)\bar{\phi}_1(2)\phi_2(3)\bar{\phi}_2(4)d\boldsymbol{r}\notag\\
  =&\underbrace{\int\phi_1(1)\mathscr{H}_{core}(1)\phi_1(1)d\boldsymbol{r}}_{I_1}+\underbrace{\int\bar{\phi}_1(2)\mathscr{H}_{core}(2)\bar{\phi}_1(2)d\boldsymbol{r}}_{I_1} \notag\\&+
  \underbrace{\int\phi_2(3)\mathscr{H}_{core}(3)\phi_2(3)d\boldsymbol{r}}_{I_2}+\underbrace{\int\bar{\phi}_2(4)\mathscr{H}_{core}(4)\bar{\phi}_2(4)d\boldsymbol{r}}_{I_2}\notag\\
  =&\underbrace{\int\phi_1(1)\mathscr{H}_{core}(1)\phi_1(1)d\boldsymbol{r}}_{I_1}+\underbrace{\int\bar{\phi}_1(1)\mathscr{H}_{core}(1)\bar{\phi}_1(1)d\boldsymbol{r}}_{I_1}\notag\\&+
  \underbrace{\int\phi_2(1)\mathscr{H}_{core}(1)\phi_2(1)d\boldsymbol{r}}_{I_2}+\underbrace{\int\bar{\phi}_2(1)\mathscr{H}_{core}(1)\bar{\phi}_2(1)d\boldsymbol{r}}_{I_2}\notag\\
  =&\sum_{i=1}^22I_i 
\end{align}
$$


:::question
これが一致するのはなんで？スピンは関係ないってこと？？
$$
\int\phi_1(1)H_{core}(1)\phi_1(1)d\tau(1)=\int\bar{\phi}_1(1)H_{core}(1)\bar{\phi}_1(1)d\tau(1)
$$
$\rightarrow$ハミルトニアンがスピンに関係ないため一致する
:::

:::note スピンの話
スレーター行列表示では、電子は必ず上向き$(\alpha)$,下向き$(\beta)$どちらかのスピンを持っている。という前提に立っている。スピン関数$\alpha, \beta$は電子のスピン状態$s$を引数に取り、$s$は$\pm\frac{\hbar}{2}$の2値変数である。つまり以下のように書ける。
$$
\begin{align}
  \alpha(s)&=\frac{\hbar}{2}\delta_{s,\frac{\hbar}{2}}\\
  \beta(s)&=-\frac{\hbar}{2}\delta_{s,-\frac{\hbar}{2}}
\end{align}
$$
:::

### $G$の計算
次に$G$を求める。

$$
\begin{align*}
G&=\frac{1}{4!}\int|\phi_1(1)\bar{\phi}_1(2)\phi_2(3)\bar{\phi}_2(4)|\left\{\sum_i^{4}\sum_{j>i}\frac{1}{r_{ij}}\right\}\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\bar{\phi_2}(4)\right|
d\boldsymbol{r}\\
&\begin{split}
=&\frac{1}{4!}\int\sum_{\sigma' \in \mathfrak{S}_4}sgn(\sigma')\phi_1(\sigma'(1))\bar{\phi}_1(\sigma'(2))\phi_2(\sigma'(3))\bar{\phi}_2(\sigma'(4))\\
&\times\left\{\sum_i^{4}\sum_{j>i}\frac{1}{r_{ij}}\right\}\left\{\sum_{\sigma \in \mathfrak{S}_4}sgn(\sigma)\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))\right\}d\boldsymbol{r}\\
\end{split}\\
&\begin{split}
=&\frac{1}{4!}\sum_i^{4}\sum_{j>i}\sum_{\sigma' \in \mathfrak{S}_4}\sum_{\sigma \in \mathfrak{S}_4}sgn(\sigma)sgn(\sigma')\int\phi_1(\sigma'(1))\bar{\phi}_1(\sigma'(2))\phi_2(\sigma'(3))\bar{\phi}_2(\sigma'(4))\\
&\times\left(\frac{1}{r_{ij}}\right)\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))d\boldsymbol{r}\\
\end{split}\\
&\begin{split}
=&\frac{1}{4!}\frac{1}{4}\sum_{\sigma'' \in \mathfrak{S}_4}\sum_{\sigma' \in \mathfrak{S}_4}\sum_{\sigma \in \mathfrak{S}_4}sgn(\sigma)sgn(\sigma')\int\phi_1(\sigma'(1))\bar{\phi}_1(\sigma'(2))\phi_2(\sigma'(3))\bar{\phi}_2(\sigma'(4))\\
&\times\left(\frac{1}{r_{\sigma''(1)\sigma''(2)}}\right)\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))d\boldsymbol{r}\\
\end{split}\\
\end{align*}
$$


ここで例えば$\frac{1}{r_{12}}$が掛かる項を見れば
$$
\begin{split}
g_{12}=&\frac{1}{4!}\sum_i^{4}\sum_{j>i}\sum_{\sigma' \in \mathfrak{S}_4}\sum_{\sigma \in \mathfrak{S}_4}sgn(\sigma)sgn(\sigma')\int\phi_1(\sigma'(1))\bar{\phi}_1(\sigma'(2))\phi_2(\sigma'(3))\bar{\phi}_2(\sigma'(4))\\
&\times\left(\frac{1}{r_{ij}}\right)\phi_1(\sigma(1))\bar{\phi}_1(\sigma(2))\phi_2(\sigma(3))\bar{\phi}_2(\sigma(4))d\boldsymbol{r}\\
\end{split}
$$




:::question
ここからの変形できない
:::

$$
\begin{equation}
  G=\sum_{i=1}^2\sum_{j=1}^2(2J_{ij}-K_{ij})
\end{equation}
$$
よって、エネルギー$E$は以下のように求められる
$$
\begin{equation}
  E=\sum_{i=1}^22I_i + \sum_{i=1}^2\sum_{j=1}^2(2J_{ij}-K_{ij})
\end{equation}
$$

## $2n$個電子系のエネルギー
$n=2$の場合を敷衍すれば以下のように求められる
$$
\begin{equation}
  E=\sum_{i=1}^n2I_i + \sum_{i=1}^n\sum_{j=1}^n(2J_{ij}-K_{ij})
\end{equation}
$$
また、$I_i,J_{ij},K_{ij}$は以下のように定義される
$$
\begin{align}
  I_i=&\int\phi_i(1)H_{core}(1)\phi_i(1)d\tau(1)\\
J_{ij}=&\int\phi_i(1)\phi_i(1)\left(\frac{1}{r_{12}}\right)\phi_j(2)\phi_j(2)d\tau(1,2)\\
K_{ij}=&\int\phi_i(1)\phi_j(1)\left(\frac{1}{r_{12}}\right)\phi_j(2)\phi_i(2)d\tau(1,2)\\
\end{align}
$$




























## 閉殻電子構造を持つ$2n$個の電子系 LCAO-SCF 方程式 Self-Consistent Field法
変分原理ではない、エネルギー最小値の求め方。
$MO$$\phi_i$をエネルギーの低い順序,$\phi_1,\phi_2,\cdots,\phi_n$に$2$個ずつの電子をスピンを反対向きにして詰めていった閉殻電子構造を持つ$2n$個の電子系を問題として扱う。

### LCAO近似でMO$\{\phi_i\}$を表す

$MO$法では、$MO$ $\phi_i$は分子を構成する原子の原子軌道$\chi_r$の線型結合で表される。
$$
\phi_i=\sum_rc_{ri}\chi_r
$$
電子のエネルギーが最小になるような$LCAO$係数$c_{ri}$を決めることがしばしば求められる。対称性の良い分子では、$c_{ri}$は一義的に決まるが、一般の場合はそうともいかない

分子軌道$\phi_i$は規格直行系になるように$c_{ri}$および$\chi_r$を設定する必要がある。
$$
\begin{equation}
S_{ij}=\int\phi_i(1)\phi_j(1)d\tau(1)=\delta_{ij}
\end{equation}
$$

### *Lagrange*の未定乗数法でエネルギー極値を持つ条件を求める
条件付きの最小値を求めるために、ラグランジュの未定乗数法を使う。未定乗数を$-2\varepsilon_{ij}$とすれば
$$
E'=\sum_{i=1}^n2I_i + \sum_{i=1}^n\sum_{j=1}^n(2J_{ij}-K_{ij})-\sum_{i=1}^n\sum_{j=1}^n2\varepsilon_{ij}S_{ij}
$$
この$E'$について、$\frac{\partial E'}{\partial \phi_i}=0$となるように$\phi_i$を決定すればいい。ここで、クーロン演算子$J_j$と交換演算子$K_j$を以下のように定義する

$$
\begin{align}
  J_j(1)\phi_i(1)=\int\phi_j(2)\phi_j(2)\left(\frac{1}{r_{12}}\right)d\tau(2)\phi_i(1)\\
  K_j(1)\phi_i(1)=\int\phi_j(2)\phi_i(2)\left(\frac{1}{r_{12}}\right)d\tau(2)\phi_j(1)
\end{align}
$$


:::note ラグランジュの未定乗数法
条件付きの極値を求めるときに使うMethod
$g(c_1,c_2,\cdots,c_n)=0$を満たす下での$f(c_1,c_2,\cdots,c_n)$に極値を与える$(c_1,c_2,\cdots,c_n)$は
$$
L(c_1,c_2,\cdots,c_n,\lambda)=f(c_1,c_2,\cdots,c_n)-\lambda g(c_1,c_2,\cdots,c_n)
$$
とおいた時に
$$
\frac{\partial L}{\partial \lambda}=\frac{\partial L}{\partial c_i}=0(1\leqq i\leqq n)
$$
を満たす。という手法。
:::

これを用いると、
$$
\begin{align}
\delta I_i=I_i(\phi_i+\delta\phi_i)-I_i(\phi_i)=&\int(\phi_i+\delta\phi_i)H_{core}(\phi_i+\delta\phi_i)d\tau-\int\phi_iH_{core}\phi_id\tau \notag\\
=&\int\delta\phi_iH_{core}\phi_id\tau+\int\delta\phi_iH_{core}\delta\phi_id\tau+\int\phi_iH_{core}\delta\phi_id\tau \notag\\
\approx&2\int\delta\phi_iH_{core}\phi_id\tau
\end{align}
$$
$\delta\phi_i$の2次以上の微少量は無視する。また$H_{core}$はエルミート性があるため$\int\delta\phi_iH_{core}\phi_id\tau=\int\phi_iH_{core}\delta\phi_id\tau$が成立する。
同様に$S_{ij}$は
$$
\begin{align}
  \delta S_{ij}=&S_{ij}(\phi_i+\delta\phi_i,\phi_j+\delta\phi_j)-S_{ij}(\phi_i,\phi_j)\notag\\
  =&\int(\phi_i+\delta\phi_i)(\phi_j+\delta\phi_j)d\tau-\int\phi_i\phi_jd\tau\notag\\
  =&\int\delta\phi_i\phi_jd\tau+\int\phi_i\delta\phi_jd\tau+\int\delta\phi_i\delta\phi_jd\tau\notag\\
  \approx&\int\delta\phi_i\phi_jd\tau+\int\phi_i\delta\phi_jd\tau
\end{align}
$$


$$
\begin{align}
  \delta J_{ij}
  =&J_{ij}(\phi_i+\delta\phi_i,\phi_j+\delta\phi_j)-J_{ij}(\phi_i,\phi_j)\notag\\
  =&\int(\phi_i(1)+\delta\phi_i(1))^2\left(\frac{1}{r_{12}}\right)(\phi_j(2)+\delta\phi_j(2))^2d\tau(1,2)-\int\phi_i(1)\phi_i(1)\left(\frac{1}{r_{12}}\right)\phi_j(2)\phi_j(2)d\tau(1,2)\notag\\
  \approx&\int(\phi_i^2(1)+2\phi_i(1)\delta\phi_i(1))\left(\frac{1}{r_{12}}\right)(\phi_j^2(2)+2\phi_j(2)\delta\phi_j(2))d\tau(1,2)-\int\phi^2_i(1)\left(\frac{1}{r_{12}}\right)\phi^2_j(2)d\tau(1,2)\notag\\
  =&\int2\phi_i(1)\delta\phi_i(1)\left(\frac{1}{r_{12}}\right)(\phi_j^2(2)+2\phi_j(2)\delta\phi_j(2))d\tau(1,2)+2\int\phi_i^2(1)\left(\frac{1}{r_{12}}\right)\phi_j(2)\delta\phi_j(2)d\tau(1,2)\notag\\
  \approx&\int2\phi_i(1)\delta\phi_i(1)\left(\frac{1}{r_{12}}\right)\phi^2_j(2)d\tau(1,2)+2\int\int\phi_i^2(1)\left(\frac{1}{r_{12}}\right)d\tau_1\phi_j(2)\delta\phi_j(2)d\tau_2\notag\\
  =&2\int\underbrace{\int\phi_j^2(2)\left(\frac{1}{r_{12}}\right)d\tau_2\phi_i(1)}_{J_j(1)\phi_i(1)}\delta\phi_i(1)d\tau_1+2\int\underbrace{\int\phi_i^2(1)\left(\frac{1}{r_{12}}\right)d\tau_1\phi_j(2)}_{J_i(2)\phi_j(2)}\delta\phi_j(2)d\tau_2\notag\\
  =&2\int J_j(1)\phi_i(1)\delta\phi_i(1)d\tau_1+2\int J_i(2)\phi_j(2)\delta\phi_j(2)d\tau_2\notag\\
  =&2\int J_j\phi_i\delta\phi_id\tau+2\int J_i\phi_j\delta\phi_jd\tau
\end{align}
$$
$\approx$のところは、2次以上の項の無視が入っている。

:::question
クーロン演算子$J$は後ろ全体にかかってるのに、$\delta\phi$を左側に出していいの？?
正確には$\frac{1}{r_{12}}$が後ろ全体にかかってるから、クーロン演算子の定義自体これが妥当ではないのでは？？
:::

$$
\begin{align}
K_{ij}
=&K_{ij}(\phi_i+\delta\phi_i,\phi_j+\delta\phi_j)-K_{ij}(\phi_i,\phi_j)\notag\\
=&\int(\phi_i(1)+\delta\phi_i(1))(\phi_j(1)+\delta\phi_j(1))\left(\frac{1}{r_{12}}\right)
(\phi_j(2)+\delta\phi_j(2))(\phi_i(2)+\delta\phi_i(2))d\tau(1,2)\notag\\
&-\int\phi_i(1)\phi_j(1)\left(\frac{1}{r_{12}}\right)
\phi_j(2)\phi_i(2)d\tau(1,2)\notag\\
\approx&\int(\phi_i(1)\phi_j(1)+\phi_j(1)\delta\phi_i(1)+\phi_i(1)\delta\phi_j(1))\left(\frac{1}{r_{12}}\right)
(\phi_i(2)\phi_j(2)+\phi_j(2)\delta\phi_i(2)+\phi_i(2)\delta\phi_j(2))d\tau(1,2)\notag\\
&-\int\phi_i(1)\phi_j(1)\left(\frac{1}{r_{12}}\right)
\phi_j(2)\phi_i(2)d\tau(1,2)\notag\\
\approx&\int\phi_i(1)\phi_j(1)\left(\frac{1}{r_{12}}\right)(\phi_j(2)\delta\phi_i(2)+\phi_i(2)\delta\phi_j(2))d\tau(1,2)\notag\\
&+\int(\phi_j(1)\delta\phi_i(1)+\phi_i(1)\delta\phi_j(1))\left(\frac{1}{r_{12}}\right)\phi_i(2)\phi_j(2)d\tau(1,2)\notag\\
=&\int\int\phi_i(1)\phi_j(1)\left(\frac{1}{r_{12}}\right)d\tau_1(\phi_j(2)\delta\phi_i(2)+\phi_i(2)\delta\phi_j(2))d\tau_2\notag\\
&+\int\int\phi_i(2)\phi_j(2)\left(\frac{1}{r_{12}}\right)d\tau_2(\phi_j(1)\delta\phi_i(1)+\phi_i(1)\delta\phi_j(1))d\tau_1\notag\\
=&\int\left\{\underbrace{\int\phi_i(1)\phi_j(1)\left(\frac{1}{r_{12}}\right)d\tau_1\phi_j(2)}_{K_j(2)\phi_i(2)}\delta\phi_i(2)+\underbrace{\int\phi_i(1)\phi_j(1)\left(\frac{1}{r_{12}}\right)d\tau_1\phi_i(2)}_{K_i(2)\phi_j(2)}\delta\phi_j(2)\right\}d\tau_2\notag\\
&+\int\left\{\underbrace{\int\phi_i(2)\phi_j(2)\left(\frac{1}{r_{12}}\right)d\tau_2\phi_j(1)}_{K_j(1)\phi_i(1)}\delta\phi_i(1)+\underbrace{\int\phi_i(2)\phi_j(2)\left(\frac{1}{r_{12}}\right)d\tau_2\phi_i(1)}_{K_i(1)\phi_j(1)}\delta\phi_j(1)\right\}d\tau_1\notag\\
=&\int K_j(2)\phi_i(2)\delta\phi_i(2)+K_i(2)\phi_j(2)\delta\phi_j(2)d\tau_2+\int K_j(1)\phi_i(1)\delta\phi_i(1)+K_i(1)\phi_j(1)\delta\phi_j(1)d\tau_1\notag\\
=&\int K_j\phi_i\delta\phi_i d\tau+\int K_i\phi_j\delta\phi_jd\tau+\int K_j\phi_i\delta\phi_id\tau+\int K_i\phi_j\delta\phi_jd\tau\notag\\
=&2\int K_j\phi_i\delta\phi_i d\tau+2\int K_i\phi_j\delta\phi_jd\tau
\end{align}
$$
よってこれらを合わせると
$$
\begin{align}
\delta E'
=&\sum_{i=1}^n4\int\delta\phi_iH_{core}\phi_id\tau \notag\\
&+ \sum_{i=1}^n\sum_{j=1}^n\left(2\left\{2\int J_i\phi_j\delta\phi_j d\tau+2\int J_i\delta\phi_j\phi_j d\tau\right\}-\left\{2\int K_j\phi_i\delta\phi_i d\tau+2\int K_i\phi_j\delta\phi_j d\tau\right\}\right)\notag\\
&-\sum_{i=1}^n\sum_{j=1}^n2\varepsilon_{ij}\left\{\int\delta\phi_i\phi_jd\tau+\int\phi_i\delta\phi_jd\tau\right\}\notag\\
=&\sum_{i=1}^n4\int\delta\phi_iH_{core}\phi_id\tau+ \sum_{i=1}^n\sum_{j=1}^n\left(2\left\{4\int J_j\phi_i\delta\phi_i d\tau\right\}-\left\{4\int K_j\phi_i\delta\phi_i d\tau\right\}\right)-\sum_{i=1}^n\sum_{j=1}^n4\varepsilon_{ij}\left\{\int\delta\phi_i\phi_jd\tau\right\}\notag\\
=&4\sum_{i=1}^n\left\{\int\delta\phi_iH_{core}\phi_id\tau+ \sum_{j=1}^n\left(2\int J_j\phi_i\delta\phi_i d\tau-\int K_j\phi_i\delta\phi_i d\tau\right)-\sum_{j=1}^n\varepsilon_{ij}\int\delta\phi_i\phi_jd\tau\right\}\notag\\
=&4\sum_{i=1}^n\int\left\{\delta\phi_iH_{core}\phi_i+ \sum_{j=1}^n\left(2 J_j\phi_i\delta\phi_i - K_j\phi_i\delta\phi_i \right)-\sum_{j=1}^n\varepsilon_{ij}\delta\phi_i\phi_j\right\}d\tau\notag\\
=&4\sum_{i=1}^n\int\delta\phi_i\left\{\left[H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right]\phi_i-\sum_{j=1}^n\varepsilon_{ij}\phi_j\right\}d\tau
\end{align}
$$

:::tip
$f(x,y)=f(y,x)$の時
$$
\sum_i\sum_jf(i,j)+f(j,i)=2\sum_i\sum_j f(i,j)
$$
:::

$\delta E'=0$となる$\{\phi_i\}$は以下の関係を満たす
$$
\begin{equation}
\left[H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right]\phi_i-\sum_{j=1}^n\varepsilon_{ij}\phi_j=0
\end{equation}
$$

$\boldsymbol{\varepsilon}=(\varepsilon_{ij}),\boldsymbol{\phi}=(\phi_i)$を用いて行列表示にすると
$$
\begin{equation}
\left[H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right]\boldsymbol{\phi}=\boldsymbol{\varepsilon}\boldsymbol{\phi}
\end{equation}
$$

### 極値条件の書き換え *Hartree-Fock*の式の導出

$\varepsilon_{ij}=\delta_{ij}\varepsilon_i$と置き換えても良い

:::question
1. $\varepsilon_{ij}$がエルミット行列$\boldsymbol{\varepsilon}$となる
2. $\boldsymbol{\varepsilon}$がユニタリ変換で対角化される
3. 式(34)をユニタリ変換しても形が変わらない


1.の証明
$I_i,J_{ij},K_{ij}\phi_i\in \R$より
$$
\begin{align}
\left[H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right]\phi_i-\sum_{j=1}^n\varepsilon_{ij}\phi_j=0\\
\left[H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right]\phi_i-\sum_{j=1}^n\varepsilon_{ij}^*\phi_j=0
\end{align}
$$
辺々を引くと
$$
0=\sum_{i=1}^n\sum_{j=1}^n(\varepsilon_{ij}-\varepsilon_{ji}^*)S_{ij}\space\therefore \varepsilon_{ij}=\varepsilon_{ji}^*
$$
:::

:::note ユニタリ変換

クーロン演算子と、交換演算子がユニタリ変換に対して普遍なことの証明
:::

$\varepsilon_i$は$MO\phi_i$の$MO$エネルギーと呼ばれる。
:::note Koopmansの定理
$MO\phi_i$を占める電子のイオン化エネルギーは$MO$エネルギー$\varepsilon_i$の符号を変えた値に等しい
:::


$$
\begin{equation}
\left[H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right]\phi_i=\varepsilon_i\phi_i
\end{equation}
$$

クーロン演算子と交換演算子を使って$J_{ij},K_{ij}$は以下のように書ける
$$
\begin{align}
J_{ij}=&\int\phi_i(1)\phi_i(1)\left(\frac{1}{r_{12}}\right)\phi_j(2)\phi_j(2)d\tau(1,2)\notag\\
=&\int J_i(2)\phi_j(2)\phi_j(2)d\tau(2)=\int J_i\phi_j\phi_jd\tau=\int J_j\phi_i\phi_id\tau\\
K_{ij}=&\int\phi_i(1)\phi_j(1)\left(\frac{1}{r_{12}}\right)\phi_j(2)\phi_i(2)d\tau(1,2)\notag\\
=&\int K_i(2)\phi_j(2)\phi_j(2)d\tau(2)=\int K_i\phi_j\phi_jd\tau=\int K_j\phi_i\phi_id\tau
\end{align}
$$

これらを用いると　

$$
\int\phi_i^*\varepsilon_i\phi_id\tau=\int\phi_i^*\left\{H_{core}+\sum_j(2J_j-K_j)\right\}\phi_id\tau
$$




$$
\begin{equation}
E=\sum_{i=1}^n(I_i+\varepsilon_i)
\end{equation}
$$

:::question
全体のエネルギー$E$は個々の$AO$のエネルギーに$I_i$を足したものの和で表されるってこと？？
単純な$\sum_i\varepsilon_i$ではないのね
:::

この式は、$2n$電子系のエネルギー$E$がこのように表される時、$\delta E=0$となり、これを満たす$\{\phi_i\}$で展開した波動関数が求めるべき真の波動関数であるということを意味している

$n$個の$MO \{\phi_i\}$それぞれを$m$個の基底となる$AO\{\chi_i\}$の線型結合で表す時、$\phi_i=\sum_{r=1}^mc_{ri}\chi_r$と表され

$$
\begin{align}
\boldsymbol{\phi}&=(\phi_1,\phi_2\cdots\phi_n)\\
\boldsymbol{\chi}&=(\chi_1,\chi_2\cdots\chi_m)\\
\mathbb{C}&=
  \begin{pmatrix}
  c_{11} & c_{12} & \cdots & c_{1n}\\
  c_{21} & c_{22} & \cdots & c_{2n}\\
  \vdots & \vdots & \ddots & \vdots\\
  c_{m1} & c_{m2} & \cdots & c_{mn}\\
  \end{pmatrix}\\
\boldsymbol{\phi}&=\boldsymbol{\chi}\mathbb{C}
\end{align}
$$
また、以下のように$H_{rs}$とそれを成分に持つ行列$\mathbb{H}=(H_{rs})$を定義しておく

$$
\begin{equation}
H_{rs}=\int\chi_rH_{core}\chi_sd\tau
\end{equation}
$$
すると、$I_i$は以下のように書ける
$$
\begin{align}
  I_i&=\int\phi_iH_{core}\phi_id\tau=\int(\sum_rc_{ri}\chi_r)H_{core}(\sum_sc_{si}\chi_s)d\tau\notag\\
  &=\sum_r\sum_sc_{ri}c_{si}H_{rs}\notag\\
  &=\begin{pmatrix}
  c_{1i} & c_{2i} & \cdots & c_{mi} 
  \end{pmatrix}
  \begin{pmatrix}
  H_{11} & H_{12} & \cdots & H_{1m}\\
  H_{21} & H_{22} & \cdots & H_{2m}\\
  \cdots & \cdots & \ddots & \cdots\\
  H_{m1} & H_{m2} & \cdots & H_{mm}\\
  \end{pmatrix}
  \begin{pmatrix}
  c_{1i} \\ 
  c_{2i} \\
  \vdots \\
  c_{mi} 
  \end{pmatrix}\notag\\
  &=\boldsymbol{c}_i^\dag\mathbb{H}\boldsymbol{c}_i
\end{align}
$$
これより
$$
\begin{align}
\int\phi_iH_{core}\phi_id\tau&=\boldsymbol{c}_i^\dag\mathbb{H}\boldsymbol{c}_i\notag\\
\int\delta\phi_iH_{core}\phi_id\tau&=\delta\boldsymbol{c}_i^\dag\mathbb{H}\boldsymbol{c}_i\\
\end{align}
$$
ここで、$\delta c_i^\dag=\begin{pmatrix}\delta c_{1i} & \delta c_{2i} & \cdots & \delta c_{mi}\end{pmatrix}$である

これを導入すると$\delta E'$は

$$
\begin{align}
\delta E'
&=4\sum_{i=1}^n\int\delta\phi_i\left\{\left[H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right]\phi_i-\sum_{j=1}^n\varepsilon_{ij}\phi_j\right\}d\tau\notag\\
&=4\sum_{i=1}^n\left\{\int\delta\phi_i\left[H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right]\phi_i d\tau-\sum_{j=1}^n\varepsilon_{ij}\int\delta\phi_i\phi_jd\tau\right\}\notag\\
&=4\sum_{i=1}^n\delta c_i^\dag\left(\mathbb{F}c_i-\sum_{j=1}^n\varepsilon_{ij}\mathbb{S}c_j\right)d\tau\\
\end{align}
$$
と書き表される。なお$\mathbb F=(F_{rs}),\mathbb S=(S_{rs})$は$\mathbb{H}$を敷衍したように以下のように定義される。
$$
\begin{align}
  F_{rs}&=\int\chi_r\left\{H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right\}\chi_sd\tau\\
  S_{rs}&=\int\chi_r\chi_sd\tau
\end{align}
$$
また、簡便のため以下のような記法を導入する
$$
(rs|tu)=\int\chi_r\chi_s\left(\frac{1}{r_{12}}\right)\chi_t\chi_ud\tau
$$
すると

$$
\begin{align*}
  J_j(1)\chi_s(1)&=\int\phi_j(2)\phi_j(2)\left(\frac{1}{r_{12}}\right)d\tau(2)\chi_s(1)\\
  &=\int\sum_{p=1}^mc_{pj}\chi_p(2)\sum_{p=1}^mc_{pj}\chi_p(2)\left(\frac{1}{r_{12}}\right)d\tau(2)\chi_s(1)\\
  &=\sum_{p=1}^m\sum_{q=1}^m\int c_{pj}\chi_p(2)c_{qj}\chi_q(2)\left(\frac{1}{r_{12}}\right)d\tau(2)\chi_s(1)\\
  &=\sum_{p=1}^m\sum_{q=1}^mc_{pj}c_{qj}\int \chi_p(2)\chi_q(2)\left(\frac{1}{r_{12}}\right)d\tau(2)\chi_s(1)\\
\end{align*}
$$

$$
\begin{align*}
  \int\chi_r(1)J_j(1)\chi_s(1)d\tau(1)
  &=\sum_{p=1}^m\sum_{q=1}^mc_{pi}c_{qi}\int \chi_p(2)\chi_q(2)\left(\frac{1}{r_{12}}\right)\chi_r(1)\chi_s(1)d\tau(1,2)\\
  &=\sum_{p=1}^m\sum_{q=1}^mc_{pi}c_{qi}(rs|pq)\\
\end{align*}
$$

$$
\begin{align*}
  K_j(1)\chi_s(1)&=\int\phi_j(2)\chi_s(2)\left(\frac{1}{r_{12}}\right)d\tau(2)\phi_j(1)\\
  &=\int\sum_{p=1}^mc_{pj}\chi_p(2)\chi_s(2)\left(\frac{1}{r_{12}}\right)d\tau(2)\sum_{p=1}^mc_{pj}\chi_p(1)\\
  &=\sum_{p=1}^m\sum_{q=1}^m\int c_{pj}\chi_p(2)\chi_s(2)\left(\frac{1}{r_{12}}\right)d\tau(2)c_{qj}\chi_q(1)\\
  &=\sum_{p=1}^m\sum_{q=1}^mc_{pj}c_{qj}\int \chi_p(2)\chi_s(2)\left(\frac{1}{r_{12}}\right)d\tau(2)\chi_q(1)\\
\end{align*}
$$

$$
\begin{align*}
  \int\chi_r(1)K_j(1)\chi_s(1)d\tau(1)
  &=\sum_{p=1}^m\sum_{q=1}^mc_{pj}c_{qj}\int \chi_p(2)\chi_s(2)\left(\frac{1}{r_{12}}\right)\chi_r(1)\chi_q(1)d\tau(1,2)\\
  &=\sum_{p=1}^m\sum_{q=1}^mc_{pj}c_{qj}(rq|ps)\\
\end{align*}
$$



$$
\begin{align}
   F_{rs}
   &=\int\chi_r\left\{H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right\}\chi_sd\tau\\
   &=\int\chi_rH_{core}\chi_ss\tau + \sum_{j=1}^n\left(2 \int \chi_rJ_j\chi_s d\tau - \int\chi_rK_j\chi_sd\tau \right)\\
   &=H_{rs} + \sum_{j=1}^n\left(2 \int \chi_rJ_j\chi_s d\tau - \int\chi_rK_j\chi_sd\tau \right)\\
   &=H_{rs} + \sum_{j=1}^n\sum_{p=1}^m\sum_{q=1}^mc_{pj}c_{qj}\left(2 (rs|pq) - (rq|ps) \right)\\
\end{align}
$$



$\delta E'=0$となる条件を求めると
$$
\begin{align}
\mathbb{F}\boldsymbol{c}_i-\sum_{j=1}^n\varepsilon_{ij}\mathbb{S}\boldsymbol{c}_j&=0\notag\\
\mathbb{F}\boldsymbol{c}_i-\varepsilon_i\mathbb{S}\boldsymbol{c}_i&=0\notag\\
\left(\mathbb{F}-\varepsilon_i\mathbb{S}\right)\boldsymbol{c}_i&=0\\
\end{align}
$$
これを***Hartree-Fock*の式**と呼ぶ。これは固有値$\varepsilon$固有ベクトル$\boldsymbol{c}$の固有値問題に帰着する。
$$
|\mathbb{F}-\varepsilon_i\mathbb{S}|=\left|
\begin{matrix} 
F_{11}-S_{11}\varepsilon & F_{12}-S_{12}\varepsilon & \cdots & F_{1m}-S_{1m}\varepsilon\\
F_{21}-S_{21}\varepsilon & F_{22}-S_{22}\varepsilon & \cdots & F_{2m}-S_{2m}\varepsilon\\
\cdots & \cdots & \ddots & \cdots\\
F_{m1}-S_{m1}\varepsilon & F_{m2}-S_{m2}\varepsilon & \cdots & F_{mm}-S_{mm}\varepsilon\\
\end{matrix}\right|=0
$$




数値計算をする上では
$\{\boldsymbol{c}_i\}\rightarrow\mathbb{F}(\boldsymbol{c})\rightarrow\varepsilon_i\rightarrow\{\boldsymbol{c}_i\}\cdots$と繰り返していき、$\varepsilon_i,\{\boldsymbol{c}_i\}$が変化しなくなるまで行う。
この手法を**SCF(Self-Consistent Field)法**という。

:::question
$\{\boldsymbol{c}_i\}$同じもの出てくるんじゃないの？？
$\rightarrow$出てこない。$\mathbb F$が$\{c_i\}$の関数になっているから
:::



## 1電子ハミルトニアン

ハミルトニアンが1電子のハミルトニアンの和で表されると考えてみる。つまり前項までで

$$
\begin{align*}
  \mathscr{H}(1,2,\cdots,2n)&=\sum_i^{2n}\mathscr{H}_{core}(i)+\sum_i^{2n}\sum_{j>i}\frac{1}{r_{ij}}\\
  \mathscr{H}_{core}(i)&=-\frac{1}{2}\nabla_i^2-\sum_a(\frac{Z_a}{r_{ia}})
\end{align*}
$$
このように定義されていたハミルトニアンが以下のように近似されるものとする
$$
\begin{equation}
\mathscr{H}(1,2,\cdots,2n)=\sum_{i=1}^{2n}H_{eff}(i)
\end{equation}
$$
このようにして与えられたハミルトニアンに対して、同様の手順を踏んでみる

### スレーター行列で全体の波動関数$\Psi$をMO$\{\phi_i\}$で近似する

$$
\Psi=\frac{1}{\sqrt{2n!}}|\phi_1\bar{\phi}_1\cdots\phi_n\bar{\phi}_n|
$$
### エネルギーを計算する
$$
\begin{align*}
E
=&\int\Psi \mathscr H\Psi d\tau\\
=&\frac{1}{2n!} \int|\phi_1\bar{\phi}_1\cdots\phi_n\bar{\phi}_n|\sum_{i=1}^{2n}H_{eff}(i)|\phi_1\bar{\phi}_1\cdots\phi_n\bar{\phi}_n|d\tau\\
=&\frac{1}{2n!} \sum_{i=1}^{2n}\sum_{\sigma \in\mathfrak S_{2n}}\sum_{\sigma'\in\mathfrak S_{2n}}\int\phi_1\bar{\phi}_1\cdots\phi_n\bar{\phi}_nH_{eff}(i)\phi_1\bar{\phi}_1\cdots\phi_n\bar{\phi}_nd\tau\\
=&\frac{1}{2n!} \sum_{i=1}^{2n}\sum_{\sigma \in\mathfrak S_{2n}}\int\phi_1\bar{\phi}_1\cdots\phi_n\bar{\phi}_nH_{eff}(i)\phi_1\bar{\phi}_1\cdots\phi_n\bar{\phi}_nd\tau\\
=&\frac{1}{2n!} \sum_{i=1}^{n}\sum_{\sigma \in\mathfrak S_{2n}}\int\phi_iH_{eff}(i)\phi_id\tau+\int\bar{\phi}_iH_{eff}(i)\bar{\phi}_id\tau\\
=&2\sum_{i=1}^{n}\int\phi_iH_{eff}(i)\phi_id\tau\\
\end{align*}
$$

### *Lagrange*の未定乗数法でエネルギー極値を持つ条件を求める

拘束条件は$S_{ij}=\int\phi_i\phi_j d\tau=\delta_{ij}$
未定乗数を$-2\varepsilon_{ij}$として
$$
E'=2\sum_{i=1}^{n}\int\phi_iH_{eff}(i)\phi_id\tau-2\sum_{i=1}^{n}\sum_{j=1}^{n}\varepsilon_{ij}\int\phi_i\phi_j d\tau
$$
微分して
$$
\delta E'=4\sum_{i=1}^{n}\int\delta\phi_iH_{eff}(i)\phi_id\tau-2\sum_{i=1}^{n}\sum_{j=1}^{n}\varepsilon_{ij}\left\{\int\delta\phi_i\phi_j d\tau+\int\phi_i\delta\phi_j d\tau\right\}
$$

$$
\delta E'=4\sum_{i=1}^{n}\int\delta\phi_iH_{eff}(i)\phi_id\tau-4\sum_{i=1}^{n}\sum_{j=1}^{n}\varepsilon_{ij}\int\delta\phi_i\phi_j d\tau
$$
よって極値を持つ条件は

$$
\sum_{i=1}^{n}\delta\phi_i\int\left\{ H_{eff}(i)\phi_i-\sum_{j=1}^{n}\varepsilon_{ij}\phi_j \right\}d\tau=0
$$
これを適切に対角化することで$\varepsilon_{ij}=\delta_{ij}\varepsilon_i$とできるため
$$
H_{eff}(i)\phi_i-\varepsilon_i\phi_i=0
$$
これをエネルギーの式に代入すると
$$
E=2\sum_{i=1}^{n}\varepsilon_i
$$

:::question
ここから先の議論いらなくない？？
$$
E=2\sum_{i=1}^{n}\varepsilon_i
$$
という結論は得られてる。$\{\phi_i\}$がまだ決定されてないからってこと？？
:::

### LCAO近似でMO$\{\phi_i\}$をAO$\{\chi_i\}$で表す
$$
\phi_i=\sum_{r=1}^mc_{ri}\chi_r
$$
と近似すれば

$$
(H_{eff}(i)-\varepsilon_i)\sum_{r=1}^mc_{ri}\chi_r=0
$$


エネルギーは
$$
\begin{align*}
E
&=2\sum_{i=1}^n\int\phi_iH_{eff}\phi_id\tau\\
&=2\sum_{i=1}^n\int \sum_{r=1}^mc_{ri}\chi_rH_{eff}\sum_{s=1}^mc_{si}\chi_sd\tau\\
&=2\sum_{i=1}^n\sum_{r=1}^m\sum_{s=1}^mc_{ri}c_{si}\int \chi_rH_{eff}\chi_sd\tau\\
&=2\sum_{i=1}^n\sum_{r=1}^m\sum_{s=1}^mc_{ri}c_{si}H_{rs}\\
\end{align*}
$$

:::question

$\{c_{ri}\}$が決定できるような式得られてないけど、、、、
:::

## 開殻構造を持つ分子に対する非制限 SCF法
非制限SCF法では$\alpha$スピンを持つ電子と$\beta$スピンを持つ電子は2組の全く独立した分子起動の組$(\phi_i^\alpha,\phi_i^\beta)$を占有すると考えられる。

$\alpha$スピンを持つ電子$m$個と$\beta$スピンを持つ電子$n$個からなる$(m+n)$電子系の波動関数は次のスレーター行列式で書かれる。
$$
\Psi=|\phi_1^\alpha(1)\phi_2^\alpha(2)\cdots\phi_m^\alpha(m)\bar{\phi}_1^\beta(1)\bar{\phi}_2^\beta(2)\cdots\bar{\phi}_n^\beta(n)|
$$
前項と同様に、$LCAO$近似にて、$MO\{\phi_i\}$は$AO\{\chi_i\}$で展開できるとすると、
$$
\begin{align}
\phi_i^\alpha=\sum_rc_{ri}^\alpha\chi_r\\
\phi_i^\beta=\sum_rc_{ri}^\beta\chi_r\\
\end{align}
$$
前項と同じように、エネルギーが最小となるような$\{c_{ri}^\alpha\},\{c_{ri}^\beta\}$を設定したい。

:::warning
この時同じように*Lagrange*の未定乗数法を使うのだが、スピンの異なる$MO$間の直交条件は制限されていない点に気をつけなければならない。
つまり、拘束条件として与えられているのは
$$
\begin{align}
  S_{ij}^\alpha&=\int\phi_i^\alpha\phi_j^\alpha d\tau=\delta_{ij}\\
  S_{ij}^\beta&=\int\phi_i^\beta\phi_j^\beta d\tau=\delta_{ij}\\
\end{align}
$$
これのみである。
:::




## 有効核電荷の話

$M$原子核,$N$電子系のハミルトニアンを書き改める
$$
\begin{align}
    \mathscr{H}
  &=\sum_i^N\mathscr{H}_{core}(i)+\sum_i^N\sum_{j>i}^N\frac{1}{r_{ij}}\\
  \mathscr{H}_{core}(i)&=-\frac{1}{2}\nabla^2_i-\sum_a^M\frac{Z_a}{r_{ia}}
\end{align}
$$
が以下のように書き改めることができるように定式化を行う。
$$
\begin{align}
  \mathscr{H}(1,2,\cdots,2n)&=\sum_i^{2n}\mathscr{H}_{core}(i)+\sum_i^{2n}\sum_{j>i}^{2n}\frac{1}{r_{ij}}\\
  \mathscr{H}_{core}(i)&=-\frac{1}{2}\nabla_i^2-\sum_a^M(\frac{Z_a^*}{r_{ia}})
\end{align}
$$


$$
 \mathscr{H}=
  -\sum_i^N\left\{\frac{1}{2}\nabla^2_i+\sum_a^M\frac{Z_a}{r_{ia}}\right\}+\sum_i^N\sum_{j>i}^N\frac{1}{r_{ij}}
$$

まず、外殻電子の番号付けを$i$で行い、内殻電子の番号付けを$j$で行う。まずこれを$2n$と$N-2n$に分ける

$$
\begin{split}
 \mathscr{H}=
 &-\sum_i^{2n}\left\{\frac{1}{2}\nabla^2_i+\sum_a^M\frac{Z_a}{r_{ia}}\right\}-\sum_j^{N-2n}\left\{\frac{1}{2}\nabla^2_j+\sum_a^M\frac{Z_a}{r_{ja}}\right\}\\
  &+\sum_i^{2n}\sum_{i'>i}^{2n}\frac{1}{r_{ii'}}+\sum_i^{2n}\sum_{j'}^N\frac{1}{r_{ij'}}+\sum_j^{N-2n}\sum_{j'>j}^{N-2n}\frac{1}{r_{jj'}}
\end{split}
$$




### $\mathscr H_{core}$について

まずこの$N-2n$電子は原子核をなしているとみることができるため、**Born-Oppenheimer近似**より$\nabla_j^2=0$とできる。この時、$r_{ja}$は限りなく0に近づくが、発散を抑えるために、これを後々核電荷に押し込める。また、$r_{ja},r_{jj'}$は定数となることに注意する

$$
\begin{split}
 \mathscr{H}=
 &-\sum_i^{2n}\left\{\frac{1}{2}\nabla^2_i+\sum_a^M\frac{Z_a}{r_{ia}}\right\}-\sum_j^{N-2n}\sum_a^M\frac{Z_a}{r_{ja}}\\
  &+\sum_i^{2n}\sum_{i'>i}^{2n}\frac{1}{r_{ii'}}+\sum_i^{2n}\sum_{j'}^N\frac{1}{r_{ij'}}+\sum_j^{N-2n}\sum_{j'>j}^{N-2n}\frac{1}{r_{jj'}}
\end{split}
$$

$$
\begin{equation*}
  \left(
   -\sum_i^{2n}\left\{\frac{1}{2}\nabla^2_i+\sum_a^M\frac{Z_a}{r_{ia}}\right\}+\sum_i^{2n}\sum_{i'>i}^{2n}\frac{1}{r_{ii'}}+\sum_i^{2n}\sum_{j'}^N\frac{1}{r_{ij'}}
  \right)\Psi=
  \left(
    E'-\sum_a^M\sum_{b>a}^M\frac{Z_aZ_b}{R_{ab}}  +\sum_j^{N-2n}\sum_a^M\frac{Z_a}{r_{ja}}-\sum_j^{N-2n}\sum_{j'>j}^{N-2n}\frac{1}{r_{jj'}}\right)
 \Psi
\end{equation*}
$$
つまり新しいハミルトニアン$\mathscr H_{new}$は以下のようにかける
$$
\begin{align*}
  \mathscr H_{new}
  &=-\sum_i^{2n}\left\{\frac{1}{2}\nabla^2_i+\sum_a^M\frac{Z_a}{r_{ia}}\right\}+\sum_i^{2n}\sum_{i'>i}^{2n}\frac{1}{r_{ii'}}+\sum_i^{2n}\sum_{j'}^N\frac{1}{r_{ij'}}\\
  &=\sum_i^{2n}\left\{\underbrace{-\frac{1}{2}\nabla^2_i-\sum_a^M\frac{Z_a}{r_{ia}}+\sum_{j'}^N\frac{1}{r_{ij'}}}_{\mathscr H_{core}}\right\}+\sum_i^{2n}\sum_{i'>i}^{2n}\frac{1}{r_{ii'}}
\end{align*}
$$

よって比較を行うことで$Z_a,Z_a^*$に以下のような関係が現れることがわかる
$$
\sum_a^M\frac{Z_a}{r_{ia}}-\sum_{j'}^N\frac{1}{r_{ij'}}=\sum_a^M\frac{Z_a^*}{r_{ia}}
$$

$a$番目の原子核の骨格をなす電子の数を$n_a$とおくと、$\sum_a^Mn_a=N$


$$
\sum_a^M\frac{Z_a}{r_{ia}}-\sum_a^M\sum_{j'}^{n_a}\frac{1}{r_{ij'}}=\sum_a^M\frac{Z_a^*}{r_{ia}}
$$

$$
\frac{Z_a}{r_{ia}}-\sum_{j'}^{n_a}\frac{1}{r_{ij'}}=\frac{Z_a^*}{r_{ia}}
$$

よって
$$
Z_a^*=Z_a-r_{ia}\sum_{j'}^{n_a}\frac{1}{r_{ij'}}
$$

:::question
右辺も一致するような変形は確認しなくていいの？、それとも別の形になるの？
$$
\sum_a^M\sum_{b>a}^M\frac{Z_aZ_b}{R_{ab}}  -\sum_j^{N-2n}\sum_a^M\frac{Z_a}{r_{ja}}+\sum_j^{N-2n}\sum_{j'>j}^{N-2n}\frac{1}{r_{jj'}}=\sum_a^M\sum_{b>a}^M\frac{Z_a^*Z_b^*}{R_{ab}}
$$

:::





## **Hartree-Fock**方程式の正凖化

$$
\begin{align}
  J_j\phi_i&=\int\phi_j\phi_j\left(\frac{1}{r_{12}}\right)d\tau\phi_i\\
  K_j\phi_i&=\int\phi_j\phi_i\left(\frac{1}{r_{12}}\right)d\tau\phi_j\\
  H_{core}(i)&=-\frac{1}{2}\nabla^2_i-\sum_a\frac{Z_a}{r_{ia}}
\end{align}
$$
$$
\begin{equation}
\left[H_{core}+ \sum_{j=1}^n\left(2 J_j[\phi_j] - K_j[\phi_j] \right)\right]\phi_i=\sum_{j=1}^n\varepsilon_{ij}\phi_j
\end{equation}
$$

$$
\begin{equation}
\left[H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right]
\begin{pmatrix}
\phi_1\\
\phi_2\\
\vdots\\
\phi_n
\end{pmatrix}
=\begin{pmatrix}
\varepsilon_{11} & \varepsilon_{12} & \cdots & \varepsilon_{1n}\\
\varepsilon_{21} & \varepsilon_{22} & \cdots & \varepsilon_{2n}\\
\vdots & \vdots & \ddots & \vdots\\
\varepsilon_{n1} & \varepsilon_{n2} & \cdots & \varepsilon_{nn}
\end{pmatrix}
\begin{pmatrix}
\phi_1\\
\phi_2\\
\vdots\\
\phi_n
\end{pmatrix}
\end{equation}
$$

これを$\boldsymbol{\varepsilon}=(\varepsilon_{ij}),\boldsymbol{\phi}=(\phi_i)$を用いて行列表示された以下の式
$$
\begin{equation}
\mathscr F([\boldsymbol{\phi}])\boldsymbol{\phi}=\boldsymbol{\varepsilon}\boldsymbol{\phi}
\end{equation}
$$

これを適切にユニタリ変換することで、以下のような式に書き換えられることを示す。
$$
\begin{equation}
\left[H_{core}+ \sum_{j=1}^n\left(2 J_j - K_j \right)\right]\phi_i=\varepsilon_{i}\phi_i
\end{equation}
$$

これを$\boldsymbol{\varepsilon}_D=(\delta_{ij}\varepsilon_{ij})$を用いて行列表示された以下の式



$$
\begin{equation}
\mathscr F([\boldsymbol{\phi}])\boldsymbol{\phi}=\boldsymbol{\varepsilon}_D\boldsymbol{\phi}
\end{equation}
$$

### ユニタリ変換

まず、**ユニタリ変換**とは。その前にまず**エルミート行列**から

:::note エルミート行列
エルミート行列とは以下のような性質を満たす正方行列$\mathbb{A}=(a_{ij})$のこと
$$
\begin{align}
  \mathbb{A}^*&=\mathbb{A}\\
  a_{ji}&= \overline{a_{ij}} 
\end{align}
$$
ただし$^*$は共役転置を表す。
対称行列の複素共役版と考えれば良い。また対角成分は必ず実数となる。
エルミート行列は適切なユニタリ行列を持って対角化が可能である。つまり
$$
\mathbb{U}^{-1}\mathbb{A}\mathbb{U}=\mathbb{U}^*\mathbb{A}\mathbb{U}=(c_i\delta_{ij})
$$
という形にできる。
:::
:::note ユニタリ行列
ユニタリ行列とは以下のような性質を満たす正方行列$\mathbb{U}=(a_{ij})$のこと
$$
\begin{align}
  \mathbb{U}^*\mathbb{U}=\mathbb{U}\mathbb{U}^*=\mathbb{I}\\
\end{align}
$$
ただし$^*$は共役転置を表す。
:::

規格直交基底$\{\phi_i\}$から、規格直交基底$\{\psi_i\}$への変換を考えてみる。
$$
\psi_i=\sum_ru_{ri}\phi_r
$$

:::question

任意の関数系$\psi$に変換したいなら厳密には$\{\phi_i\}$の完全性が必要？？
:::

$\braket{\psi_i|\psi_j}=\braket{\phi_i|\phi_j}=\delta_{ij}$

$$
\begin{align*}
\braket{\psi_i|\psi_j}
&=\braket{\sum_ru_{ri}\phi_r|\sum_su_{sj}\phi_s}\\
&=\sum_ru_{ri}^*\sum_su_{sj}\braket{\phi_r|\phi_s}\\
&=\sum_r\sum_su_{ri}^*u_{sj}\braket{\phi_r|\phi_s}\\
&=\sum_r\sum_su_{ri}^*u_{sj}\delta_{rs}\\
&=\sum_r u_{ri}^*u_{rj}\\
\end{align*}
$$
つまり、$\{u_{ri}\}$について、以下の式が成り立つ
$$
\begin{equation}
\sum_r u_{ri}^*u_{rj}=\delta_{ij}
\end{equation}
$$

これはちょうど$\mathbb U=(u_{ij})$がユニタリ行列となるということを意味している。
つまり、ユニタリ変換とは、ある規格直交基底から他の規格直交基底を作る変換を表している。

### $\mathscr F$がエルミート演算子になることの証明

エルミート演算子の線型結合もまた、エルミート演算子になる
$$
\mathscr F^*=\mathscr F
$$

### $\boldsymbol{\varepsilon}$がエルミート行列となることの証明

$\varepsilon_{ij}$は、$\mathscr F$の期待値である

$$
\varepsilon_{ij}=\braket{\phi_i|\mathscr F|\phi_j}=\int\phi_i^*\mathscr F\phi_jd\tau
$$

$$
\begin{align*}
\int\phi_i^*\mathscr F\phi_jd\tau&=\left(\int\phi_j^*\mathscr F\phi_id\tau\right)^*\\
\varepsilon_{ij}&=(\varepsilon_{ji})^*
\end{align*}
$$

### $\mathscr F$が基底変換(ユニタリ変換)において不変なことの証明



これより、$\mathscr F$の変換を行う

$$
\begin{align*}
\mathscr F[\phi]&=H_{core}+ \sum_{j=1}^n\left(2 J_j[\phi_j] - K_j[\phi_j] \right)
\end{align*}
$$




$J=\sum_j J_j\phi_i,K=\sum_j K_j\phi_i$とおく

$$
\begin{align*}
J[\phi]\psi_i
&=\sum_jJ_j[\phi_j]\psi_i\\
&=\sum_j\int\phi_j(2)\phi_j(2)\left(\frac{1}{r_{12}}\right)d\tau_2\psi_i(1)\\
&=\sum_j\int\sum_ru_{rj}\psi_r\sum_su_{sj}\psi_s\left(\frac{1}{r_{12}}\right)d\tau\psi_i\\
&=\int\sum_r\sum_s\delta_{rs}\psi_r\psi_s\left(\frac{1}{r_{12}}\right)d\tau\psi_i\\
&=\sum_r\int\psi_r\psi_r\left(\frac{1}{r_{12}}\right)d\tau\psi_i\\
&=\sum_j\int\psi_j\psi_j\left(\frac{1}{r_{12}}\right)d\tau\psi_i\\
&=\sum_jJ_j[\psi_j]\psi_i\\
&=J[\psi]\psi_i\\
\end{align*}
$$


$$
\begin{align*}
K[\phi]\psi_i
&=\sum_jK_j[\phi_j]\psi_i\\
&=\sum_j\int\phi_j(2)\psi_i(2)\left(\frac{1}{r_{12}}\right)d\tau_2\phi_j(1)\\
&=\sum_j\int\sum_ru_{rj}\psi_r\psi_i\left(\frac{1}{r_{12}}\right)d\tau\sum_tu_{tj}\psi_t\\
&=\sum_j\sum_r\sum_t\int u_{rj}u_{tj}\psi_r\psi_i\left(\frac{1}{r_{12}}\right)d\tau \psi_t\\
&=\sum_r\sum_t\int \delta_{rt}\psi_r\psi_i\left(\frac{1}{r_{12}}\right)d\tau \psi_t\\
&=\sum_r\int \psi_r\psi_i\left(\frac{1}{r_{12}}\right)d\tau \psi_r\\
&=\sum_j\int \psi_j\psi_i\left(\frac{1}{r_{12}}\right)d\tau \psi_j\\
&=\sum_j\int\psi_j(2)\psi_i(2)\left(\frac{1}{r_{12}}\right)d\tau_2\psi_j(1)\\
&=\sum_jK_j[\psi_j]\psi_i\\
&=K[\psi]\psi_i
\end{align*}
$$




### $\boldsymbol{\varepsilon}$がユニタリ変換によって対角化されることの証明

$$
\begin{equation}
\mathscr F\phi_i=\sum_{j=1}^n\varepsilon_{ij}\phi_j
\end{equation}
$$
これを変形する
$$
\begin{align*}
\mathscr F\boldsymbol{\phi}&=\boldsymbol{\varepsilon}\boldsymbol{\phi}\\
\mathbb U^*\mathscr F\mathbb U\mathbb U^*\boldsymbol{\phi}&=\mathbb U^*\boldsymbol{\varepsilon}\mathbb U\mathbb U^*\boldsymbol{\phi}\\
(\mathbb U^*\mathscr F\mathbb U)\mathbb U^*\boldsymbol{\phi}&=(\mathbb U^*\boldsymbol{\varepsilon}\mathbb U)\mathbb U^*\boldsymbol{\phi}\\
\mathscr F\boldsymbol{\psi}&=\boldsymbol{\varepsilon}_D\boldsymbol{\psi}\\
\end{align*}
$$

