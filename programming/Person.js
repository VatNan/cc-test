const initialCurrentID = 0;
class Person {
  constructor(name, friends = []) {
    // validation name parameter
    if (!name || typeof name !== 'string' || name.trim() === '') {
      throw new Error('name not correct format');
    }

    if (friends.length > 0 && !friends.every(friend => friend instanceof Person)) {
      throw new Error('element of friends must be instance of Person');
    }

    Person.currentMaxID = Person.currentMaxID + 1;
    this.id = Person.currentMaxID;
    this.name = name;
    this.friends = [];
  }
}

Person.currentMaxID = initialCurrentID;

export default Person;
export {
  initialCurrentID,
};
