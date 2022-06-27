import React, { useState } from "react";
import Link from "next/link";
function index() {
  const [products] = useState(["product", "product", "product"]);
  return (
    <div>
      {products.map((product, index) => (
        <h1>
          <Link href={`/product/${index + 1}`}>
            <a>
              {product} detail {index + 1}
            </a>
          </Link>
        </h1>
      ))}
    </div>
  );
}

export default index;
