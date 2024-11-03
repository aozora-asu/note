const glob = require("glob");
const path = require("path");
const { execSync } = require("child_process");
const fs = require("fs-extra");

async function buildSlides() {
  try {
    const slideFiles = glob.sync("docs/*/slides.md");

    for (const file of slideFiles) {
      try {
        const slideName = path.dirname(file).split("/").pop();
        console.log(`Building ${slideName}...`);

        // カレントディレクトリを変更してビルド
        process.chdir(`docs/${slideName}`);

        // 相対パスでdistディレクトリを指定
        execSync(
          `npx slidev build slides.md --out dist --base "/note/${slideName}/dist/"`,
          {
            stdio: "inherit",
            encoding: "utf-8",
          }
        );

        // カレントディレクトリを元に戻す
        process.chdir("../../");

        console.log(`Successfully built ${slideName}`);
      } catch (err) {
        console.error(`Error building ${file}:`, err.message);
        // エラーが発生した場合もカレントディレクトリを戻す
        if (process.cwd().includes("/docs/")) {
          process.chdir("../../");
        }
        continue;
      }
    }
  } catch (err) {
    console.error("Build process failed:", err);
    process.exit(1);
  }
}

buildSlides();
