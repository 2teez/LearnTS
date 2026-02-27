import { toTitleCase, countWords, toWords, repeat } from "./stringutils.js";
const words = ["war AND peace", "Catcher in the Rye", "tO kILL A mOCKINGBIRD"];
words.forEach((word) => console.log(toTitleCase(word)));
const word_to_count = [
    "War and Peace",
    "catcher-in-the-rye",
    "for_whom the-bell-tolls",
];
word_to_count.forEach((word) => console.log(`${word}: ${countWords(word)}`));
word_to_count.forEach((word) => console.log(`${word} => [${toWords(word)}]`));
console.log(repeat("War", 3));
console.log(repeat("rye", 1));
console.log(repeat("bell", 0));
