export const splitter = <T>(array: Array<T>, callback: (v: T, i: number) => number): T[][] => {
    return array.reduce((r: T[][], v: T, i: number) => {
        const c = callback(v, i) || 0;
        (r[c] = r[c] || []).push(v);
        return r;
    }, []);
};

export const chunker = <T>(array: Array<T>, quantity: number) => splitter<T>(array, (_: T, index: number) => Math.floor(index / quantity));
