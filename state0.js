var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#ff0000";
        console.log('state0');
        
        addChangeStateEventListeners();

       // Event Listener
        game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1); //: When 1 is pressed, the game will change to state1
// keyboard.addKey() requires the Phaser keycode as an argument
// The "1" in .add is the argument that is passed to changeState, the 2nd and 3rd argument are irrelevant
// Event Listeners are local which means they need to be written in each state
        
    },
    update: function(){},
};

 // Game will change state when a number is pressed
function changeState(i, stateNum){
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){ // 3 arguments: 1) Key pressed down 2) function called 3) arguments to be passed to that function
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

// Put all the KeyCallbacks in a function so it can be accessed by all the other states via this function
function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0)
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1)
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2)
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3)
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4)
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5)
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6)
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7)
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8)
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9)
}