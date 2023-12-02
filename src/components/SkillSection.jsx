import SkillItem from "./SkillItem";

import choose001 from "../assets/choose001.png";
import choose002 from "../assets/choose002.png";
import choose003 from "../assets/choose003.png";

const SkillSection = () => {
  const text01 = "technology";

  const text02 = "Engineeering";

  const text03 = "Science";

  const text04 = "Machine Learning";

  return (
    <div className="flex flex-col   ">
      <div className="flex flex-row justify-between mx-4 md:mx-10">
        <h1 className="py-6 text-black text-2xl font-bold  ">
          Digital Skill Jobs
        </h1>
        <p className="py-6 text-yellow text-xl font-bold ">See More</p>
      </div>
      <div className="flex flex-col   justify-center  md:justify-between mx-auto md:flex-row    ">
        <SkillItem text={text01} image={choose001} />

        <SkillItem text={text02} image={choose002} />
        <SkillItem text={text03} image={choose003} />
        <SkillItem text={text04} image={choose003} />
      </div>
    </div>
  );
};

export default SkillSection;
