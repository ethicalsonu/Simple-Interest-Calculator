function compute()
{
   var  principal = document.getElementById("principal").value;
   if(principal <= 0){
       alert("Enter a positive number");
       focus(document.getElementById("principal"))
       return false;
   } 
   
   
   
   
   var rate = document.getElementById("rate").value;
    var time = document.getElementById("years").value;
    var interst = principal*time * rate/100;
    var compund = parseInt(principal) + parseInt(interst);
    // Number of years in Future.
    var year = new Date().getFullYear();
    var futurYear = year + parseInt(time);
    var result = document.getElementById("result");
    
    
    var text = `if you deposit ${principal}
    at an interest rate of ${rate}
    You will recieve an amount of ${compund}
    in the year ${futurYear}`
    result.innerText = text;
}
        

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}

