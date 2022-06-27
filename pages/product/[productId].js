import React from "react";
import { useRouter } from "next/router";
function productDetail() {
  const { query } = useRouter(); // :router
  const { productId } = query;
  return <div>product detail {productId} </div>;
}

export default productDetail;
