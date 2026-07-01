/* ===============================
      GLOW EFFECTS
================================= */

.glass{

    animation:glow 3s infinite alternate;

}

@keyframes glow{

    from{

        box-shadow:0 0 20px rgba(0,220,255,.35);

    }

    to{

        box-shadow:0 0 45px rgba(0,220,255,.75);

    }

}

/* ===============================
      IMAGE EFFECT
================================= */

#slideImage:hover{

    transform:scale(1.04);

    box-shadow:0 0 40px rgba(255,255,255,.8);

}

/* ===============================
      SCROLLBAR
================================= */

::-webkit-scrollbar{

    width:10px;

}

::-webkit-scrollbar-track{

    background:#02121f;

}

::-webkit-scrollbar-thumb{

    background:#39d9ff;

    border-radius:10px;

}

/* ===============================
      MOBILE
================================= */

@media(max-width:900px){

.glass{

    padding:25px;

}

.glass h1{

    font-size:52px;

}

.glass h2{

    font-size:25px;

}

#typing{

    font-size:17px;

}

#countdown{

    font-size:22px;

}

.slideshow{

    flex-direction:column;

}

#slideImage{

    width:95%;

    max-width:320px;

    height:420px;

}

.nav{

    width:50px;

    height:50px;

    font-size:22px;

}

.popup-content{

    padding:25px;

}

.popup-content p{

    font-size:16px;

}

#giftBtn,
#musicBtn{

    width:100%;

}

}

/* ===============================
      FOOTER SPACE
================================= */

.hero{

    padding-bottom:80px;

}
/* ===================================
      MUSIC PLAYER
=================================== */

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

        playing = false;

    }

});


/* ===================================
      GIFT POPUP
=================================== */

const giftBtn = document.getElementById("giftBtn");

const popup = document.getElementById("giftPopup");

const closePopup = document.getElementById("closePopup");

giftBtn.onclick = () => {

    popup.style.display = "flex";

    confetti({

        particleCount: 250,

        spread: 120,

        origin: {

            y: 0.6

        }

    });

};

closePopup.onclick = () => {

    popup.style.display = "none";

};

window.onclick = (e) => {

    if (e.target == popup) {

        popup.style.display = "none";

    }

};


/* ===================================
      FALLING SNOW
=================================== */

function createSnow() {

    const snow = document.createElement("div");

    snow.className = "snowflake";

    snow.innerHTML = "❄";

    snow.style.left = Math.random() * window.innerWidth + "px";

    snow.style.fontSize = (10 + Math.random() * 20) + "px";

    snow.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.getElementById("snow").appendChild(snow);

    setTimeout(() => {

        snow.remove();

    }, 10000);

}

setInterval(createSnow, 180);


/* ===================================
      FLOATING HEARTS
=================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💙";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (18 + Math.random() * 22) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 700);
/* ===================================
      FIREWORKS
=================================== */

function launchFireworks() {

    confetti({

        particleCount:120,

        spread:100,

        origin:{
            x:Math.random(),
            y:Math.random()*0.6
        }

    });

}

setInterval(launchFireworks,6000);


/* ===================================
      PAGE LOAD CONFETTI
=================================== */

window.addEventListener("load",()=>{

    confetti({

        particleCount:200,

        spread:140,

        origin:{
            y:0.6
        }

    });

});


/* ===================================
      CARD GLOW
=================================== */

const glass=document.querySelector(".glass");

setInterval(()=>{

glass.style.boxShadow=

`0 0 ${25+Math.random()*25}px rgba(0,220,255,.8)`;

},1200);


/* ===================================
      IMAGE FADE EFFECT
=================================== */

setInterval(()=>{

slide.style.opacity="0.5";

setTimeout(()=>{

slide.style.opacity="1";

},300);

},3000);


/* ===================================
      MUSIC AUTO PLAY
=================================== */

window.addEventListener("click",()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸ Pause Music";

playing=true;

}

},{once:true});


/* ===================================
      BIRTHDAY CAKE SURPRISE
=================================== */

setTimeout(()=>{

const cake=document.createElement("div");

cake.innerHTML="🎂";

cake.style.position="fixed";

cake.style.bottom="20px";

cake.style.left="20px";

cake.style.fontSize="70px";

cake.style.zIndex="999";

cake.style.animation="popup .8s ease";

document.body.appendChild(cake);

},5000);


/* ===================================
      LOVE QUOTES
=================================== */

const quotes=[

"❤️ You are my favourite person.",

"💙 Every day with you is special.",

"❄️ My Frozen Princess Forever.",

"🌹 Your smile lights up my world.",

"🎂 Happy Birthday My Love."

];

let q=0;

setInterval(()=>{

typing.innerHTML=quotes[q];

q++;

if(q>=quotes.length){

q=0;

}

},15000);
