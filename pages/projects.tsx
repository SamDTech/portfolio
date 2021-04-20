import React, {useState} from "react";
import { projects as projectsData } from "../data";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavBar from "../components/ProjectsNavBar";
import { Category } from "../type";

const Projects = () => {
    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState('all')

    const handleFilterCategory = (category: Category | 'all') => {
        if (category === 'all') {
            setProjects(projectsData)
            setActive('all')
            return;
        }

    const filteredProject =    projectsData.filter((projectData)=> projectData.category.includes(category))
        setProjects(filteredProject)
        setActive(category)
    }

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{height: '65vh'}}>
      <ProjectsNavBar handleFilterCategory={handleFilterCategory} active={ active}/>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects &&
          projects.map((project) => {
            return (
              <div
                key={project.name}
                className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
