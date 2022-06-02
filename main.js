

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

