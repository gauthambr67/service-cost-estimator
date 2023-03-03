import React from "react";
import "./OrderHistoryPage.css";
import { checkToken } from "../../utilities/users-service";

function OrderHistoryPage() {
  async function handleCheckToken() {
    let expDate = await checkToken();
    console.log(expDate);
  }
  return (
    <main className="OrderHistoryPage">
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check when login expires</button>
    </main>
  );
}

export default OrderHistoryPage;
