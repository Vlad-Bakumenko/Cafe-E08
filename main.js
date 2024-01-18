class Cafe {
    constructor(branchId, name, city, sellsFood, employee = [], menu = [], order = []){
        this.branchId = branchId;
        this.name = name;
        this.city = city;
        this.sellsFood = sellsFood;
        this.employee = employee;
        this.menu = menu;
        this.order = order;
    }
}

const cafe1 = new Cafe(1, "E08 Kreuzberg", "Berlin", false);
const cafe2 = new Cafe(2, "E08 Altona", "Altona", true);
const cafe3 = new Cafe(3, "E08 Mitte", "Mitte", true);
  console.log(cafe1);
  console.log(cafe2);
  console.log(cafe3);