import { Header } from "./components/header/Header";
import { RepositoryList } from "./components/repository/RepositoryList";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/sidebar/Sidebar";

export function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <RepositoryList />
        </main>
      </div>
    </div>
  );
}
