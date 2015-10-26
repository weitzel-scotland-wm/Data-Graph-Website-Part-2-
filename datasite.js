//http://www.statista.com/statistics/263257/physical-retail-sales-of-video-games-in-the-us/
//http://www.steamgifts.com/discussion/YAKms/2005-2012-pc-vs-console-gaming-population-growth-rates
//https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=number+of+users+on+steam&start=0

google.load('visualization', '1.1', {packages: ['line', 'corechart']});
google.setOnLoadCallback(drawChart);

function drawChart() {

    var button = document.getElementById('change-chart');
    var chartDiv = document.getElementById('chart_div');

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', "Revenue (US) of Hard Copy Video Games (in billions)");
    data.addColumn('number', "Steam User Base (in millions)");

    data.addRows([
        [new Date(2000, 0),  5.6, 0],
        [new Date(2001, 0),   6, 0],
        [new Date(2002, 0), 6.9, 0],
        [new Date(2003, 0), 7, 0],
        [new Date(2004, 0),  7.3, 1],
        [new Date(2005, 0),  6.9, 4],
        [new Date(2006, 0), 7.3,  9],
        [new Date(2007, 0), 9.5,  15],
        [new Date(2008, 0), 11.7, 17],
        [new Date(2009, 0), 10.1, 20],
        [new Date(2010, 0), 10.05, 26],
        [new Date(2011, 0), 9.13, 33],
        [new Date(2012, 0), 8.48, 40],
        [new Date(2013, 0), 6.32, 55],
        [new Date(2014, 0), 5.47, 75],
        [new Date(2015, 0), 5.47, 125]

    ]);

    var materialOptions = {
        chart: {
            title: 'The Change from Physical to Digital'
        },
        width: 800,
        height: 500,
        series: {
            // Gives each series an axis name that matches the Y-axis below.
            0: {axis: 'Revenue (US) of Hard Copy Video Games (in billions)'},
            1: {axis: 'Steam User Base (in millions)'}
        },
        axes: {
            // Adds labels to each axis; they don't have to match the axis names.
            y: {
                Temps: {label: 'Temps (Celsius)'},
                Daylight: {label: 'Daylight'}
            }
        }
    };

    var classicOptions = {
        title: 'The Change from Physical to Digital',
        width: 900,
        height: 500,
        // Gives each series an axis that matches the vAxes number below.
        series: {
            0: {targetAxisIndex: 0},
            1: {targetAxisIndex: 1}
        },
        vAxes: {
            // Adds titles to each axis.
            0: {title: 'Revenue (US) of Hard Copy Video Games (in billions)'},
            1: {title: 'Steam User Base (in millions)'}
        },
        hAxis: {
            ticks: [new Date(2000, 0), new Date(2001, 0), new Date(2002, 0), new Date(2003, 0),
                new Date(2004, 0),  new Date(2005, 0), new Date(2006, 0), new Date(2007, 0),
                new Date(2008, 0), new Date(2009, 0), new Date(2010, 0), new Date(2011, 0), new Date(2012, 0), new Date(2013, 0), new Date(2014, 0), new Date(2015, 0)
            ]
        },
        vAxis: {
            viewWindow: {
                max: 30
            }
        }
    };

    function drawMaterialChart() {
        var materialChart = new google.charts.Line(chartDiv);
        materialChart.draw(data, materialOptions);
        button.innerText = 'Change to Classic';
        button.onclick = drawClassicChart;
    }

    function drawClassicChart() {
        var classicChart = new google.visualization.LineChart(chartDiv);
        classicChart.draw(data, classicOptions);
        button.innerText = 'Change to Material';
        button.onclick = drawMaterialChart;
    }

    drawMaterialChart();

}

function clicker1() {
    document.getElementById("picture1").src = ("pics/product9.jpg")
}
function clicker2() {
    document.getElementById("picture2").src = ("pics/product8.jpg")
}
function clicker3() {
    document.getElementById("picture3").src = ("pics/product5.jpg")
}
function clicker4() {
    document.getElementById("picture4").src = ("pics/product3.jpg")
}
function clicker5() {
    document.getElementById("picture5").src = ("pics/product1.jpg")
}
function clicker6() {
    document.getElementById("picture6").src = ("pics/product2.jpg")
}
function clicker7() {
    document.getElementById("picture7").src = ("pics/product7.jpg")
}
function clicker8() {
    document.getElementById("picture8").src = ("pics/product4.jpg")
}
function clicker9() {
    document.getElementById("picture9").src = ("pics/product6.png")
}

function d1(){
    var changeDescription = prompt("What would you like the description to say?");
    document.getElementById("p1").innerHTML = changeDescription
}
function d2(){
    var changeDescription = prompt("What would you like the description to say?");
    document.getElementById("p2").innerHTML = changeDescription
}
function d3(){
    var changeDescription = prompt("What would you like the description to say?");
    document.getElementById("p3").innerHTML = changeDescription
}
function d4(){
    var changeDescription = prompt("What would you like the description to say?");
    document.getElementById("p4").innerHTML = changeDescription
}
function d5(){
    var changeDescription = prompt("What would you like the description to say?");
    document.getElementById("p5").innerHTML = changeDescription
}
function d6(){
    var changeDescription = prompt("What would you like the description to say?");
    document.getElementById("p6").innerHTML = changeDescription
}
function d7(){
    var changeDescription = prompt("What would you like the description to say?");
    document.getElementById("p7").innerHTML = changeDescription
}
function d8(){
    var changeDescription = prompt("What would you like the description to say?");
    document.getElementById("p8").innerHTML = changeDescription
}
function d9(){
    var changeDescription = prompt("What would you like the description to say?");
    document.getElementById("p9").innerHTML = changeDescription
}



