import React from 'react';
import Typewriter from 'typewriter-effect';

const Typing = () => {
  return (
    <Typewriter options={{strings: [
        "Web Developer", "Freelancer", "Mern Stack Developer", "App Developer"
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
    }} />
  )
}

export default Typing