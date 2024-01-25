<script setup lang="ts">
const props = defineProps({
  buttonName: String,
  headingId: String
});
</script>

<template>
  <article :id="`${props.buttonName?.toLowerCase()}-button`" class="nav-button">
    <a :href="`#${props.headingId}`" />
    <section class="button-icon-container">
      <img v-if="props.buttonName == 'Video'" src="../assets/images/button_icons/nav/Video.png" />
      <img v-else-if="props.buttonName == 'User'" src="../assets/images/button_icons/nav/User.png" />
      <img v-else-if="props.buttonName == 'Heart'" src="../assets/images/button_icons/nav/Heart.png" />
      <img v-else-if="props.buttonName == 'Phone'" src="../assets/images/button_icons/nav/Phone.png" />
    </section>
  </article>
</template>

<style scoped>
.nav-button {
  border-radius: 100%;
  background: var(--dark-grey);
  box-shadow: 0 0.15vw 0.1vw 0.1vw hsl(0deg 0% 0% / 25%);
  display: flex;
  width: 60px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  cursor: pointer;
  position: relative;
}

a {
  z-index: 2000;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.nav-button:hover {
  background: hsl(0deg 0% 17% / 100%);

  img {
    opacity: 1;
  }
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
  opacity: 0.8;
  transition: opacity 200ms;
}
</style>