<script lang="ts">
  const technologies = [
    { name: 'Web Trio', desc: 'JavaScript, HTML, CSS', icon: 'javascript/javascript-original' },
    { name: 'Figma', desc: 'Interface design tool.', icon: 'figma/figma-original' },
    { name: 'React', desc: 'UI Library for web apps', icon: 'react/react-original' },
    { name: 'Svelte/Kit', desc: 'UI Library for web apps', icon: 'svelte/svelte-original' },
    { name: 'TypeScript', desc: 'Typed JavaScript', icon: 'typescript/typescript-original' },
    { name: 'Python', desc: 'Versatile programming', icon: 'python/python-original' },
    { name: 'Git', desc: 'Version control', icon: 'git/git-original' },
    { name: 'C/C++', desc: 'Systems programming', icon: 'cplusplus/cplusplus-original' },
    { name: 'Laravel', desc: 'PHP framework', icon: 'laravel/laravel-original' },
    { name: 'PostgreSQL', desc: 'SQL database', icon: 'postgresql/postgresql-original' },
    { name: 'MongoDB', desc: 'NoSQL database', icon: 'mongodb/mongodb-original' }
  ];
</script>

<section class="py-24">
  <div class="container max-w-4xl">
    <div class="space-y-2 mb-16">
      <h2 class="text-3xl font-bold">Technologies</h2>
      <p class="text-muted-foreground">Tools and technologies I work with</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each technologies as tech, i}
        <div
          class="tech-card px-3 py-2 rounded-lg bg-secondary/30 backdrop-blur-sm hover:bg-secondary/40 transition-colors flex items-start gap-2 border border-border/50"
          in:fly={{
            y: 20,
            duration: 400,
            delay: i * 100,
            easing: quintOut
          }}
        >
          <img
            src={tech.customIcon || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`}
            alt={tech.name}
            class="tech-icon w-6 h-6 mt-[2px]"
          />
          <div class="flex flex-col items-start">
            <span
              class="text-sm font-medium text-foreground"
              in:fade={{
                duration: 200,
                delay: (i * 100) + 200
              }}
            >{tech.name}</span>
            <span
              class="text-[10px] text-muted-foreground"
              in:fade={{
                duration: 200,
                delay: (i * 100) + 300
              }}
            >{tech.desc}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>