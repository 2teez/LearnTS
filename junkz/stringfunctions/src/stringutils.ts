export function toTitleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join(" ");
}

export function countWords(str: string): number {
  return str.replace(/\s+/g, " ").trim().split(" ").length;
}
