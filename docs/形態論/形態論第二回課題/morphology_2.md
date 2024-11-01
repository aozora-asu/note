<style>

</style>

# 問. 表 3.9 にあるロシア語名詞 stol ‘table’ と student ‘student’ に見られる融合に関して：

## 1. DM において主格，対格，属格の接辞を表出するための語彙項目を提案しなさい。

| case | stol    | student    |
| ---- | ------- | ---------- |
| nom  | stol-y  | student-y  |
| acc  | stol-y  | student-ov |
| gen  | stol-ov | student-ov |

これを導出する語彙項目を挙げる
生物、無生物は[+anim], [-anim] or [+inanim]で表す。
まずはすべての分類を書き下す
[+nom,+anim]->-y
[+nom,-anim]->-y
[+acc,+anim]->-ov
[+acc,-anim]->-y
[+gen,+anim]->-ov
[+gen,-anim]->-ov
ここから同じ出力先の語彙項目を統合していく。
[+nom]->-y
[+acc,+anim]->-ov
[+acc,-anim]->-y
[+gen]->-ov
ここで[$\pm$ n],[$\pm$ v],[$\pm$ obl]による格の分解を行なって
[−n,−v,−obl] ([+nom]) ->-y
[−n,+v,−obl,+anim] ([+acc,+anim]) ->-ov
[−n,+v,−obl,-anim] ([+acc,-anim]) ->-y
[+n,+v,−obl] ([+gen]) ->-ov
これをさらに統合して
[−v] ->-y
[−n,+anim] ->-ov
[+v,-anim] ->-y
[+n] ->-ov
これより語彙項目を以下のように与えればいい

$$
\begin{align*}
   &[−v]\leftrightarrow  -y/\{\sqrt{}STUDENT\}\_\_ \\
   &[+v,-anim]\leftrightarrow  -y/\{\sqrt{}STOL\}\_\_ \\
   &[−n,+anim]\leftrightarrow  -ov/\{\sqrt{}STUDENT\}\_\_ \\
   &[+n]\leftrightarrow  -ov/\{\sqrt{}STOL\}\_\_ \\
\end{align*}
$$

## 2. PFM において主格，対格，属格に見られる双方向的融合を捉えるための素性写像関数 pm を提案しなさい。なお stol，student ともに第 1 活用型 (class I) 名詞に属する。
