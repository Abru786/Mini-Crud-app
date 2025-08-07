const apiUrl = '/students';
const form = document.getElementById('student-form');
const idInput = document.getElementById('student-id');
const nameInput = document.getElementById('student-name');
const emailInput = document.getElementById('student-email');
const courseInput = document.getElementById('student-course');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const formTitle = document.getElementById('form-title');
const tableBody = document.querySelector('#students-table tbody');

function fetchStudents() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            tableBody.innerHTML = '';
            data.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.course}</td>
                    <td>
                        <button class="btn btn-sm btn-warning me-1" onclick="editStudent(${student.id})">Edit</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        });
}

form.onsubmit = function(e) {
    e.preventDefault();
    const student = {
        name: nameInput.value,
        email: emailInput.value,
        course: courseInput.value
    };
    const id = idInput.value;
    if (id) {
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        }).then(() => {
            resetForm();
            fetchStudents();
        });
    } else {
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        }).then(() => {
            resetForm();
            fetchStudents();
        });
    }
};

window.editStudent = function(id) {
    fetch(`${apiUrl}/${id}`)
        .then(res => res.json())
        .then(student => {
            idInput.value = student.id;
            nameInput.value = student.name;
            emailInput.value = student.email;
            courseInput.value = student.course;
            submitBtn.textContent = 'Update';
            cancelBtn.style.display = '';
            formTitle.textContent = 'Edit Student';
        });
};

window.deleteStudent = function(id) {
    if (confirm('Are you sure you want to delete this student?')) {
        fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
            .then(() => fetchStudents());
    }
};

function resetForm() {
    idInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
    courseInput.value = '';
    submitBtn.textContent = 'Add';
    cancelBtn.style.display = 'none';
    formTitle.textContent = 'Add Student';
}

cancelBtn.onclick = resetForm;

// Initial load
fetchStudents();