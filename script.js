// Function to generate input fields based on number of subjects
function generateFields() {
  const numSubjects = document.getElementById('numSubjects').value;
  const form = document.getElementById('cgpaForm');
  form.innerHTML = ''; // Clear the form

  // Generate input fields for each subject
  for (let i = 1; i <= numSubjects; i++) {
      const div = document.createElement('div');
      div.classList.add('subject');

      // Create input for grade
      const gradeLabel = document.createElement('label');
      gradeLabel.setAttribute('for', `subject${i}Grade`);
      gradeLabel.textContent = `Subject ${i} Grade:`;
      const gradeInput = document.createElement('input');
      gradeInput.type = 'text';
      gradeInput.id = `subject${i}Grade`;
      gradeInput.placeholder = 'Enter Grade (O, A+, A, B+, B, FAIL)';
      gradeInput.classList.add('input-field');

      // Create input for credits
      const creditsLabel = document.createElement('label');
      creditsLabel.setAttribute('for', `subject${i}Credits`);
      creditsLabel.textContent = `Subject ${i} Credits:`;
      const creditsInput = document.createElement('input');
      creditsInput.type = 'number';
      creditsInput.id = `subject${i}Credits`;
      creditsInput.placeholder = 'Enter Credits';
      creditsInput.classList.add('input-field');

      // Append fields to the div
      div.appendChild(gradeLabel);
      div.appendChild(gradeInput);
      div.appendChild(creditsLabel);
      div.appendChild(creditsInput);

      // Append the div to the form
      form.appendChild(div);
  }
}

// Function to calculate CGPA
function calculateCGPA() {
  const numSubjects = document.getElementById('numSubjects').value;
  const gradePoints = {
      "O": 10,
      "A+": 9,
      "A": 8,
      "B+": 7,
      "B": 6,
      "FAIL": 0
  };

  let totalGradePoints = 0;
  let totalCredits = 0;

  // Loop through all subjects
  for (let i = 1; i <= numSubjects; i++) {
      const grade = document.getElementById(`subject${i}Grade`).value.toUpperCase();
      const credits = parseFloat(document.getElementById(`subject${i}Credits`).value);

      if (gradePoints[grade] !== undefined && !isNaN(credits)) {
          totalGradePoints += gradePoints[grade] * credits;
          totalCredits += credits;
      }
  }

  // Calculate and display CGPA
  if (totalCredits > 0) {
      const cgpa = totalGradePoints / totalCredits;
      document.getElementById("cgpa").textContent = cgpa.toFixed(2);
  } else {
      alert("Please enter valid grades and credits.");
  }
}
