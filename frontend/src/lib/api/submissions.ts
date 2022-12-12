import type { ISubmission } from "../ISubmission";
import { API_HOST } from "./apiHost";

/**
 * Generator to fetch submissions.
 * @param limit Max number of submissions to fetch at once
 */
export async function *fetchSubmissions(limit: number = 20, query: unknown) {
    let last = undefined;

    const request = async (lastKey: string | undefined, query: unknown | undefined): Promise<{ count: number, last: string | undefined, items: unknown[] }> => {
        let uri = `${API_HOST}/submissions?limit=${limit}`
        if (lastKey) uri += `&last=${lastKey}`;
        if (query) uri += `&query=${btoa(JSON.stringify(query))}`;
        
        const response = await fetch(uri, {
            method: "GET"
        });
        const json = await response.json();
        
        last = json.data.last;
        return json.data;
    }

    yield await request(last, query);
    while (last) {
        yield await request(last, query);
    }
}

/**
 * Get one submission by ID.
 * @param id The ID of the submission to fetch
 * @returns 
 */
export async function fetchSubmission(id: string) {
    const response = await fetch(`${API_HOST}/submissions/${id}`, {
        method: "GET"
    });
    const json = await response.json();
    //TODO;: Error handling
    return json.data;
}

export async function patchSubmission(id: string, updates: Partial<ISubmission>) {
    const response = await fetch(`${API_HOST}/submissions/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            updates
        })
    });
    const json = await response.json();
    //TODO;: Error handling
    return json.data;
}