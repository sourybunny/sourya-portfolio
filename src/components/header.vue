<template>
  <div class="layout-container navbar">
    <div class="px-sm-4 px-md-16">
      <div class="d-flex align-center justify-space-between">
        <div
          @click.stop="$router.push({ path: '/' })"
          class="d-flex align-center is-pointer"
        >
          <!-- <img width="44" class="ma-1" :src="require(`@/assets/media/intro/logo.svg`)" /> -->
          <img width="130" class="ma-1" :src="require(`@/assets/media/intro/header-logo.png`)" />
          <v-btn
            plain
            dark
            class="text-capitalize"
            @click.stop="$router.push({ path: '/' })"
          >
            Work
          </v-btn>
        </div>
        <div class="d-flex align-center">
          <v-btn
            plain
            dark
            class="text-capitalize"
            @click.stop="$router.push({ path: '/about' })"
          >
            About
          </v-btn>
          <v-btn
            plain
            dark
            class="text-capitalize"
            @click.stop="$router.push({ path: '/shots' })"
          >
            Visuals
          </v-btn>
          <v-btn
            plain
            target="_blank"
            :href="'https://drive.google.com/file/d/1jHMl659Nz0ijDHgk1lbjpCal7TgA_Btd/view?usp=sharing'"
            dark
            class="text-capitalize"
          >
            Resume
            <img
              :src="require(`@/assets/media/me/linkwhite.svg`)"
              alt="arrow"
            />
          </v-btn>
                <v-btn
                  href="https://www.linkedin.com/in/souryav/"
                  target="_blank"
                  plain
                  dark
                  class="text-capitalize"
                >
                  Linkedin
                  <img
                    :src="require(`@/assets/media/me/linkwhite.svg`)"
                    alt="arrow"
                  />
                </v-btn>
          <!-- <v-btn href="mailto:sourya0411@gmail.com" target="_blank" plain dark v-bind="attrs" v-on="on"
            class="text-lowercase">
            sourya0411@gmail.com
          </v-btn> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./logo.vue";
export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
.navbar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  // background: #FEFDF9;
}
.removeBorder {
  .layout-container__inner {
    border: 0;
  }
}
</style>
