var gameState = 0, playerCount;
var database;
var game, form;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

}

