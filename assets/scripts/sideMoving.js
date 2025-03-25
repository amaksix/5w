window.addEventListener('scroll', () => {
    const sideMoving = document.getElementsByClassName("about-us-image-back")[0];
    
    const scrollPosition = window.scrollY / 3;

    // Define left and right limits in viewport width (vw)
    const leftLimit = window.innerWidth * 0.14;  // 5vw (5% of the viewport width)
    const rightLimit = window.innerWidth * 0.25;  // 80vw (80% of the viewport width)

    // Constrain the movement within the limits
    const newPosition = Math.min(Math.max(scrollPosition, leftLimit), rightLimit);

    // Convert pixels to vw for setting the style
    sideMoving.style.left = `${(newPosition / window.innerWidth) * 100}vw`;
});