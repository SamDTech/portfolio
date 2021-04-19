import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { Data, Skill } from "./type";
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