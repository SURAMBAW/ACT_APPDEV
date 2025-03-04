const courses = [
    { "name": "Web Development" },
    { "name": "Mobile App Development" },
    { "name": "Data Science" },
    { "name": "UI/UX Design" }
];

// Search logic
function searchCourses() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const coursesContainer = document.getElementById('coursesContainer');

    // Clear old results
    coursesContainer.innerHTML = '';

    // Filter courses
    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchInput)
    );

    if (filteredCourses.length > 0) {
        filteredCourses.forEach(course => {
            const div = document.createElement('div');
            div.textContent = course.name;
            div.classList.add('course-item');
            coursesContainer.appendChild(div);
        });
    } else {
        coursesContainer.innerHTML = '<p>No courses found.</p>';
    }
}

document.getElementById('searchButton').addEventListener('click', searchCourses);

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchCourses();
    }
});
