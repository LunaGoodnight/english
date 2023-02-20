import byjus from "../public/images/byjus.webp";
import EnglishClub from "../public/images/englishclub.webp";

export const tagList = {
  grammar: "grammar",
};
export const grammarList = [
  {
    title: "BYJU’S Learning",
    link: "https://byjus.com/english/english-grammar/",
    image: byjus,
  },
  {
    title: "EnglishClub",
    link: "https://www.englishclub.com/grammar/",
    image: EnglishClub,
    tags: [tagList.grammar],
  },
];
