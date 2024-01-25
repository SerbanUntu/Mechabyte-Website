<script setup lang="ts">
import TeamMemberCard from "./components/TeamMemberCard.vue";
import NavButton from "./components/NavigationButton.vue";

import { ref, computed, onMounted } from "vue";

const displayNav = ref<number[]>([0, 0, 0, 0]);

type Member = {
  name: string,
  department: string
};

let members = ref<Member[]>([{
  name: "Andreea",
  department: "Mentor"  
}, {
  name: "Șerban",
  department: "Programming"
}, {
  name: "Cristian",
  department: "Hardware"
}, {
  name: "Maia",
  department: "Hardware"
}, {
  name: "Rareș",
  department: "Hardware"
}, {
  name: "David",
  department: "CAD"
}, {
  name: "Ștefan",
  department: "CAD"
}, {
  name: "Aayush",
  department: "Marketing"
}, {
  name: "Alexia",
  department: "Marketing"
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
    <iframe id="video" class="video" src="https://www.youtube.com/embed/6e-5Uo1dRic?autoplay=1&mute=1&rel=0&loop=1&playlist=6e-5Uo1dRic" frameborder="0" loop>
      Video not supported.
    </iframe>
    <section id="about-us" class="about-us section">
      <h1>About Us</h1>
      <article class="member-cards-section">
        <img class="arrow arrow-left" src="./assets/images/button_icons/arrows/LeftArrow.png" @click="scroll(-1)" />
        <section class="container-container">
          <article class="member-cards" :style="{ ...computedLeft }">
            <TeamMemberCard class="team-member-card" v-for="(member, index) in displayMembers" :key="index" :member-name="member.name" :department="member.department" />
          </article>
        </section>
        <img class="arrow arrow-right" src="./assets/images/button_icons/arrows/RightArrow.png" @click="scroll(1)" />
      </article>
      <p>Welcome to the exciting world of innovation and technology at <strong>Mechabyte</strong>! Our team is a dynamic group of passionate students, dedicated mentors, and supportive community members who come together to explore, create, and compete in the thrilling realm of robotics.</p>
      <p>Our team is comprised of students from diverse backgrounds, each bringing their unique talents, ideas, and perspectives to the table. We encourage creativity, critical thinking, and problem-solving skills as we work together to design, build, and program robots for various competitions and challenges.</p>
      <p>We strive to participate in the regional and national phases of FTC, where our members will put their skills to the test and engage with like-minded peers from across the country. These competitions not only provide a platform for friendly competition but also serve as an opportunity for our team members to network, learn, and grow as individuals.</p>
      <p>Join us on this thrilling adventure as we explore the limitless possibilities of robotics and inspire the next generation of innovators and engineers. Whether you're a seasoned robotics enthusiast or a newcomer with a passion for learning, there's a place for you at <strong>Mechabyte</strong>. Together, let's build a future where technology meets creativity, and possibilities are endless!</p>
      </section>
    <section id="support-us" class="support-us section">
      <h1>Support Us</h1>
      <p>Please</p>
    </section>
    <section id="contact" class="contact section">
      <h1>Contact</h1>
      <section class="links">
        <article id="instagram-button" class="link-container">
          <a href="https://www.instagram.com/mechabyte22590?igsh=MXh4ZGZ5MXRqbTlwZQ==" target="_blank"></a>
          <img src="./assets/images/button_icons/contact/Instagram.png" />
        </article>
        <article id="facebook-button" class="link-container">
          <a href="https://www.facebook.com/profile.php?id=61555837916386" target="_blank"></a>
          <img src="./assets/images/button_icons/contact/Facebook.png" />
        </article>
        <article id="email-button" class="link-container">
          <a href="mailto:mechabyte22590@gmail.com" target="_blank"></a>
          <img src="./assets/images/button_icons/contact/Mail.png" />
        </article>
      </section>
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

.video {      
  position: relative;
  width: calc((100vh - 10.5vw) * 16 / 9);
  max-width: 100vw;
  height: calc(100vw * 9 / 16);
  max-height: calc(100vh - 10.5vw);
}

.section {
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
  left: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4vw;
  width: 100%;
  position: relative;
}

.link-container {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 100px;
  border: 2px solid var(--mechabyte-green);
  transition: 200ms;

  a {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  img {
    width: 70px;
    height: 70px;
  }
}

.link-container:hover {
  background: var(--dark-grey);
}

@media only screen and (max-width: 1360px) {
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

  .video {
    width: calc((100vh - 10.5vw - 80px) * 16 / 9);
    max-height: calc(100vh - 10.5vw - 80px);
  }
}
</style>
