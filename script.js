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

async function getWeatherData(){
    fetch("http://api.weatherapi.com/v1/current.json?key=9a19b803380a47dc8ff11501230509&q=Perth", { //wohoo i love hardcoding
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
main();
m1();
getWeatherData();