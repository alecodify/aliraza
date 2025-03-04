import { FaArrowRight } from "react-icons/fa";

const FiverrSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 mt-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Work With Me on Fiverr
      </h2>
      <p className="text-gray-600 text-lg mb-6 text-center px-4">
        Let’s turn your vision into reality with top-notch solutions.
      </p>
      <a
        href="https://www.fiverr.com/imaliraza10"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full flex items-center space-x-2 shadow-lg transition-all duration-300"
      >
        <span>Visit My Fiverr Profile</span>
        <FaArrowRight />
      </a>
    </div>
  );
};

export default FiverrSection;