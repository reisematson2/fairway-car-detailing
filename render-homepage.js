import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import path from "path";
import Home from "./client/src/pages/Home";
import "./client/src/index.css";

const renderHomepage = () => {
  const html = ReactDOMServer.renderToString(<Home />);

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fairway Car Detailing - Homepage</title>
    <link rel="stylesheet" href="./index.css">
</head>
<body>
    <div id="root">${html}</div>
</body>
</html>`;

  const outputPath = path.resolve(__dirname, "client", "standalone-homepage.html");
  fs.writeFileSync(outputPath, fullHtml, "utf-8");
  console.log(`Homepage rendered to ${outputPath}`);
};

renderHomepage();
