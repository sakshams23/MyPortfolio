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
            <li className=" laptop:mt-3 laptop:text-xl phone:text-sm">
                As a passionate and driven individual, I am currently pursuing a Bachelor’s degree in Electronics Engineering from Kamla Nehru Institute of Technology Sultanpur, with an expected graduation in May 2025. My strong enthusiasm for technology and problem-solving has led me to master programming languages like Java, C++, JavaScript, and Python, and to develop proficiency in modern web technologies, particularly the MERN stack. <br> With expertise in Machine Learning and Artificial Intelligence, I have honed my skills in leveraging tools like Pandas, Scikit-learn, and TensorFlow to build intelligent, data-driven solutions. I am proficient in working with Conda for efficient environment management and have experience using Langchain to develop innovative solutions in natural language processing and AI-driven applications. Additionally, I am a Salesforce Certified AI Associate, showcasing my commitment to staying updated with the latest advancements in AI technologies and industry practices. <br> I thrive in collaborative environments, actively seeking opportunities to learn from peers and contribute to innovative solutions. I am always eager to discuss programming, web development, AI, and emerging technologies that drive impactful change.
            </li>
            <li className="mt-6 laptop:text-lg phone:text-sm">
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
