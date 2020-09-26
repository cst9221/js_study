

function drawImg(){
    const canvas = document.querySelector("canvas")
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = "eiffel.jpg";
    image.onload = function(){
        context.drawImage(image, 0, 0);
    };
}

function init(){
    drawImg();
}

init();