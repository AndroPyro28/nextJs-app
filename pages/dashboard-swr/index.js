import React, { useEffect } from "react";
import useSwr from "swr";
function Index() {
  const fetcher = async () => {
    const data = await fetch("http://localhost:4000/dashboard").then((res) =>
      res.json()
    );
    return data;
  };
  
  const { data, error } = useSwr("dashboard", fetcher);

  if (error) return "error occured";
  if (!data) return "loading";

  return (
    <div>
      <h2>
        posts {data.posts} <br />
      </h2>
      <h2>
        likes {data.likes} <br />
      </h2>
      <h2>
        followers {data.followers} <br />
      </h2>
      <h2>
        following {data.following} <br />
      </h2>
    </div>
  );
}

export default Index;
