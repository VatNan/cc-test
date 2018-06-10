const initialCurrentID = 0;
class Person {
  constructor(name, fiendes = []) {
    // validation name parameter
    if (!name || typeof name !== 'string' || name.trim() === '') {
      throw new Error('name not correct format');
    }

    Person.currentMaxID = Person.currentMaxID + 1;
    this.id = Person.currentMaxID;
    this.name = '';
    this.fiendes = [];
  }
}

Person.currentMaxID = initialCurrentID;

export default Person;
export {
  initialCurrentID,
};
