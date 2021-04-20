import React from "react";
import { Category } from "../type";

export const NavItem: React.FC<{
  value: Category | "all";
  handleFilterCategory: Function;
  active: string
}> = ({ value, handleFilterCategory, active }) => {

  let className = "capitalize cursor-pointer hover:text-green";

  if (active === value) {
     className += " text-green"
  }

  return (
    <li
      className={className}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavBar: React.FC<{ handleFilterCategory: Function, active: string }> = (
  props
) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="postgres" {...props} />
      <NavItem value="nest" {...props} />
      <NavItem value="typescript" {...props} />
    </div>
  );
};

export default ProjectsNavBar;
