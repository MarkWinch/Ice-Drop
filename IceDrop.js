
class IceDrop extends Phaser.Scene {
    constructor() {
        super("IceDrop");
    }
    

    preload(){
        this.load.image('background', 'assets/background.png');
        this.load.image('eskimo', 'assets/eskimo.png');
        this.load.image('icicle', 'assets/icicle.png');
        this.load.image('heart', 'assets/heart.png');
        this.load.image('startingtext', 'assets/startingtext.png');
        this.load.image('gameover', 'assets/gameover.png');
        this.load.image('replay1', 'assets/replay1.png');
        this.load.image('replay2', 'assets/replay2.png');
        this.load.image('heart2', 'assets/heart2.png');
        this.load.image('heart3', 'assets/heart3.png');
        this.load.image('heart4', 'assets/heart4.png');
        this.load.image('heart5', 'assets/heart5.png');
        this.load.image('heart6', 'assets/heart6.png');
        this.load.image('heart7', 'assets/heart7.png');
        this.load.image('heart8', 'assets/heart8.png');
        this.load.image('heart9', 'assets/heart9.png');
        this.load.image('heart10', 'assets/heart10.png');
    }

    create(){

        this.add.image(175, 300, 'background');

        this.physics.world.setFPS(180);

        time_count = this.add.text(160, 220, ' ', { fontStyle: 'bold', fontFamily: 'MS PGothic', fontSize: '30px', fill: '#55A3E8' });
        time_count.setAlpha(0.5);

        heart1 = this.add.image(-100, -100, 'heart').setScale(0.6, 0.6);
        heart1.setAlpha(0.5);

        heart2 = this.add.image(-100, -100, 'heart2').setScale(0.6, 0.6);
        heart2.setAlpha(0.5);

        heart3 = this.add.image(-100, -100, 'heart3').setScale(0.6, 0.6);
        heart3.setAlpha(0.5);

        heart4 = this.add.image(-100, -100, 'heart4').setScale(0.6, 0.6);
        heart4.setAlpha(0.5);

        heart5 = this.add.image(-100, -100, 'heart5').setScale(0.6, 0.6);
        heart5.setAlpha(0.5);

        heart6 = this.add.image(-100, -100, 'heart6').setScale(0.6, 0.6);
        heart6.setAlpha(0.5);

        heart7 = this.add.image(-100, -100, 'heart7').setScale(0.6, 0.6);
        heart7.setAlpha(0.5);

        heart8 = this.add.image(-100, -100, 'heart8').setScale(0.6, 0.6);
        heart8.setAlpha(0.5);

        heart9 = this.add.image(-100, -100, 'heart9 ').setScale(0.6, 0.6);
        heart9.setAlpha(0.5);

        heart10 = this.add.image(-100, -100, 'heart10').setScale(0.6, 0.6);
        heart10.setAlpha(0.5);

        player = this.physics.add.sprite(100, 100, 'eskimo').setScale(1, 1);
        player.setCollideWorldBounds(true);

        var start_bk = this.add.image(175, 300, 'background');

        startingButton = this.add.image(175, 260, 'startingtext');
        this.physics.add.existing(startingButton);
        startingButton.body.setAllowGravity(false);
        startingButton.body.setImmovable();
        startingButton.setInteractive();
        startingButton.on('pointerdown', () => {
            lives = 3;
            startdate = new Date();

            start_bk.destroy();

            player.setPosition(100, 400);
            startingButton.body.setVelocityX(-250);
        });

        cursors = this.input.keyboard.createCursorKeys();

        rock1 = this.add.image(601, 0, 'icicle');
        this.physics.add.existing(rock1);
        rock1.body.setAllowGravity(false);
        rock1.body.setImmovable();
        rock1.body.setVelocityY(300);

        rock2 = this.add.image(610, 0, 'icicle');
        this.physics.add.existing(rock2);
        rock2.body.setAllowGravity(false);
        rock2.body.setImmovable();
        rock2.body.setVelocityY(300);

        rock3 = this.add.image(610, 0, 'icicle');
        this.physics.add.existing(rock3);
        rock3.body.setAllowGravity(false);
        rock3.body.setImmovable();
        rock3.body.setVelocityY(300);

        rock4 = this.add.image(610, 0, 'icicle');
        this.physics.add.existing(rock4);
        rock4.body.setAllowGravity(false);
        rock4.body.setImmovable();
        rock4.body.setVelocityY(300);

        rock5 = this.add.image(610, 0, 'icicle');
        this.physics.add.existing(rock5);
        rock5.body.setAllowGravity(false);
        rock5.body.setImmovable();
        rock5.body.setVelocityY(300);

        heart = this.add.image(610, 0, 'heart');
        this.physics.add.existing(heart);
        heart.body.setAllowGravity(false);
        heart.body.setImmovable();
        heart.body.setVelocityY(300);

        this.physics.add.collider(player, rock1, function (_player, _rock1)
        {
            lives -= 1;
            player.setPosition(175, 300);
            player.body.setVelocityX(0);
        }
        );

        this.physics.add.collider(player, rock2, function (_player, _rock2)
        {
            lives -= 1;
            player.setPosition(175, 300);
            player.body.setVelocityX(0);
        }
        );

        this.physics.add.collider(player, rock3, function (_player, _rock3)
        {
            lives -= 1;
            player.setPosition(175, 300);
            player.body.setVelocityX(0);
        }
        );

        this.physics.add.collider(player, rock4, function (_player, _rock4)
        {
            lives -= 1;
            player.setPosition(175, 300);
            player.body.setVelocityX(0);
        }
        );

        this.physics.add.collider(player, rock5, function (_player, _rock5)
        {
            lives -= 1;
            player.setPosition(175, 300);
            player.body.setVelocityX(0);
        }
        );

        this.physics.add.collider(heart, player, function (_heart, _player)
        {
            lives += 1;
            heart.setPosition(Math.floor((Math.random() * 300) + 30), 800);
        }
        );

        gameOverButton = this.add.image(-100, -100, 'gameover');
        this.physics.add.existing(gameOverButton);
        gameOverButton.body.setAllowGravity(false);
        gameOverButton.body.setImmovable();

        playAgainButton = this.add.image(-100, -100, 'replay1');
        this.physics.add.existing(playAgainButton);
        playAgainButton.body.setAllowGravity(false);
        playAgainButton.body.setImmovable();
        playAgainButton.setInteractive();
        playAgainButton.on('pointerdown', () => {
            playAgainButton2.setPosition(176, 450);
        });
        playAgainButton.on('pointerup', () => {
            lives = 3;
            startdate = new Date();
            gameOverButton.setPosition(-100, -100);
            playAgainButton.setPosition(-100, -100);
            player.setPosition(100, 100);
            playAgainButton2.setPosition(-100, -100);
            finalScore.setText('');
            highScoreText.setText('');
        });

        playAgainButton2 = this.add.image(-100, -100, 'replay2');

        showingHearts = heart1;

        finalScore = this.add.text(110, 295, '', { fontStyle: 'bold', fontFamily: 'MS PGothic', fontSize: '30px', fill: '#55A3E8' });
        highScoreText = this.add.text(75, 350, '', { fontStyle: 'bold', fontFamily: 'MS PGothic', fontSize: '30px', fill: '#55A3E8' });

    }

