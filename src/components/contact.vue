<template>
  <div class="mainbg">
    <div class="layout-container" style="border-top: 2px solid rgba(255, 255, 255, 0.1);">
      <div
        class="  white--text py-16 px-10 center-align layout-container__inner"
        width="100%"
        :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
      >
        <div class="font-weight-bold  text-center ">
          To know more about me or my work,
          <p class="font-weight-bold">
            reach out to me at
            <span class="font-weight-bold gradient"
              ><a href="mailto:sovarana@iu.edu">sovarana@iu.edu</a></span
            >
          </p>
        </div>
      </div>
    </div>
    <div class="layout-container " style="border-top: 2px solid rgba(255, 255, 255, 0.1);">
      <div
        class="layout-container__inner py-6 white--text d-flex align-center justify-space-between"
      >
        <div>
          © Sourya Varanasi
        </div>
        <div class="d-flex grey--text">
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
          <v-btn
            href="https://www.instagram.com/sourya_sketches/"
            target="_blank"
            plain
            dark
            class="text-capitalize"
            >Instagram</v-btn
          >
          <v-btn
            href="https://www.behance.net/sourya"
            target="_blank"
            plain
            dark
            class="text-capitalize"
            >Behance</v-btn
          >
          <v-btn  href="https://www.github.com/sourybunny"
            target="_blank" plain dark class="text-capitalize">Github</v-btn>
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
