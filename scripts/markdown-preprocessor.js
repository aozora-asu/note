// const fs = require("fs");
// const path = require("path");

// function saveProcessedMarkdown(content, outputPath) {
//   fs.writeFileSync(outputPath, content, "utf8");
//   console.log(`Processed markdown saved as: ${outputPath}`);
// }

// function processMarkdown(inputPath) {
//   try {
//     // ファイルの内容を読み込む
//     const content = fs.readFileSync(inputPath, "utf8");

//     // front matterを分割
//     const parts = content.split("---");
//     const hasFrontMatter = parts.length >= 3;
//     const frontMatter = hasFrontMatter ? parts[1] : "";

//     // front matter に "marp: true" が含まれているか確認
//     const isMarpPresentation = frontMatter.includes("marp: true");

//     // _marpを含むファイル名の確認
//     const marpFileSuffix = "_marp.md";
//     const newFileName = isMarpPresentation
//       ? path.basename(inputPath, ".md") + marpFileSuffix
//       : path.basename(inputPath, marpFileSuffix) + ".md";

//     const outputPath = path.join(path.dirname(inputPath), newFileName);

//     // 更新内容の準備
//     let updatedContent = content;
//     if (isMarpPresentation && !inputPath.includes(marpFileSuffix)) {
//       // _marp.md 形式に変換
//       updatedContent = content.replace("marp: true", "marp: true");
//       saveProcessedMarkdown(updatedContent, outputPath);
//       fs.unlinkSync(inputPath); // 元のファイルを削除
//     } else if (!isMarpPresentation && inputPath.includes(marpFileSuffix)) {
//       // 元の.md形式に戻し、marpを無効化
//       updatedContent = content.replace("marp: true", "marp: false");
//       saveProcessedMarkdown(updatedContent, outputPath);
//       // 元の_marp.mdファイルは削除しない
//     } else {
//       console.log("ファイルの状態に変更はありません。");
//     }
//   } catch (error) {
//     console.error("Markdownファイル処理中にエラーが発生しました:", error);
//   }
// }

// // コマンドライン引数からファイルパスを取得
// const filePath = process.argv[2];
// if (!filePath) {
//   console.error("ファイルパスを指定してください");
//   process.exit(1);
// }

// // Markdownファイルを処理
// processMarkdown(filePath);
