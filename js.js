var worldMap = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 4, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 4, 0, 0, 0, 0, 5, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 4, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 4, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var colours = [
    null,
    ["rgb(255, 0, 0)", "rgb(127, 0, 0)"], // reg
    ["rgb(0, 255, 0)", "rgb(0, 127, 0)"], // green
    ["rgb(0, 0, 255)", "rgb(0, 0, 127)"], // blue
    ["rgb(255, 127, 127)", "rgb(127, 63, 63)"], // pink
    ["rgb(255, 255, 0)", "rgb(127, 127, 0)"], // yellow
];

var int = Math.floor;
var cos = Math.cos;
var sin = Math.sin;

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function User(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
}

// 1,1 = top left
var userPosition = new User(1, 1, Math.PI / 4);

function drawMap(map, context) {
    var height = map.length;
    var width = map[0].length;
    var blockSize = 10;

    for (var y = 0; y < height; ++y) {
        for (var x = 0; x < width; ++x) {
            var block = map[y][x];
            var colour = 0;
            switch (block) {
                case 0:
                    colour = "white";
                break;
                case 1:
                    colour = "black";
                break;
                case 2:
                    colour = "blue";
                break;
                case 3:
                    colour = "green";
                break;
                case 4:
                    colour = "red";
                break;
                default:
                    colour = "orange";
                break;
            }
            context.fillStyle = colour;
            context.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
        }
    }
}

var frameRateCounter = 0;
var frameRateCounterElement = null;
function updateFrameRate(rate) {
    ++frameRateCounter;
    if (frameRateCounter === 20) {
        if (frameRateCounterElement === null) {
            frameRateCounterElement = document.getElementById('frameRateCounter');
        }
        frameRateCounterElement.innerText = rate + 'FPS';
    }
}

function ObjectFromRay() {
    this.blockType = 0;
    this.distance = 0;
}

function findObjectFromRay(origin, angle, returnObjectFromRay) {
    // find closest by incrementing X

}

function verLine(ctx, height, x, drawStart, drawEnd, color) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, drawStart);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.moveTo(x, drawStart);
    ctx.lineTo(x, drawEnd);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.moveTo(x, drawEnd);
    ctx.lineTo(x, height - 1);
    ctx.stroke();
}

var SDLK_UP = 0;
var SDLK_DOWN = 1;
var SDLK_LEFT = 2;
var SDLK_RIGHT = 3;

var keys = [false, false, false, false];

function isKeyDown(key) {
    return keys[key];
}

function onKeyDown(e) {
    var index = eventToIndex(e);
    if (index !== null) {
        keys[index] = true;
        e.preventDefault();
    }
}

function onKeyUp(e) {
    var index = eventToIndex(e);
    if (index !== null) {
        keys[index] = false;
        e.preventDefault();
    }
}

function eventToIndex(e) {
    switch(e.keyCode) {
        case 38:
            return SDLK_UP;
        case 40:
            return SDLK_DOWN;
        case 37:
            return SDLK_LEFT;
        case 39:
            return SDLK_RIGHT;
    }
    return null;
}

