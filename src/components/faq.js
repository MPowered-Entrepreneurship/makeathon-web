import React, {useState} from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import {StaticImage} from "gatsby-plugin-image";
import makeIcon from "../images/assets/makeathon-icon.svg"
import { MakeIconUnfilled } from "./makeIconUnfilled";


function FAQ () {

    const [selected, setSelected] = useState(0)
    const [questions, setQuestions] = useState([false, false]);

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
       return( <li className="py-6 border-gray-200 border-solid border-b">
            <div className="flex justify-between items-center">
                <h3 className="text-gray-400 text-base  md:text-xl  xl:text-2xl w-10/12">{q}</h3>
                <div className="cursor-pointer" onClick={() => {setQuestions(selectedFunction(num)); console.log(questions)}}>
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
            // <div className="flex flex-col w-full">
            //     {/* <MakeIconUnfilled fill='text-yellow-101' classInfo="h-1/2 w-auto mx-10 p-0" /> */}
            //     <button onClick={() => selectedFunction(1)} className="flex items-center px-3 py-3 md:mr-3 md:mt-3">
            //         <p className="text-white hover:text-yellow-101 w-full">When is Makeathon 2022?</p>
            //     </button>
            //     {isSelected(1) && <p className="text-lg w-1/2 text-gray-400">Makeathon is a 36-hour long competition where students collaborate within interdisciplinary teams to design and create innovative projects. In the past, participants have created anything from Alexa integration with DoubleMap, an automatic sandwich maker, and even a miniature greenhouse. With the help of our sponsors, we are able to provide students with a platform to innovate and give life to their ideas. During the competition, participants will have access to materials, machinery, as well as the opportunity to learn from industry-leading companies.</p>}
            // </div>
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
            <ul>
                {realFAQBullet("When is Makeathon", "I love Makeathon", 1)}
                {realFAQBullet("GROOT GROOT GROOT", "I love Makeathon", 2)}
            </ul>
          </div>
          {/* <div class="md:w-2/3">
                    <div class="p-4">
                        <div class="mb-2">
                            <div class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                <div class="flex-auto">How to install it with windows server ?</div>
                                <div class="px-2 mt-1">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down w-5 h-5">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <div class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                <div class="flex-auto">How to use it with other integrations ?</div>
                                <div class="px-2 mt-1">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down w-5 h-5">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <div class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                <div class="flex-auto">How to build an app ?</div>
                                <div class="px-2 mt-1">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-5 h-5">
                                            <polyline points="18 15 12 9 6 15"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 text-justify text-left text-gray-800 mb-5 bg-white">Lorem, ipsum dolor sit amet consectetur <span class="font-bold">adipisicing elit</span>. Mollitia temporibus doloremque non eligendi unde ipsam? Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias, veritatis officia fugiat cumque quaerat earum adipisci?</div>
                        </div>
                        <div class="mb-2">
                            <div class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                <div class="flex-auto">How to download it ?</div>
                                <div class="px-2 mt-1">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down w-5 h-5">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <div class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                <div class="flex-auto">How to use extensions ?</div>
                                <div class="px-2 mt-1">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down w-5 h-5">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div> */}
            {/* <MakeIconUnfilled fill='text-yellow-101' classInfo="h-1/2 w-auto mx-10 p-0" />
                <button onClick={() => selectedFunction(1)} className="flex items-center px-3 py-3 md:mr-3 md:mt-3 border rounded text-white border-white hover:text-yellow-101 hover:border-yellow-101 focus:outline-none">
                    <svg className="fill-current h-3 w-3 outline-none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            {isSelected(1) && <p className="text-lg w-1/2 text-gray-400">Makeathon is a 36-hour long competition where students collaborate within interdisciplinary teams to design and create innovative projects. In the past, participants have created anything from Alexa integration with DoubleMap, an automatic sandwich maker, and even a miniature greenhouse. With the help of our sponsors, we are able to provide students with a platform to innovate and give life to their ideas. During the competition, participants will have access to materials, machinery, as well as the opportunity to learn from industry-leading companies.</p>} */}
          {/* </div>        */}
        </div>
      </div>
    )
  }

  export default FAQ;