const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  var config = {isStatic:true}
  playerBase = Bodies.rectangle(200,300,120,120,config)
  World.add(world,playerBase)
  //criar corpo do jogador
  playerArcher = Bodies.rectangle(220,180,50,160,)
  World.add(world,playerArcher)


}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  push()
  imageMode(CENTER)
  image(baseimage,playerBase.position.x,playerBase.position.y,120,120)
image(playerimage,playerArcher.position.x,playerArcher.position.y,70,180)
 pop()
 

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
