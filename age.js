function getAge(){
    var day=document.getElementById("day").value;
    var month=document.getElementById("month").value;
    var year=document.getElementById("year").value;
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