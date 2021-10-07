function  calculatorPro() {
    
    let newNumber;
    let numberList = [];
    /*let numero = "123gasfdv";   Pruebas..
    test = parseFloat(numero);
    alert(test);*/

    while (newNumber !== null) {
      newNumber = prompt('Introduce un número o pulsa "Cancelar" para finalizar');
      if (newNumber == "" || isNaN(newNumber) ){

          alert("Introduce un valor válido por favor");
      }
      if(newNumber!= null && !isNaN(newNumber) && newNumber != ""){
            newNumberOK =  Number(Number(newNumber).toFixed(3)); 
            // Con lo anterior, consigo pasar la string del usuario a número, la limito a 3 decimales, y con el primer "Number" hago que no muestre los decimales innecesarios que sean "0" -> ej: 12.200 quedaría 12.2
            numberList.push(newNumberOK);
      }

     alert(newNumber); 
     alert(newNumberOK);
     alert(numberList);
    
      }

    if(numberList.length == 1){
        
        let raiz = Math.sqrt(numberList[0]);
        alert("La raíz cuadrada es " + raiz);
    }
    else{
        let resultSum = 0;
        let resultRest;
        let resultMul = 1;
        let resultDiv;

    
        for(i=0; i<numberList.length; i++){
            
            resultSum += numberList[i];

            if(i==0){ //excepciones para la resta y división 
            resultRest = numberList[i];  //Solo para la primera iteración
            resultDiv = numberList[i];
            }
            else{
                resultRest -= numberList[i];
                resultDiv /= numberList[i];
            }
            resultMul *= numberList[i];
            
        }
        let resultTotal = 'Results:\nEl resultado de la suma es : ' + resultSum +
                    '\nEl resultado de la resta es : ' + resultRest +
                    '\nEl resultado de la multiplicación es : ' + resultMul +
                    '\nEl resultado de la división es : ' + resultDiv;
        alert(resultTotal);

       // document.getElementById("resultados").innerHTML = resultTotal;
       //console.log(resultTotal)
    }

    if(confirm("¿Quieres seguir calculando?")){

        calculatorPro();
    }else{
        alert("¡Hasta pronto!");
    }
}

describe("Function calculatorPro", () => {
  test("When you get 1 and 1, it should return true", () => {
    //Arrange
    const firstValue = 1;
    const secondValue = 1;
    const expected = true;

    //Act
    const result = calculatorPro(firstValue, secondValue);

    //Asset
    expect(result).toBe(expected);
  });
