import "./App.scss";
import FriendsList from "./sections/FriendsList";
import FormAddFriend from "./sections/FormAddFriend";
import FormSplitBill from "./sections/FormSplitBill";
import { useState } from "react";
import Button from "./sections/Button";
function App() {
  const [friends, setFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  const [selected, setSelected] = useState(null);

  const selectedFriend = friends
    .slice()
    .filter((friend) => friend.id == selected);

  function handleSelected(id) {
    selected !== id ? setSelected(id) : setSelected(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend((prev) => !prev);
  }

  function handleSplitBill(editedFriend) {
    setFriends((friends) =>
      friends.slice().map((friend) => {
        if (friend.id == editedFriend.id) return editedFriend;
        return friend;
      })
    );
  }

  const [showAddFriend, setShowAddFriend] = useState(false);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selected={selected}
          onSelect={handleSelected}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}{" "}
        </Button>
      </div>
      {selected && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
