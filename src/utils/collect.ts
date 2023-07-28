export function collect<T>(content: T, size: number): T[] {
    const retArr: T[] = [];

    for (let i = 0; i < size; i++) {
        retArr.push(content);
    }
    return retArr;
}
