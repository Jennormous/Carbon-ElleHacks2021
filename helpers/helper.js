const fs = require("fs");
const uuid = require("uuid");
const moment = require("moment");

function writeJSONFile(filename, content) {
  console.log(filename, content);
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`changes saved to the file: ${filename}....`);
}

const newId = () => {
  return uuid();
};

const addedTime = () => {
  return moment();
};

module.exports = {
  writeJSONFile,
  newId,
  addedTime
};
