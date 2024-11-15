function loadHTML(selector, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .then(() => {
            if (selector === "#bannerblock") {
                // Once the banner is loaded, set dynamic content
                setBannerContent();
            }
        })
        .catch(error => console.error('Error loading file:', error));
}

function setBannerContent() {
    const bannerSection = document.querySelector("#bannerblock");
    const bannerImage = document.getElementById("bannerImage");
    const bannerTitle = document.getElementById("bannerTitle");
    const bannerDescription = document.getElementById("bannerDescription");

    // Get data attributes for dynamic content
    const imageSrc = bannerSection.getAttribute("data-image");
    const title = bannerSection.getAttribute("data-title");
    const description = bannerSection.getAttribute("data-description");

    // Set the banner content
    if (bannerImage && bannerTitle && bannerDescription) {
        bannerImage.src = imageSrc;
        bannerTitle.textContent = title;
        bannerDescription.textContent = description;
    }
}

function setIndustrySectionContent() {
    const industrySection = document.querySelector("#industrySectionBlock");
    const roiImage = document.getElementById("roiImage");
    const industryHeading = document.getElementById("industryHeading");
    const industryDescription = document.getElementById("industryDescription");
    const industryOverviewContainer = document.getElementById("industryOverviewContainer");

    // Get data attributes for dynamic content
    const imageSrc = industrySection.getAttribute("data-image");
    const heading = industrySection.getAttribute("data-h2");
    const description = industrySection.getAttribute("data-p");
    const items = JSON.parse(industrySection.getAttribute("data-items"));

    // Set the image, heading, and description
    if (roiImage) roiImage.src = imageSrc;
    if (industryHeading) industryHeading.textContent = heading;
    if (industryDescription) industryDescription.textContent = description;

    // Clear existing items and add new ones
    industryOverviewContainer.innerHTML = "";
    items.forEach(item => {
        const itemHTML = `
            <div class="industry-inner-wrapper">
                <div class="industry-left-wrapper">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="industry-right-wrapper">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
        industryOverviewContainer.insertAdjacentHTML("beforeend", itemHTML);
    });
}

// Load components and set content on page load
window.onload = () => {
    loadHTML("#headerblock", "header.html");
    loadHTML("#footerblock", "footer.html");
    loadHTML("#bannerblock", "common-template.html");
    // loadHTML("#industrySectionBlock", "common-template.html");
};
