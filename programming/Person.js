class Person {
  constructor() {
    this.id = Person.maxID;
  }
}

Person.maxID = 0;

export default Person;
