const Hotel = () => {
    return (
        <div className='px-4'>
            <div style={{ fontFamily: "Franklin" }}
                className=" mb-8 font-bold text-3xl md:text-5xl uppercase w-full text-center p-1 ">
                Hotel information
            </div>
            <div style={{ fontFamily: "Franklin" }} className="w-full md:w-3/4 mx-auto p-8 bg-white rounded-lg space-y-6 shadow-lg ">
                <div className="lg:ml-48">
                    <h2 className="text-2xl flex  uppercase font-bold mb-4">ONE°15 Marina Sentosa Cove</h2>
                    <p>ONE°15 Marina Sentosa Cove, a choice in favor of a truly memorable vacation at the gateway to Singapore's Southern Islands</p>
                    <p className="mt-4"><span className="underline mr-2">Usual Price:</span> S$350++ per night</p>
                    <p> <span className="underline mr-2">Annual Conference Price:</span> S$290++ per night</p>
                    <a href="https://one15marina.com/hotel/overview/" className="mt-4" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Open Website</button>
                    </a>
                </div>
                <div className="lg:ml-48">
                    <h2 className="text-2xl flex  uppercase font-bold mb-4">Faber Park</h2>
                    <p>This vacation getaway offers easy access to VivoCity and Sentosa Island, promising to be a playground of entertainment and adventure.</p>
                    <p className="mt-4"><span className="underline mr-2">Usual Price:</span>  S$330++ per night</p>
                    <p> <span className="underline mr-2">Annual Conference Price:</span>  S$175++ per night</p>
                    <a href="https://forms.office.com/r/QeEiRCFAeF?origin=lprLink" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4  rounded">Book Here</button>
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Hotel