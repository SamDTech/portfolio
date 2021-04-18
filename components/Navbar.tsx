import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: React.FC<{
  activeItem: string;
  path: string;
  setActiveItem: Function;
  name: string;
}> = ({ activeItem, path, setActiveItem, name }) => {
  return activeItem !== name ? (
    <Link href={path}>
      <a>
        <span onClick={() => setActiveItem(name)} className='hover:text-green'>{name}</span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">{activeItem}</span>
      <div className="flex space-x-5 text-lg ">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          path="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          path="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          path="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
