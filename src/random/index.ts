type LCUtils_Random_Options = {
    floorValue: boolean;
}

const defaultOptions: LCUtils_Random_Options = {
    floorValue: false,
}

class LCUtils_Random {
    /**
     * Returns a value between min and max
     * @param min minimum value
     * @param max maximum value
     * @param options optional parameters
     */
    static randomBetween(
        min: number,
        max: number,
        options: LCUtils_Random_Options = defaultOptions
    ): number {
        let output: number = min;

        function getBetween(min: number, max: number): number {
            return (Math.random() * (max - min)) + min;
        }

        output = options.floorValue ? Math.floor(getBetween(min, max)) : getBetween(min, max);

        return output;
    }
}

export default LCUtils_Random;
export type { LCUtils_Random_Options };