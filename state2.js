demo.state2 = function(){};
var barrel, bullets, velocity = 1000, nextFire = 0, fireRate = 200, enemy, bullet, enemyGroup;
demo.state2.prototype = {
    preload: function(){
        game.load.image('base', 'assets/sprites/cannonBase.png')
        game.load.image('barrel', 'assets/sprites/barrel.png')
        game.load.image('bullet', 'assets/sprites/bullet.png')
    },
    create: function(){
        game.stage.backgroundColor = "#fffa00";
        addChangeStateEventListeners();
        
        // Add base
        var base = game.add.sprite(centerX, centerY, 'base');
        base.anchor.setTo(0.5);
        
        //Bullets
        bullets = game.add.group(); // Useful when there will be multiple sprites similar to each other
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'bullet');
        bullets.setAll('checkWorldBounds', true); // "setAll" applies it to all sprites in the group
        bullets.setAll('outOfBoundsKill', true); // Bullets are "dead" when they go off screen => Allowed to shoot more than 50 bullets
        bullets.setAll('anchor.y', 0.5) // Centers bullet
        bullets.setAll('scale.x', 1.2) // Have to do scale.x and y separately for setAll
        bullets.setAll('scale.y', 1.2)
        
        // Add barrel
        barrel = game.add.sprite(centerX, centerY, 'barrel');
        barrel.anchor.setTo(0.5);
        barrel.scale.setTo(1.5, 1.2);
        
        // Add enemies
        enemy = game.add.sprite(227, 459, 'DiAngelo');
        game.physics.enable(enemy);
        
        // Enemy Group
        enemyGroup = game.add.group();
        enemyGroup.enableBody = true
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;
        for (var i = 0; i<16; i++) {
            enemyGroup.create(1300, 200 * i + 100, 'DiAngelo'); // 1st 2 arguments are the coordinates
        }
        enemyGroup.setAll('anchor.y', 0.5);
        enemyGroup.setAll('anchor.x', 0.5);
        enemyGroup.setAll('scale.y', 0.4);
        enemyGroup.setAll('scale.x', 0.4);
    },
    update: function(){
        // Barrel will rotate and follow mous pointer
        barrel.rotation = game.physics.arcade.angleToPointer(barrel);
        
        if (game.input.activePointer.isDown) {
            this.fire();
        }
        
        game.physics.arcade.overlap(bullets, enemy, this.hitEnemy); //3rd argument is the function to be called when the two objects overlap
        game.physics.arcade.overlap(bullets, enemyGroup, this.hitGroup);
    },
    fire: function() {
        if(game.time.now > nextFire) {
        nextFire = game.time.now + fireRate; // Limits fire rate
            
        console.log('firing');
        bullet = bullets.getFirstDead();
        bullet.reset(barrel.x, barrel.y); // Makes the bullet originate from the barrel
        
        game.physics.arcade.moveToPointer(bullet, velocity);
        bullet.rotation = game.physics.arcade.angleToPointer(bullet);
        }
    },
    hitEnemy: function() {
        console.log('hit');
        enemy.kill();
        bullet.kill();
    },
    hitGroup: function(bullets, enemyGroup) {
        bullets.kill();
        enemyGroup.kill();
    }
};