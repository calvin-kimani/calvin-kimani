<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import ScrollReveal from "$lib/components/ScrollReveal.svelte";

  const skills = [
    { category: 'Frontend', technologies: ['React', 'Svelte', 'TypeScript', 'TailwindCSS'] },
    { category: 'Backend', technologies: ['Node.js', 'Laravel', 'Python', 'Express'] },
    { category: 'Databases', technologies: ['PostgreSQL', 'MongoDB', 'MySQL'] },
    { category: 'Tools', technologies: ['Git', 'Docker', 'AWS', 'Vercel'] }
  ];
</script>

<div class="grid md:grid-cols-2 gap-12 items-center">
  <div class="space-y-6">
    <h2 class="text-3xl md:text-4xl font-semibold">
      Crafting Digital Experiences
      <span class="block text-primary text-2xl mt-2">With Precision and Creativity</span>
    </h2>
    <p class="text-lg text-muted-foreground">
      As a Full Stack Developer, I transform complex challenges into elegant, user-centric solutions. 
      My approach blends technical expertise with creative problem-solving, ensuring every project 
      is both functionally robust and visually compelling.
    </p>
    <div class="flex gap-4">
      <Button href="/about" variant="default">More about me</Button>
      <Button href="/resume" variant="outline">View Resume</Button>
    </div>
  </div>

  <div class="space-y-6">
    {#each skills as { category, technologies }}
      <div class="space-y-3">
        <h3 class="text-xl font-medium">{category}</h3>
        <div class="flex flex-wrap gap-2">
          {#each technologies as tech}
            <span class="text-sm text-muted-foreground px-3 py-1 rounded-full">{tech}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
