import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right";
}

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (direction === "left") {
            el.style.transform = "translateX(-40px)";
        } else if (direction === "right") {
            el.style.transform = "translateX(40px)";
        }

        const tween = gsap.to(el, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
            delay: delay / 1000,
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
            },
        });

        return () => {
            tween.kill();
        };
    }, [delay, direction]);

    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    );
};

export default ScrollReveal;
