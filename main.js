let api ="https://randomuser.me/api/"


fetch(api) //URL
.then(response => response.json()) //Formato sepador por funcion de flecha =>
.then(data =>{

    alert(JSON.stringify(data)) //la data es la promesa que les cumplio el API

} )