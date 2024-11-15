function setEqualHeight(selector) {
    const elements = document.querySelectorAll(selector);
    let maxHeight = 0;
    elements.forEach(element => {
        element.style.height = 'auto';
    });
    elements.forEach(element => {
        maxHeight = Math.max(maxHeight, element.offsetHeight);
    });
    elements.forEach(element => {
        element.style.height = `${maxHeight}px`;
    });
}

function setHeightsForClasses() {
    setEqualHeight('.industry-content-wrapper');
    setEqualHeight('.tab-content-wrapper');
    setEqualHeight('.industry-content-wrapper-third');
}

window.addEventListener('load', setHeightsForClasses);

window.addEventListener('resize', setHeightsForClasses);
