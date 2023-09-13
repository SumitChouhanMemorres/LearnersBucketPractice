const mapping = {
  a: ["b", "c"],
  b: ["d", "g"],
  d: ["p", "q"],
  l: ["x", "y"],
};

const mutualFriend = (mapping, person) => {
  const friendList = mapping[person];
  if (friendList && friendList.length > 0) {
    const finalList = [...friendList];
    for (let friend of friendList) {
      const mutualFriendList = mutualFriend(mapping, friend);
      finalList.push(...mutualFriendList);
    }
    return finalList;
  }
  return [];
};

console.log(mutualFriend(mapping, "a"));
