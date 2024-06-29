(function() {
    document.addEventListener("mousemove", parallax);

    function parallax(e) {
        let w = window.innerWidth / 2;
        let h = window.innerHeight / 2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        let x = depth1;
        console.log(x);
        document.getElementById("description").style.backgroundPosition = x;
        document.getElementById("title").style.backgroundPosition = x;
    }
})();