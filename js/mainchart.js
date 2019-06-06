"use strict";

let sheetId2 = "1wjmqDmj_LytiA-Oed7MUX5e7PPG-7ppVOOqsPhkJpLc";
let sheetNumber2 = 2;
let sheetUrl2 = "https://spreadsheets.google.com/feeds/list/" + sheetId2 + "/" + sheetNumber2 + "/public/full?alt=json";
console.log(sheetUrl2);

fetch(sheetUrl2)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        appendChart(json.feed.entry);
    });

function appendChart(data) {
    console.log(data);

    // prepare data
    let grades = [];
    let numbers = [];
    let colors = [];

    for (let grade of data) {
        grades.push(grade['gsx$navn']['$t']);
        numbers.push(grade['gsx$pris']['$t']);
        colors.push(grade['gsx$color']['$t']);
    }

    // generate chart
    let chart = document.getElementById('chart');
    let myDoughnutChart = new Chart(chart, {
        type: 'line',
        data: {
            datasets: [{
                data: numbers,
                backgroundColor: colors,
                borderColor: colors
      }],
            labels: grades
        },

    });
}
