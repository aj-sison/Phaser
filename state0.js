var demo = {}, centerX = 1500/2, centerY = 1000/2, DiAngelo, speed = 6; // You can assign multiple variables in one line
// Placing "DiAngelo" there allows it to be accessed universally
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.spritesheet('DiAngelo', 'assets/SpritesSheet/DiAngeloSheet.png', 250, 500); //Load DiAngelo, 1st argument is the key (name), 2nd argument is file location, then size
        game.load.image('tree', 'assets/backgrounds/Background.png'); 
    },
    create: function(){
        //First line in create function should initiate the physics engine
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#ff0000";
        console.log('state0');
        
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 3000, 1000); // Adds bounds so camera will follow sprite
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // Game screen will adjust with the window size | Applies to all states
        //There are 3 other scale modes that can be found on the Phaser website
        
        var treeBG = game.add.sprite(0, 0, 'tree'); //Loads Background
        
        DiAngelo = game.add.sprite(centerX, centerY, 'DiAngelo'); //Puts Di into game ("sprite" is another name for an image)
        //game.add.sprite(x-coord., y-coord., key to be loaded)
        // Places .png's top left corner at the coordinates
        DiAngelo.anchor.setTo(0.5, 0.5); // Centers Di
        DiAngelo.scale.setTo(0.7, 0.7); // Scales Di by width and height
        
       // Event Listener
        game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1); //: When 1 is pressed, the game will change to state1
// keyboard.addKey() requires the Phaser keycode as an argument
// The "1" in .add is the argument that is passed to changeState, the 2nd and 3rd argument are irrelevant
// Event Listeners are local which means they need to be written in each state
        
        game.physics.enable(DiAngelo); //Enables physics engine on Di
        DiAngelo.body.collideWorldBounds = true;
        
        //Walking Animation
        DiAngelo.animations.add('walk', [0, 1]);
        
        game.camera.follow(DiAngelo);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000); // Creates Deadzone
        
    },
    update: function(){
        // Move RIGHT
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            DiAngelo.x += speed;
            DiAngelo.scale.setTo(0.7, 0.7);
            DiAngelo.animations.play('walk', 6, true); //(key, fps, loop boolean)
        }
        // Move LEFT
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            DiAngelo.x -= speed;
            DiAngelo.scale.setTo(-0.7, 0.7);
            DiAngelo.animations.play('walk', 6, true);
        }
        else{
            DiAngelo.animations.stop('walk'); //Stops animation when not moving
            DiAngelo.frame = 0; //Standing frame when not moving
        }
        // Move UP
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            DiAngelo.y -= speed;
            if(DiAngelo.y < 467){ //Keeps Di from going above the road
                DiAngelo.y = 467;
            }
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
    console.log('state' + stateNum);
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