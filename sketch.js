var garden,rabbit;
var gardenImg,rabbitImg;
var folha,folhaIMG
var maçã,maçãIMG
var fvermelha,fvermelhaIMG

function preload(){
maçãIMG = loadImage("apple.png")
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  maçãIMG = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  folhaIMG = loadImage("orangeLeaf.png")
  fvermelhaIMG = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);


//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);
 
  drawSprites();
  
  var select_sprites = Math.round(random(1,3))

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
     ffolha();
    } else if (select_sprites == 2){
      fmaçã();
    } else {
      ffvermelha();
    }
  }
 
  
}

function ffolha(){
  folha=createSprite(random(50,350),40,10,10)
  folha.addImage("caindo",folhaIMG)
  folha.scale = 0.09
  folha.velocityY = 3
  folha.lifetime = 150


}

function fmaçã(){
  maçã = createSprite(random(50,350),40,10,10)
  maçã.addImage("caindo2",maçãIMG)
  maçã.scale = 0.07
  maçã.velocityY = 3
  maçã.lifetime = 150
}


function ffvermelha(){
fvermelha = createSprite(random(50,350),40,10)
fvermelha.addImage("caindo3",fvermelhaIMG)
fvermelha.scale = 0.06
fvermelha.velocityY = 3
fvermelha.lifetime = 150

}
