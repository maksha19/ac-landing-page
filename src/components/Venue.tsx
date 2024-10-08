import React from "react";
import location from "../images/location.png"
const Venue = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center uppercase mb-8">Venue</h2>
            <div className="flex flex-row">
                <img
                    src={location}
                    className="w-48 h-48"
                    alt="background"
                />
                <div>
                    <p style={{ fontFamily: "Great Vibes, cursive" }} className="p-2 md:p-4 text-xl md:text-3xl  flex justify-center bold items-center h-full">One°15 Marina Sentosa Cove, Singapore.</p>
                </div>
            </div>
        </div>
    )
}

export default Venue;