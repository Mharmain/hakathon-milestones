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
    var resume = "\n    <h1>Editable Resume</h1>\n    <h2>Personal Information</h2>\n    <p><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone: </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <h2>Education</h2>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <h2>Experience</h2>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    <h2>Skills</h2>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume;
    }
    else {
        alert(resume);
    }
});
