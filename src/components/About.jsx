import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-br from-gray-800 to-black text-white">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-20 ">
                    I am Aryan Parihar, a 2nd year Undergrad student at IIT (B.H.U), Varanasi. I have learnt frontend technologies like HTML, CSS and JavaScript. Additionally I have also used frameworks like React.js and Tailwind CSS.
                </p>
                <br />
                <p className="text-xl">
                    My projects include a machine learning based web application, a Microsoft clone, and a road traffic identifcation system. I have also keen interest on learning blockchain and make some applications of Web3.0.
                </p>
            </div>

        </div>
    )
}

export default About