function main() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    document.body.addEventListener("keydown", onKeyDown, true);
    document.body.addEventListener("keyup", onKeyUp, true);

    var width = canvas.width;
    var height = canvas.height;

    var posX = 22.0, posY = 11.5;  //x and y start position
    var dirX = -1.0, dirY = 0.0; //initial direction vector
    var planeX = 0.0, planeY = 0.66; //the 2d raycaster version of camera plane

    var draw = function () {
        var oldTime = 0;
        var time = Date.now();

        // TODO increment by more than one (setting line width appropriately) for more blocky
        for(var x = 0; x < width; ++x)
        {
            // calculate ray position and direction
            // x-coordinate in camera space
            var cameraX = 2 * x / width - 1;
            var rayPosX = posX;
            var rayPosY = posY;
            var rayDirX = dirX + planeX * cameraX;
            var rayDirY = dirY + planeY * cameraX;

            //which box of the map we're in
            var mapX = int(rayPosX);
            var mapY = int(rayPosY);

            //length of ray from current position to next x or y-side
            var sideDistX;
            var sideDistY;

            //length of ray from one x or y-side to next x or y-side
            var deltaDistX = Math.sqrt(1 + (rayDirY * rayDirY) / (rayDirX * rayDirX));
            var deltaDistY = Math.sqrt(1 + (rayDirX * rayDirX) / (rayDirY * rayDirY));
            var perpWallDist;

            //what direction to step in x or y-direction (either +1 or -1)
            var stepX;
            var stepY;

            var hit = 0; //was there a wall hit?
            var side; //was a NS or a EW wall hit?


            //calculate step and initial sideDist
            if (rayDirX < 0)
            {
                stepX = -1;
                sideDistX = (rayPosX - mapX) * deltaDistX;
            }
            else
            {
                stepX = 1;
                sideDistX = (mapX + 1.0 - rayPosX) * deltaDistX;
            }
            if (rayDirY < 0)
            {
                stepY = -1;
                sideDistY = (rayPosY - mapY) * deltaDistY;
            }
            else
            {
                stepY = 1;
                sideDistY = (mapY + 1.0 - rayPosY) * deltaDistY;
            }


            //perform DDA
            while (hit === 0)
            {
                //jump to next map square, OR in x-direction, OR in y-direction
                if (sideDistX < sideDistY)
                {
                    sideDistX += deltaDistX;
                    mapX += stepX;
                    side = 0;
                }
                else
                {
                    sideDistY += deltaDistY;
                    mapY += stepY;
                    side = 1;
                }
                //Check if ray has hit a wall
                if (worldMap[mapX][mapY] > 0)
                {
                    hit = 1;
                }
            }


            //Calculate distance projected on camera direction (oblique distance will give fisheye effect!)
            if (side === 0)
            {
                perpWallDist = Math.abs((mapX - rayPosX + (1 - stepX) / 2) / rayDirX);
            }
            else
            {
                perpWallDist = Math.abs((mapY - rayPosY + (1 - stepY) / 2) / rayDirY);
            }


            //Calculate height of line to draw on screen
            var lineHeight = Math.abs(int(height / perpWallDist));

            //calculate lowest and highest pixel to fill in current stripe
            var drawStart = -lineHeight / 2 + height / 2;
            if (drawStart < 0)
            {
                drawStart = 0;
            }
            var drawEnd = lineHeight / 2 + height / 2;
            if (drawEnd >= height)
            {
                drawEnd = height - 1;
            }

            //choose wall color
            var color = colours[worldMap[mapX][mapY]][side];
            //draw the pixels of the stripe as a vertical line
            verLine(ctx, height, x, drawStart, drawEnd, color);
        }

        oldTime = time;
        time = Date.now();
        var frameTime = (time - oldTime) / 1000.0; //frameTime is the time this frame has taken, in seconds
        updateFrameRate(1.0 / frameTime); //FPS counter
        // draw here somewhere

        //speed modifiers
        var moveSpeed = frameTime * 5.0; //the constant value is in squares/second
        var rotSpeed = frameTime * 3.0; //the constant value is in radians/second


        // no need to read any keys first, the event handlers take care of that

        if (isKeyDown(SDLK_UP)) {
            //move forward if no wall in front of you
            if(worldMap[int(posX + dirX * moveSpeed)][int(posY)] === 0) {
                posX += dirX * moveSpeed;
            }
            if(worldMap[int(posX)][int(posY + dirY * moveSpeed)] === 0) {
                posY += dirY * moveSpeed;
            }
        } else if (isKeyDown(SDLK_DOWN)) {
            //move backwards if no wall behind you
            if(worldMap[int(posX - dirX * moveSpeed)][int(posY)] === 0) {
                posX -= dirX * moveSpeed;
            }
            if(worldMap[int(posX)][int(posY - dirY * moveSpeed)] === 0) {
                posY -= dirY * moveSpeed;
            }
        }

        if (isKeyDown(SDLK_RIGHT)) {
            //rotate to the right
            //both camera direction and camera plane must be rotated
            var oldDirX = dirX;
            dirX = dirX * cos(-rotSpeed) - dirY * sin(-rotSpeed);
            dirY = oldDirX * sin(-rotSpeed) + dirY * cos(-rotSpeed);
            var oldPlaneX = planeX;
            planeX = planeX * cos(-rotSpeed) - planeY * sin(-rotSpeed);
            planeY = oldPlaneX * sin(-rotSpeed) + planeY * cos(-rotSpeed);
        } else if (isKeyDown(SDLK_LEFT)) {
            //rotate to the left
            //both camera direction and camera plane must be rotated
            var oldDirX = dirX;
            dirX = dirX * cos(rotSpeed) - dirY * sin(rotSpeed);
            dirY = oldDirX * sin(rotSpeed) + dirY * cos(rotSpeed);
            var oldPlaneX = planeX;
            planeX = planeX * cos(rotSpeed) - planeY * sin(rotSpeed);
            planeY = oldPlaneX * sin(rotSpeed) + planeY * cos(rotSpeed);
        }

        window.requestAnimationFrame(draw);
    };

    window.requestAnimationFrame(draw);

    // for (var x = 0; x < canvas.width; ++x) {
    //     drawLine(x, canvas.height);
    // }

    //drawMap(worldMap, ctx);
}
