import { useAppState } from "@/src/hooks/AppStateContext";
import { useState, ChangeEvent } from "react";

export default function GeocodeForm() {
  const { globalState, setGlobalState } = useAppState();

  const [endereco, setEndereco] = useState<string>("");

  const consultarLatLong = async () => {
    try {
      console.log(endereco);
      const url = `/api/getLocation`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: endereco }),
      };

      const response = await fetch(url, options);
      const data = await response.json();

      setGlobalState((prevState: any) => ({
        ...prevState,
        latitude: data.latitude ?? -22.896998,
        longitude: data.longitude ?? -43.106464,
      }));
    } catch (error) {
      console.error("Ocorreu um erro ao buscar as coordenadas:", error);
    }
  };

  const handleEnderecoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndereco(e.target.value);
  };

  return (
    <div style={{ width: "40vw", marginTop: 20 }}>
      <input
        style={{
          width: "96%",
          marginBottom: 5,
          padding: 10,
          borderRadius: 5,
          border: "1px solid #C9C9C9",
        }}
        type="text"
        id="endereco"
        placeholder="Write the address here..."
        value={endereco}
        onChange={handleEnderecoChange}
      />
      <br />
      <button
        style={{
          width: "100%",
          background: "#000000B2",
          padding: 6,
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
          border: "none",
          borderRadius: 3,
          fontSize: 18,
        }}
        onClick={consultarLatLong}
      >
        SEARCH
      </button>
    </div>
  );
}
