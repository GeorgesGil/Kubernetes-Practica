const busquedaPorSaltos = (arreglo, objetivo) => {
    let longitud = arreglo.length;
    let paso = Math.floor(Math.sqrt(longitud));
    let inicioBloque = 0, pasoActual = paso;
  
    while (arreglo[Math.min(pasoActual, longitud) - 1] < objetivo) {
        inicioBloque = pasoActual;
        pasoActual += paso;
        if (inicioBloque >= longitud) {
            return -1;
        }
    }
  
    while (arreglo[inicioBloque] < objetivo) {
        inicioBloque++;
        if (inicioBloque == Math.min(pasoActual, longitud)) {
            return -1;
        }
    }
  
    if (arreglo[inicioBloque] == objetivo) {
        return inicioBloque;
    } else {
        return -1;
    }
  }
  
  const busquedaSecuencial = (arreglo, elemento) => {
    for (let indice = 0; indice < arreglo.length; indice++) {
        if (arreglo[indice] == elemento) {
            return indice;
        }
    }
    return -1;
  }
  
  module.exports = {
    busquedaSecuencial: busquedaSecuencial,
    busquedaPorSaltos: busquedaPorSaltos
  }