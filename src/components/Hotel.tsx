const Hotel = () => {
    return (
        <div className='px-4'>
            <div style={{ fontFamily: "Franklin" }}
                className=" mb-8 font-bold text-3xl md:text-5xl uppercase w-full text-center p-1 ">
                Hotel information
            </div>
            <div style={{ fontFamily: "Franklin" }} className="w-full md:w-3/4 mx-auto p-8 bg-white rounded-lg space-y-6 shadow-lg ">
                <div className="md:ml-48">
                    <h2 className="text-2xl flex  uppercase font-bold mb-4">ONE°15 Marina Sentosa Cove</h2>
                    <p>Welcome to ONE°15 Marina Sentosa Cove for a truly memorable vacation and the gateway to Singapor's Southern Islands.</p>
                    <p className="mt-4">Normal Price: S$350</p>
                    <p>Offer Price: S$300 (Only for AC 2025 - Registerd Members, Please reachout us for coupon before booking)</p>
                    <a href="https://one15marina.com/hotel/overview/" className="mt-4" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Open Website</button>
                    </a>
                </div>
                <div className="md:ml-48">
                    <h2 className="text-2xl flex  uppercase font-bold mb-4">Faber Park</h2>
                    <p>Our hotel offers easy access to VivoCity and Sentosa Island, a playground of entertainment and adventure.</p>
                    <p className="mt-4">Normal Price: S$330</p>
                    <p>Offer Price: S$175 (Only for AC 2025 - Registerd Members, Please reachout us for coupon before booking)</p>
                    <a href="https://all.accor.com/hotel/C266/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=bing+maps" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4  rounded">Open Website</button>
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Hotel