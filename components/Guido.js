import React, { useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
    shown: {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
    },
    hidden: {
        x: 0,
        y: 100,
        scale: 1,
        rotate: 0,
    },
};

export default function Guido({ show, }) {
    useEffect(() => {
        var noo = new Audio("/noo.mp3");
        noo.play();
        if (show) {
            noo.play();
        }
    }, [show]);

    return (
        <motion.div
            className={`fixed bottom-0 min-w-full pointer-events-none select-none ${
                show ? "block" : "hidden"
            }`}
            variants={variants}
            initial={variants.hidden}
            animate={show ? "shown" : "hidden"}
        >
            <div className="mx-auto">
                <img src="/guido-speech.gif" className="w-64 mx-auto" />
                <img src="/guido.png" className="w-64 mx-auto pl-10" />
            </div>
        </motion.div>
    );
}
