import { useRouter } from "next/router";

function ProductDetail({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>loading please wait...</div>;
  }

  return (
    <>
      <h3>
        {product.id}. {product.title} {product.price}{" "}
      </h3>
      <h4>{product.description}</h4>
    </>
  );
}

export default ProductDetail;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          productId: "1",
        },
      },
      {
        params: {
          productId: "2",
        },
      },
      {
        params: {
          productId: "3",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const data = await fetch(
    `http://localhost:4000/products/${params.productId}`
  ).then((res) => res.json());

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data,
    },
  };
};
