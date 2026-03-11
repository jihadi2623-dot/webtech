// PROJECT DATA (Dynamic Content)

const projects = [

    {
        title: "Student Management System",
        desc: "A web system to manage students.",
        img: "images/project1.jpg",
        link: "#"
    },

    {
        title: "Weather App",
        desc: "Weather forecast using API.",
        img: "images/project2.jpg",
        link: "#"
    },

    {
        title: "Online Store",
        desc: "Simple ecommerce website.",
        img: "images/project3.jpg",
        link: "#"
    }

]

// RENDER PROJECTS

const container = document.getElementById("project-container");

projects.forEach(project => {

    let card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `

<img src="${project.img}">
<h3>${project.title}</h3>
<p>${project.desc}</p>
<a href="${project.link}">View Project</a>

`;

    container.appendChild(card);

});


// DARK MODE TOGGLE

const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
}

toggle.onclick = () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}


// FORM VALIDATION

document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Name required";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Valid email required";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (subject === "") {
        document.getElementById("subjectError").innerText = "Subject required";
        valid = false;
    } else {
        document.getElementById("subjectError").innerText = "";
    }

    if (message === "") {
        document.getElementById("messageError").innerText = "Message required";
        valid = false;
    } else {
        document.getElementById("messageError").innerText = "";
    }

    if (valid) {
        alert("Message Sent Successfully!");
    }

});


// SCROLL TO TOP BUTTON

const scrollBtn = document.getElementById("scrollTop");

window.onscroll = function () {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

}

scrollBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}