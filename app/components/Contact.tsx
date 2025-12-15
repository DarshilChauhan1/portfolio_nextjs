"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(
            contentRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 75%",
                },
            }
        );
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="w-full py-24 px-6 text-foreground">
            <div ref={contentRef} className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Side: Contact Info */}
                    <div className="lg:w-1/2">
                        <p className="text-accent-green text-sm uppercase tracking-[0.2em] mb-3 font-bold">Get in Touch</p>
                        <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">
                            Contact <span className="text-white">Me</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-accent-green text-2xl group-hover:bg-accent-green group-hover:text-black transition-all duration-300">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Email</h4>
                                    <a href="mailto:contact@darshilchauhan.dev" className="text-xl md:text-2xl font-bold text-white hover:text-accent-green transition-colors">
                                        contact@darshilchauhan.dev
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-accent-green text-2xl group-hover:bg-accent-green group-hover:text-black transition-all duration-300">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Phone</h4>
                                    <a href="tel:+916359373443" className="text-xl md:text-2xl font-bold text-white hover:text-accent-green transition-colors">
                                        +91 6359373443
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:w-1/2 bg-gray-900/30 p-8 md:p-12 rounded-2xl border border-gray-800">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm uppercase tracking-widest text-gray-500">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-transparent border-b border-gray-700 py-4 text-white focus:border-accent-green focus:outline-none transition-colors text-lg"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm uppercase tracking-widest text-gray-500">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-transparent border-b border-gray-700 py-4 text-white focus:border-accent-green focus:outline-none transition-colors text-lg"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm uppercase tracking-widest text-gray-500">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="bg-transparent border-b border-gray-700 py-4 text-white focus:border-accent-green focus:outline-none transition-colors text-lg resize-none"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className={`mt-8 bg-accent-green text-black font-bold py-4 px-8 rounded-full uppercase tracking-wider hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 group ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                <span>{status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Failed. Try Again." : "Send Message"}</span>
                                {status === "idle" && <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
