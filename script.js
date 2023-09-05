time = 0;
notes = "";
currentState = "m1";
//RUN ON START
currentState = "m1";
document.getElementById("m1").style.backgroundColor = "rgba(170, 170, 170, 0.3)";
//document.getElementById("content").innerHTML = `
    //<div class="test2" > 
        //template literal
        //please work
        //<div class="test3">
        //</div>
    //</div>
//`
//RUN ON START END
//set element with id "texta1" to the value of notes on start
function main(){
    hours = new Date().getHours();
    if (hours.toString().length == 1){
        hours1 = "0" + hours;
    }
    else{
        hours1 = hours;
    };
    minutes = new Date().getMinutes();
    if (minutes.toString().length == 1){
        minutes1 = "0" + minutes;
    }
    else{
        minutes1 = minutes;
    }
    ;
    seconds = new Date().getSeconds();
    if (seconds.toString().length == 1){
        seconds1 = "0" + seconds;
    }
    else {
        seconds1 = seconds;
    };
    day = new Date().getDay();
    day1 = dayCalc(day);
    month = new Date().getMonth();
    month1 = monthCalc(month);
    dateM = new Date().getDate();
    year = new Date().getFullYear();
    dateStr = ("~"+day1+", "+dateM+" "+month1+" "+year+"~")
    document.getElementById("mainDate").innerHTML = dateStr;
    time = hours1 + ":" + minutes1 + ":" + seconds1; 
    document.getElementById("clock").innerHTML = time;
}
function handleChange(){
    notes = document.getElementById("texta1")
    localStorage.setItem("notes", notes.value)
}

function getTempColour(tempR){
    if (tempR < 0){
        return "rgba(205, 207, 225, 0.74)"
    }
    else if (tempR >= 0 && tempR < 10){
        return "rgba(116, 112, 228, 0.468)"
    }
    else if (tempR >= 10 && tempR < 15){
        return "rgba(145, 174, 228, 0.468)"
    }
    else if (tempR >= 15 && tempR < 20){
        return "rgba(145, 214, 228, 0.468)"
    }
    else if (tempR >= 20 && tempR < 25){
        return "rgba(146, 245, 227, 0.347)"
    }
    else if (tempR >= 25 && tempR < 30){
        return "rgba(122, 230, 133, 0.347)"
    }
    else if (tempR >= 30 && tempR < 35){
        return "rgba(139, 212, 90, 0.347)"
    }
    else if (tempR >= 35 && tempR < 40){
        return "rgba(189, 227, 95, 0.347)"
    }
    else if (tempR >= 40){
        return "rgba(227, 203, 95, 0.347)"
    };
}

async function updateWeatherData(){
    fetch("http://api.weatherapi.com/v1/forecast.json?key=9a19b803380a47dc8ff11501230509&q=Perth", { //wohoo i love hardcoding
    "method": "GET",
    "headers": {
    }
    })
    .then(response => {
    console.log(response);
    return response.json();
    })
    .then(data => {
        temp = data.current.temp_c;
        document.getElementById("temp").innerHTML = temp + "°";
        document.getElementById("temp").style.color = getTempColour(temp);
        mintemp = data.forecast.forecastDay[0].day.mintemp_c;
        maxtemp = data.forecast.forecastDay[0].day.maxtemp_c;
        document.getElementById("low").innerHTML = mintemp + "°";
        document.getElementById("low").style.color = getTempColour(mintemp);
        document.getElementById("high").innerHTML = maxtemp + "°";
        document.getElementById("high").style.color = getTempColour(maxtemp);
        // temp to colour
            //  <0
            //  rgba(205, 207, 225, 0.74);
            
            //  0-10
            //  rgba(116, 112, 228, 0.468);

            //  10-15
            //  rgba(145, 174, 228, 0.468);

            //  15-20
            //  rgba(145, 214, 228, 0.468);

            //  20-25
            // rgba(146, 245, 227, 0.347);

            //  25-30
            //  rgba(122, 230, 133, 0.347);

            //  30-35
            //  rgba(139, 212, 90, 0.347);

            //  35-40
            //  rgba(189, 227, 95, 0.347);

            //  40+
            //  rgba(227, 203, 95, 0.347);
        //  document.getElementById("temp").style.color = "white";
    });
}

