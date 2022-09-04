import Cart, { Product } from '../main/cart';

test('Добавление элемента в корзину', () => {
    const cart = new Cart();
    const bergue = new Product(43, 'Henry Prospect', 'Bryan Bergue', 1300, 547);
    const spot = new Product(71, 'Slim', 'Andrew Spot', 800, 328);
    cart.add(bergue);
    cart.add(spot);

    expect(cart.getAll()).toEqual([{
        id: 43,
        name: 'Henry Prospect',
        author: 'Bryan Bergue',
        price: 1300,
        pages: 547,
    }, {
        id: 71,
        name: 'Slim',
        author: 'Andrew Spot',
        price: 800,
        pages: 328,
    }
    ]);
});

test('Получение суммы', () => {
    const cart = new Cart();
    const bergue = new Product(43, 'Henry Prospect', 'Bryan Bergue', 1300, 547);
    const spot = new Product(71, 'Slim', 'Andrew Spot', 800, 328);
    cart.add(bergue);
    cart.add(spot);

    expect(cart.getSum()).toEqual(2100);
});

test('Получение суммы с дисконтом', () => {
    const cart = new Cart();
    const bergue = new Product(43, 'Henry Prospect', 'Bryan Bergue', 1300, 547);
    const spot = new Product(71, 'Slim', 'Andrew Spot', 800, 328);
    cart.add(bergue);
    cart.add(spot);

    expect(cart.getSumDiscount(50)).toBe(1050);
});

test('Удаление элемента из корзины', () => {
    const cart = new Cart();
    const bergue = new Product(43, 'Henry Prospect', 'Bryan Bergue', 1300, 547);
    const spot = new Product(71, 'Slim', 'Andrew Spot', 800, 328);
    cart.add(bergue);
    cart.add(spot);
    cart.deleteItem(43);

    expect(cart.getAll()).toEqual([{
        id: 71,
        name: 'Slim',
        author: 'Andrew Spot',
        price: 800,
        pages: 328,
    }
    ]);
});
