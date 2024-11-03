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
    /* ... 既存のスタイル ... */
    .slide-card {
      position: relative;
      background: white;
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      padding: 1.5rem;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      overflow: hidden;
    }
    .slide-card-with-thumbnail {
      padding-left: 320px;
      min-height: 180px;
    }
    .slide-thumbnail {
      position: absolute;
      left: 0;
      top: 0;
      width: 300px;
      height: 100%;
      object-fit: cover;
      border-right: 1px solid #e1e4e8;
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
        <article class="slide-card ${slide.thumbnail ? "slide-card-with-thumbnail" : ""}">
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
