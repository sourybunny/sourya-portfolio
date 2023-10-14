<template>
  <div class="section-card" :class="!is_light?'section-card--dark':''">
      <v-img v-if="has_icon" class="mr-4" width="4rem" :src="require(`@/assets/media/aisuggest/${icon}.png`)" />
    <div>
      <div class="content-title">{{ title }}</div>
      <p class="content-body">
        <slot></slot>
      </p>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    title: "",
    content: "",
    has_icon: false,
    icon:'',
    is_light:false
  },
};
</script>
  
<style lang="scss" scoped>
.section-card {
  display: flex;
  padding: 2rem;
  flex-direction: row;
  align-items: flex-start;
  box-shadow: 0px 0px 5.02326px 0px rgba(36, 49, 66, 0.12);
  border-radius: 0.2rem;
  color: #000;
  background: #fafafa;
  &--dark {
    background: #0f111c;
    color: white;
  }

}
.content-title {
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.content-body {
  font-size: 14px;
  line-height: 19px;
  font-weight: 300;
  opacity: 0.5;
  // color:#545454;
}
</style>