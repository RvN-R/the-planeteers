// Game logic


/**
 * displays the current item
 */
function displayItem(item){
    console.log('Calling displayItem function')
    let gameItem = $('#game-img');
    let itemName = $('#item-name');
    itemName.text(item['name']);
    gameItem.attr('src', item['image']);
    gameItem.attr('data-bin', item['bin']);
}

/**
 * Checks whether the user's answer is correct,
 * displays a pop-up message to inform the user
 */
function checkAnswer(bin){
    let modal = $('.modal');
    let modalHeader = $('.modal-title');
    let binSelected = $('.bin-selection');
    let binType = bin.attr('id').split('-')[0];
    let correctBin = $('#game-img').attr('data-bin')

    if (binType == correctBin){
        bin.css({'outline': '2px solid green'});
        score += 10;
        modalHeader.text('Correct!');
        binSelected.text(`You selected ${binType} for ${randomItem['name']}, that's right!`)
    } else {
        modalHeader.text('Incorrect!');
        binSelected.text(`You selected ${binType} for ${randomItem['name']}, but the right bin is ${correctBin}!`)
        bin.css({'outline': '2px solid red'});
    }
    $('.score').text(score);
    $('#rounds').text(rounds + 1);
    modal.modal('show');
    let itemFact = randomItem['fact']
    factArea.text(`${facts[itemFact]}`);
}

/**
 * Game is over
 */
function gameOver(){
    gameOverView.removeClass('d-none');
    gameOverView.show();
    mainGame.hide();
}

/**
 * Moves on to the next round
 */
function nextRound(){
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
    itemsCopy = [...items];
    rounds = 0;
    score = 0;
    $('.score').text('0');
    nextRound();
}

$(document).ready(function(){
    // tutorial view, game view and menu view
    let playButton = $('.play-button');
    let tutorialButton = $('#tutorial-button');
    let menu = $('#game-menu');
    mainGame = $('#main-game');
    gameOverView = $('#game-over');
    factArea = $('.fact-area');
    let tutorial = $('#tutorial');
    let backButton = $('.back-to-menu-button');
    let dismissModal = $('.dismiss');

    playButton.click(function(){
        menu.hide();
        mainGame.removeClass('d-none');
        mainGame.show();
        start();
    })

    tutorialButton.click(function(){
        menu.hide();
        tutorial.removeClass('d-none');
        tutorial.show();
    })

    backButton.click(function(){
        tutorial.hide();
        gameOverView.hide();
        menu.show();
    })

    $('#general-waste-bin').click(function(){
        checkAnswer($(this));
        nextRound();
    })

    $('#recycle-bin').click(function(){
        checkAnswer($(this));
        nextRound();
    })

    $('#glass-bin').click(function(){
        checkAnswer($(this));
        nextRound();
    })

    $('#organic-waste-bin').click(function(){
        checkAnswer($(this));
        nextRound();
    })

    dismissModal.click(function(){
        $('.fa-trash').css('outline', 'none');
    })
})
