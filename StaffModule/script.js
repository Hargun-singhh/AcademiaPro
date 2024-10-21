const studentList = document.getElementById('student-list');
const attendance = document.getElementById('attendance');
const markAllPresent = document.getElementById('mark-all-present');
const subject = document.getElementById('subject');
const date = document.getElementById('date');

// Add event listeners
studentList.addEventListener('change', updateAttendance);
attendance.addEventListener('change', updateAttendance);
markAllPresent.addEventListener('change', updateAttendance);

// Update attendance when selection changes
function updateAttendance() {
    const selectedStudent = studentList.value;
    const selectedAttendance = attendance.value;
    const markAllPresentChecked = markAllPresent.checked;

    // Update attendance for each student
    const studentRecords = getStudentRecords();
    studentRecords.forEach(record => {
        if (selectedStudent === record.studentName) {
            record.attendance = selectedAttendance;
        }
    });

    // Mark all students present if checked
    if (markAllPresentChecked) {
        studentRecords.forEach(record => {
            record.attendance = 'Present';
        });
    }

    // Display updated attendance
    displayAttendance(studentRecords);
}

// Get student records from database (mock data for demo)
function getStudentRecords() {
    return [
        { studentName: 'Harshita Sharma', attendance: 'Absent' },
        { studentName: 'Hargun Deep Singh', attendance: 'Present' },
        { studentName: 'Kashvi Chuchra', attendance: 'Absent' },
        { studentName: 'Noor Gumber', attendance: 'Present' },
        // Add more students here
    ];
}

// Display attendance for each student
function displayAttendance(studentRecords) {
    const attendanceSection = document.getElementById('attendance');
    attendanceSection.innerHTML = '';

    studentRecords.forEach(record => {
        const attendanceItem = document.createElement('div');
        attendanceItem.textContent = `${record.studentName}: ${record.attendance}`;
        attendanceSection.appendChild(attendanceItem);
    });
}