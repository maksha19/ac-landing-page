import React, { useState } from "react";

const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
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
    )
}

export default RegisterForm;