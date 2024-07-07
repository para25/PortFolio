/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
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

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.target);
    formData.append('access_key', '37dc50f5-156c-4734-a117-25f2786d8569');

    try {
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log('Success', res);
        toast.success('Form submitted successfully!');
        event.target.reset(); // Reset the form
      } else {
        console.error('Error submitting form:', res);
        toast.error('Error submitting form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='bg-black text-white overflow-x-hidden pt-28'>
      <div className='contact overflow-x-hidden px-6 sm:px-16 pb-24' id='contact'>
        <div className='max-w-3xl mx-auto p-8 bg-gray-900 rounded-2xl shadow-lg'>
          <p className='text-center text-xl font-light'>REACH OUT TO ME</p>
          <h2 className='text-5xl font-extrabold mt-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>
            Contact.
          </h2>
          <form onSubmit={onSubmit} className='mt-12 flex flex-col gap-6'>
            <label className='flex flex-col'>
              <span className='font-medium mb-2'>Your Name</span>
              <input
                type='text'
                name='name'
                placeholder='Enter your name'
                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='font-medium mb-2'>Your Email</span>
              <input
                type='email'
                name='email'
                placeholder='Ex: abc@gmail.com'
                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='font-medium mb-2'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                placeholder='Do you have anything to say?'
                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500'
                required
              />
            </label>
            <button
              type='submit'
              className='py-3 px-8 rounded-xl outline-none font-bold shadow-md bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white'
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          <ToastContainer
            position='top-center'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
      <div ref={observerRef} className='h-20'></div> {/* Observer reference */}
      {showFooter && <Footer />}
    </div>
  );
}

export default ContactForm;
