import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      Next Js pre-rendering
      <h5>
        <Link href={"posts"}>
          <a>Posts</a>
        </Link>
      </h5>
      <h5>
        <Link href={"users"}>
          <a>Users</a>
        </Link>
      </h5>
    </div>
  );
}
