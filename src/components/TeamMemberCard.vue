<script setup lang="ts">
import { computed } from 'vue';

import Silhouette from './icons/Silhouette.vue';

const props = defineProps({
  memberName: {
    default: "John D.",
    type: String
  },
  department: {
    default: "Department",
    type: String
  }
});
</script>

<template>
  <section :id="`team-member-card-${props.memberName.toLowerCase()}`" class="team-member-card">
    <article class="card-photo-container">
      <img v-if="props.memberName == 'Aayush'" src="../assets/images/photos/Aayush.jpeg" />
      <img v-else-if="props.memberName == 'Alexia'" src="../assets/images/photos/Alexia.jpeg" />
      <img v-else-if="props.memberName == 'Andreea'" src="../assets/images/photos/Andreea.jpeg" />
      <img v-else-if="props.memberName == 'Cristian'" src="../assets/images/photos/Cristian.jpeg" />
      <img v-else-if="props.memberName == 'David'" src="../assets/images/photos/David.jpeg" />
      <img v-else-if="props.memberName == 'Maia'" src="../assets/images/photos/Maia.jpeg" />
      <img v-else-if="props.memberName == 'Rareș'" src="../assets/images/photos/Rares.jpeg" />
      <img v-else-if="props.memberName == 'Șerban'" src="../assets/images/photos/Serban.jpeg" />
      <img v-else-if="props.memberName == 'Ștefan'" src="../assets/images/photos/Stefan.jpeg" />
      <Silhouette v-else class="silhouette" />
    </article>
    <em class="team-member-name">{{ props.memberName }}</em>
    <p class="team-member-department">{{ props.department }}</p>
  </section>
</template>

<style scoped>
.team-member-card {
  display: inline-flex;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.card-photo-container {
  display: flex;
  width: 200px;
  height: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 0.05vw solid var(--mechabyte-green);
  background: var(--mechabyte-grey);
  cursor: pointer;
}

.card-photo-container:hover {
  box-shadow: 0 0 0.5vw 0.1vw var(--mechabyte-green);
}

img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}

.silhouette {
  width: 100px;
  height: 114px;
}

.team-member-name {
  color: var(--mechabyte-green);
  font-weight: 600;
  font-size: clamp(12px, 24px, 2vw);
}
</style>