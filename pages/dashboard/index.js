import React, { useEffect, useState } from "react";

function Index() {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const data = await fetch("http://localhost:4000/dashboard").then((res) =>
        res.json()
      );

      setDashboardData(data);
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <div>
          <h2>
            posts {dashboardData.posts} <br />
          </h2>
          <h2>
            likes {dashboardData.likes} <br />
          </h2>
          <h2>
            followers {dashboardData.followers} <br />
          </h2>
          <h2>
            following {dashboardData.following} <br />
          </h2>
        </div>
      )}
    </div>
  );
}

export default Index;
