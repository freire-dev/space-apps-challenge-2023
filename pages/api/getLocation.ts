// pages/api/geocode.ts

import { NextApiRequest, NextApiResponse } from "next";

const locations = [
  { name: "Icarai, Niterói", latitude: -22.90442, longitude: -43.108503 },
  { name: "São Francisco, Niterói", latitude: -22.9206, longitude: -43.0623 },
  { name: "Piratininga, Niterói", latitude: -22.9504, longitude: -43.0667 },
  { name: "Camboinhas, Niterói", latitude: -22.9457, longitude: -43.0762 },
  { name: "Centro, Niterói", latitude: -22.8993, longitude: -43.1249 },
];

const findLocationByAddress = (address: string) => {
  return locations.find(
    (location) => location.name.toLowerCase() === address.toLowerCase()
  );
};

export default async function getLocation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { address } = req.body;
    if (!address) {
      return res
        .status(400)
        .json({ error: "Endereço não fornecido no corpo da solicitação." });
    }

    const location = findLocationByAddress(address); // Correção aqui
    if (!location) {
      return res.status(404).json({ error: "Endereço não encontrado." });
    }

    const objLocation = {
      longitude: location.longitude,
      latitude: location.latitude,
    };

    return res.status(200).json(objLocation); // Não é necessário aninhar em { objLocation }
  } else {
    return res.status(405).json({ error: "Método não permitido." });
  }
}
