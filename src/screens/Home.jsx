import React from 'react'
import { FiverrSection, Intro, Typing } from '../components';
import { motion } from 'framer-motion';
import homeLogo from '../assets/home.png';

const Home = () => {
  return (
    <section>
    <div className="home-section pt-16 md:pt-24 md:mx-32" id="home">
      <div className="home-content container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          <div className="home-header flex flex-col justify-center">
            <h1 className="heading pb-4 text-3xl md:text-4xl font-bold">
              Hi There!{" "}
              <span
                className="wave inline-block animate-wave"
                role="img"
                aria-labelledby="wave"
              >
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name text-4xl md:text-5xl font-semibold">
              I'M
              <strong className="main-name text-green-500"> Ali Raza</strong>
            </h1>

            <div className="pt-8 text-left text-4xl md:text-5xl font-semibold text-green-500">
              <Typing />
            </div>
          </div>

          <motion.div 
              className="flex justify-center items-center"
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid max-h-[450px] w-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
          </motion.div>
        </div>
      </div>
    </div>
 
    <div className='mt-10'>
      <Intro />
    </div>
  </section>
  )
}

export default Home