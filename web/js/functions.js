function modal(payments, income, outcome) {
    var radios = document.getElementsByName(payments);
    if (radios[0].checked) {  
        var x = document.getElementById(income);
        var y = document.getElementById(outcome);
        x.style.display = "block";
        y.style.display = "none";
        var z = document.getElementById("radios");
        z.style.display = "block";
    } else {
        var x = document.getElementById(outcome);
        var y = document.getElementById(income);
        x.style.display = "block"; 
        y.style.display = "none";
        var z = document.getElementById("radios");
        z.style.display = "block";
    }
}

function dashboard(first, second) {
    radiobtn = document.getElementById("radio_" + first);
    radiobtn.checked = true;
    var x = document.getElementById(first);
    var y = document.getElementById(second);
    var z = document.getElementById("radios");
    x.style.display = "block";
    y.style.display = "none";   
    z.style.display = "none";
}

function income(income, outcome) {
    var x = document.getElementById(income);
    var y = document.getElementById(outcome);
    x.style.display = "block";
    y.style.display = "none";
}

function outcome(outcome, income) {
    var x = document.getElementById(outcome);
    var y = document.getElementById(income);
    x.style.display = "block"; 
    y.style.display = "none";
} 

function respNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
        $('.collapse').collapse("hide");
    }
}

function drawPieIn() {
    var ctx = document.getElementById("piechartIncome");
    var data = {
        datasets: [{
            data: [
                1400, 
                194, 
                20,
            ],
            backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
            ],
            label: "Einnahmen"
        }],
        labels: [
            'Gehalt',
            'Sozialleistung',
            'Geschenk',
        ]
    };
    var options = {
	responsive: false
    };
    var myPieChart = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: options
    });
}

function drawPieOut() {
    var ctx = document.getElementById("piechartOutcome");
    var data = {
        datasets: [{
            data: [
                151.2, 
                400, 
                52.30,
            ],
            backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
            ],
            label: "Ausgaben"
        }],
        labels: [
            'Lebensmittel',
            'Miete',
            'Bahn',
        ]
    };
    var options = {
	responsive: false
    };
    var myPieChart = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: options
    });
}

function drawTrend() {
    var ctx = document.getElementById("chartTrend");    
    var options = {
	responsive: false
    };
    var data = {
        datasets: [{
            data: [
                {x:'März', y:-15}, 
                {x:'April', y:-111}, 
                {x:'Mai', y:20}, 
                {x:'Juni', y:70}, 
                {x:'Juli', y:2}, 
                {x:'August', y:13},
                {x:'September', y:13}],
            backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
            ],
            label: "Bilanz"
        }],
        labels: [
            'März',
            'April',
            'Mai',
            'Juni',
            'Juli',
            'August',
            'September',
        ]
    };
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });    
}

function currentMonth() {
    var months    = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
    var now       = new Date();
    var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
    var htmlComp = document.getElementById("currentMonth");
    htmlComp.innerHTML = thisMonth;
}