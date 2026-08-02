/*SEGUNDOS*/
function contador(){
    
    const agora = new Date();
    const inicio = new Date('2025 04 24');
    const tempo = agora.getTime() - inicio.getTime();

    const segundo = Math.floor(tempo / 1000);
    const minuto = Math.floor(tempo / (1000 * 60));
    const hora = Math.floor(tempo / (1000 * 60 * 60));
    const dia = Math.floor(tempo / (1000 * 60 * 60 * 24));
    const semana = Math.floor(tempo / (1000 * 60 * 60 * 24 * 7));

    const ano = agora.getFullYear() - inicio.getFullYear();

    const mes = agora.getMonth() - inicio.getMonth();
    

    document.getElementById('segundos').innerHTML = segundo.toLocaleString('pt-BR');
    document.getElementById('minutos').innerHTML = minuto.toLocaleString('pt-BR');
    document.getElementById('horas').innerHTML = hora.toLocaleString('pt-BR');
    document.getElementById('dias').innerHTML = dia;
    document.getElementById('semanas').innerHTML = semana;
    document.getElementById('meses').innerHTML = mes;
    document.getElementById('anos').innerHTML = ano;

    


}

setInterval(contador, 1000);

/*GALERIA => AUMENTAR A FOTO*/
const foto = 
document.querySelectorAll(".fotos > div");
foto.forEach(foto => {
    foto.addEventListener("mouseenter", 
        () => {
            foto.style.zIndex = "9999";
            foto.style.setProperty("--opacidade", "0")
        });
    foto.addEventListener("mouseleave", 
        () => {
            foto.style.zIndex = "10";
            foto.style.setProperty("--opacidade", "1")
        })    
})

/*APERTAR NO SELO E ABRIR A CARATA*/

/* Vá no documento do html e procure o id específico */
const abrir = document.getElementById("selo");
/* Adicione um evento. Assim que clicar no selo faz a função abrir a outra página q esta a carta */
abrir.addEventListener('click', function() {
    /* Local a ser direcionado, página */
    window.location.href = 'file:///C:/Users/Usuario/Documents/Estudos/html-css/Site%20Presente/carta_!.html';
})