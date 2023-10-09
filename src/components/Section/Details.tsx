import { CardWithTitle } from "@/src/components/CardWithTitle/CardWithTitle";
import { Card } from "../Card/Card";
import { useAppState } from "@/src/hooks/AppStateContext";
import { RecommendationCard } from "@/src/components/RecommendationCard/RecommendationCard";

import all from "@/public/all.png";
import family from "@/public/family.png";
import sports from "@/public/sports.png";
import pregnancy from "@/public/pregnancy.png";
import respiratory from "@/public/respiratory.png";
import elderly from "@/public/elderly.png";
import cardiovascular from "@/public/cardiovascular.png";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Details = () => {
  const { globalState } = useAppState();
  return (
    <>
      {globalState.details ? (
        <div
          style={{
            padding: "10px 100px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="kpis">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <Card
                shortCode={"CO"}
                name={"Carbon Monoxide"}
                unit={"µg/m³"}
                value={1068.12}
                color={"#00FF00"}
                qualification={"Good"}
              />
              <Card
                shortCode={"NO2"}
                name={"Nitrogen Dioxide"}
                unit={"µg/m³"}
                value={62.38}
                color={"#00FFFF"}
                qualification={"Regular"}
              />
              <Card
                shortCode={"O3"}
                name={"Ozone"}
                unit={"µg/m³"}
                value={44.35}
                color={"#00FF00"}
                qualification={"Good"}
              />
              <Card
                shortCode={"SO2"}
                name={"Sulfur Dioxide"}
                unit={"µg/m³"}
                value={22.65}
                color={"#00FFFF"}
                qualification={"Regular"}
              />
              <Card
                shortCode={"PM2.5"}
                name={"Fine Particulate Matter"}
                unit={"µg/m³"}
                value={54.02}
                color={"orange"}
                qualification={"Poor"}
              />
            </div>
          </div>
          <div>
            <CardWithTitle
              title="Criticality"
              body="Air quality poses no health risk for exposure over decades."
            />
            <CardWithTitle
              title="Solution"
              body="Reduce pollutant emissions, improve public transportation, implement air quality regulations, continuously monitor indices, protect vulnerable groups, invest in clean technologies, develop green areas, regulate traffic, and promote the use of clean vehicles."
            />
          </div>
          <text
            className={inter.className}
            style={{
              paddingTop: "40px",
              paddingBottom: "16px",
              fontSize: "19px",
              fontWeight: "600",
            }}
          >
            RECOMMENDATIONS
          </text>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <RecommendationCard
              icon={all.src}
              category="All"
              recommendation="Degrading air quality can cause respiratory tract irritation and discomfort."
            />
            <RecommendationCard
              icon={family.src}
              category="Family"
              recommendation="Children with immature respiratory systems are more affected by poor air quality. Outdoor activities can be maintained as long as there is no respiratory or cardiac discomfort."
            />
            <RecommendationCard
              icon={sports.src}
              category="Sports"
              recommendation="Physical activities increase the respiratory rate, leading to higher exposure to pollutants and potential symptoms resulting from them."
            />
            <RecommendationCard
              icon={pregnancy.src}
              category="Pregnancy"
              recommendation="Exposure to pollutants can affect the fetus and pregnancy (low birth weight, premature birth, etc.)."
            />
            <RecommendationCard
              icon={respiratory.src}
              category="Respiratory Problems"
              recommendation="Air pollution can worsen respiratory conditions such as asthma, COPD, and chronic bronchitis."
            />
            <RecommendationCard
              icon={elderly.src}
              category="Elderly"
              recommendation="With age, the respiratory system may weaken, and pollution can exacerbate respiratory problems."
            />
            <RecommendationCard
              icon={cardiovascular.src}
              category="Cardiovascular Problems"
              recommendation="Air pollution has been implicated in the development or worsening of cardiovascular diseases."
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Details;
