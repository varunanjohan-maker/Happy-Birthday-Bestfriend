/* ===========================
   PHOTO SLIDESHOW
=========================== */

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg",
    "photo10.jpg"
];

let current = 0;

const slide = document.getElementById("slideImage");
const dots = document.querySelectorAll(".dot");

function showSlide(index){

    if(index >= photos.length){
        current = 0;
    }else if(index < 0){
        current = photos.length - 1;
    }else{
        current = index;
    }

    slide.src = photos[current];

    dots.forEach(dot => dot.classList.remove("active"));
    dots[current].classList.add("active");
}

function nextSlide(){
    showSlide(current + 1);
}

function prevSlide(){
    showSlide(current - 1);
}

setInterval(nextSlide,3000);

/* ===========================
   TYPEWRITER
=========================== */

const message =
`Happy Birthday My Gopzz ❤️

May your birthday be filled with happiness,
love, laughter and beautiful memories.

You are truly special to me.

Happy Birthday My Frozen Princess ❄️💙`;

const typing = document.getElementById("typing");

let letter = 0;

function typeWriter(){

    if(letter < message.length){

        typing.innerHTML += message.charAt(letter);

        letter++;

        setTimeout(typeWriter,40);

    }

}

typeWriter();

/* ===========================
   COUNTDOWN
=========================== */

const birthday = new Date("July 3, 2026 00:00:00").getTime();

const countdown = document.getElementById("countdown");

setInterval(()=>{

    const now = new Date().getTime();

    const distance = birthday - now;

    if(distance < 0){

        countdown.innerHTML = "🎉 Happy Birthday Gopzz ❤️";

        return;

    }

    const d = Math.floor(distance/(1000*60*60*24));

    const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const m = Math.floor((distance%(1000*60*60))/60000);

    const s = Math.floor((distance%60000)/1000);

    countdown.innerHTML =
    `${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;

},1000);
/* ===========================
   MUSIC PLAYER
=========================== */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", function(){

    if(!playing){

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

        playing = true;

    }else{

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

        playing = false;

    }

});


/* ===========================
   GIFT POPUP
=========================== */

const giftBtn = document.getElementById("giftBtn");
const popup = document.getElementById("giftPopup");
const closePopup = document.getElementById("closePopup");

giftBtn.onclick = function(){

    popup.style.display = "flex";

    confetti({

        particleCount:200,

        spread:120,

        origin:{ y:0.6 }

    });

};

closePopup.onclick = function(){

    popup.style.display = "none";

};

window.onclick = function(event){

    if(event.target == popup){

        popup.style.display = "none";

    }

};


/* ===========================
   FALLING SNOW
=========================== */

function createSnow(){

    const snow = document.createElement("div");

    snow.className = "snowflake";

    snow.innerHTML = "❄";

    snow.style.left = Math.random()*window.innerWidth + "px";

    snow.style.fontSize = (10 + Math.random()*18) + "px";

    snow.style.animationDuration = (5 + Math.random()*5) + "s";

    document.getElementById("snow").appendChild(snow);

    setTimeout(function(){

        snow.remove();

    },10000);

}

setInterval(createSnow,180);


/* ===========================
   FLOATING HEARTS
=========================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💙";

    heart.style.left = Math.random()*window.innerWidth + "px";

    heart.style.fontSize = (18 + Math.random()*20) + "px";

    heart.style.animationDuration = (5 + Math.random()*4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },9000);

}

setInterval(createHeart,700);
/* ===========================
   PAGE LOAD CONFETTI
=========================== */

window.addEventListener("load", function(){

    if(typeof confetti === "function"){

        confetti({
            particleCount: 180,
            spread: 100,
            origin: { y: 0.6 }
        });

    }

});

/* ===========================
   FIREWORKS
=========================== */

function launchFireworks(){

    if(typeof confetti !== "function") return;

    confetti({

        particleCount:80,

        spread:70,

        startVelocity:45,

        origin:{
            x:Math.random(),
            y:Math.random()*0.5
        }

    });

}

setInterval(launchFireworks,6000);


/* ===========================
   IMAGE FADE EFFECT
=========================== */

setInterval(function(){

    slide.style.opacity="0.5";

    setTimeout(function(){

        slide.style.opacity="1";

    },300);

},3000);


/* ===========================
   AUTO PLAY MUSIC
=========================== */

window.addEventListener("click",function(){

    if(!playing){

        music.play().catch(function(){});

        musicBtn.innerHTML="⏸ Pause Music";

        playing=true;

    }

},{once:true});


/* ===========================
   BIRTHDAY CAKE
=========================== */

setTimeout(function(){

    const cake=document.createElement("div");

    cake.innerHTML="🎂";

    cake.style.position="fixed";
    cake.style.left="20px";
    cake.style.bottom="20px";
    cake.style.fontSize="70px";
    cake.style.zIndex="999";

    document.body.appendChild(cake);

},5000);


/* ===========================
   INITIAL SLIDE
=========================== */

showSlide(0);
