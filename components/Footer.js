import React from "react";
import Container from "./Container";

export default function Footer() {
    return (
        <Container className="bg-gray-100 mb-0 space-x-4">
            <a href="https://github.com/byeze" target="_new">
                <img
                    src="/github.svg"
                    className="w-5 h-5 inline transition duration-75 hover:scale-105 focus:scale-105 transform"
                />
            </a>
            <a href="https://instagram.com/ezecalonge" target="_new">
                <img
                    src="/instagram.svg"
                    className="w-5 h-5 inline transition duration-75 hover:scale-105 focus:scale-105 transform"
                />
            </a>
            <div className="float-right">
                <a
                    href="https://github.com/byeze/portfolio"
                    className="transition ease-in-out duration-200 hover:text-indigo-600"
                    target="_new"
                >
                    <span>Mirá el código 👀</span>
                </a>
            </div>
        </Container>
    );
}
