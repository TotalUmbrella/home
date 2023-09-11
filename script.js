time = 0;
notes = "";

//RUN ON START
index1 = 0;
currentState = "m1";

let events = [
    [120,"balls"],
    [801,"tribunal"],
    [906,"among"],
    [621,"bigger"],
    [907, "minh is a poo"], 
    [321, "gary woo"]
]
function getEvents(events1, num){
    eventsCopy = [...events1];
    date2 = new Date().getDate();
    month2 = new Date().getMonth();
    if (date2 == 1){
        month2 = month2 - 1;
        if (month2 == 0){
            month2 = 12;
        }
        if (month2 == 2){
            date2 = 28;
        }
        else if (month2 ==2 && year % 4 == 0){
            date2 = 29;
        }
        else if (month2 == 4 || month2 == 6 || month2 == 9 || month2 == 11){
            date2 = 30;
        }
        else {
            date2 = 31;
        }
    }
    else {
        date2 = date2 - 1;
    }
    if (date2.toString().length == 1) {
        date2 = "0" + date2.toString();
    }
    else {
        date2 = date2.toString();
    }
    combined = (month2+1).toString() + date2;
    eventsCopy.push([(combined - 0), "NOONESHOULDWRITETHISLETSHOPENOONEWRITESTHIS"]);
    eventsCopy.sort(function(a, b){return a[0] - b[0]});
    let index = eventsCopy.findIndex(function(item, i){
        return item[1] == "NOONESHOULDWRITETHISLETSHOPENOONEWRITESTHIS";
    });
    index1 = index + num 
    if ((index1 + 1 )> eventsCopy.length){
        index1 = index1 - (eventsCopy.length)
    }
    return eventsCopy[index1];
}
function getDate1(arguement) {
    //today
        datet = new Date().getDate();
        montht = new Date().getMonth() + 1;
        datet2 = new Date().getDate();
        montht2 = new Date().getMonth() + 1;
        if (datet.toString().length == 1) {
            datet = "0" + datet.toString();
        }
        else {
            datet = datet.toString();
        }
        combinedt = (montht).toString() + datet;
    //today
    //("date:"+datet2)
    //tomorrow
        if (month2 == 2){
            if (datet2 == 28){
                datet2 = 1;
                montht2 = montht2 + 1;
            }
            else {
                datet2 = datet2 + 1;
                montht2 = montht2;
            }
        }
        else if (month2 ==2 && year % 4 == 0){
            if (datet2 == 29){
                datet2 = 1;
                montht2 = montht2 + 1;
            }
            else {
                datet2 = datet2 + 1;
                montht2 = montht2;
            }
        }
        else if (month2 == 4 || month2 == 6 || month2 == 9 || month2 == 11){
            if (datet2 == 30){
                datet2 = 1;
                montht2 = montht2 + 1;
            }
            else {
                datet2 = datet2 + 1;
                montht2 = montht2;
            }
        }
        else {
            if (datet == 31){
                datet2 = 1;
                montht2 = montht2 + 1;
            }
            else {
                datet2 = datet2 + 1;
                montht2 = montht2;
            }
        }
        //now at this point i thin kdatet2 and montht2 is the next day, so if we combine them all shall be dandy
        //("date:"+datet2)
        if (datet2.toString().length == 1) {
            datet2 = "0" + datet2.toString();
        }
        else {
            datet2 = datet2.toString();
        }
        combinedt2 = (montht2).toString() + datet2;
        //(combinedt2)
        //("date:"+datet2)
        //("month:"+montht2)
    //tomorrow
    dateTotal = arguement[0];
    if (dateTotal.toString().length == 3) {
        month1 = dateTotal.toString().slice(0, 1);
        day1 = dateTotal.toString().slice(1, 3);
    }
    else {
        month1 = dateTotal.toString().slice(0, 2);
        day1 = dateTotal.toString().slice(2, 4);
    }
    month2 = monthCalc(month1-0);
    //(dateTotal);
    //(combinedt);
    //(combinedt2);
    if (combinedt ==dateTotal.toString()){
    
        return "Today";
    }
    else if (combinedt2 == dateTotal.toString()){
        return "Tmrw";
    }
    else {
        return day1 + " " + month2;    
    }
}
function getText1(armge) {
    return armge[1];
}
document.getElementById("m1").style.backgroundColor = "rgba(170, 170, 170, 0.3)";
currentState = "m1";
document.getElementById("content").innerHTML = `
                <div class="mainPage">
                  <div class="dateStuff">
                    <div class="date1" id="mainDate">
                      ~Mon, 22 Mar 2021~
                    </div>
                    <div class="upcoming">
                      <div class="titlea">
                        up next we have: 
                      </div>
                      <div class="e1" id="first">
                        <hr class="sideBracket">25 Mar - This Doesnt<hr class="sideBracket">
                      </div>
                      <div class="e1" id="second">
                        <hr class="sideBracket">25 Mar - Work yet<hr class="sideBracket">
                      </div>
                      <div class="e1" id="third">
                        <hr class="sideBracket">25 Mar - But who cares<hr class="sideBracket">
                      </div>
                    </div>
                  </div>
                  <div class="weatherStuff">
                    <div class="temp">
                     <div class="tempText" id="temp">

                     </div>
                     <div class="extraTemp" id="extraTemp">
                        Light Rain
                     </div>
                    </div>
                    <div class="range">
                      <div class="low" id="low">
                        15°  
                      </div>
                        |
                      <div class="high" id="high">
                        20°
                      </div>
                    </div>
                  </div>
                </div>
                `;
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
    month = new Date().getMonth() + 1;
    month1 = monthCalc(month);
    dateM = new Date().getDate();
    year = new Date().getFullYear();
    if (currentState=="m1"){
        dateStr = ("~"+day1+", "+dateM+" "+month1+" "+year+"~")
        document.getElementById("mainDate").innerHTML = dateStr;
    };
    time = hours1 + ":" + minutes1 + ":" + seconds1; 
    document.getElementById("clock").innerHTML = time;

}
if (currentState=="m1"){
    document.getElementById("first").innerHTML =`<hr class="sideBracket">`+ getDate1(getEvents(events, 1)) + " - " + getText1(getEvents(events, 1))+ `<hr class="sideBracket">`;
    document.getElementById("second").innerHTML =`<hr class="sideBracket">`+ getDate1(getEvents(events, 2)) + " - " + getText1(getEvents(events, 2))+ `<hr class="sideBracket">`;
    document.getElementById("third").innerHTML =`<hr class="sideBracket">`+ getDate1(getEvents(events, 3)) + " - " + getText1(getEvents(events, 3))+ `<hr class="sideBracket">`;
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
    fetch("https://api.weatherapi.com/v1/forecast.json?key=9a19b803380a47dc8ff11501230509&q=Perth", { //wohoo i love hardcoding
    "method": "GET",
    "headers": {
    }
    })
    .then(response => {
    //(response);
    return response.json();
    })
    .then(data => {
        temp = Math.round(data.current.temp_c);
        document.getElementById("temp").innerHTML = temp + "°";
        document.getElementById("temp").style.color = getTempColour(temp);
        mintemp = Math.floor(data.forecast.forecastday[0].day.mintemp_c);
        maxtemp = Math.ceil(data.forecast.forecastday[0].day.maxtemp_c) + 1;
        document.getElementById("low").innerHTML = mintemp + "°";
        document.getElementById("low").style.color = getTempColour(mintemp);
        if (temp > maxtemp){
            maxtemp = temp;
        }
        if (temp >mintemp){
            mintemp = temp;
        }
        document.getElementById("high").innerHTML = maxtemp + "°";
        document.getElementById("high").style.color = getTempColour(maxtemp);
        condition = data.current.condition.text;
        document.getElementById("extraTemp").innerHTML = condition;
        //document.getElementById("extraTemp").innerHTML = "UV " + uv +"    " + humid + "%";
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
        document.getElementById("content").innerHTML = `
            <div class="mainPage">
                <div class="dateStuff">
                <div class="date1" id="mainDate">
                    ~Mon, 22 Mar 2021~
                </div>
                <div class="upcoming">
                    <div class="titlea">
                    up next we have: 
                    </div>
                    <div class="e1">
                    <hr class="sideBracket">25 Mar - This Doesnt<hr class="sideBracket">
                    </div>
                    <div class="e1">
                    <hr class="sideBracket">25 Mar - Work yet<hr class="sideBracket">
                    </div>
                    <div class="e1">
                    <hr class="sideBracket">25 Mar - But who cares<hr class="sideBracket">
                    </div>
                </div>
                </div>
                <div class="weatherStuff">
                <div class="temp">
                    <div class="tempText" id="temp">
                    18°
                    </div>
                    <div class="extraTemp" id="extraTemp">
                    Light Rain
                    </div>
                </div>
                <div class="range">
                    <div class="low" id="low">
                    10°  
                    </div>
                    |
                    <div class="high" id="high">
                    30°
                    </div>
                </div>
                </div>
            </div>
        `
        day = new Date().getDay();
        day1 = dayCalc(day);
        month = new Date().getMonth() + 1;
        month1 = monthCalc(month);
        dateM = new Date().getDate();
        year = new Date().getFullYear();
        dateStr = ("~"+day1+", "+dateM+" "+month1+" "+year+"~")
        document.getElementById("mainDate").innerHTML = dateStr;
        updateWeatherData();
        //("clicked")
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
        document.getElementById("content").innerHTML = ``
        //("clicked")
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
        document.getElementById("content").innerHTML = ``
        //("clicked")
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
        document.getElementById("content").innerHTML = ``
        //("clicked")
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
        document.getElementById("content").innerHTML = ``
        //("clicked")
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
        document.getElementById("content").innerHTML = ``
        //("clicked")
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
        document.getElementById("content").innerHTML = ``
        //("clicked")
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
updateWeatherData();
    day = new Date().getDay();
    day1 = dayCalc(day);
    month = new Date().getMonth() + 1;
    month1 = monthCalc(month);
    dateM = new Date().getDate();
    year = new Date().getFullYear();
    if (currentState=="m1"){
        dateStr = ("~"+day1+", "+dateM+" "+month1+" "+year+"~")
        document.getElementById("mainDate").innerHTML = dateStr;
    };