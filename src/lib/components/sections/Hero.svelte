<script lang="ts">
  import { fly, scale } from 'svelte/transition';
  import { backOut, quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

<section class="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden">
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-grid-large opacity-[0.2]"></div>
  </div>
  <div class="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
  <div class="container mx-auto px-4 relative">
    <div class="max-w-4xl mx-auto text-center space-y-16">
      {#if !mounted}
        <div class="loader">
          <div class="loader-dot"></div>
          <div class="loader-dot"></div>
          <div class="loader-dot"></div>
        </div>
      {:else}
        <div class="space-y-12">
          <div class="space-y-8">
            <!-- Personal Info -->
            <div class="flex items-center justify-center gap-4 text-base text-muted-foreground/80">
              <div class="relative">
                <p 
                  transition:scale={{ duration: 200, delay: 50, easing: backOut }}
                  class="flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin relative z-10"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  Nairobi, Kenya
                </p>
                <div class="absolute left-[7px] top-[7px] -translate-x-1/2 -translate-y-1/2">
                  <div class="wave-ring"></div>
                  <div class="wave-ring" style="animation-delay: -3s;"></div>
                  <div class="wave-ring" style="animation-delay: -6s;"></div>
                </div>
              </div>
            </div>

            <!-- Role & Value Proposition -->
            <div class="space-y-6">
              <div class="space-y-2">
                <p 
                  transition:fly={{ y: 20, duration: 300, easing: quintOut }}
                  class="text-2xl font-semibold text-primary/90"
                >
                  Full Stack Developer
                </p>
                <h1 
                  transition:fly={{ y: 40, duration: 400, delay: 100, easing: quintOut }}
                  class="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
                >
                  Building
                  <span class="gradient-text">Scalable</span>
                  <br class="hidden md:block" />
                  Digital Solutions
                </h1>
              </div>
              <p 
                transition:fly={{ y: 60, duration: 400, delay: 200, easing: quintOut }}
                class="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed"
              >
                Solving complex problems with 
                <span class="text-foreground font-medium">code that speaks</span>. 
                Turning ideas into powerful, intuitive software
              </p>
              <div 
                transition:fly={{ y: 80, duration: 500, delay: 300, easing: quintOut }}
                class="flex justify-center"
              >
                <a 
                  href="mailto:calvinkimani475@gmail.com?subject=Project%20Collaboration%20Inquiry" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="group inline-flex items-center gap-2 px-6 py-3 rounded-full 
                         bg-primary text-primary-foreground 
                         hover:bg-primary/90 transition-colors duration-300 
                         shadow-md hover:shadow-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                  <span class="font-medium">Let's Build Your Idea</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .bg-grid-large {
    background-size: 100px 100px;
    background-image: 
      linear-gradient(to right, hsl(var(--muted-foreground) / 0.2) 1.5px, transparent 1.5px),
      linear-gradient(to bottom, hsl(var(--muted-foreground) / 0.2) 1.5px, transparent 1.5px);
  }

  .wave-ring {
    position: absolute;
    border: 1px solid hsl(var(--muted-foreground) / 0.15);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: ripple 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes ripple {
    0% {
      transform: scale(0.1);
      opacity: 0.2;
    }
    100% {
      transform: scale(50);
      opacity: 0;
    }
  }

  @keyframes wave {
    0% {
      background-position: 200% 0%;
    }
    100% {
      background-position: -100% 100%;
    }
  }

  .bg-grid-small {
    background-size: 30px 30px;
    background-image: 
      linear-gradient(to right, hsl(var(--muted-foreground) / 0.15) 1px, transparent 1px),
      linear-gradient(to bottom, hsl(var(--muted-foreground) / 0.15) 1px, transparent 1px);
    transform-origin: center;
  }

  .animate-grid-wave {
    animation: grid-wave 20s ease-in-out infinite;
  }

  .animate-grid-wave-delayed {
    animation: grid-wave 20s ease-in-out infinite;
    animation-delay: -10s;
  }

  @keyframes grid-wave {
    0%, 100% {
      transform: scale(1) rotate(0deg);
      opacity: 0.15;
    }
    25% {
      transform: scale(1.02) rotate(0.5deg);
      opacity: 0.2;
    }
    50% {
      transform: scale(1.01) rotate(-0.5deg);
      opacity: 0.15;
    }
    75% {
      transform: scale(1.03) rotate(0.25deg);
      opacity: 0.2;
    }
  }

  .gradient-text {
    background: linear-gradient(45deg, 
      hsl(var(--primary)) 0%,
      hsl(var(--primary)) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: bold;
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader-dot {
    width: 8px;
    height: 8px;
    margin: 0 4px;
    border-radius: 50%;
    background-color: currentColor;
    opacity: 0.5;
  }
</style>
