function toggleAccordion(event) {
    const icon = event.currentTarget;
    const dropdownContent = icon.closest('li').querySelector('.dropdown-content-mobile'); 

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none"; 
        icon.style.transform = "rotate(0deg)";
    } else {
        dropdownContent.style.display = "block";
        icon.style.transform = "rotate(180deg)";
    }
}
function handleResize() {
    const dropdowns = document.querySelectorAll('.dropdown-content-mobile');
    const icons = document.querySelectorAll('.dropdown-icon');

    if (window.innerWidth > 1023) {
        dropdowns.forEach(dropdown => {
            dropdown.style.display = "none";
        });
        icons.forEach(icon => {
            icon.style.transform = "rotate(0deg)";
        });
    }
}
window.addEventListener('resize', handleResize);
