/* eslint-disable react/prop-types */
import { useState } from "react";

function FormAddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName || !imageUrl) return;

    const id = crypto.randomUUID();
    const friend = {
      id,
      name: friendName,
      image: `${imageUrl}?=${id}`,
      balance: 0,
    };

    onAddFriend(friend);

    setFriendName("");
    setImageUrl("https://i.pravatar.cc/48");
  }

  /* JSX */
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={friendName}
        onChange={(event) => setFriendName(event.target.value)}
      />
      <label htmlFor="imgurl">🌄 Image URL</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
}

export default FormAddFriend;
