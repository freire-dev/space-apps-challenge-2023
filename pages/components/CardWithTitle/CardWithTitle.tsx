import styles from "./CardWithTitle.module.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

type CardWithTitleProps = {
  title: string;
  body: string;
};

export function CardWithTitle(props: CardWithTitleProps) {
  return (
    <div className={`${inter.className} & ${styles.main}`}>
      <text className={styles.title}>{props.title.toUpperCase()}</text>
      <div className={styles.card}>
        <text className={styles.body}>{props.body}</text>
      </div>
    </div>
  );
}
