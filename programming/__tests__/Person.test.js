import Person, { initialCurrentID } from '../Person';

const paramsPerson = {
  name: 'Person Test',
  fiendes: [],
};

describe('Person class', () => {
  beforeEach(() => {
    Person.currentMaxID = initialCurrentID;
  });

  it('Can create new instance from Person', () => {
    const person = new Person(paramsPerson.name, paramsPerson.fiendes); 
    expect(person).toBeInstanceOf(Person);
  });

  it('when sent name not correct to Person must throw error', () => {
    const { fiendes } = paramsPerson;
    // name is undefined
    expect(() => {
      new Person(undefined, fiendes);
    }).toThrowError('name not correct format');
    // name is ''
    expect(() => {
      new Person('', fiendes);
    }).toThrowError('name not correct format');
    // name is number
    expect(() => {
      new Person(63, fiendes);
    }).toThrowError('name not correct format');
    // name is number
    expect(() => {
      new Person('            ', fiendes)
    }).toThrowError('name not correct format');
  });

  it('when not sent fiendes to Person, person instance must have fiendes = []', () => {
    const person = new Person(paramsPerson.name);
    expect(person.fiendes).toBeDefined();
    expect(Array.isArray(person.fiendes)).toBeTruthy();
    expect(person.fiendes).toHaveLength(0);
  });

  it('when sent name and fiendes to Person, person instance must have name and fiendes is by parameter', () => {
    const { name, fiendes } = paramsPerson;
    const person = new Person(name, fiendes);
    expect(person.name).toBe(name);
    expect(person.fiendes).toEqual(fiendes);
  });  

  it('Person instance can set name and fiendes', () => {
    const person = new Person(paramsPerson.name, paramsPerson.fiendes);
    // name
    expect(person.name).toBeDefined();
    expect(typeof person.name).toBe('string');
    // fiendes
    expect(person.fiendes).toBeDefined();
    expect(Array.isArray(person.fiendes)).toBeTruthy();
  });

  it('Person must have current max id and it\'s integer', () => {
    expect(Person.currentMaxID).toBeDefined();
    expect(Number.isInteger(Person.currentMaxID)).toBeTruthy();
  });

  it('current max id start at initialtMaxID and must increase when new instance n + 1', () => {
    expect(Person.currentMaxID).toBe(initialCurrentID);
    // person 1
    new Person(paramsPerson.name, paramsPerson.fiendes);
    expect(Person.currentMaxID).toBe(initialCurrentID + 1);
    // person 2
    new Person(paramsPerson.name, paramsPerson.fiendes);
    expect(Person.currentMaxID).toBe(initialCurrentID + 2);
  });

  it('Person instance must have id, id must be integer', () => {
    const person = new Person(paramsPerson.name, paramsPerson.fiendes);
    expect(person.id).toBeDefined();
    expect(Number.isInteger(person.id)).toBeDefined();
  });

  it('id of Person must equal than current current max id when genarate', () => {
    // person 1
    const person1 = new Person(paramsPerson.name, paramsPerson.fiendes);
    expect(person1.id).toBe(Person.currentMaxID);
    // person 2
    const person2 = new Person(paramsPerson.name, paramsPerson.fiendes);
    expect(person2.id).toBe(Person.currentMaxID);
    // person 3
    const person3 = new Person(paramsPerson.name, paramsPerson.fiendes);
    expect(person3.id).toBe(Person.currentMaxID);
  });

  it('id each of Person instance must unique', () => {
    const person1 = new Person(paramsPerson.name, paramsPerson.fiendes);
    const person2 = new Person(paramsPerson.name, paramsPerson.fiendes);
    const person3 = new Person(paramsPerson.name, paramsPerson.fiendes);
    expect(person1.id).not.toBe(person2.id);
    expect(person1.id).not.toBe(person3.id);
    expect(person2.id).not.toBe(person3.id);
  });
});
