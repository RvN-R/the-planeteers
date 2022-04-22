// Game logic

/**
 * Displays the bins in the game area
 */
function showBins(){
    console.log('Calling showBins function')
}

/**
 * displays the current item
 */
function displayItem(array){
    console.log('Calling displayItem function')

}

/**
 * Checks whether the user's answer is correct,
 * displays a pop-up message to inform the user
 */
function checkAnswer(bin){
    console.log('Calling checkAnswer function')
    let currentItem; //Assign the current item
    if (bin.attr('id') == currentItem.attr('data-category')){
        console.log('the answer is correct')
    } else{
        console.log('the answer is incorrect')
    }
    let messageDiv; //Assign message div element
    messageDiv.show()
}

let rounds = 0
/**
 * The main function of the game
 */
function main(){
    console.log('Calling main function');
    while (rounds < 10){
        showBins();
        let bins; //assign value of bin elements, uncomment the following lines
        // bins.click(function(){
        //     console.log('added eventlistener to bins');
        //     checkAnswer();
        // })
        itemsCopy = [...items]
        displayItem(itemsCopy);
        
        let playButton; //Assign play button element
        // playButton.click(function(){
        //     main();
        // })       }   

        rounds++;
    }
}