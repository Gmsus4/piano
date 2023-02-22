const btnClick = document.querySelectorAll('.btn');
/* C3  */
const audioC3 = document.querySelector(".audioc3");
const audioC3A = document.querySelector(".audioc3a");
const audioD3 = document.querySelector(".audiod3");
const audioD3A = document.querySelector(".audiod3a");
const audioE3 = document.querySelector(".audioe3");
const audioF3 = document.querySelector(".audiof3");
const audioF3A = document.querySelector(".audiof3a");
const audioG3 = document.querySelector(".audiog3");
const audioG3A = document.querySelector(".audiog3a");
const audioA3 = document.querySelector(".audioa3");
const audioA3A = document.querySelector(".audioa3a");
const audioB3 = document.querySelector(".audiob3");

/* C4 A C5 */
const audioC = document.querySelector(".audioc");
const audioCA = document.querySelector(".audioca");
const audioD = document.querySelector(".audiod");
const audioDA = document.querySelector(".audioda");
const audioE = document.querySelector(".audioe");
const audioF = document.querySelector(".audiof");
const audioFA = document.querySelector(".audiofa");
const audioG = document.querySelector(".audiog");
const audioGA = document.querySelector(".audioga");
const audioA = document.querySelector(".audioa");
const audioAA = document.querySelector(".audioaa");
const audioB = document.querySelector(".audiob");
const audioC5 = document.querySelector('.audioc5');

const colors = document.querySelectorAll('.fa-fill-drip');
colors.forEach((e)=>{
    e.addEventListener('click', ()=>{
        switch (e.classList[2]){
            case 'cdb4db':
                document.documentElement.style.setProperty('--color', `#cdb4db`);
                break;
            case 'ffc8dd':
                document.documentElement.style.setProperty('--color', `#ffc8dd`);
                break;
            case 'ffafcc':
                document.documentElement.style.setProperty('--color', `#ffafcc`);
                break;
            case 'bde0fe':
                document.documentElement.style.setProperty('--color', `#bde0fe`);
                break;
        }
       console.log(e.classList[2]);
    });
});

function press(e){
    e.classList.add('press');

    const img = document.createElement('img');
    img.src = './img/CHEEMS.png';
    img.style.width = '100%';
    e.appendChild(img);

    setTimeout(function(){
        e.classList.remove('press');
        e.removeChild(e.firstElementChild);
    }, 200);
}

function documentSelector(name){
    const names = document.querySelector(`.${name}`);
    press(names);
}

function pause(){ //Pausar los sonidos
    /* C3  */
    audioC3.pause();//C
    audioC3.currentTime = 0;
    audioC3A.pause();//C#
    audioC3A.currentTime = 0;
    audioD3.pause();//D
    audioD3.currentTime = 0;
    audioD3A.pause();//D#
    audioD3A.currentTime = 0;
    audioE3.pause();//E
    audioE3.currentTime = 0;
    audioF3.pause();//F
    audioF3.currentTime = 0;
    audioF3A.pause();//F#
    audioF3A.currentTime = 0;
    audioG3.pause();//G
    audioG3.currentTime = 0;
    audioG3A.pause();//G#
    audioG3A.currentTime = 0;
    audioA3.pause();//A
    audioA3.currentTime = 0;
    audioA3A.pause();//A#
    audioA3A.currentTime = 0;
    audioB3.pause();//B
    audioB3.currentTime = 0;


    /* C4 A C5 */
    audioC.pause();//C
    audioC.currentTime = 0;
    audioCA.pause();//C#
    audioCA.currentTime = 0;
    audioD.pause();//D
    audioD.currentTime = 0;
    audioDA.pause();//D#
    audioDA.currentTime = 0;
    audioE.pause();//E
    audioE.currentTime = 0;
    audioF.pause();//F
    audioF.currentTime = 0;
    audioFA.pause();//F#
    audioFA.currentTime = 0;
    audioG.pause();//G
    audioG.currentTime = 0;
    audioGA.pause();//G#
    audioGA.currentTime = 0;
    audioA.pause();//A
    audioA.currentTime = 0;
    audioAA.pause();//A#
    audioAA.currentTime = 0;
    audioB.pause();//B
    audioB.currentTime = 0;
    audioC5.pause();//C5
    audioC5.currentTime = 0;
}

