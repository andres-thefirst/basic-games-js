"use strict";
var Game = {
  canvas: undefined,
  canvasContext: undefined,
  rectanglePosition: 0
};

Game.start = () =>  { 
  Game.canvas = document.getElementById("myCanvas"); 
  Game.canvasContext = Game.canvas.getContext("2d"); 
  Game.mainLoop();
} ;

document.addEventListener('DOMContentLoaded', Game.start); 

Game.update =  () => {
  Game.rectanglePosition = Game.canvas.height - new Date().getTime() % Game.canvas.height;
 };

Game.draw = () => { 
  Game.canvasContext.fillStyle = "blue"; 
  Game.canvasContext.fillRect(100, Game.rectanglePosition, 50, 50); 
} ;

Game.clearCanvas = function () {
  Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
}

Game.mainLoop = () => { 
  Game.clearCanvas();
  Game.update(); 
  Game.draw();
  window.setTimeout(Game.mainLoop, 1000 / 60);
};
