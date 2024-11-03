const glob = require("glob");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const slideFiles = glob.sync("docs/*/slides.md");

const slides = slideFiles.map((file) => {
  const content = fs.readFileSync(file, "utf-8");
  const { data } = matter(content);
  const slideName = path.dirname(file).split("/").pop();

  return {
    title: data.title || slideName,
    // パスに /note/ を含める
    path: `/note/${slideName}/`,
    date: fs.statSync(file).birthtime,
  };
});

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Slide Index</title>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid #eee;
      border-radius: 4px;
    }
    a {
      color: #0366d6;
      text-decoration: none;
      font-size: 1.2rem;
    }
    a:hover {
      text-decoration: underline;
    }
    .date {
      color: #666;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
  </style>
</head>
<body>
  <h1>Slides</h1>
  <ul>
    ${slides
      .sort((a, b) => b.date - a.date)
      .map(
        (slide) => `
        <li>
          <a href="${slide.path}">${slide.title}</a>
          <div class="date">${slide.date.toLocaleDateString()}</div>
        </li>
      `
      )
      .join("\n")}
  </ul>
</body>
</html>
`;

fs.writeFileSync("docs/index.html", html);
