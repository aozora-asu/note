const glob = require("glob");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

async function generateIndex() {
  try {
    const slideFiles = glob.sync("docs/*/*.md");

    const slides = slideFiles.map((file) => {
      const content = fs.readFileSync(file, "utf-8");
      const { data } = matter(content);
      const slideName = path.dirname(file).split("/").pop();

      // 作成日と更新日を取得
      const stats = fs.statSync(file);
      const createdDate = stats.birthtimeMs;
      const updatedDate = stats.mtimeMs;

      return {
        title: data.title || slideName,
        path: fs.existsSync(`docs/${slideName}/dist`)
          ? `/note/${slideName}/dist/`
          : `/note/${slideName}/${slideName}.html`,
        createdDate,
        updatedDate,
        description: data.description || "",
        thumbnail: fs.existsSync(`docs/${slideName}/thumbnail.png`)
          ? `/note/${slideName}/thumbnail.png`
          : null,
        pdf: fs.existsSync(`docs/${slideName}/slides.pdf`)
          ? `/note/${slideName}/${slideName}.pdf`
          : null,
      };
    });

    const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slide note</title>
  <style>
    /* 全体レイアウト */
    body {
      font-family: Hiragino Sans;
      background-color: #f6f8fa;
      padding: 2rem;
      margin: 0;
    }
    a {
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .header {
      text-align: left;
      margin-bottom: 2rem;
    }
    .slides-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      max-width: 1200px;
      width: 100%;
    }
    .slide-card {
      position: relative;
      background: white;
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .slide-card:hover {
      transform: translateY(5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
    .slide-thumbnail {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 6px;
    }
    .slide-title {
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0.5rem 1rem;
      color: #0366d6;
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
    <h1>Slide notes</h1>
  </div>
  <div class="slides-container">
    ${slides
      .sort((a, b) => b.updatedDate - a.updatedDate)
      .map(
        (slide) => `
        <article class="slide-card">
          ${slide.thumbnail ? `<a href="${slide.path}"><img src="${slide.thumbnail}" class="slide-thumbnail" alt="${slide.title}"></a>` : ""}
          <a href="${slide.path}" class="slide-title">${slide.title}</a>
          <div class="slide-meta">
            作成日: ${new Date(slide.createdDate).toLocaleString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
            <br>
            更新日: ${new Date(slide.updatedDate).toLocaleString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
            <br>
            ${slide.pdf ? `<a href="${slide.pdf}">スライドpdfリンク</a>` : ""}
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
