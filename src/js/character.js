/* eslint-disable max-classes-per-file */
export class Character {
  constructor(name) {
    // name
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name length should be 2-10 characters');
    }
    this.name = name.toString();

    // health & level
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('level up avaliable only for alive');
    }

    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    /*
    А когда defence перевалит за 100
    У мага и зомби это произойдет всего-лишь на 7 уровне
    Удары начнут лечить :-)
    */
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name);
    this.type = 'Undead';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
    this.attack = 10;
    this.defence = 40;
  }
}
