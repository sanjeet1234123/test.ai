document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".lifecycle-card-wrapper");
    cards.forEach(card => {
        card.addEventListener("click", function () {
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    const otherDescription = otherCard.querySelector(".lifecycle-card-description");
                    otherDescription.classList.remove("active");
                    const otherArrow = otherCard.querySelector(".arrow");
                    otherArrow.classList.remove("rotate");
                }
            });
            const description = this.querySelector(".lifecycle-card-description");
            description.classList.toggle("active");
            const arrow = this.querySelector(".arrow");
            arrow.classList.toggle("rotate");
        });
    });
});
