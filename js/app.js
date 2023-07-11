console.log("Practica del To Do List")
const formulario = document.getElementById('formulario');
const listaTarea = document.getElementById('Lista-tareas')
const input = document.getElementById('input')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let tareas ={
10759938940:{
    ID:10759938940,
    Text:'Tarea #1',
    estado: false
},
10759938941:{
    ID:10759938941,
    Text:'Tarea #2',
    estado: false
}
}

//console.log(Date.now());

formulario.addEventListener('submit', e=> {
    e.preventDefault()
   // console.log(input.value);

    SetTarea(e)
})


const SetTarea = e =>{
    console.log('Diste Click')
    if(input.value.trim() === ''){
        console.log('Vacio')
        return
    }

    const tarea= {
    ID: Date.now(),
    Text: input.value,
    estado: false
    }

    tareas[tarea.ID] = {...tarea}
   // console.log(tareas)
    formulario.reset();
    input.focus();
    pintarTareas();
}

const pintarTareas = () =>{
    Object.values(tareas).forEach(tarea => {
        const cloneT = template.cloneNode(true)
        cloneT.querySelector('p').textContent= tarea.Text
        fragment.appendChild(cloneT)
    })
    listaTarea.appendChild(fragment)

}
 
