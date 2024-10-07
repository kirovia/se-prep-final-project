const topLeft = document.getElementById(`top-left`);
const topLeftText = topLeft.querySelector(`p`);

const topRight = document.getElementById(`top-right`);
const topRightText = topRight.querySelector(`p`);

const bottomLeft = document.getElementById(`bottom-left`);
const bottomLeftText = bottomLeft.querySelector(`p`);

const bottomRight = document.getElementById(`bottom-right`);
const bottomRightText = bottomRight.querySelector(`p`);

const div = document.querySelectorAll(`div`);


let topLeftToggle = 0;
let topRightToggle = 0;
let bottomLeftToggle = 0;
let bottomRightToggle = 0;


topLeft.addEventListener('click', function() {
    if (topLeftToggle === 0) {
        topLeftText.style.display = 'block';
        topLeftToggle += 1;
    } else {
        topLeftText.style.display = 'none';
        topLeftToggle -= 1;
    }
});

topRight.addEventListener('click', function() {
    if (topRightToggle === 0) {
        topRightText.style.display = 'block';
        topRightToggle += 1;
    } else {
        topRightText.style.display = 'none';
        topRightToggle -= 1;
    }
});

bottomLeft.addEventListener('click', function() {
    if (bottomLeftToggle === 0) {
        bottomLeftText.style.display = 'block';
        bottomLeftToggle += 1;
    } else {
        bottomLeftText.style.display = 'none';
        bottomLeftToggle -= 1;
    }
});

bottomRight.addEventListener('click', function() {
    if (bottomRightToggle === 0) {
        bottomRightText.style.display = 'block';
        bottomRightToggle += 1;
    } else {
        bottomRightText.style.display = 'none';
        bottomRightToggle -= 1;
    }
});