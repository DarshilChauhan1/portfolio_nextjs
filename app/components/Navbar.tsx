"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLUListElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            gsap.to(window, { duration: 1, scrollTo: element, ease: "power3.inOut" });
        }
    };

    useEffect(() => {
        const menu = menuRef.current;
        const links = linksRef.current?.children;
        const social = socialRef.current?.children;

        if (isOpen) {
            gsap.to(menu, {
                x: "0%",
                duration: 0.8,
                ease: "power3.inOut",
            });

            if (links) {
                gsap.fromTo(
                    links,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        delay: 0.4,
                        ease: "power3.out",
                    }
                );
            }

            if (social) {
                gsap.fromTo(
                    social,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        delay: 0.6,
                        ease: "power3.out",
                    }
                );
            }

        } else {
            gsap.to(menu, {
                x: "100%",
                duration: 0.8,
                ease: "power3.inOut",
            });
        }
    }, [isOpen]);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="fixed top-6 right-6 z-50 flex flex-col gap-1.5 cursor-pointer group"
            >
                <div className={`w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
                <div className={`w-6 h-0.5 bg-white ml-auto transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
                <div className={`w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </button>

            {/* Full Screen Menu */}
            <div
                ref={menuRef}
                className="fixed inset-y-0 right-0 w-full md:w-1/4 bg-[#1a1a1a] z-40 transform translate-x-full flex flex-col justify-center shadow-2xl"
            >
                <div className="container mx-auto px-8 flex flex-col gap-10 w-full">

                    {/* Social Links */}
                    <div className="text-gray-400">
                        <h3 className="text-sm uppercase tracking-widest mb-6">Social</h3>
                        <div ref={socialRef} className="flex flex-col gap-3 text-lg">
                            <a href="https://github.com/DarshilChauhan1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
                            <a href="https://linkedin.com/in/darshilchauhan-118637215" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linkedin</a>
                        </div>
                    </div>

                    {/* Menu Links */}
                    <div className="text-white">
                        <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-400">Menu</h3>
                        <ul ref={linksRef} className="flex flex-col gap-5 text-2xl font-oswald font-bold">
                            <li onClick={() => handleLinkClick("hero")} className="flex items-center gap-3 cursor-pointer hover:text-accent-green transition-colors">
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                                Home
                            </li>
                            <li onClick={() => handleLinkClick("about")} className="flex items-center gap-3 cursor-pointer hover:text-accent-green transition-colors">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                About Me
                            </li>
                            <li onClick={() => handleLinkClick("skills")} className="flex items-center gap-3 cursor-pointer hover:text-accent-green transition-colors">
                                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                                Skills & Tools
                            </li>
                            <li onClick={() => handleLinkClick("experience")} className="flex items-center gap-3 cursor-pointer hover:text-accent-green transition-colors">
                                <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                                Experience
                            </li>
                            <li onClick={() => handleLinkClick("projects")} className="flex items-center gap-3 cursor-pointer hover:text-accent-green transition-colors">
                                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                                Projects
                            </li>
                            <li onClick={() => handleLinkClick("blogs")} className="flex items-center gap-3 cursor-pointer hover:text-accent-green transition-colors">
                                <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
                                Blogs
                            </li>
                            <li onClick={() => handleLinkClick("contact")} className="flex items-center gap-3 cursor-pointer hover:text-accent-green transition-colors">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                                Contact Me
                            </li>
                        </ul>
                    </div>

                    {/* Footer Contact */}
                    <div className="mt-8">
                        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Get in Touch</p>
                        <a href="mailto:chauhandarshil716@gmail.com" className="text-white text-base hover:text-accent-green transition-colors break-all">chauhandarshil716@gmail.com</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
