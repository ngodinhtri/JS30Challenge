//---press keys on the keyboard
document.addEventListener("keydown", (event) => {
  const keyCode = event.keyCode;
  start(keyCode);
});
//---click keys onscreen
const keyElements = document.querySelectorAll("div.key[data-key]");
for (let elem of keyElements) {
  const keyCode = elem.dataset.key;
  elem.addEventListener("click", () => {
    start(keyCode);
  });
}

////////////////////////////////
//---FUNCTIONS---
function start(keyCode) {
  //get the audio element has data-key = keyCode
  const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audioElement) return; //stop the code if the element is null

  playSound(keyCode);
  highlightKey(keyCode);
}

function playSound(keyCode) {
  const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
  audioElement.currentTime = 0;
  audioElement.play();
}

function highlightKey(keyCode) {
  const keyElement = document.querySelector(`div.key[data-key="${keyCode}"]`);
  //reset className
  if (keyElement.classList.contains("playing")) {
    keyElement.classList.remove("playing");
  } else {
    keyElement.classList.add("playing");
    //after transitionend, auto remove class 'playing'
    keyElement.addEventListener("transitionend", () => {
      keyElement.classList.remove("playing");
    });
  }
}
