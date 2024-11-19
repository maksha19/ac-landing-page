import React, { useState } from 'react';

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
                    fileData: reader.result as string,
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
        const url = "https://script.google.com/macros/s/AKfycbz48KDxYGkHlJpuXCqLJxo3EYf8tOVYsF8rUnvCTG_7mJr2CFfdOJiMZcEibqs1fweE4A/exec";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formValues),
            });

            const result = await response.json();
            if (result.status === "success") {
                alert("Form submitted successfully!");
                setFormValues(formInitialValues);
            } else {
                console.log("Failed to submit", `: ${result.message}`);
                alert("Please try again. Or contact us");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Please try again. Or contact us");
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

                            <b>Group Fee:  S$288 per person</b> (regular price: S$520 per person)Offer valid until 30 November 2024,  or until sold out. <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="feeInfo"
                            name="feeInfo"
                            placeholder="Your answer"
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
                            <b>Individual Fee: S$288 per person</b> (regular price: S$520 per person) Offer valid until 30 November 2024, or until sold out.<br /><br />
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
                            <b>We’re thrilled to offer two exclusive experiences crafted  for our guests:</b><br /><br />
                            <b>Option 1: Discover Singapore in a Day!</b><br />
                            Join us for a unique 1-day tour around Singapore’s iconic sights!<br /><br />
                            <b>Experience Singapore's Best:</b> From lush gardens to bustling markets, see the sights that make Singapore special.<br /><br />
                            <b>Deeply Customized for You:</b> Tailored to your interests and guided by local experts.<br /><br />
                            <b>Toastmasters Connections:</b> Accompanied by fellow Singaporean Toastmasters volunteers, ready to share insights into the city's culture and history.<br /><br />
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
                            />
                            <label htmlFor="outofBoth" className="text-sm font-medium text-gray-700">
                                Opt-Out of Both
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={!formValues.fileName}
                        className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${!formValues.fileName && "disabled:opacity-50 disabled:cursor-not-allowed"}`}
                    >
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Form;
