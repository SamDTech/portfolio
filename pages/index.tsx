import React from "react";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I am currently pursuing my second degree in Mathematics after having a
        degree in Computer Engineering. I have 3+ years of experience in Web
        development and I have a blog where I teach Full Stack Web Development.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h5 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h5>
        <div className="grid gap-6 lg:grid-cols-2">
          {services &&
            services.map((service) => (
              <div key={service.title} className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'>
                <ServiceCard service={service} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default index;

// export const getStaticProps = async () => {
//   return {
//     props: { services },
//   };
// };
