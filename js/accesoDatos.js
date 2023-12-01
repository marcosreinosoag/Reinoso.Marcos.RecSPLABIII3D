const url = "http://localhost:3000/monstruos";
const $loader = document.getElementById("spinner");


export const getMonstruos = async ()=>{
    try {
        let res = await fetch(url);
        if(!res.ok) throw Error(`Error: ${res.status}. ${res.statusText}`);

        return await res.json();

    } catch (err) {
        alert(err.message);
    }
}

export const createMonstruo = (monstruo)=>{

    $loader.classList.remove("ocultar");

    const xhr = new XMLHttpRequest(); 

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState == 4){ // respuesta completa del servidor
            if(xhr.status >= 200 && xhr.status < 300){ 
                const data = JSON.parse(xhr.responseText); 
            }
            else{
                alert(`Error: ${xhr.status}. ${xhr.statusText}`);
            }
            $loader.classList.add("ocultar");
        }
    })

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.send(JSON.stringify(monstruo));
}



export const deleteMonstruo = (id)=>{ 
    $loader.classList.remove("ocultar");

    const xhr = new XMLHttpRequest(); 

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){ 
                const data = JSON.parse(xhr.responseText);
            }
            else{
                alert(`Error: ${xhr.status}. ${xhr.statusText}`);
            }
            $loader.classList.add("ocultar");
        }
    })
   
    xhr.open("DELETE", url + "/" + id); 
    xhr.send();
}



export const updateMonstruo = (id, monstruo)=>{
    $loader.classList.remove("ocultar");

    const xhr = new XMLHttpRequest(); 

    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){ 
                const data = JSON.parse(xhr.responseText);
            }
            else{
                alert(`Error: ${xhr.status}. ${xhr.statusText}`);
            }
            $loader.classList.add("ocultar");
        }
    })

    xhr.open("PUT", url + "/" + id);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8"); 
    xhr.send(JSON.stringify(monstruo));
}