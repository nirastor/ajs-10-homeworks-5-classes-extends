import {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../character';

// *** Create ***

test('should convert name to string', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: '123',
    type: 'Bowman',
  };

  const received = new Bowman(123);

  expect(received).toEqual(expected);
});

test('should create Bowman', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bow',
    type: 'Bowman',
  };

  const received = new Bowman('Bow');

  expect(received).toEqual(expected);
});

test('should create Swordsman', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Sword',
    type: 'Swordsman',
  };

  const received = new Swordsman('Sword');

  expect(received).toEqual(expected);
});

test('should create Magician', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Mag',
    type: 'Magician',
  };

  const received = new Magician('Mag');

  expect(received).toEqual(expected);
});

test('should create Daemon', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Daem',
    type: 'Daemon',
  };

  const received = new Daemon('Daem');

  expect(received).toEqual(expected);
});

test('should create Undead', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Und',
    type: 'Undead',
  };

  const received = new Undead('Und');

  expect(received).toEqual(expected);
});

test('should create Zombie', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Zom',
    type: 'Zombie',
  };

  const received = new Zombie('Zom');

  expect(received).toEqual(expected);
});

test('Should throw error about 1 char name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const test = new Zombie('a');
  }).toThrow('Name length should be 2-10 characters');
});

test('Should not throw error about 2 char name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const test = new Zombie('aa');
  }).not.toThrow('Name length should be 2-10 characters');
});

test('Should not throw error about 5 char name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const test = new Zombie('abcde');
  }).not.toThrow('Name length should be 2-10 characters');
});

test('Should not throw error about 10 char name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const test = new Zombie('abcdeABCDE');
  }).not.toThrow('Name length should be 2-10 characters');
});

test('Should throw error about 11 char name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const test = new Zombie('abcdeABCDEf');
  }).toThrow('Name length should be 2-10 characters');
});

test('Should throw error about more than 11 char name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const test = new Zombie('abcdeABCDEabcdeabcde');
  }).toThrow('Name length should be 2-10 characters');
});

// *** Damage ***

test('Should decrease health', () => {
  const received = new Zombie('Name');
  received.damage(10);
  expect(received.health).toEqual(94);
});

// *** Level Up ***

test('Should throw error. Level up avaliable only for alive', () => {
  expect(() => {
    const received = new Zombie('Name');
    received.health = 0;
    received.levelUp();
  }).toThrow('level up avaliable only for alive');
});

test('Should increase level', () => {
  const received = new Zombie('Name');
  received.levelUp();
  expect(received.level).toEqual(2);
});

test('Should restore health', () => {
  const received = new Zombie('Name');
  received.health = 50;
  received.levelUp();
  expect(received.health).toEqual(100);
});

test('Should increase attack', () => {
  const received = new Zombie('Name');
  received.levelUp();
  expect(received.attack).toEqual(12);
});

test('Should increase defence', () => {
  const received = new Zombie('Name');
  received.levelUp();
  expect(received.defence).toEqual(48);
});
