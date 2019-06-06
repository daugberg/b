"use strict";

let sheetId4 = "1wjmqDmj_LytiA-Oed7MUX5e7PPG-7ppVOOqsPhkJpLc";
let sheetNumber4 = 5;
let sheetUrl4 = "https://spreadsheets.google.com/feeds/list/" + sheetId4 + "/" + sheetNumber4 + "/public/full?alt=json";
console.log(sheetUrl4);

fetch(sheetUrl4)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        appendFivetips(json.feed.entry);
    });

/*
Appends json data to the DOM
*/
function appendFivetips(fivetips) {
    console.log(fivetips);
    let htmlTemplate = "";
    for (let fivetip of fivetips) {
        htmlTemplate += `
                                        <section>
                                        <div class="gameinfo">
                                            <h3>${fivetip['gsx$venue']['$t']}</h3>
                                            <h4>${fivetip['gsx$game']['$t']}</h4>
                                        </div>
                                        <div class="tipinfo">
                                            <h5>${fivetip['gsx$tipr']['$t']}</h5>
                                            <button class="${fivetip['gsx$winloss']['$t']}">${fivetip['gsx$odds']['$t']}</button>
                                        </div>
                                        </section>
      `;
    }
    document.querySelector("#fivetips").innerHTML += htmlTemplate;
}
