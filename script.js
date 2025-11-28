const skillsBtn = document.getElementById("skills-btn");
const skillsPopup = document.getElementById("skills-popup");
const closeSkills = document.getElementById("close-skills");

skillsBtn.onclick = () => skillsPopup.classList.remove("hidden");
closeSkills.onclick = () => skillsPopup.classList.add("hidden");
