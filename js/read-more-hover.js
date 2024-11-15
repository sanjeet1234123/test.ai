// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Select all the read-more-button elements
    const readMoreButtons = document.querySelectorAll('.read-more-button');

    // Add hover effect to each read more button
    readMoreButtons.forEach(button => {
        // Hide the read-more button by default
        button.style.display = 'none';

        const parentSection = button.closest('.industry-section');

        // On hover, show the read more button
        parentSection.addEventListener('mouseover', () => {
            button.style.display = 'flex';
        });

        // On mouse leave, hide the read more button
        parentSection.addEventListener('mouseleave', () => {
            button.style.display = 'none';
        });

        // Optional: Add a click event if you want a persistent toggle on click
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });
});
