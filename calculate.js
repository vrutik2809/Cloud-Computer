//function for calculating factorial of given number
function factorial(n){
    var fact=1;
    for(var i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}
//function for round number upto given precision
function round(num,pre){
    return Math.round(num * (10 ** pre)) / (10 ** pre);
}
//function for converting binarynumber to decimal numner
function binaryToDecimal(val){
    let len = val.length;
    let num_decimal = 0;
    for(let i = len-1;i >= 0;i--){
        num_decimal += parseInt(val[i]) * (2 ** (len-1-i));
    }
    return num_decimal;
}
//function for converting decimal numner to binary number
function decimalToBinary(val){
    if(val == 0){
        return 0;
    }
    else{
        let rem = [];
        for(;val != 0;){
            rem.unshift(val % 2);
            val =  Math.floor(val / 2); 
        }
        return parseInt(rem.join(""));
    }
}


//function for finding nPr & nCr
function getValue(){
    var select=document.getElementById("math");
    if(select.selectedIndex==1){
        var n=parseInt(document.getElementById("n").value);
        var r=parseInt(document.getElementById("r").value);
        if(n<0||r<0){
            alert("For nPr, value of n & r must be greater than or equals to 0");
        }
        else if(isNaN(n)||isNaN(r)){
            alert("please enter data");
        }
        else if(n<r){
            alert("For nPr, value of n must be greater than or equals to r");
        }
        else{
            var permutation=factorial(n)/factorial(n-r);
            document.getElementById("ans").innerHTML="The value of <sup>"+n+"</sup>P<sub>"+r+"</sub> is: "+permutation;
        }
    }
    else if(select.selectedIndex==2){
        var n=parseInt(document.getElementById("n").value);
        var r=parseInt(document.getElementById("r").value);
        if(n<0||r<0){
            alert("For nCr, value of n & r must be greater than or equals to 0");
        }
        else if(isNaN(n)||isNaN(r)){
            alert("please enter data");
        }
        else if(n<r){
            alert("For nCr, value of n must be greater than or equals to r");
        }
        else{
            var combination=factorial(n)/(factorial(n-r)*factorial(r));
            document.getElementById("ans").innerHTML="The value of <sup>"+n+"</sup>C<sub>"+r+"</sub> is: "+combination;
        }
    }
    else{
        alert("Please select function");
    }
}
//function for age calculation
function getAge(){
    var day=parseInt(document.getElementById("day").value);
    var month=parseInt(document.getElementById("month").value);
    var year=parseInt(document.getElementById("year").value);
    var date=new Date();
    var currday=date.getDate();
    var currmonth=date.getMonth();
    var curryear=date.getFullYear();
    var Day,Month,Year;
    var days=[31,0,31,30,31,30,31,31,30,31,30,31];
    if(((curryear%4==0)&&(curryear%100!=0))||(curryear%400==0)){
        days[1]=29;
    }
    else{
        days[1]=28;
    }

    if(day<1||month<1||year<1){
        alert("Invalid input");
    }
    else{
        if(currmonth+1>month||(month==currmonth+1&&day<=currday)){
			Year=curryear-year;
		}
		else{
			Year=curryear-year-1;
		}
		
		if(day>currday){
			if(currmonth==0){
				Day=days[11]-day+currday;
			}
			else{
				Day=days[currmonth-1]-day+currday;
			}
			if(month<currmonth+1){
				Month=currmonth+1-month-1;
			}
			else{
				Month=12-month+currmonth+1-1;
			}
		}
		else{
			Day=currday-day;
			if(month<=currmonth+1){
				Month=currmonth+1-month;
			}
			else{
				Month=12-month+currmonth+1;
			}
		}
		if(Year>=0&&Month>=0&&Day>=0){
			document.getElementById("age").innerHTML="Your Age: "+Year+" years "+Month+" months "+Day+" days";
		}
		else{
            document.getElementById("age").innerHTML="You are going to born in future!!";
		}
    }
}
//function for printing data according to selection
function printData(){
    let select = document.getElementById("math");
    if(select.selectedIndex == 2){
        let line1 = document.createElement("h2");
        line1.innerHTML = "Value of x: ";
        line1.setAttribute("id","l1");
        let input1 = document.createElement("input");
        input1.setAttribute("type","number");
        input1.setAttribute("id","x");
        line1.append(input1);
        document.body.append(line1);
        let line2 = document.createElement("h2");
        line2.innerHTML = "Value of y: ";
        line2.setAttribute("id","l2");
        let input2 = document.createElement("input");
        input2.setAttribute("type","number");
        input2.setAttribute("id","y");
        line2.append(input2);
        document.body.append(line2);
        let radio1 = document.createElement("input");
        radio1.innerHTML = "deg";
        radio1.setAttribute("type","radio");
        radio1.setAttribute("name","phase");
        radio1.setAttribute("id","r1");
        radio1.setAttribute("value","deg");
        let radio2=document.createElement("input");
        radio2.innerHTML = "rad";
        radio2.setAttribute("type","radio");
        radio2.setAttribute("name","phase");
        radio2.setAttribute("id","r2");
        radio2.setAttribute("value","rad");
        let line3 = document.createElement("h2");
        line3.innerHTML = "Phase in : ";
        line3.setAttribute("id","l3");
        line3.append(radio1);
        line3.append("deg ");
        line3.append(radio2);
        line3.append("rad ");
        document.body.append(line3);
        let btn=document.createElement("button");
        btn.innerHTML = "Convert";
        btn.setAttribute("id","btn");
        btn.setAttribute("onclick","convert()");
        document.body.append(btn);
    }
    else if(select.selectedIndex == 1){
        let line1 = document.createElement("h2");
        line1.innerHTML = "Value of mod: ";
        line1.setAttribute("id","l1");
        let input1 = document.createElement("input");
        input1.setAttribute("type","number");
        input1.setAttribute("id","mod");
        line1.append(input1);
        document.body.append(line1);
        let radio1 = document.createElement("input");
        radio1.innerHTML = "deg";
        radio1.setAttribute("type","radio");
        radio1.setAttribute("name","phase");
        radio1.setAttribute("id","r1");
        radio1.setAttribute("value","deg");
        let radio2=document.createElement("input");
        radio2.innerHTML = "rad";
        radio2.setAttribute("type","radio");
        radio2.setAttribute("name","phase");
        radio2.setAttribute("id","r2");
        radio2.setAttribute("value","rad");
        let line2 = document.createElement("h2");
        line2.innerHTML = "Phase in : ";
        line2.setAttribute("id","l2");
        line2.append(radio1);
        line2.append("deg ");
        line2.append(radio2);
        line2.append("rad ");
        document.body.append(line2);
        let line3 = document.createElement("h2");
        line3.innerHTML = "Value of phase: ";
        line3.setAttribute("id","l3");
        let input2 = document.createElement("input");
        input2.setAttribute("type","number");
        input2.setAttribute("id","phase");
        line3.append(input2);
        document.body.append(line3);
        let btn=document.createElement("button");
        btn.setAttribute("id","btn");
        btn.innerHTML = "Convert";
        btn.setAttribute("onclick","convert()");
        document.body.append(btn);
    }
}
//function for converting coordinate according to choice
function convert(){
    let select = document.getElementById("math");
    let line4 = document.createElement("h2");
    line4.setAttribute("id","ans");
    document.body.append(line4);
    if(select.selectedIndex == 2){
        let x = parseFloat(document.getElementById("x").value);
        let y = parseFloat(document.getElementById("y").value);
        let mod = round(Math.sqrt((x * x) + (y * y)),2);
        if(document.getElementById("r1").checked){
            let phase = round(Math.atan(Math.abs(y/x)) * (180 / Math.PI),2);
            if(x > 0 && y > 0){
                document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+phase+"<sup>∘</sup>)";
            }
            else if(x < 0 && y > 0){
                document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+(180-phase)+"<sup>∘</sup>)";
            }
            else if(x < 0 && y < 0){
                document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+(-(180-phase))+"<sup>∘</sup>)";
            }
            else{
                document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+(-phase)+"<sup>∘</sup>)";
            }
        }
        else{
            let phase = round(Math.atan(Math.abs(y/x)),2);
            if(x > 0 && y > 0){
                document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+phase+")";
            }
            else if(x < 0 && y > 0){
                document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+round((Math.PI-phase),2)+")";
            }
            else if(x < 0 && y < 0){
                document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+(-round((Math.PI-phase),2))+")";
            }
            else{
                document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+(-phase)+")";
            }
        }
    }
    else if(select.selectedIndex == 1){
        let mod = parseFloat(document.getElementById("mod").value);
        let phase = parseFloat(document.getElementById("phase").value);
        let line4 = document.createElement("h2");
        line4.setAttribute("id","ans");
        document.body.append(line4);
        if(document.getElementById("r1").checked){
            phase = phase * (Math.PI /180);
        }
        let x = round(mod * Math.cos(phase),2);
        let y = round(mod * Math.sin(phase),2);
        document.getElementById("ans").innerHTML = "Rectangular form: " + x + " + j(" + y +")"; 
    }
}
{
var str = "";
var operator;
function printValue(val){
    str += val;
    document.getElementById("btnRes").innerHTML = str;
    if(val == '+' || val == '-' || val == '*' || val == '/'){
        operator = val;
        }
}
function removeData(){
    str = "";
    document.getElementById("btnRes").innerHTML = str;
}
function calculate(){
    let arg = str.split(operator);
    str = "";
    if(operator == '+'){
        document.getElementById("btnRes").innerHTML = decimalToBinary(binaryToDecimal(arg[0]) + binaryToDecimal(arg[1]));
    }
    else if(operator == '-'){
        document.getElementById("btnRes").innerHTML = decimalToBinary(binaryToDecimal(arg[0]) - binaryToDecimal(arg[1]));
    }
    else if(operator == '*'){
        document.getElementById("btnRes").innerHTML = decimalToBinary(binaryToDecimal(arg[0]) * binaryToDecimal(arg[1]));
    }
    else{
        document.getElementById("btnRes").innerHTML = decimalToBinary(binaryToDecimal(arg[0]) / binaryToDecimal(arg[1]));
    }
}
}