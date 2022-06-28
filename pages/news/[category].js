import React from "react";
import { useRouter } from "next/router";
function ArticleListByCategory({ articles }) {
  const { query } = useRouter();
  return (
    <div>
      <h2>List of articles category by: {query.category} </h2>
      <h3>
        {articles.map((article) => (
          <div key={article.id}>
            <h4>
              {article.id} {article.title} | {article.category}
            </h4>
            <p>{article.description}</p>
            <hr/>
          </div>
        ))}
      </h3>
    </div>
  );
}

export default ArticleListByCategory;

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;
  const { category } = params;
  console.log(params, query) // query is for getServerSideOnly while params must use in api server
  const data = await fetch(
    `http://localhost:4000/news?category=${category}`
  ).then((res) => res.json());

  if(data.length <= 0) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      articles: data,
    },
  };
};
