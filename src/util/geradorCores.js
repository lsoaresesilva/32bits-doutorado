export default function geradorCores(usuarioCorAleatoria) {
    let corAleatoria = "";
    if (usuarioCorAleatoria === 0) {
        corAleatoria = "#66ccff";
    } else if (usuarioCorAleatoria === 1) {
        corAleatoria = "#99cc00";
    } else if (usuarioCorAleatoria === 2) {
        corAleatoria = "#ffccdd";
    } else {
        corAleatoria = "#ccccff";
    }

    return corAleatoria;
}

