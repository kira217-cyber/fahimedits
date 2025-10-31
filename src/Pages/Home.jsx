import React from "react";
import Hero from "../Components/Hero/Hero";
import OurWork from "../Components/OurWork/OurWork";
import ProjectIdea from "../Components/ProjectIdea/ProjectIdea";
import OurTeam from "../Components/OurTeam/OurTeam";
import Process from "../Components/Process/Process";
import Upwork from "../Components/Upwork/Upwork";
// import WeEdit from "../Components/WeEdit/WeEdit";
import ShotSend from "../Components/ShotSend/ShotSend";

const Home = () => {
  return (
    <div>
      <Hero></Hero>     
      <ProjectIdea></ProjectIdea>
      <Upwork></Upwork>
      <OurWork></OurWork>
       <Process></Process>
      {/* <WeEdit></WeEdit> */}
      {/* <OurTeam></OurTeam> */}
      <ShotSend></ShotSend>
    </div>
  );
};

export default Home;
