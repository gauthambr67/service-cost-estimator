import "./OrderListItem.css";

export default function OrderListItem({ order, isSelected, setSelectedOrder }) {
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
        </div>
      </div>
    </div>
  );
}
