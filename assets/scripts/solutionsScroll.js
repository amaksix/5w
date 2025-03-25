document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".solutions-element");

    function checkElements() {
        const viewportCenter = window.innerHeight / 2;
        const activationRange = 150; // Adjust this range as needed
        let closestElement = null;
        let closestDistance = Infinity;

        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const distance = Math.abs(elementCenter - viewportCenter);

            if (distance < activationRange && distance < closestDistance) {
                closestDistance = distance;
                closestElement = element;
            }
        });

        elements.forEach(element => {
            const children = element.children;
            if (children.length >= 3) {            
                if (element === closestElement) {
                    element.classList.replace("solutions-element", "solutions-element-hover");
                    children[0].classList.replace("solution-element-content", "solution-element-content-hover");
                    children[0].classList.replace("solution-element-first", "solution-element-first-hover");
                    children[1].classList.replace("solution-element-content", "solution-element-content-hover");
                    children[2].classList.replace("solution-element-content", "solution-element-content-hover");
                    children[2].classList.replace("solution-element-third", "solution-element-third-hover");
                } else {
                    element.classList.replace("solutions-element-hover", "solutions-element");
                    children[0].classList.replace("solution-element-content-hover", "solution-element-content");
                    children[0].classList.replace("solution-element-first-hover", "solution-element-first");
                    children[1].classList.replace("solution-element-content-hover", "solution-element-content");
                    children[2].classList.replace("solution-element-content-hover", "solution-element-content");
                    children[2].classList.replace("solution-element-third-hover", "solution-element-third");
                }
            }
        });
    }

    window.addEventListener("scroll", checkElements);
    checkElements();
});