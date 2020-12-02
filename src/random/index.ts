class LCUtils_Random {
    static randomBetween(
        min: number,
        max: number,
        options: {
            floorValue: boolean
        } = {
                floorValue: false
            }
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