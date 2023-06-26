// Obtener el contenedor de categorías
const categoriasContainer = document.querySelector('.grid-categoria');
//Define la tarjeta "Ver todos los productos"
const tarjetaVerTodo = document.querySelector('#ver-todo');

// Obtener los datos del JSON utilizando fetch
fetch('categorias.json')
    .then(response => response.json())
    .then(categorias => {
        // Iterar sobre las categorías y generar las tarjetas
        categorias.forEach(categoria => {
            // Crear la tarjeta
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta-categoria'); // Agrega una clase CSS a la tarjeta si lo deseas
            tarjeta.style.backgroundImage = `url(${categoria.imagen})`
                // Crear el botón con el nombre de la categoría
            const boton = document.createElement('button');
            boton.textContent = categoria.nombre;
            tarjeta.appendChild(boton);

            // Agregar la tarjeta al contenedor de categorías
            categoriasContainer.insertBefore(tarjeta, tarjetaVerTodo);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos del JSON:', error);
    });