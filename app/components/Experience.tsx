"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase, FaNodeJs, FaAws, FaDocker, FaPython, FaJs } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiRabbitmq, SiElasticstack, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
    {
        company: "Sunbots Innovations LLP",
        role: "Backend Engineer / DevOps Engineer",
        date: "Mar 2024 – Present",
        location: "",
        description: "",
        achievements: [
            "Designed and implemented scalable backend systems using Node.js, Nest.js, TypeScript.",
            "Optimized SQL queries, improving server efficiency by 10×.",
            "Implemented role-based column architecture for compliant data access.",
            "Automated centralized logging via ELK Stack + Winston.",
            "Built and managed Razorpay integrations (subscriptions, orders, webhooks).",
            "Deployed services on AWS EC2 with PM2, Nginx.",
            "Integrated OpenAI / Azure OpenAI APIs and implemented SSE streaming.",
            "Engineered a parallel-processing RAG pipeline using Python + Docker + AWS ECS (Fargate).",
            "Built RabbitMQ-based distributed processing system for parallel ingestion.",
            "Reduced infrastructure cost by migrating EC2 workloads → ECS on-demand containers.",
            "Implemented vector search & RAG flows for 1,000+ page documents with high concurrency.",
        ],
        technologies: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Nest.js", icon: <SiNestjs className="text-red-600" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
            { name: "AWS", icon: <FaAws className="text-orange-500" /> },
            { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
            { name: "Python", icon: <FaPython className="text-yellow-300" /> },
            { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-600" /> },
            { name: "ELK Stack", icon: <SiElasticstack className="text-yellow-500" /> },
        ],
    },
    {
        company: "Lucent Innovations",
        role: "Backend Engineer Internship",
        date: "2024 (Jan - Jun)",
        location: "Ahmedabad, India",
        description: "Worked on a Fintech startup project to develop and maintain backend services and APIs.",
        achievements: [
            "Developed RESTful APIs for core banking features",
            "Learned best practices in backend development and cloud deployment",
            "Collaborated with cross-functional teams to deliver features on time",
            "Learned about Shopify API and its integration",
        ],
        technologies: [
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        ],
    },
];

const highlightKeywords = [
    "10×",
    "role-based column architecture",
    "centralized logging",
    "Razorpay integrations",
    "OpenAI / Azure OpenAI APIs",
    "SSE streaming",
    "parallel-processing RAG pipeline",
    "RabbitMQ-based distributed processing",
    "Reduced infrastructure cost",
    "vector search & RAG flows",
    "1,000+ page documents",
    "scalability",
    "high concurrency"
];

const highlightText = (text: string) => {
    let parts = [text];
    highlightKeywords.forEach((keyword) => {
        const newParts: any[] = [];
        parts.forEach((part) => {
            if (typeof part === "string") {
                const split = part.split(keyword);
                split.forEach((s, i) => {
                    newParts.push(s);
                    if (i < split.length - 1) {
                        newParts.push(
                            <span key={`${keyword}-${i}`} className="text-accent-green font-bold">
                                {keyword}
                            </span>
                        );
                    }
                });
            } else {
                newParts.push(part);
            }
        });
        parts = newParts;
    });
    return parts;
};

const Experience = () => {
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
                duration: 1,
                stagger: 0.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 75%",
                },
            }
        );
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="w-full py-24 px-6 text-foreground">
            <div className="container mx-auto max-w-6xl">
                <div className="flex items-center gap-4 mb-16">
                    <FaBriefcase className="text-3xl text-white hidden" />
                    <div>
                        <p className="text-accent-green text-sm uppercase tracking-[0.2em] mb-3 font-bold">My Journey</p>
                        <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">My Experience</h2>
                    </div>
                </div>

                <div className="flex flex-col gap-20">
                    {experienceData.map((exp, index) => (
                        <div
                            key={index}
                            ref={(el) => { itemsRef.current[index] = el; }}
                            className="relative pl-8 border-l border-gray-800"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-accent-green rounded-full shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div>

                            <div className="flex flex-col gap-2 mb-6">
                                <h3 className="text-gray-500 text-sm uppercase tracking-widest">{exp.company}</h3>
                                <h4 className="font-oswald text-4xl md:text-5xl font-bold text-white leading-tight">
                                    {exp.role}
                                </h4>
                                <div className="flex items-center gap-4 text-gray-400 text-sm mt-1">
                                    <span>{exp.date}</span>
                                    {exp.location && (
                                        <>
                                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                            <span>{exp.location}</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {exp.description && (
                                <p className="text-gray-400 mb-6 max-w-3xl leading-relaxed">
                                    {exp.description}
                                </p>
                            )}

                            <ul className="flex flex-col gap-4 mb-10">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed text-lg">
                                        <span className="mt-2.5 w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0"></span>
                                        <span>{highlightText(achievement)}</span>
                                    </li>
                                ))}
                            </ul>

                            <div>
                                <h5 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Tech Stack</h5>
                                <div className="flex flex-wrap gap-3">
                                    {exp.technologies.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 text-gray-300 text-sm rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
                                        >
                                            <span className="text-lg opacity-90">{tech.icon}</span>
                                            <span className="font-medium">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
