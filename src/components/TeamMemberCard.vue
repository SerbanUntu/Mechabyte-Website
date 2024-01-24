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
  },
  source: {
    default: "",
    type: String
  }
});
</script>

<template>
  <div :id="`team-member-card-${props.memberName.toLowerCase()}`" class="team-member-card">
    <div class="card-photo-container">
      <Silhouette v-if="source == ''" class="silhouette" />
      <img v-if="source != ''" :src="`../../src/assets/images/${props.source}`" />
    </div>
    <em class="team-member-name">{{ props.memberName }}</em>
    <p class="team-member-department">{{ props.department }}</p>
  </div>
</template>

<style scoped>
.team-member-card {
  display: inline-flex;
  padding: 0.25vw;
  flex-direction: column;
  align-items: center;
  gap: 0.5vw;
}

.card-photo-container {
  display: flex;
  width: clamp(10vw, 200px, 24vw);
  height: clamp(15vw, 300px, 36vw);
  justify-content: center;
  align-items: center;
  border-radius: 1vw;
  border: 0.05vw solid var(--mechabyte-green);
  background: var(--mechabyte-grey);
  cursor: pointer;
}

.card-photo-container:hover {
  box-shadow: 0 0 0.25vw 0.05vw var(--mechabyte-green);
}

img {
  width: 100%;
  height: 100%;
  border-radius: 1vw;
  object-fit: cover;
}

.silhouette {
  width: clamp(5vw, 100px, 12vw);
  height: clamp(5.7vw, 114px, 13.68vw);
}

.team-member-name {
  color: var(--mechabyte-green);
}
</style>