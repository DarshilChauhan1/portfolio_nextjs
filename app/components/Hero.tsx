"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const titleRef1 = useRef<HTMLSpanElement>(null);
    const titleRef2 = useRef<HTMLSpanElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            [titleRef1.current, titleRef2.current],
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 }
        )
            .fromTo(
                descRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(
                ctaRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            );
    }, []);

    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-foreground">
            {/* Background Particles Removed */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-accent-green rounded-full opacity-30 animate-pulse delay-75"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse delay-150"></div>
                <div className="absolute bottom-10 right-10 w-2 h-2 bg-accent-green rounded-full opacity-20 animate-pulse delay-300"></div>
            </div>



            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-row items-center justify-between h-full gap-4 sm:gap-6 md:gap-12 py-20 md:py-0">

                {/* Text Content */}
                <div className="flex flex-col justify-center md:h-full max-w-3xl z-20 text-left">
                    <h1 className="font-oswald text-3xl sm:text-5xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tighter">
                        <span ref={titleRef1} className="text-accent-green block opacity-0 translate-y-10">Backend</span>
                        <span ref={titleRef2} className="text-white block opacity-0 translate-y-10">Engineer</span>
                    </h1>

                    <div className="mt-4 sm:mt-8 max-w-xl">
                        <p ref={descRef} className="text-gray-400 text-sm sm:text-lg md:text-xl leading-relaxed opacity-0 translate-y-10">
                            Hi! I'm <span className="text-white font-bold">Darshil Chauhan</span>.
                            A Backend & DevOps Engineer with 2 years of experience in building scalable,
                            high-performance systems.
                        </p>
                    </div>

                    <div ref={ctaRef} className="mt-6 sm:mt-10 flex flex-wrap gap-4 sm:gap-8 items-center justify-start opacity-0 translate-y-10">
                        <a href="mailto:contact@darshilchauhan.dev" className="bg-accent-green text-black font-oswald font-bold text-sm sm:text-xl px-4 sm:px-8 py-2 sm:py-3 uppercase tracking-wider hover:bg-[#00cc33] transition-colors cursor-pointer inline-block">
                            Hire Me
                        </a>

                        {/* Stats moved here for better mobile/desktop flow */}
                        <div className="hidden sm:flex gap-8">
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

                    <div className="flex gap-2 sm:gap-4 mt-4 sm:mt-8 justify-start text-sm sm:text-xl">
                        <a href="https://github.com/DarshilChauhan1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-green transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/darshil-chauhan-118637215/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-green transition-colors">LinkedIn</a>
                        <a href="mailto:contact@darshilchauhan.dev" className="text-gray-400 hover:text-accent-green transition-colors">Email</a>
                    </div>
                </div>

                {/* Right Side Image - visible on all screens */}
                <div className="relative w-[140px] h-[180px] sm:w-[220px] sm:h-[280px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] flex-shrink-0">
                    {/* Decorative Elements behind image */}
                    <div className="absolute top-10 right-10 w-full h-full border-2 border-accent-green/30 rounded-2xl -z-10"></div>
                    <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-accent-green/10 rounded-full blur-2xl -z-10"></div>

                    <div className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-700 ease-in-out shadow-2xl bg-[#2a2a2a]">
                        {/* Instagram-style Skeleton Loading */}
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-[#2a2a2a] overflow-hidden">
                                <div 
                                    className="absolute inset-0" 
                                    style={{
                                        background: 'linear-gradient(90deg, #2a2a2a 0%, #3a3a3a 20%, #4a4a4a 40%, #3a3a3a 60%, #2a2a2a 80%, #2a2a2a 100%)',
                                        backgroundSize: '200% 100%',
                                        animation: 'skeleton-shimmer 1.5s ease-in-out infinite'
                                    }}
                                />
                            </div>
                        )}
                        <div className="absolute inset-0"></div>
                        <Image
                            src="/hero-image.png"
                            alt="Darshil Chauhan"
                            fill
                            className={`object-cover object-top transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            priority
                            onLoad={() => setTimeout(() => setImageLoaded(true), 700)}
                        />
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Hero;
