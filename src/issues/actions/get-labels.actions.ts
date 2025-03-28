import { githubApi } from "../../api";
import { sleep } from "../../helpers";
import { IGithubLabel } from "../interfaces";

export const getLabels = async (): Promise<IGithubLabel[]> => {
  await sleep(1500);

  const { data } = await githubApi.get<IGithubLabel[]>('/labels')
    
  return data;
};