    update(){

        //Showing lives left (displaying hearts).
        if (lives == 10) {
            showingHearts = heart10;
            heart9.setPosition(-100, -100);
        }
        else if (lives == 9) {
            showingHearts = heart9;
            heart8.setPosition(-100, -100);
            heart10.setPosition(-100, -100);
        }
        else if (lives == 8) {
            showingHearts = heart8;
            heart7.setPosition(-100, -100);
            heart9.setPosition(-100, -100);
        }
        else if (lives == 7) {
            showingHearts = heart7;
            heart6.setPosition(-100, -100);
            heart8.setPosition(-100, -100);
        }
        else if (lives == 6) {
            showingHearts = heart6;
            heart5.setPosition(-100, -100);
            heart7.setPosition(-100, -100);
        }
        else if (lives == 5) {
            showingHearts = heart5;
            heart4.setPosition(-100, -100);
            heart6.setPosition(-100, -100);
        }
        else if (lives == 4) {
            showingHearts = heart4;
            heart3.setPosition(-100, -100);
            heart5.setPosition(-100, -100);
        }
        else if (lives == 3) {
            showingHearts = heart3;
            heart1.setPosition(-100, -100);
            heart2.setPosition(-100, -100);
            heart4.setPosition(-100, -100);
        }
        else if (lives == 2) {
            showingHearts = heart2;
            heart1.setPosition(-100, -100);
            heart3.setPosition(-100, -100);
        }
        else if (lives == 1) {
            showingHearts = heart1;
            heart2.setPosition(-100, -100);
        }

        //Animating sprite directions.
        if (player.body.velocity.x > 0) {
            player.setScale(1, 1);
            player.setOrigin(0.5, 0.5);

            if (direction !== 'right') {
                player.x += 20;
                direction = 'right';
            }
        }

        else if (player.body.velocity.x < 0) {
            player.setScale(-1, 1);
            player.setOrigin(1.5, 0.5);

            if (direction !== 'left') {
                player.x -= 20;
                direction = 'left';
            }
        }

        //Buttons.
        if (lives < 1) {
          gameOverButton.setPosition(176, 220);
          playAgainButton.setPosition(176, 450);
          player.setPosition(-100, -100);

          //Recording scores.
          if (diff > 0) {
            finalScore.setText('Time : ' + (diff/1000).toFixed(0) + 's');
            if (diff > highScore) {
                localStorage.setItem("highscore", diff);
                highScore = parseInt(localStorage.getItem("highscore"));
            }
            highScoreText.setText('High score : ' + (highScore/1000).toFixed(0) + 's');
          }

          //Resetting time
          diff = 0;
        }

        //Timer.
        if (lives > 0) {
            today = new Date();
            diff = Math.abs(today - startdate);
        }

        if (diff >= 0) {
            time_count.setText((diff/1000).toFixed(0));
        }

        if (diff < 250000) {
            max_velocity = 200 + (diff/250000) * 450;
        }

        else if (diff > 250000 && diff < 315000){
            max_velocity = 780;
        }

        else {
            max_velocity = 900;
        }

        //Positioning hearts.
        if (diff > 0 && diff < 9500) {
            showingHearts.setPosition(168, 270);
        }

        else if (diff > 9500 && diff < 95000) {
            showingHearts.setPosition(175, 270);
        }

        else if (diff > 95000 && diff < 950000) {
            showingHearts.setPosition(182, 270);
        }

        else if (diff > 950009 && diff < 9500000) {
            showingHearts.setPosition(189, 270);
        }
        //
        else if (lives < 1) {
            showingHearts.setPosition(-1000, -100);
        }

        //Configuring rocks/hearts falling.

        if (heart.y > 600 && diff > 40000) {
            heart.setPosition(Math.floor((Math.random() * 300) + 30), -9000);
            heart.body.setVelocityY(Math.floor((Math.random() * 300) + 200));
        }

        if (rock1.y > 600 && lives > 0) {
            rock1.setPosition(Math.floor((Math.random() * 350) + 1), 0);
            rock1.body.setVelocityY(Math.floor((Math.random() * max_velocity) + 200));
        }

        if (rock2.y > 600 && diff > 10000) {
            rock2.setPosition(Math.floor((Math.random() * 350) + 1), 0);
            rock2.body.setVelocityY(Math.floor((Math.random() * max_velocity) + 200));
        }

        if (rock3.y > 600 && diff > 35000) {
            rock3.setPosition(Math.floor((Math.random() * 350) + 1), 0);
            rock3.body.setVelocityY(Math.floor((Math.random() * max_velocity) + 200));
        }

        if (rock4.y > 600 && diff > 80000) {
            rock4.setPosition(Math.floor((Math.random() * 350) + 1), 0);
            rock4.body.setVelocityY(Math.floor((Math.random() * max_velocity) + 200));
        }

        if (rock5.y > 600 && diff > 120000) {
            rock5.setPosition(Math.floor((Math.random() * 350) + 1), 0);
            rock5.body.setVelocityY(Math.floor((Math.random() * max_velocity) + 200));
        }

        //Player controls.
        if (cursors.up.isDown && press == 'up') {
           player.setVelocityY(-550);

           if (player.body.velocity.x > 0) {
            player.setVelocityX(-200);
           }

           else {

            if (player.body.velocity.x == 0 && player.x > 200) {
                player.setVelocityX(-200);
            }

            else {
               player.setVelocityX(200);
            }

           }

           press = 'down';
        }

        if (cursors.up.isUp) {

           if (player.y > 585.5) {
             player.setVelocityY(-550);
           }

           if (player.body.velocity.x == 0) {
             if (player.x > 200) {
                player.setVelocityX(-200);
             }
             else {
                player.setVelocityX(200);
             }
           }

           press = 'up';
        }



    }
}