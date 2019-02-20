const XLSX = require('xlsx');
const { Schema } = require('./schemaClass.js');
const fs = require('fs');

const workbook = XLSX.readFile('./List.xlsx');
const sheetNameList = workbook.SheetNames;
var values = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);
console.log(values);
var list = [];

values.forEach(element => {
    let objAccordingToSchema = new Schema(element.column1);
    list.push(JSON.stringify(objAccordingToSchema))
});

//Writing into JSON file
fs.writeFile("./result.JSON", list, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});