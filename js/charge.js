let ID = setInterval(() => {
    navigator.getBattery().then((battery) =>{
        document.getElementById("batterystatus").innerHTML = `Current battery level : ${battery.level * 100} %`;
        console.log(battery.level);
        if(battery.charging && battery.level >= 0.96){
            document.getElementById("alert").setAttribute("src","../data/alert.mp3");
            document.getElementById("message").innerHTML = "Charging કાઢો બકાં !😒";
        }
        else if(!battery.charging){
            document.getElementById("alert").setAttribute("src","#");
            document.getElementById("message").innerHTML = "";
        }
    })
},1000);
document.getElementById("stop").addEventListener("click",() =>{
    clearInterval(ID);
    document.getElementById("alert").setAttribute("src","#");
    document.getElementById("message").innerHTML = "";
})