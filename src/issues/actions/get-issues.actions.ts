import { githubApi } from "../../api"
import { sleep } from "../../helpers"
import { IGithubIssue, State } from "../interfaces"

export const getIssues = async (state: State): Promise<IGithubIssue[]> => {
    await sleep(1500)

    const params = new URLSearchParams()

    if (state !== State.All) {
        params.append('state', state)
    }

    const { data } = await githubApi.get<IGithubIssue[]>('/issues', {
        params
    })

    return data
}