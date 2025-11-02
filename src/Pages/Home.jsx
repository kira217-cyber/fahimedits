import React from "react";
import Hero from "../Components/Hero/Hero";
import OurWork from "../Components/OurWork/OurWork";
import ProjectIdea from "../Components/ProjectIdea/ProjectIdea";
import Process from "../Components/Process/Process";
import Upwork from "../Components/Upwork/Upwork";
import ShotSend from "../Components/ShotSend/ShotSend";
import CaseStudy from "../Components/CaseStudy/CaseStudy";

const Home = () => {
  return (
    <div className="px-4">
      <Hero></Hero>     
      <ProjectIdea></ProjectIdea>
      <Upwork></Upwork>
      <OurWork></OurWork>
      <CaseStudy></CaseStudy>
      {/* <Process></Process> */}
      <Process></Process>
      <ShotSend></ShotSend>
    </div>
  );
};

export default Home;
