import { atom } from "recoil";

interface ActiveSection {
  name: string;
  color: string;
  accent?: string;
  time: number;
  intersectionRatio: number;
}

export const activeSectionAtom = atom<ActiveSection>({
  key: "activeSection",
  default: {
    name: "",
    color: "#D8DDC6",
    accent: "black",
    time: 0,
    intersectionRatio: 0,
  },
});
