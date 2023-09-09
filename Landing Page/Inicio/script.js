const container = document.querySelector(".carrousel-container");
const punto     = document.querySelectorAll(".punto");


// Cuando CLICK en el punto 
        // Saber la posicion de ese punto
        // Aplicar una transform translateX al container
        //QUITAR la clase activo de TODOS los puntos
        //AÑADIR la clase activo al punto seleccionado

// Recorrer TODOS los puntos

punto.forEach( (cadaPunto , i ) => {

    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener("click", () => {

        // Guardar la posicion de ese PUNTO
        let posicion  = i;
        // Calculando el espacio que debe DESPLAZARSE el CONTAINER
        let operacion = posicion * -100;

        // MOVEMOS el grande
        container.style.transition = "all 1s";
        container.style.transform = `translateX(${ operacion }%`;

        // Recorremos TODOS los puntos

        punto.forEach(( cadaPunto , i) => {

            // Quitamos la clase activo a los puntos
            punto[i].classList.remove("activo");
        });
        //Añadir la clase activo al punto seleccionado
        punto[i].classList.add("activo")
    });
});  
