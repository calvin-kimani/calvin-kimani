<script lang="ts">
  import { navigating } from '$app/stores';
</script>

<style>
  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    z-index: 9999;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .loader-container.active {
    opacity: 1;
  }

  .loader {
    display: flex;
    gap: 0.5rem;
  }

  .loader-dot {
    width: 12px;
    height: 12px;
    background-color: hsl(var(--primary));
    border-radius: 50%;
    animation: pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    opacity: 0.7;
  }

  .loader-dot:nth-child(2) {
    animation-delay: 0.4s;
  }

  .loader-dot:nth-child(3) {
    animation-delay: 0.8s;
  }

  @keyframes pulse {
    0%, 100% { 
      transform: scale(0.7);
      opacity: 0.5;
    }
    50% { 
      transform: scale(1);
      opacity: 1;
    }
  }
</style>

{#if $navigating}
  <div class="loader-container active">
    <div class="loader">
      <div class="loader-dot"></div>
      <div class="loader-dot"></div>
      <div class="loader-dot"></div>
    </div>
  </div>
{/if}
