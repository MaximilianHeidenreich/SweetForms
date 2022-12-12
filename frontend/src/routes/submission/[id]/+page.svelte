<script lang="ts">
	import { patchSubmission } from "$src/lib/api/submissions";

	import type { ISubmission } from "$src/lib/ISubmission";


    /** @type {import('./$types').PageData} */
    export let data;

    // Update read on open
    if (!data.submission.read) {
        patchSubmission(data.submission.id, { read: true });
        data.submission.read = true;
    }

    // STATE
    const submission: ISubmission = data.submission;

    const fields = Object.entries(submission.fields).map(([name, value]) => ({ name, value }));
</script>

<section>
    <h2 class="mb-2">Details</h2>
    <ul class="flex flex-col gap-1.5">
        <li><p><b>Submission ID:</b> {submission.id}</p></li>
        <li><p><b>Form ID:</b> {submission.formId}</p></li>
        <li><p><b>Timestamp:</b> {(new Date(submission.createdAt)).toUTCString()}</p></li>
        <li><p>
                <b>Read:</b> 
                {#if submission.read}
                <button class="reset whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-500">
                    Opened
                </button>
                {:else}
                <button class="reset whitespace-nowrap rounded-full bg-amber-300 px-2.5 py-0.5 text-sm text-black">
                    Unread
                </button>
                {/if}
            </p>
        </li>
        <li><p>
                <b>Closed:</b> 
                {#if submission.closed}
                <button class="reset whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-500">
                    Closed
                </button>
                {:else}
                <button class="reset whitespace-nowrap rounded-full bg-purple-300 px-2.5 py-0.5 text-sm text-purple-500">
                    Open
                </button>
                {/if}
            </p>
        </li>
    </ul>
</section>

<section>
    <h2 class="mb-2">Fields</h2>
    <ul class="flex flex-col gap-4">
        {#each fields as field}
        <li class="flex justify-between items-center gap-12">
            <div class="flex-shrink-0 w-fit">
                <h3>{field.name}</h3>
                <small><b>Type:</b> {field.value.type}</small>
            </div>
            <div class="max-w-[55ch] w-full flex-1">
                {#if field.value.type === "text" || field.value.type === "number"}
                    <input type="text" value={field.value.value} readonly>
                {:else if field.value.type === "textarea"}
                    <textarea rows="4" value={field.value.value} readonly></textarea>
                {:else if field.value.type === "checkbox"}
                    {#if field.value.value}
                        <span class="reset whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-500">Checked</span>
                    {:else}
                        <span class="reset whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-sm text-red-500">Unchecked</span>
                    {/if}
                {/if}
            </div>
        </li>
        {/each}
    </ul>
</section>


<style lang="postcss">
    section {
        @apply mb-8;
    }
</style>
