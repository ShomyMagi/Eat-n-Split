import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [friendPicture, setFriendPicture] = useState(
    "https://i.pravatar.cc/48"
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName || !friendPicture) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name: friendName,
      image: `${friendPicture}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setFriendName("");
    setFriendPicture("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label>🎆 Image URL</label>
      <input
        type="text"
        value={friendPicture}
        onChange={(e) => setFriendPicture(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
