<script setup lang="ts">
import TeamMemberCard from "./components/TeamMemberCard.vue";

import { ref, computed } from "vue";

type Member = {
  name: string,
  department: string,
  src: string
};

let members = ref<Member[]>([{
  name: "Șerban",
  department: "Programming",
  src: "Serban.jpeg"
}, {
  name: "Andreea",
  department: "Design",
  src: ""
}, {
  name: "Maia",
  department: "Design",
  src: ""
}, {
  name: "David",
  department: "Design / CAD",
  src: ""
}, {
  name: "Rareș",
  department: "Design",
  src: ""
}, {
  name: "Cristian",
  department: "Design",
  src: ""
}, {
  name: "Aayush",
  department: "Marketing",
  src: ""
}, {
  name: "Ștefan",
  department: "Design / CAD",
  src: ""
}, {
  name: "Alexia",
  department: "Marketing",
  src: ""
}]);

let startPointer = ref<number>(0);
let endPointer = ref<number>(5);

let movingLeft = ref<boolean>(false);
let movingRight = ref<boolean>(false);

let lastCall: number = 0;
let lastAutoCall: number = Date.now();

function changeCards(change: number): void {
  if (Math.abs(lastCall - Date.now()) < 200) {
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
      }, 200);
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
      }, 200);
      break;
    }
  }
}

setInterval(() => {
  if(Math.abs(lastAutoCall - Date.now()) > 3000) {
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
  <article id="app-container" class="app-container">
    <img class="banner" alt="Mechabyte banner" src="../public/banner.png" />
    <video autoplay loop>
      <source src="./assets/videos/robots.mp4" />
      Video not supported.
    </video>
    <section id="about-us" class="about-us">
      <h1>About Us</h1>
      <div class="member-cards-section">
        <img class="arrow arrow-left" @click="changeCards(-1)" src="./assets/images/LeftArrow.png" />
        <div class="container-container">
          <div :class="{'member-cards' : true, 'left-movement' : movingLeft, 'right-movement' : movingRight}">
            <TeamMemberCard v-for="(member, index) in displayMembers" :key="index" :member-name="member.name" :department="member.department" :src="member.src" />
          </div>
        </div>
        <img class="arrow arrow-right" @click="changeCards(1)" src="./assets/images/RightArrow.png" />
      </div>
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
.app-container {
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.banner {
  width: 15vw;
  height: 10vw;
}

video {
  width: 100vw;
  height: 37.5vw;
}

section {
  display: flex;
  width: 68.75vw;
  padding: 0.5vw;
  flex-direction: column;
  align-items: flex-start;
  gap: 2vw;
}

.member-cards-section {
  position: relative;
  display: flex;
  width: 100%;
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
  width: 55vw;
  overflow: hidden;
}

.member-cards {
  z-index: 1040;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  left: 0px;
  right: 0px;
  transition: left 0ms;
  transition: right 0ms;
}

.left-movement {
  left: 6vw;
  transition: left 200ms;
}

.right-movement {
  left: -6vw;
  transition: left 200ms;
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
