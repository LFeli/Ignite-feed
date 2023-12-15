import './global.css';
import styles from './App.module.css';

import { Header } from "./components/header/Header"
import { Sidebar } from './components/sidebar/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          Main
        </main>
      </div>
    </div>
  )
}