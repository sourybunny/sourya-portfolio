<template>
  <div class="section-highlight d-flex flex-column align-center justify-center">
    <p class="section-highlight--title text-center">
        {{ title }}
    </p>
    <hr>
    <div class="section-highlight--content text-center">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
props: {
    title:''
}
}
</script>
<style lang="scss" scoped>
.section-highlight {
    padding: 4rem;
    width: 90%;
    margin: auto;
    &--title {
        font-size: 18px;
        line-height: 21px;
        font-weight: 300;
        margin-bottom: .2rem;
    }

    &--content {
        font-size: 40px;
        line-height: 54px;
        font-weight: 500;
    }
}
</style>