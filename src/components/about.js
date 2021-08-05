import React, {useState} from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import {StaticImage} from "gatsby-plugin-image";
import makeIcon from "../images/assets/makeathon-icon.svg"


function About () {

  
    return (
      <div id="about"className="w-full h-full flex flex-col items-center p-32">
        <div className="border border-2 flex flex-col items-center h-full justify-center px-10 pt-12">
          <h1 className="text-white font-light text-5xl">WHAT IS <span className="font-bold text-yellow-101">MAKEATHON?</span></h1>
          <div className = "flex flex-row h-3/4 items-center justify-center">
            <img src={makeIcon} className="i hate this h-1/2 mx-10" />
            <p className="text-lg w-1/2 text-gray-400">Makeathon is a 36-hour long competition where students collaborate within interdisciplinary teams to design and create innovative projects. In the past, participants have created anything from Alexa integration with DoubleMap, an automatic sandwich maker, and even a miniature greenhouse. With the help of our sponsors, we are able to provide students with a platform to innovate and give life to their ideas. During the competition, participants will have access to materials, machinery, as well as the opportunity to learn from industry-leading companies.</p>
          </div>        
        </div>
      </div>
      //   <header className="static-top md:fixed min-w-full flex items-center justify-between flex-wrap bg-white-custom p-4" style={{'zIndex': '2'}}>
      //   <div onClick={() => scrollTo('#top')} className="flex items-center flex-shrink-0 text-white ml-2 mt-2.5">
      //       <StaticImage
      //           className=""
      //           width="170"
      //           src="../images/nav-logo.png"
      //           quality={95}
      //           formats={["AUTO", "WEBP", "AVIF"]}
      //           alt="Makeathon Logo"
      //       />
      //   </div>
      //   <div className="block md:hidden">
      //     <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-3 mr-3 mt-3 border rounded text-white border-white hover:text-yellow-101 hover:border-yellow-101 focus:outline-none">
      //       <svg className="fill-current h-3 w-3 outline-none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      //     </button>
      //   </div>
      //   <div className={`${ isExpanded ? `block` : `hidden` } font-sans w-full block flex-grow md:flex md:items-center md:w-auto mt-2`}>
      //     <div className="ml-auto text-center">
      //       <button onClick={() => scrollTo('#about')} className="filter drop-shadow-lg w-full text-lg font-normal hover:font-bold focus:outline-none md:w-auto block mt-4 md:inline-block md:mt-0 text-gray-200 hover:underline md:mr-10">
      //         about
      //       </button>
      //       <button onClick={() => scrollTo('#ourteam')} className="filter drop-shadow-lg w-full text-lg font-normal focus:outline-none md:w-auto block mt-4 md:inline-block md:mt-0 text-gray-200 hover:underline md:mr-10">
      //         our team
      //       </button>
      //       <button onClick={() => scrollTo('#eventinfo')} className="filter drop-shadow-lg w-full text-lg font-normal focus:outline-none md:w-auto block mt-4 md:inline-block md:mt-0 text-gray-200 hover:underline md:mr-10">
      //         event info
      //       </button>
      //       <button onClick={() => scrollTo('#faq')} className="filter drop-shadow-lg w-full text-lg font-normal focus:outline-none md:w-auto block mt-4 md:inline-block md:mt-0 text-gray-200 hover:underline md:mr-10">
      //         faq
      //       </button>
      //       <button onClick={() => scrollTo('#apply')} className="filter drop-shadow-lg w-full text-lg font-normal focus:outline-none md:w-auto block mt-4 md:inline-block md:mt-0 text-yellow-101 hover:underline md:mr-10">
      //         apply
      //       </button>
      //     </div>
      //   </div>
      // </header>
    )
  }

  export default About;