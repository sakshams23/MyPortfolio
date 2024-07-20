import React, { Component } from 'react';
import cardData from './data'; 
import { FaGithub } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import Footer from './Footer';
export class Project extends Component {
    playVideo() {
        const media = this.videoplayer.nativeElement;
        media.muted = true; // without this line it's not working although I have "muted" in HTML
        media.play();
    };
    render() {
        
        return (
            <div className='laptop:pt-20 phone:pt-24'>
                <div className="wordart horizon phone:hidden laptop:block "><span class="text">PROJECT</span></div>
                <div className='laptop:flex laptop:flex-wrap  laptop:justify-start laptop:gap-16 laptop:px-20 laptop:-mt-[4.6rem] phone:px-4'>
                {cardData.map((card) => (
                    <div key={card.id} className="max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-700 dark:border-gray-700 mb-6 shadow-[rgba(0,_0,_0,_0.3)_0px_30px_90px]">
                        <a href="#">
                            <video className="rounded-t-lg" muted="true" onMouseOver={e => e.target.play()}
              onMouseOut={e => e.target.pause()} src={card.videoSrc} alt={card.title} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-lg tracking-tight text-gray-700 dark:text-white">{card.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                            <div className='flex flex-row justify-around py-2 '>
                            <a href={card.link1} className="inline-flex items-center text-3xl font-medium text-center bg-white rounded-2xl">
                            <FaGithub/>
                            </a>
                            <a href={card.link2} className="inline-flex items-center text-[31px] font-medium text-center bg-white rounded-2xl">
                            <FaRegCirclePlay/>
                            </a>
                            </div>
                            </div>
                            </div>
                ))}
                </div>
            </div>
        );
    }
}

export default Project;
