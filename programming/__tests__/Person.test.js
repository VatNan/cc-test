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
    expect(person).toBeInstanceOf(Person);
  });

  it('when sent name not correct to Person must throw error', () => {
    const { friends } = defaultParamsPerson;
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
    expect(person.friends).toBeDefined();
    expect(Array.isArray(person.friends)).toBeTruthy();
    expect(person.friends).toHaveLength(0);
  });

  it('if friends elements is not instance of Person, then Person must throw error', () => {    
    expect(() => {
      new Person(defaultParamsPerson.name, ['penson1', 'penson2', 'penson3']);
    }).toThrowError('element of friends must be instance of Person');
  });

  it('when sent name and friends to Person, person instance must have name and friends is by parameter', () => {
    const { name, friends } = defaultParamsPerson;
    const person = new Person(name, friends);
    expect(person.name).toBe(name);
    expect(person.friends).toEqual(friends);
  });  

  it('Person instance can set name and friends', () => {
    const person = new Person(defaultParamsPerson.name, defaultParamsPerson.friends);
    // name
    expect(person.name).toBeDefined();
    expect(typeof person.name).toBe('string');
    // friends
    expect(person.friends).toBeDefined();
    expect(Array.isArray(person.friends)).toBeTruthy();
  });

  it('Person must have current max id and it\'s integer', () => {
    expect(Person.currentMaxID).toBeDefined();
    expect(Number.isInteger(Person.currentMaxID)).toBeTruthy();
  });

  it('current max id start at initialtMaxID and must increase when new instance n + 1', () => {
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
    expect(person.id).toBeDefined();
    expect(Number.isInteger(person.id)).toBeDefined();
  });

  it('id of Person must equal than current current max id when genarate', () => {
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
    expect(person1.id).not.toBe(person2.id);
    expect(person1.id).not.toBe(person3.id);
    expect(person2.id).not.toBe(person3.id);
  });
});
