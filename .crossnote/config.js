({
  katexConfig: {
    macros: {},
    displayMode: true,
    throwOnError: false,
    output: "html",
    strict: "warn",
    trust: true,
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
    ],
    cssURL: "https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css", // KaTeXのCDN URL
  },

  mathjaxConfig: {
    tex: {},
    options: {},
    loader: {},
  },

  mermaidConfig: {
    startOnLoad: false,
  },
});
