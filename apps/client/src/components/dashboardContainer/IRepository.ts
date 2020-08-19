import { UserDTO } from "./IUser";

export interface RepositoryDTO {
  full_name: string;
  owner: UserDTO;
  description: string;
  created_at: Date;
  language: string;
  updated_at: Date;
  stargazers_count: number;
}
// export interface RepositoryViewModel {

// }
