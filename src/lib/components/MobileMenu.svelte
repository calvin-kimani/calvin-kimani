<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { Button } from "./ui/button";
  export let isOpen = false;
  export let onClose: () => void;

  const menuItems = [
    { href: "#projects", label: "Projects" },
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#contact", label: "Contact" }
  ];

  function handleClick(href: string) {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

{#if isOpen}
  <div
    class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
    transition:fade={{ duration: 150 }}
    on:click={onClose}
  />

  <nav
    class="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background px-6 py-6 shadow-lg"
    transition:fly={{ x: 100, duration: 150 }}
  >
    <div class="flex items-center justify-between mb-8">
      <span class="text-lg font-medium">Calvin Kimani</span>
      <button
        class="p-2 -mr-2 hover:bg-muted rounded-md"
        on:click={onClose}
        aria-label="Close menu"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div class="space-y-4">
      {#each menuItems as item}
        <a
          href={item.href}
          class="block py-2 text-base text-muted-foreground hover:text-foreground transition-colors"
          on:click|preventDefault={() => handleClick(item.href)}
        >
          {item.label}
        </a>
      {/each}
    </div>
  </nav>
{/if}
