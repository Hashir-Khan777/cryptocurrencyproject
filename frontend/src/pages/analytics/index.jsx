import Tabs from "./tabs";
import About from "./about";
import Details from "./details";
import { useState } from "react";

const tabs = ["summary", "financials"];

const Analytics = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <>
      <Tabs tabs={tabs} isActive={isActive} setIsActive={setIsActive} />
      <About />
      <Details />
    </>
  );
};

export default Analytics;
