"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FaJs,
    FaReact,
    FaNodeJs,
    FaAws,
    FaDocker,
    FaDatabase,
    FaJava,
} from "react-icons/fa";
import {
    SiTypescript,
    SiNestjs,
    SiExpress,
    SiNextdotjs,
    SiNginx,
    SiPostgresql,
    SiMongodb,
    SiOpensearch,
    SiElasticstack,
    SiRabbitmq,
    SiApachekafka,
} from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
    {
        category: "Languages",
        icon: <FaJs className="text-yellow-400" />,
        items: [
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
            { name: "Java", icon: <FaJava className="text-red-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        ],
    },
    {
        category: "Frameworks",
        icon: <FaReact className="text-blue-400" />,
        items: [
            { name: "Nest.js", icon: <SiNestjs className="text-red-600" /> },
            { name: "React.js", icon: <FaReact className="text-blue-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
        ],
    },
    {
        category: "Cloud & DevOps",
        icon: <FaAws className="text-orange-500" />,
        items: [
            { name: "AWS", icon: <FaAws className="text-orange-500" /> },
            { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
            { name: "PM2", icon: <VscServerProcess className="text-green-400" /> },
            { name: "Nginx", icon: <SiNginx className="text-green-600" /> },
            { name: "CI/CD", icon: <VscServerProcess className="text-blue-300" /> },
        ],
    },
    {
        category: "Datastores",
        icon: <FaDatabase className="text-blue-300" />,
        items: [
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "OpenSearch", icon: <SiOpensearch className="text-blue-600" /> },
            { name: "ELK Stack", icon: <SiElasticstack className="text-yellow-500" /> },
            { name: "Athena", icon: <FaAws className="text-orange-500" /> },
        ],
    },
    {
        category: "Messaging",
        icon: <SiApachekafka className="text-gray-200" />,
        items: [
            { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-600" /> },
            { name: "Kafka", icon: <SiApachekafka className="text-gray-200" /> },
            { name: "REST APIs", icon: <VscServerProcess className="text-purple-400" /> },
            { name: "SSE", icon: <VscServerProcess className="text-pink-400" /> },
        ],
    },
    {
        category: "Monitoring",
        icon: <SiElasticstack className="text-yellow-500" />,
        items: [
            { name: "ELK Stack", icon: <SiElasticstack className="text-yellow-500" /> },
            { name: "Winston", icon: <VscServerProcess className="text-green-300" /> },
        ],
    },
];

const Skills = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(
            cardsRef.current,
            { y: 50, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="w-full py-24 px-6 text-foreground relative overflow-hidden">
            {/* Background Elements Removed for global consistency */}

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="mb-16 text-center md:text-left">
                    <p className="text-accent-green text-sm uppercase tracking-[0.2em] mb-3 font-bold">My Expertise</p>
                    <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight">
                        Skills <span className="text-gray-700">&</span> <br className="md:hidden" /> Tools
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="bg-[#111] p-8 border border-gray-800 hover:border-accent-green transition-all duration-500 group rounded-xl hover:shadow-[0_0_30px_rgba(0,255,65,0.1)] hover:-translate-y-2"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="text-4xl p-3 bg-gray-900 rounded-lg group-hover:text-accent-green transition-colors duration-300">
                                    {skill.icon}
                                </div>
                                <h3 className="font-oswald text-2xl font-bold text-gray-200 group-hover:text-white transition-colors">
                                    {skill.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {skill.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 text-gray-300 text-sm rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
                                    >
                                        <span className="text-lg opacity-80">{item.icon}</span>
                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
