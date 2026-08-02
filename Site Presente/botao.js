const button = document.querySelector("#nao");
function nvposiçao() {
    const larguraTela = window.innerWidth
    const alturaTela = window.innerHeight
    
    const largbot = button.offsetWidth;
    const altbot = button.offsetHeight;

    let x = Math.round(Math.random() * (larguraTela - largbot)); 
    let y = Math.round(Math.random() * (alturaTela - altbot));

    if (x <= 0) x = 0;
    if (y <= 0) y = 0;
    
    return{x,y};
     
}
button.addEventListener('mouseenter', e =>{
    const {x,y} = nvposiçao()
    button.style.left = x + "px";
    button.style.top = y + "px";
})
const botaoSIM = document.querySelector("#sim");
function criarConfete(){
    var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, colors:['#6d2f2d', '#900c08', '#510300']};

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);

  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);
}
botaoSIM.addEventListener('click', criarConfete)

const b = document.getElementById("sim");
b.addEventListener('click', function(){
  setTimeout(function(){
    window.location.href = 'file:///C:/Users/Usuario/Documents/Estudos/html-css/Site%20Presente/prox_pag.html';
  }, 2000);
});