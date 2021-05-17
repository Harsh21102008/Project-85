canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 150;
car1_height = 90;
car2_width = 150;
car2_height = 90;
background_image = "racing.jpg";
car1_image = "rover.png";
car2_image = "car1.png"
car2_x = 10;
car2_y = 100;
car1_x = 10;
car1_y = 10;
function add() 
{
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image(); 
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image(); 
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() 
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function up()
{
    if(car1_y >=0)
    {
        car1_y -= 20;
         console.log("When up arrow key is pressed = " + car1_x + " - " +car1_y);
         uploadBackground();
         uploadcar1()
         uploadcar2();
    }
}

function up2()
{
    if(car2_y >=0)
    {
        car2_y -= 20;
         console.log("When up arrow key is pressed = " + car2_x + " - " +car2_y);
         uploadBackground();
         uploadcar1()
         uploadcar2();
    }
}

function down()
{
    if(car1_y <=500)
    {
        car1_y += 20;
         console.log("When down arrow key is pressed, x = " + car1_x + " | y = " +car1_y);
         uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}

function down2()
{
    if(car2_y <=500)
    {
        car2_y += 20;
         console.log("When s key is pressed, x = " + car2_x + " | y = " +car2_y);
         uploadBackground();
         uploadcar2();
         uploadcar1();
    }
}

function right()
{
    if(car1_x <= 700)
    {
        car1_x += 20;
         console.log("When right arrow key is pressed = " + car1_x + " - " + car1_y);
         uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}

function right2()
{
    if(car2_x <= 700)
    {
        car2_x += 20;
         console.log("When d key is pressed = " + car2_x + " - " + car2_y);
         uploadBackground();
         uploadcar2();
         uploadcar1();
    }
}

function left()
{
    if(car1_x >= 0)
    {
        car1_x -= 20;
         console.log("When left arrow key is pressed, x = " + car1_x + " | y = " + car1_y);
         uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}

function left2()
{
    if(car2_x >= 0)
    {
        car2_x -= 20;
         console.log("When a key is pressed, x = " + car2_x + " | y = " + car2_y);
         uploadBackground();
         uploadcar2();
         uploadcar1();
    }
}

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
       if(keyPressed == '38')
       {
           console.log("up");
           up();
           
       }
       if(keyPressed == '40')
       {
           console.log("down");   
           down();
       }
       if(keyPressed == '37')
       {
           console.log("left");
           left();
       }
       if(keyPressed == '39')
       {
           console.log("right");
           right();
       }
       if(keyPressed == '87')
       {
           console.log("up2");
           up2();
           
       }
       if(keyPressed == '65')
       {
           console.log("left2");   
           left2();
       }
       if(keyPressed == '83')
       {
           console.log("down2");
           down2();
       }
       if(keyPressed == '68')
       {
           console.log("right2");
           right2();
       }

       if (car1_x > 700)
       {
           console.log("car1 won")
           document.getElementById('game_status').innerHTML =  "Car 1 won!!!"
       }

       if (car2_x > 700)
       {
           console.log("car2 won")
           document.getElementById('game_status').innerHTML =  "Car 2 won!!!"
       }
    
    
}