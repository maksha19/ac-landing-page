import React from 'react'

const Agenda = () => {

    return (
        <>
            <h2 className="text-4xl font-bold text-center uppercase mb-8">Agenda</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col pb-8 mb-4 md:border-b-0 border-dashed border-b-2 border-gray-300">
                    <h3 className="text-2xl font-bold mb-4 text-center">9th May 2025</h3>
                    <p className="text-lg uppercase text-center">Friday</p>
                    <div className="flex flex-col mt-3 space-y-6">
                        <div className="bg-yellow-100 p-2 rounded">Registration Open</div>
                        <div className="bg-blue-100 p-2 rounded">Networking</div>
                        <div className="bg-yellow-100 p-2 rounded">Games</div>
                    </div>
                </div>
                <div className="flex flex-col pb-8 mb-4 border-dashed md:border-b-0 border-b-2 border-gray-300">
                    <h3 className="text-2xl font-bold mb-4 text-center">10th May 2025</h3>
                    <p className="text-lg uppercase text-center">Saturday</p>
                    <div className="flex flex-col mt-3 space-y-6">
                        <div className="bg-blue-100 p-2 rounded">Contest</div>
                        <div className="bg-yellow-100 p-2 rounded">Workshop</div>
                        <div className="bg-blue-100 p-2 rounded">Lunch</div>
                        <div className="bg-yellow-100 p-2 rounded">Training</div>
                        <div className="bg-blue-100 p-2 rounded">Networking</div>
                    </div>
                </div>
                <div className="flex flex-col pb-4 mb-4  border-gray-300">
                    <h3 className="text-2xl font-bold mb-4 text-center">11th May 2025</h3>
                    <p className="text-lg uppercase text-center">Sunday</p>
                    <div className="flex flex-col mt-3 space-y-6">
                        <div className="bg-yellow-100 p-2 rounded">Workshop</div>
                        <div className="bg-blue-100 p-2 rounded">Lunch</div>
                        <div className="bg-yellow-100 p-2 rounded">Training</div>
                        <div className="bg-blue-100 p-2 rounded">Gala Dinner</div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Agenda