import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link href="/blog"><a>Blog</a></Link>
        <br />
      <Link href="/profile"><a>profile</a></Link>
        <br />
      <Link href="/product"><a>Blog</a></Link>
      <br />

      <button onClick={() => router.replace('product')}>Place Order</button>
    </div>
  )
}
