import React from 'react';
import TechStars from "../../public/image/techstars.svg"
import { Link } from 'react-router-dom';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Footer(props) {
    return (
        <div className='bg-[#000000] md:px-5 px-4 pt-10 md:pt-12'>
            <div className='lg:flex  items-start justify-around mb-10 md:mb-12'>
                <div className='md:w-[305px]'>
                    <img src={TechStars} className='md:w-[200px] md:h-[74px] w-[109px] h-10' alt="techstars-abuja-logo" />
                    <p className="m-0 md:text-[16px] text-[14px] text-white mt-5">Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world</p>
                </div>
                <div className='lg:my-0 my-5'>
                    <p className="m-0 md:text-[22px] sm:text-[20px] text-[18px] text-white font-semibold">Quick Links</p>
                    <ul className='lg:text-center'>
                        <li className='text-white md:text-[18px] md:my-1 my-2 text-[16px]'>
                            <Link>Home</Link>
                        </li>
                        <li className='text-white md:text-[18px] md:my-1 my-2 text-[16px]'>
                            <Link>About</Link>
                        </li>
                        <li className='text-white md:text-[18px] md:my-1 my-2 text-[16px]'>
                            <Link>Schedule</Link>
                        </li>
                        <li className='text-white md:text-[18px] md:my-1 my-2 text-[16px]'>
                            <Link>Register</Link>
                        </li>
                        <li className='text-white md:text-[18px] md:my-1 my-2 text-[16px]'>
                            <Link>Sponsor</Link>
                        </li>
                        <li className='text-white md:text-[18px] md:my-1 my-2 text-[16px]'>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='lg:my-0 my-5'>
                    <p className="m-0 md:text-[22px] sm:text-[20px] text-[18px] text-white font-semibold">Social Hashtags</p>
                    <p className="m-0 md:text-[18px] text-white lg:text-center  md:my-1 my-2">#StartupWeekFCT</p>
                    <p className="m-0 md:text-[18px] text-white lg:text-center">#TechstarsAbuja</p>
                    
                </div>
                <div>
                    <p className="m-0 md:text-[20px] md:block hidden sm:text-[18px] text-[17px] text-white font-semibold">www.techstars.com</p>
                    <p className="m-0 md:text-[18px] text-[17px] text-white font-bold md:mt-6">Newsletter</p>
                    <Textarea className="md:w-[355px] md:block hidden  lg:h-fit  mt-3 lg:py-5 bg-white" id="message" placeholder="Enter your message" rows={4} />
                    <Input className="md:hidden block bg-white  px-7 py-6 my-3" placeholder="Enter your email" />
                    <Button className="bg-[#439642] md:mt-4 md:px-9 md:py-6 px-5 py-5 hover:bg-green-700 text-white">
                        Send 
                    </Button>
                </div>
            </div>
            <div className=''>
                <p className="text-center m-0 text-[14px] text-white">Copyright © 2026 CodingPlayGround Technologies.</p>
            </div>
        </div>
        
    );
}