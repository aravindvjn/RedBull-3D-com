import { Variants } from "framer-motion";

export const slideAnimation = (direction: "left" | "right" | "top" | "bottom"): Variants => {
    const x = direction === "left" ? -100 : direction === "right" ? 100 : 0;
    const y = direction === "top" ? -100 : direction === "bottom" ? 100 : 0;

    return {
        initial: { x, y, opacity: 0 },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { type: "tween", ease: "easeIn", duration: 0.2 },
        },
        exit: {
            x,
            y,
            opacity: 0,
            transition: { type: "tween", ease: "easeIn", duration: 0.3 },
        },
    };
};
