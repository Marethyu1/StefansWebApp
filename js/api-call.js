window.onload = function () {
    //alert("hello world");
    // Retrieve users custom sentence from URL query string
    //var query_string = {};
   // var query = window.location.search.substring(1);
    //var vars = query.split("=");
    //var inputText = vars[1];
    // Make API call using custom sentence
    var xhr = new XMLHttpRequest();

    xhr.open("Get", "http://api.timezonedb.com/v2/list-time-zone?key=5OV2VNUX028H&format=json", false);
    // xhr.setRequestHeader
    xhr.send();

    // //xhr.open("GET", "https://yoda.p.mashape.com/yoda?sentence=" + inputText, false);
    // //xhr.setRequestHeader("X-Mashape-Authorization", "5f5D6e1Zk1mshEndw7phB6lBps5ep1w9UrOjsncnIPJyKS18Ez");
    // //xhr.send();

    // // Save response body (response minus response header)
     var result = xhr.responseText;
    // // Modify text of HTML paragraph to display text returned by the API
     
    var obj = JSON.parse(result);

    //document.getElementById("test").innerHTML = obj;

     //alert("sup");
};



function buttonClick(){

   // alert("hello world");

    var e = document.getElementById("myForm");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;

    alert(e);


}