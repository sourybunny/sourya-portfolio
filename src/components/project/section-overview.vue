<template>
  <div
    class="section-overview"
    :class="is_dark ? 'section-overview--dark' : ''"
  >
    <v-layout wrap>
      <v-flex xs12 sm6>
        <p class="section-overview--title"> <span v-if="left" class="emphasize-title">{{emphasize}}</span> {{ title }} <span v-if="right" class="emphasize-title">{{emphasize}}</span></p>
      </v-flex>
      <v-flex xs12 sm6>
        <p class="section-overview-body">
          <slot></slot>
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    title: "",
    description: "",
    is_dark: false,
    left: false,
    right: false,
    emphasize: '',
  },
};
</script>

<style lang="scss" scoped>
.section-overview {
  margin-top: 3rem;
  margin-bottom: 3rem;
  &--dark {
    color: white;
    .section-overview-body {
    color: #a0a0a0;
    }
    }
  &--title {
    font-size: 40px;
    line-height: 52px;
    max-width: 85%;
    // font-family: Georgia, "Times New Roman", Times, serif;
  }
.emphasize-title {
  font-family: 'Tiempos-Text','Georgia', "Times New Roman", Times, serif;
  font-style: italic;
}
  &-body {
    font-size: 18px;
    line-height: 27px;
    font-weight: 300;
    // opacity:80%;
  }
}
@media screen and (max-width: 500px) and (orientation: portrait) {
  .section-overview {
    &--title {
      font-size: 32px;
      line-height: 42px;
      max-width: 90%;
    }
  }
}
</style>