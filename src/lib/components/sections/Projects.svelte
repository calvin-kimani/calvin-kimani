<script lang="ts">
  import { Button } from "$lib/components/ui/button";

  const projects = [
    {
      title: "Ice",
      description: "Cutting-edge web application for cybersecurity documentation needs.",
      tags: ["Web App", "Cybersecurity", "Documentation"],
      link: "https://github.com/calvin-kimani/Ice",
      date: "2024-02-11",
      cover: "https://raw.githubusercontent.com/calvin-kimani/Ice/main/screenshots/ice1.png"
    },
    {
      title: "React JetStream",
      description: "Laravel Jetstream inspired UI starter kit for React projects with authentication interfaces.",
      tags: ["React", "Tailwind CSS", "Authentication"],
      link: "https://github.com/calvin-kimani/react-jetstream",
      date: "2024-03-25",
      cover: "https://raw.githubusercontent.com/calvin-kimani/react-jetstream/main/screenshots/Welcome.png"
    },
    {
      title: "Sparta",
      description: "Modern JavaScript framework built on MVC architecture to streamline web application development.",
      tags: ["JavaScript", "Framework", "MVC"],
      link: "https://github.com/calvin-kimani/sparta",
      date: "2024-03-24"
    }
  ];
</script>

<section class="py-24">
  <div class="container max-w-4xl">
    <h2 class="text-3xl font-bold mb-16">Open Source</h2>

    <div class="space-y-12">
      {#each projects as project}
        <div class="group">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            class="block space-y-4 p-6 -mx-6 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-xl font-medium">{project.title}</h3>
              <svg 
                class="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            <p class="text-muted-foreground">{project.description}</p>

            <div class="flex justify-between items-center">
              <div class="flex flex-wrap gap-2">
                {#each project.tags as tag}
                  <span class="text-xs text-muted-foreground">{tag}</span>
                {/each}
              </div>
              <span class="text-xs text-muted-foreground">{project.date}</span>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
