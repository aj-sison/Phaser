var game = new Phaser.Game(600, 400, Phaser.AUTO);
game.state.add('state1', demo.state1); // Adds state to game
game.state.start('state1');