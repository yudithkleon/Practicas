let x =10;

console.log('1. proceso iniciado... ');




const promesa= new Promise((resolve, reject)=>{

    setTimeout(() =>{
        x= x * 3 + 2;
        console.log('2. proceso terminado...');
        resolve(x);
    }, 2000);
    
});

promesa.then(res =>
    {
        console.log('3. el resultado es: ' + x);
    });
    