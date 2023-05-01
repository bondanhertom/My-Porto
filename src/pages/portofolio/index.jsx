import React from "react";
import B1 from "../../assets/uiloCustomer.png";
import B2 from "../../assets/uiloCms.png";
import B3 from "../../assets/apps.png";
import M1 from "../../assets/topchartmusic.png";
import P1 from "../../assets/jobetClient.png";
import P2 from "../../assets/jobetCms2.png";
const projects = [
    {
        title: "BRANDED THINGS",
        description: "A website showcasing a variety of high-quality branded fashion items for fashion enthusiasts.",
        image: B1,
        link: "https://pilihan-busana-terbaik-5151e.web.app",
    },
    {
        title: "TOP CHART MUSIC",
        description: "An app that lets users browse the latest music charts and view lyrics",
        image: M1,
        link: "https://musiclyrics-3531b.web.app/dashboard",
    },
    {
        title: "PORTAL JOB",
        description: "A job portal platform that connects job seekers with top employers in various industries.",
        image: P1,
        link: "https://jobbet-portal-job-terbaik.web.app/dashboard",
    },
    {
        title: "PORTAL JOB CMS",
        description: "A content management system (CMS) for job portals, designed to help recruiters manage job postings and applications efficiently.",
        image: P2,
        link: "https://jobbet-portal-job-terpercaya2.web.app/#",
    },
    {
        title: "BRANDED CMS",
        description: "A CMS designed specifically for branded fashion businesses, allowing them to easily manage and showcase their products on their website.",
        image: B2,
        link: "https://cms-uniqlho.web.app/",
    },
    {
        title: "BRANDED APPS",
        description: "Branded Apps is a mobile apps showcasing a wide variety of high-quality branded fashion items for fashion enthusiasts. ",
        image: B3,
        link: "https://pilihan-busana-terbaik-5151e.web.app",
    },
];

function Portfolio() {
    return (
        <div className="bg-gray-100 h-screen">

            <h1 className="text-center text-3xl font-bold text-gray-900 mb-20 mt-1">My Project</h1>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md mb-4">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover h-30 w-full rounded-t-lg"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
                            <p className="mt-4 text-gray-700" style={{ textAlign: "justify" }}>
                                {project.description}
                            </p>

                            <div className="mt-4 text-center">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );

}

export default Portfolio;
