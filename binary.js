/*
CALCULAR DECIMAL A BINARIO 1.0.1

VALUES: 
"BINARY NUMBER" VARIABLE: IS AN ARRAY WHAT COLLECT THE RESULTS FROM CALC BINARY FUNCTION
"DEC NUMBER" VARIABLE: IS THE INPUT VALUE ASSIGNED BY USER
"MODULE" VARIABLE: IS EACH VALUE OF BINARY NUMBER
"I" VARIABLE: IS A CONTROL VARIABLE 
"BINARY TEXT RESULT" VARIABLE: IS A STRING WITH THE FINAL BINARY NUMBER 
*/

let binaryNumber = [];
let decNumber = 0;
let module = 0;
let i = 0;
let binaryTextResult = "";

/*GET INPUT AND BUTTON FOR INTERACTION*/
let convertToBin = document.getElementById("convert");
let decRes = document.getElementById("result");

/*EVENT LISTENER SHOWS THE RESULT WHEN THE USER PRESSES THE CONVERT BUTTON*/
convertToBin.addEventListener("click",calcBinary);

/*CALC BINARY FUNCTION CONVERTS DEC NUMBER TO BINARY NUMBER */
function calcBinary(){
    decNumber = document.getElementById("decN");
    decNumber = parseInt(decNumber.value);

    /* WHEN DEC NUMBER IS NEGATIVE*/
    if(decNumber<0){
        decNumber *= -1;
        while(decNumber>1){
            module = decNumber%2;
            decNumber = Math.floor(decNumber/2);
            binaryNumber.unshift(module);
        }
        binaryNumber.unshift(1);
        binaryTextResult = oneTextOnArray();
        decRes.innerHTML =  `Binario: -${binaryTextResult}</br>`;
    }

    /* WHEN DEC NUMBER IS ZERO */
    else if(decNumber==0){
        decRes.innerHTML =  `Binario: 0 </br>`;
    }

    /* WHEN DEC NUMBER IS ONE */
    else if(decNumber==1){
        decRes.innerHTML =  `Binario: 1 </br>`;
    }

    /* IF THE NUMBER ISN'T ANY OF THE ABOVE */
    else{
        while(decNumber>1){
            module = decNumber%2;
            decNumber = Math.floor(decNumber/2);
            binaryNumber.unshift(module);
        }
        binaryNumber.unshift(1);
        decRes.innerHTML =  `Binario: ${binaryNumber}`;
    }

    deleteValuesOfBin();
}

/*DELETE VALUES OF BIN FUNCTION RESETS ALL VALUES */
function deleteValuesOfBin(){
    while(!binaryNumber.length==0){
        binaryNumber.shift();
    }
    module = 0;
    binaryTextResult = "";
}
/*ONE TEXT ON ARRAY FUNCTION CONVERTS ARRAY OF NUMBERS OF STRING TO SHOW THE RESULT IN CALC BINARY FUNCTION 
function oneTextOnArray(){
    let binaryString = "";
    for(i of binaryNumber){
        console.log(binaryString);
        binaryString = binaryString + binaryNumber[i];
    }

    return binaryString;
}*/