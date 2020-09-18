import React from "react";

export default function ProjectCard({
    className,
    title,
    tagline,
    description,
    screenshot,
    isBrowser,
    role,
    imageStyle
}) {
    return (
        <div
            className={`relative transition duration-75 rounded-sm bg-gray-500 transform hover:scale-95 ${
                className ? className : ""
            }`}
            style={{ height: 458 }}
        >
            <div className="p-6 pb-0 pt-10 text-center">
                <div className="block leading-snug">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="text-sm text-white opacity-50 tracking-widest font-semibold uppercase">
                        {tagline}
                        <br />
                        {role ? `${role}` : null}
                    </p>
                </div>

                <div className="mt-4 md:mt-6">{description}</div>
            </div>

            {screenshot ? (
                <div className="fixed bottom-0 w-full">
                    <img
                        src={screenshot}
                        className={`mx-auto ${
                            isBrowser ? "rounded-sm" : ""
                        }`}
                        alt={title + " screenshot"}
                        style={imageStyle}
                    />
                </div>
            ) : null}
        </div>
    );
}
