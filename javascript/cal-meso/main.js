// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
    }
    
    // This function display values
    function display(value) {
    document.getElementById("result").value += value;
    }
    
    // This function evaluates the expression and returns result
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }

    function deleteByOneChar(value) {
    
            var display = document.getElementById("result").value;
            display = display.split("");
            display.splice(-1,1);
            document.getElementById("result").value = display.join("");
          
    }

    function switchMode(){
       
            const Calc = document.querySelector(".calculator")
           
            if(Calc.classList.contains('light')){
                //If it has light already; remove it
                Calc.classList.remove("light")
                
            }else{
                //If it does not have light; add it
                Calc.classList.add("dark")
                
            }

    }

    function switchMode2(){
       
        const Calc = document.querySelector(".calculator")
        if(Calc.classList.contains('dark')){
            //If it has light already; remove it
            Calc.classList.remove("dark")
        }else{
            //If it does not have light; add it
            Calc.classList.add("light")
        }

} 
