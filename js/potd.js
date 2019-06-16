"use strict";

let sheetIdPOTD = "1wjmqDmj_LytiA-Oed7MUX5e7PPG-7ppVOOqsPhkJpLc";
let sheetNumberPOTD = 5;
let sheetUrlPOTD = "https://spreadsheets.google.com/feeds/list/" + sheetIdPOTD + "/" + sheetNumberPOTD + "/public/full?alt=json";
console.log(sheetUrlPOTD);

fetch(sheetUrlPOTD)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        appendPotds(json.feed.entry);
    });

/*
Appends json data to the DOM
*/
function appendPotds(potds) {
    console.log(potds);
    let htmlTemplate = "";
    for (let potd of potds) {
        htmlTemplate += `
                <section class="flip1" style="background-image:url(css/${potd['gsx$img']['$t']});">
                    <div class="flip1a">
                        <p>Tip of the Day</p>
                    </div>
                    <div class="flip1b">
                        <h3>${potd['gsx$sport']['$t']} &bull; ${potd['gsx$country']['$t']} &bull; ${potd['gsx$tournament']['$t']} &bull; ${potd['gsx$time']['$t']} CET</h3>
                        <h4>${potd['gsx$team1']['$t']} - ${potd['gsx$team2']['$t']}</h4>
<a href="http://bit.ly/betscout${potd['gsx$bookie']['$t']}">
                        <h5>${potd['gsx$tip']['$t']} @ ${potd['gsx$odds']['$t']}</h5>
</a>
</div>
                <section>

      `;
    }
    document.querySelector("#potd").innerHTML += htmlTemplate;
}
