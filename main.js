const sections = document.getElementsByName("section");
const currSection = 0;
document.querySelector("body").addEventListener("wheel", (e) => {
    if (e.deltaY < 0) {
        console.log("scroll up");
    } else if (e.deltaY > 0) {
        console.log("scroll down");
    }
});
