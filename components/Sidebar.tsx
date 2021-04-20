import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillChrome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";


const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div>
      <Image
        src="https://avatars.githubusercontent.com/u/51648328?v=4"
        alt="image avatar"
        className="mx-auto rounded-full "
        height='128px'
        width='128px'
        layout='intrinsic'
        quality='100'
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Opeyemi </span>
        <span>Samuel</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Software Engineer
      </p>

      <a
        className="flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 item-center"
        download="name"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* TOD0 social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillChrome className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* TOD0 Address */}

      <div
        className="py-5 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-6 h-6" />
          <span>Lagos, Nigeria</span>
        </div>
        <p className="my-2">Opeyemisamuel222@gmail.com</p>
        <p className="my-2">+234(0) 8121610146</p>
      </div>

      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r focus:outline-none from-green to-blue-400"
        onClick={() => window.open("mailto:opeyemisamuel222@gmail.com")}
      >
        Email me
      </button>

      {/* Toggle Ui Button */}
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-green to-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
