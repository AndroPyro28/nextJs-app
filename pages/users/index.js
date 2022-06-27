// import React, { useEffect, useState } from 'react'
import User from '../../components/User';

function index({data}) {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         setUsers(data);
    //     })();
    // }, [])

  return (
    <div>
        <h1>List of users</h1>
        {data?.length > 0 && data.map((user) => {
           return <User user={user} key={user.id} />
        })}
    </div>
  )
}

export default index;

export const getStaticProps = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(async res => await res.json())
    .catch(error => error.message);

    return {
        props: {
            data
        }
    }
}