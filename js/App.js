var name = "Mike";
var number = 3;
var alertMessage ="You have reached Mike";
var tapButton = document.getElementById("clickMe");
 execute =()=>{
    alert(alertMessage);
}

tapButton.onclick = ()=>{
    execute();
};