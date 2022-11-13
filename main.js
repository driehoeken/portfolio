const circle = document.querySelector(".circle");
const circleRect = circle.getBoundingClientRect();
const circlePos = {
    x: circleRect.x + (circleRect.right - circleRect.x) / 2,
    y: circleRect.y + (circleRect.left - circleRect.y) / 2,
};
