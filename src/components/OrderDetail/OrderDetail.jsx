import "./OrderDetail.css";
import LineItem from "../LineItem/LineItem";

export default function OrderDetail({
  order,
  handleChangeQty,
  handleEstimate,
}) {
  if (!order) return null;
  const lineItems = order.lineItems.map((item) => (
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      handleEstimate={handleEstimate}
      key={item._id}
    />
  ));

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ? (
          <span>
            ORDER <span className="smaller">{order.orderId}</span>{" "}
          </span>
        ) : (
          <span>NEW ORDER</span>
        )}
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div>
        {lineItems.length ? (
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ? (
                <span>TOTAL</span>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleEstimate}
                  disabled={!lineItems.length}
                >
                  ESTIMATE
                </button>
              )}
              <span>Quanity: {order.totalQty}</span>
              <br />
              <span>Price: ${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
        ) : (
          <div className="service">Need a service?</div>
        )}
      </div>
    </div>
  );
}
