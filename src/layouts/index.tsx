import { Link, Outlet } from 'umi'
import styles from './index.scss'

export default function Layout() {
  return (
    <>
      <div data-tauri-drag-region="self" style={{ height: 40, width: '100%' }} />
      <div className={styles.navs}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
          <li>
            <a href="https://github.com/umijs/umi">Github</a>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  )
}
