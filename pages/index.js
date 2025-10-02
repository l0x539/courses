import { useEffect, useState } from "react";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const res = await fetch("/api/courses"); // Connect to your backend API
      const data = await res.json();
      setCourses(data);
    }
    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Course Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <a
            key={course.id}
            href={`/courses/${course.id}`}
            className="border p-4 rounded hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p>{course.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
