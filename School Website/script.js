function calculateGPA() {
    const grade1 = parseFloat(document.getElementById('subject1').value);
    const grade2 = parseFloat(document.getElementById('subject2').value);
    const grade3 = parseFloat(document.getElementById('subject3').value);
    const grade4 = parseFloat(document.getElementById('subject4').value);

    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4)) {
        alert('Please enter all grades!');
        return;
    }

    if ([grade1, grade2, grade3, grade4].some(g => g < 0 || g > 100)) {
        alert('Grades must be between 0 and 100!');
        return;
    }

    const average = (grade1 + grade2 + grade3 + grade4) / 4;
    let gpa = (average / 100) * 4;
    gpa = gpa.toFixed(2);

    let gradeLetter;
    if (average >= 90) gradeLetter = 'A';
    else if (average >= 80) gradeLetter = 'B';
    else if (average >= 70) gradeLetter = 'C';
    else if (average >= 60) gradeLetter = 'D';
    else gradeLetter = 'F';

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        Your Average: ${average.toFixed(2)}%<br>
        GPA: ${gpa} / 4.0<br>
        Grade: ${gradeLetter}
    `;
    resultDiv.style.display = 'block';
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
