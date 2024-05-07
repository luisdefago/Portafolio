// interface.tsx
export interface ProjectImgProps {
  [key: string]: string | undefined;
}

export interface ProjectProps {
  name: string;
  description: string;
  img: ProjectImgProps;
  skills: string[];
  init: string;
  end: string;
}
