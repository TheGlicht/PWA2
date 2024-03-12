document.getElementById('loginButton').addEventListener('click', async()=>{
    try{
        const response = await fetchData();
        const data = await response.json();
        document.getElementById('responseArea').innerText = JSON.stringify(data);        
    }
    catch(error){
        console.error('Error:', error);
        document.getElementById('responseArea').innerText = 'Ha ocurrido un error en el sistema :,v';
    }
});

async function fetchData(){
    // const url = ;//;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('Ocurrio un error al obtener los dato' + response.statusText);
    }
    return response;
}