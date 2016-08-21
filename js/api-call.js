window.onload = function () {
    // Make API call using custom sentence
    var xhr = new XMLHttpRequest();

    xhr.open("Get", "http://api.timezonedb.com/v2/list-time-zone?key=5OV2VNUX028H&format=json", false);
    // xhr.setRequestHeader
    xhr.send();
     var result = xhr.responseText;
    // // Modify text of HTML paragraph to display text returned by the API
     
    var obj = JSON.parse(result);

    //document.getElementById("test").innerHTML = obj;

     //alert("sup");
};

var CURRENT_DATE = new Date();




//var date = new date();
function londonClick(){
    buttonClick("Europe/London");
}

function sydneyClick(){
    buttonClick("Australia/Sydney");
}

function africaClick(){
    buttonClick("Africa/Johannesburg");
}

function vanuatuClick(){
    buttonClick("Pacific/Efate");

}

function buttonClick(inputString){
    
    var myRequest = new XMLHttpRequest();

   
    myRequest.open("Get", "http://api.timezonedb.com/v2/convert-time-zone?key=5OV2VNUX028H&format=json&from=Pacific/Auckland&to=" + inputString, false);
    myRequest.send();


    var requestResult = myRequest.responseText
    var myObject = JSON.parse(requestResult);

    var myOffset =  parseInt(myObject.offset, 10);
    //alert(myOffset);

    var timeStamp = (myObject.toTimestamp);
   // alert(timeStamp);

    CURRENT_DATE = new Date(timeStamp * 1000);

  //  alert(newDate.getHours());
   // alert(newDate.getMinutes());

    var hour = CURRENT_DATE.getHours();
	var minute = CURRENT_DATE.getMinutes();
	var second = CURRENT_DATE.getSeconds();


	// Ensure that every value has two digits
    startTime2();
    changeColor2();



}
function getTime(){
    alert(CURRENT_DATE.getHours());

}



function startTime2() {

    var h = CURRENT_DATE.getHours();
    var m = CURRENT_DATE.getMinutes();
    var s = CURRENT_DATE.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s;
    //document.body.style.background = "#00FFFF";
   // document.body.style.backgroundColor = "red";
    
   var t = setTimeout(startTime2, 1000); 
}

function checkTime(i) {
    
    if (i < 10) {
        i = "0" + i;
       
    }
    ; // add zero in front of numbers < 10
    return i;
}


function changeColor2() {

	// Counting number

	x = 1;

	
	var hour = CURRENT_DATE.getHours();
	var minute = CURRENT_DATE.getMinutes();
	var second = CURRENT_DATE.getSeconds();

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
    
    //setHour(hour, minute, second);
    CURRENT_DATE.setHours(hour, minute, second+1);
    // var date = new Date();
    
   
    //CURRENT_DATE.setMinutes(minute);
    //CURRENT_DATE.setSeconds(seconds);

	document.body.style.backgroundColor = color;

	//document.getElementById("hex").innerHTML = color;

	// Execute function every second (1000ms)

	setTimeout(changeColor2, x * 1000);

}



