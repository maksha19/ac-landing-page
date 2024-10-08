import React, { useState } from 'react';
import ac_poster from "./images/hero_image.png";
import district_Logo from "./images/district_logo.png";
import Contact from './components/Contact'
import Agenta from './components/Agenta';
import Venue from './components/Venue';

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
    const [openSpeaker, setOpenSpeaker] = useState(0)

    return (
        <div className="mx-auto">
            {/* Hero Section */}
            <section className="mt-20 w-full pb-10" id="hero">
                <FullWidthHeightImage />
            </section>
            <section className='container mx-auto px-4 w-screen'>
                <section id='venue' className='w-full '>
                    <Venue />
                </section>
                <section className='mt-20' id="agenda">
                    <Agenta />
                </section>
                <section className="py-20" id="speaker">
                    <h2 className="text-4xl font-bold text-center  uppercase mb-8">Our Speakers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['https://picsum.photos/500/300', 'https://picsum.photos/500/301', 'https://picsum.photos/500/302'].map((src, index) => (
                            <div className="bg-white p-6 shadow-lg rounded-lg" key={index}>
                                <img src={src} className="w-full h-48 object-cover mb-4" alt="" />
                                <h3 className="text-2xl font-semibold mb-4">Speaker {index + 1}</h3>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpenSpeaker(openSpeaker === index + 1 ? 0 : index + 1)}>More Info</button>
                            </div>
                        ))}
                    </div>
                    {openSpeaker !== 0 && (
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
                            <div className="bg-white p-6 shadow-lg rounded-lg max-w-md" style={{
                                left: `calc(50vw - ${Math.min(360, window.innerWidth / 2)}px)`,
                                top: `calc(50vh - ${Math.min(360, window.innerHeight / 2)}px)`,
                            }}>
                                <div className="relative">
                                    <h3 className="text-2xl font-semibold mb-4">Speaker title {openSpeaker}</h3>
                                    <button className="absolute  right-0 top-0 p-2 hover:bg-gray-100 rounded-full" onClick={() => setOpenSpeaker(0)}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                    <div >
                                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
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