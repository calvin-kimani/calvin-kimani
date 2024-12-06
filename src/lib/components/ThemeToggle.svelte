<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { Sun, Moon } from 'lucide-svelte';
</script>

<button
  class="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
  onclick={toggleTheme}
  aria-label="Toggle theme"
>
  {#if $theme === 'dark'}
    <Sun class="h-4 w-4" />
  {:else}
    <Moon class="h-4 w-4" />
  {/if}
</button>
