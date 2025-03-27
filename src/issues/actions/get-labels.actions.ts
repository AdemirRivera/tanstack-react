import { sleep } from "../../helpers";
import { githubApi } from "../../api/github.api";
import { IGithubLabel } from "../interfaces";

export const getLabels = async (): Promise<IGithubLabel[]> => {
  await sleep(1500);

  const { data } = await githubApi.get<IGithubLabel[]>('/labels')

  console.log(data);
    
  return data;
};