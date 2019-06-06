"use strict";

let sheetId6 = "1wjmqDmj_LytiA-Oed7MUX5e7PPG-7ppVOOqsPhkJpLc";
let sheetNumber6 = 4;
let sheetUrl6 = "https://spreadsheets.google.com/feeds/list/" + sheetId6 + "/" + sheetNumber6 + "/public/full?alt=json";
console.log(sheetUrl6);

fetch(sheetUrl6)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        appendStatts(json.feed.entry);
    });

/*
Appends json data to the DOM
*/
function appendStatts(statts) {
    console.log(statts);
    let htmlTemplate = "";
    for (let statt of statts) {
        htmlTemplate += `
<div>
          <p><b>Tips:</b> ${statt['gsx$antal']['$t']}</p>
          <p><b>Total stake:</b> ${statt['gsx$staked']['$t']}</p>
          <p><b>Profit:</b> €${statt['gsx$profit']['$t']}</p>
          <p><b>ROI:</b> ${statt['gsx$roi']['$t']}</p>
</div>
      `;
    }
    document.querySelector("#statss").innerHTML += htmlTemplate;
}
