---
theme: seriph
background: /cover.jpg
class: text-center
highlighter: shiki
info: |
  ## whitepaper-summary
  Presentation slides for whitepaper-summary.
transition: slide-up
title: エネルギー白書(R5)
mdc: true
githubPages:
  ogp: true
---

# エネルギー白書(R5)要約

国際エネルギーの動向と

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


<KeyboardAnimation :words="toc" :speed="40">
</KeyboardAnimation>

<script setup>
import KeyboardAnimation from './components/KeyboardAnimation.vue';

const toc = [
  {
    目次:[
      ["m","も"],
      ["k","く"],
      ["j","じ"]
    ]
  },
  ' ',
  {
    要約: [
      ['y',  'よ'],
      ['う'],
      ['y',  'や'],
      ['k', 'く'],
    ],
  },
  {
    範囲: [
      ['h',  'は'],
      ['n',"ん"],
      ['い'],
    ],
  }
];

const toc1 = [
  {

    原子力:[
      ["g","げ"],
      ["n","ん"],
      ["s","し"],
      ["r","y","りょ"],
      ["k","く"]
    ]
  },
  {
    発電: [
      ['h', 'は'],
      ['t', "つ"],
      ['d', 'で'],
      ['n', 'ん'],
    ],
  },
  ["n","の"],
  {

    現状:[
      ["g","げ"],
      ["n","ん"],
      ["j","じょ"],
      ["う"]
    ]
  }
];

</script>

P142((イ)から)-151(第3節前まで)

1. 米国の原子力発電の現状
2. 欧州・アジアの原子力発電の現状
3. 核燃料サイクルの現状
4. 再生可能エネルギーについて


---

<KeyboardAnimation :words="toc1" :speed="40">
</KeyboardAnimation>


# 原子力発電の現状 (米国) {#nuclear-us}

- **近年の動向**: シェールガス価格の影響で原子力閉鎖が進行。
- **政策・支援**: 複数州で運転継続支援政策が導入（例: 2022年カリフォルニア州の延長法）。
- **革新炉開発**: 「ゲートウェイプログラム」などの支援政策展開中。

---

# 高レベル放射性廃棄物の処分 (フィンランド) {#waste-fi}

- **処分地選定**: 1983年に開始。1999年にオルキルオト選定。
- **法的枠組み**: 政府承認後、2016年に建設開始。
- **今後の展開**: 2020年代半ばに操業開始予定。

---

# 再生可能エネルギー

- **主な導入策**: FIT制度/FIP制度、投資額増加。
  - **FIT制度**
    - 再エネ電力を固定価格で長期的に買い取ることを国が保証(日本は2012年に導入)
  - **FIP制度**
    - 再エネから発電された電力を発電事業者が自ら卸電力市場や相対取引で販売することを前提として、その販売電力量当たり一定額のプレミアムを補助する制度(p148)

  2022年時点では、83か国においてFIT制度又はFIP制度が導入されている。
  <!-- ![alt text](<スクリーンショット 2024-11-22 17.43.47.png>) -->
- **発電別導入**:
  - **太陽光発電**: 2022年累積11.8億kW、特に中国で急成長。
  - **風力発電**: 世界で9億kW。中国主導。
- **課題**: 買取費用の消費者負担増大。

<!--
近年では世界中で再エネの利用拡大に向けた取り組みがなされています。
主な施策としてはFIT, FIP, RPS, 入札などがあります。これらの制度は、主に再エネの買取にインセンティブを与えるものである
こうした制度によって、再エネへの投資は爆増。中国の投資額が急増している
-->
---

# 核燃料サイクルの現状 {#fuel-cycle}

- **ウラン資源分布**: オーストラリア、カザフスタン、カナダなど主要産出国。
- **濃縮・再処理**: フランス、英国が国内/海外再処理を進める。
- **MOX燃料使用**: 欧州各国で進展、約6,300体の使用実績。

ウラン価格の推移
<!-- ![alt text](<スクリーンショット 2024-11-22 17.47.20.png>) -->
<!--ウラン価格の推移は1973オイルショック以降に高騰し始める
下落要因としては
- 1979年のスリーマイル島事故
- 1986年のチョルノービリ事故
- 2008年の世界金融危機
- 東京電力福島第一原子力発電 所事故等

高騰原因
- ロシアによるウクライナ侵略以降のロシア産ウランの供給途絶への懸念
- 解体核高濃縮ウランや民間在庫取崩し等の二次供給の減少や、中国 等によるウラン精鉱の大量購入等から需給ひっ迫が懸念さ れ、世界的にウラン獲得競争が激化したことと、投機的資金 の一部がウランスポット取引市場に流入したことによるもの
- non Carbon電源としての期待
-->
---

# 参考文献

[エネルギー白書2024](https://www.enecho.meti.go.jp/about/whitepaper/2024/pdf/whitepaper2024_all.pdf)

