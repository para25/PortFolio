/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import chatAppImage from '../assets/chat-app.png';
import campgroundImage from '../assets/campground.png';
import iphoneImage from '../assets/iphone3d.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-xs sm:max-w-sm md:max-w-sm bg-gradient-to-br from-gray-800 to-gray-900 border border-neutral-100 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <div className="relative h-36 sm:h-44 md:h-52 overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover" src={image} alt={title} style={{ maxHeight: '100%', width: '100%' }} />
            </div>
            <div className="p-3 sm:p-4 md:p-5">
                <a href="#" className="block mb-2">
                    <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-3 md:m-4 flex justify-between'>
                <div className='flex flex-wrap gap-1 pl-1'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-xs sm:text-sm text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black overflow-x-hidden">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12 w-full">
                {projects.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export const projects = [
    {
        title: 'Chat Application',
        description: 'Developed a real-time chat application using the MERN (MongoDB, Express.js, React.js, Node.js) stack, enabling users to communicate seamlessly across multiple devices. Used Socket.io for real-time chat and to reduce latency.',
        image: chatAppImage,
        git: 'https://github.com/para25/CHAT-APPLICATION',
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io']
    },
    {
        title: 'Campground Website',
        description: 'Developed a campground blogging website using HTML, CSS, Bootstrap, JavaScript, Node.js, and MongoDB. This dynamic platform enables users to explore and share their campground experiences, fostering community building.',
        image: campgroundImage,
        git: 'https://github.com/para25/campground',
        technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'MongoDB']
    },
    {
        title: "iPhone 15 Pro Website Clone",
        description: "This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
        image: iphoneImage,
        git: 'https://github.com/para25/Iphone3dWebsite',
        technologies: ['React.js', 'TailwindCSS', 'GSAP', 'Three.js']
    }
];

export default Projects;
