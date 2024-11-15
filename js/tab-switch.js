let tabHeader1 = document.getElementsByClassName("tab-header-2")[0];
let tabIndicator1 = document.getElementsByClassName("tab-indicator-2")[0];
let tabBody1 = document.getElementsByClassName("tab-body-2")[0];
let tabsPane1 = tabHeader1.getElementsByTagName("div");
for (let i = 0; i < tabsPane1.length; i++) {
  tabsPane1[i].addEventListener("click", function () {
    tabHeader1
      .getElementsByClassName("active-2")[0]
      .classList.remove("active-2");
    tabsPane1[i].classList.add("active-2");
    tabBody1.getElementsByClassName("active-2")[0].classList.remove("active-2");
    tabBody1.getElementsByClassName("body-tab-2")[i].classList.add("active-2");
  });
}
