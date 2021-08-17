
// declaro la variable
let x=10;

//las promesas es si se cumple o no una constante le asignia una nueva promesa, es una funcion 
//invisible y le paso dos valores, un resolve y un reject 


const promesa =new Promise((resolve, reject) =>
{
    if (x==10)
    {
        //si el resultado es positivo entro al resolve
        resolve('La Variable Es igual a 10 ');
    }else
    {
        //si el resultado es negativo entro aqui
        reject('La variable NO es igual a 10');
    }
});


//para llamar a la promesa necesito llamr a dos funciones siempre
//then para el valor positivo envio por consola un success y le concateno res que es la que tiene el mensaje

promesa.then(res=>{
    console.log ('success:' +  res);
})
// para la parte falsa de la promesa utilizo el catch con el error y concateno el errror
promesa.catch(error =>
  {
    console.log('error: ' + error);
  }  
);




        