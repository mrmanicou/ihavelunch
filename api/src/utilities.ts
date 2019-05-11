import { getConnection, Connection } from "typeorm";
import { Parish } from "./entity/Parish";

const initParishes = async (connection: Connection) => {
  const repo = connection.getRepository(Parish);
  const count = await repo.count();
  if (count > 0) {
    return;
  }
  const data = [
    { name: "St. George's" },
    { name: "St. Mark's" },
    { name: "St. John's" },
    { name: "St. Patrick's" },
    { name: "St. Andrew's" },
    { name: "St. David's" },
    { name: "Carriacou & Petite Martinique" }
  ];

  const parishes = data.map(p => {
    const parish = new Parish();
    parish.name = p.name;
    return parish;
  });

  await repo.save(parishes);
};

export const initializeDb = async () => {
  const connection = getConnection();
  await initParishes(connection);
};
