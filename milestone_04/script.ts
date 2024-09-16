const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skill') as HTMLTextAreaElement).value;
    const resume = `
    <h1>Editable Resume</h1>
    <h2>Personal Information</h2>
    <p><b>Name: </b><span contenteditable="true">${name}</span></p>
    <p><b>Email: </b><span contenteditable="true">${email}</span></p>
    <p><b>Phone: </b><span contenteditable="true">${phone}</span></p>
    <h2>Education</h2>
    <p contenteditable="true">${education}</p>
    <h2>Experience</h2>
    <p contenteditable="true">${experience}</p>
    <h2>Skills</h2>
    <p contenteditable="true">${skills}</p>
    `;
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume;
    }
    else {
        alert(resume);
    }
});