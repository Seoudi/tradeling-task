import { DashboardDataProps } from "./IDashboardData";
import { RepositoryDTO } from "./IRepository";
import { UserDTO } from "./IUser";

export const getDashboardData = async (bodyValue: DashboardDataProps) => {
  const response = await fetch("http://localhost:4242/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyValue),
  });
  if (response.ok) {
    const json: RepositoryDTO[] | UserDTO[] = await response.json();
    return json;
  } else {
    throw new Error(response.statusText);
  }
};
