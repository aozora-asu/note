const glob = require("glob");
const path = require("path");
const { execSync } = require("child_process");
const fs = require("fs-extra");
const yargs = require("yargs");

// コマンドライン引数の処理
const argv = yargs.option("target", {
  describe: "Target directory name to build",
  type: "string",
}).argv;

async function buildSlides() {
  try {
    // ビルド対象のパターン設定
    const pattern = argv.target
      ? `docs/${argv.target}/slides.md`
      : "docs/*/slides.md";

    const slideFiles = glob.sync(pattern);

    for (const file of slideFiles) {
      try {
        const slideName = path.dirname(file).split("/").pop();
        console.log(`Building ${slideName}...`);

        // カレントディレクトリを変更してビルド
        process.chdir(`docs/${slideName}`);

        // 既存のファイルを削除
        if (fs.existsSync("thumbnail.png")) {
          fs.removeSync("thumbnail.png");
        }
        if (fs.existsSync("slides.pdf")) {
          fs.removeSync("slides.pdf");
        }

        // 相対パスでdistディレクトリを指定
        execSync(
          `npx slidev build slides.md --out dist --base "/note/${slideName}/dist/"`,
          {
            stdio: "inherit",
            encoding: "utf-8",
          }
        );

        // PDFの生成
        execSync(
          `npx slidev export slides.md --output slides.pdf --with-playground`,
          {
            stdio: "inherit",
            encoding: "utf-8",
          }
        );

        // サムネイル用にPNGをエクスポート（最初のスライドのみ）
        execSync(`npx slidev export slides.md --format png --range 1`, {
          stdio: "inherit",
          encoding: "utf-8",
        });

        // slides-exportディレクトリから画像を移動
        if (fs.existsSync("slides-export/1.png")) {
          fs.moveSync("slides-export/1.png", "thumbnail.png", {
            overwrite: true,
          });
          fs.removeSync("slides-export");
        }

        // slides-exportディレクトリが作成された場合は削除
        if (fs.existsSync("slides-export")) {
          fs.removeSync("slides-export");
        }

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
