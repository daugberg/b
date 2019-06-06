"use strict";

let sheetId3 = "1wjmqDmj_LytiA-Oed7MUX5e7PPG-7ppVOOqsPhkJpLc";
let sheetNumber3 = 3;
let sheetUrl3 = "https://spreadsheets.google.com/feeds/list/" + sheetId3 + "/" + sheetNumber3 + "/public/full?alt=json";
console.log(sheetUrl3);

fetch(sheetUrl3)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        appendNewtips(json.feed.entry);
    });

/*
Appends json data to the DOM
*/
function appendNewtips(newtips) {
    console.log(newtips);
    let htmlTemplate = "";
    for (let newtip of newtips) {
        htmlTemplate += `               
                                        <section>
                                        <div class="gameinfo">
                                            <h3>${newtip['gsx$venue']['$t']}</h3>
                                            <h4>${newtip['gsx$game']['$t']}</h4>
                                        </div>
                                        <div class="tipinfo">
                                            <h5>${newtip['gsx$tipr']['$t']}</h5>
                                            <button class="${newtip['gsx$winloss']['$t']}">${newtip['gsx$odds']['$t']}</button>
                                        </div>
                                        </section>
      `;
    }
    document.querySelector("#newtips").innerHTML += htmlTemplate;
}
