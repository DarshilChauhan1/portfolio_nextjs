"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaCalendar, FaClock } from "react-icons/fa";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

gsap.registerPlugin(ScrollTrigger);

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

interface BlogsProps {
    posts: SanityDocument[];
}

const Blogs = ({ posts }: BlogsProps) => {
    const router = useRouter();
    const transitionLayersRef = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef(null);


    // Initial animation for the list
    useEffect(() => {
        if (posts.length === 0) return;

        const ctx = gsap.context(() => {
            // Blog card fade in
            gsap.from(".blog-card", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Image reveal effect (left to right)
            gsap.to(".image-reveal-overlay", {
                scaleX: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [posts]);

    const handleBlogClick = (slug: string) => {
        // Prevent scrolling on body
        document.body.style.overflow = "hidden";

        const tl = gsap.timeline({
            onComplete: () => {
                router.push(`/blogs/${slug}`);
                // Reset overflow after navigation (next page will handle its own overflow)
                document.body.style.overflow = "auto";
            }
        });

        // Reset layers to bottom
        gsap.set(transitionLayersRef.current, { y: "100%" });

        // Animate layers up to cover screen
        tl.to(transitionLayersRef.current, {
            y: "0%",
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.inOut",
        });
    };

    return (
        <section id="blogs" ref={sectionRef} className="w-full py-24 px-6 text-foreground relative">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center md:text-left">
                    <p className="text-accent-green text-sm uppercase tracking-[0.2em] mb-3 font-bold">Thoughts & Insights</p>
                    <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">
                        Latest <span className="text-gray-700">Blogs</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div
                            key={post._id}
                            className="blog-card group cursor-pointer"
                            onClick={() => handleBlogClick(post.slug)}
                        >
                            <div className="relative h-64 w-full overflow-hidden rounded-xl mb-6">
                                {post.image && (
                                    <Image
                                        src={urlFor(post.image).width(800).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                                {/* Left-to-right reveal overlay */}
                                <div className={`image-reveal-overlay absolute inset-0 bg-[#111] origin-left`} style={{ transformOrigin: 'right' }}></div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                <span className="flex items-center gap-1"><FaCalendar className="text-accent-green" /> {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                <span className="flex items-center gap-1"><FaClock className="text-accent-green" /> {post.readTime}</span>
                            </div>

                            <h3 className="font-oswald text-2xl font-bold text-white mb-3 group-hover:text-accent-green transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-4 line-clamp-3">
                                {post.summary}
                            </p>

                            <div className="flex items-center gap-2 text-accent-green font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform">
                                Read More <FaArrowRight />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Transition Layers */}
            <div className="fixed inset-0 z-[60] pointer-events-none">
                <div ref={el => { transitionLayersRef.current[0] = el }} className="absolute inset-0 bg-black translate-y-full"></div>
                <div ref={el => { transitionLayersRef.current[1] = el }} className="absolute inset-0 bg-accent-green translate-y-full"></div>
                <div ref={el => { transitionLayersRef.current[2] = el }} className="absolute inset-0 bg-[#111] translate-y-full"></div>
            </div>
        </section>
    );
};

export default Blogs;
