"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { usePathname } from "next/navigation";

const ScrollProgress = () => {
    const progressRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        const progress = progressRef.current;

        if (!progress) return;

        // Reset height first
        gsap.set(progress, { height: "0%" });

        const anim = gsap.to(progress, {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.1,
            },
        });

        return () => {
            anim.kill();
            if (anim.scrollTrigger) {
                anim.scrollTrigger.kill();
            }
        };
    }, [pathname]);

    // Hide on blog detail pages
    if (pathname?.startsWith("/blogs/")) {
        return null;
    }

    return (
        <div className="fixed right-10 top-1/2 -translate-y-1/2 h-40 w-2 rounded-full bg-gray-800 overflow-hidden z-50 hidden md:block">
            <div
                ref={progressRef}
                className="w-full bg-accent-green rounded-full"
                style={{ height: "0%" }}
            ></div>
        </div>
    );
};

export default ScrollProgress;
