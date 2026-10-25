export interface Experience {
    logo: string;
    role: string;
    company: string;
    period: string;
    summary: string;
    highlights: string[];
  }

  export interface ProjectImage {
    src: string;
    alt: string;
    width: number;
    height: number;
  }

  export interface Project {
    title: string;
    description: string;
    // Cropped 4:3 cover on the card
    image: string;
    imageAlt: string;
    // Shown in the project modal: the gallery uncropped, plus the longer text
    gallery: ProjectImage[];
    meta: string;
    body: string;
    role: string;
    link?: { label: string; href: string };
  }

  export interface Achievement {
    logo: string;
    achievement: string;
    organization: string;
    date: string;
  }
