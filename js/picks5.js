"use strict";

let sheetId4 = "1wjmqDmj_LytiA-Oed7MUX5e7PPG-7ppVOOqsPhkJpLc";
let sheetNumber4 = 4;
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
<h3>        ${fivetip['gsx$date']['$t']} &#183  
            ${fivetip['gsx$time']['$t']} (CET) &#183
              ${fivetip['gsx$sport']['$t']} &#183 
                ${fivetip['gsx$country']['$t']} &#183 
                  ${fivetip['gsx$tournament']['$t']}
                  </h3>
                                            <h4>${fivetip['gsx$team1']['$t']} ${fivetip['gsx$result']['$t']} 
                                                ${fivetip['gsx$team2']['$t']}</h4>
                                        </div>
                                        <div class="tipinfo">
                                            <h5 class="${fivetip['gsx$winloss']['$t']}text">Tip: ${fivetip['gsx$tip']['$t']}</h5>
<a href="http://bit.ly/betscout${fivetip['gsx$bookie']['$t']}">
                                            <button class="${fivetip['gsx$winloss']['$t']}">
        ${fivetip['gsx$odds']['$t']}</button></a>
                                        </div>
                                        </section>
      `;
    }
    document.querySelector("#fivetips").innerHTML += htmlTemplate;
}
