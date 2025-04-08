import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Profile2 from "../../assets/Profile2.jpeg";

const Home = () => {
    return (
        <section id="home" className="font-serif flex flex-col lg:flex-row items-center pt-5 pb-5 justify-center px-6 lg:px-20 gap-8">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-black dark:text-white max-w-lg">
                <h1 className="text-4xl sm:text-5xl font-semibold mb-4 leading-tight">{`<Esther`} <br /> {`Ngeno/>`}</h1>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Full Stack Developer.</h2>
                <p className="text-lg sm:text-xl leading-relaxed">
                    Hi, I'm Esther Ngeno, a Full Stack Developer from Nairobi, Kenya with a knack for crafting robust and efficient web solutions. Beyond coding, I enjoy exploring innovative tech and business trends.
                </p>
                <div className="flex mt-6 space-x-4">
                    <a href="https://github.com/EstherNgeno" className="text-black dark:text-white p-2">
                        <AiFillGithub className="w-10 h-10" />
                    </a>
                    <a href="https://www.linkedin.com/in/esther-ngeno-7a8a1a145/" className="text-black dark:text-white p-2">
                        <AiFillLinkedin className="w-10 h-10" />
                    </a>
                    <a href="https://www.youtube.com/@estherngeno2216" className="text-black dark:text-white p-2">
                        <AiFillYoutube className="w-10 h-10" />
                    </a>
                </div>
            </div>

            <div className="flex justify-center">
                <img 
                    src={Profile2} 
                    alt="Profile" 
                    className="w-64 sm:w-80 rounded-full border-2 p-1 border-fuchsia-500"
                />
            </div>
        </section>
    );
};

export default Home;
