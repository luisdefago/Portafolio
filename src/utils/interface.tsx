// interface.tsx
export interface ProjectImgProps {
  [key: string]: string;
}

export interface ProjectProps {
  name: string;
  description: string;
  img: ProjectImgProps;
  skills: string[];
  init: string;
  end: string;
}
