export function toTitleCase(str) {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
        .join(" ");
}
export function countWords(str) {
    return str
        .replace(/[_\- ]/g, " ")
        .trim()
        .split(" ").length;
}
export function toWords(str) {
    return str.replace(/[_\- ]/g, " ").split(" ");
}
export const repeat = (str, times = 0) => {
    if (times <= 0)
        return "";
    return str + repeat(str, times - 1);
};
export const isAlpha = (str) => {
    return /^[a-zA-Z]+$/.test(str);
};
export const isBlank = (str) => {
    return /^\s*$/.test(str);
};
