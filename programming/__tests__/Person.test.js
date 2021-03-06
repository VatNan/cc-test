import Person, { initialCurrentID } from '../Person';

const defaultParamsPerson = {
  name: 'Person Test',
  friends: [],
};

describe('Person class', () => {
  beforeEach(() => {
    Person.currentMaxID = initialCurrentID;
  });

  it('Can create new instance from Person', () => {
    const person = new Person(defaultParamsPerson.name, defaultParamsPerson.friends); 
    // expect actual
    expect(person).toBeInstanceOf(Person);
  });

  it('when sent name not correct to Person must throw error', () => {
    const { friends } = defaultParamsPerson;
    // expect actual
    // name is undefined
    expect(() => {
      new Person(undefined, friends);
    }).toThrowError('name not correct format');
    // name is ''
    expect(() => {
      new Person('', friends);
    }).toThrowError('name not correct format');
    // name is number
    expect(() => {
      new Person(63, friends);
    }).toThrowError('name not correct format');
    // name is space
    expect(() => {
      new Person('            ', friends)
    }).toThrowError('name not correct format');
  });

  it('when not sent friends to Person, person instance must have friends = []', () => {
    const person = new Person(defaultParamsPerson.name);
    // expect actual
    expect(person.friends).toBeDefined();
    expect(Array.isArray(person.friends)).toBeTruthy();
    expect(person.friends).toHaveLength(0);
  });

  it('when sent friends not array to Person must throw error', () => {
    const person = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    // expect actual
    // friends is number
    expect(() => {
      new Person(defaultParamsPerson.name, 5);
    }).toThrowError('friends must be array');
    // friends is object
    expect(() => {
      new Person(defaultParamsPerson.name, {});
    }).toThrowError('friends must be array');
    // friends is string
    expect(() => {
      new Person(defaultParamsPerson.name, 'person1');
    }).toThrowError('friends must be array');
    // friends is instance of Person
    expect(() => {
      new Person(defaultParamsPerson.name, person);
    }).toThrowError('friends must be array');
    // friends is null
    expect(() => {
      new Person(defaultParamsPerson.name, null);
    }).toThrowError('friends must be array');
  });

  it('if friends elements is not instance of Person, then Person must throw error', () => {    
    const person1 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    const person2 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);

    // expect actual
    // all friends element is string
    expect(() => {
      new Person(defaultParamsPerson.name, ['penson1', 'penson2', 'penson3']);
    }).toThrowError('element of friends must be instance of Person');
    // some friends element is string
    expect(() => {
      new Person(defaultParamsPerson.name, [person1, person2, 'penson3']);
    }).toThrowError('element of friends must be instance of Person');
    // some friends element is null
    expect(() => {
      new Person(defaultParamsPerson.name, [person1, person2, null]);
    }).toThrowError('element of friends must be instance of Person');
  });

  it('when sent name and friends to Person, person instance must have name and friends is by parameter', () => {
    const { name, friends } = defaultParamsPerson;
    // default param
    const person1 = new Person(name, friends); 
    // expect actual
    expect(person1.name).toBe(name);
    expect(person1.friends).toEqual(friends);
    // custom param
    const customParamPerson = {
      name: 'Custom name naja',
      friends: [
        new Person(name, friends),
        new Person(name, friends),
      ],
    };
    const person4 = new Person(customParamPerson.name, customParamPerson.friends);
    // expect actual
    expect(person4.name).toBe(customParamPerson.name);
    expect(person4.friends).toEqual(customParamPerson.friends);
  });  

  it('Person instance can set name and friends', () => {
    const person = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    // expect actual
    // name
    expect(person.name).toBeDefined();
    expect(typeof person.name).toBe('string');
    // friends
    expect(person.friends).toBeDefined();
    expect(Array.isArray(person.friends)).toBeTruthy();
  });

  it('Person must have current max id and it\'s integer', () => {
    // expect actual
    expect(Person.currentMaxID).toBeDefined();
    expect(Number.isInteger(Person.currentMaxID)).toBeTruthy();
  });

  it('current max id start at initialtMaxID and must increase when new instance n + 1', () => {
    // expect actual
    expect(Person.currentMaxID).toBe(initialCurrentID);
    // person 1
    new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    expect(Person.currentMaxID).toBe(initialCurrentID + 1);
    // person 2
    new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    expect(Person.currentMaxID).toBe(initialCurrentID + 2);
  });

  it('Person instance must have id, id must be integer', () => {
    const person = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    // expect actual
    expect(person.id).toBeDefined();
    expect(Number.isInteger(person.id)).toBeDefined();
  });

  it('id of Person must equal than current current max id when genarate', () => {
    // expect actual
    // person 1
    const person1 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    expect(person1.id).toBe(Person.currentMaxID);
    // person 2
    const person2 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    expect(person2.id).toBe(Person.currentMaxID);
    // person 3
    const person3 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    expect(person3.id).toBe(Person.currentMaxID);
  });

  it('id each of Person instance must unique', () => {
    const person1 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    const person2 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    const person3 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    // expect actual
    expect(person1.id).not.toBe(person2.id);
    expect(person1.id).not.toBe(person3.id);
    expect(person2.id).not.toBe(person3.id);
  });

  it('Person instance must can get friends by getFriends method', () => {
    const p1 = { name: 'Person1', friends: [] };
    const person1 = new Person(p1.name, p1.friends);
    const p2 = { name: 'Person2', friends: [person1] };
    const person2 = new Person(p2.name, p2.friends);
    // expect actual
    expect(person2.getFriends()).toEqual([p1.name]);
  });

  it('getFriends method can get all member when pass parameter options "allField" is true', () => {
    const p1 = { name: 'Person1', friends: [] };
    const person1 = new Person(p1.name, p1.friends);
    const p2 = { name: 'Person2', friends: [person1] };
    const person2 = new Person(p2.name, p2.friends);
    // expect actual
    expect(person2.getFriends({ allField: true }))
      .toEqual([
        { id: person1.id, name: person1.name, friends: person1.friends },
      ]);
  });

  it('call addFriends in person instance must add new friends', () => {
    const person1 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    const person2 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    const newFriends = [person2];
    person1.addFriends(newFriends);
    // expect actual
    expect(person1.friends).toEqual([...defaultParamsPerson.friends, ...newFriends]);
  });

  it('call addFriends in person instance must add me to my friend', () => {
    const person1 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    const person2 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    const newFriends = [person2];
    const me = [person1];
    person1.addFriends(newFriends);
    // expect actual
    expect(person2.friends).toEqual([...defaultParamsPerson.friends, ...me]);
  });

  it('call addFriends in person instance but send addFriends() not correct must throw error', () => {
    const person1 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    const person2 = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    // expect actual
    // not send newFriends
    expect(() => {
      person1.addFriends();
    }).toThrowError('addFriends must send 1 argument is array and must not empty array');
    // send newFriends is number
    expect(() => {
      person1.addFriends(1);
    }).toThrowError('addFriends must send 1 argument is array and must not empty array');
    // send newFriends is string
    expect(() => {
      person1.addFriends('Noname');
    }).toThrowError('addFriends must send 1 argument is array and must not empty array');
    // send newFriends is string
    expect(() => {
      person1.addFriends([]);
    }).toThrowError('addFriends must send 1 argument is array and must not empty array');
    
    // send all element of newFriends is string 
    expect(() => {
      person1.addFriends(['Noname1', 'Noname2']);
    }).toThrowError('addFriends must send argument is array and each element is instance of Person');
    // send some element of newFriends is string 
    expect(() => {
      person1.addFriends([person2, 'Noname1']);
    }).toThrowError('addFriends must send argument is array and each element is instance of Person');
    // send some element of newFriends is null 
    expect(() => {
      person1.addFriends([person2, null]);
    }).toThrowError('addFriends must send argument is array and each element is instance of Person');
  });

  // Result of test
  it('call getFriendsOfFriends method in Person instance must return friends of friends', () => {
    const personA = new Person('A', []);
    const personB = new Person('B', []);
    const personC = new Person('C', []);
    const personD = new Person('D', []);
    const personF = new Person('F', []);
    // add friends
    personA.addFriends([personB, personD]);
    personB.addFriends([personC, personD]);
    // expect actual
    expect(personA.getFriendsOfFriends()).toEqual([personC.name]);
  });

  it('getFriendsOfFriends method can get all member when pass parameter options "allField" is true', () => {
    const personA = new Person('A', []);
    const personB = new Person('B', []);
    const personC = new Person('C', []);
    const personD = new Person('D', []);
    // add friends
    personA.addFriends([personB, personD]);
    personB.addFriends([personC, personD]);
    // expect actual
    expect(personA.getFriendsOfFriends({ allField: true })).toEqual([
      { id: personC.id, name: personC.name, friends: personC.friends },
    ]);
  });
});
