let usuarios=[{
    id: 1,
    nombre: 'Yudith'
},
{
    id: 2,
    nombre: 'Melani'
}];

let telefonos=[{
id: 1,
telefono: 1236547
},
{
id: 2,
telefono: 123654
}];

const obtenerusuario= id =>{
return new Promise((resolve, reject)=>
{
    if (usuarios.find(usuarios=> usuarios.id===id))
    {
     console.log(' Usuario Existe');
     resolve(obtenertelefonos(id));
    }
    else{
        reject('Usuario NO existe')
    }
})
};

const obtenertelefonos= id =>{
return new Promise((resolve, reject)=>
{
    if (telefonos.find(telefono => telefono.id===id))
    {
        resolve('Telfeono Existe');
    }
    else{
        reject('Telefono NO existe')
    }
})
};

obtenerusuario(2)
.then(res =>
{
    return res;
});
obtenerusuario(2).then (mensaje =>{
    console.log(mensaje);
});
obtenerusuario(2).catch(error => 
{ console.log(error)});
