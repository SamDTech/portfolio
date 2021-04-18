import React from "react";
import { Data } from "../type";

const ServiceCard: React.FC<{
  service: Data;
}> = ({ service: { title, about, Icon } }) => {
  return (
    <div>
          <Icon />
          <div>
              <h4>{title}</h4>
              <p>{about}</p>
          </div>
    </div>
  );
};

export default ServiceCard;
