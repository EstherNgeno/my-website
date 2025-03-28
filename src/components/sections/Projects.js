import React from "react";


const Projects = () => {

    return (
        <section className="font-serif lg:flex-row items-center pt-10 pb-5 px-6 lg:px-20 gap-8">
            <div className="flex flex-col justify-start items-start lg:items-start lg:text-left pl-40 lg:pl-40 text-black dark:text-white max-w-lg">
            <h1 className="text-4xl sm:text-5xl font-semibold ml-20 mb-4 leading-tight">{`<Projects/>`}</h1>
            </div>
            <div className="flex flex-col justify-start items-start lg:items-start lg:text-left pl-40 lg:pl-40 text-black dark:text-white max-w-lg">
                <ul className="animate-in flex flex-col animated-list">
                    <li className="py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 last:pb-0">
                        <a className="w-full md:w-2/5 aspect-video bg-tertiary rounded-lg border border-secondary overflow-clip select-none" href="https://lateshow-esther-ngeno.onrender.com/"></a>
                    </li>

                </ul>
            </div>

            </section>
    

    );
};

export default Projects;