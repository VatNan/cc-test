import Person from '../Person';

describe('Person class', () => {
  it('Can create new instance from Person', () => {
    const person = new Person(); 
    expect(person).toBeInstanceOf(Person);
  });

  it('Person must have max id and it\'s integer', () => {
    expect(Person.maxID).toBeDefined();
    expect(Number.isInteger(Person.maxID)).toBeTruthy();
  });

  it('max id start at 0 and must increase when new instance n + 1', () => {
    const currentValue = 0;
    expect(Person.maxID).toBe(currentValue);

    // person 1
    new Person();
    expect(Person.maxID).toBe(currentValue + 1);

    // person 2
    new Person();
    expect(Person.maxID).toBe(currentValue + 1);

  });

  it('Person instance must have id, id must be integer', () => {
    const person = new Person();
    expect(person.id).toBeDefined();
    expect(Number.isInteger(person.id)).toBeDefined();
  });

  it('id of Person must equal than current max id when genarate', () => {
    // person 1
    const person1 = new Person();
    expect(person1.id).toBe(Person.maxID);
    
    // person 2
    const person2 = new Person();
    expect(person2.id).toBe(Person.maxID);

    // person 3
    const person3 = new Person();
    expect(person3.id).toBe(Person.maxID);
  });
});
