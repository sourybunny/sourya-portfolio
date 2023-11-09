<template>
  <div class="section-title" :class="is_dark ? 'section-title--dark' : ''">
    <span class="maintitle">{{ title }}</span>
    <div class="linebar" v-if="is_underline"></div>
    <!-- <hr v-if="is_underline" /> -->
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
  margin-top: 3rem;
  .maintitle {
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
    text-transform: uppercase;
  }
  &--dark {
    color: white;
    .linebar {
      background: white;
    }
  }
  display: flex;
  align-items: center;
  gap: 20px;

  // margin-bottom: .5rem;
}
.linebar {
  height: 1px;
  flex: 1 0 0;
  background: black;
}
</style>