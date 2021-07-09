class TakeAway {

  constructor() {
    this.menu = {};
    this.basket = {};
    this.basket_counter = 0;
  };

  addDish(dish, price) {
    this.menu[dish] = price;
  };

  showMenu() {
    return this.menu;
  };

  select(dish) {
    this.basket[dish] = this.menu[dish];
  };

  showBasket() {
    return this.basket;
  };

  totalBasket() {
    return this._sumHash(this.basket)

  };

  _sumHash(hash) {
    let basket = Object.keys(hash);
    return basket.reduce((sum,key) => sum + hash[key], 0);
  };

  // let sum = arr.reduce((a,b) => a+b, 0);
  //       console.log(sum);
  //       return sum;

  // let sample = { a: 1 , b: 2 , c:3 };

  // console.log(`sum:${sum(sample)}`);

};

let takeaway = new TakeAway();
takeaway.addDish("chow mein", 5);
takeaway.addDish("fried rice", 3.50);
takeaway.addDish("prawn crackers", 1.99);
takeaway.showMenu();
