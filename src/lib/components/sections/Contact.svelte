<script lang="ts">
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/calvin-kimani',
      icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>`
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/calvin-kimani-5567a3231/',
      icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>`
    }
  ];
</script>

<style>
  .social-icon {
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .social-icon:hover {
    transform: scale(1.2) rotate(5deg);
  }
</style>

<div class="container mx-auto px-4 py-16 max-w-6xl">
  <div class="max-w-2xl mx-auto space-y-12">
    <div class="text-center space-y-4">
      <h2 class="text-3xl font-bold text-foreground">Let's Connect</h2>
      <p class="text-muted-foreground">
        Have a project in mind or just want to say hello? Feel free to reach out!
      </p>
    </div>

    <div class="flex items-center justify-center gap-4">
      <div class="p-3 rounded-lg bg-secondary/30">
        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <p class="text-sm font-medium">Email</p>
        <a href="mailto:calvinkimani475@gmail.com" class="text-muted-foreground hover:text-primary">
          calvinkimani475@gmail.com
        </a>
      </div>
    </div>

    <div class="flex justify-center gap-6 items-center">
      {#each socialLinks as social}
        <a 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-icon text-muted-foreground hover:text-primary"
          aria-label={`${social.name} Profile`}
        >
          {@html social.icon}
        </a>
      {/each}
    </div>
  </div>
</div>
