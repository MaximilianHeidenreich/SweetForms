<script lang="ts">
	import type { ISubmission } from "$src/lib/ISubmission";


    // PROPS
    export let submission: ISubmission;

</script>

<li class="rounded-xl border-2 bg-white" class:read={submission.read}>
    <div class="flex items-center p-6 pb-0">
        <div class="block shrink-0 bg-gray-200 rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>

        <!--<img
            alt="Speaker"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            class="h-14 w-14 rounded-lg object-cover"
        />-->
        </div>

        <div class="ml-4">
            <h3 class="font-medium sm:text-lg">
                <a href="/submission/{submission.id}" class="hover:underline">
                Submission {submission.id} {submission.read}
                </a>
            </h3>

            <!--<p class="text-sm text-gray-700 line-clamp-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
                accusantium temporibus iure delectus ut totam natus nesciunt ex?
                Ducimus, enim.
            </p>-->

            <div class="mt-2 sm:flex sm:items-center sm:gap-2">
                <div class="flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="ml-1 text-xs">{(new Date(submission.createdAt)).toUTCString()}</p>
                </div>

                <span class="hidden sm:block" aria-hidden="true">&middot;</span>

                <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                {Object.keys(submission.fields).length} fields
                <!--<a href="#" class="font-medium underline hover:text-gray-700">
                    John
                </a>-->
                </p>
            </div>
        </div>
    </div>

    {#if !submission.read}
    <div class="flex justify-end">
        <strong
        class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-amber-400 py-1.5 px-3 text-white"
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5">
        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
        </svg>


        <span class="text-[10px] font-medium sm:text-xs">New!</span>
        </strong>
    </div>
    {:else}
    {#if submission.closed}
    <div class="flex justify-end">
        <strong
        class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-500 py-1.5 px-3 text-white"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
        </svg>

        <span class="text-[10px] font-medium sm:text-xs">Closed!</span>
        </strong>
    </div>
    {/if}
    {/if}
</li>

<style lang="postcss">
    li {
        @apply border-amber-400;
    }
    li.read {
        @apply border-gray-100;
    }
</style>