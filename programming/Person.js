const initialCurrentID = 0;
class Person {
  constructor(name, friends = []) {
    // validation name parameter
    if (!name || typeof name !== 'string' || name.trim() === '') {
      throw new Error('name not correct format');
    }
    // validation friends parameter
    if (!Array.isArray(friends)) {
      throw new Error('friends must be array');
    }
    // validation element in friends parameter
    if (friends.length > 0 && !friends.every(friend => friend instanceof Person)) {
      throw new Error('element of friends must be instance of Person');
    }
    Person.currentMaxID = Person.currentMaxID + 1;
    this.id = Person.currentMaxID;
    this.name = name;
    this.friends = friends;
  }

  getFriendsOfFriends() {
    // TODO
  }

  getFriends() {
    // TODO
  }
}

Person.currentMaxID = initialCurrentID;

export default Person;
export {
  initialCurrentID,
};
