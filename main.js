

//*******************************LABORATORIO FETCH*************************************************
// 2.	EL evento debe consultar el api : "https://randomuser.me/api/"



function Verinfo () {
    let api ="https://randomuser.me/api/"


    fetch(api) //URL
    .then(response => response.json()) //Formato sepador por funcion de flecha =>
    .then(data =>{
    
        alert(JSON.stringify(data)) //la data es la promesa que les cumplio el API
    
    })
}



function Nombre() {
    let url="https://randomuser.me/api/"
    
    let contenido = document.getElementById("rectangulo")
    let nombre;
    let miinformacion

    fetch(url) //URL
    .then(response => response.json()) //Formato sepador por funcion de flecha =>
    .then(data =>{
        nombre = data.results[0].name.first
        
    miinformacion =`
        <p> Nombre: "${nombre}"</p> 
    `
    contenido.innerHTML=miinformacion //Meter la info en el HTML
    console.log((JSON.stringify(data)))//la data es la promesa que les cumplio el API
})
}






function Foto() {
    let url="https://randomuser.me/api/"
    let contenido = document.getElementById("circulo")
    let imagen;
    let miinformacion

    fetch(url) //URL
    .then(response => response.json()) //Formato sepador por funcion de flecha =>
    .then(data =>{
        imagen = data.results[0].picture.large
        
    miinformacion =`
        <img src="${imagen}" alt="" class="img-fluid rounded-circle">
    `
    contenido.innerHTML=miinformacion //Meter la info en el HTML
})

}




function Tabla () {
    let url="https://jsonplaceholder.typicode.com/todos/"
    let contenidotabla=document.getElementById("contenidotabla")
    let misdatos=""
    fetch (url)
    .then (response=>response.json())
    .then (data=>{
    
    console.log (data)  // para ver en consola las columnas del Api, para maquetar la tabla 

        data.forEach(element => { //aca pintamos el contenido de la tabla dinamicamente
            misdatos += `
            <tr> 
                <td>${element.userId}</td>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.completed}</td>  
            </tr> `    
        });
    
        contenidotabla.innerHTML=misdatos //Se le asigna a la variable contenidotabla la info obtenida en el foreach
    })
}

