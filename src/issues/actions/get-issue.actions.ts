import { githubApi } from "../../api"
import { sleep } from "../../helpers"
import { IGithubIssue } from "../interfaces"

export const getIssue = async (issueNumber: number): Promise<IGithubIssue> => {
    await sleep(1500)

    const { data } = await githubApi.get<IGithubIssue>(`/issues/${issueNumber}`)

    return data
}