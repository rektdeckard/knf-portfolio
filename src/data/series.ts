import { Series } from "./types";
import {
  CenterAlign,
  FullWidth,
  LeftAlign,
  Quote,
  RightAlign,
  Spacer,
} from "../components/Modules";

import breathing_room from "../assets/touchstone/breathing_room.jpg";
import pink_cairn from "../assets/touchstone/pink_cairn.jpg";
import sticks_and_stones_golden from "../assets/touchstone/sticks_and_stones_(golden).jpg";
import sticks_and_stones_pink from "../assets/touchstone/sticks_and_stones_(pink).jpg";
import blue_meander from "../assets/meanders/blue_meander.webp";
import grey_meander from "../assets/meanders/grey_meander.webp";
import golden_meander from "../assets/meanders/golden_meander.webp";
import walkabout from "../assets/meanders/walkabout.webp";
import forget_me_not from "../assets/poetics_of_space/forget_me_not.webp";
import let_everything_happen from "../assets/poetics_of_space/let_everything_happen.webp";
import scroll from "../assets/poetics_of_space/scroll.webp";
import instructions_not_included from "../assets/instructions_not_included/instructions_not_included.webp";
import open_book from "../assets/instructions_not_included/open_book.webp";
import unexpected_outcome from "../assets/instructions_not_included/unexpected_outcome.webp";
import unfolding_story from "../assets/instructions_not_included/unfolding_as_it_should.webp";

const featured: Series[] = [
  {
    name: "Touchstone",
    color: "#D8DDC6",
    accent: "#479990",
    works: [
      {
        title: "Breathing Room",
        sources: [{ srcSet: breathing_room }],
        media: "Acrylic on paper",
        alt: "",
        size: [30, 22],
        Module: LeftAlign,
      },
      { height: 96, Module: Spacer },
      {
        text:
          "A little blurb, a musing about this series. A poem that pairs, a quotation, something else.",
        Module: Quote,
      },
      { height: 96, Module: Spacer },
      {
        title: "Pink Cairn",
        sources: [{ srcSet: pink_cairn }],
        media: "Acrylic on paper",
        alt: "",
        size: [30, 22],
        Module: RightAlign,
      },
      {
        title: "Sticks and Stones (Golden)",
        sources: [{ srcSet: sticks_and_stones_golden }],
        media: "Acrylic on paper",
        alt: "",
        size: [30, 22],
        Module: CenterAlign,
      },
      { height: 160, Module: Spacer },
      {
        title: "Sticks and Stones (Pink)",
        sources: [{ srcSet: sticks_and_stones_pink }],
        media: "Acrylic on paper",
        alt: "",
        size: [30, 22],
        Module: RightAlign,
      },
    ],
  },
  {
    name: "Meanders",
    color: "#edc3af",
    accent: "#C15728",
    works: [
      {
        title: "Blue Meander",
        sources: [{ srcSet: blue_meander }],
        media: "Acrylic on canvas",
        alt: "",
        size: [40, 33],
        Module: LeftAlign,
      },
      { height: 96, Module: Spacer },
      {
        text:
          "A little blurb, a musing about this series. A poem that pairs, a quotation, something else.",
        Module: Quote,
      },
      {
        title: "Golden Meander",
        sources: [{ srcSet: golden_meander }],
        media: "Acrylic on canvas",
        alt: "",
        size: [33, 72],
        Module: FullWidth,
      },
      {
        title: "Grey Meander",
        sources: [{ srcSet: grey_meander }],
        media: "Acrylic on canvas",
        alt: "",
        size: [23, 25],
        Module: CenterAlign,
      },
      {
        title: "Walkabout",
        sources: [{ srcSet: walkabout }],
        media: "Acrylic on panel",
        alt: "",
        size: [30, 15],
        Module: RightAlign,
      },
    ],
  },
  {
    name: "Poetics of Space",
    color: "#d6cdb3",
    accent: "#58696F",
    works: [
      {
        title: "Forget Me Not",
        sources: [{ srcSet: forget_me_not }],
        media: "",
        alt: "Acrylic on panel",
        size: [36, 36],
        Module: LeftAlign,
      },
      {
        title: "Let Everything Happen",
        sources: [{ srcSet: let_everything_happen }],
        media: "",
        alt: "Acrylic on panel",
        size: [36, 36],
        Module: CenterAlign,
      },
      { height: 160, Module: Spacer },
      {
        title: "Scroll",
        sources: [{ srcSet: scroll }],
        media: "Acrylic on panel",
        alt: "",
        size: [36, 24],
        Module: RightAlign,
      },
      {
        text:
          "A little blurb, a musing about this series. A poem that pairs, a quotation, something else.",
        Module: Quote,
      },
    ],
  },
  {
    name: "Instructions Not Included",
    color: "#c9dbe0",
    accent: "#7294A4",
    works: [
      {
        title: "Instructions Not Included",
        sources: [{ srcSet: instructions_not_included }],
        media: "Acrylic on panel",
        alt: "",
        size: [24, 30],
        Module: LeftAlign,
      },
      {
        title: "Open Book",
        sources: [{ srcSet: open_book }],
        media: "Acrylic on panel",
        alt: "",
        size: [20, 30],
        Module: FullWidth,
      },
      { height: 96, Module: Spacer },
      {
        text:
          "A little blurb, a musing about this series. A poem that pairs, a quotation, something else.",
        Module: Quote,
      },
      {
        title: "Unexpected Outcome",
        sources: [{ srcSet: unexpected_outcome }],
        media: "Acrylic on panel",
        alt: "",
        size: [24, 36],
        Module: LeftAlign,
      },
      { height: 96, Module: Spacer },
      {
        title: "Unfolding Story",
        sources: [{ srcSet: unfolding_story }],
        media: "Acrylic on panel",
        alt: "",
        size: [30, 36],
        Module: RightAlign,
      },
    ],
  },
];

export default featured;
