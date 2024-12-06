<script lang="ts">
  const experience = [
    {
      title: "Freelance Software Developer",
      company: "Upwork",
      companyUrl: "https://www.upwork.com",
      period: "Mar 2021 - Present",
      achievements: [
        "Developed high-performance software and web applications using JavaScript (Svelte Js, React Js), leading to improved user engagement",
        "Enhanced functionality and performance of software applications by analyzing and resolving issues",
        "Created scalable, reliable code to meet business demands, reducing bugs by 30%",
        "Enhanced data efficiency by implementing SQL and other relational database systems"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "TUKZone",
      companyUrl: "https://tukzone.me",
      period: "2023 - Present",
      achievements: [
        "Built and launched a social networking platform for The Technical University of Kenya students using SvelteKit, TypeScript, and PostgreSQL",
        "Implemented real-time messaging, notifications, and campus event management features",
        "Designed and developed a responsive, accessible UI with modern web technologies",
        "Currently maintaining and iterating based on user feedback and analytics"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "AutomobileHub",
      companyUrl: "https://automobilehub.store",
      period: "2023 - Present",
      achievements: [
        "Developed a comprehensive e-commerce platform for automotive parts using SvelteKit and PostgreSQL",
        "Implemented secure payment processing and real-time inventory management",
        "Created an intuitive admin dashboard for order and inventory management",
        "Optimized performance and SEO for better user experience and visibility"
      ]
    }
  ];
</script>

<section class="py-24">
  <div class="container max-w-4xl">
    <div class="space-y-2 mb-16">
      <h2 class="text-3xl font-bold">Experience</h2>
      <p class="text-muted-foreground">My professional journey in software development</p>
    </div>
    
    <div class="space-y-12">
      {#each experience as job}
        <div class="group relative pl-8 before:absolute before:left-0 before:top-[6px] before:h-full before:w-[1px] before:bg-border before:content-[''] last:before:h-[6px]">
          <div class="absolute left-0 top-[6px] h-3 w-3 -translate-x-[5px] rounded-full border-2 border-primary bg-background"></div>
          <div class="space-y-4">
            <div>
              <div class="flex items-center gap-4">
                <h3 class="text-lg font-medium">{job.title}</h3>
                <div class="h-[1px] flex-1 bg-border/50"></div>
                <span class="text-sm text-muted-foreground whitespace-nowrap">{job.period}</span>
              </div>
              <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">{job.company}</a>
            </div>
            <ul class="space-y-2 text-muted-foreground">
              {#each job.achievements as achievement}
                <li class="relative pl-6">
                  <span class="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-primary/60"></span>
                  {achievement}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
