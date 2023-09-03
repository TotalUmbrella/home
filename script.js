time = 0;
notes = "";
currentState = "m1";
//RUN ON START
currentState = "m1";
document.getElementById("m1").style.backgroundColor = "rgba(170, 170, 170, 0.3)";
document.getElementById("content").innerHTML = `
    <div class="test2" > 
        template literal
        please work
        <div class="test3">
        </div>
    </div>
`
//RUN ON START END
//set element with id "texta1" to the value of notes on start
function main(){
    time = new Date().toLocaleTimeString()
    document.getElementById("clock").innerHTML = time;
}
function handleChange(){
    notes = document.getElementById("texta1")
    localStorage.setItem("notes", notes.value)
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


// call function f1 every 1 second
setInterval(main, 500);
main();
onStart();
m1();
