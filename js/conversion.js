function set(){
    document.getElementById("lbl_input").innerHTML = "";
    document.getElementById("lbl_input").style.color = "";
    document.getElementById("num").style.border = "";
}
function validateNum(){
    let radix = parseInt(document.getElementById("radix").value);
    let reg;
    let end;
    if((radix - 1) > 9){
        end = 9;
        reg = new RegExp("^([0-" + end + "A-"+ String.fromCharCode((65 + radix - 1 - 10)) + "]*)[\\.]?([0-" + end + "A-"+ String.fromCharCode((65 + radix - 1 - 10)) + "]+)$");
    }
    else{
        end = radix - 1;
        reg = new RegExp("^([0-" + end + "]*)[\\.]?([0-" + end + "]+)$");
    }
    if(!reg.test(String(document.getElementById("num").value))){
        return false;
    }
    else{
        return true;
    }
}
function getValue(ch){
    let arr = [];
    for(let i = 0;i < 16;i++){
        arr[i] = i;
    }
    if(ch >= 'A'){
        return arr[ch.charCodeAt(0) - 55];
    }
    else{
        return arr[ch];
    }
}
function getChar(num){
    let arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    return arr[num];
}
function convert(){
    if(document.getElementById("radix").value == "none"){
        alert("Select radix");
    }
    else if(validateNum()){
        let radix = parseInt(document.getElementById("radix").value);
        let ans = 0;
        let parts = String(document.getElementById("num").value).split(".");
        let integer = parts[0];
        let fraction;
        if(parts.length == 2){
            fraction = parts[1];
        }
        else{
            fraction = "";
        }
        for(let i = 0; i < integer.length;i++){
            ans += getValue(integer.charAt(i)) * (radix ** (integer.length - 1 - i));
        }
        for(let i = 0;i < fraction.length;i++){
            ans += getValue(fraction.charAt(i)) * (radix ** (-(i + 1)));
        }
        document.getElementById("ans").innerHTML = "Decimal value of given number = " + ans;
    }
    else{
        document.getElementById("lbl_input").innerHTML = "Invalid number according to radix";
        document.getElementById("lbl_input").style.color = "red";
        document.getElementById("num").style.border = "3px solid red";
    }
}