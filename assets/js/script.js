// Game logic


/**
 * displays the current item
 */
function displayItem(item){
    console.log('Calling displayItem function')
    let gameItem = $('#game-img');
    console.log(`game img src: ${gameItem.attr('src')}`);
    // set the src attribute to item['image']
    console.log(`image path string: ${item['image']}`)
    let itemName = $('#item-name');
    itemName.text(item['name'])
    gameItem.attr('data-bin', item['bin'])
}

/**
 * Checks whether the user's answer is correct,
 * displays a pop-up message to inform the user
 */
function checkAnswer(bin){
    console.log('Calling checkAnswer function');
    console.log(`bin: ${bin.attr('id')}`);
    let binType = bin.attr('id').split('-')[0];
    console.log(`bin type: ${binType}`);
    console.log(`data-bin: ${$('#game-img').attr('data-bin')}`)
    let currentItem = $('#item-name');

    if (binType == $('#game-img').attr('data-bin')){
        console.log('Corrrect!')
        score += 10;
    } else {
        console.log('Incorrect!')
    }
}

/**
 * Game is over
 */
function gameOver(){
    console.log('Game Over')
}

/**
 * Moves on to the next round
 */
function nextRound(){
    console.log('Calling nextRound function');
    console.log(`${rounds}`)
    if (rounds < 10){
        let randomIndex = Math.floor(Math.random() * itemsCopy.length);
        randomItem = itemsCopy[randomIndex];
        displayItem(randomItem);
        rounds++;
        itemsCopy.splice(randomIndex, 1)
    } else {
        gameOver();
    }
}

/**
 * Starts the game
 */
 function start(){
    console.log('Calling start function');
    itemsCopy = [...items];
    rounds = 0;
    score = 0;
    nextRound();
}

$(document).ready(function(){
    // tutorial view, game view and menu view
    let playButton = $('#play-button');
    let tutorialButton = $('#tutorial-button');
    let menu = $('#game-menu');
    let mainGame = $('#main-game');
    let tutorial = $('#tutorial');
    let backButton = $('#back-to-menu-button');

    playButton.click(function(){
        console.log('clicked play button')
        menu.hide();
        mainGame.removeClass('d-none');
        start();
    })

    tutorialButton.click(function(){
        console.log('clicked tutorial button')
        menu.hide();
        tutorial.removeClass('d-none');
    })

    backButton.click(function(){
        console.log('clicked back button')
        tutorial.hide();
        menu.show();
    })

    $('#general-waste-bin').click(function(){
        console.log(`Clicked on ${$(this).attr('id')}`)
        checkAnswer($(this));
        nextRound();
    })

    $('#recycle-bin').click(function(){
        console.log(`Clicked on ${$(this).attr('id')}`)
        checkAnswer($(this));
        nextRound();
    })

    $('#glass-bin').click(function(){
        console.log(`Clicked on ${$(this).attr('id')}`)
        checkAnswer($(this));
        nextRound();
    })

    $('#organic-waste-bin').click(function(){
        console.log(`Clicked on ${$(this).attr('id')}`)
        checkAnswer($(this));
        nextRound();
    })
})
