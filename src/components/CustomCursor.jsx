import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Move cursor and follower
        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        // Hover effects
        const onMouseEnter = () => setIsHovering(true);
        const onMouseLeave = () => setIsHovering(false);

        const clickableElements = document.querySelectorAll('a, button, .cursor-pointer');

        clickableElements.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        window.addEventListener('mousemove', onMouseMove);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            clickableElements.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, [location.pathname]); // Re-run on route change to attach listeners to new elements

    useEffect(() => {
        // Animate cursor state based on hover
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (isHovering) {
            gsap.to(cursor, { scale: 0, duration: 0.3 }); // Hide main cursor point
            gsap.to(follower, {
                scale: 1.5,
                rotate: 45,
                backgroundColor: 'rgba(224, 159, 62, 0.2)', // brand color #e09f3e
                borderColor: '#e09f3e',
                borderWidth: 2,
                duration: 0.3
            });
        } else {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(follower, {
                scale: 1,
                rotate: 0,
                backgroundColor: 'transparent',
                borderColor: '#335c67', // brand color #335c67
                borderWidth: 1,
                duration: 0.3
            });
        }
    }, [isHovering]);

    return (
        <>
            {/* Main minimal point */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-[#335c67] rounded-none pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            ></div>

            {/* Follower (Diamond Shape) */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-[#335c67] pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-md rotate-45 transition-colors duration-300"
            ></div>
        </>
    );
};

export default CustomCursor;
