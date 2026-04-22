import { Link, useLoaderData, useParams } from "react-router-dom";
import type { Course } from "./data";

interface LoaderData {
  course: Course;
}

function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const { course } = useLoaderData() as LoaderData;

  return (
    <div className="page">
      <Link to="/courses" className="back-link">
        ← Back to Courses
      </Link>
      <h1>{course.title}</h1>
      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p>{course.description}</p>
      <p className="route-info">Route ID parameter: {id}</p>
    </div>
  );
}

export default CourseDetail;
