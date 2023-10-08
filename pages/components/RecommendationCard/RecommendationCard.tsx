import styles from "./RecommendationCard.module.css";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

type RecommendationCardProps = {
  icon: string;
  category: string;
  recommendation: string;
};

export function RecommendationCard(props: RecommendationCardProps) {
  return (
    <div className={`${inter.className} & ${styles.card}`}>
      <div className={styles.cardHeader}>
        <Image
          alt={props.icon}
          src={props.icon}
          width={34}
          height={34}
          className={styles.cardImage}
          objectFit="height"
        />
        <text className={styles.cardCategory}>{props.category}</text>
      </div>
      <text className={styles.cardContent}>{props.recommendation}</text>
    </div>
  );
}
