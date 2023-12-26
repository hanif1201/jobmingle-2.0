import PartnerItem from "./PartnerItem";

import Binance from "../assets/Binance.png";
import Google from "../assets/Google.png";
import UNESCO from "../assets/UNESCO.png";

const Partner = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="py-6 text-yellow text-3xl font-bold  text-center">
        Our Partners and Sponsors
      </h1>
      <div className="flex    justify-center mx-auto flex-row overflow-x-scroll">
        <PartnerItem image={Google} />
        <PartnerItem image={UNESCO} />
        <PartnerItem image={Binance} />
        <PartnerItem image={Google} />
        <PartnerItem image={UNESCO} />
        <PartnerItem image={Binance} />
      </div>
    </div>
  );
};

export default Partner;
