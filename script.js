const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJump = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (! isJump) {
          jump();
        }
    }
}

function jump() {
    isJump = true;

    let = upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval)
            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJump = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }else {

        }
        //subindo
        position += 20; 
        dino.style.bottom = position + 'px';


    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randonTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.let = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {

        clearInterval(leftInterval);
        document.body.innerHTML = '<h1 class="GameOver">Fim de Jogo</h1>';
        } else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randonTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);