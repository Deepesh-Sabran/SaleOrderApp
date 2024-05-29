import React, { useState } from "react";
import ActiveOrders from "./ActiveOrders";
import CompletedOrders from "./ComplitedOrders";
import CreateOrderModal from "./CreateOrderModal";

const Dashboard = ({ toggleTheme }) => {
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [showCreateOrderModal, setShowCreateOrderModal] = useState(false);

  const addOrder = (order) => {
    setActiveOrders([...activeOrders, order]);
  };

  const completeOrder = (orderId) => {
    const order = activeOrders.find((order) => order.id === orderId);
    setActiveOrders(activeOrders.filter((order) => order.id !== orderId));
    setCompletedOrders([...completedOrders, { ...order, status: "Completed" }]);
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setShowCreateOrderModal(true)}>
        + Sale Order
      </button>
      {showCreateOrderModal && (
        <CreateOrderModal
          addOrder={addOrder}
          closeModal={() => setShowCreateOrderModal(false)}
        />
      )}
      <div>
        <h3>Active Orders</h3>
        <ActiveOrders orders={activeOrders} completeOrder={completeOrder} />
      </div>
      <div>
        <h3>Completed Orders</h3>
        <CompletedOrders orders={completedOrders} />
      </div>
    </div>
  );
};

export default Dashboard;
