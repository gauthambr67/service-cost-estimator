import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ordersAPI from "../../utilities/orders-api";
import "./OrderHistoryPage.css";
import { checkToken } from "../../utilities/users-service";
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import OrderList from "../../components/OrderList/OrderList";

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setOrders(orders);
      setSelectedOrder(orders[0]);
    }
    getOrders();
  }, []);

  return (
    <main className="OrderHistoryPage">
      <div className="topheader">
        <div className="left">
          <Logo />
        </div>
        <div className="right">
          <h2>Account Detail</h2>
          <button>
            <Link to="/orders/new">NEW SERVICE</Link>
          </button>
          <UserLogOut user={user} setUser={setUser} />
        </div>
      </div>
      <aside className="orderHistory">
        <div>
          <OrderList
            orders={orders}
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        </div>

        <OrderDetail order={selectedOrder} />
      </aside>
    </main>
  );
}
