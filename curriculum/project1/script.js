const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId; 

const startChange = () => {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
};

const stopChange = () => {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChange);
document.querySelector('#stop').addEventListener('click', stopChange);