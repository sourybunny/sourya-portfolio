<template>
    <div class="section-content"     :class="is_dark ? 'section-content--dark' : ''">
        <span class="content-number" v-if="is_number">{{ number }}</span>
        <div class="content-title">{{ title }}</div>
        <p class="content-body">
            <slot></slot>
        </p>
    </div>
</template>
  
<script>
export default {
    props: {
        title: '',
        content: '',
        number: '',
        is_number: {
            default: false
        },
        is_dark: false
    }
}
</script>
  
<style lang="scss" scoped>
.section-content{
    margin-top: 2rem;
    &--dark {
    color: white;
    .content-body {
    color: #a0a0a0;
    }
  }
}
.content-title {
        font-size: 18px;
        line-height: 24px;
        font-weight: 500;
        margin-bottom: .5rem;
        
    }

.content-body{
        font-size: 18px;
        line-height: 27px;
        font-weight: 300;
        // color:#545454;

    }
.content-number{
        font-size: 32px;
        line-height: 32px;
        font-weight: 600;
    }
</style>