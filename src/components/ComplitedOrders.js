import React from "react";

const CompletedOrders = ({ orders }) => {
  return (
    <div className="completed-orders-container">
      {orders.map((order) => (
        <div className="completed-order-item" key={order.id}>
          <span>{order.description}</span>
        </div>
      ))}
    </div>
  );
};

export default CompletedOrders;
