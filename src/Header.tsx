
import React, { useState } from "react"


const Header = () => {

    const [istoggle, setIstoggle] = useState(false)
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu?.classList.contains('hidden')) {
            mobileMenu.style.animation = 'slide-in-right 0.2s ease-in-out forwards';
            mobileMenu.classList.remove('hidden');
            setIstoggle(true)

        } else {
            if (mobileMenu) {
                mobileMenu?.classList.add('animate-slide-out-right');
                mobileMenu.style.animation = 'slide-out-right 0.3s ease-in-out forwards';
                setIstoggle(false)
            }
            mobileMenu?.classList.add('hidden')
        }
    }
    return (
        <header className="bg-white shadow fixed top-0 left-0 right-0 z-10">
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="text-2xl font-bold">Toastmasters District 80</div>
                <button className="lg:hidden" id="menu-toggle" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMobileMenu}>
                    {
                        istoggle ?
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                            </> :
                            <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z" />
                            </svg>
                    }
                </button>
                <ul className="hidden lg:flex space-x-6">
                    <li><a href="#features" className="hover:text-blue-500">Features</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Agenda</a></li>
                    <li><a href="#speaker" className="hover:text-blue-500">Speaker</a></li>
                    <li><a href="#contest" className="hover:text-blue-500">Contest</a></li>
                    <li><a href="#venue" className="hover:text-blue-500">Venue</a></li>
                    <li><a href="#team" className="hover:text-blue-500">Team</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </nav>
            <div className="lg:hidden bg-yellow-300 " id="mobile-menu" >
                <ul className="flex  mr-10 flex-col space-y-3 items-end " >
                    <li><a href="#features" className="hover:text-blue-500" onClick={() => setTimeout(() => toggleMobileMenu(), 50)}>Features</a></li>
                    <li><a href="#contact" className="hover:text-blue-500" onClick={() => setTimeout(() => toggleMobileMenu(), 50)}>Agenda</a></li>
                    <li><a href="#speaker" className="hover:text-blue-500" onClick={() => setTimeout(() => toggleMobileMenu(), 50)}>Speaker</a></li>
                    <li><a href="#contest" className="hover:text-blue-500" onClick={() => setTimeout(() => toggleMobileMenu(), 50)}>Contest</a></li>
                    <li><a href="#venue" className="hover:text-blue-500" onClick={() => setTimeout(() => toggleMobileMenu(), 50)}>Venue</a></li>
                    <li><a href="#team" className="hover:text-blue-500" onClick={() => setTimeout(() => toggleMobileMenu(), 50)}>Team</a></li>
                    <li><a href="#contact" className="hover:text-blue-500" onClick={() => setTimeout(() => toggleMobileMenu(), 50)}>Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
