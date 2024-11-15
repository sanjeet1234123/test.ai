function toggleIndustryRows() {
    const hiddenRows = document.querySelectorAll('.hidden-row');
    const seeAllButton = document.querySelector('.see-all-industries-wrapper h4');
    const currentScrollY = window.scrollY;

    hiddenRows.forEach(row => row.classList.toggle('visible-row'));

    if (seeAllButton.innerText === 'See all Industries') {
        seeAllButton.innerText = 'See fewer Industries';
    } else {
        seeAllButton.innerText = 'See all Industries';
    }
    window.scrollTo(0, currentScrollY);
}
