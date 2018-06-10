const initialCurrentID = 0;
class Person {
  constructor() {
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
