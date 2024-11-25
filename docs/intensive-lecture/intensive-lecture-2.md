---
title: "集中講義"
background: /cover.jpg
---
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=true} -->

<!-- code_chunk_output -->

1. [正$n$角形のエネルギー図](#正n角形のエネルギー図)
    1. [正$4$角形の場合を考えてみる](#正4角形の場合を考えてみる)
        1. [対角化してみる](#対角化してみる)
    2. [次に$5$角形をやってみる](#次に5角形をやってみる)
    3. [これを一般化してみる](#これを一般化してみる)
        1. [Case: $n\in even$](#case-nin-even)
        2. [Case: $n\in odd$](#case-nin-odd)

<!-- /code_chunk_output -->



# 正$n$角形のエネルギー図

## 正$4$角形の場合を考えてみる
点群は$D_{4h}$群
まず、LCAO近似。全体の波動関数を$\Psi$とおくと
$$
\Psi=\sum_{i=1}^4C_i\chi_i=C_1\chi_1+C_2\chi_2+C_3\chi_3+C_4\chi_4
$$
とかける。ここで$\{\chi_i\}$はそれぞれの原子軌道で, $\{C_i\}\subset\mathbb{C}$である。
変分原理を用いて
$$
\begin{align*}
    \braket{\varepsilon}
    &=\frac{\int \Psi^*\hat{H}\Psi d\boldsymbol{r}}{\int \Psi^*\Psi d\boldsymbol{r}}\\
    &=\dfrac{\int \sum_{i=1}^4C_i^*\chi_i^* \hat{H}\sum_{j=1}^4C_j\chi_j d\boldsymbol{r}}{\int \sum_{i=1}^4C_i^*\chi_i^*\sum_{j=1}^4C_j\chi_j d\boldsymbol{r}}\\
\end{align*}
$$

ここで$H_{ij}=\int \chi_i^*\hat{H}\chi_j d\boldsymbol{r}$, $S_{ij}=\int \chi_i^*\chi_j d\boldsymbol{r}$とおけば

$$
    \braket{\varepsilon}=\dfrac{\sum_{i=1}^4\sum_{j=1}^4C_i^*C_jH_{ij}}{\sum_{i=1}^4\sum_{j=1}^4C_i^*C_jS_{ij}}\\
$$
ヒュッケル近似を使うと$S_{ij}=\delta_{ij}$となる。よって
$$
    \braket{\varepsilon}=\dfrac{\sum_{i=1}^4\sum_{j=1}^4C_i^*C_jH_{ij}}{\sum_{i=1}^4C_iC_i^*}
$$
これを最小にする$\{C_i\}$を求めるために、$C_i^*$で偏微分をすることを考える
$$
\begin{align}
    \frac{\partial \varepsilon}{\partial C_i^*}
    &=\dfrac{\sum_{j=1}^4C_jH_{ij}\sum_{i=1}^4C_iC_i^*-\sum_{i=1}^4\sum_{j=1}^4C_i^*C_jH_{ij}\sum_{i=1}^4C_i}{\left(\sum_{i=1}^4C_iC_i^*\right)^2}\\
    &=\dfrac{\sum_{j=1}^4C_jH_{ij}-\braket{\varepsilon}\sum_{i=1}^4C_i}{\sum_{i=1}^4C_iC_i^*}\\
\end{align}
$$
$\frac{\partial \varepsilon}{\partial C_i^*}=0$を考えると$\sum_{j=1}^4C_jH_{ij}-\braket{\varepsilon}\sum_{i=1}^4C_i=0$
行列表示にすると
$$
\begin{pmatrix}
    H_{11}-\varepsilon & H_{12} & H_{13} & H_{14}\\
    H_{21} & H_{22}-\varepsilon & H_{23} & H_{24}\\
    H_{31} & H_{32} & H_{33}-\varepsilon & H_{34}\\
    H_{41} & H_{42} & H_{43} & H_{44}-\varepsilon\\
\end{pmatrix}
\begin{pmatrix}
    C_1\\
    C_2\\
    C_3\\
    C_4
\end{pmatrix}=0
$$

ここで$H_{ij}=(\alpha-t)\delta_{ij}+t$とおけば
$$
\begin{pmatrix}
    \alpha-\varepsilon & t & t' & t\\
    t & \alpha-\varepsilon & t & t'\\
    t' & t & \alpha-\varepsilon & t\\
    t & t' & t & \alpha-\varepsilon\\
\end{pmatrix}
\begin{pmatrix}
    C_1\\
    C_2\\
    C_3\\
    C_4
\end{pmatrix}=0
$$
次に最近接近似を用いると$(t'=0)$
$$
\mathbb{HC}=
\begin{pmatrix}
    \alpha-\varepsilon & t & 0 & t\\
    t & \alpha-\varepsilon & t & 0\\
    0 & t & \alpha-\varepsilon & t\\
    t & 0 & t & \alpha-\varepsilon\\
\end{pmatrix}
\begin{pmatrix}
    C_1\\
    C_2\\
    C_3\\
    C_4
\end{pmatrix}=0
$$

:::note 最近接近似
最も近接している原子同士の相互作用エネルギー(**transfer-energy**)のみを有効なものとし、他の原子間の相互作用エネルギーを無視すること
transfer-energyは距離の2乗に反比例することからこの近似の妥当性が得られる。
:::

以下この固有値方程式を解く
$\mathbb{H}$の行列式を求める。余因子展開を用いて
$$
\begin{align*}
    \left|\mathbb{H}\right|
    &=\begin{bmatrix}
    \alpha-\varepsilon & 0 & 0 & 0\\
    t & \alpha-\varepsilon & 2t & 0\\
    0 & 2t & \alpha-\varepsilon & t\\
    0 & 0& 0 & \alpha-\varepsilon\\
    \end{bmatrix}\\
    &=\alpha-\varepsilon\begin{bmatrix}
    \alpha-\varepsilon & 2t & 0\\
    2t & \alpha-\varepsilon & t\\
    0 & 0 & \alpha-\varepsilon\\
    \end{bmatrix}\\
    &=(\alpha-\varepsilon)^2\begin{bmatrix}
    \alpha-\varepsilon & 2t \\
    2t & \alpha-\varepsilon \\
    \end{bmatrix}\\
    &=(\alpha-\varepsilon)^2\left\{ (\alpha-\varepsilon)^2-4t^2\right\}\\
     &=(\alpha-\varepsilon)^2\left\{ \alpha-\varepsilon-2t\right\}\left\{ \alpha-\varepsilon+2t\right\}\\
\end{align*}
$$
よってとりえるエネルギー状態$\varepsilon$は$\varepsilon=\alpha, \,\, \alpha\pm 2t$. また、固有ベクトルは
$$
\begin{pmatrix}
    0\\
    -1\\
    0\\
    1
\end{pmatrix},
\begin{pmatrix}
    -1\\
    0\\
    1\\
    0
\end{pmatrix},
\begin{pmatrix}
    -1\\
    1\\
    -1\\
    1
\end{pmatrix},
\begin{pmatrix}
    1\\
    1\\
    1\\
    1
\end{pmatrix}
$$


### 対角化してみる

$$
\mathbb{H}=\begin{pmatrix}
    \alpha-\varepsilon & t & 0 & t\\
    t & \alpha-\varepsilon & t & 0\\
    0 & t & \alpha-\varepsilon & t\\
    t & 0 & t & \alpha-\varepsilon\\
\end{pmatrix}
$$
固有ベクトルを並べたものは
$$
\mathbb{P}=\begin{pmatrix}
    0 & -1 & -1 & 1\\
    -1 & 0 & 1 & 1\\
    0 & 1 & -1 & 1\\
    1 & 0 & 1 & 1\\
\end{pmatrix}
$$
$det|\mathbb{P}|=\frac{1}{8}$逆行列を求めて
$$
\mathbb{P}^{-1}=8\begin{pmatrix}
    0 & 0 & -1 & 1\\
    -1 & 0 & 1 & 1\\
    0 & 1 & -1 & 1\\
    1 & 0 & 1 & 1\\
\end{pmatrix}
$$
## 次に$5$角形をやってみる
同様に、ヒュッケル近似と最近接近似を用いて
$$
\mathbb{HC}=
\begin{pmatrix}
    \alpha-\varepsilon & t & 0 & 0 &t\\
    t & \alpha-\varepsilon & t & 0 & 0\\
    0 & t & \alpha-\varepsilon & t & 0\\
    0 & 0 & t & \alpha-\varepsilon & t\\
    t & 0 & 0 &t & \alpha-\varepsilon\\
\end{pmatrix}
\begin{pmatrix}
    C_1\\
    C_2\\
    C_3\\
    C_4\\
    C_5
\end{pmatrix}=0
$$

$$
\begin{align*}
    \left|\mathbb{H}\right|
    &=\begin{bmatrix}
    \alpha-\varepsilon & t & 0 & 0 &t\\
    t & \alpha-\varepsilon & t & 0 & 0\\
    0 & t & \alpha-\varepsilon & t & 0\\
    0 & 0 & t & \alpha-\varepsilon & t\\
    t & 0 & 0 &t & \alpha-\varepsilon\\
    \end{bmatrix}\\
    &=(\alpha-\varepsilon)\begin{bmatrix}
    \alpha-\varepsilon & t & 0 & 0\\
    t & \alpha-\varepsilon & t & 0\\
    0 & t & \alpha-\varepsilon & t\\
    0 & 0 &t & \alpha-\varepsilon\\
    \end{bmatrix}-t\begin{bmatrix}
    t & 0 & 0 &t\\
    t & \alpha-\varepsilon & t & 0\\
    0 & t & \alpha-\varepsilon & t\\
    0 & 0 &t & \alpha-\varepsilon\\
    \end{bmatrix}+t\begin{bmatrix}
    t & 0 & 0 &t\\
    \alpha-\varepsilon & t & 0 & 0\\
    t & \alpha-\varepsilon & t & 0\\
    0 & t & \alpha-\varepsilon & t\\
    \end{bmatrix}
\end{align*}
$$

## これを一般化してみる

ヒュッケル行列の相互作用項のことを考慮すると、$n$の偶奇によってその形が少し変わる。
まず、時計回りに頂点にナンバリングを行う$(1$~$n)$
### Case: $n\in even$


\[
\mathbb{H}=
\begin{pmatrix}
    \alpha - \varepsilon & t & 0 & 0 & \cdots & 0 & 0 & t \\
    t & \alpha - \varepsilon & t & 0 & \cdots & 0 & 0 & 0 \\
    0 & t & \alpha - \varepsilon & t & \cdots & 0 & 0 & 0 \\
    0 & 0  & t& \alpha - \varepsilon &  \cdots & 0 & 0 & 0  \\
    \vdots & \vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots \\
    0 & 0 & 0 & 0 & \cdots & \alpha - \varepsilon & t & 0 \\
    0 & 0 & 0 & 0 & \cdots & t & \alpha - \varepsilon & t \\
    t & 0 & 0 & 0 & \cdots & 0 & t & \alpha - \varepsilon
\end{pmatrix}
=(a_{ij})
\]
$$
a_{ij}=\left\{
    \begin{align*}
        &\alpha-\varepsilon &(i=j)\\
        &t &(|i-j|=1,n-1)\\
        &0 &(others)
    \end{align*}
\right.
$$
$l$列目の$-1$倍を$l+2$列目に追加し、$m$行目の$-1$倍を$m+2$行目に追加する($1\leqq l\leqq n-2$)

```mathematica
In[25]:= (*定数の定義*)n = 3; (*行列のサイズ*)
alpha = Symbol["alpha"];
epsilon = Symbol["epsilon"];
t = Symbol["t"];

(*行列の生成*)
H = Table[
   If[i == j, alpha, 
    If[Abs[i - j] == 1 || Abs[i - j] == n - 1, t, 0]], {i, 1, n}, {j, 
    1, n}];

(*固有値と固有ベクトルの計算*)
eigenvalues = Eigenvalues[H];
eigenvectors = Eigenvectors[H];

(*結果の出力*)
{eigenvalues, eigenvectors}


Out[32]= {{alpha - epsilon - t, alpha - epsilon - t, 
  alpha - epsilon + 2 t}, {{-1, 0, 1}, {-1, 1, 0}, {1, 1, 1}}}


```

### Case: $n\in odd$