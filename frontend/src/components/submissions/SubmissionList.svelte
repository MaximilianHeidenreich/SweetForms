<script lang="ts">
	import { fetchSubmissions } from "$src/lib/api/submissions";
	import type { ISubmission } from "$src/lib/ISubmission";
	import toastOptions from "$src/lib/toast";

	import { onMount } from "svelte";
	import toast from "svelte-french-toast";

	import FormSwitcher from "../core/FormSwitcher.svelte";
	import SubmissionFilterDropdown from "./SubmissionFilterDropdown.svelte";
    import SubmissionListItem from "./SubmissionListItem.svelte";

    // STATE
    let submissionsGenerator: any;
    let submissionsGeneratorDone = false;
    let submissions: ISubmission[] = [];

    // HOOKS
    onMount(async () => {

        // Fetch submissions
        submissionsGenerator = await fetchSubmissions(2, undefined);        
        triggerLoadMore();

    })

    // ACTIONS
    function triggerLoadMore() {
        toast.promise(loadMore(), {
            loading: "Loading sumbissions...",
            success: "Submissions loaded!",
            error: "Could not load submissions!",
        }, toastOptions());
    }
    async function loadMore(): Promise<unknown> {
        const { done, value } = await submissionsGenerator.next();
        if (!done) {
            console.log(value);
            
            submissions = [...submissions, ...value.items];
        }
        else {
            submissionsGeneratorDone = true;
        }
        return;
    }

</script>

<div class="submissionsList">
    <header>
        <form class="flex justify-start items-center gap-3 flex-1">
            <div class="relative flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-5 h-5 absolute left-5 top-4 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type="text" name="search" placeholder="Search ..." 
                    class="flex-1 w-full px-12">
            </div>
        </form>
        <div class="shrink-0">
            <FormSwitcher />
        </div>
        <div class="shrink-0">
            <SubmissionFilterDropdown />
        </div>
    </header>

    <p class="text-sm font-bold text-gray-700 opacity-60 uppercase mt-8 mb-4">Submissions</p>
    <ul class="submissions">
        {#if submissions.length === 0}
            <li class="my-4 flex justify-center items-center">
                <p>Loading ...</p>
            </li>
        {:else}
        {#each submissions as submission}
            <SubmissionListItem 
                bind:submission
                />
        {/each}
        <li class="my-4 flex justify-center items-center">
            {#if !submissionsGeneratorDone}
            <button on:click={triggerLoadMore} disabled={submissionsGeneratorDone}>Load more</button>
            {:else}
            <p>No more submissions to load! :)</p>
            {/if}
        </li>
        {/if}
    </ul>
</div>

<style lang="postcss">
    header {
        @apply flex items-center gap-4;
    }
    input {
        @apply w-full py-3;
        @apply rounded-xl border border-gray-200;
        /*@apply focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent;*/    
    }
    input:focus {
        @apply outline-none ring-0 border-amber-400;
    }
    :global(.submissionsList ul.submissions li) {
        @apply mb-4;
    }
</style>