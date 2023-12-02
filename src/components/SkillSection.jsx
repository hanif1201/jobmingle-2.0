import SkillItem from "./SkillItem";

const SkillSection = () => {
  return (
    <div className="flex flex-col   ">
      <div className="flex flex-row justify-between mx-4 md:mx-10">
        <h1 className="py-6 text-black text-2xl font-bold  ">
          Digital Skill Jobs
        </h1>
        <p className="py-6 text-yellow text-xl font-bold ">See More</p>
      </div>
      <div className="flex flex-col   justify-center  md:justify-around mx-10 md:flex-row    ">
        <SkillItem />

        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
      </div>
    </div>
  );
};

export default SkillSection;
