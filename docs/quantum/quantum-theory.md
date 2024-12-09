

# 井戸型ポテンシャル

何が嬉しい？
->粗めのクーロンポテンシャルの近似になっている。$V(\boldsymbol{r})=\frac{1}{r}$
この場合にエネルギーは離散化するのか

(自由電子のエネルギーは波数で決まっていて、常に連続的なエネルギー値を取りうることができた)

$$
V(\boldsymbol{r})=\left\{
    \begin{align*}
        \quad V \quad(in)\\
        \quad 0 \quad(out)
    \end{align*}
\right. 
$$

$$
E=K+U=\frac{\boldsymbol{p}^2}{2m}+V(\boldsymbol{r})
$$
対応原理 $p\rightarrow -i\hbar\nabla$ 
$$
\hat{H}=-\frac{\hbar^2}{2m}\nabla^2+V(\boldsymbol{r})
$$
$$
\left(-\frac{\hbar^2}{2m}\nabla^2+V(\boldsymbol{r})\right)\Psi(\boldsymbol{r})=E\Psi(\boldsymbol{r})
$$

古典的にはエネルギーは$0\leqq E\leqq V$となるはずである。

## 一次元系

### (in well)

$$
-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}\Psi(x)=E\Psi(x)
$$

$p=\sqrt{2mE}$とおけば

$$
\hbar^2\frac{d^2}{dx^2}\Psi(x)=-p^2\Psi(x)
$$
$$
\Psi(x)=A_n^+e^{i\frac{p}{\hbar}x}+A_n^-e^{-i\frac{p}{\hbar}x}
$$


### (out well)

同様に$p=\sqrt{2m(E-V)}＝i\sqrt{2m(V-E)}$とおけば
$$
\Psi(x)=A_n^+e^{-\frac{\sqrt{2m(V-E)}}{\hbar}x}+A_n^-e^{\frac{\sqrt{2m(V-E)}}{\hbar}x}
$$


### 境界条件

1. 境界条件は物理的なもの(|$\Psi|^2 d\boldsymbol{r}$)が存在確率
2. 波動関数の連続条件と規格化条件

$\Psi()$



```python {cmd=true matplotlib=true}
import numpy as np
import matplotlib.pyplot as plt

# パラメータの定義
m = 1  # 質量
hbar = 1.0545718e-34  # プランク定数 (単位に注意)
V = 2  # ポテンシャルエネルギー
# E_values = np.linspace(0, 2, 500)  # エネルギー範囲
E_values=0.5
# 式の計算
argument = np.sqrt(2 * m * (V - E_values)) / hbar  # √部分
complex_values = np.exp(1j * argument)  # e^(i...)

# 実部と虚部
real_part = np.real(complex_values)
imag_part = np.imag(complex_values)

# 複素数平面にプロット
plt.figure(figsize=(8, 8))
plt.plot(real_part, imag_part, color="blue", label=r"$e^{i \frac{\sqrt{2m(V-E)}}{\hbar}}$")
plt.axhline(0, color='black', linewidth=0.8, linestyle="--")  # x軸
plt.axvline(0, color='black', linewidth=0.8, linestyle="--")  # y軸
plt.xlabel("Real Part")
plt.ylabel("Imaginary Part")
plt.title("Complex Plane Representation")
plt.legend()
plt.grid(True)
plt.axis("equal")  # アスペクト比を1:1に
plt.show()


```