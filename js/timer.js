var hr = 0, mm = 0, ss = 0,ID;
function setHour(){
    hr = parseInt(document.getElementById("hour").value);
    if(hr < 10){
        document.getElementById("hh").innerHTML = "0" + hr;
    }
    else{
        document.getElementById("hh").innerHTML = hr;
    }
}
function setMinute(){
    mm = parseInt(document.getElementById("minute").value);
    if(mm < 10){
        document.getElementById("mm").innerHTML = "0" + mm;
    }
    else{
        document.getElementById("mm").innerHTML = mm;
    }
}
function setSecond(){
    ss = parseInt(document.getElementById("second").value);
    if(ss < 10){
        document.getElementById("ss").innerHTML = "0" + ss;
    }
    else{
        document.getElementById("ss").innerHTML = ss;
    }
}
function printData(){
    if(ss == 0 && mm == 0 && hr == 0){
        stop();
        document.getElementById("alert").setAttribute("src","..//data//alert.mp3");
        document.getElementById("message").innerHTML = "સમય પતી ગયો બકાં!! Reset બટન દબાય ";
    }
    else{
        ss--;
        if(ss < 0){
            ss = 60;
            ss--;
            mm--;
        }
        if(mm < 0){
            mm = 60;
            mm--;
            hr--;
        }
    }
    if(ss < 10){
        document.getElementById("ss").innerHTML = "0" + ss;
    }
    else{
        document.getElementById("ss").innerHTML = ss;
    }

    if(mm < 10){
        document.getElementById("mm").innerHTML = "0" + mm;
    }
    else{
        document.getElementById("mm").innerHTML = mm;
    }

    if(hr < 10){
        document.getElementById("hh").innerHTML = "0" + hr;
    }
    else{
        document.getElementById("hh").innerHTML = hr;
    }
}
function start(){
    if(ss == 0 && mm == 0 && hr == 0){
        alert("Please set time");
    }
    else{
        ID = window.setInterval(printData,1000);
    }
}
function stop(){
    window.clearInterval(ID);
}
function reset(){
    stop();
    hr = mm = ss = 0;
    document.getElementById("hour").value = "0";
    document.getElementById("minute").value = "0";
    document.getElementById("second").value = "0";
    document.getElementById("hh").innerHTML = "00";
    document.getElementById("mm").innerHTML = "00";
    document.getElementById("ss").innerHTML = "00";
    document.getElementById("message").innerHTML = "";
    document.getElementById("alert").setAttribute("src","#");
}