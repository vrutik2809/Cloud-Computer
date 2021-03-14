//function for calculating factorial of given number
function factorial(n){
    var fact=1;
    for(var i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
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