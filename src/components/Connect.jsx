import React from "react";

const ConnectWithMe = () => {
  return (
    <div className="text-center mt-10 text-black">
      <h2 className="text-3xl font-semibold mb-4 tracking-wide">
        CONNECT WITH ME
      </h2>
      <p className="text-lg mb-8 text-gray-700">
        Feel free to{" "}
        <span className="text-green-500 font-semibold">reach out</span> and
        let's collaborate!
      </p>
      <div className="flex justify-center space-x-6">
        {[
          {
            icon: <AiOutlineWhatsApp />,
            link: "https://wa.me/923206914610",
            color: "bg-green-500",
          },
          {
            icon: <AiFillGithub />,
            link: "https://github.com/alecodify",
            color: "bg-gray-800",
          },
          {
            icon: <AiOutlineTwitter />,
            link: "https://twitter.com/alecodify",
            color: "bg-blue-400",
          },
          {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/al0raza/",
            color: "bg-blue-600",
          },
          {
            icon: <AiFillInstagram />,
            link: "https://www.instagram.com/al0raza",
            color: "bg-pink-500",
          },
        ].map(({ icon, link, color }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`text-white p-3 rounded-full ${color} text-3xl transform transition-all duration-300 hover:scale-110 shadow-lg`}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConnectWithMe;
