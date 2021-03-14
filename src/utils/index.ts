import { Size, Artwork, Quotation, Spacer } from "../data/";

export const formatSize = (size: Size) => `${size[0]}" x ${size[1]}"`;

export const isArtwork = (candidate: any): candidate is Artwork => {
  return "sources" in candidate;
};

export const isQuotation = (candidate: any): candidate is Quotation => {
  return "text" in candidate;
};

export const isSpacer = (candidate: any): candidate is Spacer => {
  return "height" in candidate;
};

export const slugify = (path: string) =>
  path.split(" ").join("-").toLowerCase();
