import { toTitleCase, countWords } from "./stringutils.js";
const words = ["war AND peace", "Catcher in the Rye", "tO kILL A mOCKINGBIRD"];
words.forEach((word) => console.log(toTitleCase(word)));
const word_to_count = [
    "War and Peace",
    "catcher-in-the-rye",
    "for_whom the-bell-tolls",
];
word_to_count.forEach((word) => console.log(`${word}: ${countWords(word)}`));
