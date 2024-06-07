const fs = require("fs");
const path = require("path");

const blogDirectory = path.join(__dirname, "blogs");

if (!fs.existsSync(blogDirectory)) {
  fs.mkdirSync(blogDirectory);
}

// Logic to fetch and save new blog content can be added here.
// For example, you can fetch content from a URL or process files
// in the repository.

// Example of reading a README file and copying it to the blogs directory
const sourceFile = path.join(__dirname, "README.md");
const targetFile = path.join(blogDirectory, "new-blog-post.md");

fs.copyFileSync(sourceFile, targetFile);
console.log("Blog post added:", targetFile);
