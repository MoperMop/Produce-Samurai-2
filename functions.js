function spawnFruit(){
    fruit = createSprite(750, Math.round(Math.random()*400)+100, 21, 21);
    switch(Math.round(Math.random()*3)+1){
        case 1:
            fruit.addImage(fruit1);
        break;
        case 2:
            fruit.addImage(fruit2);
        break;
        case 3:
            fruit.addImage(fruit3);
        break;
        case 4:
            fruit.addImage(fruit4);
        break;
        default:
            console.log("Error, expected number to be 1-4")
        break;
    }
    fruit.velocityX = Math.round(score/4)+3;
    switch(Math.round(Math.random())+1){
        case 1:
            fruit.velocityX = fruit.velocityX*-1;
        break;
        case 2:
            fruit.x = -50;
        break;
    }
    fruit.scale = 0.4;
    fruitGroup.push(fruit);
}

function spawnAlein(){
    alein = createSprite(750, Math.round(Math.random()*400)+100, 21, 21);
    switch(Math.round(Math.random())+1){
        case 1:
            alein.addImage(alein1);
        break;
        case 2:
            alein.addImage(alein2);
        break;
        default:
            console.log("Error, expected number to be 1-2")
        break;
    }
    alein.velocityX = Math.round(score/6)+3;
    switch(Math.round(Math.random())+1){
        case 1:
            alein.velocityX = alein.velocityX*-1;
        break;
        case 2:
            alein.x = -50;
        break;
    }
    aleinGroup.push(alein);
}