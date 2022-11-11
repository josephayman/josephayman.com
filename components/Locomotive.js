import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect } from "react";

export default function Locomotive() {
    const scrollRef = React.createRef();

    useEffect(() => {
        const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        });
    }, []);
    
    return null;
    }
