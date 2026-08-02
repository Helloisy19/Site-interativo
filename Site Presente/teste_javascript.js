function contD() {

    const agora = new Date();
    const inicio = new Date('2025 12 02');

    const tempo = agora.getTime() - inicio.getTime();

    const dias = Math.floor(tempo / (1000 * 60 * 60 * 24));

    console.log(dias);
    
}

function contH() {

    const agora = new Date();
    const inicio = new Date('2025 12 02');

    const tempo = agora.getTime() - inicio.getTime();

    const horas = Math.floor(tempo / (1000 * 60 * 60));

    console.log(horas);
    
}
function contM() {

    const agora = new Date();
    const inicio = new Date('2025 12 02');

    const tempo = agora.getTime() - inicio.getTime();

    const minutos = Math.floor(tempo / (1000 * 60));

    console.log(minutos);
    
}
function contS() {

    const agora = new Date();
    const inicio = new Date('2025 12 02');

    const tempo = agora.getTime() - inicio.getTime();

    const segundos = Math.floor(tempo / 1000 );

    console.log(segundos);
    
}


setInterval



