
let alertMessage ="You have reached Mike";
let tapButton = document.getElementById("clickMe");
 execute =()=>{
    alert(alertMessage);
};

tapButton.onclick = ()=>{
    execute();
};