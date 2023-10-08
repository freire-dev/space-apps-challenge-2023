import Image from "next/image";
import styles from "./Header.module.css";
import headerLogo from "@/public/space_apps_logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={headerLogo}
        alt="NASA International Space Apps Challenge logo"
      />
    </header>
  );
}
