import React from 'react';
import ac_poster from "./images/hero_image.png";
import district_Logo from "./images/district_logo.png";
import Contact from './components/Contact'
import Agenta from './components/Agenta';
import Venue from './components/Venue';
import Speaker from './components/Speaker';

const FullWidthHeightImage = () => {
    return (
        <div className="flex">
            <img
                src={ac_poster}
                className="left-0 md:w-screen h-[700px] m-0"
                alt="background"
            />
            <div id='hero-text' className='absolute mt-40 left-1/2 transform -translate-x-1/2 flex flex-col items-center'>
                <img
                    src={district_Logo}
                    className="w-28 h-30"
                    alt="background"
                />
                <div className="text-white font-bold text-3xl md:text-5xl mt-2 text-center ">
                    Toastmasters District 80 Annual Conference 2025
                </div>
                <div className='mt-10 flex flex-col items-center md:space-y-4 space-y-6 w-full'>
                    <div style={{ fontFamily: "Great Vibes, cursive", fontSize: "30px" }}
                        className="text-white font-bold text-xl md:text-3xl">
                        Join hands to celebrate
                    </div>
                    <div style={{ fontFamily: "Arial, sans-serif" }}
                        className="text-white font-bold text-3xl md:text-6xl uppercase w-screen text-center ">
                        The Power of Connection
                    </div>
                </div>
            </div>

        </div>
    )
}

const Body = () => {
    return (
        <div className="mx-auto">
            {/* Hero Section */}
            <section className="mt-20 w-full pb-10" id="Home">
                <FullWidthHeightImage />
            </section>
            <section className='container mx-auto px-4 w-screen'>
                <section className='mt-20' id="agenda">
                    <Agenta />
                </section>
                <section className='mt-20' id="agenda">
                    <Speaker />
                </section>
                <section id='venue' className='w-full '>
                    <Venue />
                </section>
                {/* Contact Section */}
                <section className="py-20" id="contact">
                    <Contact />
                </section>

            </section>
        </div>
    )
}

export default Body