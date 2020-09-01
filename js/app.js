const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".links");
    const links = document.querySelectorAll(".links li")

    burger.addEventListener("click", () => {

        nav.classList.toggle("nav-active")

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `linkFade 0.5s ease forwards ${index / 5 + 0.8}s`
            }
        });

    })

}

navSlide();