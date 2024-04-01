document.addEventListener("DOMContentLoaded", function() {
    const changeColorButton = document.getElementById("changeColorButton");
    
    changeColorButton.addEventListener("click", function() {
        const colors = ["#ff5733", "#33ff57", "#5733ff", "#33fff3", "#f333ff"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});
