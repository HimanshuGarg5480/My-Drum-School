var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
);
}
document.addEventListener("keypress",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sound/sounds_tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sound/sounds_tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sound/sounds_tom-3.mp3");
            tom3.play();
            break
        case "d":
            var tom4 = new Audio("sound/sounds_tom-4.mp3");
            tom4.play();
            break
        case "j":
            var crash = new Audio("sound/sounds_crash.mp3");
            crash.play();
            break;
        case "k":
            var snare = new Audio("sound/sounds_snare.mp3");
            snare.play();
            break;
        case "l":
            var kick = new Audio("sound/sounds_kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);         
    }
}

function buttonAnimation(keypressed){
    var key = document.querySelector("."+keypressed);
    key.classList.add("pressed");
    setTimeout(function(){
        key.classList.remove("pressed");
    },100);
}





