<template>
  <div class="section-highlight d-flex flex-column align-center justify-center">
    <div v-if="!is_quote" class="section-highlight--content text-center">
      <slot></slot>
    </div>
    <div v-else class="text-center">
      <!-- <hr v-if="is_underline" /> -->
      <div class="section-highlight--quote text-center">
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
    font-family: Georgia, "Times New Roman", Times, serif;
    font-style: italic;
    font-size: 28px;
    line-height: 42px;
    font-weight: 400;
    padding: 2rem;
    color: #F4511E;
    // width: 65%;
    background: #fafafa;
  }
}
</style>