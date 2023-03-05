import React from "react";
import "./NewOrderPage.css";
import { useState, useEffect} from 'react';

function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]);
  return (
    <main className="NewOrderPage">
      <h1>NewOrderPage</h1>
      <button onClick={setMenuItems}>Trigger re-render</button>
    </main>
  );
}

export default NewOrderPage;
