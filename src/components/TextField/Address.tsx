import { useAppState } from "@/src/hooks/AppStateContext";
import { useState, ChangeEvent } from "react";

export default function GeocodeForm() {
  const { globalState, setGlobalState } = useAppState();

  const [endereco, setEndereco] = useState<string>("");
  const [latitudeValue, setLatitudeValue] = useState<number>(0);
  const [longitudeValue, setLongitudeValue] = useState<number>(0);

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
      console.log(data);

      if (data.length > 0) {
        const resultado = data[0];
        setLatitudeValue(resultado.latitudeValue);
        setLongitudeValue(resultado.longitude);
      } else {
        console.error("Endereço não encontrado.");
        setLatitudeValue(-22.896998);
        setLongitudeValue(-43.106464);
      }

      setGlobalState((prevState: number[]) => ({
        ...prevState,
        latitude: latitudeValue,
        longitudeValue: longitudeValue,
      }));
    } catch (error) {
      console.error("Ocorreu um erro ao buscar as coordenadas:", error);
      setLatitudeValue(-22.896998);
      setLongitudeValue(-43.106464);
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
