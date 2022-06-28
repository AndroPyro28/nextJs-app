import Link from "next/link";
import React from "react";

function index({ products }) {
  return (
    <>
      <h1>List of products</h1>

      {products.map((product) => {
        return (
          <Link href={`/products/${product.id}`} key={product.id}>
            <a>
              <h3>
                {product.id}. {product.title} {product.price} <br />{" "}
              </h3>
            </a>
          </Link>
        );
      })}
    </>
  );
}

export default index;

export const getStaticProps = async () => {
  const data = await fetch("http://localhost:4000/products").then((res) =>
    res.json()
  );

  return {
    props: {
      products: data,
    },
    revalidate: 10
  };
};
