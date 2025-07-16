
import React from 'react';
import '../../index.css';
import logo from '../../assets/Blog/zoro.png'
const HeroSection = () => {
    return (
        <div className="w-full h-[533px] bg-gradient-to-b from-blue-900 via-blue-500 to-orange-500 flex flex-col items-center justify-center p-4 text-center">
            <img 
            className="absolute top-20 w-40 md:w-50" 
            src={logo} 
            alt="Innovation Journey" 
            />
            <div className="max-w-5xl mt-5 mx-auto mb-8">
                
                <h1 className="text-white text-6xl font-sans font-bold leading-[60px] mb-4">Start Your Innovation Journey Today</h1>
                <p className="text-white/90 text-xl font-normal font-['Inter'] leading-7">Partner with Zoro Innovation to turn ideas into powerful digital solutions — designed for growth, speed, and long-term success.</p>
            </div>
            <div className="w-full max-w-2xl bg-white rounded-full flex items-center pr-2">
                <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    className="flex-grow py-3 px-6 text-gray-700 text-lg font-normal font-['Inter'] rounded-l-full focus:outline-none"
                />
                <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </div>
            
        </div>
    );
}

export default HeroSection;