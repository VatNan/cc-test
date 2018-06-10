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

});
