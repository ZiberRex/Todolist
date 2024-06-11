console.log("Practica del To Do List");

const formulario = document.getElementById('formulario');
const listaTarea = document.getElementById('listatareas');
const input = document.getElementById('input');
const template = document.getElementById('template').content;
const fragment = document.createDocumentFragment();

const tareas = {
    10759938940: {
        ID: 10759938940,
        Text: 'Tarea #1',
        estado: false
    },
    10759938941: {
        ID: 10759938941,
        Text: 'Tarea #2',
        estado: false
    }
};

document.addEventListener('DOMContentLoaded', () => {
    pintarTareas();
});

listaTarea.addEventListener('click', e => {
    btnAccion(e);
});

formulario.addEventListener('submit', e => {
    e.preventDefault();
    SetTarea(e);
    pintarTareas();
});

const SetTarea = e => {
    if (input.value.trim() === '') {
        console.log('Vacio');
        return;
    }

    const tarea = {
        ID: Date.now(),
        Text: input.value,
        estado: false
    };

    tareas[tarea.ID] = tarea;
    formulario.reset();
    input.focus();
};

const pintarTareas = () => {
    listaTarea.innerHTML = '';
    Object.values(tareas).forEach(tarea => {
        const cloneT = template.cloneNode(true);
        cloneT.querySelector('p').textContent = tarea.Text;

        if (tarea.estado) {
            cloneT.querySelector('.alert').classList.replace('alert-warning', 'alert-success');
            cloneT.querySelector('.fa-circle-check').classList.replace('text-success', 'text-muted');
        }

        cloneT.querySelector('.fa-circle-check').dataset.id = tarea.ID;
        cloneT.querySelector('.fa-circle-minus').dataset.id = tarea.ID;

        fragment.appendChild(cloneT);
    });
    listaTarea.appendChild(fragment);
};

const btnAccion = e => {
    if (e.target.classList.contains('fa-circle-check')) {
        tareas[e.target.dataset.id].estado = !tareas[e.target.dataset.id].estado;
        pintarTareas();
    }

    if (e.target.classList.contains('fa-circle-minus')) {
        delete tareas[e.target.dataset.id];
        pintarTareas();
    }

    e.stopPropagation();
};