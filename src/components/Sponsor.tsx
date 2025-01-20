
import firstCom from '../images/firstComAcademy.jpeg'
import passionMade from '../images/passionMadePossible.jpeg'
const Sponsor = () => {

    return (
        <div className='px-4'>
            <div style={{ fontFamily: "Franklin" }}
                className=" mb-8 font-bold text-3xl md:text-5xl uppercase w-full text-center p-1 ">
                Our Sponsor
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-x-2">
                <div className='flex flex-col items-center justify-center px-6'>
                    <div style={{ fontFamily: "Franklin" }} className='text-xl'>Spported by:</div>
                    <div>
                        <img src={passionMade} alt={"Passion Made Possible"} className="w-36 h-36 md:w-48 md:h-48 object-contain" />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center px-6'>
                    <div style={{ fontFamily: "Franklin" }} className='text-xl'>Diamond Sponsor:</div>
                    <div>
                        <img src={firstCom} alt={"FirstCom Acedemy"} className="w-36 h-36 md:w-48 md:h-48 object-contain" />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Sponsor;