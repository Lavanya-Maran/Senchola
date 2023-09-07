const demo = document.getElementById("demo");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(demo.value===''){
        alert("Please,enter something to add");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=demo.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    demo.value="";
    saveData();
}

listContainer.addEventListener("click",function(ad){
    if(ad.target.tagName==="LI"){
        ad.target.classList.toggle("checked");
        saveData();
    }
    else  if(ad.target.tagName==="SPAN"){
        ad.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();