btnClick.forEach(function(e){ //Al hacer click en una tecla
    e.addEventListener('click',()=>{
        switch (e.classList[1]){
            /* C3  */
            case 'c3':
                pause();
                audioC3.play(); //OK C
                press(e);
            break;
            case 'c3a':
                pause();
                audioC3A.play(); //OK C#
                press(e);
            break;
            case 'd3':
                pause();
                audioD3.play(); //OK D
                press(e);
            break;
            case 'd3a':
                pause();
                audioD3A.play(); //OK D#
                press(e);
            break;
            case 'e3':
                pause();
                audioE3.play(); //OK E
                press(e);
            break;
            case 'f3':
                pause();
                audioF3.play(); //OK F
                press(e);
            break;
            case 'f3a':
                pause();
                audioF3A.play(); //OK F#
                press(e);
            break;
            case 'g3':
                pause();
                audioG3.play(); //OK G
                press(e);
            break;
            case 'g3a':
                pause();
                audioG3A.play(); //OK G#
                press(e);
            break;
            case 'a3':
                pause();
                audioA3.play(); //OK A
                press(e);
            break;
            case 'a3a':
                pause();
                audioA3A.play(); //OK A#
                press(e);
            break;
            case 'b3':
                pause();
                audioB3.play(); //OK B
                press(e);
            break;


            /* C4 A C5 */
            case 'c':
                pause();
                audioC.play(); //OK C
                press(e);
            break;
            case 'ca':
                pause();
                audioCA.play(); //OK C#
                press(e);
            break;
            case 'd':
                pause();
                audioD.play(); //OK D
                press(e);
            break;
            case 'da':
                pause();
                audioDA.play(); //OK D#
                press(e);
            break;
            case 'e':
                pause();
                audioE.play(); //OK E
                press(e);
            break;
            case 'f':
                pause();
                audioF.play(); //OK F
                press(e);
            break;
            case 'fa':
                pause();
                audioFA.play(); //OK F#
                press(e);
            break;
            case 'g':
                pause();
                audioG.play(); //OK G
                press(e);
            break;
            case 'ga':
                pause();
                audioGA.play(); //OK G#
                press(e);
            break;
            case 'a':
                pause();
                audioA.play(); //OK A
                press(e);
            break;
            case 'aa':
                pause();
                audioAA.play(); //OK A#
                press(e);
            break;
            case 'b':
                pause();
                audioB.play(); //OK B
                press(e);
            break;
            case 'c5':
                pause();
                audioC5.play(); //OK C5
                press(e);
            break;
        }
    });
});

document.addEventListener('keydown',(e)=>{ //Al presionar una tecla de la pc
    console.log(e.code);
    switch(e.code){
        /* C3 */
        case 'KeyZ'://C
            pause();
            audioC3.play(); //OK
            documentSelector('c3');
        break;
        case 'KeyS'://C#
            pause();
            audioC3A.play(); //OK
            documentSelector('c3a');
        break;
        case 'KeyX'://D
            pause();
            audioD3.play(); //OK
            documentSelector('d3');
        break;
        case 'KeyD'://D#
            pause();
            audioD3A.play(); //OK
            documentSelector('d3a');
        break;
        case 'KeyC': //E
            pause();
            audioE3.play(); //OK
            documentSelector('e3');
        break;
        case 'KeyV'://F
            pause();
            audioF3.play(); //OK
            documentSelector('f3');
        break;
        case 'KeyG'://F#
            pause();
            audioF3A.play(); //OK
            documentSelector('f3a');
        break;
        case 'KeyB': //G
            pause();
            audioG3.play(); //OK
            documentSelector('g3');
        break;
        case 'KeyH': //G#
            pause();
            audioG3A.play(); //OK
            documentSelector('g3a');
        break;
        case 'KeyN': //A
            pause();
            audioA3.play(); //OK
            documentSelector('a3');
        break;
        case 'KeyJ': //A#
            pause();
            audioA3A.play(); //OK
            documentSelector('a3a');
        break;
        case 'KeyM': //B
            pause();
            audioB3.play(); //OK
            documentSelector('b3');
        break;

        /* C4 A C5 */
        case 'KeyQ'://C
            pause();
            audioC.play(); //OK
            documentSelector('c');
        break;
        case 'Digit2'://C#
            pause();
            audioCA.play(); //OK
            documentSelector('ca');
        break;
        case 'KeyW'://D
            pause();
            audioD.play(); //OK
            documentSelector('d');
        break;
        case 'Digit3'://D#
            pause();
            audioDA.play(); //OK
            documentSelector('da');
        break;
        case 'KeyE': //E
            pause();
            audioE.play(); //OK
            documentSelector('e');
        break;
        case 'KeyR'://F
            pause();
            audioF.play(); //OK
            documentSelector('f');
        break;
        case 'Digit5'://F#
            pause();
            audioFA.play(); //OK
            documentSelector('fa');
        break;
        case 'KeyT': //G
            pause();
            audioG.play(); //OK
            documentSelector('g');
        break;
        case 'Digit6': //G#
            pause();
            audioGA.play(); //OK
            documentSelector('ga');
        break;
        case 'KeyY': //A
            pause();
            audioA.play(); //OK
            documentSelector('a');
        break;
        case 'Digit7': //A#
            pause();
            audioAA.play(); //OK
            documentSelector('aa');
        break;
        case 'KeyU': //B
            pause();
            audioB.play(); //OK
            documentSelector('b');
        break;
        case 'KeyI': //C5
            pause();
            audioC5.play(); //OK
            documentSelector('c5');
        break;
        case 'Space':
            pause();
        break;
    }
});