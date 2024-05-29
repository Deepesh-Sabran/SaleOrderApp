import React from "react";

const ActiveOrders = ({ orders, completeOrder }) => {
  return (
    <div className="active-orders-container">
      {orders.map((order) => (
        <div className="order-item" key={order.id}>
          <span>{order.description}</span>
          <button onClick={() => completeOrder(order.id)}>Complete</button>
        </div>
      ))}
    </div>
  );
};

export default ActiveOrders;
