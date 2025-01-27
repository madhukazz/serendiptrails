'use client'
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="flex items-center border-2 border-white justify-center fixed bottom-4 right-4 p-3 w-10 h-10 text-white rounded-full bg-primary shadow-md focus:outline-none group"
                aria-label="Scroll to top"
            >
                <i className="ri-arrow-up-s-line group-hover:translate-y-[-5px] transition-all"></i>
            </button>
        )
    );
};

export default ScrollToTop;
