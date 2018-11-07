document.querySelectorAll("button").forEach((el) => {
    el.onmouseover = function () {
        this.style.color = "#333";
    }
})