const { screenshot } = require("./screenshot.js");

function application() {
  for (let i = 1; i < 6; i++) {
    switch (i) {
      case 1:
        screenshot("https://ifunded.de/en/", "1_iFunded.jpg");
        break;
      case 2:
        screenshot("https://www.propertypartner.co", "2_Property_Partner.jpg");
        break;
      case 3:
        screenshot("https://propertymoose.co.uk", "3_Property_Moose.jpg");
        break;
      case 4:
        screenshot("https://www.homegrown.co.uk", "4_Homegrown.jpg");
        break;
      case 5:
        screenshot("https://www.realtymogul.com", "5_Realty_Mogul.jpg");
    }
  }
}

exports.application = application;
