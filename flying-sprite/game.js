"use strict";
var Game = {
  canvas: undefined,
  canvasContext: undefined,
  backgroundSprite: undefined,
  cannonBarrelSprite: undefined,
  balloonSprite: undefined,
  balloonPosition: {x: 0, y: 50},
  balloonOrigin: {x : 0, y: 0},
  mousePosition: { x: 0, y: 0},
  cannonPosition: { x: 72, y: 405},
  cannonOrigin: { x: 34, y: 34},
  cannonRotation: 0
};

Game.start = () =>  { 
  Game.canvas = document.getElementById("myCanvas"); 
  Game.canvasContext = Game.canvas.getContext("2d"); 
  Game.balloonSprite = new Image();
  Game.balloonSprite.src = "sprites/spr_balloon.png";
  Game.backgroundSprite = new Image();
  Game.backgroundSprite.src = "sprites/spr_background.jpg"
  Game.cannonBarrelSprite = new Image();
  Game.cannonBarrelSprite.src = "sprites/spr_cannon_barrel.png";
  window.setTimeout(Game.mainLoop, 500);
} ;

document.addEventListener('DOMContentLoaded', Game.start); 

Game.update =  () => {
  const opposite =  Game.mousePosition.y - Game.cannonPosition.y;
  const adjacent =  Game.mousePosition.x - Game.cannonPosition.x;
  Game.cannonRotation = Math.atan2(opposite, adjacent);
};

Game.draw = () => { 
  Game.drawImage(Game.backgroundSprite, {x: 0, y: 0}, 0);
  Game.balloonOrigin = {x : Game.balloonSprite.width / 2, y : Game.balloonSprite.height / 2};
  Game.drawImage(Game.balloonSprite, Game.balloonPosition, 0, Game.balloonOrigin);
  Game.drawImage(Game.cannonBarrelSprite, Game.cannonPosition, Game.cannonRotation, Game.cannonOrigin);
} ;

Game.clearCanvas = function () {
  Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
}

Game.drawImage = function (sprite, postion, rotation, origin = {x: 0, y: 0}) {
  Game.canvasContext.save();
  Game.canvasContext.translate(postion.x, postion.y);
  Game.canvasContext.rotate(rotation);
  Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height, -origin.x, -origin.y, sprite.width, sprite.height);
  Game.canvasContext.restore();
};

function handleMouseMove(evt) {
  Game.balloonPosition = {x : evt.pageX, y: evt.pageY};
  Game.mousePosition = {x : evt.pageX, y: evt.pageY};
}

document.onmousemove = handleMouseMove;


Game.mainLoop = () => { 
  Game.clearCanvas();
  Game.update(); 
  Game.draw();
  window.setTimeout(Game.mainLoop, 1000 / 60);
};
