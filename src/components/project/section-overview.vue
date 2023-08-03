<template>
    <div class="section-overview my-6">
        <v-layout>
            <v-flex xs12 sm6>
                <p class="section-overview--title">{{ title }}</p>
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
    props:{
        title:'',
        description:''
    }
}
</script>

<style lang="scss" scoped>
.section-overview {

    &--title {
        font-size: 40px;
        line-height: 54px;
        font-weight: 300;
        max-width: 85%;
    }

    &-body {
        font-size: 18px;
        line-height: 27px;
        font-weight: 300;
        opacity:80%;
    }
}
</style>