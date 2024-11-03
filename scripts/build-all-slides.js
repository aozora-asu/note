const glob = require("glob");
const path = require("path");
const { execSync } = require("child_process");

async function buildSlides() {
  try {
    const slideFiles = glob.sync("docs/*/slides.md");

    for (const file of slideFiles) {
      try {
        const slideName = path.dirname(file).split("/").pop();
        console.log(`Building ${slideName}...`);

        // ベースパスに /note/ を含める
        execSync(
          `npx slidev build "${file}" --out "docs/${slideName}" --base "/note/${slideName}/"`,
          {
            stdio: "inherit",
            encoding: "utf-8",
          }
        );

        console.log(`Successfully built ${slideName}`);
      } catch (err) {
        console.error(`Error building ${file}:`, err.message);
        continue;
      }
    }
  } catch (err) {
    console.error("Build process failed:", err);
    process.exit(1);
  }
}

buildSlides();
