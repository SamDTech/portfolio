import { IconType } from "react-icons/lib";

export interface Data {
  title: string;
  about: string;
  Icon: IconType;
}

export interface Skill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface Project {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | "react"
  | "node"
  | "express"
  | "nest"
  | "mongo"
  | "typescript"
  | "postgres";
