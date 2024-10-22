import React from "react";
import location from "../images/location.png"
const Venue = () => {
    return (
        <div className='px-4'>
            <div className="flex flex-col items-center">
                <div style={{ fontFamily: "Franklin" }}
                    className=" mb-8 font-bold text-3xl md:text-5xl uppercase w-full text-center p-1 ">
                    Venue
                </div>
                <div className="p-8 bg-white rounded-lg shadow-lg w-full md:w-3/4 flex flex-col">
                    <div className="flex flex-col md:flex-row">
                        <div className="mx-auto h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                            <img
                                src={location}
                                className="h-full"
                                alt="background"
                            />
                        </div>
                        <div className="bg-white rounded-b p-4 flex flex-col justify-between leading-normal h-full ">
                            <div className="mb-8">
                                <div style={{ fontFamily: "Franklin" }} className="text-gray-900 font-bold text-xl mb-2">One°15 Marina Sentosa Cove, Singapore.</div>
                                <p style={{ fontFamily: "Franklin" }} className="text-gray-700 text-base">Placid waters surrounded by elevated platforms upon which establishments serving food and delicacies play host to District 80’s Annual Conference. While taking a minute from enjoying championship-level speeches or counsel from world champions, you might find yourself on a verandah overlooking yachts that are gently swaying against the ocean breeze.</p>
                            </div>
                            <div className="flex items-center">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Venue;