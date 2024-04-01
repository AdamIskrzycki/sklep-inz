const groupBy = (list, key) => {
    const groupedArray = [];
  
    list.forEach((item) => {
      const collection = groupedArray.find((elem) => elem[key] === item[key]);

      if (collection === undefined) {
        item.count = 1;
        groupedArray.push(item);
      } else {
        collection.count++
      }
    });
  
    return groupedArray;
  };
  
const calculateTotalPrice = (list) => {
    if(list.length == 0) {
       throw new Error("Koszyk jest pusty!")
    } else return list.reduce(
        (totalPrice, product) => (product.discountedPrice ? totalPrice + product.discountedPrice : totalPrice + product.price),
        0
    );
}

test('poprawne grupowanie produktów w koszyku', () => {

    const list = [
        {name: "mleko", price: 2, id: "1"},
        {name: "chleb", price: 3, id: "2"},
        {name: "mleko", price: 2, id: "1"}
    ];

    expect(groupBy(list, "id")).toEqual([
        {name: "mleko", price: 2, id: "1", count: 2},
        {name: "chleb", price: 3, id: "2", count: 1},
    ]);
});

test('zwracanie pustej tablicy, gdy koszyk jest pusty', () => {

    const list = [];

    expect(groupBy(list, "id")).toEqual([]);
});

test('poprawne zwracanie całkowitego kosztu zakupów w koszyku', () => {

    const list = [
        {name: "mleko", price: 2, id: "1"},
        {name: "chleb", price: 3, id: "2"},
        {name: "jogurt", price: 2, discountedPrice: 1, id: "3"}
    ];

    expect(calculateTotalPrice(list)).toEqual(6);
});

test('zwracanie błędu, gdy koszyk jest pusty', () => {

    const list = [];

    expect(() => calculateTotalPrice(list)).toThrow("Koszyk jest pusty!");
});