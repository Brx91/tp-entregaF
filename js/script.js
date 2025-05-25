
//Variable precio vidrio

const vidrio4Mm = 6700
const laminado = 32000

//

document.getElementById("valorVidrio").onclick = () => {
    document.getElementById("precioVidrio").innerHTML = `El precio del vidrio de 4mm es:  ${vidrio4Mm}<br> El precio del vidrio laminado 3+3 es: ${laminado}`
}

const precioAluminio = parseFloat(11240)


class Perfil {
    constructor (tipo, seccion, codigo, nombre, pesoMetro) {
        this.tipo = tipo,
        this.seccion = seccion,
        this.codigo = codigo,
        this.nombre = nombre,
        this.pesoMetro = pesoMetro
    }

    costoPerfil() {
    return this.pesoMetro * precioAluminio
    }
}

class Accesorios {
    constructor (tipo, nombre, precio, codigo) {
        this.tipo = tipo,
        this.nombre = nombre,
        this.precio = precio,
        this.codigo = codigo
    }
    
}

const corredizaAncho = [

new Perfil ("Corrediza", "ancho", 6200, "Umbral", 0.800),
new Perfil ("Corrediza", "ancho", 6201, "Zocalo", 0.545),
new Perfil ("Corrediza", "ancho", 6202, "Zocalo Alto", 1.2)

]

const corredizaAlto = [

new Perfil ("Corrediza", "alto", 6203, "Jamba", 0.958),
new Perfil ("Corrediza", "alto", 6204, "Central", 0.545),
new Perfil ("Corrediza", "alto", 6205, "Lateral", 0.600)
]

const accesoriosCorrediza = [ 
    new Accesorios ("Corrediza", "R42", 5000, "Rueda Doble"),
    new Accesorios ("Corrediza", "cierre lateral", 2450, "Cierre Lateral"),
    new Accesorios ("Corrediza", "felpon central", 500, "t93"),
    new Accesorios ("Corrediza", "goma union", 3500, "t92"),
    new Accesorios ("Corrediza", "tapa desague marco", 2500, "t91"),
    new Accesorios ("Corrediza", "antiruido central", 500, "t89"),
    new Accesorios ("Corrediza", "antiruido lateral", 500, "t90"),
    new Accesorios ("Corrediza", "tapa desague frontal", 250, "t130"),
    new Accesorios ("Corrediza", "tapa desague camara", 250, "t131")
]

const puertaAncho = [
    new Perfil ("Puerta", "ancho", 6214, "parante", 1.2),
    new Perfil ("Puerta", "ancho", 6216, "marco", 0.8),
    new Perfil ("Puerta", "ancho", 6217, "zocalo puerta", 0.536)
]

const puertaAlto = [
    new Perfil ("Puerta", "alto", 6215, "parante", 1.2),
    new Perfil ("Puerta", "alto", 6216, "marco", 0.8)
]

const accesoriosPuerta = [
    new Accesorios ("Puerta", "Escuadra marco", 850, "E69"),
    new Accesorios ("Puerta", "Escuadra hoja", 500, "E70"),
    new Accesorios ("Puerta", "Suplemento Escuadra hoja", 500, "E67"),
    new Accesorios ("Puerta", "Cerradura", 3500, "cerradura"),
    new Accesorios ("Puerta", "Picaporte", 2500, "H51")
 ]


const ventanaAbrirAncho = [
    new Perfil ("Ventana Abrir", "ancho", 6216, "marco", 0.8),
    new Perfil ("Ventana Abrir", "ancho", 6219, "hoja", 0.536)
]

const ventanaAbrirAlto = [
    new Perfil ("Ventana Abrir", "alto", 6216, "marco", 0.8),
    new Perfil ("Ventana Abrir", "alto", 6219, "hoja", 0.536)
]

const accesoriosVentanaAbrir = [
    new Accesorios ("Ventana Abrir", "Escuadra marco", 850, "E69"),
    new Accesorios ("Ventana Abrir", "Falleba", 3500, "H47")
]

const panioFijoAncho = [
    new Perfil ("Panio Fijo", "ancho", 6216, "marco", 0.8)
]

const panioFijoAlto = [
    new Perfil ("Panio Fijo", "alto", 6216, "marco", 0.8)
]

const accesoriosPanioFijo = [
    new Accesorios ("Panio Fijo", "Escuadra marco", 850, "E69")
]


