document
  .getElementById("additional-serv-title")
  .addEventListener("click", function () {
    const additional = document.querySelectorAll("#additional-serv-checkbox");
    const addArrow = document.getElementById("add-arrow");

    additional.forEach((add) => {
      if (add.style.display === "none") {
        add.style.display = "flex";
        addArrow.style.transform = "rotate(0deg)";
      } else {
        add.style.display = "none";
        addArrow.style.transform = "rotate(180deg)";
      }
    });
  });

function startTime(hours, minutes, seconds) {
  const timeElement = document.getElementById("orderDiscountTime");

  let remainingTime = new Date();
  remainingTime.setHours(hours);
  remainingTime.setMinutes(minutes);
  remainingTime.setSeconds(seconds);

  const interval = setInterval(() => {
    remainingTime.setSeconds(remainingTime.getSeconds() - 1);

    const hoursLeft = remainingTime.getHours();
    const minutesLeft = remainingTime.getMinutes();
    const secondsLeft = remainingTime.getSeconds();

    if (hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0) {
      clearInterval(interval);
      timeElement.textContent = "00:00:00";
      return;
    }

    timeElement.textContent =
      String(hoursLeft).padStart(2, "0") +
      ":" +
      String(minutesLeft).padStart(2, "0") +
      ":" +
      String(secondsLeft).padStart(2, "0");
  }, 1000);
}

startTime(5, 37, 25);

const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const arrowMenu = document.querySelector(".arrow-menu");

function toggleActiveClass() {
  document.body.classList.toggle("_lock");
  headerMenu.classList.toggle("_active");
  arrowMenu.classList.toggle("_active");
}

headerBurger.addEventListener("click", function () {
  toggleActiveClass();
});

arrowMenu.addEventListener("click", function () {
  toggleActiveClass();
});

const headerLinks = document.querySelectorAll(".menu__link[data-goto]");
const footerLinks = document.querySelectorAll(".footer__link[data-goto]");

function scrollToSection(menuLinks) {
  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;

      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector("header").offsetHeight;

        if (headerMenu.classList.contains("_active")) {
          toggleActiveClass();
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });

        e.preventDefault();
      }
    }
  }
}

scrollToSection(headerLinks);
scrollToSection(footerLinks);
