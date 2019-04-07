"use strict";
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
(function()
{
    window.addEventListener("load", main);
}());


function main() {

    const menu = new Image();
    menu.src = '../resources/Menu.png';
    const path = new Path2D();
    menu.onload = function() {
        ctx.drawImage(menu,0,0);
        path.rect(110, 30, 550, 90);
        path.rect(110, 120, 550, 90);
        path.rect(110, 210, 550, 90);
        path.rect(110, 300, 550, 90);
        path.rect(110, 390, 550, 90);
        path.rect(110, 480, 550, 90);
        path.closePath();
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillStyle = "rgba(225,225,225,0.5)";
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000000";
        ctx.stroke(path);

    };
    document.addEventListener("click",function (e) {
        const XY = getXY(canvas,e)
        if(ctx.isPointInPath(path,XY.x,XY.y)){
            alert("clicked button")
        }
    },false);
}