document.getElementById("cotizacion").onclick = () => {
    const anchoPedido = parseFloat(document.getElementById('ancho').value)
    const altoPedido = parseFloat(document.getElementById('alto').value)

    // Calculos Corrediza
    const totalPerfilAnchoCorrediza = corredizaAncho.reduce((total, perfil) => total + perfil.costoPerfil(), 0) 
    const totalPerfilAltoCorrediza = corredizaAlto.reduce((total, perfil) => total + perfil.costoPerfil(), 0)
    const sumaAccesoriosCorrediza = accesoriosCorrediza.reduce((total, accesorio) => total + accesorio.precio, 0)
    const totalCostoCorrediza =  (anchoPedido * (totalPerfilAnchoCorrediza*2)) + (altoPedido * (totalPerfilAltoCorrediza*2)) + (sumaAccesoriosCorrediza*2)

    // Calculos Puerta
    const sumaAccesoriosPuerta = accesoriosPuerta.reduce((total, accesorio) => total + accesorio.precio, 0)
    const totalPerfileriaAnchoPuerta = puertaAncho.reduce((total, perfil) => total + perfil.costoPerfil(), 0) 
    const totalPerfileriaAltoPuerta = puertaAlto.reduce((total, perfil) => total + perfil.costoPerfil(), 0)
    const totalCostoPuerta = (anchoPedido * (totalPerfileriaAnchoPuerta*2)) + (altoPedido * (totalPerfileriaAltoPuerta*2)) + (sumaAccesoriosPuerta*2)

    //Calculos Ventana de Abrir
    const sumaAccesoriosVentanaAbrir = accesoriosVentanaAbrir.reduce((total, accesorio) => total + accesorio.precio, 0)
    const totalPerfileriaAnchoVentanaAbrir = ventanaAbrirAncho.reduce((total, perfil) => total + perfil.costoPerfil(), 0) 
    const totalPerfileriaAltoVentanaAbrir = ventanaAbrirAlto.reduce((total, perfil) => total + perfil.costoPerfil(), 0)
    const totalCostoVentanaAbrir = (anchoPedido * (totalPerfileriaAnchoVentanaAbrir*2)) + (altoPedido * (totalPerfileriaAltoVentanaAbrir*2)) + (sumaAccesoriosVentanaAbrir*2)

    //Calculos Paño Fijo
    const sumaAccesoriosPanioFijo = accesoriosPanioFijo.reduce((total, accesorio) => total + accesorio.precio, 0)
    const totalPerfileriaAnchoPanioFijo = panioFijoAncho.reduce((total, perfil) => total + perfil.costoPerfil(), 0)
    const totalPerfileriaAltoPanioFijo = panioFijoAlto.reduce((total, perfil) => total + perfil.costoPerfil(), 0)
    const totalCostoPanioFijo = (anchoPedido * (totalPerfileriaAnchoPanioFijo*2)) + (altoPedido * (totalPerfileriaAltoPanioFijo*2)) + (sumaAccesoriosPanioFijo*2)

    // Calculos Vidrio
    const resultadoVidrio = (anchoPedido * altoPedido) * vidrio4Mm
    const resultadoVidrioLaminado = (anchoPedido * altoPedido) * laminado
    //Resultados
    const resultadoTotalCorrediza = totalCostoCorrediza + resultadoVidrio
    const resultadoTotalCorredizaLaminado = totalCostoCorrediza + (resultadoVidrioLaminado)
    const resultadoTotalPuerta = totalCostoPuerta + resultadoVidrio
    const resultadoTotalPuertaLaminado = totalCostoPuerta + (resultadoVidrioLaminado)
    const resultadoTotalVentanaAbrir = totalCostoVentanaAbrir + resultadoVidrio
    const resultadoTotalVentanaAbrirLaminado = totalCostoVentanaAbrir + (resultadoVidrioLaminado)
    const resultadoTotalPanioFijo = totalCostoPanioFijo + resultadoVidrio
    const resultadoTotalPanioFijoLaminado = totalCostoPanioFijo + (resultadoVidrioLaminado)
   


let resultadoFinal = ""


 switch (document.getElementById("tipoAbertura").value) {
    case "corrediza":
        resultadoFinal = resultadoTotalCorrediza
        if (document.getElementById("tipoVidrio").value == "laminado3_3") {
            resultadoFinal = resultadoTotalCorredizaLaminado
        }
        break
    case "puerta":
        resultadoFinal = resultadoTotalPuerta
        if (document.getElementById("tipoVidrio").value == "laminado3_3") {
            resultadoFinal = resultadoTotalPuertaLaminado
        }
        break
    case "ventanaAbrir":
        resultadoFinal = resultadoTotalVentanaAbrir
        if (document.getElementById("tipoVidrio").value == "laminado3_3") {
            resultadoFinal = resultadoTotalVentanaAbrirLaminado
        }
        break
    case "paniofijo":
        resultadoFinal = resultadoTotalPanioFijo
        if (document.getElementById("tipoVidrio").value == "laminado3_3") {
            resultadoFinal = resultadoTotalPanioFijoLaminado
        }
        break  
 }



document.getElementById("resultado").innerHTML = 
`Total: $${Math.round(resultadoFinal)}`

}

let listaPedido = []

document.getElementById("agregar").onclick = () => {
    const ancho = document.getElementById("ancho").value
    const alto = document.getElementById("alto").value
    const tipo = document.getElementById("tipoAbertura").value
    const vidrio = document.getElementById("tipoVidrio").value
    const total = document.getElementById("resultado").innerText

    const nuevoPedido = {
        tipo,
        vidrio,
        ancho,
        alto,
        total,
        cantidad: 1
    }


   
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Desea agregarlo como pedido?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Si, Agregarlo",
  cancelButtonText: "No",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
     listaPedido.push(nuevoPedido)
    swalWithBootstrapButtons.fire({
      title: "Producto agregado",
      text: "Se ha agregado el producto al pedido",
      icon: "success"
    });
  } else if (
   
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Se cancelo",
      text: "No se agrego el producto al pedido",
      icon: "error"
    });
  }
});
}

document.getElementById("verPedido").onclick = () => {
    if (listaPedido.length === 0) {
        Swal.fire("No hay pedidos todavía.");
        return;
    }

    let contenidoHTML = listaPedido.map((pedido, index) => `
        <strong>Pedido #${index + 1}</strong><br>
        Abertura: ${pedido.tipo}<br>
        Vidrio: ${pedido.vidrio}<br>
        Medidas: ${pedido.ancho} x ${pedido.alto}<br>
        ${pedido.total}<br><hr>
        <div style="display: flex; align-items: center; gap: 10px;">
                <button id="plusButton" onClick="(${pedido.cantidad + 1})">+</button>
                <span>${pedido.cantidad}</span>
                <button id="minusButton" onClick="(${pedido.cantidad - 1})">-</button>
                <button onclick="()">Borrar</button>
            </div>
        </div>
        <hr>
    `).join("");

     Swal.fire({
        title: "Lista de pedidos",
        html: contenidoHTML,
        showConfirmButton: false,
        width: 600,
     })
       
    }


