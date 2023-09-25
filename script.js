const showMenuBtn = document.getElementById("show-menu");
        let navLinks = document.querySelector(".nav-links");


        showMenuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("show-links");
        });