
import firstCom from '../images/firstComAcademy.jpeg'
import passionMade from '../images/passionMadePossible.jpeg'
import div_l from '../images/divl.jpeg'
const Sponsor = () => {

    return (
        <div className='px-4'>
            <div style={{ fontFamily: "Franklin" }}
                className=" mb-8 font-bold text-3xl md:text-5xl uppercase w-full text-center p-1 ">
                OUR SPONSORS
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-20 space-y-4">
                <div className='flex flex-col items-center justify-center px-6 bg-[#dbeafe] rounded-lg shadow-lg'>
                    <div style={{ fontFamily: "Franklin" }} className='text-xl mt-8'>Supported by:</div>
                    <div>
                        <img src={passionMade} alt={"Passion Made Possible"} className="w-36 h-36 md:w-48 md:h-48 object-contain" />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center px-6 bg-[#dbeafe] rounded-lg shadow-lg '>
                    <div style={{ fontFamily: "Franklin" }} className='text-xl mt-8'>Diamond Sponsor:</div>
                    <div>
                        <img src={firstCom} alt={"FirstCom Acedemy"} className="w-36 h-36 md:w-48 md:h-48 object-contain" />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center px-6 bg-[#dbeafe] rounded-lg shadow-lg '>
                    <div style={{ fontFamily: "Franklin" }} className='text-xl mt-8'>Bronze Sponsors:</div>
                    <div className="flex flex-row items-center">
                        <div>
                            <img src={div_l} alt={"Div L"} className="w-36 h-36 md:w-48 md:h-48 p-10 object-contain" />
                        </div>
                        <div className="flex bg-white p-4 rounded-lg shadow-md w-32 h-18 md:w-32 md:h-28 items-center justify-center">
                            <p style={{ fontFamily: "Franklin" }} className="text-2xl" >Simon Ang</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sponsor;