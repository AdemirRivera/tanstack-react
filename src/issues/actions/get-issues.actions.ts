import { githubApi } from "../../api"
import { sleep } from "../../helpers"
import { IGithubIssue, State } from "../interfaces"

export const getIssues = async (state: State, selectedLabels: string[], page: number): Promise<IGithubIssue[]> => {
    await sleep(1500)

    const params = new URLSearchParams()

    if (state !== State.All) {
        params.append('state', state)
    }

    if (selectedLabels.length > 0) {
        params.append('labels', selectedLabels.join(','))
    }

    params.append('page', page.toString())
    params.append('per_page', '5')

    const { data } = await githubApi.get<IGithubIssue[]>('/issues', {
        params
    })

    return data
}