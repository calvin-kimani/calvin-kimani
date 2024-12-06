<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import NavigationLoader from '$lib/components/NavigationLoader.svelte';

  let { children } = $props();
</script>

<div class="min-h-screen flex flex-col bg-background text-foreground">
  <Header />
  <NavigationLoader />
  <main class="flex-1">
    {@render children()}
  </main>
</div>
<Footer />