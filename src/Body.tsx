import React from 'react';
import ac_poster from "./images/s2.webp";
import district_Logo from "./images/district_logo.png";
import Contact from './components/Contact'
import Agenda from './components/Agenta';
import Venue from './components/Venue';
import Speaker from './components/Speaker';
import About from './components/About';
import Hotel from './components/Hotel';

const FullWidthHeightImage = () => {
    return (
        <div className="flex h-auto px-4">
            <img
                src={ac_poster}
                className="left-0 md:w-screen md:h-[900px] h-[450px] m-0"
                alt="background"
            />
            <div id='hero-text' className='absolute mt-24 md:mt-96 left-1/2 transform -translate-x-1/2 flex flex-col items-center '>
                <img
                    src={district_Logo}
                    className="w-28 h-30"
                    alt="background"
                />
                <div style={{ fontFamily: "Franklin" }} className="text-white font-bold text-3xl md:text-5xl mt-2 text-center ">
                    Toastmasters District 80 Annual Conference 2025
                </div>
                <div className='mt-10 flex flex-col items-center md:space-y-4 space-y-4 w-full'>
                    <div style={{ fontFamily: "Corinthia" }}
                        className="text-white font-bold text-3xl md:text-6xl">
                        Let's celebrate
                    </div>
                    <div style={{ fontFamily: "Franklin" }}
                        className="text-white font-bold text-3xl md:text-6xl uppercase w-screen text-center p-1 ">
                        Our Hands Of Friendship
                    </div>
                    <div style={{ fontFamily: "Franklin" }} id='description'
                        className="text-white font-bold text-xl md:max-w-[500px] w-screen text-center p-1">
                        {/* <p>Singapore, a melting pot of cultures, traditions, and ideas hosts an Annual Conference in service of witnessing and celebrating the best that District 80 has to offer. To complement the battle between our best oratory gladiators, world champion public speakers and regarded trainers have for you workshops and rivetting conversation. Not only does the conference provide the occasion the pomp and circumstance it deserves, but it also aspires to bring together friends and intellectuals from around the Toastmasterverse to forge new friendships!</p> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

const Body = () => {
    return (
        <div className="">
            <section className='container mx-auto w-screen'>
                <section className="mt-20 w-full" id="Home">
                    <FullWidthHeightImage />
                </section>
                <section className='' id="about">
                    <About />
                </section>
                <section className='' id="agenda">
                    <Agenda />
                </section>
                <section className='' id="agenda">
                    <Speaker />
                </section>
                <section id='venue' className='w-full '>
                    <Venue />
                </section>
                <section className="py-10" id="hotel">
                    <Hotel />
                </section>
                <section className="pb-10" id="contact">
                    <Contact />
                </section>

            </section>
        </div>
    )
}

export default Body