<script lang="ts">
  import { skills } from '$lib/data/skills';
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let selectedCategory: string = 'all';
  
  $: filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'devops', name: 'DevOps' },
    { id: 'tools', name: 'Tools' }
  ];
</script>

<div class="space-y-8">
  <div class="flex flex-wrap gap-4 justify-center">
    {#each categories as category}
      <button
        class="px-4 py-2 rounded-full text-sm font-medium transition-colors
               {selectedCategory === category.id 
                 ? 'bg-primary text-primary-foreground' 
                 : 'bg-muted hover:bg-muted/80'}"
        on:click={() => selectedCategory = category.id}
      >
        {category.name}
      </button>
    {/each}
  </div>

  <div 
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    in:fade={{ duration: 200 }}
  >
    {#each filteredSkills as skill, i (skill.name)}
      <div
        class="p-6 rounded-lg border bg-card"
        in:fly={{ 
          y: 20, 
          delay: i * 50, 
          duration: 300, 
          easing: quintOut 
        }}
      >
        <div class="flex items-center gap-4 mb-4">
          <i class="{skill.icon} text-2xl" />
          <h3 class="font-medium">{skill.name}</h3>
        </div>
        
        <div class="space-y-2">
          <div class="h-2 bg-muted rounded-full overflow-hidden">
            <div
              class="h-full bg-primary transition-all duration-500 ease-out rounded-full"
              style="width: {skill.level}%"
            />
          </div>
          <div class="text-sm text-muted-foreground text-right">
            {skill.level}%
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
