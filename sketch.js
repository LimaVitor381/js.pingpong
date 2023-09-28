// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/ 2;


// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

// variáveis da raquete
let xRaquete  = 5;
let yRaquete  = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente ;
let meusPontos = 0;
let pontosOponente = 0;

function draw() {
  background(0);
  mostraBolinha();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  movimentaBolinha();
  verificaColisaoBorda();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcaPonto();
  }
  
function verificaColisaoBorda(){
  if (xBolinha + raio  > width || xBolinha - raio < 0) {
 velocidadeXBolinha *= - 1;
  
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
  velocidadeYBolinha *= - 1;
    
  }
  
}



function mostraBolinha() {
  circle(xBolinha,yBolinha,diametro)
  
}

function movimentaBolinha(){
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha; 
}

function mostraRaquete(){
  rect(xRaquete,yRaquete,raqueteLargura,raqueteAltura)
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
 }
     } 
  
function verificaColisaoRaquete(){
if(xBolinha-raio < xRaquete + raqueteLargura 
  && yBolinha - raio < yRaquete + raqueteAltura)
 {
  velocidadeXBolinha *= - 1;
 }
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x,y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);
  
  if (colidiu) {
    
    velocidadeXBolinha *= - 1;
    
  }
}

function mostraRaquete(x,y){
  rect(x,y,raqueteLargura,raqueteAltura);
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente -raqueteLargura/2 - 90;
  yRaqueteOponente += velocidadeYOponente;

}

function incluirPlacar()
{
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill("white");
  
  //placar meusPontos
  fill(color(255,171,0))
  rect(135,10,35,20);
  text(meusPontos,150,26);
  
  //placar pontosOponentes
  fill(color(255,171,0))
  rect(430,10,35,20);
  text(pontosOponente,450,26)
}

  function marcaPonto()
  {
    if (xBolinha >590){
      meusPontos += 1;
    }
    
    if (xBolinha <10){
      pontosOponente += 1;
    
  }
    
}
