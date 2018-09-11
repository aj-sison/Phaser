var game = new Phaser.Game(1500, 1000, Phaser.AUTO); // Bigger game world = crisper world
game.state.add('state1', demo.state1); // Adds state1 to game
game.state.add('state2', demo.state2); // Adds state2 to game
game.state.add('state0', demo.state0);
game.state.add('state3', demo.state3);
game.state.add('state4', demo.state4);
game.state.add('state5', demo.state5);
game.state.add('state6', demo.state6);
game.state.add('state7', demo.state7);
game.state.add('state8', demo.state8);
game.state.add('state9', demo.state9);
game.state.start('state0');