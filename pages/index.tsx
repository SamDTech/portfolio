import React from "react";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";

const index = () => {
  return (
    <div>
      <h5>
        {" "}
        I am currently pursuing my second degree in Mathematics after having a
        degree in Computer Engineering. I have 3+ years of experience in Web
        development and I have a blog where I teach Full Stack Web Development.{" "}
      </h5>
      <div>
        <h5>What I Offer</h5>
        <div>
          {services &&
            services.map((service) => (
              <div key={service.title}>
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
