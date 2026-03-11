document.getElementById('student-form').addEventListener('submit', addStudent);

function addStudent(event) {

	event.preventDefault();

	let name = document.getElementById('student-name').value;
	let id = document.getElementById('student-id').value;
	let semester = document.getElementById('student-semester').value;
	let email = document.getElementById('student-email').value;

	if (name === '' || id === '' || semester === '' || email === '') {
		alert("Please fill all fields");
		return;
	}

	let li = document.createElement('li');
	li.classList.add('student-item');

	let span = document.createElement('span');
	span.classList.add('student-info');

	span.textContent = `Name: ${name} | ID: ${id} | Semester: ${semester} | Email: ${email}`;

	let editButton = document.createElement('button');
	editButton.textContent = 'Edit';
	editButton.classList.add('btn-edit');

	editButton.addEventListener('click', function () {
		editStudent(span);
	});

	let deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete';
	deleteButton.classList.add('btn-delete');

	deleteButton.addEventListener('click', function () {
		li.remove();
	});

	li.appendChild(span);
	li.appendChild(editButton);
	li.appendChild(deleteButton);

	document.getElementById('student-list').appendChild(li);

	document.getElementById('student-name').value = '';
	document.getElementById('student-id').value = '';
	document.getElementById('student-semester').value = '';
	document.getElementById('student-email').value = '';

}

function editStudent(studentInfo) {

	let newName = prompt("Enter new name:");
	let newId = prompt("Enter new ID:");
	let newSemester = prompt("Enter new Semester:");
	let newEmail = prompt("Enter new Email:");

	if (newName && newId && newSemester && newEmail) {

		studentInfo.textContent = `Name: ${newName} | ID: ${newId} | Semester: ${newSemester} | Email: ${newEmail}`;

	}

}

function changeListStyle() {

	let students = document.querySelectorAll('.student-item');

	students.forEach(student => {
		student.classList.toggle('highlight');
	});

}

let changeStyleButton = document.createElement('button');

changeStyleButton.textContent = 'Highlight Students';

changeStyleButton.addEventListener('click', changeListStyle);

document.body.appendChild(changeStyleButton);