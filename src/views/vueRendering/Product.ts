export default class Product {
    public name: string;
    public price: number;
    public quantity: number;
    public inStock: boolean;

    constructor(
        name: string,
        price: number,
        quantity: number,
        inStock: boolean
    ) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.inStock = inStock;
    }
}