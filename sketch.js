//A Lua e alguns planetas (Mercúrio, Vênus, Terra e Marte) não estão em proporção devido ao tamanho do Canvas. As trajetórias foram aproximadas para trajetórias circulares.

var estrelas = [];
//planetas dispostos do menos distante do sol ao mais distante
var sol, mercurio, venus, terra, marte, jupiter, saturno, urano, netuno, lua;
var raioSol = 28; //raio do sol
var vTrans = 0.3; //velocidade de translação da Terra. As velocidades de translação dos outros planetas estão em função dessa variável.

function setup() {
  createCanvas(610, 610);
    for(var i = 0; i < 60; i++) {
      let x = random(-width/2, width/2);
      let y = random(-height/2, height/2);
      estrelas[i] = createVector(x, y);
  }
  angleMode(DEGREES);
  sol = new Planeta(0, 0, raioSol, 0);
  mercurio = new Planeta(4 + raioSol, 0, 1);
  venus = new Planeta(7.5 + raioSol, 0, 2);
  terra = new Planeta(11.4 + raioSol, 0, 2);
  marte = new Planeta(16.2 + raioSol, 0, 1);
  jupiter = new Planeta(52, 0, 0.1*raioSol);
  saturno = new Planeta(95.7, 0, 0.0837*raioSol);
  urano = new Planeta(191.6, 0, 0.0364*raioSol);
  netuno = new Planeta(300, 0, 0.0354*raioSol);
  lua = new Planeta(3.5, 0, 1);
  createP("Velocidade da animação:");
  slider = createSlider(0, 500, 30);
}

function draw() {
  vTrans = slider.value()*0.01;
  translate(width/2, height/2);
  background(2);
  sol.show(255, 225, 0);
    for(var i = 0; i < estrelas.length; i++) {
    fill(255, 65);
    ellipse(estrelas[i].x, estrelas[i].y, 1);
  }
  
  push();
  scale(1, 1);
  mercurio.rot(vTrans/0.241);
  mercurio.show(25, 255, 0);
  pop();
  
  push();
  venus.rot(vTrans/0.615);
  venus.show(205, 120, 150);
  pop();
  
  push();
  terra.rot(vTrans);
  terra.show(0, 100, 255);
  translate(terra.x, terra.y);
  lua.rot(vTrans*12);
  lua.show(255, 255, 255); //a lua precisou ser inserida aqui para girar em torno da Terra
  pop();
  
  push();
  marte.rot(vTrans/1.88);
  marte.show(255, 120, 0);
  pop();
  
  push();
  jupiter.rot(vTrans/11.9);
  jupiter.show(255, 155, 0);
  pop();
  
  push();
  saturno.rot(vTrans/29.5);
  saturno.show(250, 20, 70);
  pop();
  
  push();
  urano.rot(vTrans/84);
  urano.show(100, 250, 200);
  pop();
  
  push();
  netuno.rot(vTrans/165);
  netuno.show(255, 0, 255);
  pop();
  
  push();
  
  pop();
  
  //texto
  push();
  translate(-width/2, -height/2);
  fill(255, 90);
  rect(10, 10, 130, 120);
  textSize(12);
  fill(0, 0, 255, 150);
  text('Anos na Terra: ' + terra.cont(), 15, 30);
  fill(25, 255, 0, 150);
  text('Anos em Mercúrio: ' + mercurio.cont(), 15, 41);
  fill(205, 105, 150, 150);
  text('Anos em Vênus: ' + venus.cont(), 15, 52);
  fill(255, 120, 0, 150);
  text('Anos em Marte: ' + marte.cont(), 15, 63);
  fill(255, 155, 0, 150);
  text('Anos em Júpiter: ' + jupiter.cont(), 15, 74);
  fill(250, 20, 70, 150);
  text('Anos em Saturno: ' + saturno.cont(), 15, 85);
  fill(100, 250, 200, 150);
  text('Anos em Urano: ' + urano.cont(), 15, 96);
  fill(255, 0, 255, 150);
  text('Anos em Neturo: ' + netuno.cont(), 15, 107);
  fill(255, 150);
  text('Anos na Lua: ' + lua.cont(), 15, 118);
  pop();
}

class Planeta {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.v = 0;
    this.angle = 0;
  }
  
  show(r, g, b) {
    noStroke();
    fill(r, g, b); //cor do planeta
    ellipse(this.x, this.y, 2*this.r);
  }
  
  //translação dos planetas
  rot(v) {
    this.v = v;
    rotate(this.angle);
    this.angle += this.v;
  }
  
  //contagem de anos em cada um dos planetas
  cont() {
    return floor(this.angle/360);
  }
}