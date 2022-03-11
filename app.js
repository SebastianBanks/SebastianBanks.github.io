const aboutSection = document.getElementById("aboutSection")
const skillsSection = document.getElementById("skillsSection")
const projectSection = document.getElementById("projectSection")
const contactSection = document.getElementById("contactSection")

const aboutLink = document.getElementById("about")
const skillsLink = document.getElementById("skills")
const projectsLink = document.getElementById("projects")
const contactLink = document.getElementById("contact")

aboutLink.style.color = "#7F6A93"

aboutLink.addEventListener("click", function(e) {
    aboutLink.style.color = "#7F6A93"
    skillsLink.style.color = "#282828"
    projectsLink.style.color = "#282828"
    contactLink.style.color = "#282828"
})

skillsLink.addEventListener("click", function(e) {
    aboutLink.style.color = "#282828"
    skillsLink.style.color = "#7F6A93"
    projectsLink.style.color = "#282828"
    contactLink.style.color = "#282828"
})

projectsLink.addEventListener("click", function(e) {
    aboutLink.style.color = "#282828"
    skillsLink.style.color = "#282828"
    projectsLink.style.color = "#7F6A93"
    contactLink.style.color = "#282828"
})

contactLink.addEventListener("click", function(e) {
    aboutLink.style.color = "#282828"
    skillsLink.style.color = "#282828"
    projectsLink.style.color = "#282828"
    contactLink.style.color = "#7F6A93"
})


aboutSection.addEventListener("mouseover", function (e) {
    aboutLink.style.color = "#7F6A93"
    skillsLink.style.color = "#282828"
    projectsLink.style.color = "#282828"
    contactLink.style.color = "#282828"
})

skillsSection.addEventListener("mouseover", function (e) {
    aboutLink.style.color = "#282828"
    skillsLink.style.color = "#7F6A93"
    projectsLink.style.color = "#282828"
    contactLink.style.color = "#282828"
})

projectSection.addEventListener("mouseover", function (e) {
    aboutLink.style.color = "#282828"
    skillsLink.style.color = "#282828"
    projectsLink.style.color = "#7F6A93"
    contactLink.style.color = "#282828"
})

contactSection.addEventListener("mouseover", function (e) {
    aboutLink.style.color = "#282828"
    skillsLink.style.color = "#282828"
    projectsLink.style.color = "#282828"
    contactLink.style.color = "#7F6A93"
})