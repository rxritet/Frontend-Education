interface Course {
    id: number;
    title: string;
    instructor: string;
}

const courses: Course[] = [
    { id: 1, title: "Introduction to Programming", instructor: "Dr. Smith" },
    { id: 2, title: "Data Structures & Algorithms", instructor: "Prof. Johnson" },
    { id: 3, title: "Web Development Fundamentals", instructor: "Dr. Lee" },
    { id: 4, title: "Database Management Systems", instructor: "Prof. Brown" },
]

function Courses () {
    return (
        <div className="page">
            <h1>Courses</h1>
            <ul className="course-list">
                {courses.map(course => (
                    <li key={course.id} className="course-item">
                        <h2>{course.title}</h2>
                        <p>Instructor: {course.instructor}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Courses;