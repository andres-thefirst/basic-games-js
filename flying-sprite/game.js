"use strict";
var Game = {
  canvas: undefined,
  canvasContext: undefined,
  backgroundSprite: undefined,
  balloonSprinte: undefined,
  balloonSprinte1: undefined,
  balloonSprinte2: undefined,
  balloonSprinte3: undefined,
  balloonPosition: {x: 0, y: 50},
  balloonPosition1: {x: 0, y: 80},
  balloonPosition2: {x: 0, y: 120},
  balloonPosition3: {x: 0, y: 150},
  backgroundMusic: undefined
};

Game.start = () =>  { 
  Game.canvas = document.getElementById("myCanvas"); 
  Game.canvasContext = Game.canvas.getContext("2d"); 
  Game.balloonSprinte = new Image();
  Game.balloonSprinte.src = "sprites/spr_balloon.png";
  Game.balloonSprinte1 = new Image();
  Game.balloonSprinte1.src = "sprites/spr_balloon.png";
  Game.balloonSprinte2 = new Image();
  Game.balloonSprinte2.src = "sprites/spr_balloon.png";
  Game.balloonSprinte3 = new Image();
  Game.balloonSprinte3.src = "sprites/spr_balloon.png";
  Game.backgroundSprite = new Image();
  Game.backgroundSprite.src = "sprites/spr_background.jpg";
  Game.backgroundMusic = new Audio();
  Game.backgroundMusic.src = "snd_music.mp3";
  Game.backgroundMusic.play();
  Game.backgroundMusic.volume = 0.4;
  window.setTimeout(Game.mainLoop, 500);
} ;

document.addEventListener('DOMContentLoaded', Game.start); 

Game.update =  () => {
  Game.balloonPosition.x = new Date().getTime() % Game.canvas.width;
  Game.balloonPosition1.x = new Date().getTime() * 2 % Game.canvas.width;
  Game.balloonPosition2.x = new Date().getTime() / 2 % Game.canvas.width;
  Game.balloonPosition3.x = new Date().getTime() / 3 % Game.canvas.width;
 };

Game.draw = () => { 
  Game.drawImage(Game.backgroundSprite, {x: 0, y: 0});
  Game.drawImage(Game.balloonSprinte, Game.balloonPosition);
  Game.drawImage(Game.balloonSprinte1, Game.balloonPosition1);
  Game.drawImage(Game.balloonSprinte2, Game.balloonPosition2);
  Game.drawImage(Game.balloonSprinte3, Game.balloonPosition3);
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
