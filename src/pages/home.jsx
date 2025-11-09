import { CalendarDays, MapPin } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from '../components/heroSection';
import Pictures from "../../public/image/pictures.svg"
import CodingP from "../../public/image/coding-p.svg"
import CodingPG from "../../public/image/coding-pg.svg"
import PartyP from "../../public/image/party-pooper.svg"
import {Button} from "@/components/ui/button"
import Coding from "../../public/image/coding..svg"
import ImageOne from "../../public/image/Ellipse 1.svg"
import ImageTwo from "../../public/image/Ellipse 2.svg"
import ImageThree from "../../public/image/Ellipse 3.svg"
import Deel from "../../public/image/deel.svg"
import Brex from "../../public/image/brex.svg"
import Google from "../../public/image/googleforstartups.svg"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Events from '../components/events';
import Contacts from '../components/contacts';
import Footer from '../components/footer';
function Home() {
    const [event, setEvent] = useState('Upcoming')
    return (
        <div>
            <HeroSection/>
            <div className=''>
                <div className='md:flex items-start md:gap-4 lg:gap-6 justify-around md:m-10 sm:m-8 m-7 xl:m-15'>
                    <div className=''>
                        <div className="bg-white md:mx-0 mx-auto shadow-[0_0_15px_#a1a1a1]  w-fit px-6  py-2 xl:mt-8 rounded-[20px] mb-2 md:mb-3">
                            <p className="m-0 uppercase text-[#439642] text-[12px] font-bold!"><span className=' text-[#439642] '>event</span> overview</p>
                        </div>
                        <div className='xl:w-[588px]! md:w-[450px]'>
                            <p className="m-0 md:text-[30px] xl:text-[35px] sm:text-[28px] font-extrabold text-[20px] mb-5 sm:text-start text-center md:leading-10 xl:leading-[55px] md:mb-2 tracking-[-1%]  sm:leading-[50px]">Get latest info about the event</p>
                            <p className="m-0 md:text-[17px] md:text-start text-center text-[16px] xl:text-[18px] md:max-w-[550px]  sm:leading-7 lg:leading-[34px]">Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world to showcase the local startup ecosystem through meetups, lectures, discussions, and celebrations.</p>
                        </div>
                        <div className='md:flex xl:w-[665px] md:w-[450px] sm:mt-10  md:mt-14 mt-9 items-center justify-start gap-4'>
                            <div className="bg-white shadow-[0_0_15px_#a1a1a1] flex gap-5 items-center justify-start w-full md:w-[250px] sm:h-[100px] xl:w-[317px] h-[94px] ps-4 xl:h-[120px] sm:ps-3 xl:ps-7 py-0 sm:py-8 rounded-[20px] mb-7 lg:mb-0 md:mb-3 ">
                                <div className='bg-[#439642] w-fit rounded-full p-4'>
                                    <MapPin className='text-white'/>
                                </div>
                                <div>
                                    <div className='sm:mt-0 mt-0'>
                                        <p className="m-0 uppercase text-[#242424] text-[16px] font-bold">where</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[13px] text-[#000000] opacity-60">to be announced....</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-[0_0_15px_#a1a1a1] flex gap-5 items-center justify-start w-full md:w-[250px] sm:h-[100px] xl:w-[317px] h-[94px] ps-4 xl:h-[120px] sm:ps-3 xl:ps-7 py-0 sm:py-8 rounded-[20px] mb-2 lg:mb-0 md:mb-3">
                                <div className='bg-[#439642] w-fit rounded-full p-4'>
                                    <CalendarDays className='text-white'/>
                                </div>
                                <div>
                                    <div className='sm:mt-0 mt-3'>
                                        <p className="m-0 uppercase text-[#242424] text-[16px] font-bold">when</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[13px] text-[#000000] opacity-60">Monday To Friday<br/> March 30th - April 3rd, 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white shadow-[0_0_15px_#a1a1a1] lg:flex xl:gap-5 items-center justify-start w-full lg:w-[500px] xl:w-[637px] mt-6 lg:h-[120px] h-[156px] px-4  sm:px-4 xl:ps-7 py-8 rounded-[20px] mb-2 lg:mb-0 md:mb-3'>
                            <p className="m-0 md:text-[16px] text-black font-bold">ORGANIZING PARTNER:</p>
                            <div className='lg:flex hidden items-center justify-between'>
                                <div>
                                    <img src={CodingP} alt="Techstars-abuja-coding-image" />
                                </div>
                                <div>
                                    <img src={CodingPG} alt="Techstars-abuja-coding-image-two" />
                                </div>
                            </div>
                            <div className='lg:hidden sm:flex items-center justify-end md:justify-between mt-3'>
                                <div className='flex justify-center'>
                                    <img src={CodingP} alt="Techstars-abuja-coding-image" />
                                </div>
                                <div className='flex justify-center'>
                                    <img src={CodingPG} alt="Techstars-abuja-coding-image-two" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sm:mt-14 mt-12 md:mt-0'>
                        <img className='md:w-[590px] w-[300px] sm:w-[320px] mx-auto min-w-[250px] lg:h-[590px]'  src={Pictures} alt='techstars-abuja-community-image'/>
                    </div>                
                </div>   
            </div>
            <div className='border-b border-dashed my-10 w-[70%] md:w-1/2  mx-auto border'></div>    
            <div>
                <div className="bg-white mx-auto shadow-[0_0_15px_#a1a1a1]  w-fit px-6  py-2 xl:mt-8 rounded-[20px] mb-2 md:mb-3">
                    <p className="m-0 uppercase text-[#439642] text-[12px] font-bold!"><span className=' text-[#439642] '>event</span> overview</p>
                </div>
                <div className='min-h-screen'>
                    <div className="relative mx-auto flex flex-col items-center justify-center overflow-hidden w-[90%] max-w-[400px] md:max-w-[500px] lg:max-w-[650px] h-20 md:h-[140px] lg:h-40 pt-4 lg:pt-6">

                    <div className="flex justify-center text-center text-[#242424] font-extrabold tracking-tight leading-10 md:leading-[50px] lg:leading-[55px] text-[28px] md:text-[36px] lg:text-[42px]">
                        <span className="pt-1">5</span>-DAYS EVENT
                    </div>

                    <img
                        className="absolute bottom-[56%] smp sm:bottom-[60%] translate-y-1/2 right-[45px] md:right-[90px] lg:right-[145px] xl:right-[130px] w-[30px] md:w-8 lg:w-8"
                        src={PartyP}
                        alt="Techstars-abuja-Party-decoration"
                    />
                    </div>
                    <div className='lg:w-[55%] mx-auto'>
                        <p className="m-0 text-center">Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world to showcase the local startup ecosystem through meetups, lectures, discussions, and celebrations.</p>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 my-9 justify-items-center mx-auto space-y-18 justify-center'>
                        <div className='bg-white w-[309px] h-[365px] rounded-[30px] shadow-[0_0_20px_#f1f1f1] '>
                            <div className='dayone w-[309px] pt-4 ps-4 h-[194px]'>
                                <div className='bg-[#439642] w-fit px-5 py-2 md:px-7 md:py-4 rounded-[50px] '>
                                    <p className="m-0 text-[12px] text-white uppercase">Day 1 - Idea Day</p>
                                </div>
                            </div>
                            <div className='pt-4 p-5'>
                                <p className="m-0 text-center capitalize lg:text-[18px] md:text-[17px] text-[16px] font-bold">Innovation, Problem Discovery</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">Explore problems worth solving, brainstorm ideas, understand ecosystem gaps</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">Opening ceremony, keynote, problem-pitching, team formation</p>
                            </div>
                        </div>
                        
                        <div className='bg-white w-[309px] h-[365px] rounded-[30px] shadow-[0_0_20px_#f1f1f1] '>
                            <div className='daytwo w-[309px] pt-4 ps-4 h-[194px]'>
                                <div className='bg-[#439642] w-fit px-5 py-2 md:px-7 md:py-4 rounded-[50px] '>
                                    <p className="m-0 text-[12px] text-white uppercase">Day 2 - Build Day</p>
                                </div>
                            </div>
                            <div className='pt-4 p-5'>
                                <p className="m-0 capitalize text-center lg:text-[18px] md:text-[17px] text-[16px] font-bold">Design & Product Track</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">Learn design thinking, build MVPs, use tools for validation</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">UI/UX workshop, MVP building session, mentorship hoursn</p>
                            </div>
                        </div>
                        <div className='bg-white w-[309px] h-[365px] rounded-[30px] shadow-[0_0_20px_#f1f1f1] '>
                            <div className='daythree w-[309px] pt-4 ps-4 h-[194px]'>
                                <div className='bg-[#439642] w-fit px-5 py-2 md:px-7 md:py-4 rounded-[50px] '>
                                    <p className="m-0 text-[12px] text-white uppercase">Day 3 - Growth Day</p>
                                </div>
                            </div>
                            <div className='pt-4 p-5'>
                                <p className="m-0 text-center capitalize lg:text-[18px] md:text-[17px] text-[16px] font-bold">Growth & Marketing Track</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">Understand customer acquisition, traction, storytelling</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">Growth hacking workshop, marketing panel, investor roundtable</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex  items-end justify-center gap-20'>
                        <div className='bg-white lg:mx-0 mx-auto w-[309px] h-[365px] rounded-[30px] shadow-[0_0_20px_#f1f1f1] '>
                            <div className='dayfour w-[309px] pt-4 ps-4 h-[194px]'>
                                <div className='bg-[#439642] w-fit px-5 py-2 md:px-7 md:py-4 rounded-[50px] '>
                                    <p className="m-0 text-[12px] text-white uppercase">Day 4 - Pitch Day</p>
                                </div>
                            </div>
                            <div className='pt-4 p-5'>
                                <p className="m-0 text-center capitalize lg:text-[18px] md:text-[17px] text-[16px] font-bold">Investment & Pitch Track</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">Refine business models, prepare pitches, get feedback</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">Pitch clinic, mock demo, investor feedback</p>
                            </div>
                        </div>
                        <div className='bg-white lg:mx-0 mx-auto lg:my-0 my-7 w-[309px] h-[365px] rounded-[30px] shadow-[0_0_20px_#f1f1f1] '>
                            <div className='dayfive w-[309px] pt-4 ps-4 h-[194px]'>
                                <div className='bg-[#439642] w-fit px-5 py-2 md:px-7 md:py-4 rounded-[50px] '>
                                    <p className="m-0 text-[12px] text-white uppercase">Day 5 - Community Day</p>
                                </div>
                            </div>
                            <div className='pt-4 p-5'>
                                <p className="m-0 capitalize text-center lg:text-[18px] md:text-[17px] text-[16px] font-bold">Ecosystem & Community Track</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">Celebrate progress, showcase startups, connect ecosystem players</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">Demo day, closing ceremony, startup fair, networking mixer</p>
                            </div>
                        </div>
                        <div className='mb-10 lg:block flex justify-end'>
                            <Button className="text-[#439642] hover:bg-[#439642] hover:text-white lg:me-0 me-3 text-[12px] bg-white shadow-[0_0_15px_#f1f1f1] block rounded-[50px]">Download <span className='text-[#242424]'>PDF</span> Schedule</Button>
                        </div>
                    </div>
                </div>
            </div>         
            <div className='border-b border-dashed my-10 w-[70%] md:w-1/2 mx-auto border'></div>    
            <div>
                <div className="bg-white mx-auto shadow-[0_0_15px_#a1a1a1]  w-fit px-6  py-2 xl:mt-8 rounded-[20px] mb-2 md:mb-3">
                    <p className="m-0 uppercase text-[#000] text-[12px] font-bold!"><span className=' text-[#439642] '>speakers,</span> mentors, <span className=' text-[#439642] '>sponsors</span> </p>
                </div>
                <div>
                    <div className="">

                    <div className="flex justify-center text-center text-[#242424] font-extrabold tracking-tight leading-10 md:mt-0 mt-6 md:leading-[50px] lg:leading-[55px] text-[25px] md:text-[32px] lg:text-[40px]">
                        <span className="pt-1">Meet the Speakers & Mentors</span>
                    </div>
                    </div>
                    <div className='lg:w-[50%] w-[90%] my-5 mx-auto'>
                        <p className="m-0 text-center">Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world to showcase the local startup ecosystem through meetups, lectures, discussions, and celebrations.</p>
                    </div>
                    <div>
                        <p className="m-0 lg:text-[32px] md:text-[30px] text-center font-bold sm:text-[28px] text-[26px] leading-[55px] tracking-[-1%]">Meet your Speakers</p>
                    </div>
                    <div className='grid my-9 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 space-y-6 justify-items-center'>
                        <div className='lg:w-[303px] flex flex-col items-center justify-center'>
                            <div>
                                <img src={ImageOne} alt="Techstars-Abuja-Founder-image" />
                            </div>
                            <div className='mt-3'>
                                <p className="m-0 lg:text-[24px] md:text-[22px] text-center text-[20px] font-bold rexr-[#242424]">Anakhe Ajayi</p>
                                <p className="m-2 text-center text-[18px] leading-[34px]">Founder of CodingPlayGround Technologies</p>
                            </div>
                        </div>
                        <div className='lg:w-[303px] flex flex-col items-center justify-center'>
                            <div>
                                <img src={ImageTwo} alt="Techstars-Abuja-Founder-image" />
                            </div>
                            <div className='mt-3'>
                                <p className="m-0 lg:text-[24px] md:text-[22px] text-center text-[20px] font-bold rexr-[#242424]">Anakhe Ajayi</p>
                                <p className="m-2 text-center text-[18px] leading-[34px]">Founder of CodingPlayGround Technologies</p>
                            </div>
                        </div>
                        <div className='lg:w-[303px] flex flex-col items-center justify-center'>
                            <div>
                                <img src={ImageThree} alt="Techstars-Abuja-Founder-image" />
                            </div>
                            <div className='mt-3'>
                                <p className="m-0 lg:text-[24px] md:text-[22px] text-center text-[20px] font-bold rexr-[#242424]">Anakhe Ajayi</p>
                                <p className="m-2 text-center text-[18px] leading-[34px]">Founder of CodingPlayGround Technologies</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <p className="m-0 lg:text-[32px] md:text-[30px] text-center font-bold sm:text-[28px] text-[26px] leading-[55px] tracking-[-1%]">Meet your Mentors</p>
                    </div>
                    <div className='grid my-9 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 space-y-6 justify-items-center'>
                        <div className='lg:w-[303px] flex flex-col items-center justify-center'>
                            <div>
                                <img src={ImageOne} alt="Techstars-Abuja-Founder-image" />
                            </div>
                            <div className='mt-3'>
                                <p className="m-0 lg:text-[24px] md:text-[22px] text-center text-[20px] font-bold rexr-[#242424]">Anakhe Ajayi</p>
                                <p className="m-2 text-center text-[18px] leading-[34px]">Founder of CodingPlayGround Technologies</p>
                            </div>
                        </div>
                        <div className='lg:w-[303px] flex flex-col items-center justify-center'>
                            <div>
                                <img src={ImageTwo} alt="Techstars-Abuja-Founder-image" />
                            </div>
                            <div className='mt-3'>
                                <p className="m-0 lg:text-[24px] md:text-[22px] text-center text-[20px] font-bold rexr-[#242424]">Anakhe Ajayi</p>
                                <p className="m-2 text-center text-[18px] leading-[34px]">Founder of CodingPlayGround Technologies</p>
                            </div>
                        </div>
                        <div className='lg:w-[303px] flex flex-col items-center justify-center'>
                            <div>
                                <img src={ImageThree} alt="Techstars-Abuja-Founder-image" />
                            </div>
                            <div className='mt-3'>
                                <p className="m-0 lg:text-[24px] md:text-[22px] text-center text-[20px] font-bold rexr-[#242424]">Anakhe Ajayi</p>
                                <p className="m-2 text-center text-[18px] leading-[34px]">Founder of CodingPlayGround Technologies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className="m-0 lg:text-[32px] md:text-[30px] text-center font-bold sm:text-[28px] text-[26px] leading-[55px] tracking-[-1%]">Meet your Sponsors</p>
                </div>
                <div className='grid my-10 mb-20 md:mx-8 mx-4 lg:mx-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center gap-4'> 
                    <div>
                        <img className='w-[149px] h-[55px]' src={Deel} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                    <div>
                        <img className='w-[149px] h-[55px]' src={Brex} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                    <div>
                        <img className='w-[149px] h-[55px]' src={Google} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                    <div>
                        <img className='w-[149px] h-[55px]' src={Coding} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                    <div>
                        <img className='w-[149px] h-[55px]' src={Coding} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                    <div>
                        <img className='w-[149px] h-[55px]' src={Coding} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                    <div>
                        <img className='w-[149px] h-[55px]' src={Coding} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                    <div>
                        <img className='w-[149px] h-[55px]' src={Coding} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                    <div>
                        <img className='w-[149px] h-[55px]' src={Coding} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                    <div>
                        <img className='w-[149px] h-[55px]' src={Coding} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                    <div>
                        <img className='w-[149px] h-[55px]' src={Coding} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                    <div>
                        <img className='w-[149px] h-[55px]' src={Coding} alt="Techstars-Abuja-Coding-icon" />
                    </div>
                </div>
            </div>
            <div className='border-b border-dashed my-10 w-[70%] md:w-1/2  mx-auto border'></div>  
            <div>
                <div className="bg-white mx-auto shadow-[0_0_15px_#a1a1a1]  w-fit px-6  py-2 xl:mt-8 rounded-[20px] mb-4 md:mb-8">
                    <p className="m-0 text-[#439642] text-[12px] font-bold!"><span className=' text-[#439642] '>News</span> & <span className=' text-[#439642] '>Update</span> </p>
                </div> 
                <div>
                    <p className="m-0 lg:text-[36px] md:text-[32px] sm:text-[30px] text-[28px] font-extrabold md:leading-[55px] tracking-[-1%] text-[#242424] text-center">News & Update</p>
                    <p className="m-0 w-[70%] leading-[34px] my-2 md:my-4 md:w-[60%] mx-auto text-center md:text-[16px] text-[15px] text-[#242424] opacity-90">Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world to showcase the local startup ecosystem through meetups, lectures, discussions, and celebrations.</p>
                </div> 
                <div>
                    <div className="hidden md:flex bg-white shadow-[0_0_15px_#a1a1a1] h-[74px] w-[80%] mx-auto px-12 xl:mt-8 rounded-[50px] mb-2 md:mb-3 items-center justify-between">
                        <div>
                        <Button
                            onClick={() => setEvent("Upcoming")}
                            className={`m-0 bg-transparent hover:bg-transparent ${
                            event === "Upcoming" ? "text-[#439642]" : "text-[#242424]"
                            } md:text-[16px] text-[15px]`}
                        >
                            Upcoming Event
                        </Button>
                        </div>
                        <div className="w-0.5 h-7 bg-[#a77781]" />
                        <div>
                        <Button
                            onClick={() => setEvent("Outcoming")}
                            className={`m-0 bg-transparent hover:bg-transparent ${
                            event === "Outcoming" ? "text-[#439642]" : "text-[#242424]"
                            } md:text-[16px] text-[15px]`}
                        >
                            Outcoming Event
                        </Button>
                        </div>
                        <div className="w-0.5 h-7 bg-[#a77781]" />
                        <div>
                        <Button
                            onClick={() => setEvent("Incoming")}
                            className={`m-0 bg-transparent hover:bg-transparent ${
                            event === "Incoming" ? "text-[#439642]" : "text-[#242424]"
                            } md:text-[16px] text-[15px]`}
                        >
                            Incoming Event
                        </Button>
                        </div>
                    </div>
                    {/* Mobile View */}
                    <div className="md:hidden w-[90%] mx-auto mt-4">
                        <Tabs defaultValue={event} className="w-full">
                            <TabsList className="grid w-full grid-cols-3 bg-white rounded-full shadow-[0_0_10px_#a1a1a1]">
                                <TabsTrigger
                                value="Upcoming"
                                onClick={() => setEvent("Upcoming")}
                                className="text-[14px]"
                                >
                                Upcoming
                                </TabsTrigger>
                                <TabsTrigger
                                value="Outcoming"
                                onClick={() => setEvent("Outcoming")}
                                className="text-[14px]"
                                >
                                Outcoming
                                </TabsTrigger>
                                <TabsTrigger
                                value="Incoming"
                                onClick={() => setEvent("Incoming")}
                                className="text-[14px]"
                                >
                                Incoming
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </div>  
                <Events events={event}/>
                <div>
                    <div className="bg-white  mx-auto shadow-[0_0_15px_#a1a1a1]  w-fit px-6  py-2 xl:mt-8 mt-4 rounded-[20px] mb-4 md:mb-8">
                        <p className="m-0 text-[#439642] text-[12px] font-bold!"><span className=' text-[#439642] '>Contacts</span>  <span className=' text-[#242424] '>& Community</span> </p>
                    </div>
                    <div>
                        <p className="m-0 lg:text-[36px] md:text-[32px] sm:text-[30px] text-[28px] font-extrabold md:leading-[55px] tracking-[-1%] text-[#242424] text-center">Contacts & Community</p>
                        <p className="m-0 w-[80%] my-2 md:my-4 md:w-[60%] mx-auto text-center md:text-[16px] text-[15px] text-[#242424] opacity-90">Stay in touch and be part of something bigger. Reach out for enquiries, connect with our vibrant community, and follow the pulse of what’s next through our social channels.</p>
                    </div> 
                    <Contacts/>
                </div>
            </div>
            <Footer/>  
        </div>
    );
}

export default Home;