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
  src: {
    default: "",
    type: String
  }
});
</script>

<template>
  <div :id="`team-member-card-${props.memberName.toLowerCase()}`" class="team-member-card">
    <div class="card-photo-container">
      <Silhouette v-if="src == ''" class="silhouette" />
      <img v-if="src != ''" :src="`src/assets/images/${props.src}`" />
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
  width: 10vw;
  height: 15vw;
  justify-content: center;
  align-items: center;
  border-radius: 1vw;
  border: 1px solid var(--mechabyte-green);
  background: var(--mechabyte-grey);
}

img {
  width: 100%;
  height: 100%;
  border-radius: 1vw;
  object-fit: cover;
}

.silhouette {
  width: 5vw;
  height: calc(1.14 * 5vw);
}

.team-member-name {
  color: var(--mechabyte-green);
}
</style>