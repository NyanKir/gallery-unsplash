import { useState, useEffect } from 'react'

export const useScrollHandler=()=>{
    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const elm=document.body
        const parent = elm.parentNode, pos = (elm.scrollTop || parent.scrollTop) / (parent.scrollHeight - parent.clientHeight ) * 100;
        setSrollPosition(pos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return Math.round(scrollPosition)
}