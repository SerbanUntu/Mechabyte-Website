<script setup lang="ts">
</script>

<template>
  <article id="app" class="app">
    <img class="banner" alt="Mechabyte banner" src="../public/banner.png" />
    <video width="1920" height="720" autoplay loop>
      <source src="./assets/videos/robots.mp4" />
      Video not supported.
    </video>
    <section id="about-us" class="about-us">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
    </section>
    <section id="support-us" class="support-us">
      <h1>Support Us</h1>
      <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
    </section>
    <section id="contact" class="contact">
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
    </section>
  </article>
</template>

<style scoped>
.app {
  display: flex;
  width: 1920px;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.banner {
  width: 300px;
  height: 200px;
}

section {
  display: flex;
  width: 1320px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
}

.about-us,
.contact {
  border: 2px solid var(--mechabyte-green);
  h1 {
    color: var(--mechabyte-green);
  }
}

.support-us {
  border: 2px solid white;
  h1 {
    color: white;
  }
}
</style>
