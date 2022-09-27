export default class Coordinate {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getPosition(): string {
        return `My position is x: ${this.x}, y: ${this.y}`
    }
}