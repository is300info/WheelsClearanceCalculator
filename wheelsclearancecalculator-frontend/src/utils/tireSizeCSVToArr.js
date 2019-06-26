const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");
// const file = require('')

// const pathOfFile = __dirname;
// console.log(pathOfFolder)

const tempWholeArr = [];
fs.createReadStream("./src/utils/tireSizeCSV.csv")
  .pipe(csv())
  .on("data", data => {
    try {
      const tempArr = Object.values(data);
      const tempArrToArr = tempArr.map(num => Number(num));
      tempWholeArr.push(tempArrToArr);

    } catch (error) {
      console.error(error);
    }
  })
  .on('end', () => {
    console.log(tempWholeArr)
    fs.writeFileSync("./src/utils/write.js", JSON.stringify(tempWholeArr),{encoding:'utf8'})
  });

