/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
function FormSplitBill({ selectedFriend, onSplitBill }) {
  console.log(selectedFriend);
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");

  const [whosPaying, setWhosPaying] = useState("you");

  function handleYourExpense(event) {
    const value = Number(event.target.value);
    if (value <= billValue) setYourExpense(value);
  }

  function handleSplitBill(event) {
    event.preventDefault();
    if (!billValue || !yourExpense) return;
    const friend = selectedFriend[0];
    whosPaying == "you"
      ? (friend.balance = friend.balance + billValue - yourExpense)
      : (friend.balance = friend.balance - yourExpense);

    onSplitBill(friend);
    setBillValue("");
    setYourExpense("");
  }

  return (
    <form action="none" className="form-split-bill" onSubmit={handleSplitBill}>
      <h2>SPLIT A BILL WITH {selectedFriend[0].name}</h2>
      <label htmlFor="billValue">💰Bill value</label>
      <input
        type="number"
        id="billValue"
        name="billValue"
        value={billValue}
        onChange={(event) => setBillValue(Number(event.target.value))}
      />
      {/*  */}
      <label htmlFor="yourExpense">🕴️Your expense</label>
      <input
        type="number"
        id="yourExpense"
        name="yourExpense"
        value={yourExpense}
        onChange={handleYourExpense}
      />
      {/*  */}
      <label htmlFor="friendExpense">
        👩‍🤝‍🧑{selectedFriend[0].name}&apos;s expense
      </label>
      <input
        type="number"
        id="friendExpense"
        name="friendExpense"
        disabled
        value={billValue - yourExpense}
      />
      {/*  */}
      <label htmlFor="whosPaying">🤑 Who is paying the bill</label>
      <select
        name="whosPaying"
        id="whosPaying"
        value={whosPaying}
        onChange={(event) => setWhosPaying(event.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{selectedFriend[0].name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
