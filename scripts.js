function firstToSecond(){
 
 var input1=document.getElementById("firstCurrency").value;
 var input2=document.getElementById("SecondCurrency").value;
 
 if(document.getElementById('inputCurrency').value == 'Peso')
 if(document.getElementById('OutputCurrency').value == 'Peso1'){
 document.getElementById("SecondCurrency").value=input1*1;
 } 
 else if(document.getElementById('OutputCurrency').value == 'Euro1'){
 document.getElementById("SecondCurrency").value=input1/48.54;
 }
 else if(document.getElementById('OutputCurrency').value == 'Libra1'){
 document.getElementById("SecondCurrency").value=input1/53.25;
 }
 else if(document.getElementById('OutputCurrency').value == 'Dolar1'){
 document.getElementById("SecondCurrency").value=input1/43.82;
 }  
 if(document.getElementById('inputCurrency').value == 'Euro')
 if(document.getElementById('OutputCurrency').value == 'Peso1'){
 document.getElementById("SecondCurrency").value=input1*48.54;
 }
 else if(document.getElementById('OutputCurrency').value == 'Euro1'){
 document.getElementById("SecondCurrency").value=input1*1;}
 else if(document.getElementById('OutputCurrency').value == 'Libra1'){
 document.getElementById("SecondCurrency").value=input1*0.91;
 }
 else if(document.getElementById('OutputCurrency').value == 'Dolar1'){
 document.getElementById("SecondCurrency").value=input1*1.11;}

 if(document.getElementById('inputCurrency').value == 'Libra')
 if(document.getElementById('OutputCurrency').value == 'Peso1'){
 document.getElementById("SecondCurrency").value=input1*53.25;
 }
 else if(document.getElementById('OutputCurrency').value == 'Euro1'){
 document.getElementById("SecondCurrency").value=input1*0.91;}
 else if(document.getElementById('OutputCurrency').value == 'Libra1'){
 document.getElementById("SecondCurrency").value=input1*1;
 }
 else if(document.getElementById('OutputCurrency').value == 'Dolar1'){
 document.getElementById("SecondCurrency").value=input1*1.21;
 }
 if(document.getElementById('inputCurrency').value == 'Dolar')
 if(document.getElementById('OutputCurrency').value == 'Peso1'){
 document.getElementById("SecondCurrency").value=input1*43.82;
 }
 else if(document.getElementById('OutputCurrency').value == 'Euro1'){
 document.getElementById("SecondCurrency").value=input1*0.90; }
 else if(document.getElementById('OutputCurrency').value == 'Libra1'){
 document.getElementById("SecondCurrency").value=input1*0.82;
 }
 else if(document.getElementById('OutputCurrency').value == 'Dolar1'){
 document.getElementById("SecondCurrency").value=input1*1;} } 
