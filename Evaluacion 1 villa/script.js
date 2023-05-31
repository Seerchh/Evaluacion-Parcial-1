// Objeto ListaTareas
const ListaTareas = {
    tareas: [], 
  
    // Función para agregar una tarea al arreglo
    agregarTarea: function(tarea) {
      this.tareas.push(tarea);
    },
  
    // Función para mostrar la lista de tareas en la vista HTML
    mostrarLista: function() {
      const listaTareasElement = document.getElementById('listatareas'); 
      listaTareasElement.innerHTML = ''; 
  
      // Recorrer el arreglo de tareas y crear un elemento <li> para cada una
      this.tareas.forEach(function(tarea) {
        const tareaElement = document.createElement('li');
        tareaElement.textContent = tarea; 
        listaTareasElement.appendChild(tareaElement); 
      });
    }
  };
  
  // Vincular el evento "submit" del formulario
  document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const tareaInput = document.getElementById('tarea'); 
    const tarea = tareaInput.value; 
  
    ListaTareas.agregarTarea(tarea); // Agregar la tarea al arreglo de tareas
    ListaTareas.mostrarLista(); // Mostrar la lista actualizada en el HTML
  
    tareaInput.value = ''; // Limpiar el campo de entrada de texto
  });
  
  