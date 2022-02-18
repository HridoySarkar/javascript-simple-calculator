var number = parseInt(prompt("Chosse Any:","1,2,3,4"));
if(number>0 && number<=4){
    var num1_input = parseInt(prompt("First Number:"));
    var num2_input = parseInt(prompt("Second Number:"));
    switch(number) {
        case 1:
            var sum = num1_input + num2_input;
            document.write("Ans:"+sum);
        
            break;
        case 2:
            var sum = num1_input - num2_input;
            alert("Ans:"+sum);
            
            break;
        case 3:
            var sum = num1_input * num2_input;
            alert("Ans:"+sum);
            
            break;
        case 4:
            var sum = num1_input / num2_input;
            alert("Ans:"+sum);
            
            break;

        default:
            alert("Invalid number");
            break;
    }
}
else{
    alert("Number Invalid");
}