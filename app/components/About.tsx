"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);


    useEffect(() => {
        // Scroll progress moved to global component
    }, []);

    return (
        <section id="about" ref={sectionRef} className="relative w-full min-h-screen text-foreground py-24 px-6 flex items-center justify-center">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start justify-between gap-12">
                {/* Left Side: Title */}
                <div className="md:w-1/3">
                    <p className="text-accent-green text-sm uppercase tracking-[0.2em] mb-3 font-bold">This is me.</p>
                    <h2 className="font-oswald text-5xl md:text-7xl font-bold leading-tight uppercase tracking-tight">
                        Hi, I'm <span className="text-white">Darshil.</span>
                    </h2>
                </div>

                {/* Middle: Content */}
                <div className="md:w-1/2 flex flex-col gap-8 text-gray-400 text-lg leading-relaxed">
                    <p>
                        I'm a Software Engineer focused on building scalable, reliable, and cloud-native systems using Node.js, NestJS, AWS, Docker, and modern infrastructure practices. Over the last few years, I've engineered microservices, automated cloud deployments, built real-time platforms, and worked across distributed systems that emphasize performance, security, and maintainability.
                    </p>
                    <p>
                        I enjoy solving backend challenges—whether it’s reducing API latency, designing fault-tolerant architectures, implementing queue-based workflows, or building end-to-end CI/CD pipelines. My work often revolves around high-throughput APIs, content-processing pipelines, authentication systems, and large-scale data platforms.
                    </p>
                </div>

                {/* Right Side: Cylindrical Scroll Progress Removed (Moved to global) */}
            </div>
        </section>
    );
};

export default About;
