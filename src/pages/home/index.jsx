import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/bghome.png";

function Home() {
    const headerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
    };

    return (
        <div className="bg-gray-100">
            <header style={headerStyle} className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to my portfolio</h1>
                <p className="text-gray-900 mt-4">
                IT Enthusiasts | Let's learn something new today !
                </p>
                <Link to="/about" className="mt-8 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
                    Get in touch
                </Link>
            </header>
        </div>
    );
}

export default Home;
