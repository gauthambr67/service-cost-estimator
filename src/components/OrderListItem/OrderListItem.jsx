import React, { useCallback, useState } from "react";
import "./OrderListItem.css";
import { handleDelete } from "../../utilities/orders-api";
// import { handleEstimate } from "../../pages/NewOrderPage/NewOrderPage";
// import * as ordersAPI from "../../utilities/orders-api";


export default function OrderListItem({ order, isSelected, setSelectedOrder }) {
  //   const [afterDelete, setAfterDelete] = useState("");
  //   const onDeleteClick = useCallback(
  //     (i) => {
  //       handleDelete(i);
  //     },
  //     [afterDelete]
  //   );

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
          <button onClick={() => handleDelete(order.orderId).then()}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
