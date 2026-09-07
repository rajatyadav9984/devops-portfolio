/* =====================================================
   TYPING EFFECT
===================================================== */

const textElement =
    document.getElementById("typing");


const texts = [
    "DevOps Engineer",
    "Azure Cloud Engineer",
    "Infrastructure as Code Specialist",
    "Infrastructure Automation"
];


let textIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    if (!textElement) {
        return;
    }


    const currentText =
        texts[textIndex];


    if (!deleting) {

        textElement.textContent =
            currentText.substring(
                0,
                charIndex + 1
            );


        charIndex++;


        if (
            charIndex ===
            currentText.length
        ) {

            deleting = true;


            setTimeout(
                typeEffect,
                1500
            );


            return;
        }

    } else {

        textElement.textContent =
            currentText.substring(
                0,
                charIndex - 1
            );


        charIndex--;


        if (charIndex === 0) {

            deleting = false;


            textIndex =
                (textIndex + 1)
                %
                texts.length;
        }
    }


    setTimeout(
        typeEffect,
        deleting ? 55 : 90
    );
}


typeEffect();



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".about-box, .career-card, .skill-card, .project-card, .contact-item"
    );


if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );
                        }

                    }
                );

            },

            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "show"
            );

        }
    );
}



/* =====================================================
   RESUME
===================================================== */

const resumeLinks =
    document.querySelectorAll(
        'a[href="./assets/resume.pdf"]'
    );


resumeLinks.forEach(
    (resumeLink) => {

        resumeLink.addEventListener(
            "click",
            () => {

                console.log(
                    "Opening Rajat Yadav Resume"
                );

            }
        );

    }
);



/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchorLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    }
);



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


if (
    sections.length &&
    navLinks.length &&
    "IntersectionObserver"
    in window
) {

    const sectionObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            const sectionId =
                                entry.target.id;


                            navLinks.forEach(
                                (link) => {

                                    link.classList.remove(
                                        "active"
                                    );

                                }
                            );


                            const activeLink =
                                document.querySelector(
                                    `.nav-links a[href="#${sectionId}"]`
                                );


                            if (activeLink) {

                                activeLink.classList.add(
                                    "active"
                                );

                            }

                        }

                    }
                );

            },

            {
                rootMargin:
                    "-30% 0px -60% 0px"
            }
        );


    sections.forEach(
        (section) => {

            sectionObserver.observe(
                section
            );

        }
    );

}



/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement =
    document.querySelector(
        ".footer-copy"
    );


if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} Rajat Yadav`;

}



/* =====================================================
   NAVBAR SHADOW
===================================================== */

const navbar =
    document.querySelector(
        ".navbar"
    );


function updateNavbar() {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0, 0, 0, 0.25)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateNavbar,
    {
        passive: true
    }
);


updateNavbar();



/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);