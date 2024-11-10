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

# 分子軌道法

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
ハミルトニアンは一般的に以下のように与えられる。
これは、多原子分子について、複数の原子核と、それぞれを回る電子の全てどうしの相互作用を含んでいる
$$
\begin{equation}
    \mathscr{H'}=
  \underbrace{-\frac{1}{2}\sum_i\nabla_i^2}_{電子 K}
  \underbrace{-\frac{1}{2}\sum_a\frac{1}{M_a}\nabla_a}_{原子核 K}
  \underbrace{-\sum_i\sum_a\frac{Z_a}{r_{ia}}}_{核-電子}
  \underbrace{+\sum_i\sum_{j>i}\frac{1}{r_{ij}}}_{電子-電子}
  \underbrace{+\sum_a\sum_{b>a}\frac{Z_aZ_b}{R_{ab}}}_{核-核}
\end{equation}
$$
$M_a, Z_a$は原子核の質量と核荷電, $K$: 運動エネルギー $Kinetic$ $energy$

:::note Born-Oppenheimer近似
核の運動エネルギーを無視する近似
電子に比べると、核(陽子, 中性子)の質量が1840倍も大きいため、電子が核周りを運動する際に核は全く動かない、と捉えても良い、という近似

ハンマー投げをする際に、鉄球の回転によって人間の回転が少し歪む、という現象を無視する、みたいなイメージ。(これは遠心力と角運動量保存によるもの)
:::

---

以下では核の運動エネルギーを無視する。
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
\begin{equation}
    \mathscr{H}=
  \underbrace{-\frac{1}{2}\sum_i\nabla_i^2}_{電子 K}
  \underbrace{-\sum_i\sum_a\frac{Z_a}{r_{ia}}}_{核-電子}
  \underbrace{+\sum_i\sum_{j>i}\frac{1}{r_{ij}}}_{電子-電子}
\end{equation}
$$
$$
\begin{equation}
    E=E'-\underbrace{\sum_a\sum_{b>a}\frac{Z_aZ_b}{R_{ab}}}_{核-核}
\end{equation}
$$
$E$: 電子のエネルギー, $\Psi$: 電子の座標
これは固定された原子核の場における電子に関するシュレディンガー方程式となる

---
:::question
ハミルトニアンの核-電子, 電子-電子の項も一応定数(?)だから右辺に押し付けられないの??
$$
\underbrace{-\sum_i\sum_a\frac{Z_a}{r_{ia}}}_{核-電子}
  \underbrace{+\sum_i\sum_{j>i}\frac{1}{r_{ij}}}_{電子-電子}
$$
:::
<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
今、さらに注目する電子の数を外側の$2n$個に絞るとする。すると注目していない電子たちと原子核がまた新たな原子核を作っているように見える。内部の電子は原子核とともに分子骨格を作っていると考えるのである。
すると一つの分子中の$2n$個の電子たちの系のハミルトニアンは以下のように書ける
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
\begin{equation}
  \Psi=\frac{1}{\sqrt{2n!}}\left| \begin{matrix}
  \phi_1(1)\alpha(1) & \phi_1(2)\alpha(2) & \phi_1(3)\alpha(3) & \cdots &\phi_1(2n)\alpha(2n)\\
  \phi_1(1)\beta(1) & \phi_1(2)\beta(2) & \phi_1(3)\beta(3) & \cdots &\phi_1(2n)\beta(2n)\\
  \phi_2(1)\alpha(1) & \phi_2(2)\alpha(2) & \phi_2(3)\alpha(3) & \cdots &\phi_2(2n)\alpha(2n)\\
  \vdots & \vdots & \vdots & \ddots &\vdots\\
  \phi_n(1)\beta(1) & \phi_n(2)\beta(2) & \phi_n(3)\beta(3) & \cdots &\phi_n(2n)\beta(2n)\\
\end{matrix}\right|
=\frac{1}{\sqrt{2n!}}\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\cdots\bar{\phi_n}(2n)\right|
\end{equation}
$$
ただし$\bar{\phi}$は$\beta$スピンを持っていることを表している。

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
E=\int\Psi^*\mathscr{H}\Psi d\boldsymbol{r}=\int \frac{1}{\sqrt{2n!}}\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\cdots\bar{\phi_n}(2n)\right|
\left\{\sum_i^{2n}\mathscr{H}_{core}(i)+\sum_i^{2n}\sum_{j>i}\frac{1}{r_{ij}}\right\}
\frac{1}{\sqrt{2n!}}\left|\phi_1(1)\bar{\phi_1}(2)\phi_2(3)\cdots\bar{\phi_n}(2n)\right|
d\boldsymbol{r}
$$

## 番外編

:::tip エルミート行列
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
\mathbb{U}^{-1}\mathbb{A}\mathbb{U}=\mathbb{U}^*\mathbb{A}\mathbb{U}=(a_i\delta_{ij})
$$
という形にできる。
:::
:::tip ユニタリ行列
ユニタリ行列とは以下のような性質を満たす正方行列$\mathbb{U}=(a_{ij})$のこと
$$
\begin{align}
  \mathbb{U}^*\mathbb{U}=\mathbb{U}\mathbb{U}^*=\mathbb{I}\\
\end{align}
$$
ただし$^*$は共役転置を表す。
:::
