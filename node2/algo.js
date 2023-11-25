function busquedaBinaria(arr, busqueda) {
    let izquierda = 0;
    let derecha = arr.length - 1;
  
    while (izquierda <= derecha) {
      const medio = Math.floor((izquierda + derecha) / 2);
  
      if (arr[medio] === busqueda) return medio;
  
      if (arr[medio] < busqueda) {
        izquierda = medio + 1;
      } else {
        derecha = medio - 1;
      }
    }
  
    return -1;
  }
  
  const burbuja = (arr) => {
    const l = arr.length;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  };
  
  module.exports = {
    burbuja: burbuja,
    busquedaBinaria: busquedaBinaria
  }