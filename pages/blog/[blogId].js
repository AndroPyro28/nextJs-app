import {useRouter} from "next/router";


function blogId() {
    const {query} = useRouter();

    const {blogId} = query;

  return (
    <div>blog id {blogId}</div>
  )
}

export default blogId