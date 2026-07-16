"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const projectGroups = [
        {
            id: "holiday",
            number: "01 / 05",
            title: "Holiday Pubmats",
            items: [
                {
                    title: "National Arts Month 2026",
                    description:
                        "A National Arts Month publication material inspired by traditional Ilokano Inabel textiles.",
                    image:
                        "images/projects/holiday-pubmats/holiday-01.jpg"
                },
                {
                    title: "Labor Day",
                    description:
                        "A Labor Day publication material highlighting the struggles of jeepney drivers in today's modern world.",
                    image:
                        "images/projects/holiday-pubmats/holiday-02.jpg"
                },
                {
                    title: "International Journalists' Day",
                    description:
                        "A publication material featuring the Sirmata identity and the values of truth, justice, and integrity.",
                    image:
                        "images/projects/holiday-pubmats/holiday-03.jpg"
                }
            ]
        },
        {
            id: "devcomm",
            number: "02 / 05",
            title: "Development Communication / Feature",
            items: [
                {
                    title: "Development Communication",
                    description:
                        "",
                    image:
                        "images/projects/devcomm-pubmats/devcomm-01.jpg"
                },
                {
                    title: "Feature",
                    description:
                        "",
                    image:
                        "images/projects/devcomm-pubmats/devcomm-02.jpg"
                }
            ]
        },
        {
            id: "logo",
            number: "03 / 05",
            title: "Logo Design",
            items: [
                {
                    title: "UniGames 2025 Official Logo",
                    description:
                        "The official UniGames 2025 logo with the theme Top Seed to Succeed draws inspiration from the head and movement of the MMSU Stallion.",
                    image:
                        "images/projects/logo-design/unigames-logo-2025.png",
                    logo: true
                }
            ]
        },
        {
            id: "unigames",
            number: "04 / 05",
            title: "UniGames 2025",
            items: [
                {
                    title: "UniGames Fast Track — Day 1",
                    description:
                        "A newsletter recap presenting the highlights and stories from the first day of UniGames 2025.",
                    image:
                        "images/projects/unigames-2025/unigames-01.jpg"
                },
                {
                    title: "UniGames Fast Track — Day 2",
                    description:
                        "A newsletter recap presenting the highlights and stories from the second day of UniGames 2025.",
                    image:
                        "images/projects/unigames-2025/unigames-02.jpg"
                },
                {
                    title: "UniGames Fast Track — Day 3",
                    description:
                        "A newsletter recap presenting the highlights and stories from the third day of UniGames 2025.",
                    image:
                        "images/projects/unigames-2025/unigames-03.jpg"
                },
                {
                    title: "UniGames Fast Track — Day 4",
                    description:
                        "A newsletter recap presenting the highlights and stories from the fourth day of UniGames 2025.",
                    image:
                        "images/projects/unigames-2025/unigames-04.jpg"
                }
            ]
        },
        {
            id: "pasuc",
            number: "05 / 05",
            title: "PASUC 1 & SCUAA 1 2025",
            items: [
                {
                    title: "Mr. and Ms. PASUC 1",
                    description:
                        "A promotional publication material introducing the regional Mr. and Ms. PASUC 1 candidates.",
                    image:
                        "images/projects/pasuc-scuaa-2025/pasuc-scuaa-01.jpg"
                },
                {
                    title: "Mr. and Ms. PASUC 1 Winners",
                    description:
                        "An announcement publication material recognizing the official winners of Mr. and Ms. PASUC 1.",
                    image:
                        "images/projects/pasuc-scuaa-2025/pasuc-scuaa-02.jpg"
                },
                {
                    title: "National PASUC Delegates",
                    description:
                        "A good-luck publication material supporting the Region 1 delegates competing in the National PASUC.",
                    image:
                        "images/projects/pasuc-scuaa-2025/pasuc-scuaa-03.jpg"
                }
            ]
        }
    ];

    const body = document.body;

    /* LOADER */

    const loader = document.getElementById("loader");
    const loaderPercent =
        document.getElementById("loaderPercent");

    const progressBar =
        document.querySelector(".loader-progress-bar");

    body.classList.add("loading");

    let progress = 0;

    const loadingInterval = setInterval(() => {

        progress += Math.floor(Math.random() * 8) + 2;

        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);

            setTimeout(playIntroAnimation, 300);
        }

        loaderPercent.textContent = progress;
        progressBar.style.width = `${progress}%`;

    }, 70);

    function playIntroAnimation() {

        if (typeof gsap === "undefined") {
            loader.style.display = "none";
            body.classList.remove("loading");
            return;
        }

        gsap.timeline({
            defaults: {
                ease: "power4.inOut"
            }
        })
            .to(".loader-title span", {
                y: "-120%",
                stagger: 0.05,
                duration: 0.8
            })
            .to(loader, {
                yPercent: -100,
                duration: 1
            })
            .set(loader, {
                display: "none"
            })
            .add(() => {
                body.classList.remove("loading");
            })
            .from(".navbar", {
                y: -50,
                opacity: 0,
                duration: 0.7
            })
            .from(".hero-line", {
                y: 120,
                opacity: 0,
                stagger: 0.12,
                duration: 1
            });
    }

    /* GENERATE PROJECTS */

    const projectCollection =
        document.getElementById("projectCollection");

    function renderProjects() {

        projectCollection.innerHTML =
            projectGroups.map((group) => {

                const cards = group.items.map(
                    (item, index) => {

                        const logoClass =
                            item.logo
                                ? "project-logo-wrap"
                                : "";

                        const imageClass =
                            item.logo
                                ? "project-image project-logo-image"
                                : "project-image";

                        return `
                            <article
                                class="project-card"
                                data-category="${group.id}"
                                data-title="${escapeHTML(item.title)}"
                                data-description="${escapeHTML(item.description)}"
                                data-image="${item.image}"
                                tabindex="0"
                                role="button"
                            >
                                <div class="project-card-inner">

                                    <div class="project-image-wrap ${logoClass}">

                                        <img
                                            src="${item.image}"
                                            alt="${escapeHTML(item.title)}"
                                            class="${imageClass}"
                                            loading="lazy"
                                        >

                                        <div class="project-hover">

                                            <div class="project-hover-content">

                                                <p class="project-hover-title">
                                                    ${escapeHTML(item.title)}
                                                </p>

                                                <p class="project-description">
                                                    ${escapeHTML(item.description)}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                    <div class="project-meta">

                                        <span>
                                            ${escapeHTML(group.title)}
                                        </span>

                                        <span>
                                            ${String(index + 1).padStart(2, "0")}
                                        </span>

                                    </div>

                                </div>
                            </article>
                        `;
                    }
                ).join("");

                return `
                    <section
                        class="project-category"
                        data-group="${group.id}"
                    >

                        <div class="category-heading">

                            <div>

                                <p class="category-number">
                                    ${group.number}
                                </p>

                                <h3>
                                    ${escapeHTML(group.title)}
                                </h3>

                            </div>

                            <p class="category-count">
                                ${group.items.length}
                                ${group.items.length === 1
                        ? "Artwork"
                        : "Artworks"}
                            </p>

                        </div>

                        <div class="project-grid">
                            ${cards}
                        </div>

                    </section>
                `;

            }).join("");

    }

    function escapeHTML(value) {

        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");

    }

    renderProjects();

    const projectCards =
        Array.from(
            document.querySelectorAll(".project-card")
        );

    /* CUSTOM CURSOR */

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorOutline =
        document.querySelector(".cursor-outline");

    if (
        cursorDot &&
        cursorOutline &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        window.addEventListener("mousemove", (event) => {

            cursorDot.style.left =
                `${event.clientX}px`;

            cursorDot.style.top =
                `${event.clientY}px`;

            cursorOutline.animate(
                {
                    left: `${event.clientX}px`,
                    top: `${event.clientY}px`
                },
                {
                    duration: 400,
                    fill: "forwards"
                }
            );

        });

        document.querySelectorAll(
            "a, button, .project-card"
        ).forEach((element) => {

            element.addEventListener(
                "mouseenter",
                () => cursorOutline.classList.add("active")
            );

            element.addEventListener(
                "mouseleave",
                () => cursorOutline.classList.remove("active")
            );

        });

    }

    /* 3D PROJECT MOVEMENT */

    projectCards.forEach((card) => {

        const inner =
            card.querySelector(".project-card-inner");

        const image =
            card.querySelector(".project-image");

        card.addEventListener("mousemove", (event) => {

            if (
                !window.matchMedia("(pointer: fine)").matches
            ) {
                return;
            }

            const bounds =
                card.getBoundingClientRect();

            const x =
                event.clientX - bounds.left;

            const y =
                event.clientY - bounds.top;

            const percentX =
                x / bounds.width - 0.5;

            const percentY =
                y / bounds.height - 0.5;

            const rotateY =
                percentX * 9;

            const rotateX =
                percentY * -9;

            if (typeof gsap !== "undefined") {

                gsap.to(inner, {
                    rotateX,
                    rotateY,
                    transformPerspective: 1200,
                    duration: 0.4,
                    ease: "power2.out"
                });

                gsap.to(image, {
                    x: percentX * -18,
                    y: percentY * -18,
                    scale: 1.06,
                    duration: 0.5,
                    ease: "power2.out"
                });

            }

        });

        card.addEventListener("mouseleave", () => {

            if (typeof gsap !== "undefined") {

                gsap.to(inner, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.7,
                    ease: "elastic.out(1, 0.5)"
                });

                gsap.to(image, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    ease: "power3.out"
                });

            }

        });

    });

    /* FILTER */

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const projectCategories =
        document.querySelectorAll(".project-category");

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selected =
                button.dataset.filter;

            filterButtons.forEach((item) => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            projectCategories.forEach((category) => {

                const show =
                    selected === "all" ||
                    category.dataset.group === selected;

                category.classList.toggle(
                    "is-hidden",
                    !show
                );

                if (
                    show &&
                    typeof gsap !== "undefined"
                ) {

                    gsap.fromTo(
                        category,
                        {
                            opacity: 0,
                            y: 35
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.55
                        }
                    );

                }

            });

            if (typeof ScrollTrigger !== "undefined") {
                ScrollTrigger.refresh();
            }

        });

    });

    /* LIGHTBOX */

    const projectLightbox =
        document.getElementById("projectLightbox");

    const lightboxClose =
        document.getElementById("lightboxClose");

    const lightboxPrevious =
        document.getElementById("lightboxPrevious");

    const lightboxNext =
        document.getElementById("lightboxNext");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const lightboxDescription =
        document.getElementById("lightboxDescription");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxCounter =
        document.getElementById("lightboxCounter");

    const lightboxImageStage =
        document.querySelector(".lightbox-image-stage");

    const lightboxImageWrap =
        document.querySelector(".lightbox-image-wrap");

    let currentIndex = 0;

    function getVisibleProjects() {

        return projectCards.filter((card) => {

            const category =
                card.closest(".project-category");

            return (
                category &&
                !category.classList.contains("is-hidden")
            );

        });

    }

    function updateLightbox(card) {

        const visible = getVisibleProjects();

        currentIndex = visible.indexOf(card);

        lightboxTitle.textContent = card.dataset.title;

        adjustLightboxTitleSize();

        lightboxDescription.textContent =
            card.dataset.description || "";

        lightboxCounter.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ${String(visible.length).padStart(2, "0")}`;

        lightboxImage.classList.remove("is-loaded");

        lightboxImage.removeAttribute("src");

        lightboxImage.alt = card.dataset.title;

        return new Promise((resolve, reject) => {

            lightboxImage.onload = () => {

                lightboxImage.classList.add("is-loaded");

                resolve();

            };

            lightboxImage.onerror = () => {

                console.error(
                    "Failed to load image:",
                    card.dataset.image
                );

                reject();

            };

            lightboxImage.src = card.dataset.image;

            if (
                lightboxImage.complete &&
                lightboxImage.naturalWidth > 0
            ) {

                lightboxImage.onload();

            }

        });

    }

    async function openLightbox(card) {

        projectLightbox.classList.add("is-open");

        projectLightbox.setAttribute(
            "aria-hidden",
            "false"
        );

        projectLightbox.scrollTop = 0;

        body.classList.add("lightbox-open");

        if (typeof gsap !== "undefined") {

            gsap.set(projectLightbox, {
                opacity: 1
            });

        } else {

            projectLightbox.style.opacity = "1";

        }

        try {

            await updateLightbox(card);

        } catch (error) {

            console.error(error);

        }

        if (typeof gsap !== "undefined") {

            gsap.fromTo(
                ".lightbox-information > *",
                {
                    y: 30,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.06,
                    duration: 0.45
                }
            );

            gsap.fromTo(
                lightboxImageWrap,
                {
                    scale: .94,
                    opacity: 0
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: .45
                }
            );

        }

        lightboxClose.focus();

    }

    function closeLightbox() {

        const finish = () => {

            projectLightbox.classList.remove("is-open");

            projectLightbox.setAttribute(
                "aria-hidden",
                "true"
            );

            body.classList.remove("lightbox-open");

        };

        if (typeof gsap !== "undefined") {

            gsap.to(projectLightbox, {
                opacity: 0,
                duration: 0.3,
                onComplete: finish
            });

        } else {
            finish();
        }

    }

    async function showProject(direction) {

        const visible =
            getVisibleProjects();

        currentIndex += direction;

        if (currentIndex < 0)
            currentIndex = visible.length - 1;

        if (currentIndex >= visible.length)
            currentIndex = 0;

        if (typeof gsap !== "undefined") {

            gsap.set(
                lightboxImageWrap,
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotate: 0
                }
            );

        }

        try {

            await updateLightbox(
                visible[currentIndex]
            );

        } catch (error) {

            return;

        }

        if (typeof gsap !== "undefined") {

            gsap.fromTo(
                lightboxImageWrap,
                {
                    opacity: 0,
                    scale: .96,
                    x: direction * 30
                },
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    duration: .4
                }
            );

        }

    }

    projectCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => openLightbox(card)
        );

        card.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {
                    event.preventDefault();
                    openLightbox(card);
                }

            }
        );

    });

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

    lightboxPrevious.addEventListener(
        "click",
        () => showProject(-1)
    );

    lightboxNext.addEventListener(
        "click",
        () => showProject(1)
    );

    document.addEventListener("keydown", (event) => {

        if (
            !projectLightbox.classList.contains("is-open")
        ) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowLeft") {
            showProject(-1);
        }

        if (event.key === "ArrowRight") {
            showProject(1);
        }

    });

    /* LIGHTBOX PARALLAX */

    lightboxImageStage.addEventListener(
        "mousemove",
        (event) => {

            if (
                !window.matchMedia("(pointer: fine)").matches
            ) {
                return;
            }

            const bounds =
                lightboxImageStage.getBoundingClientRect();

            const x =
                (event.clientX - bounds.left) /
                bounds.width -
                0.5;

            const y =
                (event.clientY - bounds.top) /
                bounds.height -
                0.5;

            if (typeof gsap !== "undefined") {

                gsap.to(lightboxImageWrap, {
                    x: x * 28,
                    y: y * 28,
                    rotateY: x * 4,
                    rotateX: y * -4,
                    transformPerspective: 1200,
                    duration: 0.75
                });

            }

        }
    );

    function adjustLightboxTitleSize() {
        const titleLength =
            lightboxTitle.textContent.trim().length;

        lightboxTitle.classList.remove(
            "title-medium",
            "title-long"
        );

        if (titleLength > 32) {
            lightboxTitle.classList.add("title-long");
        } else if (titleLength > 20) {
            lightboxTitle.classList.add("title-medium");
        }
    }

    lightboxImageStage.addEventListener(
        "mouseleave",
        () => {

            if (typeof gsap !== "undefined") {

                gsap.to(lightboxImageWrap, {
                    x: 0,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.75
                });

            }

        }
    );

    /* SCROLL ANIMATIONS */

    if (
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined"
    ) {

        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".about-title span", {
            y: 90,
            opacity: 0,
            stagger: 0.12,
            duration: 0.9,
            scrollTrigger: {
                trigger: ".about-heading",
                start: "top 80%"
            }
        });

        gsap.from(".project-category", {
            y: 70,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".project-collection",
                start: "top 85%"
            }
        });

    }

    /* -------------------------------
   CREATIVE TOOLBOX
-------------------------------- */

    const toolboxCards =
        document.querySelectorAll(".toolbox-card");

    const toolboxProgressItems =
        document.querySelectorAll(
            ".toolbox-progress-item"
        );

    toolboxCards.forEach((card, index) => {

        const abbreviation =
            card.querySelector(
                ".toolbox-abbreviation"
            );

        card.addEventListener(
            "mousemove",
            (event) => {

                if (
                    !window.matchMedia(
                        "(pointer: fine)"
                    ).matches
                ) {
                    return;
                }

                const bounds =
                    card.getBoundingClientRect();

                const percentX =
                    (
                        event.clientX -
                        bounds.left
                    ) /
                    bounds.width -
                    0.5;

                const percentY =
                    (
                        event.clientY -
                        bounds.top
                    ) /
                    bounds.height -
                    0.5;

                if (
                    abbreviation &&
                    typeof gsap !== "undefined"
                ) {

                    gsap.to(
                        abbreviation,
                        {
                            x: percentX * 22,
                            y: percentY * 14,
                            rotate: percentX * 2,
                            duration: 0.7,
                            ease: "power2.out"
                        }
                    );

                }

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                if (
                    abbreviation &&
                    typeof gsap !== "undefined"
                ) {

                    gsap.to(
                        abbreviation,
                        {
                            x: 0,
                            y: 0,
                            rotate: 0,
                            duration: 0.8,
                            ease: "power3.out"
                        }
                    );

                }

            }
        );

        card.addEventListener(
            "mouseenter",
            () => {

                toolboxProgressItems.forEach(
                    (item, itemIndex) => {

                        item.classList.toggle(
                            "active",
                            itemIndex === index
                        );

                    }
                );

            }
        );

    });

    /* TOOLBOX SCROLL ANIMATIONS */

    if (
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined"
    ) {

        gsap.from(".toolbox-topline", {
            y: 25,
            opacity: 0,
            duration: 0.75,

            scrollTrigger: {
                trigger: ".toolbox-section",
                start: "top 82%"
            }
        });

        gsap.from(
            ".toolbox-kicker, .toolbox-title, .toolbox-intro",
            {
                y: 90,
                opacity: 0,
                stagger: 0.12,
                duration: 0.95,
                ease: "power4.out",

                scrollTrigger: {
                    trigger: ".toolbox-header",
                    start: "top 78%"
                }
            }
        );

        gsap.from(".toolbox-card", {
            y: 75,
            opacity: 0,
            stagger: 0.14,
            duration: 0.9,
            ease: "power3.out",

            scrollTrigger: {
                trigger: ".toolbox-list",
                start: "top 84%"
            }
        });

        gsap.from(".toolbox-closing p", {
            y: 50,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",

            scrollTrigger: {
                trigger: ".toolbox-closing",
                start: "top 88%"
            }
        });

    }

});

/* --------------------------------
   CONTACT SECTION
-------------------------------- */

if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    gsap.from(".contact-topline", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-section",
            start: "top 82%"
        }
    });

    gsap.from(
        ".contact-kicker, .contact-heading",
        {
            y: 100,
            opacity: 0,
            stagger: 0.12,
            duration: 1.05,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".contact-heading-wrap",
                start: "top 80%"
            }
        }
    );

    gsap.from(
        ".contact-lead, .contact-copy",
        {
            y: 55,
            opacity: 0,
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".contact-content",
                start: "top 82%"
            }
        }
    );

    gsap.from(".contact-link", {
        y: 45,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact-details",
            start: "top 84%"
        }
    });

    gsap.from(
        ".contact-resume-button, .contact-role",
        {
            y: 40,
            opacity: 0,
            stagger: 0.12,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".contact-action-row",
                start: "top 88%"
            }
        }
    );

}

/* MAGNETIC RESUME BUTTON */

const resumeButton =
    document.querySelector(".contact-resume-button");

if (resumeButton) {

    resumeButton.addEventListener(
        "mousemove",
        (event) => {

            if (
                !window.matchMedia(
                    "(pointer: fine)"
                ).matches
            ) {
                return;
            }

            const bounds =
                resumeButton.getBoundingClientRect();

            const x =
                event.clientX -
                bounds.left -
                bounds.width / 2;

            const y =
                event.clientY -
                bounds.top -
                bounds.height / 2;

            if (typeof gsap !== "undefined") {

                gsap.to(resumeButton, {
                    x: x * 0.14,
                    y: y * 0.18,
                    duration: 0.35,
                    ease: "power2.out"
                });

            }

        }
    );

    resumeButton.addEventListener(
        "mouseleave",
        () => {

            if (typeof gsap !== "undefined") {

                gsap.to(resumeButton, {
                    x: 0,
                    y: 0,
                    duration: 0.65,
                    ease: "elastic.out(1, 0.35)"
                });

            }

        }
    );

}

/* SMOOTH BACK TO TOP */

const backToTop =
    document.querySelector(".back-to-top");

if (backToTop) {

    backToTop.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            const hero =
                document.querySelector("#hero");

            if (hero) {

                hero.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            } else {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        }
    );

}

/* --------------------------------
   AREAS OF PRACTICE
-------------------------------- */

if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    gsap.from(
        ".practice-showcase-heading > *",
        {
            y: 55,
            opacity: 0,
            stagger: 0.1,
            duration: 0.85,
            ease: "power3.out",

            scrollTrigger: {
                trigger: ".practice-showcase",
                start: "top 80%"
            }
        }
    );

    gsap.from(
        ".practice-showcase-item",
        {
            y: 45,
            opacity: 0,
            stagger: 0.08,
            duration: 0.75,
            ease: "power3.out",

            scrollTrigger: {
                trigger: ".practice-showcase-list",
                start: "top 84%"
            }
        }
    );

}
