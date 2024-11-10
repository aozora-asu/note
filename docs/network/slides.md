---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
info: |
  ## network
  Presentation slides for network.
transition: slide-left
title: \network
mdc: true
githubPages:
  ogp: true
lineNumbers: true
aspectRatio: 16/9
exportFilename: ''
favicon: https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png
css: windicss

---

# Welcome to Slidev

Presentation slides for developers

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
</div>

---
4GBのUSBは3.7GBまでしか保存できない。ブロック、セクター、ページ単位で管理されるため、実際はこれよりも少し少ない
(4GBは10進数表記だが、実際にコンピュータ上で使われる容量はこれを2進数にキャストしたものだから)

---
## ユーザーインターフェイスの構造

1. ユーザー
2. アプリケーション
3. OS
4. デバイスドライバー(液晶ディスプレイのどの位置に表示するか、等)
5. ハードウェア

### OS


## TCP/IPプロトコル
1. リンク
2. インターネット 
   1. IPアドレス処理
   2. 経路制御処理
3. トランスポート
4. アプリケーション

---

### インターネット層

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->