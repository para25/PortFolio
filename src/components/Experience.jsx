/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import sparksfoundation from '../assets/sparks-foundation.jpg'; // Ensure you have the correct path to the image
import metacraftlab from '../assets/meta-craftlab.png'; // Ensure you have the correct path to the image
import Footer from './Footer';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'MetaCraftlab',
    duration: 'June 2024 - Present',
    logo: metacraftlab,
    url: 'https://www.linkedin.com/company/craftlabai/posts/?feedView=all',
    points: [
      'Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Designed and implemented RESTful APIs to support frontend functionality.',
      'Worked on improving application performance and scalability.',
      'Collaborated with designers to create intuitive and visually appealing user interfaces.',
      'Participated in daily stand-ups and sprint planning meetings to ensure timely delivery of features.',
      'Implemented authentication and authorization mechanisms to secure web applications.',
    ]
  },
  {
    role: 'Frontend Developer Intern',
    company: 'The Sparks Foundation',
    duration: 'July 2022 - August 2022',
    logo: sparksfoundation, 
    url: 'https://www.thesparksfoundationsingapore.org/',
    points: [
      'Developed user-friendly interfaces using HTML, CSS, and JavaScript.',
      'Implemented responsive design to ensure compatibility across various devices.',
      'Collaborated with the backend team to integrate RESTful APIs.',
      'Improved website performance and user experience by optimizing front-end code.',
      'Participated in code reviews and contributed to team knowledge sharing.',
    ]
  }
];

const Experience = () => {
  const [showFooter, setShowFooter] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFooter(true);
        } else {
          setShowFooter(false);
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div className='experience bg-black w-full text-white' id='experience'>
      <div className='pt-28 sm:px-16 pb-4 max-w-full'>
        <p className='font-light justify-center'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Work Experience.</h2>
      </div>
      <VerticalTimeline className='mt-9 max-w-full'>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff", maxWidth: "100%" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.duration}
            iconStyle={{ background: '#fff' }}
            icon={
              <a className='flex justify-center items-center w-full h-full' href={experience.url} target='_blank' rel='noopener noreferrer'>
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className='w-[60%] h-[60%] object-contain'
                />
              </a>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{experience.role}</h3>
              <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {experience.company}
              </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {experience.points.map((point, pointIndex) => (
                <li
                  key={`experience-point-${pointIndex}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <div ref={observerRef} className='h-20'></div> {/* Observer reference */}
      {showFooter && <Footer />} {/* Conditionally render the footer */}
    </div>
  )
}

export default Experience;
