function changeBackgroundColor() {
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#33fff3", "#f333ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
