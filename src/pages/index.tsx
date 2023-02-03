import { Button } from 'antd'
import styles from './index.scss'

export default function IndexPage() {
  return (
    <div className="p-5">
      <h1 className={styles.title}>Page index</h1>
      <Button>按钮</Button>
    </div>
  )
}
