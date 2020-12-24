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

interface Artwork {
  title: string;
  src: string;
  media?: string;
  alt?: string;
  size?: [number, number];
}

interface Series {
  name: string;
  works: Artwork[];
}

const BodyOfWork: Series[] = [
  {
    name: "Meanders",
    works: [
      {
        title: "Blue Meander",
        src: blue_meander,
        media: "Acrylic on canvas",
        alt: "", 
        size: [40, 33],
      },
      {
        title: "Golden Meander",
        src: golden_meander,
        media: "Acrylic on canvas",
        alt: "",
        size: [33, 72],
      },
      {
        title: "Grey Meander",
        src: grey_meander,
        media: "Acrylic on canvas",
        alt: "",
        size: [23, 25],
      },
      {
        title: "Walkabout",
        src: walkabout,
        media: "Acrylic on panel",
        alt: "",
        size: [30, 15],
      },
    ],
  },
  {
    name: "Poetics of Space",
    works: [
      {
        title: "Forget Me Not",
        src: forget_me_not,
        media: "",
        alt: "Acrylic on panel",
        size: [36, 36],
      },
      {
        title: "Let Everything Happen",
        src: let_everything_happen,
        media: "",
        alt: "Acrylic on panel",
        size: [36, 36],
      },
      {
        title: "Scroll",
        src: "",
        media: scroll,
        alt: "Acrylic on panel",
        size: [36, 24],
      },
    ],
  },
  {
    name: "Instructions Not Included",
    works: [
      {
        title: "Instructions Not Included",
        src: instructions_not_included,
        media: "",
        alt: "Acrylic on panel",
        size: [24, 30],
      },
      {
        title: "Open Book",
        src: open_book,
        media: "",
        alt: "Acrylic on panel",
        size: [20, 30],
      },
      {
        title: "Unexpected Outcome",
        src: unexpected_outcome,
        media: "",
        alt: "Acrylic on panel",
        size: [24, 36],
      },
      {
        title: "Unfolding Story",
        src: unfolding_story,
        media: "",
        alt: "Acrylic on panel",
        size: [30, 36],
      },
    ],
  },
];

export default BodyOfWork;
