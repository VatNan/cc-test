const initialtCurrentID = 0;
class Person {
  constructor() {
    Person.currentMaxID = Person.currentMaxID + 1;
    this.id = Person.currentMaxID;
  }
}

Person.currentMaxID = initialtCurrentID;

export default Person;
export {
  initialtCurrentID,
};
