const http = require("http");
const fs = require("fs");
const path = require("path");

// Define the file path
const filePath = path.join(__dirname, "test.txt");
const newFilePath = path.join(__dirname, "hello.txt");
// Initial content to write to the file
const content = `Make sure to handle errors appropriately, especially when performing file operations. Additionally, consider checking if the file already 
exists before creating it to avoid overwriting existing files unintentionally.\n`;

// Additional content to append to the file
const newContent =
  "This approach ensures that the file is not overwritten accidentally, and an error is thrown if the file already exists.";

// Writing of file
fs.writeFile(filePath, content, (err) => {
  if (err) throw err;
  console.log("Content created");
});

// Reading of file after writing
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// // Renaming the file
fs.rename(filePath, newFilePath, (err) => {
  if (err) throw err;
  console.log("File renamed");
});

// Appending content to the file
fs.appendFile(newFilePath, newContent, (err) => {
  if (err) throw err;
  console.log("Content appended");
});

// // Reading file after appending
fs.readFile(path.join(__dirname, "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log("File content after appending:", data);
});

  fs.readFile(newFilePath, 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
  })

// Deleting the renamed file
fs.unlink(path.join(__dirname, "hello.txt"), (err) => {
  if (err) throw err;
  console.log("File deleted");
});

// const port = 3000;
// const hostName = "127.0.0.1";

// const server = http;

// server
//   .createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     fs.readFile("index.html", (err, data) => {
//       if (err) throw err;
//       res.write(data);
//       res.end();
//     });
//   })
//   .listen(port, () => {
//     console.log(`Server started at ${hostName}:${port}`);
//   });
