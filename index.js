// console.log("Hello world");

// this
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  dump() {
    console.log(this);
  }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
console.log(book1);
book1.dump();

console.log("-------------------");
console.log("-------------------");
console.log("-------------------");

const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
console.log(book2);
book2.dump();

console.log("-------------------");
console.log("-------------------");
console.log("-------------------");

class Robot {
  constructor(name) {
    this.name = name;
    this.oldName = [];
    this.leftHand = "left hand";
    this.rightHand = "right hand";
  }

  raiseLeftHand() {
    console.log(`${this.name} raises ${this.leftHand}`);
  }

  raiseRightHand() {
    console.log(`${this.name} raises ${this.rightHand}`);
  }

  leftTouchesRightHand() {
    console.log(`${this.name} touches ${this.leftHand} to ${this.rightHand}`);
  }

  dump() {
    console.log("\nDumping robot state:\n");
    console.log(this);
    console.log("\nEnd of dump\n");
  }
  changeName(newName) {
    this.oldName.push(this.name);
    this.name = newName;
  }

  move() {
    console.log(`${this.name} moves forward`);
  }

  switchHands() {
    this.dump();

    const temp = this.leftHand;
    this.leftHand = this.rightHand;
    this.rightHand = temp;
    console.log(
      `${this.name} switches hands: left is now ${this.leftHand}, right is now ${this.rightHand}`,
    );

    this.dump();
  }
}

const robot1 = new Robot("Robo1");
robot1.raiseLeftHand();
robot1.raiseRightHand();
robot1.leftTouchesRightHand();
robot1.switchHands();
console.log("\n-------------------\n");
robot1.changeName("RoboXYZ");
robot1.switchHands();
console.log("\n-------------------\n");
robot1.changeName("Robo12234");
robot1.switchHands();

console.log("-------------------");
console.log("-------------------");
console.log("-------------------");
