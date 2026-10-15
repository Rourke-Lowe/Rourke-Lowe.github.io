export interface Experience {
    logo: string;
    role: string;
    company: string;
    period: string;
    summary: string;
    highlights: string[];
  }

  export interface Project {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    // Uncropped, larger version shown in the project modal
    detailImage: string;
    detailWidth: number;
    detailHeight: number;
  }

  export interface Achievement {
    logo: string;
    achievement: string;
    organization: string;
    date: string;
  }
