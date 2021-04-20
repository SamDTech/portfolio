import React from "react";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";


const index = () => {
  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate' exit='exit' className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I am currently pursuing my second degree in Mathematics after having a
        degree in Computer Engineering. I have 3+ years of experience in Web
        development and I have a blog where I teach Full Stack Web Development.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h5 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h5>
        <motion.div variants={stagger} initial='initial' animate='animate' className="grid gap-6 lg:grid-cols-2">
          {services &&
            services.map((service) => (
              <motion.div variants={fadeInUp}  key={service.title} className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'>
                <ServiceCard service={service} />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

// export const getStaticProps = async () => {
//   return {
//     props: { services },
//   };
// };
