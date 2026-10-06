/* ========================================
   HERO
======================================== */

const exploreButton =
    document.getElementById("exploreButton");

if (exploreButton) {

    exploreButton.addEventListener("click", () => {

        const aboutSection =
            document.getElementById("about");

        if (aboutSection) {

            aboutSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


/* ========================================
   CUSTOM CURSOR
======================================== */

const cursorGlow =
    document.querySelector(".cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    });

}


/* ========================================
   CURSOR INTERACTION
======================================== */

const interactiveElements =
    document.querySelectorAll("a, button");

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        document.body.classList.add(
            "cursor-hover"
        );

    });

    element.addEventListener("mouseleave", () => {

        document.body.classList.remove(
            "cursor-hover"
        );

    });

});


/* ========================================
   SERVICES
======================================== */

const serviceTabs =
    document.querySelectorAll(".service-tab");

const servicesPreview =
    document.querySelector(".services-preview");

const previewNumber =
    document.querySelector(".preview-number");

const previewCategory =
    document.querySelector(".preview-content span");

const previewTitle =
    document.querySelector(".preview-content h3");

const previewDescription =
    document.querySelector(".preview-content p");

const previewSymbol =
    document.querySelector(".preview-symbol");


const servicesData = [

    {
        number: "01",

        category: "WEB DESIGN",

        title:
            "Design care<br>atrage atenția.",

        description:
            "Interfețe moderne, structuri clare și o experiență vizuală construită pentru fiecare proiect.",

        symbol: "◈"
    },

    {
        number: "02",

        category: "FRONT-END",

        title:
            "Cod care<br>prinde viață.",

        description:
            "Transform designul în site-uri rapide, responsive și construite cu tehnologii moderne.",

        symbol: "⌘"
    },

    {
        number: "03",

        category: "INTERACTIVE",

        title:
            "Detalii care<br>fac diferența.",

        description:
            "Interacțiuni, animații și elemente dinamice care transformă un site obișnuit într-o experiență.",

        symbol: "✦"
    }

];


function updateService(index) {

    const service =
        servicesData[index];

    if (!service) {
        return;
    }


    if (servicesPreview) {

        servicesPreview.classList.add(
            "is-changing"
        );

    }


    setTimeout(() => {

        if (previewNumber) {

            previewNumber.textContent =
                service.number;

        }


        if (previewCategory) {

            previewCategory.textContent =
                service.category;

        }


        if (previewTitle) {

            previewTitle.innerHTML =
                service.title;

        }


        if (previewDescription) {

            previewDescription.textContent =
                service.description;

        }


        if (previewSymbol) {

            previewSymbol.textContent =
                service.symbol;

        }


        if (servicesPreview) {

            servicesPreview.setAttribute(
                "data-number",
                service.number
            );

            servicesPreview.classList.remove(
                "is-changing"
            );

        }

    }, 220);


    serviceTabs.forEach((item) => {

        item.classList.remove("active");

    });


    if (serviceTabs[index]) {

        serviceTabs[index].classList.add(
            "active"
        );

    }

}


serviceTabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        updateService(index);

    });

});


/* ========================================
   SKILL CARDS 3D
======================================== */

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {

    const icon =
        card.querySelector("img");


    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -8;

        const rotateY =
            ((x - centerX) / centerX) * 8;


        const moveX =
            ((x - centerX) / centerX) * 10;

        const moveY =
            ((y - centerY) / centerY) * 10;


        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;


        if (icon) {

            icon.style.transform =
                `translate(${moveX}px, ${moveY}px)
                 translateZ(35px)`;

        }


        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );


        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";


        if (icon) {

            icon.style.transform =
                "translate(0, 0) translateZ(0)";

        }

    });

});


/* ========================================
   NAVBAR SCROLL
======================================== */

const navbar =
    document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


/* ========================================
   NAVBAR ACTIVE SECTION
======================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ========================================
   MOBILE MENU
======================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileNav =
    document.querySelector("nav");


if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mobileNav.classList.toggle("open");


        menuToggle.classList.toggle(
            "active",
            isOpen
        );


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    mobileNav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* ========================================
   CONTACT FORM
======================================== */

const contactForm =
    document.getElementById("contactForm");

const contactSubmit =
    document.getElementById("contactSubmit");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            if (
                !contactSubmit ||
                !formStatus
            ) {

                return;

            }


            contactSubmit.disabled = true;

            contactSubmit.textContent =
                "Se trimite...";


            formStatus.classList.remove(
                "show"
            );


            try {

                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",

                            body:
                                new FormData(
                                    contactForm
                                ),

                            headers: {
                                Accept:
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    contactForm.reset();


                    formStatus.textContent =
                        "Mesaj trimis ✓";


                    formStatus.classList.add(
                        "show"
                    );


                    contactSubmit.textContent =
                        "Trimis ✓";


                    setTimeout(() => {

                        contactSubmit.textContent =
                            "Trimite mesajul";

                        contactSubmit.disabled =
                            false;

                    }, 2500);


                } else {

                    throw new Error(
                        "Form submission failed."
                    );

                }


            } catch (error) {

                formStatus.textContent =
                    "A apărut o eroare. Încearcă din nou.";


                formStatus.classList.add(
                    "show"
                );


                contactSubmit.textContent =
                    "Încearcă din nou";


                contactSubmit.disabled =
                    false;

            }

        }
    );

}


/* ========================================
   CONTACT CARD 3D
======================================== */

const contactCard =
    document.querySelector(".contact-card");


if (contactCard) {

    contactCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                contactCard.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -2.5;

            const rotateY =
                ((x - centerX) / centerX) * 2.5;


            contactCard.style.transform =
                `perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-4px)`;

        }
    );


    contactCard.addEventListener(
        "mouseleave",
        () => {

            contactCard.style.transform =
                "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";

        }
    );

}


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


} else {

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}