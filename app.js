const airtable = require("./utils/airtable");
const markdown = require("./utils/markdown");

let selectionCriteria = {
  maxRecords: 10,
  fields: ["Title", "Author", "Completed", "Status"],
  view: "Main View",
  filterByFormula: "{Status} = 'Currently Reading'",
};

let tableName = "Books";

const recordCallBack = function (err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log("Retrieved", record.get("Title"));
    console.log("Retrieved", record.get("Completed"));
  });
};

const table = new airtable.Table(tableName, selectionCriteria);
table.get(recordCallBack);
