---
theme: seriph
background: /cover.jpg
class: text-left
highlighter: shiki
info: |
  Presentation slides for group.
transition: slide-left
title: 群論まとめ
mdc: true
githubPages:
ogp: true
download: true
css: unocss
---
# 群論
<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    next page <carbon:arrow-right class="inline"/>
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

## 1. 点群

### 点群とは

分子には様々な形がある。対称性に関しても様々なものがある
群、とはまた別の機会に

また表記として$X=V$というような表記を用いて$X$が点群の名前であり、$V$はその群の要素(対称操作)の集合である。
例 $C_{2h}$, $C_{nv}$

---

## 2. 点群の種類

点群は、分子がどのような対称性を持っているかという観点からグループ分けされたもの
対称性の種類は以下のようなものがある

1.  対称軸(回転軸)
2.  対称点(回転点)
3.  鏡映面(回映面)

ここで挙げた対称性の種類は、対称操作にあたるものである。
与えられた形から、これらの性質を持っているかを考えてその形がどのような点群に属するかを考えていく

---

### フローチャートから考える

分子の点群を帰属する方法として、以下のようなフローチャートがある。これの見方を覚えることで、対称性の分析の仕方を身につける
注意するべき点としては、異なる原子は違うものであると考える、ということ。
たとえば、$CH_4$と$CHBrCl$は全く点群が異なる。

---


<img src="/flowchart.png" style="width: 100%;height: 100%">

---

### 1. 主軸になる回転軸を探す

主軸とは、
たとえば理想的に作られたプレーンのドーナツは、

1.  No $\rightarrow C_1\, or \,C_i\,or\, C_\sigma$
2.  Yes $\rightarrow$選択肢いっぱい


