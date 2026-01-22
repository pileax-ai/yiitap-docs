/**
 * Docgen: https://vue-styleguidist.github.io/docs/Docgen.html
 */
import { parse } from "vue-docgen-api";
import fs from "fs";
import path from "path";

const componentsDir = path.resolve("../yiitap/packages/vue/src/components");
const outputDir = path.resolve("src/public/data/api/vue/components");
const repoBaseUrl = 'https://github.com/pileax-ai/yiitap/blob/main/';

// Recursively traverse the directory and return all .vue file paths
function getVueFiles(dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getVueFiles(fullPath));
    } else if (file.endsWith(".vue")) {
      files.push(fullPath);
    }
  }
  return files;
}

// Generate JSON API
async function generateDocs() {
  const vueFiles = getVueFiles(componentsDir);

  for (const filePath of vueFiles) {
    try {
      const doc = await parse(filePath);
      doc.sourceFiles = doc.sourceFiles.map((file) =>
        file.replace(/^.*?\/yiitap\/yiitap\//, repoBaseUrl) // 替换本地路径为 GitHub 地址
      );

      // Compute the output JSON path while preserving the structure of src/components
      const relativePath = path.relative(componentsDir, filePath);
      const outputFilePath = path.join(outputDir, relativePath.replace(/\.vue$/, ".json"));

      // Ensure the output directory exists
      fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

      // Write to JSON file
      fs.writeFileSync(outputFilePath, JSON.stringify(doc, null, 2));
      console.log(`✅ Generated: ${outputFilePath}`);
    } catch (error) {
      console.error(`❌ Failed: ${filePath}`, error);
    }
  }
}

generateDocs();
