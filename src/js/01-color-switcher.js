function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyStyle = document.querySelector('body')
bodyStyle.style.textAlign = "center";
const btnStart = bodyStyle.querySelector("[data-start]")
const btnStop = bodyStyle.querySelector("[data-stop]")

let timerId = null;

btnStop.disabled = true;

const clickStart = () => {
    timerId = setInterval(() => {
        bodyStyle.style.backgroundColor = getRandomHexColor()
        
    }, 1000);

    btnStart.disabled = true;
    btnStop.disabled = false;
    console.log( btnStop.disabled)
}
btnStart.addEventListener('click', clickStart);
btnStop.addEventListener('click', (event) => {
    clearInterval(timerId);
    btnStart.disabled =false;
    btnStop.disabled =  true;
   
});

