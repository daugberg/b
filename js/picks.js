"use strict";

let sheetId = "1wjmqDmj_LytiA-Oed7MUX5e7PPG-7ppVOOqsPhkJpLc";
let sheetNumber = 1;
let sheetUrl = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/" + sheetNumber + "/public/full?alt=json";
console.log(sheetUrl);

fetch(sheetUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        appendTips(json.feed.entry);
    });

/*
Appends json data to the DOM
*/
function appendTips(tips) {
    console.log(tips);
    let htmlTemplate = "";
    for (let tip of tips) {
        htmlTemplate += `
                                        <section>
                                        <div class="gameinfo">
                                            <h3>${tip['gsx$venue']['$t']}</h3>
                                            <h4>${tip['gsx$game']['$t']}</h4>
                                        </div>
                                        <div class="tipinfo">
                                            <h5>${tip['gsx$tipr']['$t']}</h5>
                                            <button class="${tip['gsx$winloss']['$t']}">${tip['gsx$odds']['$t']}</button>
                                        </div>
                                        </section>
      `;
    }
    document.querySelector("#tips").innerHTML += htmlTemplate;
}
