<script lang="ts">
  import { cn } from "$lib/utils";
  import { page } from "$app/stores";
  import ThemeToggle from "./ThemeToggle.svelte";
  
  let isScrolled = false;
  let y: number;
  let isMobileMenuOpen = false;

  $: isScrolled = y > 50;
  $: currentPath = $page.url.pathname;

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
</script>

<svelte:window bind:scrollY={y} />

<header
  class={cn(
    "sticky top-0 w-full z-50 transition-all duration-300",
    isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
  )}
>
  <div class="container mx-auto px-6">
    <div class="flex h-16 items-center justify-between">
      <a 
        href="/" 
        class="text-lg font-semibold hover:text-primary transition-colors"
      >
        Calvin Kimani
      </a>

      <nav class="hidden md:flex items-center space-x-6">
        {#each menuItems as item}
          <a 
            href={item.href} 
            class={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              currentPath === item.href 
                ? "text-foreground" 
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </a>
        {/each}
      </nav>

      <div class="flex items-center space-x-4">
        <ThemeToggle />
        
        <button
          type="button"
          class="md:hidden p-2 -m-2 text-muted-foreground hover:text-foreground"
          aria-label="Toggle menu"
          on:click={toggleMobileMenu}
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {#if isMobileMenuOpen}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            {:else}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

{#if isMobileMenuOpen}
  <div
    class="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
    on:click={closeMobileMenu}
  />
  <div
    class="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background p-6 shadow-lg md:hidden"
    transition:fly={{ x: 100, duration: 200 }}
  >
    <div class="flex items-center justify-between mb-8">
      <a 
        href="/" 
        class="text-lg font-semibold hover:text-primary transition-colors"
        on:click={closeMobileMenu}
      >
        Calvin Kimani
      </a>
      <button
        type="button"
        class="p-2 -m-2 text-muted-foreground hover:text-foreground"
        aria-label="Close menu"
        on:click={closeMobileMenu}
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <nav class="space-y-4">
      {#each menuItems as item}
        <a
          href={item.href}
          class={cn(
            "block text-base font-medium transition-colors hover:text-primary",
            currentPath === item.href 
              ? "text-foreground" 
              : "text-muted-foreground"
          )}
          on:click={closeMobileMenu}
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </div>
{/if}
