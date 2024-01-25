<script setup lang="ts">
import TeamMemberCard from "./components/TeamMemberCard.vue";
import NavButton from "./components/NavigationButton.vue";

import { ref, computed, onMounted } from "vue";

const isVideoAvailable = false;
const displayNav = ref<number[]>([0, 0, 0, 0]);

type Member = {
  name: string,
  department: string
};

let members = ref<Member[]>([{
  name: "Șerban",
  department: "Programming",
}, {
  name: "Andreea",
  department: "Design",
}, {
  name: "Maia",
  department: "Design",
}, {
  name: "David",
  department: "CAD / Hardware",
}, {
  name: "Rareș",
  department: "Design",
}, {
  name: "Cristian",
  department: "Design",
}, {
  name: "Aayush",
  department: "Marketing",
}, {
  name: "Ștefan",
  department: "Design / CAD",
}, {
  name: "Alexia",
  department: "Marketing",
}]);

const displayMembers = computed(() => {
  let result: Member[] = members.value.concat(members.value);
  return result;
});

let leftShift = ref<number>(1780);
let direction = ref<number>(1);
let factor = ref<number>(0.2);

setInterval(() => {
  if (direction.value == 1) {
    leftShift.value -= factor.value;
    if(leftShift.value <= -640) {
      leftShift.value = 1780;
    }
  }
  else {
    leftShift.value += factor.value;
    console.log(leftShift.value);
    if(leftShift.value >= 1780) {
      leftShift.value = -640;
    }
  }
}, 1);

let lastScroll = Date.now() - 250;

function scroll(change: number) {
  if(Math.abs(Date.now() - lastScroll) > 250) {
    lastScroll = Date.now();
    direction.value = change;
    factor.value = 6;
    setTimeout(() => factor.value = 0.2, 200);
  }
}

onMounted(() => {
  let i = 0;
  setInterval(() => {
    if (i < 4) {
      displayNav.value[i] = 1;
      i++;
    }
  }, 200);
});

const computedLeft = computed(() => ({
  'left': `${leftShift.value}px`
}));
</script>

<template>
  <main id="app-container" class="app-container">
    <img id="banner" class="banner" alt="Mechabyte banner" src="../public/banner.png" />
    <video v-if="isVideoAvailable" autoplay loop>
      <source />
      Video not supported.
    </video>
    <img class="snapshot" v-else src="./assets/images/RobotsSnapshot.jpg" />
    <section id="about-us" class="about-us">
      <h1>About Us</h1>
      <div class="member-cards-section">
        <img class="arrow arrow-left" src="./assets/images/LeftArrow.png" @click="scroll(-1)" />
        <div class="container-container">
          <div class="member-cards" :style="{ ...computedLeft }">
            <TeamMemberCard class="team-member-card" v-for="(member, index) in displayMembers" :key="index" :member-name="member.name" :department="member.department" />
          </div>
        </div>
        <img class="arrow arrow-right" src="./assets/images/RightArrow.png" @click="scroll(1)" />
      </div>
      <p v-for="_ in 100">Lorem ipsum</p>
      </section>
    <section id="support-us" class="support-us">
      <h1>Support Us</h1>
      <p v-for="_ in 100">Lorem ipsum</p>
    </section>
    <section id="contact" class="contact">
      <h1>Contact</h1>
      <p v-for="_ in 100">Lorem ipsum</p>
    </section>
    <nav id="buttons-container" class="buttons-container">
      <NavButton button-name="Video" heading-id="banner" :style="{'scale': displayNav[0]}" />
      <NavButton button-name="User" heading-id="about-us" :style="{'scale': displayNav[1]}" />
      <NavButton button-name="Heart" heading-id="support-us" :style="{'scale': displayNav[2]}" />
      <NavButton button-name="Phone" heading-id="contact" :style="{'scale': displayNav[3]}" />
    </nav>
  </main>
</template>

<style scoped>
.app-container {
  padding-bottom: 2px;
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  gap: 0.5vw;
  position: relative;
}

.banner {
  width: 15vw;
  height: 10vw;
}

video, .snapshot {
  height: 37.5vw;
}

section {
  display: flex;
  width: clamp(68.75vw, 1200px, 90vw);
  padding: 0.5vw;
  flex-direction: column;
  align-items: flex-start;
  gap: 2vw;
}

h1 {
  position: sticky;
  top: -1px;
  background: var(--background-grey);
  width: 100%;
  z-index: 1100;
}

.member-cards-section {
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  padding: 0.5vw;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.arrow {
  width: 3.6vw;
  height: 6.4vw;
  z-index: 1050;
  cursor: pointer;
  position: relative;
}

.container-container {
  width: 1000px;
  overflow-x: hidden;
}

.member-cards {
  z-index: 1040;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  left: 0;
  right: 0;
  transition: left 0ms;
  transition: right 0ms;
}

.about-us,
.contact {
  border: 0.1vw solid var(--mechabyte-green);

  h1 {
    color: var(--mechabyte-green);
  }
}

.support-us {
  border: 0.1vw solid white;

  h1 {
    color: white;
  }
}

.buttons-container {
  z-index: 1200;
  position: fixed;
  left: 1vw;
  bottom: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1vw;
}

@media only screen and (max-width: 1000px) {
  .buttons-container {
    background: var(--background-grey);
    padding: 5px;
    flex-direction: row;
    width: 100vw;
    left: 0;
    bottom: 0;
    gap: 5vw;
    align-items: center;
    justify-content: center;
  }
  
  .nav-button {
    width: 70px;
    height: 70px;
  }

  .app-container {
    padding-bottom: 80px;
  }
}
</style>
