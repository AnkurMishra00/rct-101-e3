import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8080/db",
      metho: "GET"
    })
      .then((res) => {
        setData(res.products);
      })
      .catch((err) => {});
  }, []);
  return <div>
    {products.map((ietm) => (
      <div>
        
        <div>id: {item.id}</div>
          <div>Name: {item._name}</div>
          <div>Description : {item.description}</div>
      </div>
    ))}
  </div>;
};

export default Products;
