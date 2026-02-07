export interface TimelineEvent {
  year: string; // Year in BE (e.g., 2536)
  title: string;
  description: string;
  image?: string;
  highlight?: boolean;
}

export interface Era {
  id: string;
  title: string;
  period: string;
  description: string;
  events: TimelineEvent[];
}

export interface ProjectDetail {
  name: string;
  style: string;
  units: string;
  opening: string;
  location: string;
  highlight: string;
}