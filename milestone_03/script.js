var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skill').value;
    var resume = "\n    <h1>Resume</h1>\n    <h2>Personal Information</h2>\n    <p><b>Name: ".concat(name, "</b></p>\n    <p><b>Email: ").concat(email, "</b></p>\n    <p><b>Phone: ").concat(phone, "</b></p>\n    <h2>Education</h2>\n    <p>").concat(education, "</p>\n    <h2>Experience</h2>\n    <p>").concat(experience, "</p>\n    <h2>Skills</h2>\n    <p>").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume;
    }
    else {
        alert(resume);
    }
});
