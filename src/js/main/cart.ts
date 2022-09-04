
import IBuyable from './buyable';

export class Product implements IBuyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly pages: number,
    ) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.pages = pages;
    };
}

export default class Cart {

    // constructor(
    //     readonly id: number,
    //     readonly name: string,
    //     readonly author: string,
    //     readonly price: number,
    //     readonly pages: number,
    // ) {
    //     this.id = id;
    //     this.name = name;
    //     this.author = author;
    //     this.price = price;
    //     this.pages = pages;
    // };

    private _items: IBuyable[] = [];

    add(item: IBuyable): void {
        this._items.push(item);
    }

    getAll(): IBuyable[] {
        return [...this._items];
    }

    getSum(): number {
        let sum = 0;
        this._items.map((elem) => sum += elem.price);
        return sum;
    }

    getSumDiscount(percent: number): number {
        let sum = 0;
        this._items.map((elem) => sum += elem.price * ((100 - percent)) / 100);
        return sum;
    }

    deleteItem(idElem: number): void {
        this._items.map((elem) => {
            if (elem.id === idElem) {
                this._items.splice(this._items.indexOf(elem), 1);
            }
        })
    }
}

]d