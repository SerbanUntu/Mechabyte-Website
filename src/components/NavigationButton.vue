<script setup lang="ts">
const props = defineProps({
  buttonName: String,
  source: String,
  headingId: String,
});
</script>

<template>
  <article :id="`${props.buttonName}-button`" class="nav-button">
    <a :href="`#${props.headingId}`" />
    <section class="button-icon-container">
      <img :src="`src/assets/images/${props.source}`" />
    </section>
  </article>
</template>

<style scoped>
.nav-button {
  border-radius: 100%;
  background: var(--dark-grey);
  box-shadow: 0 0.15vw 0.1vw 0.1vw hsl(0deg 0% 0% / 25%);
  display: flex;
  width: 3vw;
  height: 3vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 200ms;
  cursor: pointer;
  position: relative;
}

a {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.nav-button:hover {
  background: hsl(0deg 0% 17% / 100%);
  transition: 200ms;
}

.nav-button:active {
  background: var(--mechabyte-green);
  transition: 0ms;
}

.button-icon-container {
  display: flex;
  width: 50%;
  height: 50%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  stroke: var(--mechabyte-grey);
}

img {
  width: 100%;
  height: 100%;
}
</style>