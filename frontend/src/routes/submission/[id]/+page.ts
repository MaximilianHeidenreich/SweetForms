import { fetchSubmission } from '$src/lib/api/submissions';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
// @ts-ignore TODO: fix
export async function load({ params }) {
    const id = params.id;

    const submission = fetchSubmission(id);
    //throw error(404, 'Not found');

    return {
        submission
    }
}