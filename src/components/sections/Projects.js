import React from "react";
import Lateshow from "../../assets/Lateshow.png";
import { AiFillGithub } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import Expensetracker from "../../assets/Expensetracker.png"


const Projects = () => {

    return (
        <section className="font-serif lg:flex-row items-center pt-10 pb-5 px-6 lg:px-20 gap-8">
            <div className="justify-start items-start lg:items-start lg:text-left pl-40 lg:pl-40 text-black dark:text-white">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-4 text-center leading-tight">{`<Projects/>`}</h1>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[1100px] justify-start items-start lg:items-start pl-40 lg:pl-40 ml-20 pt-10 text-black dark:text-white">
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
                <a className="block cursor-pointer" href="https://lateshow-esther-ngeno.onrender.com/">
                <img alt="Lateshow" className="h-70 w-full overflow-hidden object-cover object-top" src={Lateshow}/>
                </a>
                <div className="flex flex-col px-2">
                    <div className="prose max-w-full text-pretty text-base text-muted-foreground">
                        <p className="prose max-w-full text-pretty text-base text-muted-foreground">This is a code challenge where we are building an API to track shows and their ratings.</p>
                    </div>
                </div>
                <div className="text-base text-muted-foreground mt-auto flex flex-col px-2">
                    <div className="mt-2 flex flex-wrap gap-1">
                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:text-black px-1 py-0 text-[10px]">Flask</div>
                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:text-black px-1 py-0 text-[10px]">SQLAlchemy</div>
                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:text-black px-1 py-0 text-[10px]">Python</div>
                    </div>
                </div>
                <div className="flex items-center pt-2 px-2 pb-2">
                    <div className="flex flex-row flex-wrap items-start gap-1">
                        <a href="https://github.com/Moringa-SDF-PTO7/lateshow-esther-ngeno">
                        <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-fuchsia-100 text-black flex gap-2 px-2 py-1 text-[12px]"> <AiFillGithub className="w-7 h-7" /> GitHub</div>
                        </a>
                        <a href="https://lateshow-esther-ngeno.onrender.com/">
                        <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-fuchsia-100 text-black flex gap-2 px-2 py-1 text-[12px]"> <FaArrowUpRightFromSquare className="w-7 h-7" /> Live Link</div>
                        </a>
                        <a href="https://lateshow-esther-ngeno.onrender.com/">
                        <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-fuchsia-100 text-black flex gap-2 px-2 py-1 text-[12px]"> <AiFillYoutube className="w-7 h-7" /> YouTube</div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
                <a className="block cursor-pointer" href="https://lateshow-esther-ngeno.onrender.com/">
                <img alt="Expensetracker" className="h-30 w-full overflow-hidden object-cover object-top" src={Expensetracker}/>
                </a>
                <div className="flex flex-col px-2">
                    <div className="prose max-w-full text-pretty text-base text-muted-foreground">
                        <p className="prose max-w-full text-pretty text-base text-muted-foreground">This is a small project that helped me master CRUD operations and APIs. I was able to implement JWT Authentication for Flask to enable implementation of user roles, register and login.</p>
                    </div>
                </div>
                <div className="text-base text-muted-foreground mt-auto flex flex-col px-2">
                    <div className="mt-2 flex flex-wrap gap-1">
                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:text-black px-1 py-0 text-[10px]">React</div>
                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:text-black px-1 py-0 text-[10px]">Flask</div>
                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:text-black px-1 py-0 text-[10px]">PostgreSQL</div>
                    </div>
                </div>
                <div className="flex items-center pt-2 px-2 pb-2">
                    <div className="flex flex-row flex-wrap items-start gap-1">
                        <a href="https://github.com/Moringa-SDF-PTO7/lateshow-esther-ngeno">
                        <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-fuchsia-100 text-black flex gap-2 px-2 py-1 text-[12px]"> <AiFillGithub className="w-7 h-7" /> GitHub</div>
                        </a>
                        <a href="https://lateshow-esther-ngeno.onrender.com/">
                        <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-fuchsia-100 text-black flex gap-2 px-2 py-1 text-[12px]"> <FaArrowUpRightFromSquare className="w-7 h-7" /> Live Link</div>
                        </a>
                        <a href="https://lateshow-esther-ngeno.onrender.com/">
                        <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-fuchsia-100 text-black flex gap-2 px-2 py-1 text-[12px]"> <AiFillYoutube className="w-7 h-7" /> YouTube</div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
                <a className="block cursor-pointer" href="https://lateshow-esther-ngeno.onrender.com/">
                <img alt="Expensetracker" className="h-30 w-full overflow-hidden object-cover object-top" src={Expensetracker}/>
                </a>
                <div className="flex flex-col px-2">
                    <div className="prose max-w-full text-pretty text-base text-muted-foreground">
                        <p className="prose max-w-full text-pretty text-base text-muted-foreground">This is a small project that helped me master CRUD operations and APIs. I was able to implement JWT Authentication for Flask to enable implementation of user roles, register and login.</p>
                    </div>
                </div>
                <div className="text-base text-muted-foreground mt-auto flex flex-col px-2">
                    <div className="mt-2 flex flex-wrap gap-1">
                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:text-black px-1 py-0 text-[10px]">React</div>
                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:text-black px-1 py-0 text-[10px]">Flask</div>
                        <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:text-black px-1 py-0 text-[10px]">PostgreSQL</div>
                    </div>
                </div>
                <div className="flex items-center pt-2 px-2 pb-2">
                    <div className="flex flex-row flex-wrap items-start gap-1">
                        <a href="https://github.com/Moringa-SDF-PTO7/lateshow-esther-ngeno">
                        <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-fuchsia-100 text-black flex gap-2 px-2 py-1 text-[12px]"> <AiFillGithub className="w-7 h-7" /> GitHub</div>
                        </a>
                        <a href="https://lateshow-esther-ngeno.onrender.com/">
                        <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-fuchsia-100 text-black flex gap-2 px-2 py-1 text-[12px]"> <FaArrowUpRightFromSquare className="w-7 h-7" /> Live Link</div>
                        </a>
                        <a href="https://lateshow-esther-ngeno.onrender.com/">
                        <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-fuchsia-100 text-black flex gap-2 px-2 py-1 text-[12px]"> <AiFillYoutube className="w-7 h-7" /> YouTube</div>
                        </a>
                    </div>
                </div>
            </div>


            </div>


            </section>
    

    );
};

export default Projects;