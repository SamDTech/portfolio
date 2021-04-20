import React from "react";
import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations";

const resume = () => {
  return (
    <div className="px-6 py-2 ">
      {/* education && Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Engineering (Distinction)
            </h5>
            <p className="font-semibold ">Yaba College of Technology</p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
            <p className="font-semibold ">Ithorize Limited</p>
          </div>
        </motion.div>
      </div>
      {/* languages and tools */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages &&
              languages.map((lang) => (
                <div key={lang.name}>
                  <Bar lang={lang} />
                </div>
              ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools &&
              tools.map((tool) => (
                <div key={tool.name}>
                  <Bar lang={tool} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
