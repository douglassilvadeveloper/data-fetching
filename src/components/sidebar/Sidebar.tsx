import styles from "./Sidebar.module.css";
import developer from "../../assets/developer.jpg";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={developer} />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://www.github.com/douglassilvadeveloper.png"
        />

        <strong>Douglas Silva</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="https://www.github.com/douglassilvadeveloper">
          Acesse o perfil
        </a>
      </footer>
    </aside>
  );
}
