import React, { useState } from "react";

const CreateOrderModal = ({ addOrder, closeModal }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      description,
      status: "Active",
    };
    addOrder(newOrder);
    closeModal();
  };

  return (
    <div className="create-order-modal">
      <h2>Create Sale Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default CreateOrderModal;
