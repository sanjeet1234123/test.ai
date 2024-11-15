let els = document.querySelectorAll(".nav-li");

function showMenu() {
 if(els.length < 1){
  els = document.querySelectorAll(".nav-li");
 }
  els.forEach((el, i) => {    
    if (i > 0) {
      if (el.style.display === "" || el.style.display === "none") {
        el.style.display = "flex";
        document.querySelector(".header").style.display = "block";
        let element = document.getElementById("headerblock");
        element.classList.add("headershadow");
        document.getElementById("colorHamburgerMobile").style.display = "none";
        document.getElementById("uncolorHamburgerMobile").style.display =
          "block";
        document.getElementById("colorLogoMobile").style.display = "none";
        document.getElementById("uncolorLogoMobile").style.display = "block";
      } else {
        el.style.display = "none";
        document.querySelector(".header").style.display = "";
        let element = document.getElementById("headerblock");
        element.classList.remove("headershadow");
        if (window.pageYOffset >= 10) {
          element.classList.add("headershadow");
          document.getElementById("colorHamburgerMobile").style.display =
            "none";
          document.getElementById("uncolorHamburgerMobile").style.display =
            "block";

          document.getElementById("colorLogoMobile").style.display = "none";
          document.getElementById("uncolorLogoMobile").style.display = "block";
        } else {
          document.getElementById("colorHamburgerMobile").style.display =
            "block";
          document.getElementById("uncolorHamburgerMobile").style.display =
            "none";

          document.getElementById("colorLogoMobile").style.display = "block";
          document.getElementById("uncolorLogoMobile").style.display = "none";
        }
      }
    }
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 1023) {
    els.forEach((el, i) => i > 0 && (el.style.display = "none"));
  } else {
    els.forEach((el) => (el.style.display = "flex"));
  }
});

function showDropdown(DropdownElement) {
  let arrowElement = document.querySelectorAll(`#${DropdownElement} a`);
  let arrowImage = arrowElement[0].firstElementChild;
  arrowImage.classList.toggle("open-dropdown");
  var element = document.getElementById(DropdownElement).children[1];
  element.classList.toggle("nav-megamenuShow");
}

function showDropdownShadow() {
  let element = document.getElementById("headerblock");
  element.classList.add("headershadow-dropdown");

  if (window.pageYOffset <= 10) {
    document.getElementById("colorLogo").style.display = "none";
    document.getElementById("uncolorLogo").style.display = "block";
  }
  if (window.pageYOffset >= 10) {
    document.getElementById("colorLogo").style.display = "none";
    document.getElementById("uncolorLogo").style.display = "block";
  }
}

function hideDropdown() {
  let element = document.getElementById("headerblock");
  element.classList.remove("headershadow-dropdown");
  if (window.pageYOffset <= 10) {
    document.getElementById("colorLogo").style.display = "block";
    document.getElementById("uncolorLogo").style.display = "none";
  }
}

function addRemoveClass() {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const tenPercentScroll = scrollableHeight * 0.01;

  if (window.pageYOffset >= tenPercentScroll) {
    let element = document.getElementById("headerblock");
    element.classList.add("headershadow");
    document.querySelector(".header").classList.add("header-scrolled");

    if (window.innerWidth > 1023) {
      document.getElementById("colorLogo").style.display = "none";
      document.getElementById("uncolorLogo").style.display = "block";
    } else if (
      window.innerWidth < 1023 &&
      document.querySelector(".header").style.display == ""
    ) {
      document.getElementById("colorLogoMobile").style.display = "none";
      document.getElementById("uncolorLogoMobile").style.display = "block";
      document.getElementById("colorHamburgerMobile").style.display = "none";
      document.getElementById("uncolorHamburgerMobile").style.display = "block";
    }
  } else {
    let element = document.getElementById("headerblock");
    element.classList.remove("headershadow");
    document.querySelector(".header").classList.remove("header-scrolled");
    if (window.innerWidth >= 1024) {
      document.getElementById("colorLogo").style.display = "block";
      document.getElementById("uncolorLogo").style.display = "none";
    } else if (
      window.innerWidth < 1023 &&
      document.querySelector(".header").style.display == ""
    ) {
      document.getElementById("colorLogoMobile").style.display = "block";
      document.getElementById("uncolorLogoMobile").style.display = "none";
      document.getElementById("colorHamburgerMobile").style.display = "block";
      document.getElementById("uncolorHamburgerMobile").style.display = "none";
    }
  }
}

window.addEventListener("scroll", (event) => {
  addRemoveClass();
});

document.querySelector("header").parentElement.classList.add("header-shadow");
