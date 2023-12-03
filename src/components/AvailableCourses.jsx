import CoursesItem from "./CoursesItem";

const Course = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="py-6 text-yellow text-4xl font-bold  text-center">
        Available Courses
      </h1>
      <div className="flex flex-col   justify-center mx-auto md:flex-row">
        <CoursesItem text="Digital Marketing" />
        <CoursesItem text="Digital Marketing" />
        <CoursesItem text="Digital Marketing" />
        <CoursesItem text="Digital Marketing" />
      </div>
    </div>
  );
};

export default Course;
