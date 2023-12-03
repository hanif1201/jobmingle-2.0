import CourseSearchItem from "./CourseSearchItem";
const CouseSearch = () => {
  return (
    <div className="flex flex-col   ">
      <div className="flex flex-row justify-between mx-4 md:mx-10">
        <h1 className="py-6 text-black text-2xl font-bold  ">
          Top Course Searches
        </h1>
        <p className="py-6 text-yellow text-xl font-bold ">See More</p>
      </div>
      <div className="flex flex-col   justify-center  md:justify-around mx-10 md:flex-row    ">
        <CourseSearchItem />
        <CourseSearchItem />
        <CourseSearchItem />
        <CourseSearchItem />
      </div>
    </div>
  );
};

export default CouseSearch;
