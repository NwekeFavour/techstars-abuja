import { CalendarDays, MapPin } from 'lucide-react';
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
function Home() {
    return (
        <div>
            <HeroSection/>
            <div className=''>
                <div className='md:flex items-start md:gap-4 lg:gap-6 justify-around md:m-10 sm:m-8 m-7 xl:m-15'>
                    <div className=''>
                        <div className="bg-white  shadow-[0_0_15px_#a1a1a1]  w-fit px-6  py-2 xl:mt-8 rounded-[20px] mb-2 md:mb-3">
                            <p className="m-0 uppercase text-[#9D0C2C] text-[12px] font-bold!"><span className=' text-[#0C0C9D] '>event</span> overview</p>
                        </div>
                        <div className='xl:w-[588px]! md:w-[450px]'>
                            <p className="m-0 md:text-[30px] xl:text-[35px] sm:text-[28px] font-extrabold text-[25px] md:leading-[40px] xl:leading-[55px] md:mb-2 tracking-[-1%]  sm:leading-[50px]">Get latest info about the event</p>
                            <p className="m-0 md:text-[17px] text-[16px] xl:text-[18px] md:max-w-[550px]  sm:leading-[28px] lg:leading-[34px]">Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world to showcase the local startup ecosystem through meetups, lectures, discussions, and celebrations.</p>
                        </div>
                        <div className='flex xl:w-[665px] md:w-[450px] sm:mt-10  md:mt-14 mt-9 items-center justify-start gap-4'>
                            <div className="bg-white shadow-[0_0_15px_#a1a1a1] block sm:flex gap-5 items-center justify-start w-[250px] md:w-[250px] sm:h-[100px] xl:w-[317px] h-[200px] ps-4 xl:h-[120px] sm:ps-3 xl:ps-7 py-7 sm:py-8 rounded-[20px] mb-2 lg:mb-0 md:mb-3">
                                <div className='bg-[#9D0C2C] w-fit rounded-full p-4'>
                                    <MapPin className='text-white'/>
                                </div>
                                <div>
                                    <div className='sm:mt-0 mt-3'>
                                        <p className="m-0 uppercase text-[#0C0C9D] text-[16px] font-bold">where</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[13px] text-[#000000] opacity-60">Kubwa PSIN FCT Abuja<br/> Nigeria</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-[0_0_15px_#a1a1a1] block sm:flex gap-5 items-center justify-start w-[250px] md:w-[250px] sm:h-[100px] xl:w-[317px] h-[200px] ps-4 xl:h-[120px] sm:ps-3 xl:ps-7 py-7 sm:py-8 rounded-[20px] mb-2 lg:mb-0 md:mb-3">
                                <div className='bg-[#9D0C2C] w-fit rounded-full p-4'>
                                    <CalendarDays className='text-white'/>
                                </div>
                                <div>
                                    <div className='sm:mt-0 mt-3'>
                                        <p className="m-0 uppercase text-[#0C0C9D] text-[16px] font-bold">when</p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[13px] text-[#000000] opacity-60">Wednessday To Sunday<br/> Feb, 24-26, 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white shadow-[0_0_15px_#a1a1a1] lg:flex xl:gap-5 items-center justify-start w-fit lg:w-[500px] xl:w-[637px] mt-6 lg:h-[120px] h-[140px] px-4  sm:px-4 xl:ps-7 py-8 rounded-[20px] mb-2 lg:mb-0 md:mb-3'>
                            <p className="m-0 md:text-[16px] text-black font-bold">ORGANIZING PARTNER:</p>
                            <div className='lg:flex hidden items-center justify-between'>
                                <div>
                                    <img src={CodingP} alt="Techstars-abuja-coding-image" />
                                </div>
                                <div>
                                    <img src={CodingPG} alt="Techstars-abuja-coding-image-two" />
                                </div>
                            </div>
                            <div className='lg:hidden flex items-center justify-between mt-3'>
                                <div>
                                    <img src={CodingP} alt="Techstars-abuja-coding-image" />
                                </div>
                                <div>
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
                    <p className="m-0 uppercase text-[#9D0C2C] text-[12px] font-bold!"><span className=' text-[#0C0C9D] '>event</span> overview</p>
                </div>
                <div className='min-h-screen'>
                    <div className="relative mx-auto flex flex-col items-center justify-center overflow-hidden w-[90%] max-w-[400px] md:max-w-[500px] lg:max-w-[650px] h-[80px] md:h-[140px] lg:h-[160px] pt-4 lg:pt-6">

                    <div className="flex justify-center text-center text-[#242424] font-extrabold tracking-tight leading-[40px] md:leading-[50px] lg:leading-[55px] text-[28px] md:text-[36px] lg:text-[42px]">
                        <span className="pt-1">5</span>-DAYS EVENT
                    </div>

                    <img
                        className="absolute bottom-[56%] sm:bottom-[60%] translate-y-1/2 right-[45px] md:right-[90px] lg:right-[145px] w-[30px] md:w-8 lg:w-8"
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
                                <div className='bg-[#0C0C9D] w-fit px-5 py-2 md:px-7 md:py-4 rounded-[50px] '>
                                    <p className="m-0 text-[12px] text-white uppercase">Day 1</p>
                                </div>
                            </div>
                            <div className='pt-8 p-8'>
                                <p className="m-0 text-center lg:text-[18px] md:text-[17px] text-[16px] font-bold">BRAINSTORM SESSION</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">The brainstorm session is a day where everyone comes up with different ideas that needs solution</p>
                            </div>
                        </div>
                        
                        <div className='bg-white w-[309px] h-[365px] rounded-[30px] shadow-[0_0_20px_#f1f1f1] '>
                            <div className='dayone w-[309px] pt-4 ps-4 h-[194px]'>
                                <div className='bg-[#9D0C2C] w-fit px-5 py-2 md:px-7 md:py-4 rounded-[50px] '>
                                    <p className="m-0 text-[12px] text-white uppercase">Day 2</p>
                                </div>
                            </div>
                            <div className='pt-8 p-8'>
                                <p className="m-0 text-center lg:text-[18px] md:text-[17px] text-[16px] font-bold">DEVELOP SESSION</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">The develop session is a day where everyone comes up with different ideas that needs solution</p>
                            </div>
                        </div>
                        <div className='bg-white w-[309px] h-[365px] rounded-[30px] shadow-[0_0_20px_#f1f1f1] '>
                            <div className='dayone w-[309px] pt-4 ps-4 h-[194px]'>
                                <div className='bg-[#0C0C9D] w-fit px-5 py-2 md:px-7 md:py-4 rounded-[50px] '>
                                    <p className="m-0 text-[12px] text-white uppercase">Day 3</p>
                                </div>
                            </div>
                            <div className='pt-8 p-8'>
                                <p className="m-0 text-center lg:text-[18px] md:text-[17px] text-[16px] font-bold">GROWTH SESSION</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">The Idea day is a day where everyone comes up with different ideas that needs solution</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex  items-end justify-center gap-20'>
                        <div className='bg-white lg:mx-0 mx-auto w-[309px] h-[365px] rounded-[30px] shadow-[0_0_20px_#f1f1f1] '>
                            <div className='dayone w-[309px] pt-4 ps-4 h-[194px]'>
                                <div className='bg-[#9D0C2C] w-fit px-5 py-2 md:px-7 md:py-4 rounded-[50px] '>
                                    <p className="m-0 text-[12px] text-white uppercase">Day 4</p>
                                </div>
                            </div>
                            <div className='pt-8 p-8'>
                                <p className="m-0 text-center lg:text-[18px] md:text-[17px] text-[16px] font-bold">PITCH SESSION</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">The Idea day is a day where everyone comes up with different ideas that needs solution</p>
                            </div>
                        </div>
                        <div className='bg-white lg:mx-0 mx-auto lg:my-0 my-7 w-[309px] h-[365px] rounded-[30px] shadow-[0_0_20px_#f1f1f1] '>
                            <div className='dayone w-[309px] pt-4 ps-4 h-[194px]'>
                                <div className='bg-[#0C0C9D] w-fit px-5 py-2 md:px-7 md:py-4 rounded-[50px] '>
                                    <p className="m-0 text-[12px] text-white uppercase">Day 5</p>
                                </div>
                            </div>
                            <div className='pt-8 p-8'>
                                <p className="m-0 text-center lg:text-[18px] md:text-[17px] text-[16px] font-bold">COMMUNITY NETWORK</p>
                                <p className="m-0 text-center pt-1 text-[14px] text-[#242424]">The Idea day is a day where everyone comes up with different ideas that needs solution</p>
                            </div>
                        </div>
                        <div className='mb-10 lg:block flex justify-end'>
                            <Button className="text-[#0C0C9D] hover:bg-[#0C0C9D] hover:text-white lg:me-0 me-3 text-[12px] bg-white shadow-[0_0_15px_#f1f1f1] block rounded-[50px]">Download <span className='text-[#9D0C2C]'>PDF</span> Schedule</Button>
                        </div>
                    </div>
                </div>
            </div>         
            <div className='border-b border-dashed my-10 w-[70%] md:w-1/2 mx-auto border'></div>    
            <div>
                <div className="bg-white mx-auto shadow-[0_0_15px_#a1a1a1]  w-fit px-6  py-2 xl:mt-8 rounded-[20px] mb-2 md:mb-3">
                    <p className="m-0 uppercase text-[#9D0C2C] text-[12px] font-bold!"><span className=' text-[#0C0C9D] '>event</span> schedule</p>
                </div>
                <div>
                    <div className="">

                    <div className="flex justify-center text-center text-[#242424] font-extrabold tracking-tight leading-[40px] md:mt-0 mt-6 md:leading-[50px] lg:leading-[55px] text-[25px] md:text-[32px] lg:text-[40px]">
                        <span className="pt-1">Meet the Speakers & Mentors</span>
                    </div>
                    </div>
                    <div className='lg:w-[50%] my-5 mx-auto'>
                        <p className="m-0 text-center">Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world to showcase the local startup ecosystem through meetups, lectures, discussions, and celebrations.</p>
                        <div className='my-10 flex justify-end relative lg:left-[60px]'>
                            <Button className="text-[#0C0C9D] hover:bg-[#0C0C9D] hover:text-white  lg:me-0 me-3 text-[12px] bg-white shadow-[0_0_15px_#f1f1f1] block rounded-[50px]">Download <span className='text-[#9D0C2C]'>PDF</span> Schedule</Button>
                        </div>
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
        </div>
    );
}

export default Home;