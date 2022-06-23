import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  return (
    <div>
      Needs implementation
      <h1>Product Page - {params.productId}</h1>
    </div>
  );
}

export default ProductDetail;
