const dino = document.querySelector('.dino');
const dinoLose = document.querySelector('.dino-lose');
const dinoRun1 = document.querySelector('.dino-run1');
const dinoRun2 = document.querySelector('.dino-run2');
const cactus = document.querySelector('.dino-game__cactus');
const ground1 = document.querySelector('#ground1');
const ground2 = document.querySelector('#ground2');
const dinoGameOver = document.querySelector('.dino-game__over');
const dinoRestart = document.querySelector('.dino-game__restart');
const scorePoints = document.querySelector('.dino-game__points');
const scoreHigh = document.querySelector('.dino-game__hi');

let isJumping = false;
let hasJumped = false;
let game;
let ground;
let run;
let points = 0;
let highScore = localStorage.getItem('highScore') || 0;

// це для того щоб в нас динозаврик не пригав коли гра закінчилась
let isGameOver = false;

function updateScoreDisplay() {
    scorePoints.textContent = points.toString().padStart(5, '0');
    scoreHigh.textContent = 'HI ' + highScore.toString().padStart(5, '0');
}

function jump() {
    if (isJumping || isGameOver) return;

    isJumping = true;
    dino.style.display = 'block';
    dinoRun1.style.display = 'none';
    dinoRun2.style.display = 'none';
    dino.classList.add('jump');

    setTimeout(() => {
        dino.classList.remove('jump');
        isJumping = false;
    }, 700);

    if (!hasJumped) {
        hasJumped = true;
        setTimeout(() => {
            cactus.classList.add('move');
            startGroundLoop();
            startGame();
            startRunningAnimation();
        }, 200);
    }
}

function startGroundLoop() {
    let ground1Left = 0;
    let ground2Left = 100;

    ground = setInterval(() => {
        ground1Left -= 1;
        ground2Left -= 1;

        if (ground1Left <= -100) {
            ground1Left = 100;
        }

        if (ground2Left <= -100) {
            ground2Left = 100;
        }

        ground1.style.left = ground1Left + '%';
        ground2.style.left = ground2Left + '%';
    }, 20);
}

function startGame() {
    game = setInterval(() => {
        const dinoRect = dino.getBoundingClientRect();
        const dinoRun1Rect = dinoRun1.getBoundingClientRect();
        const dinoRun2Rect = dinoRun2.getBoundingClientRect();
        const cactusRect = cactus.getBoundingClientRect();

        console.log('Dino:', dinoRect);
        console.log('Cactus:', cactusRect);

        if (isCollision(dinoRect, cactusRect) ||
            isCollision(dinoRun1Rect, cactusRect) ||
            isCollision(dinoRun2Rect, cactusRect)) {
            console.log('Collision detected!');
            gameOver();
        } else {
            points++;
            updateScoreDisplay();
        }
    }, 50);
}

function startRunningAnimation() {
    let toggle = true;
    run = setInterval(() => {
        if (!isJumping) {
            dino.style.display = 'none';
            dinoRun1.style.display = toggle ? 'block' : 'none';
            dinoRun2.style.display = toggle ? 'none' : 'block';
            toggle = !toggle;
        }
    }, 120);
}

function isCollision(dinoRect, cactusRect) {
    const dinoHitbox = {
        left: dinoRect.left + 5,
        right: dinoRect.right - 5,
        top: dinoRect.top + 5,
        bottom: dinoRect.bottom - 5
    };
    const cactusHitbox = {
        left: cactusRect.left + 5,
        right: cactusRect.right - 5,
        top: cactusRect.top + 5,
        bottom: cactusRect.bottom - 5
    };

    return !(dinoHitbox.right < cactusHitbox.left ||
        dinoHitbox.left > cactusHitbox.right ||
        dinoHitbox.bottom < cactusHitbox.top ||
        dinoHitbox.top > cactusHitbox.bottom);
}
function gameOver() {
    isGameOver = true;
    clearInterval(game);
    clearInterval(ground);
    clearInterval(run);

    cactus.classList.remove('move');
    // cactus.style.left = "617px";
    ground1.style.left = '0%';
    ground2.style.left = '100%';
    dinoGameOver.style.display = 'block';
    dinoRestart.style.display = 'block';
    dino.classList.remove('jump');
    dino.style.display = 'none';
    dinoLose.style.display = 'flex';


    if (points > highScore) {
        highScore = points;
        localStorage.setItem('highScore', highScore);
    }
}

function resetGame() {
    isGameOver = false;
    points = 0;
    updateScoreDisplay();
    dinoGameOver.style.display = 'none';
    dinoRestart.style.display = 'none';
    hasJumped = false;
    cactus.classList.remove('move');
    cactus.style.left = '100%';
    dino.style.display = 'flex';
    dinoLose.style.display = 'none';
    jump();
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isGameOver) {
        jump();
    }
});

document.querySelector('.dino-game').addEventListener('click', (event) => {
    if (!isGameOver) {
        jump();
    }
});
dinoRestart.addEventListener('click', resetGame);
updateScoreDisplay();