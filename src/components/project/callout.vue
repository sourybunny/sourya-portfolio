<template>
  <div
    class="callout"
    :style="
      success
        ? { border: '1px solid #A7D094' }
        : { border: ' 1px solid #FFD6DB' }
    "
  >
    <v-img
      v-if="success"
      width="52"
      :src="require(`@/assets/media/aisuggest/star-green.png`)"
    ></v-img>
    <v-img
      v-else
      width="52"
      :src="require(`@/assets/media/aisuggest/star.png`)"
    ></v-img>

    <div>
      <div class="callout-description">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    title: "",
    description: "",
    success: false,
  },
};
</script>
  
<style lang="scss" scoped>
.callout {
  display: inline-flex;
  padding: 0.8rem 1rem;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  background: #fff;
}
.callout-title {
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
}
.callout-description {
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
}
</style>