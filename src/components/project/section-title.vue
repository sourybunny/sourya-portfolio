<template>
  <div class="section-title" :class="is_dark ? 'section-title--dark' : ''">
    <p class="">{{ title }}</p>
    <hr v-if="is_underline" />
  </div>
</template>

<script>
export default {
  props: {
    title: "",
    is_underline: {
      default: true,
    },
    is_dark: false,
  },
};
</script>

<style lang="scss" scoped>
.section-title {
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
  margin-top: 3rem;
  &--dark {
    color: white;
  }
  // margin-bottom: .5rem;
}
</style>