<template>
  <div class="mainbg is-relative">
    <!-- <img
      class="is-absolute" height="80%"
      :src="require(`@/assets/media/intro/grid.svg`)"
    /> -->
    <div class="layout-container">
      <div
        class="white--text py-16 layout-container__inner"
        :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
      >
        <img data-aos="slide-down"  data-aos-easing="ease-in-out" data-aos-delay="500" data-aos-duration="500" 
          width="100"
          height="100%"
          class="sticker"
          :src="require(`@/assets/media/stickers/thanks.png`)"
        />
        <p class="pb-16 font-weight-medium">
          Thanks for visiting <br />
          my <span class="portfolio-gradient">portfolio</span>.
        </p>
        <!-- <div class="font-weight-bold text-center ">
          To know more about me or my work,
          <p class="font-weight-bold">
            reach out to me at
            <span class="font-weight-bold gradient"
              ><a href="mailto:sourya0411@gmail.com">sourya0411@gmail.com</a></span
            >
          </p>
        </div> -->
      </div>
    </div>
    <div
      class="layout-container"
      style="border-top: 2px solid rgba(255, 255, 255, 0.1)"
    >
      <div
        class="layout-container__inner py-6 white--text d-flex flex-wrap align-center justify-space-between"
      >
        <div>© Sourya Varanasi - Design & Code</div>
        <div class="d-flex align-center grey--text">
          <v-btn
            @click.stop="$router.push({ path: '/about' })"
            plain
            dark
            class="text-capitalize"
            >Bio</v-btn
          >
          <v-btn
            href="https://www.linkedin.com/in/souryav/"
            target="_blank"
            plain
            dark
            class="text-capitalize"
            >Linkedin</v-btn
          >
          <!-- <v-btn
            href="https://www.instagram.com/sourya_sketches/"
            target="_blank"
            plain
            dark
            class="text-capitalize"
            >Instagram</v-btn
          > -->
          <v-btn
            href="https://www.behance.net/sourya"
            target="_blank"
            plain
            dark
            class="text-capitalize"
            >Behance</v-btn
          >
          <v-btn
            href="https://www.github.com/sourybunny"
            target="_blank"
            plain
            dark
            class="text-capitalize"
            >Github</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isActive: true,
    };
  },
};
</script>

<style></style>
