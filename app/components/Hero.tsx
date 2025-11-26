"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
    // Particles removed in favor of global background

    return (
        <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden text-foreground">
            {/* Background Particles Removed */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-accent-green rounded-full opacity-30 animate-pulse delay-75"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse delay-150"></div>
                <div className="absolute bottom-10 right-10 w-2 h-2 bg-accent-green rounded-full opacity-20 animate-pulse delay-300"></div>
            </div>



            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-full gap-12">

                {/* Text Content */}
                <div className="flex flex-col justify-center h-full max-w-3xl z-20">
                    <h1 className="font-oswald text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tighter">
                        <span className="text-accent-green block">Backend</span>
                        <span className="text-white block">Engineer</span>
                    </h1>

                    <div className="mt-8 max-w-xl">
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                            Hi! I'm <span className="text-white font-bold">Darshil Chauhan</span>.
                            A Backend & DevOps Engineer with 2 years of experience in building scalable,
                            high-performance systems.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-8 items-center">
                        <a href="mailto:chauhandarshil716@gmail.com" className="bg-accent-green text-black font-oswald font-bold text-xl px-8 py-3 uppercase tracking-wider hover:bg-[#00cc33] transition-colors cursor-pointer inline-block">
                            Hire Me
                        </a>

                        {/* Stats moved here for better mobile/desktop flow */}
                        <div className="flex gap-8">
                            <div>
                                <h3 className="text-accent-green font-oswald text-3xl font-bold">2+</h3>
                                <p className="text-gray-400 text-xs uppercase tracking-wider">Years Exp.</p>
                            </div>
                            <div>
                                <h3 className="text-accent-green font-oswald text-3xl font-bold">5+</h3>
                                <p className="text-gray-400 text-xs uppercase tracking-wider">Projects</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <a href="https://github.com/DarshilChauhan1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-green transition-colors text-xl">GitHub</a>
                        <a href="https://linkedin.com/in/darshilchauhan-118637215" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-green transition-colors text-xl">LinkedIn</a>
                        <a href="mailto:chauhandarshil716@gmail.com" className="text-gray-400 hover:text-accent-green transition-colors text-xl">Email</a>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="hidden md:block relative w-[400px] h-[500px] lg:w-[500px] lg:h-[600px] flex-shrink-0">
                    {/* Decorative Elements behind image */}
                    <div className="absolute top-10 right-10 w-full h-full border-2 border-accent-green/30 rounded-2xl -z-10"></div>
                    <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-accent-green/10 rounded-full blur-2xl -z-10"></div>

                    <div className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-700 ease-in-out shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60"></div>
                        <Image
                            src="/hero-image.png"
                            alt="Darshil Chauhan"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Hero;
