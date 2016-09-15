var GLOBAL_OFFSET;


function defaultStart(): void {
    // buttonClick("Pacific/Auckland");
}
//var date = new date();
function londonClick(): void {
    buttonClick("Europe/London");
}
function newZealandClick(): void {
    buttonClick("Pacific/Auckland");
}
function sydneyClick(): void {
    buttonClick("Australia/Sydney");
}
function africaClick(): void {
    buttonClick("Africa/Johannesburg");
}
function vanuatuClick(): void {
    buttonClick("Pacific/Efate");
}
function buttonClick(inputString): void {
    var country;
    if (inputString == "Europe/London"){
         country = "London";
    }
    if (inputString == "Australia/Sydney"){
         country = "Sydney";
    }
    if (inputString == "Africa/Johannesburg"){
         country = "Johannesburg";
    }
    if (inputString == "Pacific/Efate"){
         country = "Vanuatu";
    }
    if (inputString == "Pacific/Auckland"){
         country = "New Zealand";
    }

    document.getElementById("heading").innerHTML = "The time in " + country + " is: ";
    document.getElementById("heading").style.color = "white";
    
    var myRequest = new XMLHttpRequest();
    var d = new Date();
    var request = "http://api.timezonedb.com/v2/get-time-zone?key=5OV2VNUX028H&format=json&by=zone&zone=" + inputString;
    myRequest.open("Get", request, false);
    myRequest.send();
    var requestResult = myRequest.responseText;
    var myObject = JSON.parse(requestResult);
    var myOffset = parseInt(myObject.gmtOffset, 10);

    GLOBAL_OFFSET = myOffset;
    startTime();
}

function startTime(): void {
    var today = new Date();
    today.setSeconds(today.getSeconds() + -43200 + GLOBAL_OFFSET);
    var h: any = today.getHours();
    var m: any = today.getMinutes();
    var s: any = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s;
    var color = "#" + h + m + s;
    document.body.style.backgroundColor = color;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    ; // add zero in front of numbers < 10
    return i;
}


document.addEventListener("DOMContentLoaded", function() {
    newZealandClick();
    
});