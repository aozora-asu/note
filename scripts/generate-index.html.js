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
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background-color: #f6f8fa;
    }
    .header {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e1e4e8;
    }
    .slides-container {
      display: grid;
      gap: 1rem;
    }
    .slide-card {
      background: white;
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      padding: 1.5rem;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .slide-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .slide-title {
      color: #0366d6;
      text-decoration: none;
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
    }
    .slide-title:hover {
      text-decoration: underline;
    }
    .slide-meta {
      margin-top: 0.5rem;
      color: #586069;
      font-size: 0.875rem;
    }
    .slide-description {
      margin-top: 0.75rem;
      color: #24292e;
      font-size: 0.9rem;
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
