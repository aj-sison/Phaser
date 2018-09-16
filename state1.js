// Game's 1st State (scene), e.g. menu, high schore, game over, etc.
demo.state1 = function(){};

var cursors, vel = 500, rocks;

demo.state1.prototype = {
    preload: function(){ //Loads the necessary images
        game.physics.startSystem(Phaser.Physics.ARCADE); // Redundant since it's already been called in state0
        
        //Preload tilemap
        game.load.tilemap('field', 'assets/Tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTile', 'assets/Tilemaps/grassTile.png'); // Key must match tileset names
        game.load.image('rockTile', 'assets/Tilemaps/rockTile.png');
        game.load.image('DiAngelo', 'assets/sprites/DiAngelo.png');
        
    },
    create: function(){ //Sets initial values in the game state
        addChangeStateEventListeners();

        var map = game.add.tilemap('field');
        map.addTilesetImage('grassTile');
        map.addTilesetImage('rockTile');
        
        // Add tilemap layers
        var grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');
        
        map.setCollisionBetween(1, 9, true, 'rocks'); //json code has rocks on a range of 1 to 9
            
        DiAngelo = game.add.sprite(200, 200, 'DiAngelo');
        DiAngelo.scale.setTo(0.2, 0.2);
        game.physics.enable(DiAngelo);
            
        cursors = game.input.keyboard.createCursorKeys(); //Creates keys for arrow keys
    },
    update: function(){
        //Check for collision
        game.physics.arcade.collide(DiAngelo, rocks, function(){console.log('hitting rocks!')});//An anonymous function
        
        if (cursors.up.isDown){
            DiAngelo.body.velocity.y = -vel; // Must use velocity w/ physics engine
        }
        else if (cursors.down.isDown){
            DiAngelo.body.velocity.y = vel;
        }
        else{ // Di stops moving when nothing is pressed
            DiAngelo.body.velocity.y = 0;
        }
        
        
        if (cursors.left.isDown){
            DiAngelo.body.velocity.x = -vel;
        }
        else if (cursors.right.isDown){
            DiAngelo.body.velocity.x = vel;
        }
        else{
            DiAngelo.body.velocity.x = 0;
        }
    }, //Updates the game's frame ~60fps
};