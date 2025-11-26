"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import gsap from "gsap";
import { FaArrowRight, FaCalendar, FaClock } from "react-icons/fa";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

export default function BlogDetail() {
    const router = useRouter();
    const params = useParams();
    const slug = params.slug;
    const transitionLayersRef = useRef<(HTMLDivElement | null)[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setPost] = useState<SanityDocument | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
                title,
                image,
                publishedAt,
                readTime,
                body
            }`;
            const data = await client.fetch(POST_QUERY, { slug });
            setPost(data);
        };
        if (slug) {
            fetchPost();
        }
    }, [slug]);

    useEffect(() => {
        if (isLoaded && post) {
            // Reveal animation only after image is loaded AND post is fetched
            const tl = gsap.timeline();

            // Ensure layers are covering the screen initially
            gsap.set(transitionLayersRef.current, { y: "0%" });

            // Animate layers away to reveal content
            tl.to(transitionLayersRef.current, {
                y: "-100%",
                duration: 0.8,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: 0.2, // Small delay to ensure render
            });
        }
    }, [isLoaded, post]);

    const handleBack = () => {
        const tl = gsap.timeline({
            onComplete: () => {
                router.push("/");
            }
        });

        // Reset layers to top (hidden above) for "upside down" effect
        gsap.set(transitionLayersRef.current, { y: "-100%" });

        // Animate layers down to cover screen
        tl.to(transitionLayersRef.current, {
            y: "0%",
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.inOut",
        });
    };

    if (!post) {
        return (
            <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center">
                <div className="text-accent-green font-oswald text-2xl font-bold tracking-widest animate-pulse">
                    LOADING...
                </div>
            </div>
        );
    }

    return (
        <main className="relative min-h-screen text-foreground overflow-hidden">
            {/* Transition Layers */}
            <div className="fixed inset-0 z-[60] pointer-events-none">
                <div ref={el => { transitionLayersRef.current[0] = el }} className="absolute inset-0 bg-black flex items-center justify-center">
                    {!isLoaded && (
                        <div className="text-accent-green font-oswald text-2xl font-bold tracking-widest animate-pulse z-[61]">
                            LOADING...
                        </div>
                    )}
                </div>
                <div ref={el => { transitionLayersRef.current[1] = el }} className="absolute inset-0 bg-accent-green"></div>
                <div ref={el => { transitionLayersRef.current[2] = el }} className="absolute inset-0 bg-[#111]"></div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[50vh] md:h-[60vh]">
                {post.image && (
                    <Image
                        src={urlFor(post.image).width(1200).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                        onLoad={() => setIsLoaded(true)}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 container mx-auto max-w-4xl">
                    <h1 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        {post.title}
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-3xl px-6 py-16 md:py-24">
                <div className="flex items-center gap-6 text-gray-400 mb-8 text-sm md:text-base border-b border-gray-800 pb-8">
                    <span className="flex items-center gap-2"><FaCalendar className="text-accent-green" /> {new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span className="flex items-center gap-2"><FaClock className="text-accent-green" /> {post.readTime}</span>
                </div>

                <div className="prose prose-lg prose-invert prose-headings:font-oswald prose-a:text-accent-green max-w-none text-gray-300">
                    <PortableText
                        value={post.body}
                        components={{
                            block: {
                                h1: ({ children }) => <h1 className="text-4xl font-bold text-white mt-12 mb-6 font-oswald">{children}</h1>,
                                h2: ({ children }) => <h2 className="text-3xl font-bold text-white mt-10 mb-5 font-oswald">{children}</h2>,
                                h3: ({ children }) => <h3 className="text-2xl font-bold text-white mt-8 mb-4 font-oswald">{children}</h3>,
                                h4: ({ children }) => <h4 className="text-xl font-bold text-white mt-6 mb-3 font-oswald">{children}</h4>,
                                normal: ({ children }) => <p className="mb-6 leading-relaxed">{children}</p>,
                                blockquote: ({ children }) => <blockquote className="border-l-4 border-accent-green pl-4 italic my-6 text-gray-400">{children}</blockquote>,
                            },
                            list: {
                                bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
                                number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
                            },
                            listItem: {
                                bullet: ({ children }) => <li className="pl-2">{children}</li>,
                                number: ({ children }) => <li className="pl-2">{children}</li>,
                            },
                            marks: {
                                link: ({ children, value }) => {
                                    const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
                                    return (
                                        <a href={value.href} rel={rel} className="text-accent-green hover:underline decoration-accent-green underline-offset-4 transition-all">
                                            {children}
                                        </a>
                                    );
                                },
                            }
                        }}
                    />
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group"
                    >
                        <FaArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </button>
                    <div className="text-accent-green font-oswald font-bold text-xl">
                        Thanks for reading!
                    </div>
                </div>
            </div>
        </main>
    );
}
