import React from 'react';
import Rectangle from "../../public/image/Rectangle.svg"
import Cal from "../../public/image/cal.svg"
import { Calendar } from 'lucide-react';

function Events({events}) {
    return (
        <div>
            {events === "Upcoming" && 
                (
                    <div className='py-10'>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 w-[90%] mx-auto">
                            {/* Image Section */}
                            <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                                <img
                                className="w-full sm:w-[80%] md:w-[350px] lg:w-[383px] h-auto rounded-[20px] object-cover"
                                src={Rectangle}
                                alt="Techstars-Abuja-Event-Images"
                                />
                            </div>

                            {/* Event Card */}
                            <div className="bg-white shadow-[0_0_15px_#a1a1a1] h-auto w-full sm:w-[90%] md:w-[70%] xl:w-[56%] xl:h-[223px] px-5 md:px-7 py-6 mt-6 lg:mt-0 xl:mt-8 rounded-[20px] mb-4 flex flex-col justify-between">
                                {/* Date Badge */}
                                <div className="flex items-center gap-2 justify-center mb-4 bg-white shadow-[0_0_15px_#a1a1a1] py-3 rounded-[50px] h-[35px] w-[120px] mx-auto md:mx-0">
                                    <img className="w-4 h-4" src={Cal} alt="Techstars-Abuja-Event-Images" />
                                    <p className="m-0 text-[#439642] text-[10px] sm:text-[12px]">24, Feb, 2026</p>
                                </div>

                                {/* Event Info */}
                                <div className="text-center md:text-left">
                                    <p className="m-0 text-[18px] sm:text-[20px] md:text-[24px] font-extrabold pb-3 text-[#242424]">
                                        Techstars Startup Week 2026 Event
                                    </p>
                                    <p className="m-0 text-[12px] sm:text-[13px] md:text-[14px] text-[#242424] opacity-90 leading-relaxed">
                                        Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world to showcase the local startup ecosystem through meetups, lectures, discussions, and celebrations.
                                    </p>
                                </div>

                                {/* Duration Badge */}
                                <div className="flex justify-center md:justify-end items-center w-full mt-5 md:relative md:-top-2">
                                    <div className="flex items-center gap-2 justify-center bg-white shadow-[0_0_15px_#a1a1a1] rounded-[50px] h-[35px] w-[120px]">
                                        <img className="w-4 h-4" src={Cal} alt="Techstars-Abuja-Event-Images" />
                                        <p className="m-0 font-semibold text-[#439642] text-[11px] sm:text-[12px]">
                                            5-day <span className="text-[#242424]">Event</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:my-0 my-6 lg:gap-10 w-[90%] mx-auto">
                            {/* Image Section */}
                            <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                                <img
                                className="w-full sm:w-[80%] md:w-[350px] lg:w-[383px] h-auto rounded-[20px] object-cover"
                                src={Rectangle}
                                alt="Techstars-Abuja-Event-Images"
                                />
                            </div>

                            {/* Event Card */}
                            <div className="bg-white shadow-[0_0_15px_#a1a1a1] h-auto w-full sm:w-[90%] md:w-[70%] xl:w-[56%] xl:h-[223px] px-5 md:px-7 py-6 mt-6 lg:mt-0 xl:mt-8 rounded-[20px] mb-4 flex flex-col justify-between">
                                {/* Date Badge */}
                                <div className="flex items-center gap-2 justify-center mb-4 bg-white shadow-[0_0_15px_#a1a1a1] py-3 rounded-[50px] py-3 h-[35px] w-[120px] mx-auto md:mx-0">
                                    <img className="w-4 h-4" src={Cal} alt="Techstars-Abuja-Event-Images" />
                                    <p className="m-0 text-[#439642] text-[10px] sm:text-[12px]">24, Feb, 2026</p>
                                </div>

                                {/* Event Info */}
                                <div className="text-center md:text-left">
                                    <p className="m-0 text-[18px] sm:text-[20px] md:text-[24px] font-extrabold pb-3 text-[#242424]">
                                        Techstars Startup Week 2026 Event
                                    </p>
                                    <p className="m-0 text-[12px] sm:text-[13px] md:text-[14px] text-[#242424] opacity-90 leading-relaxed">
                                        Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world to showcase the local startup ecosystem through meetups, lectures, discussions, and celebrations.
                                    </p>
                                </div>

                                {/* Duration Badge */}
                                <div className="flex justify-center md:justify-end items-center w-full mt-5 md:relative md:-top-2">
                                    <div className="flex items-center gap-2 justify-center bg-white shadow-[0_0_15px_#a1a1a1] rounded-[50px] h-[35px] w-[120px]">
                                        <img className="w-4 h-4" src={Cal} alt="Techstars-Abuja-Event-Images" />
                                        <p className="m-0 font-semibold text-[#439642] text-[11px] sm:text-[12px]">
                                            5-day <span className="text-[#242424]">Event</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 w-[90%] mx-auto">
                            {/* Image Section */}
                            <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                                <img
                                className="w-full sm:w-[80%] md:w-[350px] lg:w-[383px] h-auto rounded-[20px] object-cover"
                                src={Rectangle}
                                alt="Techstars-Abuja-Event-Images"
                                />
                            </div>

                            {/* Event Card */}
                            <div className="bg-white shadow-[0_0_15px_#a1a1a1] h-auto w-full sm:w-[90%] md:w-[70%] xl:w-[56%] xl:h-[223px] px-5 md:px-7 py-6 mt-6 lg:mt-0 xl:mt-8 rounded-[20px] mb-4 flex flex-col justify-between">
                                {/* Date Badge */}
                                <div className="flex items-center gap-2 justify-center mb-4 bg-white shadow-[0_0_15px_#a1a1a1] py-3 rounded-[50px] h-[35px] w-[120px] mx-auto md:mx-0">
                                    <img className="w-4 h-4" src={Cal} alt="Techstars-Abuja-Event-Images" />
                                    <p className="m-0 text-[#439642] text-[10px] sm:text-[12px]">24, Feb, 2026</p>
                                </div>

                                {/* Event Info */}
                                <div className="text-center md:text-left">
                                    <p className="m-0 text-[18px] sm:text-[20px] md:text-[24px] font-extrabold pb-3 text-[#242424]">
                                        Techstars Startup Week 2026 Event
                                    </p>
                                    <p className="m-0 text-[12px] sm:text-[13px] md:text-[14px] text-[#242424] opacity-90 leading-relaxed">
                                        Techstars Startup Week is a five-day, entrepreneur-led, community event held in cities across the world to showcase the local startup ecosystem through meetups, lectures, discussions, and celebrations.
                                    </p>
                                </div>

                                {/* Duration Badge */}
                                <div className="flex justify-center md:justify-end items-center w-full mt-5 md:relative md:-top-2">
                                    <div className="flex items-center gap-2 justify-center bg-white shadow-[0_0_15px_#a1a1a1] rounded-[50px] h-[35px] w-[120px]">
                                        <img className="w-4 h-4" src={Cal} alt="Techstars-Abuja-Event-Images" />
                                        <p className="m-0 font-semibold text-[#439642] text-[11px] sm:text-[12px]">
                                            5-day <span className="text-[#242424]">Event</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-b border-dashed my-10 w-[70%] md:w-1/2  mx-auto border'></div>  
                    </div>
                )
            }
            {events === "Incoming" && 
                (
                    <div>Incoming</div>
                )
            }
            {events === "Outcoming" && 
                (
                    <div>Outcoming</div>
                )
            }
        </div>
    );
}

export default Events;