

function agregarEdad() {

    let edad = document.getElementById("edad").value;

   
    let tabla = document.getElementById("tablaIzquierda");

    tabla.innerHTML += `

        <tr>

            <td>${edad}</td>

            <td>
                <button class="btn-eliminar" onclick="eliminarFila(this)">
                    Eliminar
                </button>
            </td>

            <td>
                <button class="btn-mover" onclick="moverDerecha(this)">
                    ➜
                </button>
            </td>

        </tr>
    `;

    document.getElementById("edad").value = "";
}


function moverIzquierda(boton) {

    let fila = boton.parentNode.parentNode;

    let edad = fila.children[1].textContent;

    let tablaIzquierda =
        document.getElementById("tablaIzquierda");

    tablaIzquierda.innerHTML += `

        <tr>

            <td>${edad}</td>

            <td>
                <button class="btn-eliminar"
                        onclick="eliminarFila(this)">
                    Eliminar
                </button>
            </td>

            <td>
                <button class="btn-mover"
                        onclick="moverDerecha(this)">
                    ➜
                </button>
            </td>

        </tr>
    `;

    fila.remove();
}


function moverDerecha(boton) {

    let fila = boton.parentNode.parentNode;

    let edad = fila.children[0].textContent;

    let tablaDerecha =
        document.getElementById("tablaDerecha");

    tablaDerecha.innerHTML += `

        <tr>

            <td>
                <button class="btn-mover" onclick="moverIzquierda(this)">
                    ⬅
                </button>
            </td>

            <td>${edad}</td>

            <td>
                <button class="btn-eliminar"
                        onclick="eliminarFila(this)">
                    Eliminar
                </button>
            </td>

        </tr>
    `;

    fila.remove();
}

function eliminarFila(boton) {

    let fila = boton.parentNode.parentNode;

    fila.remove();
}