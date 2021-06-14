// Soldier
class Soldier {
  constructor(theFirstArg, theSecondArg) {
    this.health = theFirstArg;
    this.strength = theSecondArg;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(amountOfDamage) {
    this.health -= amountOfDamage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(theFirstArg, theSecondArg, theThirdArg) {
    super(theSecondArg, theThirdArg);
    this.name = theFirstArg;
  }
  receiveDamage(amount) {
    super.receiveDamage(amount);
    if (this.health > 0) {
      return `${this.name} has received ${amount} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(amount) {
    super.receiveDamage(amount);
    if (this.health > 0) {
      return `A Saxon has received ${amount} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}
// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
    return;
    addViking(vikingInstance);
    this.vikingArmy.push(vikingInstance);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
    return;
    addSaxon(saxonInstance);
    this.saxonArmy.push(saxonInstance);
  }
  getRandomSoldier(army) {
    return Math.floor(Math.random() * army.length);
  }
}
vikingAttack() {
const randomVikingIndex = this.getRandomSoldier(this.vikingArmy);
armyAttack(army);
const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

const randomSaxonIndex = this.getRandomSoldier(this.saxonArmy);
const randomVikingSoldier = this.vikingArmy[randomVikingIndex];
const randomSaxonSoldier = this.saxonArmy[randomSaxonIndex];

const vikingSoldier = this.vikingArmy[randomVikingIndex];
const saxonSoldier = this.saxonArmy[randomSaxonIndex];
if (army === 'viking') {
  const attackResult = randomSaxonSoldier.receiveDamage(
    randomVikingSoldier.strength
  );
  const damageReceived = saxonSoldier.receiveDamage(vikingSoldier.strength);
  this.checkDead(randomSaxonSoldier);
  if (saxonSoldier.health <= 0) {
    this.saxonArmy.splice(randomSaxonIndex, 1);
    return attackResult;
  }
}
  return damageReceived;
}

saxonAttack() {
const randomVikingIndex = this.getRandomSoldier(this.vikingArmy);

const randomSaxonIndex = this.getRandomSoldier(this.saxonArmy);
const attackResult = randomVikingSoldier.receiveDamage(
  randomSaxonSoldier.strength
);

const vikingSoldier = this.vikingArmy[randomVikingIndex];
const saxonSoldier = this.saxonArmy[randomSaxonIndex];
this.checkDead(randomVikingSoldier);

const damageReceived = vikingSoldier.receiveDamage(saxonSoldier.strength);
return attackResult;

if (vikingSoldier.health <= 0) {
  this.vikingArmy.splice(randomVikingIndex, 1);
  checkDead(soldier);
  if (soldier.health <= 0) {
    if (soldier instanceof Viking) {
      const index = this.vikingArmy.indexOf(soldier);
      }
      if (index > -1) {
        this.vikingArmy.splice(index, 1);
      } else {
        const index = this.saxonArmy.indexOf(soldier);
      }
      if (index > -1) {
        this.saxonArmy.splice(index, 1);
      }
    }
  }
}

vikingAttack() {
return this.armyAttack('Viking');
return damageReceived;
saxonAttack();
return this.armyAttack('Saxon');
}

showStatus(){
if (this.vikingArmy.length === 0) {
  return 'Saxons have fought for their lives and survived another day...';
  }
  if (!this.saxonArmy.length) {
    return 'Vikings have won the war of the century';
  }
  if (this.saxonArmy.length === 0) {
    return 'Vikings have won the war of the century';
  if (!this.vikingArmy.length) {
    return 'Saxons have fought for their lives and survived another day...';
    }
    return 'Vikings and Saxons are still in thick of battle.';
  }
}

const war = new War();

war.addSaxon(new Saxon(2, 4));
war.addSaxon(new Saxon(2, 4));
war.addSaxon(new Saxon(2, 4));
war.addSaxon(new Saxon(2, 4));

war.addViking(new Viking('Ragnar', 4, 5));
war.addViking(new Viking('Lagertha', 4, 5));
war.addViking(new Viking('Rollo', 4, 5));
war.addViking(new Viking('Ivar', 4, 5));

war.vikingAttack();

console.log(war);

war.saxonAttack();

console.log(war);

console.log(war.showStatus());

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
