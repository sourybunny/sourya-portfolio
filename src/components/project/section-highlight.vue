<template>
  <div class="section-highlight d-flex flex-column align-center justify-center">
    <div v-if="!is_quote" class="section-highlight--content text-center">
      <slot></slot>
      <slot name="description"></slot>
    </div>
    <div v-else class="text-center">
      <!-- <hr v-if="is_underline" /> -->
      <img
        v-if="sticker"
        width="100"
        height="100%"
        class="sticker"
        :src="require(`@/assets/media/stickers/${sticker}.png`)"
      />
      <div class="section-highlight--quote smooth-shadow text-center">
        <slot></slot>
      </div>
      <slot name="description"></slot>
      <!-- <hr v-if="is_underline"/> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: "",
    is_underline: false,
    is_quote: false,
    sticker: "",
  },
};
</script>
<style lang="scss" scoped>
.section-highlight {
  // padding: 4rem;
  // width: 80%;
  margin: 2rem auto;
  hr {
    width: 6rem;
    margin: 1rem auto;
  }
  &--content {
    font-size: 40px;
    line-height: 54px;
    font-weight: 500;
  }
  &--quote {
    font-family: "Tiempos-Text", Georgia, "Times New Roman", Times, serif;
    // font-style: italic;
    font-size: 28px;
    line-height: 42px;
    font-weight: 400;
    padding: 2rem;
    color: #8a68fe;
    // width: 65%;
    background: #fafafa;
  }
}

.sticker {
  transition: all 300ms;
  &:hover {
    transform: scale(1.1) rotate(-10deg);
  }
}

@media screen and (max-width: 475px) and (orientation: portrait) {
  .section-highlight {
    &--content {
      font-size: 32px;
      line-height: 40px;
    }
    &--quote {
      font-size: 18px;
      line-height: 27px;
    }
  }
}
.smooth-shadow {
  box-shadow: 1.3px 6.8px 7.3px -75px rgba(0, 0, 0, 0.105),
    10px 54px 58px -75px rgba(0, 0, 0, 0.21);
}
</style>