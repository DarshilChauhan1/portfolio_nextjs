"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: "01",
        title: "UnifyPay",
        year: "2024",
        description: "A Unified Payment Gateway Library that simplifies payment processing by integrating multiple payment providers into a single, easy-to-use SDK for multiple platforms in single codebase.",
        techStack: ["TypeScript", "Node.js", "OOPS", "Payment Gateways"],
        features: [
            "Multiple Payment Providers",
            "Easy Integration",
            "Secure Transactions",
            "Comprehensive Documentation"
        ],
        githubLink: "#",
        demoLink: "#"
    },
    {
        id: "02",
        title: "Query Builder LLM",
        year: "2024",
        description: "Tool for executing and generating SQL queries using natural language processing and LLMs to interact with databases more intuitively just like ChatGPT.",
        techStack: ["Langchain", "OpenAI", "PostgreSQL", "TypeScript", "NestJS", "Prisma", "Docker"],
        features: [
            "Natural Language to SQL",
            "Database Integration",
            "Query Execution",
            "Error Handling",
            "Live Demo"
        ],
        githubLink: "#",
        demoLink: null
    }
];

const Projects = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(
            itemsRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 75%",
                },
            }
        );
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="w-full py-24 px-6 text-foreground">
            <div className="container mx-auto max-w-6xl">
                <div className="flex items-center gap-4 mb-20">
                    <FaProjectDiagram className="text-3xl text-white hidden" />
                    <div>
                        <p className="text-accent-green text-sm uppercase tracking-[0.2em] mb-3 font-bold">My Work</p>
                        <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">Selected Projects</h2>
                    </div>
                </div>

                <div className="flex flex-col gap-24">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => { itemsRef.current[index] = el; }}
                            className="group relative border-b border-gray-800 pb-16 last:border-none"
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:items-start justify-between">
                                {/* Left: Number and Title */}
                                <div className="md:w-2/3">
                                    <span className="block font-oswald text-xl text-gray-600 mb-2">.{project.id}</span>
                                    <h3 className="font-oswald text-5xl md:text-7xl font-bold uppercase text-white group-hover:text-accent-green transition-colors duration-500 leading-none mb-6">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="text-gray-400 text-xs uppercase tracking-wider">
                                                {tech} {i !== project.techStack.length - 1 && <span className="text-gray-600 mx-2">•</span>}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                                <FaGithub className="text-xl" />
                                                <span className="uppercase text-sm tracking-wider">GitHub</span>
                                            </a>
                                        )}
                                        {project.demoLink && (
                                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                                <FaExternalLinkAlt className="text-lg" />
                                                <span className="uppercase text-sm tracking-wider">Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Right: Description and Features */}
                                <div className="md:w-1/3 flex flex-col gap-6">
                                    <p className="text-gray-400 leading-relaxed text-base">
                                        {project.description}
                                    </p>

                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Key Features</h4>
                                        <ul className="flex flex-col gap-2">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                    <span className="w-1 h-1 bg-accent-green rounded-full"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
