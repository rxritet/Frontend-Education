export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Programming",
    instructor: "Dr. Smith",
    description:
      "Learn the fundamentals of programming with Python: variables, control flow, functions, and data structures.",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    instructor: "Prof. Johnson",
    description:
      "Deep dive into arrays, linked lists, trees, graphs, sorting and searching — with complexity analysis.",
  },
  {
    id: 3,
    title: "Web Development Fundamentals",
    instructor: "Dr. Lee",
    description:
      "Build modern web apps with HTML, CSS, JavaScript, React, and TypeScript from scratch.",
  },
  {
    id: 4,
    title: "Database Management Systems",
    instructor: "Prof. Brown",
    description:
      "Relational databases, SQL, normalization, transactions, and an intro to NoSQL solutions.",
  },
];

export function getCourseById(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}
