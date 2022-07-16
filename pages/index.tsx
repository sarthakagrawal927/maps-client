import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import ReactQueryTest from '../components/reactQueryTest'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ReactQueryTest />
    </div>
  )
}

export default Home
