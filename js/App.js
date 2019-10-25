var name = "Mike";
var number = 3;
var alertMessage ="You have reached Mike";
var tapButton = document.getElementById("clickMe");
 function execute(){
    alert(alertMessage);
}

tapButton.onclick = function() {
    execute();
};