class Drone {
    constructor(id, name) {
        //console.log(id + ' ' + name);
        this.id = id;
        this.name = name;
    }

    static getCompany() {
        console.log('in getCompany.');
    }

    get(){
        return this._id;
    }

    set(value) {
        this._id = value;
    }

    fly() {
        console.log('Drone ' + this.id + ' is flying!');
    }
}
Drone.maxHeight = 2000;

let drone = new Drone('A123','Flyer');
let drone2 = new Drone('B456','Twirl');
console.log("The Drone is a type of " + typeof Drone);
console.log(drone instanceof Drone);
console.log('drone: ' + drone['id'] + ' ' + drone['name']);
console.log('drone: ' + drone2.id + ' ' + drone2.name);
console.log('Drone.maxHeight = ' + Drone.maxHeight);
console.log('drone.maxHeight = ' + drone.maxHeight);

drone.fly();
drone2.fly();
Drone.getCompany();
console.log('drone ID = ' + drone.id);
drone.id = 'A938';
console.log('drone ID = ' + drone.id);
console.log('drone2 ID = ' + drone2.id);