import React from 'react'

const Contact = () => {

    return (
        <div className='px-4'>
            <div style={{ fontFamily: "Franklin" }} className="w-full md:w-3/4 mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
                <h2 className="text-2xl flex justify-center uppercase font-bold mb-4 Franklin">Contact Us</h2>
                <div className='-ml-16'>
                    <p className="md:text-lg mb-4 -ml-10"><span className="inline-block">Email</span> : <a href="mailto:pqdd80@gmail.com" className="text-blue-500  hover:underline"> pqdd80@gmail.com</a></p>
                    <p className="md:text-lg mb-4"><span className="inline-block">Niza Khalil, DTM</span> : <a href="https://api.whatsapp.com/send?phone=6596795181" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">+65 96795181</a></p>
                    <p className="md:text-lg mb-4"><span className="inline-block">Lim Cheng Boon</span> : <a href="https://api.whatsapp.com/send?phone=6596710068" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">+65 96710068</a></p >
                </div>
            </div >
        </div>
    )
}

export default Contact