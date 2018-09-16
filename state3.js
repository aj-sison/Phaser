demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){
        game.load.image('button1', 'assets/sprites/button1.png');
        game.load.image('button2', 'assets/sprites/button2.png');
        game.load.image('button3', 'assets/sprites/button3.png');
    },
    create: function(){
        game.stage.backgroundColor = "#00fffa";
        addChangeStateEventListeners();
        
        // 1st 2 arguments are x and y position
        var b1 = game.add.button(100, 100, 'button1', function() {
            changeState(null, 1); // b1 will change to state1 upon clicking
        });
        
        var b2 = game.add.button(400, 400, 'button2', function() {
            changeState(null, 2);
        });
        
        var b3 = game.add.button(700, 700, 'button3', function() {
            changeState(null, 1); // b1 will change to state1 upon clicking
        });
    },
    update: function(){},
};