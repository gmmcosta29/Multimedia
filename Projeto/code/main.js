"use strict";

let backGroundY = 0;
let speed = 1;

const Y = [380,450,325,120,200,250];
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

const credits=new Image();
const exit =new Image();
const help = new Image();
const history = new Image();
const lead = new Image();
const options = new Image();
const image = new Image();
const X = [(canvas.width-272)/2,(canvas.width-135)/2,(canvas.width-169)/2,(canvas.width-272)/2,(canvas.width-376)/2,(canvas.width-204)/2];
const Widht = [272,135,169,272,376,204];
const Height = [43,30,30,42,31,51];
let fadeID = 0;

let MouseX;
let MouseY;
let time= 0.0;
(function()
{
    window.addEventListener("load", main);
}());

function main() {
    image.src = 'resources/Menu/Sprite-background.png';
    credits.src = 'resources/Menu/Sprite-credits.png';
    exit.src = 'resources/Menu/Sprite-exit.png';
    help.src = 'resources/Menu/Sprite-help.png';
    history.src = 'resources/Menu/Sprite-Historia.png';
    lead.src = 'resources/Menu/Sprite-Leaderboard.png';
    options.src = 'resources/Menu/Sprite-options.png';

    image.onload = function() {
        ctx.drawImage(image, 0, 0);
    };
    credits.onload = function () {
        ctx.drawImage(credits,X[0],Y[0]);
    };
    exit.onload = function () {
        ctx.drawImage(exit,X[1],Y[1]);
    };
    help.onload= function () {
        ctx.drawImage(help,X[2],Y[2]);
    };
    history.onload = function () {
        ctx.drawImage(history,X[3],Y[3]);
    };
    lead.onload = function () {
        ctx.drawImage(lead,X[4],Y[4]);
    };
    options.onload = function () {
        ctx.drawImage(options,X[5],Y[5]);
    };
}
let frame = 30;
let timeID = 0;
timeID = setInterval(update,1000/frame);
canvas.addEventListener("mousemove",checkPos);
canvas.addEventListener("mouseup",checkClick);

function checkClick(mouseEvent) {
    for (let i = 0;i<X.length;i++){
        if(MouseX>X[i] && MouseX <X[i]+Widht[i]){
            if (MouseY > Y[i] && MouseY < Y[i]+Height[i]){
                /*
                fadeID = setInterval("fadeOut()",1000/frame);
                clearInterval(timeID);
                canvas.removeEventListener("mousemove",checkPos);
                canvas.removeEventListener("mouseup",checkClick);*/
                alert("tosco");
            }
        }
    }
}

function clear() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function move() {
    backGroundY -=speed;
    if(backGroundY==-1 * canvas.height){
        backGroundY = 0;
    }
}
function draw() {
    ctx.drawImage(image,0,0);
    ctx.drawImage(credits,X[0],Y[0]);
    ctx.drawImage(exit,X[1],Y[1]);
    ctx.drawImage(help,X[2],Y[2]);
    ctx.drawImage(history,X[3],Y[3]);
    ctx.drawImage(lead,X[4],Y[4]);
    ctx.drawImage(options,X[5],Y[5]);
}

function update() {
    clear();
    move();
    draw();
}
function checkPos() {
    if(MouseEvent.PageX || MouseEvent == 0){
        MouseX = MouseEvent.PageX - this.offsetLeft;
        MouseY = MouseEvent.PageY - this.offsetTop;
    }else if(MouseEvent.offsetX || MouseEvent.offsetY ==0){
        MouseY = MouseEvent.offsetY;
        MouseX = MouseEvent.offsetX;
    }
}
function fadeOut() {
    ctx.fillStyle = "rgba(0,0,0,0.7)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    time +=0.1;
    if(time >=2){
        clearInterval(fadeID);
        time = 0;
        timeID = setInterval("update()",1000/frame);
        canvas.addEventListener("mousemove", checkPos);
        canvas.addEventListener("mouseup", checkClick);
    }
}
