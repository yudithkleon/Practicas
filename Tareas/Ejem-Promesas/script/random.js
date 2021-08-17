
    const promesa = new Promise ((resolve, reject)=>
    {
        const number = Math.floor (Math.random()*10)
        setTimeout(
            ()=> number>=5
            ? resolve (number)
            : reject(new error ('Menor de 5'))
        )
    }, 1000);

    promesa.then(res =>
        console.log ('El numero es:', res)
        );

    promesa.catch(error =>
        console.log(error)
    );

