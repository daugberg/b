"use strict";

let sheetId = "1wjmqDmj_LytiA-Oed7MUX5e7PPG-7ppVOOqsPhkJpLc";
let sheetNumber = 2;
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
<h3>        ${tip['gsx$date']['$t']} &#183  
            ${tip['gsx$time']['$t']} (CET) &#183
              ${tip['gsx$sport']['$t']} &#183 
                ${tip['gsx$country']['$t']} &#183 
                  ${tip['gsx$tournament']['$t']}
                  </h3>
                                            <h4>${tip['gsx$team1']['$t']} ${tip['gsx$result']['$t']} 
                                                ${tip['gsx$team2']['$t']}</h4>
                                        </div>
                                        <div class="tipinfo">
                                            <h5 class="${tip['gsx$winloss']['$t']}text">Tip: ${tip['gsx$tip']['$t']}</h5>
<a href="http://bit.ly/betscout${tip['gsx$bookie']['$t']}">
                                            <button class="${tip['gsx$winloss']['$t']}">
        ${tip['gsx$odds']['$t']}</button></a>
                                        </div>
                                        </section>
      `;
    }
    document.querySelector("#tips").innerHTML += htmlTemplate;
}
