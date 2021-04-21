const dotenv = require("dotenv").config();

const Airtable = require("airtable");
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = require("airtable").base("appnB0c3FOT7M66D5");
const get = () => {
  base("Books")
    .select({
      maxRecords: 10,
      fields: ["Title", "Author", "Completed", "Status"],
      view: "Main View",
      filterByFormula: "{Status} = 'Currently Reading'",
    })
    .firstPage(function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log("Retrieved", record.get("Title"));
      });
    });
};

module.exports = {
  get,
};
