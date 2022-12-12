<script lang="ts">
	import { goto } from "$app/navigation";
	//import { getAllProjects } from "$src/lib/api/projects";

	//import { activeProject } from "$src/lib/stores/activeProject";
	import { get } from "svelte/store";

    // STATE
    let projects: string[] = [];
    let open: boolean = false;

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
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
            </svg>
            {"Default Form"}
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
    <div class="dropdown w-full mt-1">
        <ul>
            {#each projects as project}
                <li>
                    <button class="flex justify-start items-center gap-3 text-left"
                        on:click={() => switchProject(project)}>
                        <div class="w-6 h-6 bg-blue-400 rounded-lg"></div>
                        {project}
                    </button>
                </li>
            {/each}
            <li>
                <button class="flex gap-3 justify-start items-center">
                    <div class="w-6 h-6 bg-gray-100 rounded-lg flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                        </svg>
                    </div>
                    Create project
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
