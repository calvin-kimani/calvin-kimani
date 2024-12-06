<script lang="ts">
  import ScrollReveal from "$lib/components/ScrollReveal.svelte";
</script>

<svelte:head>
  <title>Resume | Calvin Kimani</title>
  <meta name="description" content="View Calvin Kimani's professional resume and download a PDF version." />
</svelte:head>

<div class="container mx-auto px-6 py-12">
  <div class="max-w-3xl mx-auto">
    <ScrollReveal>
      <div class="flex justify-between items-start mb-12">
        <div>
          <h1 class="text-4xl font-bold mb-2">Calvin Kimani</h1>
          <p class="text-xl text-muted-foreground">Full Stack Developer</p>
        </div>
        <a
          href="/resume.pdf"
          download
          class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Download PDF
        </a>
      </div>
    </ScrollReveal>

    <div class="space-y-12">
      <ScrollReveal delay={200}>
        <section>
          <h2 class="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p class="text-muted-foreground">
            Full Stack Developer with 6+ years of experience building scalable web applications. 
            Proficient in modern frontend frameworks, backend development, and cloud technologies. 
            Strong focus on writing clean, maintainable code and delivering exceptional user experiences.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <section>
          <h2 class="text-2xl font-semibold mb-4">Skills</h2>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 class="font-medium mb-2">Frontend</h3>
              <ul class="list-disc list-inside text-muted-foreground">
                <li>React.js / Next.js</li>
                <li>Svelte / SvelteKit</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium mb-2">Backend</h3>
              <ul class="list-disc list-inside text-muted-foreground">
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>PostgreSQL / MongoDB</li>
                <li>REST APIs / GraphQL</li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={600}>
        <section>
          <h2 class="text-2xl font-semibold mb-4">Work Experience</h2>
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-2">
                <h3 class="font-medium">Senior Full Stack Developer</h3>
                <span class="text-muted-foreground">2021 - Present</span>
              </div>
              <p class="text-primary mb-2">Tech Innovation Corp</p>
              <ul class="list-disc list-inside text-muted-foreground">
                <li>Led development of high-traffic e-commerce platform</li>
                <li>Implemented CI/CD pipelines reducing deployment time</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <h3 class="font-medium">Full Stack Developer</h3>
                <span class="text-muted-foreground">2019 - 2021</span>
              </div>
              <p class="text-primary mb-2">Digital Solutions Inc</p>
              <ul class="list-disc list-inside text-muted-foreground">
                <li>Developed and maintained client-facing web applications</li>
                <li>Integrated third-party APIs and payment gateways</li>
                <li>Improved mobile UX and responsive designs</li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={800}>
        <section>
          <h2 class="text-2xl font-semibold mb-4">Education</h2>
          <div>
            <h3 class="font-medium">Bachelor of Science in Computer Science</h3>
            <p class="text-muted-foreground">University Name • 2013 - 2017</p>
          </div>
        </section>
      </ScrollReveal>
    </div>
  </div>
</div>
