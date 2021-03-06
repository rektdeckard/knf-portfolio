import React from "react";

export type Size = [number, number];

export type Source = React.DetailedHTMLProps<
  React.SourceHTMLAttributes<HTMLSourceElement>,
  HTMLSourceElement
>;

export type Renderable<T> = { Module: React.FC<T> };

export interface Artwork extends Renderable<Artwork> {
  title: string;
  sources: Source[];
  media?: string;
  alt?: string;
  size?: Size;
  sold?: boolean;
}

export interface Series {
  name: string;
  color: string;
  accent?: string;
  works: (Artwork | Quotation | Spacer)[];
}

export interface Quotation extends Renderable<Quotation> {
  text: string;
}

export interface Spacer extends Renderable<Spacer> {
  height: number;
  width?: number;
}

export interface NewsEvents {
  year: number;
  events: NewsEvent[];
}

export interface NewsEvent {
  title: React.ReactNode;
  location?: React.ReactNode;
  url?: string;
}
