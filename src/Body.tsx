import React from 'react';
import ac_poster from "./AC_Poster_hero.jpg";

const FullWidthHeightImage = () => {
    return (
        <img
            src={ac_poster}
            className="left-0 w-full h-auto object-cover"
            alt="background image"
        />
    )
}

const Body = () => {

    const [step, setStep] = React.useState(1);
    const [openSpeaker, setOpenSpeaker] = React.useState(0)
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        district: '',
        clubNumber: '',
        clubOfficers: [],
        paymentMethod: '',
    });

    /**
     * Handles a change event on an input element in the form.
     * 
     * @param event The change event.
     */
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        setFormData((previousFormData: typeof formData) => ({
            ...previousFormData,
            [name]: value,
        }));
    }

    const handleNextStep = (event: any): void => {
        event.preventDefault();
        setStep((prevState: number) => prevState + 1);
    }

    const handlePreviousStep = (event: any): void => {
        event.preventDefault();
        setStep((prevState: number) => prevState - 1);
    }

    /**
     * Handles a change event on the club officers select element in the form.
     * 
     * @param event The change event. The target property of the event must be an
     * HTMLSelectElement.
     */
    const handleClubOfficersChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const { target } = event;
        const selectedOptions = Array.from(target.selectedOptions, option => option.value);
        setFormData((previousFormData: any) => ({
            ...previousFormData,
            clubOfficers: selectedOptions,
        }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission
    }

    return (
        <div className="container  mx-auto px-4">
            {/* Hero Section */}
            <section className="relative mt-20 text-center pb-10" id="hero">
                <FullWidthHeightImage />
            </section>
            <section className="py-20" id="speaker">
                <h2 className="text-4xl font-bold text-center mb-8">Our Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {['https://picsum.photos/500/300', 'https://picsum.photos/500/301', 'https://picsum.photos/500/302'].map((src, index) => (
                        <div className="bg-white p-6 shadow-lg rounded-lg" key={index}>
                            <img src={src} className="w-full h-48 object-cover mb-4" alt="" />
                            <h3 className="text-2xl font-semibold mb-4">Speaker {index + 1}</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpenSpeaker(openSpeaker === index + 1 ? 0 : index + 1)}>More Info</button>
                        </div>
                    ))}
                </div>
                {openSpeaker !== 0 && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
                        <div className="bg-white p-6 shadow-lg rounded-lg max-w-md" style={{
                            left: `calc(50vw - ${Math.min(360, window.innerWidth / 2)}px)`,
                            top: `calc(50vh - ${Math.min(360, window.innerHeight / 2)}px)`,
                        }}>
                            <div className="relative">
                                <h3 className="text-2xl font-semibold mb-4">Speaker title {openSpeaker}</h3>
                                <button className="absolute  right-0 top-0 p-2 hover:bg-gray-100 rounded-full" onClick={() => setOpenSpeaker(0)}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                                <div >
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </section>
            {/* Contact Section */}
            <section className="py-20" id="contact">
                <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

                <form className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className="" id="step1">
                            <h3 className="text-2xl font-bold mb-4">Step 1: Personal Information</h3>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2" htmlFor="name">Name</label>
                                <input className="border py-2 px-3 text-gray-700" type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2" htmlFor="email">Email</label>
                                <input className="border py-2 px-3 text-gray-700" type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2" htmlFor="phone">Phone</label>
                                <input className="border py-2 px-3 text-gray-700" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleNextStep}>Next</button>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="" id="step2">
                            <h3 className="text-2xl font-bold mb-4">Step 2: Club Information</h3>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2" htmlFor="district">District</label>
                                <select className="border py-2 px-3 text-gray-700" id="district" name="district" value={formData.district} onChange={handleInputChange}>
                                    <option value="">Select District</option>
                                    <option value="D80">D80</option>
                                    <option value="D81">D81</option>
                                    <option value="D82">D82</option>
                                    <option value="D83">D83</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2" htmlFor="clubNumber">Club Number</label>
                                <input className="border py-2 px-3 text-gray-700" type="text" id="clubNumber" name="clubNumber" value={formData.clubNumber} onChange={handleInputChange} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2" htmlFor="clubOfficers">Club Officers</label>
                                <select className="border py-2 px-3 text-gray-700" id="clubOfficers" name="clubOfficers" multiple={true} value={formData.clubOfficers} onChange={handleClubOfficersChange}>
                                    <option value="CP">CP</option>
                                    <option value="VPE">VPE</option>
                                    <option value="VPPR">VPPR</option>
                                    <option value="VPM">VPM</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600" onClick={handlePreviousStep}>Previous</button>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleNextStep}>Next</button>
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="" id="step3">
                            <h3 className="text-2xl font-bold mb-4">Step 3: Payment Information</h3>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2" htmlFor="paymentMethod">Payment Method</label>
                                <select className="border py-2 px-3 text-gray-700" id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
                                    <option value="">Select Payment Method</option>
                                    <option value="creditCard">Credit Card</option>
                                    <option value="paypal">Paypal</option>
                                    <option value="bankTransfer">Bank Transfer</option>
                                </select>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">Submit</button>
                        </div>
                    )}
                </form>

            </section>

            {/* Features Section */}

        </div>
    )
}

export default Body