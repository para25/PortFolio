import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { AiFillPhone, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

  const togglePhoneTooltip = () => {
    setShowPhoneTooltip(!showPhoneTooltip);
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
      className='bg-slate-900 p-4 fixed bottom-0 left-0 right-0 z-10'
    >
      <div className='flex justify-between flex-wrap gap-4'>
        <p className='text-white text-center w-full sm:w-auto font-light'>© {year} Prasad. All rights reserved.</p>
        <div className='text-white flex justify-around sm:w-[250px] w-full'>
          <a
            href="mailto:prasadjumare30@gmail.com"
            className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
            style={{ cursor: 'pointer' }}
          >
            <FiMail className='text-xl' />
          </a>
          <a
            href='https://www.linkedin.com/in/prasad-jumare-99b79722b/'
            target='_blank'
            className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
            style={{ cursor: 'pointer' }}
            rel='noreferrer'
          >
            <AiFillLinkedin className='text-xl' />
          </a>
          <a
            href='https://github.com/para25'
            target='_blank'
            className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
            style={{ cursor: 'pointer' }}
            rel='noreferrer'
          >
            <FaGithub className='text-xl' />
          </a>
          <div
            className='relative transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
            onMouseEnter={togglePhoneTooltip}
            onMouseLeave={togglePhoneTooltip}
          >
            <AiFillPhone className='text-xl' />
            {showPhoneTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 0, y: 10 }}
                className='absolute right-0 bottom-10 bg-gray-900 text-white p-2 rounded-md shadow-lg'
              >
                <a href="tel:+919960409870" className='text-base font-medium'>
                  +91 9960409870
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
