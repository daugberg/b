"use strict";

let sheetId6 = "1wjmqDmj_LytiA-Oed7MUX5e7PPG-7ppVOOqsPhkJpLc";
let sheetNumber6 = 2;
let sheetUrl6 = "https://spreadsheets.google.com/feeds/list/" + sheetId6 + "/" + sheetNumber6 + "/public/full?alt=json";
console.log(sheetUrl6);

fetch(sheetUrl6)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        appendStats(json.feed.entry);
    });

/*
Appends json data to the DOM
*/
function appendStats(stats) {
    console.log(stats);
    let htmlTemplate = "";
    for (let stat of stats) {
        htmlTemplate = `

          <p><b>Tips:</b> ${stat['gsx$bets']['$t']}</p>
          <p><b>Wins:</b> ${stat['gsx$wins']['$t']}</p>
          <p><b>Lost:</b> ${stat['gsx$lost']['$t']}</p>
          <p><b>Void:</b> ${stat['gsx$void']['$t']}</p>
          <p><b>Hit-rate:</b> ${stat['gsx$hitrate']['$t']}%</p>
          <p><b>Total stake:</b> ${stat['gsx$staked']['$t']} units</p>
          <p><b>Profit:</b> ${stat['gsx$totalprofit']['$t']} units</p>
          <p><b>ROI:</b> ${stat['gsx$roi']['$t']}</p>
          <p><b>Biggest win:</b> ${stat['gsx$bigwin']['$t']} units</p>
      `;
    }
    document.querySelector("#stats").innerHTML += htmlTemplate;
}
