import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
// import { motion } from "framer-motion";
// import Background from './Background';
import Footer from './Footer';


const Home = () => {
	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText((prevText) => prevText + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='hero flex flex-col justify-center items-center text-white' style={{ minHeight: 'calc(100vh - 60px)' }} id='hero'>
				<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl text-center'>
					<h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span></h1>
					<p className='mt-3 text-2xl'>Crafting Seamless And Efficient Software Systems To Drive Innovation And Elevate User Experiences.</p>
				</div>
			</div>
			<Footer className='footer absolute bottom-0 w-full'/>
		</div>
	);
}

export default Home;
