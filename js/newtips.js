"use strict";

let sheetId3 = "1wjmqDmj_LytiA-Oed7MUX5e7PPG-7ppVOOqsPhkJpLc";
let sheetNumber3 = 1;
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
<h3>        ${newtip['gsx$date']['$t']} &#183  
            ${newtip['gsx$time']['$t']} (CET) &#183
              ${newtip['gsx$sport']['$t']} &#183 
                ${newtip['gsx$country']['$t']} &#183 
                  ${newtip['gsx$tournament']['$t']}
                  </h3>
                                            <h4>${newtip['gsx$team1']['$t']} vs
                                                ${newtip['gsx$team2']['$t']}</h4>
                                        </div>
                                         <div class="tipinfo">
                                            <h5>Tip: ${newtip['gsx$tip']['$t']}</h5>
                     <a href="http://bit.ly/betscout${newtip['gsx$bookie']['$t']}">
                       
<button class="">
        ${newtip['gsx$odds']['$t']}</button>
</a>
                                        </div>
                                        </section>
      `;
    }
    document.querySelector("#newtips").innerHTML += htmlTemplate;
}
