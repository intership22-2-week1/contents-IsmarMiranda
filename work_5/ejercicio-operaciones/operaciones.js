
var cadenaLeer = '5*2-5+6+8/2'

division = '/'
multiplicacion = '*'
suma = '+'
resta = '-'
function cadena(cadenaString){
  var datos = [];  
  if(cadenaString.length <=20){
        var i =0

        while(i < cadenaString.length){
            datos[i] = cadenaString.charAt(i)
            i++
    }

    operaciones(datos)
    
  }else{
        console.log('No es una cadena exitosa')
    } 
}

function operaciones(lista){
   var resultado_operacion

  for (let i = 0; i < lista.length; i++) {  
    if(lista[i] == multiplicacion | lista[i] == division){
      var dato1 =  lista[i-1]
      var dato2 = lista[i+1]
      console.log(lista)
      if (lista[i] == multiplicacion) {
        resultado_operacion = multi(dato1,dato2)  
      }
      if(lista[i] == division){
        resultado_operacion = divi(dato1,dato2)  
      }
      
      lista[i-1] = resultado_operacion
      lista.splice(i,2)
      console.log('Lista nueva')
      console.log(lista)
      operaciones(lista)
    }
  }
  
  for (let i = 0; i < lista.length; i++) {  
    if(lista[i] == suma | lista[i] == resta){
      var dato1 =  lista[i-1]
      var dato2 = lista[i+1]
      console.log(lista)
      if (lista[i] == suma) {
        resultado_operacion = sum(parseFloat(dato1),parseFloat(dato2))  
      }
      if(lista[i] == resta){
        resultado_operacion = rest(parseFloat(dato1),parseFloat(dato2))  
      }
      
      lista[i-1] = resultado_operacion
      lista.splice(i,2)
      console.log('Lista nueva')
      console.log(lista)
      operaciones(lista)
    }
  }
  
}

function multi(num1,num2) {return (num1*num2)}
function divi(num1,num2) { 
  var res = num1 / num2
 var dato =  res.toFixed(2)
   return dato}
function sum(num1,num2) {return (num1+num2)}
function rest(num1,num2) {return (num1-num2)}

cadena(cadenaLeer)
//unir(cadenaX)



function unir(listaDatos) {
  var dato
  var cant=0
  var array=[]
  for(let i=0;i<listaDatos.length;i++){
   dato = listaDatos.charAt(i)
   //var a = String(dato)
   while(dato !=='+' ){
    dato += listaDatos.charAt(i+1)
    dato = listaDatos.charAt(i+1)
    i++
   }
   array[cant] = dato
   cant++     
  }
  console.log(array)  
}