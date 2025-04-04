import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiSqlalchemy } from "react-icons/si";
import { BiSolidFileJson } from "react-icons/bi";


const About = () => {
    return (
        <section className="font-serif lg:flex-row items-center pt-10 pb-5 px-6 lg:px-20 gap-8">
            <div className="justify-start items-start lg:items-start lg:text-left pl-40 lg:pl-40 text-black dark:text-white">
            <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-4 leading-tight">{`<About/>`}</h1>
            </div>
            <section className="font-serif flex flex-col lg:flex-row items-center pt-5 pb-5 justify-center px-6 lg:px-20 gap-8">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-black dark:text-white max-w-lg">
            <p className="text-lg sm:text-xl leading-relaxed">
             I am a Software Engineer with a background in business specializing in Human Resources. My foundation equipped me with transferable skills into the tech world.
             My communication, empathy and problem-solving skills are key in understanding user needs and collaborating effectively in team environments.
             </p>
             <br />
             <p className="text-lg sm:text-xl leading-relaxed">
             I can manage complex workflows and can interpret requirements from non-technical stakeholders, which translates well into gathering and refining software requirements.
             </p>
             <br />
             <p className="text-lg sm:text-xl leading-relaxed">
             My software engineering training strengthened my technical abilities, enabling me to turn insights into practical, user-centered solutions as well as prepare me for work in fast paced environment.
            </p>
            <br />
            <p className="text-lg sm:text-xl leading-relaxed">I have a strong foundation in both frontend and backend technologies namely: HTML, CSS, JavaScript, JSON, React, Tailwind CSS, Python, PostgreSQL, SQLAlchemy, Git, Flask and Figma.</p>
            </div>
            <div className="flex justify-center">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <FaHtml5 className="w-10 h-10"/>
                        <span className="text-base">HTML</span></div>
                    </li>
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <FaCss3Alt className="w-10 h-10"/>
                        <span className="text-base">CSS</span></div>
                    </li>
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <SiJavascript className="w-10 h-10"/>
                        <span className="text-base">JavaScript</span></div>
                    </li>
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <BiSolidFileJson className="w-10 h-10"/>
                        <span className="text-base">JSON</span></div>
                    </li>
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <FaReact className="w-10 h-10"/>
                        <span className="text-base">React</span></div>
                    </li>
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <RiTailwindCssFill className="w-10 h-10"/>
                        <span className="text-base">Tailwind CSS</span></div>
                    </li>
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <FaPython className="w-10 h-10"/>
                        <span className="text-base">Python</span></div>
                    </li>
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <SiPostgresql className="w-10 h-10"/>
                        <span className="text-base">PostgreSQL</span></div>
                    </li>
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <SiSqlalchemy className="w-10 h-10"/>
                        <span className="text-base">SQLAlchemy</span></div>
                    </li>
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <FaGitSquare className="w-10 h-10"/>
                        <span className="text-base">Git</span></div>
                    </li>
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <SiFlask className="w-10 h-10"/>
                        <span className="text-base">Flask</span></div>
                    </li>
                    <li>
                        <div className="w-[120px] h-[120px] bg-gray-200 border border-gray-200 dark:bg-white dark:border-gray-900 rounded-xl flex flex-col gap-4 justify-center items-center group">
                        <FaFigma className="w-10 h-10"/>
                        <span className="text-base">Figma</span></div>
                    </li>
                </ul>
            </div>
            </section>
        </section>
    );
};

export default About;
