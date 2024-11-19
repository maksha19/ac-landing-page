
import React, { useEffect, useState } from "react"
import HeaderImage from "./images/WordmarkSince1924Color.png"


const Header = () => {

    const [istoggle, setIstoggle] = useState(false)

    useEffect(() => {
        toggleMobileMenu()
        // eslint-disable-next-line
    }, [])
    const toggleMobileMenu = () => {
        setTimeout(() => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu?.classList.contains('hidden')) {
                mobileMenu.style.animation = 'slide-in-right 0s ease-in-out forwards';
                mobileMenu.classList.remove('hidden');
                setIstoggle(!istoggle)

            } else {
                if (mobileMenu) {
                    mobileMenu?.classList.add('slide-out-right');
                    mobileMenu.style.animation = 'slide-out-right 0s ease-in-out forwards';
                    setIstoggle(!istoggle)
                    mobileMenu?.classList.add('hidden')
                }

            }
        }, 50)

    }
    return (
        <header className="bg-white w-full shadow fixed top-0 left-0 right-0 z-10">
            <nav className="container mx-auto px-4 py-4 pb-0 md:py-6 flex justify-between items-center">
                <div>
                    <img src={HeaderImage}
                        className="left-0 w-full h-24 object-cover"
                        alt="background"
                    />

                </div>
                <button className="lg:hidden pr-4" id="menu-toggle" aria-expanded="false" aria-label="Toggle navigation" onClick={() => toggleMobileMenu()}>
                    {
                        istoggle ?
                            <svg className="fill-current" width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z" />
                            </svg> :
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                            </>

                    }
                </button>
                <ul style={{ fontFamily: "Franklin" }} className="hidden lg:flex space-x-6">
                    <li><a href="#Home" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#agenda" className="hover:text-blue-500">Program</a></li>
                    <li><a href="#speaker" className="hover:text-blue-500">Speaker</a></li>
                    <li><a href="#registration" className="hover:text-blue-500">Registration</a></li>
                    <li><a href="#venue" className="hover:text-blue-500">Venue</a></li>
                    <li><a href="#hotel" className="hover:text-blue-500 p-2">Hotel</a></li>
                    {/* <li><a href="#team" className="hover:text-blue-500">Team</a></li> */}
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                    <li><a target='_blank' rel="noreferrer" href="https://www.visitsingapore.com/" className="hover:text-blue-500">Visit Singapore</a></li>

                </ul>
            </nav>
            <div style={{ fontFamily: "Franklin" }} className={`lg:hidden  ${istoggle ? 'hidden' : 'block'}`} id="mobile-menu" >
                <ul className="flex  mr-10 flex-col space-y-3 items-end " >
                    <li><a href="#Home" className="hover:text-blue-500 p-2" onClick={() => toggleMobileMenu()}>Home</a></li>
                    <li><a href="#agenda" className="hover:text-blue-500 p-2" onClick={() => toggleMobileMenu()}>Program</a></li>
                    <li><a href="#speaker" className="hover:text-blue-500 p-2" onClick={() => toggleMobileMenu()}>Speaker</a></li>
                    <li><a href="#registration" className="hover:text-blue-500 p-2" onClick={() => toggleMobileMenu()}>Registration</a></li>
                    <li><a href="#venue" className="hover:text-blue-500 p-2" onClick={() => toggleMobileMenu()}>Venue</a></li>
                    <li><a href="#hotel" className="hover:text-blue-500 p-2" onClick={() => toggleMobileMenu()}>Hotel</a></li>
                    {/* <li><a href="#team" className="hover:text-blue-500 p-2" onClick={() => toggleMobileMenu()}>Team</a></li> */}
                    <li><a href="#contact" className="hover:text-blue-500 p-2" onClick={() => toggleMobileMenu()}>Contact</a></li>
                    <li><a target='_blank' rel="noreferrer" href="https://www.visitsingapore.com/" className="hover:text-blue-500">Visit Singapore</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
