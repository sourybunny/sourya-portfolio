<template>
  <div>
    <Intro />
    <Work />
    <Aboutme id="about" />
    <Contact />
  </div>
</template>

<script>
import Intro from "../components/intro";
import Aboutme from "../components/aboutme";
import Contact from "../components/contact";
import Work from "../components/work";
export default {
  components: {
    Intro,
    Aboutme,
    Contact,
    Work,
  },
};
</script>

<style></style>
