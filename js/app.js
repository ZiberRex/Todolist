console.log("Practica del To Do List")



const formulario = document.getElementById('formulario');
const listaTarea = document.getElementById('Lista-tareas')
const template = document.getElementById('template')
const fragment = document.createDocumentFragment()
let tareas ={
10759938940:{
    ID:10759938940,
    Text:'Tarea#1',
    estado: false
},
10759938941:{
    ID:10759938941,
    Text:'Tarea#2',
    estado: false
}
}

//console.log(Date.now());

formulario.addEventListener('submit', e=> {
    e.preventDefault()
    console.log('procesando formulario...')
})

 
