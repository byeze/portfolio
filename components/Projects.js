import React from "react";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <Container>
            <h2 className="text-4xl md:text-6xl font-bold tracking-wide">
                Proyectos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProjectCard
                    className="hover:bg-purple-400 text-white bg-gray-500"
                    title="xCaster 3"
                    tagline="Streaming a Instagram"
                    description="Herramienta de uso interno para transmitir a Instagram usando OBS, Tricaster o software externo."
                    screenshot="/xcaster.png"
                    role="Founder & Dev"
                    imageStyle={{ width: "24rem" }}
                />
                <ProjectCard
                    className="hover:bg-orange-400 text-white bg-gray-500"
                    title="Salata"
                    tagline="Comida rápida vegetariana"
                    description="E-commerce para pedir comida en menos de 1 minuto, integrado con WhatsApp."
                    screenshot="/salata.png"
                    role="Founder & Dev"
                    imageStyle={{ width: "14rem" }}
                />
                <ProjectCard
                    className="hover:bg-green-400 text-white bg-gray-500"
                    title="MixHub"
                    tagline="Streaming de espectáculos musicales"
                    description="Plataforma de streaming para djs pay-to-view de música en vivo."
                    role="CoFounder & Dev"
                />
                <ProjectCard
                    className="hover:bg-blue-500 text-white bg-gray-500"
                    title="Flux Records"
                    tagline="Distribución musical simple"
                    screenshot="/flux.png"
                    role="Founder & Dev"
                    imageStyle={{ width: "24rem" }}
                />
                <div
                    className="md:col-span-2 relative transition bottom-0 left-0 duration-75 rounded-sm border-dashed border-4 border-gray-200 transform hover:scale-95 flex items-center justify-center"
                    style={{ height: 458 }}
                >
                    <p className="font-bold text-center">
                        ¡Acá puede estar tu próximo proyecto!
                    </p>
                    <div className="absolute bottom-0 left-0">
                        <img
                            src="/elen-gañado.png"
                            className="p-2 w-32 md:w-56"
                            alt="Elen Gañado Smith"
                        />
                    </div>
                </div>
            </div>

            <p className="text-xs text-gray-300 my-4">
                Todos disponibles para demos privados.
            </p>
        </Container>
    );
}
