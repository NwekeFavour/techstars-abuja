import React from 'react';
import Header from '../components/header';
import {Button} from "@/components/ui/button"
import Coding from "../../public/image/coding..svg"
function HeroSection(props) {
    return (
        <div className='hero bg-black  min-h-screen overflow-hidden'>
            <Header/>
            <div className=''>
                <div className='flex justify-center items-center sm:my-40 sam md:my-40 md:mx-20 xl:my-32 sm:mx-8 mx-5 xl:mx-30'>
                    <div className='md:w-[797px]'>
                        <div className='bg-white upc sm:ms-6 ms-5 md:ms-0 lg:ms-6 w-fit border-2 px-6 py-2 rounded-[20px] mb-2  lg:mb-0 md:mb-3'>
                            <p className="m-0 uppercase text-[#0C0C9D] text-[12px] font-bold!"><span className='text-[#9D0C2C]'>upcoming</span> new event 2026</p>
                        </div>
                        <div>
                            <p className="m-0 text-center text-white lg:text-[40px] md:text-[36px] leading-[40px] sm:text-[35px] text-[28px] font-bold sm:leading-[55px] tracking-[-1%]">Experience the Power of Innovation and Collaboration in Abuja</p>
                        </div>
                        <div className='mt-4'>
                            <p className="m-0 mx-10 sm:mx-18 font-medium sm:text-[18px] text-white text-[16px] leading-[29px] text-center">Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world to showcase the local startup ecosystem through meetups, lectures, discussions, and celebrations.</p>
                        </div>
                        <div className='flex justify-center items-center my-10'>
                            <Button className="text-white lg:text-[20px] sm:text-[18px] md:text-[18px] hover:bg-white hover:text-[#0C0C9D] px-8 text-[17px] md:px-12 sm:px-14 sm:py-7 lg:px-9 py-7 rounded-[20px] bg-[#0C0C9D]">Register Now</Button>
                        </div>
                        <div className='mt-4'>
                            <div className='flex items-center justify-center lg:space-x-16 sm:space-x-8 space-x-6 w-[360px] sm:w-[450px] md:space-x-10 mx-auto bg-white lg:w-[617px] md:w-[500px] rounded-[30px] h-[100px] sm:h-[120px]'>
                                <div>
                                    <div>
                                        <p className="m-0 text-[#0C0C9D] md:text-[40px] sm:text-[35px] text-[30px] font-extrabold tracking-[-1%] text-center">128</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[#9D0C2C] md:text-[16px] font-extrabold text-center">Days</p>
                                    </div>
                                </div>   
                                <div>
                                    <div>
                                        <p className="m-0 text-[#0C0C9D] text-center md:text-[40px] sm:text-[35px] text-[30px] font-extrabold tracking-[-1%] ">128</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[#9D0C2C] md:text-[16px]  font-extrabold text-center">Days</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="m-0 text-[#0C0C9D] md:text-[40px] sm:text-[35px] text-[30px] font-extrabold tracking-[-1%] text-center">128</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[#9D0C2C] md:text-[16px] font-extrabold text-center">Days</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="m-0 text-[#0C0C9D]  md:text-[40px] sm:text-[35px] text-[30px] font-extrabold tracking-[-1%] text-center">128</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[#9D0C2C] md:text-[16px] font-extrabold text-center">Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-l-[30px] rounded-b-none rounded-r-[30px] w-full md:h-[70px] lg:h-[89px]'>
                    <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-6 justify-items-center mx-10 py-6">
                        <div>
                            <img src={Coding} alt="techstars-abuja-coding-icon" />
                        </div>
                        <div>
                            <img src={Coding} alt="techstars-abuja-coding-icon" />
                        </div>
                        <div>
                            <img src={Coding} alt="techstars-abuja-coding-icon" />
                        </div>
                        <div>
                            <img src={Coding} alt="techstars-abuja-coding-icon" />
                        </div>
                        <div>
                            <img src={Coding} alt="techstars-abuja-coding-icon" />
                        </div>
                        <div>
                            <img src={Coding} alt="techstars-abuja-coding-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;