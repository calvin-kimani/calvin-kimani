<script lang="ts">
  import { onMount } from 'svelte';
  import { createIntersectionObserver } from '$lib/utils/animate';
  import { cn } from '$lib/utils';

  export interface ScrollRevealProps {
    delay?: number;
    duration?: number;
    class?: string;
    children: () => any;
  }

  let { 
    delay = 0, 
    duration = 300, 
    class: className = '',
    children 
  } = $props<ScrollRevealProps>();

  let element: HTMLElement;
  let isVisible = $state(false);

  onMount(() => {
    if (!element) return;
    
    const observer = createIntersectionObserver(element, (entry) => {
      if (entry.isIntersecting) {
        isVisible = true;
        element.style.transitionDelay = `${delay}ms`;
        observer.unobserve(element);
      }
    });
  });
</script>

<div
  bind:this={element}
  class={cn(
    'transition-all ease-out',
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    className
  )}
  style="--duration: {duration}ms; --delay: {delay}ms; transition-duration: {duration}ms;"
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
