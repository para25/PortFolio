import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='w-full sm:w-[250px] transition-all duration-300 hover:scale-105'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-lg'>
      <div className='rounded-[20px] py-5 px-6 min-h-[253px] flex justify-evenly items-center flex-col bg-gray-600'>
        <img src={service.icon} alt={service.title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center mt-4'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="bg-gray-950 text-white">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500'>
              Introduction
            </h2>
            <p className='text-lg leading-relaxed mb-8'>
              👨‍💻 Hi, I'm Prasad Jumare, a Software Developer passionate about crafting robust Backend systems and captivating Software Applications. 
              As a seasoned <span className='text-teal-400 hover:text-teal-300 transition-colors duration-300'>Software Developer</span>, I specialize in MERN stack🚀.
              <br /><br />
              Beyond coding, I enjoy taking walks in nature 🌟 and sitting silently, as well as spending quality time with my family. I believe these activities provide a balanced perspective and refresh my mind, allowing me to bring my best to my professional and personal life.
            </p>
            <ButtonLink
              url='https://drive.google.com/file/d/1uAIIboA1GixlVUePfSRQG2d_4ypu7Ii9/view?usp=sharing'
              text='View Resume →'
              padding='px-6 py-3'
              className='bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors duration-300'
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;