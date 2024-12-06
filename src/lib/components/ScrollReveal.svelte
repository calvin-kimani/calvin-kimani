<script lang="ts">
  import { onMount } from 'svelte';
  import { createIntersectionObserver } from '$lib/utils/animate';
  import { cn } from '$lib/utils';

  let { delay, duration, class_, children } = $props();

  let element: HTMLElement = $state();
  let isVisible = $state(false);

  onMount(()=>{
    if (element) {
      isVisible = true;
    }
  })

</script>

<div
  bind:this={element}
  class={cn(
    'transition-all duration-[var(--duration)] ease-out',
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    class_
  )}
  style="--duration: {duration}ms; --delay: {delay}ms;"
>
  {@render children()}
</div>

<svelte:head>
  <style>
    [data-scroll-reveal] {
      view-timeline-name: --reveal;
      view-timeline-axis: block;
      animation-timeline: --reveal;
      animation-name: reveal;
      animation-range: entry 25% cover 50%;
      animation-fill-mode: both;
    }

    @keyframes reveal {
      from {
        opacity: 0;
        transform: translateY(3rem);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</svelte:head>

{#if element}
  {#await import('$app/environment').then(({ browser }) => browser) then isBrowser}
    {#if isBrowser}
      {@const observer = createIntersectionObserver(element, () => {
        isVisible = true;
        element.style.transitionDelay = `${delay}ms`;
      })}
    {/if}
  {/await}
{/if}
