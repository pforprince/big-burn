import React, { createRef } from "react";
import Logo from '../assets/logo.svg';

export default function Header() {
    const menuBtn = createRef();
    const menu = createRef();
    // var nav = document.getElementById('site-menu');
    // var header = document.getElementById('top');

    // window.addEventListener('scroll', function() {
    // if (window.scrollY >=400) { // adjust this value based on site structure and header image height
    //     nav.classList.add('nav-sticky');
    //     header.classList.add('pt-scroll');
    // } else {
    //     nav.classList.remove('nav-sticky');
    //     header.classList.remove('pt-scroll');
    // }
    // });
    const navToggle = () => {
        menuBtn.current.classList.toggle('open');
        menu.current.classList.toggle('flex');
        menu.current.classList.toggle('hidden');
        menu.current.classList.toggle('open-transform');
    }
    return (
        <nav id="site-menu" className="flex flex-col sm:flex-row w-11/12 justify-between items-center px-4 py-4 sm:px-6 mx-auto shadow sm:shadow-none">
            <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
                <img src={Logo} alt="Logo"/>
                <div className="sm:hidden block flex flex-row items-center">
                    <button className="hover:bg-yellow hover:text-white rounded-full bg-white px-7 text-1sm text-yellow font-medium font-knockout">LOGIN</button>
                    <button ref={menuBtn} className="hamburger block focus:outline-none" type="button" onClick={navToggle}>
                        <span className="hamburger__top-bun"></span>
                        <span className="hamburger__middle-bun"></span>
                        <span className="hamburger__bottom-bun"></span>
                    </button>
                </div>
            </div>
            <div ref={menu} className="w-full sm:w-auto sm:self-center sm:flex flex-col sm:flex-row items-center h-full hidden">
                <div  className="w-full sm:w-auto sm:self-center flex flex-col sm:flex-row items-center h-full">
                    <a className="text-white hover:text-yellow text-1sm font-oxygen w-full no-underline sm:w-auto sm:pr-4 py-1 sm:py-1 " href="#about">Home</a>
                    <a className="text-white hover:text-yellow text-1sm font-oxygen w-full no-underline sm:w-auto sm:pr-4 py-1 sm:py-1 " href="#about">Passes</a>
                    <a className="text-white hover:text-yellow text-1sm font-oxygen w-full no-underline sm:w-auto sm:pr-4 py-1 sm:py-1 " href="#about">About</a>
                    <a className="text-white hover:text-yellow text-1sm font-oxygen w-full no-underline sm:w-auto sm:pr-4 py-1 sm:py-1 " href="#contact">Contact</a>
                </div>
                <button className="hover:bg-yellow hover:text-white rounded-full bg-white px-10 text-2sm text-yellow font-medium font-knockout hidden sm:flex">LOGIN</button>
            </div>
        </nav>
    )
}