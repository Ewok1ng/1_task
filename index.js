const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

function formatTime(seconds) {
    let time = seconds;

    const hh = Math.floor(time / 3600);
    time = time - hh * 3600;
    const mm = Math.floor(time / 60);
    time = time - mm * 60;
    const ss = seconds % 60;

    return `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`;
}

const createTimerAnimator = () => {
    return (seconds) => {
        let time = seconds;
        const interval = setInterval(() => {
            if (time <= 0) clearInterval(interval);
            timerEl.textContent = formatTime(time);
            time = time - 1;
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
    if (Number.isNaN(Number(e.data)) || e.data === ' ') {
        console.log(Number(e.data));
        e.target.value = e.target.value.slice(0, -1);
    }
    // Очистите input так, чтобы в значении
    // оставались только числа
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});
