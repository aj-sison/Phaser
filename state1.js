// Game's 1st State (scene), e.g. menu, high schore, game over, etc.
demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){}, //Loads the necessary images
    create: function(){ //Sets initial values in the game state
        game.stage.backgroundColor = '#ff8800';
        console.log('state1'); // Tells what state we're in
        addChangeStateEventListeners();
    },
    update: function(){}, //Updates the game's frame ~60fps
};