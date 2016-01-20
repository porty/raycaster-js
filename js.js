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

var canvas = null;
var ctx = null;

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

function ObjectFromRay() {
    this.blockType = 0;
    this.distance = 0;
}

function findObjectFromRay(origin, angle, returnObjectFromRay) {
    // find closest by incrementing X

}

function verLine(x, drawStart, drawEnd, color) {
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
    ctx.lineTo(x, canvas.height - 1);
    ctx.stroke();
}

function main() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    var width = canvas.width;
    var height = canvas.height;

    var posX = 22.0, posY = 11.5;  //x and y start position
    var dirX = -1.0, dirY = 0.0; //initial direction vector
    var planeX = 0.0, planeY = 0.66; //the 2d raycaster version of camera plane


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
        var mapX = Math.round(rayPosX);
        var mapY = Math.round(rayPosY);

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
        var lineHeight = Math.abs(Math.round(height / perpWallDist));

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
        var color;
        switch(worldMap[mapX][mapY])
        {
            case 1:  color = 'red';  break; //red
            case 2:  color = 'green';  break; //green
            case 3:  color = 'blue';   break; //blue
            case 4:  color = 'pink';  break; //white
            default: color = 'yellow'; break; //yellow
        }

        //give x and y sides different brightness
        if (side == 1)
        {
                //color = color / 2;
        }

        //draw the pixels of the stripe as a vertical line
        verLine(x, drawStart, drawEnd, color);
    }


    // for (var x = 0; x < canvas.width; ++x) {
    //     drawLine(x, canvas.height);
    // }

    //drawMap(worldMap, ctx);
}
