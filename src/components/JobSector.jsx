import JobSectionItem from "./JobSectorItem";

import choose001 from "../assets/choose001.png";
import choose002 from "../assets/choose002.png";
import choose003 from "../assets/choose003.png";

const Choose = () => {
  const text01 = "technology";

  const text02 = "Engineeering";

  const text03 = "Science";

  const text04 = "Machine Learning";

  return (
    <div className="flex flex-col   ">
      <h1 className="py-6 text-yellow text-4xl font-bold  text-center">
        Trending Job Sectors
      </h1>
      <div className="flex flex-col   justify-center mx-auto md:flex-row    ">
        <JobSectionItem text={text01} image={choose001} />

        <JobSectionItem text={text02} image={choose002} />
        <JobSectionItem text={text03} image={choose003} />
        <JobSectionItem text={text04} image={choose003} />
      </div>
    </div>
  );
};

export default Choose;
