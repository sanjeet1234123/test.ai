let myArray = document.getElementsByClassName('animated-section-fadinup');
for (let i = 0; i < myArray.length; i++) {
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            myArray[i].classList.add('fadeinup');
        }
    }, { threshold: [0.3] });
    observer.observe(myArray[i]);
}

let myArray1 = document.getElementsByClassName('animated-section-fadecross');
for (let i = 0; i < myArray1.length; i++) {
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            myArray1[i].classList.add('fadecross');
        }
    }, { threshold: [0.5] });
    observer.observe(myArray1[i]);
}