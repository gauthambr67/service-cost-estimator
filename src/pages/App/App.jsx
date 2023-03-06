import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import "./App.css";
import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
