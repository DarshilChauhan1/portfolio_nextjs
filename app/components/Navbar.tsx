"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLUListElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const navbarRef = useRef<HTMLDivElement>(null);
    const desktopLinksRef = useRef<HTMLUListElement>(null);

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

    // Initial Entry Animation
    useEffect(() => {
        // Only run animations if we are NOT on a blog page
        if (pathname.startsWith("/blogs/")) return;

        const navbar = navbarRef.current;
        const desktopLinks = desktopLinksRef.current?.children;

        if (navbar) {
            gsap.fromTo(
                navbar,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.5,
                }
            );
        }

        if (desktopLinks) {
            gsap.fromTo(
                desktopLinks,
                { y: -20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    delay: 1, // Start after navbar slides in
                    ease: "power3.out",
                }
            );
        }
    }, [pathname]);

    // Mobile Menu Animation
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

    const navLinks = [
        { id: "hero", label: "Home", color: "bg-yellow-500" },
        { id: "about", label: "About Me", color: "bg-blue-500" },
        { id: "skills", label: "Skills & Tools", color: "bg-purple-500" },
        { id: "experience", label: "Experience", color: "bg-teal-500" },
        { id: "projects", label: "Projects", color: "bg-indigo-500" },
        { id: "blogs", label: "Blogs", color: "bg-pink-500" },
        { id: "contact", label: "Contact Me", color: "bg-red-500" },
    ];



    // Scroll listener to hide logo in Hero section
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.8) {
                setShowLogo(true);
            } else {
                setShowLogo(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Hide Navbar on blog detail pages
    if (pathname.startsWith("/blogs/")) {
        return null;
    }

    return (
        <>
            {/* Desktop Navbar */}
            <nav
                ref={navbarRef}
                className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-transparent pointer-events-none"
            >
                {/* Logo */}
                <div
                    className={`text-white font-sans font-bold text-2xl pointer-events-auto cursor-pointer transition-opacity duration-500 ${showLogo ? "opacity-100" : "opacity-0"}`}
                    onClick={() => handleLinkClick("hero")}
                >
                    DC
                </div>

                {/* Desktop Links */}
                <ul ref={desktopLinksRef} className="hidden md:flex gap-8 pointer-events-auto">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            onClick={() => handleLinkClick(link.id)}
                            className="text-white font-oswald text-lg cursor-pointer hover:text-accent-green transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-green transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Button (Mobile Only) */}
                <button
                    onClick={toggleMenu}
                    className="flex md:hidden items-center justify-center w-10 h-10 cursor-pointer group pointer-events-auto relative z-50"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {/* Hamburger Icon */}
                    <div className={`absolute flex flex-col gap-1.5 transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}>
                        <div className="w-8 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white ml-auto"></div>
                        <div className="w-8 h-0.5 bg-white"></div>
                    </div>
                    {/* X/Close Icon */}
                    <div className={`absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}>
                        <div className="w-8 h-0.5 bg-white rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-8 h-0.5 bg-white -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </button>
            </nav>

            {/* Full Screen Menu (Mobile Only) */}
            <div
                ref={menuRef}
                className={`fixed inset-y-0 right-0 w-full md:hidden bg-[#1a1a1a] z-40 transform translate-x-full flex flex-col justify-center shadow-2xl ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                <div className="container mx-auto px-8 flex flex-col gap-10 w-full">

                    {/* Social Links */}
                    <div className="text-gray-400">
                        <h3 className="text-sm uppercase tracking-widest mb-6">Social</h3>
                        <div ref={socialRef} className="flex flex-col gap-3 text-lg">
                            <a href="https://github.com/DarshilChauhan1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
                            <a href="https://www.linkedin.com/in/darshil-chauhan-118637215/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linkedin</a>
                        </div>
                    </div>

                    {/* Menu Links */}
                    <div className="text-white">
                        <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-400">Menu</h3>
                        <ul ref={linksRef} className="flex flex-col gap-5 text-2xl font-oswald font-bold">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    onClick={() => handleLinkClick(link.id)}
                                    className="flex items-center gap-3 cursor-pointer hover:text-accent-green transition-colors"
                                >
                                    <span className={`w-2.5 h-2.5 rounded-full ${link.color}`}></span>
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer Contact */}
                    <div className="mt-8">
                        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Get in Touch</p>
                        <a href="mailto:contact@darshilchauhan.dev" className="text-white text-base hover:text-accent-green transition-colors break-all">contact@darshilchauhan.dev</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