//Menubar 
    function m1(){
        currentState = "m1";
        document.getElementById("m1").style.backgroundColor = "rgba(65, 65, 65, 0.5)";

        document.getElementById("m2").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m3").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m4").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m5").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m6").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m7").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m1").onmouseup=(() =>{
            document.getElementById("m1").style.backgroundColor = "rgba(170, 170, 170, 0.3)";
        })
        //neutral
        //border-color: rgba(41, 41, 41, 0.669);
        //background-color: rgba(72, 92, 96, 0.261);

        //clicked
        //background-color: rgba(68, 75, 75, 0.654);
        //border-color: rgba(170, 170, 170, 0.3);
        console.log("clicked")
    }
    function m2(){
        currentState = "m2";

        document.getElementById("m1").style.backgroundColor = "rgba(72, 92, 96, 0.261)";
 
        document.getElementById("m2").style.backgroundColor = "rgba(65, 65, 65, 0.5)";
         
        document.getElementById("m3").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m4").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m5").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m6").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m7").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m2").onmouseup=(() =>{
            document.getElementById("m2").style.backgroundColor = "rgba(170, 170, 170, 0.3)";
        })

        console.log("clicked")
    }
    function m3(){
        currentState = "m3";

        document.getElementById("m1").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m3").style.backgroundColor = "rgba(65, 65, 65, 0.5)";

        document.getElementById("m2").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m4").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m5").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m6").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m7").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m3").onmouseup=(() =>{
            document.getElementById("m3").style.backgroundColor = "rgba(170, 170, 170, 0.3)";
        })

        console.log("clicked")
    }
    function m4(){
        currentState = "m4";
        document.getElementById("m1").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m4").style.backgroundColor = "rgba(65, 65, 65, 0.5)";

        document.getElementById("m3").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m2").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m5").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m6").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m7").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m4").onmouseup=(() =>{
            document.getElementById("m4").style.backgroundColor = "rgba(170, 170, 170, 0.3)";
        })

        console.log("clicked")
    }
    function m5(){
        currentState = "m5";
        document.getElementById("m1").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m5").style.backgroundColor = "rgba(65, 65, 65, 0.5)";

        document.getElementById("m3").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m4").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m2").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m6").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m7").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m5").onmouseup=(() =>{
            document.getElementById("m5").style.backgroundColor = "rgba(170, 170, 170, 0.3)";
        })

        console.log("clicked")
    }
    function m6(){
        currentState = "m6";
        document.getElementById("m1").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m6").style.backgroundColor = "rgba(65, 65, 65, 0.5)";

        //
        document.getElementById("m3").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m4").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m5").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m2").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m7").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m6").onmouseup=(() =>{
            document.getElementById("m6").style.backgroundColor = "rgba(170, 170, 170, 0.3)";
        })

        console.log("clicked")
    }
    function m7(){
        currentState = "m7";
        document.getElementById("m1").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m7").style.backgroundColor = "rgba(65, 65, 65, 0.5)";

        //
        document.getElementById("m3").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m4").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m5").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m6").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m2").style.backgroundColor = "rgba(72, 92, 96, 0.261)";

        document.getElementById("m7").onmouseup=(() =>{
            document.getElementById("m7").style.backgroundColor = "rgba(170, 170, 170, 0.3)";
        })

        console.log("clicked")
    }
//Menubar end
//MonthCalc
function monthCalc(month){
    if (month == 1){
        return "Jan";
    }
    else if (month == 2){
        return "Feb";
    }
    else if (month == 3){
        return "Mar";
    }
    else if (month == 4){
        return "Apr";
    }
    else if (month == 5){
        return "May";
    }
    else if (month == 6){
        return "Jun";
    }
    else if (month == 7){
        return "Jul";
    }
    else if (month == 8){
        return "Aug";
    }
    else if (month == 9){
        return "Sep";
    }
    else if (month == 10){
        return "Oct";
    }
    else if (month == 11){
        return "Nov";
    }
    else if (month == 12){
        return "Dec";
    }
}

function dayCalc(day){
    if (day == 1){
        return "Mon";
    }
    else if (day == 2){
        return "Tue";
    }
    else if (day == 3){
        return "Wed";
    }
    else if (day == 4){
        return "Thu";
    }
    else if (day == 5){
        return "Fri";
    }
    else if (day == 6){
        return "Sat";
    }
    else if (day == 0){
        return "Sun";
    }
}

// call function f1 every 1 second
setInterval(main, 500);
setInterval(updateWeatherData, 900000); //15mins
main();
m1();
updateWeatherData();
