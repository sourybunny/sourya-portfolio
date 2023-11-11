<template>
  <div>
    <Intro />
    <Work />
    <!-- <Shorts /> -->

    <!-- <Aboutme id="about" /> -->
    <Contact />
  </div>
</template>

<script>
import Intro from "../components/intro2";
import Aboutme from "../components/aboutme";
import Contact from "../components/contact";
import Work from "../components/work";
import Shorts from "../components/shorts";
export default {
  components: {
    Intro,
    Aboutme,
    Contact,
    Work,
    Shorts,
  },
};
</script>

<style></style>
