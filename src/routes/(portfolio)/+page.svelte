<script lang="ts">
  import Hero from "$lib/components/sections/Hero.svelte";
  import TechStack from "$lib/components/sections/TechStack.svelte";
  import Experience from "$lib/components/sections/Experience.svelte";
  import Projects from "$lib/components/sections/Projects.svelte";
  import Contact from "$lib/components/sections/Contact.svelte";
  import ScrollReveal from "$lib/components/ScrollReveal.svelte";
</script>

<svelte:head>
  <title>Calvin Kimani - Full Stack Developer</title>
  <meta name="description" content="Calvin Kimani's portfolio showcasing full-stack development skills and innovative projects." />
</svelte:head>

<div class="space-y-24">
  <section id="home" class="container" aria-labelledby="home-title">
    <ScrollReveal>
      <Hero />
    </ScrollReveal>
  </section>

  <section id="tech-stack" class="container" aria-labelledby="tech-stack-title">
    <ScrollReveal>
      <TechStack />
    </ScrollReveal>
  </section>

  <section id="experience" class="container" aria-labelledby="experience-title">
    <ScrollReveal>
      <Experience />
    </ScrollReveal>
  </section>

  <section id="projects" class="container" aria-labelledby="projects-title">
    <ScrollReveal>
      <Projects />
    </ScrollReveal>
  </section>

  <section id="contact" class="container" aria-labelledby="contact-title">
    <ScrollReveal>
      <Contact />
    </ScrollReveal>
  </section>
</div>
