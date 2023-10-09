import styles from "./Card.module.css";
import { Inter } from "next/font/google";
import { useSizeScreen } from "@/src/hooks/useSizeScreen";

const inter = Inter({ subsets: ["latin"] });

type CardProps = {
  shortCode: string;
  name: string;
  unit: string;
  value: number;
  color: string;
  qualification: string;
};

export function Card(props: CardProps) {
  const { width, height } = useSizeScreen();
  return (
    <div
      className={`${inter.className} & ${styles.card}`}
      style={{
        background: props.color,
        width: width <= 450 ? "250px" : "189px",
      }}
    >
      <text className={styles.cardTitle}>
        {props.name} ({props.shortCode})
      </text>
      <text className={styles.cardValues}>
        {props.value} {props.unit}
      </text>
      <text className={styles.cardTitle}>Qualidade: {props.qualification}</text>
    </div>
  );
}
