import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { Data, Project, Skill } from "./type";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services: Data[] = [
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable spa using <b>HTML</b>, <b>CSS</b>, <b>React.js</b> and <b>Next.js</b>",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about:
      "Handle database, server, api using <b>Express</b>, <b>Nest</b> & other popular frameworks",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about: "I can develop robust REST API using <b>Node API</b>",
    Icon: AiOutlineApi,
  },
  {
    title: "Competitive Coder",
    about: "A daily problem solver in <b>HackerRank</b> & <b>Leet Code</b>",
    Icon: MdDeveloperMode,
  },
  {
    title: "Architecture Design",
    about:
      "Achitectural Design and deveopment to meet business need and scalable data using <b>Workbench</b>, <b>Heidi</b>",
    Icon: AiOutlineAntDesign,
  },
  {
    title: "Event-Driven Development",
    about:
      "I develop software and services using Event-base pattern with <b>Docker</b>, <b>Kubernetes</b>, <b>NATS streaming</b>, <b>RabbitMq</b> etc.",
    Icon: RiComputerLine,
  },
];

export const languages: Skill[] = [
  {
    name: "Python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "88%",
    Icon: BsCircleFill,
  },
  {
    name: "Nest.js",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "Django",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "90%",
    Icon: BsCircleFill,
  },
];

export const tools: Skill[] = [
  {
    name: "Work bench",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Docker",
    level: "88%",
    Icon: BsCircleFill,
  },
  {
    name: "Kubernetes",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Skaffold",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "Framer",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Heidi SQL",
    level: "90%",
    Icon: BsCircleFill,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "ticketing-app",
    description:
      "A ticketing and micro-services app with kubernetes, docker, skaffold, NATS, load balancers etc",
    image_path: "/images/ticketing.png",
    deployed_url: "#",
    github_url: "https://github.com/SamDTech/ticketing-app",
    category: ["mongo", "react", "node", "postgres"],
    key_techs: ["react", "typescript", "docker", "kubernetes", "load balancer"],
  },
  { id: 2,
    name: "Tweeter-clone",
    description:
      "A twitter clone with node.js. Including group messages, private message and Instant Notifications.",
    image_path: "/images/tweeter.png",
    deployed_url: "#",
    github_url: "https://github.com/SamDTech/Tweeter-clone",
    category: ["mongo", "node"],
    key_techs: ["express", "mongo", "pug"],
  },
  { id: 3,
    name: "BigShop",
    description:
      "A full ecommerce app with react and node.js. Full functionality include payment gateway, coupon, order printout, free delivery, rating system etc",
    image_path: "/images/shop.jpg",
    deployed_url: "#",
    github_url: "https://github.com/SamDTech/BigShop",
    category: ["mongo", "node", "react"],
    key_techs: ["react", "mongo", "express", "Ant Design UI", "bootstrap"],
  },

  {
    id:4,
    name: "micro-blog",
    description:
      "A blog microservices using node.js, react, docker and kubernetes",
    image_path: "/images/blog.png",
    deployed_url: "#",
    github_url: "https://github.com/SamDTech/micro-blog",
    category: ["mongo", "node", "react"],
    key_techs: ["react", "typescript", "docker", "kubernetes", "load balancer"],
  },

  {id: 5,
    name: "javascript-framework",
    description:
      "A Javascript framework that gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface. Thanks to backbone.js for the inspiration.",
    image_path: "/images/framework.jpg",
    deployed_url: "#",
    github_url: "https://github.com/SamDTech/javascript-framework",
    category: ["typescript"],
    key_techs: ["typescript"],
  },

  {id: 6,
    name: "csv_reader",
    description: "An app that read any csv file, parse and analyze it",
    image_path: "/images/csv.png",
    deployed_url: "#",
    github_url: "https://github.com/SamDTech/csv_reader",
    category: ["typescript"],
    key_techs: ["typescript"],
  },

  { id: 7,
    name: "netflix-clone",
    description: "A Netflix clone with react",
    image_path: "/images/Netflix.png",
    deployed_url: "#",
    github_url: "https://github.com/SamDTech/netflix-react",
    category: ["react"],
    key_techs: ["react"],
  },

  { id: 8,
    name: "streams",
    description: "A react-node streaming app",
    image_path: "/images/stream.jpeg",
    deployed_url: "#",
    github_url: "https://github.com/SamDTech/streams",
    category: ["react", "node"],
    key_techs: ["react"],
  },

  { id: 9,
    name: "react-youtube",
    description: "A youtube-clone with react",
    image_path: "/images/youtubeClone.png",
    deployed_url: "#",
    github_url: "https://github.com/SamDTech/react-youtube",
    category: ["react"],
    key_techs: ["react"],
  },
];
