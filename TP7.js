// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"

function loadFileInto(fromFile, whereTo) 

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// 2. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 3. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

			document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

		} 
        else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}
	} 
// end ajax.onreadystatechange function

	// 4. let's go -- initiate request and process the responses
	ajax.send();

window.onload = function(){
    document.getElementById("h1").style.color="yellow";
    document.getElementById("ingredients").onclick = function() {m1()};
    function m1() {
        document.getElementById("i").style.color="black";
    }document.getElementById("equipment").onclick = function() {m2()};
    function m2() {
        document.getElementById("e").style.color="black";   
    }
    document.getElementById("directions").onclick = function() {m3()};
    function m3() {
        document.getElementById("d").style.color="black";   
    }
    document.getElementById("h1").onclick = function() {m4()};
    function m4() {
        document.getElementById("h1").style.color="white";
    }
    const myDiv = document.getElementById("my-div");
    myDiv.innerHTML = "I hope that you <strong>enjoy</string>";

    loadFileInto("ingredients.html", "#ingredients ul");
    loadFileInto("equipment.html", "#equipment ul");
    loadFileInto("directions.html", "#directions ol");
}  