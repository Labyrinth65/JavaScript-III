/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(a) {
  this.createdAt = a.createdAt;
  this.name = a.name;
  this.dimensions = a.dimensions;
}

GameObject.prototype.destroy = function destroy() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(a) {
  this.healthPoints = a.healthPoints;
  GameObject.call(this, a);
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function takeDamage() {
  return `${this.name} took damage.`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(a) {
  CharacterStats.call(this, a);
  this.team = a.team;
  this.weapons = a.weapons;
  this.language = a.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function greet() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage);

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

function Hero(a) {
  Humanoid.call(this, a);
}

Hero.prototype = Object.create(Humanoid.prototype);

function Villain(a) {
  Humanoid.call(this, a);
}

Villain.prototype = Object.create(Humanoid.prototype);

Hero.prototype.holySpell = function holySpell(target) {
  target.healthPoints = target.healthPoints - 20;
  if (target.healthPoints <= 0) {
    return target.destroy(target);
  } else
    return `${target.takeDamage(target)} ${target.healthPoints} hp remaining.`;
};

Villain.prototype.fireBall = function fireBall(target) {
  target.healthPoints = target.healthPoints - 10;
  if (target.healthPoints <= 0) {
    return target.destroy(target);
  } else
    return `${target.takeDamage(target)} ${target.healthPoints} hp remaining.`;
};

const paladin = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 5,
    height: 5
  },
  healthPoints: 50,
  name: "Pally",
  team: "Team 1",
  weapons: ["Sword", "Shield"],
  language: "Hero"
});

const wizard = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 5,
    height: 5
  },
  healthPoints: 40,
  name: "Vivi",
  team: "Team 2",
  weapons: ["Staff", "Wand"],
  language: "Wizard"
});

console.log(paladin.holySpell(wizard));
console.log(wizard);
console.log(wizard.fireBall(paladin));
console.log(paladin);
console.log(paladin.holySpell(wizard));
