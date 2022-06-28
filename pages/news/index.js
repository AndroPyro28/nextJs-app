function index({ articles }) {
  return (
    <div>
      <h2>List of news articles</h2>
      {articles.map((article) => (
        <h4 key={article.id}>
          {article.id} {article.title} | {article.category}
          <hr/>
        </h4>
      ))}
    </div>
  );
}

export default index;

export const getServerSideProps = async () => {
  const data = await fetch("http://localhost:4000/news").then((res) =>
    res.json()
  );
  return {
    props: {
      articles: data,
    },
  };
};
