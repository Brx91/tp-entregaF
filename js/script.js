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


document.getElementById("cotizacion").onclick = () => {
    const anchoPedido = parseFloat(document.getElementById('ancho').value);
    const altoPedido = parseFloat(document.getElementById('alto').value);
    const totalPerfilAnchoCorrediza = corredizaAncho.reduce((total, perfil) => total + perfil.costoPerfil(), 0);
    const totalPerfilAltoCorrediza = corredizaAlto.reduce((total, perfil) => total + perfil.costoPerfil(), 0);

    const totalCosto =  (anchoPedido * totalPerfilAnchoCorrediza) + (altoPedido * totalPerfilAltoCorrediza);
    

    const resultadoVidrio = (anchoPedido * altoPedido) * vidrio4Mm;
    const resultadoTotal = totalCosto + resultadoVidrio;
 

document.getElementById("resultado").innerHTML = 
`Total: $${Math.round(resultadoTotal)}`
}




/*
// Perfiles de Puerta - Alto

new Perfil("Puerta", "alto", 6214, "parante Puerta", 1.750),

// Perfiles de Ventana - Alto
new Perfil("Ventana", "alto", 7100, "Vertical Ventana", 0.875)
]


const corredizaAlto = [umbral, zocalo, zocaloAlto]


class CorredizaAncho {
    constructor (codigo, nombre, pesoMetro) {
        this.codigo = codigo,
        this.nombre = nombre,
        this.pesoMetro = pesoMetro   
}
    costoPerfil() {
    return this.pesoMetro * precioAluminio
    }

}


const umbral = new CorredizaAncho (6200, "Umbral", parseFloat(1))
const zocalo = new CorredizaAncho (6201, "Zocalo", parseFloat(1))
const zocaloAlto = new CorredizaAncho (6202, "Zocalo Alto", parseFloat(1))


const perfiles = [umbral, zocalo, zocaloAlto];
*/