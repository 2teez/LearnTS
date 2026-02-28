export function toTitleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join(" ");
}

export function countWords(str: string): number {
  return str
    .replace(/[_\- ]/g, " ")
    .trim()
    .split(" ").length;
}

export function toWords(str: string): string[] {
  return str.replace(/[_\- ]/g, " ").split(" ");
}

export const repeat = (str: string, times: number = 0): string => {
  if (times <= 0) return "";
  return str + repeat(str, times - 1);
};

export const isAlpha = (str: string): boolean => {
  return /^[a-zA-Z]+$/.test(str);
};

export const isBlank = (str: string): boolean => {
  return /^\s*$/.test(str);
};
