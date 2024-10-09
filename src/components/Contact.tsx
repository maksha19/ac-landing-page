import React from 'react'

const Contact = () => {

    return (
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl flex justify-center uppercase font-bold mb-4">Contact Us</h2>
            <p className="md:text-lg mb-4"><span className="w-32 md:w-40 inline-block">Email:</span> : <a href="mailto:pqdd80@gmail.com" className="text-blue-500 hover:underline"> pqdd80@gmail.com</a></p>
            <p className="md:text-lg mb-4"><span className="w-32 md:w-40 inline-block">Niza Khalil, DTM</span> : <a href="https://api.whatsapp.com/send?phone=6596795181" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">+65 96795181</a></p>
            <p className="md:text-lg mb-4"><span className="w-32 md:w-40 inline-block">Lim Cheng Boon</span> : <a href="https://api.whatsapp.com/send?phone=6596710068" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">+65 96710068</a></p>
        </div>
    )
}

export default Contact