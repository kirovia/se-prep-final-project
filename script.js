const topLeft = document.getElementById(`top-left`);
const topLeftText = topLeft.querySelector(`p`);

const topRight = document.getElementById(`top-right`);
const topRightText = topRight.querySelector(`p`);

const bottomLeft = document.getElementById(`bottom-left`);
const bottomLeftText = bottomLeft.querySelector(`p`);

const bottomRight = document.getElementById(`bottom-right`);
const bottomRightText = bottomRight.querySelector(`p`);

let topLeftToggle = 0;
let topRightToggle = 0;
let bottomLeftToggle = 0;
let bottomRightToggle = 0;


topLeft.addEventListener('click', function() {
    if (topLeftToggle === 0) {
        topLeftText.style.opacity = '100%';
        topLeftToggle += 1;
    } else {
        topLeftText.style.opacity = '0%';
        topLeftToggle -= 1;
    }
});

topRight.addEventListener('click', function() {
    if (topRightToggle === 0) {
        topRightText.style.opacity = '100%';
        topRightToggle += 1;
    } else {
        topRightText.style.opacity = '0%';
        topRightToggle -= 1;
    }
});

bottomLeft.addEventListener('click', function() {
    if (bottomLeftToggle === 0) {
        bottomLeftText.style.opacity = '100%';
        bottomLeftToggle += 1;
    } else {
        bottomLeftText.style.opacity = '0%';
        bottomLeftToggle -= 1;
    }
});

bottomRight.addEventListener('click', function() {
    if (bottomRightToggle === 0) {
        bottomRightText.style.opacity = '100%';
        bottomRightToggle += 1;
    } else {
        bottomRightText.style.opacity = '0%';
        bottomRightToggle -= 1;
    }
});