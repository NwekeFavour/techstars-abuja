import Header from '../components/header';
import {Button} from "@/components/ui/button"
import Coding from "../../public/image/coding..svg"
import Google from "../../public/image/googleforstartups.svg"
import Brex from "../../public/image/brex.svg"
import Deel from "../../public/image/deel.svg"
function HeroSection(props) {
    return (
        <div className='hero bg-black  min-h-screen overflow-hidden'>
            <Header/>
            <div className=''>
                <div className='flex justify-center items-center sm:my-40 sam md:my-40 md:mx-20 xl:my-32 sm:mx-8 mx-5 xl:mx-30'>
                    <div className='md:w-[797px]'>
                        <div className='bg-white  upc sm:ms-6 ms-5 md:ms-0 lg:ms-6 w-fit border-2 px-6 py-2 rounded-[20px] mb-2  lg:mb-0 md:mb-3'>
                            <p className="m-0 uppercase text-[#439642] text-[12px] font-bold!"><span className='text-[#242424]'>upcoming</span> new event 2026</p>
                        </div>
                        <div>
                            <p className="m-0 text-center text-white lg:text-[40px] md:text-[36px] leading-10 sm:text-[35px] text-[28px] font-bold sm:leading-[55px] tracking-[-1%]">Experience the Power of Innovation and Collaboration in Abuja</p>
                        </div>
                        <div className='mt-4'>
                            <p className="m-0 mx-2 sm:mx-18 font-medium sm:text-[18px] text-white text-[16px] leading-[29px] text-center">Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world to showcase the local startup ecosystem through meetups, lectures, discussions, and celebrations.</p>
                        </div>
                        <div className='flex justify-center items-center my-10'>
                            <Button className="text-white lg:text-[20px] sm:text-[18px] md:text-[18px] hover:bg-[#132513] hover:text-[#ffff] px-8 text-[17px] md:px-12 sm:px-14 sm:py-7 lg:px-9 py-7 rounded-[20px] bg-[#439642]">Register Now</Button>
                        </div>
                        <div className='mt-4'>
                            <div className='flex items-center justify-center lg:space-x-16 sm:space-x-8 space-x-6 w-[320px] sm:w-[450px] md:space-x-10 mx-auto bg-white lg:w-[617px] md:w-[500px] rounded-[30px] h-[90px] sm:h-[120px]'>
                                <div>
                                    <div>
                                        <p className="m-0 text-[#439642] md:text-[40px] sm:text-[35px] text-[20px] font-extrabold tracking-[-1%] text-center">128</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[#242424] text-[12px] md:text-[16px] font-extrabold text-center">Days</p>
                                    </div>
                                </div>   
                                <div>
                                    <div>
                                        <p className="m-0 text-[#439642] text-center md:text-[40px] sm:text-[35px] text-[20px] font-extrabold tracking-[-1%] ">11</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[#242424] text-[12px] md:text-[16px]  font-extrabold text-center">Hours</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="m-0 text-[#439642] md:text-[40px] sm:text-[35px] text-[20px] font-extrabold tracking-[-1%] text-center">36</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[#242424] text-[12px] md:text-[16px] font-extrabold text-center">Minutes</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="m-0 text-[#439642]  md:text-[40px] sm:text-[35px] text-[20px] font-extrabold tracking-[-1%] text-center">44</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[#242424] text-[12px] md:text-[16px] font-extrabold text-center">Seconds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-l-[30px] rounded-b-none rounded-r-[30px] w-full md:h-[70px] lg:h-[89px]'>
                    <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-6 justify-items-center mx-10 py-6">
                        <div>
                            <img src={Google} className='w-[155px] h-[50px]' alt="techstars-abuja-coding-google-for-startups" />
                        </div>
                        <div>
                            <img src={Brex} className='w-[155px] h-[50px]' alt="techstars-abuja-coding-brex" />
                        </div>
                        <div>
                            <img src={Deel} className='w-[155px] h-[50px]' alt="techstars-abuja-coding-icon-deel" />
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