document.addEventListener("scroll", function() {
    const tapeRoll = document.querySelector(".tape-roll");
    const scrollPosition = window.scrollY;
    
    // Modify tape roll position based on scroll
    tapeRoll.style.left = `${scrollPosition * 0.2}px`; // Adjust movement speed
});
