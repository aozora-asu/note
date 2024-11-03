const glob = require("glob");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// docs/*/slides.mdのパターンに一致するファイルを検索
const slideFiles = glob.sync("docs/*/slides.md");

const slides = slideFiles.map((file) => {
  const content = fs.readFileSync(file, "utf-8");
  const { data } = matter(content);
  const slideName = path.dirname(file).split("/").pop();

  return {
    title: data.title || slideName,
    path: `${slideName}/dist`,
    date: fs.statSync(file).birthtime,
  };
});

// HTML生成
const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Slide Index</title>
  <meta charset="utf-8">
</head>
<body>
  <h1>Slides</h1>
  <ul>
    ${slides
      .sort((a, b) => b.date - a.date)
      .map((slide) => `<li><a href="${slide.path}">${slide.title}</a></li>`)
      .join("\n")}
  </ul>
</body>
</html>
`;

fs.writeFileSync("docs/index.html", html);
