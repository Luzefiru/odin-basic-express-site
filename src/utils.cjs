const fs = require('fs'),
  path = require('path');

/**
 * Returns a string representing the html found in /routes with the corresponding {fileName}
 * @param {string} fileName
 */
function returnHTML(fileName) {
  const string = fs.readFileSync(
    path.resolve(__dirname, '../routes', fileName),
    'utf-8'
  );
  return string;
}

/**
 * Returns a string representing the css found in /public/css with the corresponding {fileName}
 * @param {string} fileName
 */
function returnCSS(fileName) {
  const string = fs.readFileSync(
    path.resolve(__dirname, `../public/css/${fileName}`),
    'utf-8'
  );
  return string;
}

module.exports = { returnHTML, returnCSS };
