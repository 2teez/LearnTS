export function toTitleCase(str) {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
        .join(" ");
}
export function countWords(str) {
    return str.replace(/\s+/g, " ").trim().split(" ").length;
}
