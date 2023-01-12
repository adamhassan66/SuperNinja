


// Build Ninja Class with attributes name, health >>> add speed and strength properties with default v/////////////////
class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }


    //Build Ninja Methods////////////////////
    sayName() {
        console.log(`Name: ${this.name}`);
    }

    showStats() {
        console.log(`Ninja name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }

    drinkSake() {
        console.log(`${this.name} drank sake and recovered 50 hp!`)
        this.health += 10;
    }
}
// /////////////////////////////////////////////////////////////////

//Build Sensei Class that inherits Ninja Class properties//////////
class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength, wisdom)
        this.wisdom = wisdom;
    }

    //Building Sensei Methods///////////////
    speakWisdom() {
        super.drinkSake();
    }
}
// //////////////////////////////////////////////////////////////////

//sensei1 is new instance of sensei object with name Kakashi Hatake///////////
const sensei1 = new Sensei("Some Ninja");


// Testing ///////////////////
sensei1.speakWisdom();
sensei1.showStats();
console.log(sensei1);