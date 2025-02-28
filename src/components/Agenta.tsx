import React from 'react'

const Agenda = () => {

    return (
        <div className='px-4'>
            <div style={{ fontFamily: "Franklin" }}
                className=" mb-8 font-bold text-3xl md:text-5xl uppercase w-full text-center p-1 ">
                Program
            </div>
            <div style={{ fontFamily: "Franklin" }} className='bg-white rounded-lg shadow-lg'>
                <p style={{ fontFamily: "Franklin" }} className='md:text-center p-6  pb-4  text-xl font-normal'>A fireside chat with a woman adorned in world championship glory, compelling speeches and evaluations from the best in District 80, carefully curated speechcraft, a regal gala dinner, and plenty in the way of culinary delights.</p>
                <p style={{ fontFamily: "Franklin" }} className='text-center md:text-center text-2xl'>We are awaiting you.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto p-8">
                    <div className="flex flex-col pb-8 mb-4 md:border-b-0 border-dashed border-b-2 border-gray-300">
                        <h3 className="text-2xl font-bold mb-4 text-center">9th May 2025</h3>
                        <p className="text-lg uppercase text-center">Friday</p>
                        <div className="flex flex-col mt-3 space-y-6">
                            <div className="bg-yellow-100 p-2 rounded">Welcome light dinner</div>
                            <div className="bg-blue-100 p-2 rounded">Fireside chat with Verity Price</div>
                        </div>
                    </div>
                    <div className="flex flex-col pb-8 mb-4 border-dashed md:border-b-0 border-b-2 border-gray-300">
                        <h3 className="text-2xl font-bold mb-4 text-center">10th May 2025</h3>
                        <p className="text-lg uppercase text-center">Saturday</p>
                        <div className="flex flex-col mt-3 space-y-6">
                            <div className="bg-yellow-100 p-2 rounded">Opening ceremony</div>
                            <div className="bg-blue-100 p-2 rounded">Keynote Speech by Verity Price</div>
                            <div className="bg-yellow-100 p-2 rounded">Lunch</div>
                            <div className="bg-blue-100 p-2 rounded">English/Mandarin/Tamil Education Workshops</div>
                            <div className="bg-yellow-100 p-2 rounded">English & Mandarin Contests</div>
                            <div className="bg-blue-100 p-2 rounded">Gala dinner</div>
                        </div>
                    </div>
                    <div className="flex flex-col pb-4 mb-4  border-gray-300">
                        <h3 className="text-2xl font-bold mb-4 text-center">11th May 2025</h3>
                        <p className="text-lg uppercase text-center">Sunday</p>
                        <div className="flex flex-col mt-3 space-y-6">
                            <div className="bg-yellow-100 p-2 rounded">Light Breakfast</div>
                            <div className="bg-blue-100 p-2 rounded">Masterclass by Verity Price</div>
                            <div className="bg-yellow-100 p-2 rounded">English International Speech Contest</div>
                            <div className="bg-blue-100 p-2 rounded">Closing Ceremony with Lunch</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Agenda