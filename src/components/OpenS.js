import React, { Component } from 'react';
import cardData from './data2';
import { FaGithub } from "react-icons/fa";
import { IoGitPullRequestOutline } from "react-icons/io5";
export class OpenS extends Component {
    playVideo() {
        const media = this.videoplayer.nativeElement;
        media.muted = true;
        media.play();
    };
    render() {

        return (
            <div className='laptop:pt-20 phone:pt-24 '>
                <div className="wordart horizon phone:hidden laptop:block"><span class="text">OPEN SOURCE</span></div>
                <div className='laptop:flex laptop:flex-wrap  laptop:justify-start laptop:gap-16 phone:gap-16 laptop:px-20 laptop:-mt-[4.6rem] phone:px-4'>

                
            {cardData.map((card) => (
                <div key={card.id} className="max-w-xs bg-white border border-gray-200 rounded-lg  dark:bg-gray-700 dark:border-gray-700 mb-6 shadow-[rgba(0,_0,_0,_0.3)_0px_30px_90px]">
            
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 ">
               <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">{card.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                <div className='flex flex-row justify-around py-2 '>
                            <a href={card.link1} className="inline-flex items-center text-3xl font-medium text-center bg-white rounded-2xl">
                            <FaGithub/>
                            </a>
                            <a href={card.link2} className="inline-flex items-center text-2xl font-medium text-center bg-white rounded-lg">
                            <IoGitPullRequestOutline/>
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

export default OpenS;
