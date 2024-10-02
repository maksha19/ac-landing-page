import React, { useState } from 'react';
import ac_poster from "./AC_Poster_hero.jpg";
import Contact from './components/Contact'
import Agenta from './components/Agenta';
import Venue from './components/Venue';

const FullWidthHeightImage = () => {
    return (
        <img
            src={ac_poster}
            className="left-0 w-full h-auto object-cover"
            alt="background"
        />
    )
}

const Body = () => {


    const [openSpeaker, setOpenSpeaker] = useState(0)




    return (
        <div className="container  mx-auto px-4">
            {/* Hero Section */}
            <section className="relative mt-20 text-center pb-10" id="hero">
                <FullWidthHeightImage />
            </section>
            <section id='venue'>
                <Venue />
            </section>

            <section id="agenda">
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

        </div>
    )
}

export default Body