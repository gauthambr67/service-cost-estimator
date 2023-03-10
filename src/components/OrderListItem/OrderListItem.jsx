import "./OrderListItem.css";
import { handleDelete } from "../../utilities/orders-api";
// import { handleEstimate } from "../../pages/NewOrderPage/NewOrderPage";
import * as ordersAPI from "../../utilities/orders-api";
import { Link, useNavigate } from "react-router-dom";

export default function OrderListItem({ order, isSelected, setSelectedOrder }) {
  const navigate = useNavigate();
  async function handleUpdate(orderId) {
    await ordersAPI.updateOrder();
    navigate("/updateorder/", { id: orderId });
  }
  return (
    <div className="MenuListItem">
      <div
        className={`OrderListItems${isSelected} ? 'selected' : ''}`}
        onClick={() => setSelectedOrder(order)}
      >
        <div>
          <div>
            Order Id: <span className="smaller">{order.orderId}</span>
          </div>
          <div className="smaller">
            {new Date(order.createdAt).toLocaleDateString()}
          </div>
        </div>

        <div>
          <div>${order.orderTotal.toFixed(2)}</div>
          <div className="smaller">
            {order.totalQty} Item{order.totalQty > 1 && "s"}
          </div>
          <div>Estimated {order.totalHours} Hours</div>
          <button onClick={() => handleUpdate(order.orderId)}>Update</button>
          <button
            onClick={() =>
              handleDelete(order.orderId).then(navigate("/orders/new"))
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
