/* eslint-disable react/prop-types */
import Friend from "./Friend";

function FriendsList({ friends, selected, onSelect }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          selected={selected}
          onSelect={onSelect}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
