<script lang="ts">
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/calvin-kimani',
      icon: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>`
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/calvin-kimani-5567a3231/',
      icon: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>`
    }
  ];
</script>

<svelte:head>
  <title>Contact | Calvin Kimani</title>
  <meta name="description" content="Get in touch with Calvin Kimani for collaboration, opportunities, or just to say hello." />
</svelte:head>

<div class="container mx-auto px-4 py-16 max-w-4xl">
  <div class="space-y-16">
    <!-- Header -->
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold tracking-tight">Get in Touch</h1>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        I'm always interested in hearing about new projects and opportunities.
        Feel free to reach out through any of these channels.
      </p>
    </div>

    <!-- Contact Methods -->
    <div class="grid gap-8 md:grid-cols-2">
      <!-- Email -->
      <div class="flex flex-col items-center p-8 rounded-xl bg-secondary/30 space-y-4">
        <div class="p-4 rounded-full bg-primary/10">
          <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 class="text-xl font-semibold">Email</h2>
        <a 
          href="mailto:calvinkimani475@gmail.com" 
          class="text-muted-foreground hover:text-primary transition-colors"
        >
          calvinkimani475@gmail.com
        </a>
      </div>

      <!-- Social -->
      <div class="flex flex-col items-center p-8 rounded-xl bg-secondary/30 space-y-4">
        <div class="p-4 rounded-full bg-primary/10">
          <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        </div>
        <h2 class="text-xl font-semibold">Social Media</h2>
        <div class="flex gap-6">
          {#each socialLinks as social}
            <a 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              aria-label={social.name}
            >
              {@html social.icon}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
