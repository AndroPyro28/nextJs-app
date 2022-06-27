// import React, { useEffect, useState } from "react";

function User({ user }) {
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   (() => {
  //     setUser(data);
  //   })();
  // }, []);

  return (
    <section>
      <h1>
        {user?.id}. {user?.username} - {user?.email}
      </h1>
    </section>
  );
}

export default User;
