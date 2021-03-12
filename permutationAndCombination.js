function factorial(n){
    var fact=1;
    for(var i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}
function getValue(){
    var select=document.getElementById("math");
    if(select.selectedIndex==1){
        var n=parseInt(document.getElementById("n").value);
        var r=parseInt(document.getElementById("r").value);
        if(n<0||r<0){
            alert("For nPr, value of n & r must be greater than or equals to 0");
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