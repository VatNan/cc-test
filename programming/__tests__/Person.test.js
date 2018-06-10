import Person from '../Person';

describe('Person class', () => {
  it('Person can create new instance', () => {
    const person = new Person(); 
    expect(person).toBeInstanceOf(Person);
  });
});
