import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import reactLogo from "../../assets/react.png";
import vueLogo from "../../assets/vue.png";
import htmlLogo from "../../assets/html5.png";
import cssLogo from "../../assets/css.png";
import jsLogo from "../../assets/javascript.png";
import mongoLogo from "../../assets/mongodb.png";
import postgresLogo from "../../assets/postgresql.png";
import gitLogo from "../../assets/git.png";
import nodeLogo from "../../assets/nodeJs.png";
import "../about/index.css"
function About() {
    const skills = [
        {
            name: "React",
            image: reactLogo,
            description: "I have experience in creating web applications using React.",
        },
        {
            name: "Vue",
            image: vueLogo,
            description: "I have experience in creating web applications using Vue.",
        },
        {
            name: "HTML",
            image: htmlLogo,
            description: "I have experience in creating web pages using HTML.",
        },
        {
            name: "CSS",
            image: cssLogo,
            description: "I have experience in creating styles for web pages using CSS.",
        },
        {
            name: "JavaScript",
            image: jsLogo,
            description: "I have experience in programming web applications using JavaScript.",
        },
        {
            name: "MongoDB",
            image: mongoLogo,
            description: "I have experience in creating and managing databases using MongoDB.",
        },
        {
            name: "PostgreSQL",
            image: postgresLogo,
            description: "I have experience in creating and managing databases using PostgreSQL.",
        },
        {
            name: "Git",
            image: gitLogo,
            description: "I have experience in using Git to manage source code.",
        },
        {
            name: "Node.Js",
            image: nodeLogo,
            description: "I have experience in using Node.Js.",
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex flex-col justify-center items-center mt-15">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">About Me</h1>
                <div className="flex items-center justify-center space-x-4 mt-4 mb-4">
                    <a href="https://www.instagram.com/bondanhertom/">
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-500 hover:text-pink-700 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/bondan-herutomo-bba025133/">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-500 hover:text-blue-700 cursor-pointer" />
                    </a>
                    <a href="https://github.com/bondanhertom">
                        <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                    </a>
                </div>
                <div className="max-w-2xl ">
                    <p className="text-lg text-gray-700 mb-4" style={{ textAlign: "justify" }}>
                        My name is Bondan Herutomo, I am 25 years old, and I am a Junior Web Developer. I am focused on developing web applications using the latest technologies. I have experience in creating web applications using React and have learned the basics of web programming languages such as HTML, CSS, and JavaScript.
                    </p>
                    <p className="text-lg text-gray-700 mb-4" style={{ textAlign: "justify" }}>
                        I also have skills in creating and managing databases, and experience working with Git to manage source code. I am always eager to learn new technologies and improve my skills in web development.
                    </p>
                    <p className="text-lg text-gray-700 mb-4" style={{ textAlign: "justify" }}>
                        In addition, I have skills in problem analysis and solving, as well as the ability to work in a team and communicate effectively. I am interested in working on challenging projects that can provide new experiences in web development.
                    </p>

                    <div class="container">
                        <div>
                            <h2 class="text-2xl font-bold text-gray-800 my-4 text-center">Education</h2>
                            <div class="mb-4">
                                <h3 class="text-lg font-bold text-gray-800 mb-2">Bachelor of Computer Science</h3>
                                <p class="text-gray-900">Universitas Pancasila</p>
                                <p class="text-gray-800 ">S1 in Informatics Engineering</p>
                                <p class="text-gray-800 ">2016 - 2021</p>
                                <ul class="list-disc list-inside">
                                    <li >Coursework: Data Structures and Algorithms, Object-Oriented Programming, Web Development</li>
                                    <li >Graduated with honors</li>
                                </ul>
                            </div>
                        </div>


                        <div>
                            <h2 class="text-2xl font-bold text-gray-800 my-4" style={{ textAlign: "center" }}>Experience</h2>
                            <div class="mb-4">
                                <h3 class="text-lg font-bold text-gray-800 mb-2">Staff Admin</h3>
                                <p class="text-gray-700">PT.CIMB Niaga Tbk. | Jakarta | 2017 - 2021</p>
                                <ul class="list-disc list-inside">
                                    <li>Handled administrative tasks such as data entry, file management, and report preparation</li>
                                    <li>Managed communication and coordination with internal and external parties</li>
                                    <li>Assisted in project planning and execution</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <div key={skill.name} className="bg-white p-4 rounded-md shadow-md">
                                <img src={skill.image} alt={skill.name} className="mx-auto mb-4 w-24 h-24" />
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{skill.name}</h3>
                                <p className="text-gray-700">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 my-4">Contact</h2>
                    <p className="text-lg text-gray-700">Email: bondanherutomo35@gmail.com</p>
                    <p className="text-lg text-gray-700 mb-5">Phone: +62 821-733373</p>
                </div>
            </div>
        </div>
    )
}
export default About;



