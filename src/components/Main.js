import React, { Component } from 'react'
import {ReactTyped} from "react-typed";
import Resume from '../assets/RESUME.pdf'
export class Main extends Component {
  render() {
    return (
        <div className=" h-full flex flex-col items-start justify-evenly laptop:px-28 laptop:pt-40  text-black phone:px-18 phone:pt-28 phone:px-5">
        <ul className=" list-none">
            <li className=" laptop:font-semibold laptop:text-3xl laptop:mb-3 phone:text-xl phone:mb-1  ">Hi! My name is Saksham Soni</li>
            <li className=" laptop:text-2xl laptop:font-medium phone:text-lg">
        <ReactTyped
          strings={["Full Stack Developer", "Competitive Programmer"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        /></li>
            <li className=" laptop:mt-3 laptop:text-xl phone:text-xs">
                As a highly motivated individual, I am currently pursuing a Bachelor's degree in Electronics Engineering from Kamla Nehru Institute of Technology Sultanpur.My enthusiasm for programming has driven me to acquire proficiency in various languages, such as Java, C++, JavaScript, and Python. I have a keen interest in cutting-edge web technologies, particularly MERN Stack, and have hands-on experience in developing local websites. Emphasising the value of teamwork, I actively seek opportunities to collaborate and learn from peers. Feel free to reach out for discussions on anything related to programming and web development.
            </li>
            <li className="mt-6 laptop:text-lg phone:text-xs">
                <button  className=" bg-gray-300 text-black font-mono  px-4 py-2 rounded  shadow-[rgba(0,_0,_0,_0.3)_0px_30px_90px]  transition transform hover:scale-105 active:scale-95">
                    <a href={Resume} download="Saksham_Soni.pdf" className=" text-black ">Download Resume</a>
                </button>
            </li>
            <li id="about_section"></li>
        </ul>
    </div>
    
    )
  }
}

export default Main
