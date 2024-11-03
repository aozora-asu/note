const glob = require("glob");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

async function generateIndex() {
  try {
    const slideFiles = glob.sync("docs/*/slides.md");

    const slides = slideFiles.map((file) => {
      const content = fs.readFileSync(file, "utf-8");
      const { data } = matter(content);
      const slideName = path.dirname(file).split("/").pop();

      return {
        title: data.title || slideName,
        path: `/note/${slideName}/dist/`,
        date: fs.statSync(file).birthtime,
        description: data.description || "",
        thumbnail: fs.existsSync(`docs/${slideName}/thumbnail.png`)
          ? `/note/${slideName}/thumbnail.png`
          : null,
        pdf: fs.existsSync(`docs/${slideName}/slides.pdf`)
          ? `/note/${slideName}/slides.pdf`
          : null,
      };
    });

    const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slide Index</title>
  <style>
    /* 全体レイアウト */
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f8fa;
      padding: 2rem;
      margin: 0;
    }
    .header {
      text-align: left;
      margin-bottom: 2rem;
    }
    .slides-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* 2列のグリッド */
      gap: 1.5rem;
      max-width: 1200px;
      width: 100%;
    }
    
    /* カードデザイン */
    .slide-card {
      position: relative;
      background: white;
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      padding: 1.5rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .slide-card:hover {
      transform: translateY(5px); /* カードが浮かぶ効果 */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
    
    /* サムネイルと説明文 */
    .slide-thumbnail {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 6px;
      margin-bottom: 1rem;
    }
    .slide-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0.5rem 0;
      color: #0366d6;
      text-decoration: none;
    }
    .slide-title:hover {
      text-decoration: underline;
    }
    .slide-meta, .slide-description {
      font-size: 0.9rem;
      color: #586069;
      text-align: left;
    }
    .slide-meta {
      margin-bottom: 0.5rem;
      
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Slides</h1>
  </div>
  <div class="slides-container">
    ${slides
      .sort((a, b) => b.date - a.date)
      .map(
        (slide) => `
        <article class="slide-card">
          ${slide.thumbnail ? `<img src="${slide.thumbnail}" class="slide-thumbnail" alt="${slide.title}">` : ""}
          <a href="${slide.path}" class="slide-title">${slide.title}</a>
          <div class="slide-meta">
            作成日: ${slide.date.toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          ${
            slide.description
              ? `
            <div class="slide-description">
              ${slide.description}
            </div>
          `
              : ""
          }
        <div class="slide-meta">
          スライドpdf:<a href="${slide.pdf}" class="slide-title">スライドpdfリンク</a>
        </div>
        <div class="slide-meta">
          plain pdf:<a href="${slide.pdf}" class="slide-title">plain-pdfリンク</a>
        </div>
        </article>
      `
      )
      .join("")}
  </div>
</body>
</html>

    `;

    fs.writeFileSync("docs/index.html", html);
    console.log("Successfully generated index.html");
  } catch (err) {
    console.error("Error generating index:", err);
    process.exit(1);
  }
}

generateIndex();
