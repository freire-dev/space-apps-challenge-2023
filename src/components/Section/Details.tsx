import { Card } from "../Card/Card";
import { useAppState } from "@/src/hooks/AppStateContext";

const Details = () => {
  const { globalState } = useAppState();
  return (
    <>
      {globalState.details ? (
        <div style={{ padding: "10px 300px" }}>
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
                name={"Monóxido de Carbono"}
                unit={"µg/m³"}
                value={16.8}
                color={"green"}
                qualification={"good"}
              />
              <Card
                shortCode={"CO"}
                name={"Monóxido de Carbono"}
                unit={"µg/m³"}
                value={16.8}
                color={"green"}
                qualification={"good"}
              />
              <Card
                shortCode={"CO"}
                name={"Monóxido de Carbono"}
                unit={"µg/m³"}
                value={16.8}
                color={"green"}
                qualification={"good"}
              />
              <Card
                shortCode={"CO"}
                name={"Monóxido de Carbono"}
                unit={"µg/m³"}
                value={16.8}
                color={"green"}
                qualification={"good"}
              />
              <Card
                shortCode={"CO"}
                name={"Monóxido de Carbono"}
                unit={"µg/m³"}
                value={16.8}
                color={"green"}
                qualification={"good"}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Details;
