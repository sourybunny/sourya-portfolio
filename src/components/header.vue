<template>
   <v-app-bar flat app color="black" dark hide-on-scroll>
      <v-container class="d-flex align-center">
        <div @click.stop="$router.push({path:'/'})"
          class="white--text is-pointer title font-weight-light"
        >
          Sourya Varanasi
        </div>
        <v-spacer></v-spacer>
        <v-btn depressed to="/" text>
          <span class="text-capitalize body-1 font-weight-light">Home</span>
        </v-btn>
        <v-btn depressed to="/about" text>
          <span class="text-capitalize body-1 font-weight-light">About</span>
        </v-btn>
        <!-- <v-btn depressed to="/projects" text>
          <span class="mr-2 text-capitalize body-1">Projects</span>
        </v-btn> -->
        <v-btn
          href="https://drive.google.com/file/d/1SozZQHRDNu1TuoX2ErRiT7ryQHShubUW/view?usp=sharing"
          target="_blank"
          text
        >
          <span class="text-capitalize body-1 font-weight-light">Resume</span>
        </v-btn>
        <!-- <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2 text-capitalize body-1">Extras</span>
        </v-btn> -->
        
        
      </v-container>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>