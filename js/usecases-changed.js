document.addEventListener("DOMContentLoaded", function () {
    const usecaseWrappers = document.querySelectorAll(".usecases-progress-wrapper");
    const usecaseContents = document.querySelectorAll(".usecases-progress-content");
    const topProgressBars = document.querySelectorAll(".top-progress-bar");

    // Function to show content based on ID
    function showContentById(id) {
        // Hide all content sections
        usecaseContents.forEach(content => {
            content.classList.remove("active-content");
        });

        // Show the selected content section
        const selectedContent = document.querySelector(`.usecases-progress-content[data-id="${id}"]`);
        if (selectedContent) {
            selectedContent.classList.add("active-content");
            console.log("Content found for ID:", id); // Debugging log
        } else {
            console.log("No content found for ID:", id); // Debugging log if content not found
        }
    }

    // Set default view for ID 1 and default color for top-progress-bar
    showContentById("1");
    topProgressBars.forEach(bar => {
        bar.style.backgroundColor = "white"; // Default color for all progress bars
    });
    // Set the color of the first progress bar to #338FAC by default
    const defaultBar = document.querySelector(`.usecases-progress-wrapper[data-id="1"] .top-progress-bar`);
    if (defaultBar) {
        defaultBar.style.backgroundColor = "#338FAC"; // Default color for ID 1
    }

    // Function to change the color of top-progress-bar based on clicked ID
    function updateProgressBarColor(id) {
        topProgressBars.forEach(bar => {
            bar.style.backgroundColor = "white"; // Reset all progress bars to white
        });

        // Change color of clicked top-progress-bar
        const clickedBar = document.querySelector(`.usecases-progress-wrapper[data-id="${id}"] .top-progress-bar`);
        if (clickedBar) {
            clickedBar.style.backgroundColor = "#338FAC"; // Set the clicked item color to #338FAC
        }
    }

    usecaseWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", function (event) {
            const targetWrapper = event.target.closest(".usecases-progress-wrapper");
            const id = targetWrapper ? targetWrapper.getAttribute("data-id") : null;

            console.log("Clicked ID:", id); // Debugging log

            if (id) {
                showContentById(id); // Show content for clicked ID
                updateProgressBarColor(id); // Change color for clicked progress bar
            } else {
                console.log("No valid ID found for this click event."); // Debugging log if no ID
            }
        });
    });
});
