const { uploadFile } = require("./drive.js");

const screenshotmachine = require("screenshotmachine");
const customerKey = "74a427";

async function screenshot(url, outputName) {
  secretPhrase = "";
  options = {
    url: url,
    dimension: "1920x1080",
    device: "desktop",
    format: "jpg",
    cacheLimit: "7",
    delay: "5000",
    zoom: "100",
  };

  var apiUrl = screenshotmachine.generateScreenshotApiUrl(
    customerKey,
    secretPhrase,
    options
  );

  //put link to your html code
  console.log('<img src="' + apiUrl + '">');

  var fs = require("fs");
  var output = outputName;
  screenshotmachine.readScreenshot(apiUrl).pipe(
    fs.createWriteStream(output).on("close", function () {
      uploadFile(output);
      console.log("Screenshot saved as " + output);
    })
  );
}

exports.screenshot = screenshot;
