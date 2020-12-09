class LCUtils_Math {
    static clamp(value: number, min: number, max: number): number {
        return Math.min(Math.max(value, min), max);
    }
}

export default LCUtils_Math;