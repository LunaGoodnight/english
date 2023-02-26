import byjus from "../public/images/byjus.webp";
import Kekenet from "../public/images/kekebaby.webp";
import TextRanch from "../public/images/textranch.webp";
import EnglishClub from "../public/images/englishclub.webp";
import Grammar from "../public/images/grammar.webp";

import { tagList } from "./grammarList";

export const siteList = [
  {
    title: "Grammar.com",
    link: "https://www.grammar.com/",
    image: Grammar,
    tags: [tagList.grammar],
  },
  {
    title: "BYJU’S Learning",
    link: "https://byjus.com/english/english-grammar/",
    image: "/images/byjus.webp",
    tags: [tagList.grammar],
  },
  {
    title: "EnglishClub",
    link: "https://www.englishclub.com/grammar/",
    image: EnglishClub,
    tags: [tagList.grammar],
  },
  {
    title: "可可英语",
    link: "http://kekenet.com/",
    image: Kekenet,
  },
  {
    title: "TextRanch",
    link: "https://textranch.com/",
    image: TextRanch,
    description:
      "Online editing with great prices, great service, great quality!",
  },
];
