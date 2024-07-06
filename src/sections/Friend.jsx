import Button from "./Button";

/* eslint-disable react/prop-types */
function Friend({ friend, selected, onSelect }) {
  return (
    <li className={selected === friend.id ? "selected" : ""}>
      <img src={friend.image} alt="" />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You Owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance == 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelect(friend.id)}>
        {selected === friend.id ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
