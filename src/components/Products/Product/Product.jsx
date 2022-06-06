import axios from "axios";
import { useEffect, useState } from "react";
const Product = () => {
  // Note: this id should come from api
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8080/db",
      metho: "GET"
    })
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
       {data.map((item) => (
    <div data-cy={`product-${item.id}`}>
      <h3 data-cy="product-name">`${item.name}`</h3>
      <h6 data-cy="product-description">`${item.name}`</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
    ))}
    </div>
  );
};

export default Product;
