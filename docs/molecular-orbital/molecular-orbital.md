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
## 多原子系のシュレディンガー方程式
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
$M_a, Z_a$は原子核の質量と核荷電, $K$: 運動エネルギー Kinetic energy

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

## スレーター行列

スレーター行列式は、電子状態を表すために使われる一つの表現形式
一般に、$N$個の電子が$N$個の軌道${\chi_i}$にはいる時の電子状態(全波動関数)$\Phi$が以下のように記述されるというもの
$$
\Psi=\frac{1}{\sqrt{N!}}\det{s}
$$

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
