import { atom } from "recoil";

interface ActiveSection {
  name: string;
  color: string;
  time: number;
  intersectionRatio: number;
}

export const activeSectionAtom = atom<ActiveSection>({
  key: "activeSection",
  default: {
    name: "",
    color: "white",
    time: 0,
    intersectionRatio: 0,
  },
});
