<script setup lang="ts">
import TeamMemberCard from "./components/TeamMemberCard.vue";
import NavButton from "./components/NavigationButton.vue";

import { ref, computed, onMounted } from "vue";

const isVideoAvailable = false;

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

let startPointer = ref<number>(0);
let endPointer = ref<number>(5);

let movingLeft = ref<boolean>(false);
let movingRight = ref<boolean>(false);

let lastCall: number = 0;
let lastAutoCall: number = Date.now();

function changeCards(change: number): void {
  if (Math.abs(lastCall - Date.now()) < 400) {
    return;
  } 
  lastCall = Date.now();
  lastAutoCall = Date.now();
  switch(change) {
    case -1: {
      startPointer.value -= 1;
      if(startPointer.value < 0) startPointer.value = members.value.length - 1;
      movingLeft.value = true;
      setTimeout(() => {
        endPointer.value -= 1;
        if(endPointer.value < 0) endPointer.value = members.value.length - 1;
        movingLeft.value = false;
      }, 350);
      break;
    }
    case 1: {
      endPointer.value += 1;
      if(endPointer.value > members.value.length - 1) endPointer.value = 0;
      movingRight.value = true;
      setTimeout(() => {
        startPointer.value += 1;
        if(startPointer.value > members.value.length - 1) startPointer.value = 0;
        movingRight.value = false;
      }, 350);
      break;
    }
  }
}

setInterval(() => {
  if(Math.abs(lastAutoCall - Date.now()) > 4000) {
    changeCards(1);
  }
}, 1000);

const displayMembers = computed(() => {
  let result: Member[] = [];
  let i: number = startPointer.value;
  while(i != endPointer.value) {
    result.push(members.value[i]);
    i++;
    if(i == members.value.length) i = 0;
  }
  result.push(members.value[i]);
  return result;
});
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
      <div class="member-cards-section" @mouseover="lastAutoCall = Date.now()">
        <img class="arrow arrow-left" @click="changeCards(-1)" src="./assets/images/LeftArrow.png" />
        <div class="container-container">
          <div :class="{'member-cards' : true, 'left-movement' : movingLeft, 'right-movement' : movingRight}">
            <TeamMemberCard class="team-member-card" v-for="(member, index) in displayMembers" :key="index" :member-name="member.name" :department="member.department" />
          </div>
        </div>
        <img class="arrow arrow-right" @click="changeCards(1)" src="./assets/images/RightArrow.png" />
      </div>
      </section>
    <section id="support-us" class="support-us">
      <h1>Support Us</h1>
    </section>
    <section id="contact" class="contact">
      <h1>Contact</h1>
    </section>
    <nav id="buttons-container" class="buttons-container">
      <NavButton button-name="Video" heading-id="banner" />
      <NavButton button-name="User" heading-id="about-us" />
      <NavButton button-name="Heart" heading-id="support-us" />
      <NavButton button-name="Phone" heading-id="contact" />
    </nav>
  </main>
</template>

<style scoped>
.app-container {
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  gap: 0.5vw;
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
  gap: 1vw;
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
  width: clamp(55vw, 1000px, 80vw);
  overflow-x: hidden;
}

.member-cards {
  z-index: 1040;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  left: 0;
  right: 0;
  transition: left 0ms;
  transition: right 0ms;
}

.left-movement {
  left: clamp(6.5vw, 130px, 15.6vw);
  transition: left 300ms;
}

.right-movement {
  left: calc(0vw - clamp(6.5vw, 130px, 15.6vw));
  transition: left 300ms;
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
  position: fixed;
  left: 1vw;
  bottom: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1vw;
}
</style>
