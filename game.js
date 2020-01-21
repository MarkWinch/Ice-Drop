var config = {
        type: Phaser.AUTO,
        width: 350,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 1400 },
                debug: false
            }
        },
        scene: [IceDrop]
    };

var player;
var press = 'up';
var cursors;

var lives;

var finalScore;
var highScore;

if (parseInt(localStorage.getItem("highscore"))) {
    highScore = parseInt(localStorage.getItem("highscore"));
}
else {
    localStorage.setItem("highscore", "1");
    highScore = parseInt(localStorage.getItem("highscore"));
}

var highScoreText;

var showingHearts;

var heart;

var heart1;
var heart2;
var heart3;
var heart4;
var heart5;
var heart6;
var heart7;
var heart8;
var heart9;
var heart10;

var direction = 'right';

var rock1;
var rock2;
var rock3;
var rock4;
var rock5;

var gameOverButton;
var playAgainButton2;
var playAgainButton;
var startingButton;

var max_velocity;

var time_count;
var startdate;
var today;
var diff;

var game = new Phaser.Game(config);






