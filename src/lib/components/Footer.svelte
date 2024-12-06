<script lang="ts">
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Portfolio',
      links: [
        { name: 'Home', href: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { name: 'Experience', href: '#experience', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { name: 'Projects', href: '#projects', icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' },
        { name: 'Contact', href: '/contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { 
          name: 'GitHub', 
          href: 'https://github.com/calvin-kimani', 
          external: true,
          icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
        },
        { 
          name: 'LinkedIn', 
          href: 'https://www.linkedin.com/in/calvin-kimani-5567a3231/', 
          external: true,
          icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
        },
        { 
          name: 'Email', 
          href: 'mailto:calvinkimani475@gmail.com',
          icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        }
      ]
    }
  ];
</script>

<footer class="border-t bg-muted/40 backdrop-blur-sm">
  <div class="container mx-auto px-6 py-16">
    <!-- Main Footer Content -->
    <div class="grid gap-12 md:grid-cols-2 lg:gap-16">
      {#each footerSections as section}
        <div>
          <h3 class="text-lg font-semibold mb-6 text-foreground/90">{section.title}</h3>
          <ul class="space-y-4">
            {#each section.links as link}
              <li>
                <a
                  href={link.href}
                  class="group flex items-center gap-3 text-muted-foreground/80 hover:text-foreground transition-colors"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  <svg 
                    class="w-5 h-5 opacity-75 group-hover:opacity-100 transition-opacity" 
                    fill={link.external ? "currentColor" : "none"} 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d={link.icon} />
                  </svg>
                  <span class="text-sm">{link.name}</span>
                  {#if link.external}
                    <svg class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  {/if}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Bottom Bar -->
    <div class="mt-16 pt-8 border-t border-border/50">
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="text-sm text-muted-foreground/80">
          {currentYear} Calvin Kimani. All rights reserved.
        </p>
        <p class="text-sm text-muted-foreground/60">
          Built with SvelteKit & Tailwind CSS
        </p>
      </div>
    </div>
  </div>
</footer>
