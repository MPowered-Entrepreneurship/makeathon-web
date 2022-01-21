import React, {useState} from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import {StaticImage} from "gatsby-plugin-image";
import makeIcon from "../images/assets/makeathon-icon.svg"
import { MakeIconUnfilled } from "./makeIconUnfilled";


function FAQ () {

    const [selected, setSelected] = useState(0)
    const [questions, setQuestions] = useState([false, false, false, false, false, false, false, false, false]);

    function isSelected(text) {
        return (selected !== text) ? false : true;
    }

    function selectedFunction(num){
        let questions_new = []
        for(let i = 0; i < questions.length; i++){
            if(i != num-1){
                questions_new.push(questions[i])
            }
            else{
                questions_new.push(!questions[i])
            }
        }
        return questions_new
    }

    function realFAQBullet(q, answer, num){
       return( <li className="py-6 border-gray-200 border-solid border-b" >
            <div className="flex justify-between items-center ">
                <h3 className="text-gray-400 text-base  md:text-xl  xl:text-2xl w-10/12">{q}</h3>
                <div className="cursor-pointer " onClick={() => {setQuestions(selectedFunction(num)); console.log(questions)}}>
                    {questions[num-1]? (
                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={9} y1={12} x2={15} y2={12} />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={9} y1={12} x2={15} y2={12} />
                            <line x1={12} y1={9} x2={12} y2={15} />
                        </svg>
                    )}
                </div>
            </div>
            {questions[num-1] && <p className="pt-2 md:pt-3  lg:pt-5 text-gray-400 text-sm md:text-base  xl:text-lg rounded-b-lg">{answer}</p>}
        </li>)
    }

    function FAQBullet(){
        return (
            <div class="mb-2 w-full text-left justify-center">
                <button onClick = {() => selectedFunction(1)} class="font-medium rounded-sm text-lg px-2 py-3 flex text-yellow-101 flex-row-reverse mt-2 cursor-pointer bg-transparent">
                    <div class="">How Do I Register?</div>
                    <div class="px-2 mt-1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-5 h-5">
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                        </div>
                    </div>
                </button>
                {isSelected(1) && <div class="p-2 text-justify text-left text-gray-800 mb-5 bg-white">Lorem, ipsum dolor sit amet consectetur <span class="font-bold">adipisicing elit</span>. Mollitia temporibus doloremque non eligendi unde ipsam? Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias, veritatis officia fugiat cumque quaerat earum adipisci?</div>}
            </div>
        )
    }

    return (
      <div id="faq"className="min-h-screen w-full h-full flex flex-col items-center p-32">
        <div className="flex flex-col items-center h-full px-10 pt-12">
          <h1 className="text-white font-light text-5xl">FREQUENTLY ASKED <span className="font-bold text-yellow-101">QUESTIONS</span></h1>
          {/* <div className = "flex flex-row h-3/4 items-center justify-center grid grid-cols-3"> */}
          <div className="w-10/12 mx-auto max-w-xl">
                {realFAQBullet("Where is Makeathon?", "Makeathon is" +
                        " scheduled for February 4-6, 2021. The event will" +
                        " be headquartered in the Duderstadt Center at the" +
                        " University of Michigan's North Campus, but all teams will be asked to work remotely.", 1)}
                {realFAQBullet("Who can participate in Makeathon?",
                    "Makeathon is open to all college students and all " +
                    "majors - from the University of Michigan - ranging from " +
                    "undergraduates to PhD. However, participants must be " +
                    "over the age of 18.",
                    2)}
                {realFAQBullet("How many people can be on a team?",
                    "Teams should be comprised of 1-6 people. Feel " +
                    "free to work with as many people as you are comfortable " +
                    "with in that range!", 3)}
                {realFAQBullet("What if I don't have a team?",
                    "No worries! There will be a channel on Slack " +
                    "that you can use to meet and find team members!",
                    4)}
                {realFAQBullet("Can we register as a team?",
                    "You and all your teammates should register individually!",
                    5)}
                {realFAQBullet("I don't have an idea yet. What should I do?",
                    "Keep those creative juices flowing. If you still " +
                    "don’t have an idea at the time of the event, our sponsoring" +
                    " partners will be on-board to help brainstorm and mentor " +
                    "projects.",
                    6)}
                {realFAQBullet("I’m a beginner. Should I still participate?",
                    "Don’t worry! We encourage people of all skill " +
                    "levels to come and learn! We have tons of mentors, " +
                    "teachers, and experienced makers to help out. Our main " +
                    "goal is to provide resources and focus on everyone learning " +
                    "something new at the weekend!",
                    7)}
                {realFAQBullet("Should I be starting on my project right now?",
                    "Nope! In the spirit of Makeathon, we’re asking " +
                    "participants to avoid bringing projects that have " +
                    "already been started.",
                    8)}
                {realFAQBullet("How much does it cost for me to " +
                    "participate in Makeathon?",
                    "Makeathon is FREE for all participants. The " +
                    "event will encompass material costs.",
                    9)}
          </div>
        </div>
      </div>
    )
  }

  export default FAQ;
