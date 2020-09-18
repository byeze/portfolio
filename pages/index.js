import Head from "next/head";
import BottomContact from "../components/BottomContact";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Guido from "../components/Guido";
import Projects from "../components/Projects";
import { useState } from "react";

export default function Home() {
    const [guido, setGuido] = useState(false);

    function showIncorrectGuido() {
        if (guido) return;
        setGuido(true);
        setTimeout(() => setGuido(false), 5500);
    }

    return (
        <div className="container relative">
            <Head>
                <title>Ezequiel Calonge | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />

                <meta name="title" content="Ezequiel Calonge | Portfolio" />
                <meta
                    name="description"
                    content="Hola! Soy Eze y soy programador. Este es mi portfolio."
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="/banner.png" />
                <meta
                    property="og:title"
                    content="Ezequiel Calonge | Portfolio"
                />
                <meta
                    property="og:description"
                    content="Hola! Soy Eze y soy programador. Este es mi portfolio."
                />
                <meta property="og:image" content="/banner.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/banner.png" />
                <meta
                    property="twitter:title"
                    content="Ezequiel Calonge | Portfolio"
                />
                <meta
                    property="twitter:description"
                    content="Hola! Soy Eze y soy programador. Este es mi portfolio."
                />
            </Head>

            <main>
                <div className="p-10 md:p-16 bg-gray-800 h-screen flex items-center">
                    <div className="w-full md:w-1/2">
                        <h1 className="font-semibold text-white text-6xl">
                            Hola! Soy{" "}
                            <span className="text-purple-400 underline">
                                Ezequiel Calonge
                            </span>
                            .
                        </h1>
                        <p className="text-gray-100 text-sm">
                            Soy desarrollador fullstack.
                        </p>
                    </div>
                </div>

                <Container>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-wide">
                        Acerca de mi
                    </h2>

                    <div className="leading-relaxed">
                        <p className="text-gray-600 text-justify">
                            Desde chico, siempre me encató toda la tecnologia,
                            me gustaba ver como funcionaba todo y como podía eso
                            solucionar mis cosas. A los 10 años escribí mi
                            primera linea de código en Visual Basic.
                        </p>
                        <p className="text-gray-600 text-justify">
                            Aprendí varios lenguajes y frameworks de manera
                            autodidácta, y desde ese momento aprendo todo de esa
                            manera. A su vez, trabajé en el entretenimiento y
                            redes sociales, manejando equipos de audio/video y
                            manejando cuentas de Instagram. Amo conocer{" "}
                            <span className="italic">todo</span> de todo.
                        </p>
                    </div>

                    <h2 className="text-gray-600 text-2xl font-semibold mt-3">
                        Me encanta 😎
                    </h2>

                    <div className="grid grid-cols-2 space-y-2">
                        <label
                            className="inline-flex items-center"
                            onClick={() => showIncorrectGuido()}
                        >
                            <img
                                src="/checkbox.svg"
                                className="w-5 h-5 md:w-10 md:h-10"
                                alt="-"
                            />
                            <span className="ml-2 text-gray-700 select-none">
                                Salir de mi zona de confort
                            </span>
                        </label>
                        <label
                            className="inline-flex items-center"
                            onClick={() => showIncorrectGuido()}
                        >
                            <img
                                src="/checkbox.svg"
                                className="w-5 h-5 md:w-10 md:h-10"
                                alt="-"
                            />
                            <span className="ml-2 text-gray-700 select-none">
                                Hacer nuevos y buenos proyectos
                            </span>
                        </label>
                        <label
                            className="inline-flex items-center"
                            onClick={() => showIncorrectGuido()}
                        >
                            <img
                                src="/checkbox.svg"
                                className="w-5 h-5 md:w-10 md:h-10"
                                alt="-"
                            />
                            <span className="ml-2 text-gray-700 select-none">
                                Crear cosas innovadoras
                            </span>
                        </label>
                        <label
                            className="inline-flex items-center"
                            onClick={() => showIncorrectGuido()}
                        >
                            <img
                                src="/checkbox.svg"
                                className="w-5 h-5 md:w-10 md:h-10"
                                alt="-"
                            />
                            <span className="ml-2 text-gray-700 select-none">
                                Programar
                            </span>
                        </label>
                        <label
                            className="inline-flex items-center"
                            onClick={() => showIncorrectGuido()}
                        >
                            <img
                                src="/checkbox.svg"
                                className="w-5 h-5 md:w-10 md:h-10"
                                alt="-"
                            />
                            <span className="ml-2 text-gray-700 select-none">
                                Escuchar música
                            </span>
                        </label>
                        <label
                            className="inline-flex items-center"
                            onClick={() => showIncorrectGuido()}
                        >
                            <img
                                src="/checkbox.svg"
                                className="w-5 h-5 md:w-10 md:h-10"
                                alt="-"
                            />
                            <span className="ml-2 text-gray-700 select-none">
                                El café y la lasagna
                            </span>
                        </label>
                        <label
                            className="inline-flex items-center"
                            onClick={() => showIncorrectGuido()}
                        >
                            <img
                                src="/checkbox.svg"
                                className="w-5 h-5 md:w-10 md:h-10"
                                alt="-"
                            />
                            <span className="ml-2 text-gray-700 select-none">
                                Estar siempre movimiento y un paso adelante
                            </span>
                        </label>
                    </div>
                </Container>

                <Projects />

                <BottomContact />

                {guido ? <Guido show={guido} /> : null}

                <Footer />
            </main>
        </div>
    );
}
