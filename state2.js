// Game's 2nd State (scene), e.g. menu, high schore, game over, etc.
demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#fffa00";
        console.log('state2');
        addChangeStateEventListeners();
    },
    update: function(){},
};