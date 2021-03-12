"use strict";
var Game = {
  canvas: undefined,
  canvasContext: undefined,
  balloonSprinte: undefined,
  balloonPosition: {x: 0, y: 50}
};

Game.start = () =>  { 
  Game.canvas = document.getElementById("myCanvas"); 
  Game.canvasContext = Game.canvas.getContext("2d"); 
  Game.balloonSprinte = new Image();
  Game.balloonSprinte.src = "sprites/spr_balloon.png";
  window.setTimeout(Game.mainLoop, 500);
} ;

document.addEventListener('DOMContentLoaded', Game.start); 

Game.update =  () => {
  Game.balloonPosition.x = new Date().getTime() % Game.canvas.width;
 };

Game.draw = () => { 
  Game.drawImage(Game.balloonSprinte, Game.balloonPosition);
} ;

Game.clearCanvas = function () {
  Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
}

Game.drawImage = function (sprite, postion) {
  Game.canvasContext.save();
  Game.canvasContext.translate(postion.x, postion.y);
  Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height, 0, 0, sprite.width, sprite.height);
  Game.canvasContext.restore();
};

Game.mainLoop = () => { 
  Game.clearCanvas();
  Game.update(); 
  Game.draw();
  window.setTimeout(Game.mainLoop, 1000 / 60);
};
