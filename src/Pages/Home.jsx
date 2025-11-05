import React from "react";
import Hero from "../Components/Hero/Hero";
import OurWork from "../Components/OurWork/OurWork";
import ProjectIdea from "../Components/ProjectIdea/ProjectIdea";
import Process from "../Components/Process/Process";
import Upwork from "../Components/Upwork/Upwork";
import ShotSend from "../Components/ShotSend/ShotSend";
import CaseStudy from "../Components/CaseStudy/CaseStudy";
import Button from "../Components/Button/Button";
// import CaseStudy2 from "../Components/CaseStudy/CaseStudy2";

const Home = () => {
  return (
    <div className="px-4">
      <Hero></Hero>     
      <ProjectIdea></ProjectIdea>
      <Button></Button>
      <Upwork></Upwork>
      <OurWork></OurWork>
      <div className="mt-8 mb-8">
        <Button></Button>
      </div>
      <CaseStudy></CaseStudy>
      <div className="mt-8 mb-8">
        <Button></Button>
      </div>
      {/* <CaseStudy2></CaseStudy2> */}
      <Process></Process>
      <ShotSend></ShotSend>
    </div>
  );
};

export default Home;
