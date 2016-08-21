function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s;
    //document.body.style.background = "#00FFFF";
   // document.body.style.backgroundColor = "red";
    
   var t = setTimeout(startTime, 500); 
}
   
function checkTime(i) {
    
    if (i < 10) {
        i = "0" + i;
       
    }
    ; // add zero in front of numbers < 10
    return i;
}


function changeColor() {

	// Counting number

	x = 1;

	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	// Ensure that every value has two digits

	if (hour <= 9) {
		hour = "0" + hour;
	}

	if (minute <= 9) {
		minute = "0" + minute;
	}

	if (second <= 9) {
		second = "0" + second;
	}

	var color = "#" + hour + minute + second;

	document.body.style.backgroundColor = color;

	//document.getElementById("hex").innerHTML = color;

	// Execute function every second (1000ms)

	setTimeout(changeColor, x * 1000);

}

changeColor();
