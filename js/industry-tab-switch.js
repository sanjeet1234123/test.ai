document.addEventListener("DOMContentLoaded", function () {
    // Get all the tab switches
    const tabSwitches = document.querySelectorAll(".tab-switch-values");
    // Get all content groups
    const contentGroups = document.querySelectorAll(".content-group");

    // Function to reset all tabs and content
    function resetTabs() {
        tabSwitches.forEach(tab => {
            tab.classList.remove("active"); // Remove active class from all tabs
        });
        contentGroups.forEach(content => {
            content.style.display = "none"; // Hide all content groups
        });
    }

    // Function to activate tab and corresponding content
    function activateTab(tabIndex) {
        tabSwitches[tabIndex].classList.add("active"); // Add active class to clicked tab
        contentGroups[tabIndex].style.display = "flex"; // Show corresponding content group
    }

    // Initialize first tab as active
    resetTabs();
    activateTab(0);

    // Add click event listeners to all tabs
    tabSwitches.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            resetTabs(); // Reset all tabs and content
            activateTab(index); // Activate clicked tab and content group
        });
    });
});
