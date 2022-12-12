<script lang="ts">
	import { goto } from "$app/navigation";
	//import { getAllProjects } from "$src/lib/api/projects";

	//import { activeProject } from "$src/lib/stores/activeProject";
	import { get } from "svelte/store";

    // STATE
    let projects: string[] = [];
    let open: boolean = false;

    let filterStateRead = true;
    let filterStateClosed = false;

    // LOGIC
    function switchProject(project: string) {        
        //$activeProject = project;
        open = false;
        //goto("/dashboard");
    }

    /*(async function() { // TODO: timer reload
        const res = await getAllProjects();
        if (res.ok) {
            projects = res.data.items.map((e: any) => e.key);
        }
        if (get(activeProject) === "null") {
            $activeProject = projects[0];
        }
    })();*/

</script>

<div class="relative overflow-visible">
    <button 
        class="flex justify-between items-center gap-2"
        on:click={() => open = !open}>
        <div class="flex justify-start items-center gap-3 text-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
            Filter
        </div>
        <div>
            {#if !open}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
            {:else}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
            </svg>
            {/if}
        </div>
    </button>
    {#if open}
    <div class="dropdown w-60 mt-1">
        <ul>
            <li>
                <button class="flex gap-3 justify-start items-center">
                    <div class="w-6 h-6 bg-gray-800 rounded-lg flex justify-center items-center">
                        {#if filterStateRead}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" 
                            class="w-4 h-4 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {/if}
                    </div>
                    Read
                </button>
            </li>
            <li>
                <button class="flex gap-3 justify-start items-center">
                    <div class="w-6 h-6 bg-gray-100 rounded-lg flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                        </svg>
                    </div>
                    Closed
                </button>
            </li>
        </ul>
    </div>
    {/if}
</div>

<style lang="postcss">
    .dropdown {
        @apply p-2;
        @apply bg-white rounded-lg shadow-lg border-2 border-gray-100;
        @apply absolute right-0;
    }
    .dropdown ul {

    }
    .dropdown ul li {
        min-width: 100%;
        width: 100%;
        @apply mb-1;
    }
    .dropdown ul li:last-child {
        @apply mb-0;
    }
    .dropdown ul li button {
        min-width: 100%;
        width: 100%;
        @apply rounded-md;
        @apply px-3 py-2;
    }
</style>
