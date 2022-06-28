import React, { useState } from "react";
import { useRouter } from "next/router";
function Index({ eventList }) {
  const [Events, setEventList] = useState(eventList);
  const router = useRouter();

  const sportsEvents = async () => {
    const data = await fetch(
      "http://localhost:4000/events?category=sports"
    ).then((res) => res.json());
    setEventList(data);
    router.push("/events?category=sports", undefined, { shallow: true }); // shallow allow us to go in the url beside without calling serverSideProps
  };

  return (
    <div>
      <h1>List of Events</h1>
      <button onClick={sportsEvents}>Sports Category</button>
      {Events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.data} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Index;

export const getServerSideProps = async ({ query }) => {
  const { category } = query;
  const queryString = category ? `category=sports` : "";
  const data = await fetch(`http://localhost:4000/events?${queryString}`).then(
    (res) => res.json()
  );

  return {
    props: {
      eventList: data,
    },
  };
};
