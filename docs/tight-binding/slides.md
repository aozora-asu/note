---
theme: seriph
background: /cover.jpg
class: text-left
highlighter: shiki
info: |
  ## tight-binding
  Presentation slides for tight-binding.
transition: slide-left
title: \tight-binding
mdc: true
githubPages:
  ogp: true
lineNumbers: true
aspectRatio: 16/9
exportFilename: ''
favicon: https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png
css: windicss

---

# Tight-Binding Model


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# Tight-Binding Model(強結合近似モデル)とは


電子バンド計算の際に用いられる近似の一つで、系の波動関数を各原子の場所に位置する孤立原子に対する波動関数の重ね合わせにより近似する手法

要は分子の形に注目して、その分子のエネルギー準位を、それを構成する部分に分けて結合(混成)の様式を考える手法のこと

やがては全てを1原子同士の結合(混成)に還元させることが目的。また、なぜそのエネルギーの位置にそのような波動関数のバンドが出るのかに解釈を与えるもの。

## 混成の条件

1. **同じ規約表現にある波動関数が混成する**
2. **近しいエネルギーの波動関数が混成する**

(2. は結果論的じゃない？混成後のエネルギーバンドについて、より近いエネルギーにある分子の影響を多く受けるってことだから)

---

## 規約表現を振るコツ


規約表現はその分子が属する「点群」と、「その点群の対称操作による位相の状態の変化」から与えられるもの。
ポイントは、
- **同じエネルギー固有値を持つ波動関数(の基底ベクトル)に対して振っていく**こと
- **基底ベクトルが直行性を満たしてない**と規約表現が触れない
  - (必要であれば、同じエネルギー固有値に対する固有ベクトルの線型結合はまた、同じエネルギーに対する固有ベクトルとなることを用いる)

また混成前の分子に規約表現を振る際、注意するべき点は
- 混成後の分子の形に対して、混成前の分子それぞれの位置関係が変わらないような対称操作を集めた点群の規約表現を振るとよいということ


---

# 正$3$角形分子を計算してみる

最近接近似を用いればヒュッケル行列$\mathbb{H}$は以下のように書ける
$$
\mathbb{H}=\begin{pmatrix}
  \alpha & t & t \\
  t & \alpha & t \\
  t & t & \alpha \\
\end{pmatrix}
$$

これの固有値とそれに対応する固有ベクトルを解くと
$$
\varepsilon=\alpha- t,\alpha- t,\alpha+ 2t,\qquad 
\{\mathbb{C}\}
=\left\{\begin{pmatrix}
  -1\\0\\1
\end{pmatrix},
\begin{pmatrix}
  -1\\1\\0
\end{pmatrix},
\begin{pmatrix}
  1\\1\\1
\end{pmatrix}\right\}
$$

--- 

エネルギーバンド図は以下のようになる
<img src="./public/triangleMolcular.svg" class="h-100"></img>

このエネルギーバンドがどこから起因するものなのかを考えるのがtight-bindingの本懐

---

## 規約表現を振る

この三角形の分子が1つの直線分子と1つの単原子から混成してできたものとして考える。(実際はどのように混成させてもいい)
今回は混成前の分子(1つの直線分子と1つの単原子)は$C_{2v}$で規約表現を振る。


最終的には以下のようなバンド図が考えられる

<img src="./public/triangle-molcular-final.svg" class="h-70"></img>

結合-反結合を作らないバンドはそのまま出ることがわかる

---

# 正$6$角形の分子について計算してみる

<div class="flex">
  <div>

ヒュッケル行列を直接解いて固有値固有ベクトルを求めてみる。最近接近似を用いればヒュッケル行列$\mathbb{H}$は以下のように書ける
$$
\mathbb{H}=\begin{pmatrix}
  \alpha & t & 0 & 0 & 0 & t \\
  t & \alpha & t & 0 & 0 & 0 \\
  0 & t & \alpha & t & 0 & 0 \\
  0 & 0 & t & \alpha & t & 0 \\
  0 & 0 & 0 & t & \alpha & t \\
  t & 0 & 0 & 0 & t & \alpha \\
\end{pmatrix}
$$

  </div>
<div>


これの固有値とそれに対応する固有ベクトルは
$$
\varepsilon=\alpha-2t,\alpha-t,\alpha-t,\alpha+t,\alpha+t,\alpha+2t
$$
$$
\{\mathbb{C}\}
=\left\{
\begin{pmatrix}
  -1\\1\\-1\\1\\-1\\1
\end{pmatrix},
\begin{pmatrix}
  -1\\0\\1\\-1\\0\\1
\end{pmatrix},\begin{pmatrix}
  -1\\1\\0\\-1\\1\\0
\end{pmatrix},\begin{pmatrix}
  1\\0\\-1\\-1\\0\\1
\end{pmatrix},\begin{pmatrix}
  -1\\-1\\0\\1\\1\\0
\end{pmatrix},\begin{pmatrix}
  1\\1\\1\\1\\1\\1
\end{pmatrix}
\right\}
$$
</div>
</div>
---

これをエネルギー準位図に描画すると以下のようになる

<img src="./public/hexagon-molucular-pre.drawio.svg" class="h-100"></img>

---

## Tight-Binding Modelにしたがって考えてみる

せっかく三角形のバンド図を求めているから、正三角形($D_{3h}$)を構成分子として正六角形を考えてみる

三角形をずらして重ねた形が正六角形になると考えると、$D_{3h}$で規約表現を振れることがわかる


<img src="./public/hexagon-molcular-final.drawio.svg" class="h-80"></img>

---

# 番外編 指標表の作り方

指標表は、点群に一対一対応している
## 例として$D_{7h}$の指標表を作る

### STEP1. 対称操作を列挙する

$$
D_{7h}=\{E,2C_7,2C_7^2,2C_7^3,7C_2,\sigma_h,2S_7,2S_7^3,2S_7^5,7\sigma_v\}
$$

あるいは$D_{7h}=D_7\times C_s$として得ても良い
$$
D_7=\{E,C_7,C_7^2,C_7^3,C_7^4,C_7^5,C_7^6,C_2,C_2',C_2'',C_2''',C_2^{iv},C_2^{v},C_2^{vi}\}
$$

あるいは要素数を数えて$N(D_7)=14,N(C_s)=2$より、$N(D_{7h})=28$と確認してもいい


**参考文献**
- [点群のまとめと座標表](https://www.iwanami.co.jp/files/moreinfo/0051900/PG.pdf)

---

## STEP2.

ここまで書いて、、、指標表を作るのは難しいみたいです。調べた方が早いらしいので諦め
キーワード：剰余類、部分群