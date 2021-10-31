import Paddle from '/Users/gabrielwoodsum/Desktop/JavaScriptFiles2021/IntroGameDevJS/paddle.js';

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;

const GAME_HEIGHT = 600;


//ctx.clearRect(0, 0, 800, 600); Not sure if I need this

ctx.fillStyle = "#f00";

ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "#00f";

ctx.fillRect(240, 200, 50, 50);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw;

