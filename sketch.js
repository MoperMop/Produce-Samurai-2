const END = 0; const PLAY = 1;
var score;
var gameoverSound, sliceSound;
var knife, fruit, alein;
var knifeImage, fruit1, fruit2, fruit3, fruit4, alein1, alein2, gameover;
var fruitGroup, aleinGroup;
var gamestate;


function preload(){
    knifeImage = loadImage("images/sword.png");

    fruit1 = loadImage("images/fruit1.png");
    fruit2 = loadImage("images/fruit2.png");
    fruit3 = loadImage("images/fruit3.png");
    fruit4 = loadImage("images/fruit4.png");

    alein1 = loadImage("images/alien1.png");
    alein2 = loadImage("images/alien2.png");

    gameover = loadImage("images/gameover.png");


    gameoverSound = loadSound('sounds/gameover.mp3');

    sliceSound = loadSound('sounds/knifeSwooshSound.mp3');
}

function setup(){
    /*var screenProportions = 1.3;
    if(windowHeight > windowWidth/screenProportions){
        createCanvas(windowWidth, windowWidth/screenProportions);
    }
    else{createCanvas(windowHeight*screenProportions, windowHeight);}*/
    createCanvas(700, 600)


    score = 0;


    knife = createSprite(mouseX, mouseY, 52, 52);
    knife.addImage(knifeImage);
    knife.setCollider("circle", 15, -20, 48);


    gamestate = PLAY;


    fruitGroup = [];
    aleinGroup = [];


    spawnFruit();
}

function draw(){
    background(rgb(100, 210, 230));

    textSize(30);
    text("Score: "+score, 5, 30);


    if(gamestate === PLAY){
        knife.x = mouseX;
        knife.y = mouseY;


        for(var fruits = fruitGroup.length-1; fruits > -1; fruits = fruits-1){
            if(fruitGroup[fruits].isTouching(knife)
             || fruitGroup[fruits].x < -100){
                fruitGroup[fruits].lifetime = 0;
                score = score+1;
                sliceSound.play();
            }
        }
        for(var aleins = aleinGroup.length-1; aleins > -1; aleins = aleins-1){
            if(aleinGroup[aleins].isTouching(knife)){
                gameoverSound.play();
                for(var aleins = aleinGroup.length-1; aleins > -1; aleins = aleins-1){
                    aleinGroup[aleins].lifetime = 0;
                }
                for(var fruits = fruitGroup.length-1; fruits > -1; fruits = fruits-1){
                    fruitGroup[fruits].lifetime = 0;
                }
                gamestate = END;
                knife.visible = false;
            }else if(aleinGroup[aleins].x < -100){
                aleinGroup[aleins].lifetime = 0;
            }
        }
        

        if(World.frameCount%50 === 0){
            switch(Math.round(Math.random()*2)+1){
                case 1:
                    spawnFruit();
                break;
                case 2:
                    spawnFruit();
                break;
                case 3:
                    spawnAlein();
                break;
                default:
                    console.log("error");
                break;
            }
        }
    }else if(gamestate === END){
        push();
          imageMode(CENTER);
          image(gameover, 350, 300, 400, 90);
          textSize(30);
          fill(rgb(200, 0, 0))
          text("Press SPACE to Continue", 180, 375);
        pop();
    }else{console.log("Error, gamestate is " + gamestate);}


    drawSprites();
}


function keyPressed(){
    if(keyCode === 32){
        gamestate = PLAY;
        knife.visible = true;
        score = 0;
    }
}