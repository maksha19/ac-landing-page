import verity_price from "../images/verity_Price.jpg";

const Speaker = () => {


    return (
        <div className='px-4'>
            <section className="py-10" id="speaker">
                <div style={{ fontFamily: "Franklin" }}
                    className=" mb-8 font-bold text-3xl md:text-5xl uppercase w-full text-center p-1 ">
                    Our KeyNote Speakers
                </div>

                <div className="relative">
                    <img
                        src={verity_price}
                        className="left-0 md:w-full md:h-[800px] h-[250px] m-0"
                        alt="background"
                    />
                    <div style={{ fontFamily: "Franklin" }} id='key-note' className='absolute top-0 left-0 pl-1 md:p-8 bg-black bg-opacity-5  h-full w-[40%] flex flex-col items-center justify-center'>
                        <p style={{ fontFamily: "Great Vibes, cursive" }} className="text-white text-xl md:text-6xl">Verity Price </p>
                        <p className="text-white md:text-2xl mt-4">The First speaker from Africa and 6th Woman in history to ever win the World Championship of Public Speaking.</p>
                        <p className="hidden md:block text-white text-2xl mt-4">From being a professional singer to becoming a professional speaker and facilitator, Verity has over 15 years of experience inspiring audiences around the world.</p>
                        <p className="hidden md:block text-white text-2xl mt-4">When she's not dazzling on conference stages, she is passionately helping organizations and individuals transform their presenting skills.</p>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['https://picsum.photos/500/300', 'https://picsum.photos/500/301', 'https://picsum.photos/500/302'].map((src, index) => (
                    <div className="bg-white p-6 shadow-lg rounded-lg" key={index}>
                        <img src={src} className="w-full h-48 object-cover mb-4" alt="" />
                        <h3 className="text-2xl font-semibold mb-4">Speaker {index + 1}</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">More Info</button>
                    </div>
                ))}
            </div> */}
            </section>
        </div>
    )
}

export default Speaker;