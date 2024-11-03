const glob = require("glob");
const path = require("path");
const { execSync } = require("child_process");

async function buildSlides() {
  try {
    // docs/*/slides.mdのパターンに一致するファイルを検索
    const slideFiles = glob.sync("docs/*/slides.md");

    for (const file of slideFiles) {
      try {
        const slideName = path.dirname(file).split("/").pop();
        console.log(`Building ${slideName}...`);

        // npx を使用してslidevを実行
        execSync(
          `npx slidev build "${file}" --base "/note/docs/${slideName}/dist"`,
          {
            stdio: "inherit",
            encoding: "utf-8",
          }
        );

        console.log(`Successfully built ${slideName}`);
      } catch (err) {
        console.error(`Error building ${file}:`, err.message);
        // 個別のスライドのビルドエラーでも続行
        continue;
      }
    }
  } catch (err) {
    console.error("Build process failed:", err);
    process.exit(1);
  }
}

buildSlides();
