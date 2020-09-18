import { motion, useViewportScroll } from "framer-motion";
import React from "react";
import Container from "./Container";

export default function BottomContact() {
    const { scrollYProgress } = useViewportScroll();

    return (
        <Container>
            <div className="text-center">
                <motion.div style={{ scale: scrollYProgress, transition: "scale ease-in-out 5s" }}>
                    <p className="text-2xl font-semibold">¡Vamos a trabajar juntos!</p>
                    <p className="text-2xl">👋 ezeecalonge@gmail.com</p>
                </motion.div>
            </div>
        </Container>
    );
}
