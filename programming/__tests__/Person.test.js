import Person, { initialtCurrentID } from '../Person';

describe('Person class', () => {
  beforeEach(() => {
    Person.currentMaxID = initialtCurrentID;
  });

  it('Can create new instance from Person', () => {
    const person = new Person(); 
    expect(person).toBeInstanceOf(Person);
  });

  it('Person must have current max id and it\'s integer', () => {
    expect(Person.currentMaxID).toBeDefined();
    expect(Number.isInteger(Person.currentMaxID)).toBeTruthy();
  });

  it('current max id start at initialtMaxID and must increase when new instance n + 1', () => {
    expect(Person.currentMaxID).toBe(initialtCurrentID);

    // person 1
    new Person();
    expect(Person.currentMaxID).toBe(initialtCurrentID + 1);

    // person 2
    new Person();
    expect(Person.currentMaxID).toBe(initialtCurrentID + 2);
  });

  it('Person instance must have id, id must be integer', () => {
    const person = new Person();
    expect(person.id).toBeDefined();
    expect(Number.isInteger(person.id)).toBeDefined();
  });

  it('id of Person must equal than current current max id when genarate', () => {
    // person 1
    const person1 = new Person();
    expect(person1.id).toBe(Person.currentMaxID);
    
    // person 2
    const person2 = new Person();
    expect(person2.id).toBe(Person.currentMaxID);

    // person 3
    const person3 = new Person();
    expect(person3.id).toBe(Person.currentMaxID);
  });
});
