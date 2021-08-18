import React, {useState} from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import {StaticImage} from "gatsby-plugin-image";
import makeIcon from "../images/assets/makeathon-icon.svg"


function Contact () {


    return (
      <div id="about"className="w-full h-full flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white w-full text-center font-light text-5xl">CONTACT <span className="font-bold text-yellow-101">US</span></h1>
          <div className = "flex flex-col p-12 xl:flex-row w-full xl:pt-12 xl:w-2/3 lg:px-24 items-center justify-center">
            <p className="text-lg text-gray-400 md:w-3/4 lg:w-2/3 xl:w-full">If you have any questions, big or small, don’t hesitate to reach out! You can email us at mpowered-exec@umich.edu.</p>
            <img src={makeIcon} width="170" className="hidden xl:block mr-4" />
          </div>
        </div>
      </div>
    )
  }

  export default Contact;
