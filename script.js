var inputBox=document.querySelector("#input-box");
var list=document.querySelector('.list');
function addTask(){
    if(inputBox.value===""){
        alert("Must Enter The Task ");
    }
    else{
        let a=document.createElement("li");
        a.innerHTML=inputBox.value;
        list.appendChild(a);
        let span=document.createElement('span');
        span.innerHTML= "\u00d7";
        a.appendChild(span);
        saveData();
    }
    inputBox.value="";
}
list.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();
