const initialCurrentID = 0;
class Person {
  static currentMaxID = initialCurrentID;

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
    // add me to friends
    this.friends.map(friend => {
      friend.addFriends([this]);
    });
  }

  getFriendsOfFriends = ({ allField = false } = {}) => {
    // get friends in level 2 
    let friendsLevel2 = {};
    for(let friend of this.friends) {
      for(let fofs of friend.getFriends({ allField: true })) {
        // start inner for
        // delete with friends
        if (this.friends.some(friend => friend.id === fofs.id)) {
          continue;
        }

        // delete with me
        if (this.id === fofs.id) {
          continue;
        }

        friendsLevel2 = {
          ...friendsLevel2,
          [fofs.id]: {
            name: fofs.name,
            friends: fofs.friends,
          }
        };
        // end inner for
      }
    }

    return (allField)
      ? Object.keys(friendsLevel2)
        .map(keys => ({
          id: Number(keys),
          name: friendsLevel2[keys].name,
          friends: friendsLevel2[keys].friends,
        }))
      : Object.keys(friendsLevel2)
        .map(keys => friendsLevel2[keys].name);
  }

  getFriends = ({ allField = false } = {}) => {
    return (allField)
      ? this.friends
        .map(friend => ({
          id: friend.id,
          name: friend.name,
          friends: friend.friends,
        }))
      : this.friends
        .map(friend => friend.name);
  }

  addFriends = (newFriends) => {
    if (!Array.isArray(newFriends) || newFriends.length === 0) {
      throw new Error('addFriends must send 1 argument is array and must not empty array');
    }

    if (!newFriends.every(newFriend => newFriend instanceof Person)) {
      throw new Error('addFriends must send argument is array and each element is instance of Person');
    }

    // validate dupicate newFriends
    const newFriendNotDuplicate = newFriends
      .filter(newFriend => !this.friends.some(friend =>  friend.id === newFriend.id))
      .filter(newFriend => this.id !== newFriend.id);
    if (newFriendNotDuplicate.length === 0) {
      return;
    }

    this.friends = [...this.friends, ...newFriendNotDuplicate];
    // add me to friends
    newFriendNotDuplicate.map(newFriend => {
      newFriend.addFriends([this]);
    });
  }
}

export default Person;
export {
  initialCurrentID,
};
