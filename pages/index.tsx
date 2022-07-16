import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import ReactQueryTest from '../components/reactQueryTest'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <ReactQueryTest />
    </div>
  )
}

export default Home
