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
    <h1>Resume</h1>
    <h2>Personal Information</h2>
    <p><b>Name: ${name}</b></p>
    <p><b>Email: ${email}</b></p>
    <p><b>Phone: ${phone}</b></p>
    <h2>Education</h2>
    <p>${education}</p>
    <h2>Experience</h2>
    <p>${experience}</p>
    <h2>Skills</h2>
    <p>${skills}</p>
    `;
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume;
    }
    else {
        alert(resume);
    }
});