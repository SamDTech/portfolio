import React, { useState } from "react";
import { projects as projectsData } from "../data";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavBar from "../components/ProjectsNavBar";
import { Category } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import Head from "next/head";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive("all");
      return;
    }

    const filteredProject = projectsData.filter((projectData) =>
      projectData.category.includes(category)
    );
    setProjects(filteredProject);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      exit="exit"
      initial="initial"
      animate="animate"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
    >
      <Head>
        <title>Web Developer | Projects | SamDTech</title>
      </Head>
      <ProjectsNavBar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects &&
          projects.map((project) => {
            return (
              <motion.div
                variants={fadeInUp}
                key={project.name}
                className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              >
                <ProjectCard
                  project={project}
                  showDetails={showDetails}
                  setShowDetails={setShowDetails}
                />
              </motion.div>
            );
          })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
