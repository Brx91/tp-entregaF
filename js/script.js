//Variable precio vidrio

const vidrio4Mm = 6700;
// id del boton valorVidrio
// id del parrafo precioVidrio
document.getElementById("valorVidrio").onclick = () => {
    document.getElementById("precioVidrio").innerHTML = `El precio del vidrio es:  ${vidrio4Mm}`
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

const puertaAncho = [
    new Perfil ("Puerta", "ancho", 6214, "parante", 1.2),
    new Perfil ("Puerta", "ancho", 6216, "marco", 0.8),
    new Perfil ("Puerta", "ancho", 6217, "zocalo puerta", 0.536)
]

const puertaAlto = [
    new Perfil ("Puerta", "alto", 6215, "parante", 1.2),
    new Perfil ("Puerta", "alto", 6216, "marco", 0.8)
]

class Accesorios {
    constructor (tipo, nombre, precio, codigo) {
        this.tipo = tipo,
        this.nombre = nombre,
        this.precio = precio,
        this.codigo = codigo
    }
    
}
felpa = 2000

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

const accesoriosPuerta = [
    new Accesorios ("Puerta", "Escuadra marco", 850, "E69"),
    new Accesorios ("Puerta", "Escuadra hoja", 500, "E70"),
    new Accesorios ("Puerta", "Suplemento Escuadra hoja", 500, "E67"),
    new Accesorios ("Puerta", "Cerradura", 3500, "cerradura"),
    new Accesorios ("Puerta", "Picaporte", 2500, "H51")
 ]


document.getElementById("cotizacion").onclick = () => {
    const anchoPedido = parseFloat(document.getElementById('ancho').value)
    const altoPedido = parseFloat(document.getElementById('alto').value)
    const totalPerfilAnchoCorrediza = corredizaAncho.reduce((total, perfil) => total + perfil.costoPerfil(), 0) 
    const totalPerfilAltoCorrediza = corredizaAlto.reduce((total, perfil) => total + perfil.costoPerfil(), 0)
    const sumaAccesoriosCorrediza = accesoriosCorrediza.reduce((total, accesorio) => total + accesorio.precio, 0)
    const totalCostoCorrediza =  (anchoPedido * (totalPerfilAnchoCorrediza*2)) + (altoPedido * (totalPerfilAltoCorrediza*2)) + (sumaAccesoriosCorrediza*2)

    const sumaAccesoriosPuerta = accesoriosPuerta.reduce((total, accesorio) => total + accesorio.precio, 0)
    const totalPerfileriaAnchoPuerta = puertaAncho.reduce((total, perfil) => total + perfil.costoPerfil(), 0) 
    const totalPerfileriaAltoPuerta = puertaAlto.reduce((total, perfil) => total + perfil.costoPerfil(), 0)
    const totalCostoPuerta = (anchoPedido * (totalPerfileriaAnchoPuerta*2)) + (altoPedido * (totalPerfileriaAltoPuerta*2)) + (sumaAccesoriosPuerta)

    

    const resultadoVidrio = (anchoPedido * altoPedido) * vidrio4Mm
    const resultadoTotalCorrediza = totalCostoCorrediza + resultadoVidrio
 

document.getElementById("resultado").innerHTML = 
`Total: $${Math.round(resultadoTotalCorrediza)} <br>
Puerta: $${Math.round(totalCostoPuerta)} <br>
`
}




