var demo = {}, centerX = 1500/2, centerY = 1000/2, DiAngelo, speed = 4; // You can assign multiple variables in one line
// Placing "DiAngelo" there allows it to be accessed universally
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('DiAngelo', 'assets/sprites/DiAngelo.png'); //Load DiAngelo, 1st argument is the key (name), 2nd argument is file location
    },
    create: function(){
        game.stage.backgroundColor = "#ff0000";
        console.log('state0');
        
        addChangeStateEventListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // Game screen will adjust with the window size | Applies to all states
        //There are 3 other scale modes that can be found on the Phaser website
        
        DiAngelo = game.add.sprite(centerX, centerY, 'DiAngelo'); //Puts Di into game
        //game.add.sprite(x-coord., y-coord., key to be loaded)
        // Places .png's top left corner at the coordinates
        DiAngelo.anchor.setTo(0.5, 0.5); // Centers Di

       // Event Listener
        game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1); //: When 1 is pressed, the game will change to state1
// keyboard.addKey() requires the Phaser keycode as an argument
// The "1" in .add is the argument that is passed to changeState, the 2nd and 3rd argument are irrelevant
// Event Listeners are local which means they need to be written in each state
        
    },
    update: function(){
        // Move RIGHT
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            DiAngelo.x += speed;
        }
        // Move LEFT
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            DiAngelo.x -= speed;
        }
        // Move UP
        else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            DiAngelo.y -= speed;
        }
        // Move DOWN
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            DiAngelo.y += speed; // "+" is down for y bc (0,0) is at the top left corner
        }
    },
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