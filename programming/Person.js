const initialtMaxID = 0;
class Person {
  constructor() {
    Person.maxID = Person.maxID + 1;
    this.id = Person.maxID;
  }
}

Person.maxID = initialtMaxID;

export default Person;
export {
  initialtMaxID,
};
