export interface Artwork {
  title: string;
  src: string;
  media?: string;
  alt?: string;
  size?: [number, number];
}

export interface Series {
  name: string;
  color: string;
  works: Artwork[];
}
