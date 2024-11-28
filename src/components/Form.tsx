import React, { useState } from 'react';
import axios from "axios";

const Form = () => {
    // State to store form values
    const formInitialValues = {
        fullName: '',
        mobileNumber: '',
        emailAddress: '',
        country: '',
        feeInfo: '',
        mealPreference: '',
        discoverSingapore: '',
        fileName: '',
        fileData: '',
        fileMimeType: ''
    }
    const [formValues, setFormValues] = useState(formInitialValues);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [modelStatements, setModelStatements] = useState("")

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // Handle input change
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormValues({
                    ...formValues,
                    fileName: file.name,
                    fileData: (reader.result as string).split(",")[1],
                    fileMimeType: file.type,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log('Form Submitted:', formValues);
        setIsFormSubmitted(true);
        const url = "https://script.google.com/macros/s/AKfycbz48KDxYGkHlJpuXCqLJxo3EYf8tOVYsF8rUnvCTG_7mJr2CFfdOJiMZcEibqs1fweE4A/exec";

        try {
            const response = await axios.post(
                url,
                { ...formValues, },
                {
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8",
                    },
                }
            );
            const result = await response.data;
            if (result.status === "success") {
                setFormValues(formInitialValues);
                openModal();
                setModelStatements("Form submitted successfully!")
            } else {
                console.log("Failed to submit", `: ${result.message}`);
                setModelStatements("Failed to submit")
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            openModal();
            setModelStatements("Failed to submit")
        } finally {
            setIsFormSubmitted(false);
        }
    };

    return (
        <div className='px-4'>
            <section className="py-10" id="speaker">
                <div style={{ fontFamily: "Franklin" }}
                    className=" mb-8 font-bold text-3xl md:text-5xl uppercase w-full text-center p-1 ">
                    Registration form
                </div>

                <form
                    onSubmit={(e) => { handleSubmit(e); }}
                    className="mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
                >
                    <div className="flex flex-col">
                        <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                            Please complete the questions below and make full payment via bank transfer to Toastmasters International Singapore Ltd. A confirmation receipt will be sent within 5 working days upon successful payment. For more details, Contact us<span className="text-red-600">*</span> <br /><br />
                        </label>
                        <label>
                            <b>Annual Conference Fee:  S$288 per person</b> (Regular price: S$520) Offer valid until 30 November 2024 or until sold out. <b />

                            For overseas bank transfers: <br /> <br />

                            <b>Bank Name:</b> DBS Bank Ltd <br />
                            <b>SWIFT Code:</b> DBSSSGSGXXX <br />
                            <b>Bank Address:</b> 12 Marina Boulevard, Marina Bay Financial Centre <br />
                            <b>Account Name:</b> Toastmasters International Singapore Limited <br />
                            <b>Account Number:</b>00393578 <br />
                            <hr className="my-4 border-t-2 border-gray-300" />
                        </label>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                            Full Name (as per TI records) <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Your answer"
                            value={formValues.fullName}
                            onChange={handleChange}
                            required
                            className="mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mobileNumber" className="text-sm font-medium text-gray-700">
                            WhatsApp (preferred) / Mobile Number <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            placeholder="Your answer"
                            value={formValues.mobileNumber}
                            onChange={handleChange}
                            required
                            className="mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="emailAddress" className="text-sm font-medium text-gray-700">
                            Email address <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="emailAddress"
                            name="emailAddress"
                            placeholder="Your answer"
                            value={formValues.emailAddress}
                            onChange={handleChange}
                            required
                            className="mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="country" className="text-sm font-medium text-gray-700">
                            Country of residence <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            placeholder="Your answer"
                            value={formValues.country}
                            onChange={handleChange}
                            required
                            className="mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="feeInfo" className="text-sm font-medium text-gray-700">
                            If you are registering additional guests from the same country and Toastmasters District with identical preferences, please list their names below.<br /><br />

                            <b>Fee Information:</b><br /><br />

                            <b>Group Fee: S$288 per person </b> (regular price: S$520 per person) Offer valid until 30 November 2024, or until sold out.<span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="feeInfo"
                            name="feeInfo"
                            placeholder="please input group fee under this category"
                            value={formValues.feeInfo}
                            onChange={handleChange}
                            required
                            className="mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mealPreference" className="text-sm font-medium text-gray-700">
                            Indicate your meal preference (all snacks and meals served are halal) <span className="text-red-600">*</span>
                        </label>
                        <br />
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="mealPreferenceYes"
                                name="mealPreference"
                                value="no_preference"
                                onChange={handleChange}
                                required
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                checked={formValues.mealPreference === 'no_preference'}
                            />
                            <label htmlFor="mealPreferenceYes" className="text-sm font-medium text-gray-700">
                                No preference
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="mealPreferenceNo"
                                name="mealPreference"
                                value="no_beef"
                                onChange={handleChange}
                                required
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                checked={formValues.mealPreference === 'no_beef'}
                            />
                            <label htmlFor="mealPreferenceNo" className="text-sm font-medium text-gray-700">
                                No beef
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="mealPreferenceNotYet"
                                name="mealPreference"
                                value="vegetarian"
                                onChange={handleChange}
                                required
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                checked={formValues.mealPreference === 'vegetarian'}
                            />
                            <label htmlFor="mealPreferenceNotYet" className="text-sm font-medium text-gray-700">
                                Vegetarian
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="paymentDetails" className="text-sm font-medium text-gray-700">
                            <b>To complete your registration, please enter the amount, make the payment, and upload the payment receipt.</b><br /><br />
                            <b>Individual Fee: S$288 per person </b> (regular price: S$520 per person) Offer valid until 30 November 2024, or until sold out.<br /><br />
                            <b>Important:</b> All fees are non-refundable. <br /><br />
                            By completing registration, you agree to our general indemnity policy,
                            absolving the organisers of liability for any damages or losses during the event.<br /><br />
                        </label>
                        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md w-full max-w-md mx-auto">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">Upload Your File</h2>
                            <label
                                htmlFor="file-upload"
                                className="cursor-pointer flex flex-col items-center bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Choose File
                                <input
                                    id="file-upload"
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    required
                                />
                            </label>
                            {formValues.fileName && (
                                <p className="mt-4 text-sm text-gray-600">
                                    Selected File: <span className="font-medium">{formValues.fileName}</span>
                                </p>
                            )}
                        </div>
                    </div>
                    <hr className="my-4 border-t-4 border-gray-300" />
                    <div className="flex flex-col">
                        <label htmlFor="discoverSingapore" className="text-sm font-medium text-gray-700">
                            <b>We’re thrilled to offer two meticulously crafted experiences to our guests:</b><br /><br />
                            <b>Option 1: Discover Singapore in a Day!</b><br />
                            Join us for a unique 1-day tour of Singapore’s iconic sights!<br /><br />
                            <b>Experience Singapore's Best:</b> From lush gardens to bustling markets, the Merlion city has much to offer!<br /><br />
                            <b>Customized for You:</b> Tailored to your interests, shouldered by local guides<br /><br />
                            <b>Toastmasters Connections:</b> Accompanied by fellow Singaporean Toastmasters volunteers, with insights into the city's culture and history worn on their sleeves.<br /><br />
                            <i>Note: Transportation, entry tickets, food, and beverages will be at your own expense.</i><br /><br /><br />
                            <b>Option 2: Attend a Local Toastmasters Chapter Meeting</b><br />
                            For a more immersive experience, join a local Toastmasters chapter meeting, meet members, and see how we support each other in Singapore.<br />
                        </label>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="oneDay"
                                name="discoverSingapore"
                                value="oneDay"
                                onChange={handleChange}
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                checked={formValues.discoverSingapore === 'oneDay'}
                            />
                            <label htmlFor="oneDay" className="text-sm font-medium text-gray-700">
                                Join the 1-Day Tour only
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="chapterMeeting"
                                name="discoverSingapore"
                                value="chapterMeeting"
                                onChange={handleChange}
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                checked={formValues.discoverSingapore === 'chapterMeeting'}
                            />
                            <label htmlFor="chapterMeeting" className="text-sm font-medium text-gray-700">
                                Attend Toastmasters Chapter Meeting only
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="joinBoth"
                                name="discoverSingapore"
                                value="joinBoth"
                                onChange={handleChange}
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                checked={formValues.discoverSingapore === 'joinBoth'}
                            />
                            <label htmlFor="joinBoth" className="text-sm font-medium text-gray-700">
                                Join Both
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="radio"
                                id="outofBoth"
                                name="discoverSingapore"
                                value="outofBoth"
                                onChange={handleChange}
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                checked={formValues.discoverSingapore === 'outofBoth'}
                            />
                            <label htmlFor="outofBoth" className="text-sm font-medium text-gray-700">
                                Opt-Out of Both
                            </label>
                        </div>
                    </div>
                    {
                        isFormSubmitted ? <>
                            <button
                                type="button"
                                className="w-full py-2 px-4 bg-gray-200 text-gray-800 font-semibold rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled
                            >
                                <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </button></>
                            :
                            <>
                                <button
                                    type="submit"
                                    disabled={!formValues.fileName}
                                    className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${!formValues.fileName && "disabled:opacity-50 disabled:cursor-not-allowed"}`}
                                >
                                    Submit
                                </button>
                            </>
                    }
                </form>
            </section>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">{modelStatements}</h2>
                        {modelStatements.includes("Failed") && <p className="text-gray-600">Please try again or contact us</p>}
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Form;
