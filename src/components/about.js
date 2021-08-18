import React, {useState} from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import {StaticImage} from "gatsby-plugin-image";
import makeIcon from "../images/assets/makeathon-icon.svg"


function About () {

  
    return (
      <div id="about"className="w-full h-full flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white w-full text-center font-light text-5xl">WHAT IS <span className="font-bold text-yellow-101">MAKEATHON?</span></h1>
          <div className = "flex flex-col p-12 xl:flex-row w-full xl:pt-12 xl:w-2/3 lg:px-24 items-center justify-center">
            <img src={makeIcon} width="170" className="hidden xl:block mr-4" />
            <p className="text-lg text-gray-400 md:w-3/4 lg:w-2/3 xl:w-full">Makeathon is a 36-hour long competition where students collaborate within interdisciplinary teams to design and create innovative projects. In the past, participants have created anything from Alexa integration with DoubleMap, an automatic sandwich maker, and even a miniature greenhouse. With the help of our sponsors, we are able to provide students with a platform to innovate and give life to their ideas. During the competition, participants will have access to materials, machinery, as well as the opportunity to learn from industry-leading companies.</p>
          </div>        
        </div>
      </div>
    )
  }

  export default About;
