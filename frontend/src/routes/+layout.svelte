<script>
    import { Toaster } from "svelte-french-toast";
    import "../styles.css";
    import "../app.pcss";
	
	import Navigation from "$src/components/core/Navigation.svelte";

</script>

<Toaster/>
<main>
    <Navigation />
    <slot />
</main>