

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);

reveal();

function reveal(){

    reveals.forEach((element)=>{

        const top = element.getBoundingClientRect().top;

        const visible = window.innerHeight - 120;

        if(top < visible){

            element.classList.add("active");

        }

    });

}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");

function updateTheme() {

    let savedTheme = localStorage.getItem("theme");

    // Default theme = Dark
    if (!savedTheme) {
        savedTheme = "dark";
        localStorage.setItem("theme", "dark");
    }

    if (savedTheme === "dark") {

        document.documentElement.setAttribute("data-theme", "dark");
        icon.className = "fa-solid fa-sun";

    } else {

        document.documentElement.removeAttribute("data-theme");
        icon.className = "fa-solid fa-moon";

    }
}

updateTheme();

toggle.addEventListener("click", () => {

    if (document.documentElement.getAttribute("data-theme") === "dark") {

        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");

    } else {

        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");

    }

    updateTheme();


});

const showBtn = document.getElementById("showProjects");
const moreProjects = document.getElementById("more-projects");

showBtn.addEventListener("click", () => {

    moreProjects.classList.toggle("show");

    if (moreProjects.classList.contains("show")) {
        showBtn.textContent = "Show Less";
    } else {
        showBtn.textContent = "View More Projects";
    }

});

/* =========================================
   INTERACTIVE SKILLS
========================================= */

const skillCards = document.querySelectorAll(
    ".skill-dashboard-card"
);

const detailPanel = document.getElementById(
    "skill-detail-panel"
);

const detailTitle = document.getElementById(
    "skill-detail-title"
);

const detailDescription = document.getElementById(
    "skill-detail-description"
);

const detailTags = document.getElementById(
    "skill-detail-tags"
);

const detailIcon = document.querySelector(
    ".skill-detail-icon i"
);

const detailClose = document.getElementById(
    "skill-detail-close"
);


const skillDetails = {

    sql: {
        title: "SQL",
        description:
            "Advanced querying and analytical SQL for extracting, transforming and analyzing business data.",
        icon: "fa-database",
        tags: [
            "Joins",
            "CTEs",
            "Window Functions",
            "Aggregations"
        ]
    },

    powerbi: {
        title: "Power BI",
        description:
            "Building interactive dashboards and business reports with DAX, data modeling and KPI analysis.",
        icon: "fa-chart-column",
        tags: [
            "DAX",
            "Data Modeling",
            "Power Query",
            "Dashboards"
        ]
    },

    python: {
        title: "Python",
        description:
            "Using Python for data analysis, preparation, transformation and automation workflows.",
        icon: "fa-python",
        tags: [
            "Pandas",
            "NumPy",
            "Data Analysis",
            "Automation"
        ]
    },

    analytics: {
        title: "Data Analytics",
        description:
            "Turning business data into actionable insights through KPI, trend and performance analysis.",
        icon: "fa-chart-line",
        tags: [
            "KPI Analysis",
            "Trends",
            "Business Insights",
            "Performance"
        ]
    },

    cleaning: {
        title: "Data Cleaning",
        description:
            "Preparing reliable datasets through cleaning, validation, transformation and ETL processes.",
        icon: "fa-filter",
        tags: [
            "ETL",
            "Validation",
            "Transformation",
            "Data Quality"
        ]
    },

    bi: {
        title: "Business Intelligence",
        description:
            "Combining analytics, reporting and visualization to support better business decisions.",
        icon: "fa-chart-pie",
        tags: [
            "Reporting",
            "BI",
            "Decision Support",
            "KPIs"
        ]
    }

};


function openSkill(skill) {

    const data = skillDetails[skill];

    if (!data) return;


    /* Active card */

    skillCards.forEach(card => {
        card.classList.toggle(
            "is-active",
            card.dataset.skill === skill
        );
    });


    /* Content */

    detailTitle.textContent =
        data.title;

    detailDescription.textContent =
        data.description;


    /* Icon */

    detailIcon.className =
        `fa-solid ${data.icon}`;


    /* Tags */

    detailTags.innerHTML =
        data.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");


    /* Open */

    detailPanel.classList.add("is-open");


    /* Smooth scroll */

    setTimeout(() => {

        detailPanel.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }, 100);

}


skillCards.forEach(card => {

    card.addEventListener("click", () => {

        const skill =
            card.dataset.skill;

        /* Clicking active card closes it */

        if (
            card.classList.contains("is-active")
        ) {

            closeSkill();

            return;
        }

        openSkill(skill);

    });

});


function closeSkill() {

    detailPanel.classList.remove(
        "is-open"
    );

    skillCards.forEach(card => {
        card.classList.remove(
            "is-active"
        );
    });

}


detailClose.addEventListener(
    "click",
    closeSkill
);

/* =========================================
   INTERACTIVE PROFILE PHOTO
========================================= */

const profilePhoto = document.getElementById("profile-photo");
const profileInfo = document.getElementById("profile-info");
const profileClose = document.getElementById("profile-close");

if (profilePhoto && profileInfo && profileClose) {

    profilePhoto.addEventListener("click", () => {

        const isOpen = profileInfo.classList.contains("is-open");

        if (isOpen) {

            profileInfo.classList.remove("is-open");

        } else {

            profileInfo.classList.add("is-open");

            setTimeout(() => {
                profileInfo.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }, 100);

        }

    });


    profileClose.addEventListener("click", (event) => {

        event.stopPropagation();

        profileInfo.classList.remove("is-open");

    });

}

/* =========================================
MOBILE NAVIGATION
========================================= */

document.querySelectorAll(".navbar .nav-link").forEach(link => {
    link.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");

        if (!navbarCollapse) return;

        navbarCollapse.classList.remove("show");

        const navbarToggler = document.querySelector(".navbar-toggler");

        if (navbarToggler) {
            navbarToggler.classList.add("collapsed");
            navbarToggler.setAttribute("aria-expanded", "false");
        }
    });
});