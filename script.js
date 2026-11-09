 const languageBtn = document.getElementById("languageBtn");

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

let currentLanguage = "en";


// CHANGE LANGUAGE

languageBtn.addEventListener("click", () => {

    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";


    document.querySelectorAll("[data-en][data-ar]").forEach((element) => {

        element.textContent = element.dataset[currentLanguage];

    });


    languageBtn.textContent =
        currentLanguage === "en" ? "العربية" : "English";


    document.title = currentLanguage === "en"
        ? "Mostafa Elstohy | Front-End Developer"
        : "Mostafa Elstohy | مطور واجهات أمامية";

});



// MOBILE MENU

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.textContent = isOpen ? "✕" : "☰";

});



// CLOSE MENU AFTER CLICKING A LINK

navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});



// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();