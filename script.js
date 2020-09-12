function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText=num;
         }else{
            document.getElementById("output-value").innerText=getFormattedNumber(num);
        
         }
    }
   //  add commas to entered value 
function getFormattedNumber(num){
    if(num == "-"){// handle NaN error for negative numbers
        return "";
    }
    var n= Number(num);
    var value = n.toLocaleString("en");
    return value;
}
// remove comma for calculation purpose
function reverseNumberFormat(num){
    return Number(num.replace(/,/g ,''));
}
 var operator= document.getElementsByClassName("operator");
 for(var i=0 ; i<operator.length; i++){
     operator[i].addEventListener('click', function(){
        if(this.id =="clear"){
            printHistory("");// set history to empty string
            printOutput("");// set output to empty string
        } 
        else if(this.id == "backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
             if(output){ //has a value
                 output = output.substr(0, output.length-1); //clear from the beginning to the last index
                 printOutput(output);
               }
             }
             else{
                 var output =getOutput();
                 var history = getHistory();
                 if(output == "" && history !=""){ //to edit operator
                        if(isNaN(history[history.length-1])){
                            history = history.substr(0, history.length-1);
                        }
                        }
                 if(output !="" || history !=""){
                     output = output ==""?
                    output :reverseNumberFormat(output);
                    history = history+output;

                    if(this.id == "="){
                        var result = eval(history);
                        printOutput(result);
                        printHistory("");
                    }
                    else{
                        history = history +this.id;
                        printHistory(history);
                        printOutput("");
                    }
                 }
             }
             
     });
 }
 var number= document.getElementsByClassName("number");
 for(var i=0 ; i<number.length; i++){
     number[i].addEventListener('click', function(){
       var output = reverseNumberFormat(getOutput()); //get output without commas
       if(output !=NaN){ //output is a number
           output=output+this.id;
           printOutput(output)
       }
     });
 }