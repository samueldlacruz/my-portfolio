export function joinWithSeparator(arr: string[], separator: string = ","): string {
    if (arr.length === 1) return arr[0];
    return arr.join(` ${separator} `);
}