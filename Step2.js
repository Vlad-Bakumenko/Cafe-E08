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

   
    addManager(obj){
        this.employee.push(obj);
        return `${obj.name} is now manager for ${this.name}`
    }
    addEmployee(){
        this.employee[0].branchWorkers.map(element => this.employee.push(element))
        let workersObj = this.employee.slice(1)
        let workers = workersObj.map(item => `${item.name} ${item.position}`)
        return `Manager: ${this.employee[0].name}, workers: ${workers.join(', ')}`

    }
    addMenu(menuObj){
        if (!this.sellsFood && menuObj.type === "food") {
            return `${this.name} doesn't sell food`
        } else {
            this.menu.push(menuObj)
            return `${menuObj.name} added`
        }
    }

removeMenu(menuObject) {
  
     this.menu.splice(this.menu.indexOf(menuObject),1)
     return `${menuObject.name} is removed.current menu available:${this.menu.map(item => item.name)}`
}


}

const cafe1 = new Cafe(1, "E08 Kreuzberg", "Berlin", false);
const cafe2 = new Cafe(2, "E08 Altona", "Altona", true);
const cafe3 = new Cafe(3, "E08 Mitte", "Mitte", true);




class Worker {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

const worker1 = new Worker("John", "Cashier");
const worker2 = new Worker("Giovanni", "Barista");
const worker3 = new Worker("Sandy", "Cashier");
const worker4 = new Worker("Bob", "Barista");
const worker5 = new Worker("Katy", "Cashier");
const worker6 = new Worker("Lily", "Barista");





class Manager extends Worker {
    constructor(name, branchId, branchWorkers = []) {
        super(name, "Manager")
        
        this.branchId = branchId;
        this.branchWorkers = branchWorkers;
    }


    addWorker(worker) {
        this.branchWorkers.push(worker);
        return `${worker.name} is added`

    }

    removeWorker(workerName) {
        this.branchWorkers = this.branchWorkers.filter(item => item.name !== workerName);
        return `${workerName} is removed. current workers: ${this.branchWorkers.map(worker => worker.name)}`

    }

}

const manager1 = new Manager("Zhana", 1)
const manager2 = new Manager("Vlad", 2)
const manager3 = new Manager("Joao", 3)



class Menu {
    constructor(type, name, price, isWarm) {
      this.type = type;
      this.name = name;
      this.price = price;
      this.isWarm = isWarm;
    }
}

const food1 = new Menu("food", "Club Sandwich", 8.0, true);

const drink1 = new Menu("drink", "Water", 1.5, false);

const food2 = new Menu("food", "Chocolate Cake", 2.5, true);

const drink2 = new Menu("drink", "Beer", 3.5, false);

const food3 = new Menu("food", "Sweet Hamburger", 11.5, true);

const drink3 = new Menu("drink", "Wine", 5.5, false);



console.log(manager1.addWorker(worker1)); 
console.log(manager1.addWorker(worker2));
console.log(manager2.addWorker(worker3)); 
console.log(manager2.addWorker(worker4));
console.log(manager3.addWorker(worker5)); 
console.log(manager3.addWorker(worker6));
console.log(manager1.removeWorker("John"));

console.log(cafe1.addManager(manager1));
console.log(cafe2.addManager(manager2));
console.log(cafe3.addManager(manager3));

console.log(cafe1.addEmployee());
console.log(cafe2.addEmployee());
console.log(cafe3.addEmployee());
console.log(cafe1.addMenu(food1)); 
console.log(cafe1.addMenu(drink1));
console.log(cafe2.addMenu(food2)); 
console.log(cafe2.addMenu(drink2));
console.log(cafe3.addMenu(food3)); 
console.log(cafe3.addMenu(drink3));

console.log(cafe1.removeMenu(drink1)); 
console.log(cafe2.removeMenu(drink2));

console.log(cafe1);


