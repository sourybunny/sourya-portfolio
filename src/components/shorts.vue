<template>
  <div class="layout-container shorts white">
    <div class="layout-container__inner ">
      <div class="text-h4 white--text font-weight-bold mb-8">
        View my design
        <span class="font-weight-bold tangram_orange--text designbytes-gradient">bytes</span>
      </div>
      <div class="d-flex slides" >
        <template v-for="(item, i) in items">
          <v-hover v-slot="{ hover }" :key="i">
            <v-card :class="hover? 'scaleup':''" @click.stop="
              dialog = item.id;
            selected_id = item.val;
                                          " :elevation="hover ? 24 : 6" dark class="mx-3 transparent byte my-6 rounded-xl">
              <v-img :gradient="
                hover
                  ? 'to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)'
                  : 'to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.2)'
              " contain class="align-end" :src="item.cardimg">
                <div class="white--text mx-6 mb-4 d-flex flex-column">
                  <div>
                    <!-- <div style="opacity:0.5" class="font-italic paragraph-gradient display-1 ">
                      {{ item.id }}.
                    </div> -->
                    <div class="body-2 grey--text  text--lighten-1 font-italic font-weight-light mb-1">
                      {{ item.overline }}
                    </div>
                    <p class="subheading">
                      {{ item.title }}
                    </p>
                  </div>
                  <div class="d-flex align-center">
                    <v-avatar size="32" class="">
                      <img contain style="border:2px solid blue;padding: 2px; background:white;" :alt="item.company"
                        :src="item.logo" />
                    </v-avatar>
                    <div class="ml-2 caption grey--text text--lighten-1 font-weight-medium">
                      {{ item.company }}
                    </div>
                  </div>
                </div>
              </v-img>
            </v-card>
          </v-hover>
        </template>
        <!-- <div class="pseduo-track"></div> -->
      </div>
      <v-dialog scrollable v-model="dialog" fullscreen
      hide-overlay
      transition="dialog-bottom-transition">
        
        <v-btn
              @click="dialog = false"
              class="mr-2 mb-4"
              fab
              dark
              color="cardbgdark"
            >
              <v-icon dark>
                fa-close
              </v-icon>
            </v-btn>
        <v-card class="pa-0" v-if="selected_id == 2">
          <Soar class="white" />
        </v-card>
        <iframe v-if="selected_id == 3" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="700" height="800"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBrtaJQv7NuEFxnlX5h71Qt%2Fux-bytes%3Fpage-id%3D20%253A259%26node-id%3D20%253A260%26viewport%3D488%252C1523%252C0.31%26scaling%3Dscale-down-width&hide-ui=1"></iframe>
        <!-- <iframe v-if="selected_id==3"  style="border: 1px solid rgba(0, 0, 0, 0.1);"  width="700" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FBrtaJQv7NuEFxnlX5h71Qt%2Fux-bytes%3Fnode-id%3D20%253A260%26t%3DuSyyeGoXuy44jU32-1" allowfullscreen></iframe> -->
        <iframe v-if="selected_id == 4" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="700" height="800"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBrtaJQv7NuEFxnlX5h71Qt%2Fux-bytes%3Fpage-id%3D0%253A1%26node-id%3D1%253A179%26viewport%3D319%252C2156%252C0.19%26scaling%3Dscale-down-width&hide-ui=1"></iframe>
        <!-- <iframe v-if="selected_id==3" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="700" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAPAYAUXAqJbP8hHGVLdFZO%2Fresume%3Fpage-id%3D141%253A2%26node-id%3D715%253A14%26viewport%3D1713%252C-876%252C0.44%26scaling%3Dscale-down-width%26starting-point-node-id%3D223%253A28" ></iframe> -->
        <iframe v-if="selected_id == 7" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="700" height="800"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBrtaJQv7NuEFxnlX5h71Qt%2Fux-bytes%3Fpage-id%3D5%253A2%26node-id%3D83%253A241%26viewport%3D245%252C252%252C0.17%26scaling%3Dscale-down-width&hide-ui=1"></iframe>
        <iframe v-if="selected_id == 5" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="700" height="800"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBrtaJQv7NuEFxnlX5h71Qt%2Fux-bytes%3Fpage-id%3D154%253A23%26node-id%3D156%253A2764%26viewport%3D-854%252C1370%252C0.22%26scaling%3Dscale-down-width&hide-ui=1"></iframe>
        <iframe v-if="selected_id == 6" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="700" height="800"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBrtaJQv7NuEFxnlX5h71Qt%2Fux-bytes%3Fpage-id%3D83%253A299%26type%3Ddesign%26node-id%3D101-2%26viewport%3D378%252C218%252C0.23%26scaling%3Dscale-down-width&hide-ui=1"></iframe>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import Soar from "../views/casestudies/soar.vue";
export default {
  components: {
    Soar,
  },
  data: () => ({
    dialog: false,
    selected_id: 0,
    items: [
      {
        id: 1,
        val: 1,
        overline: "User-centered design",
        title: "Microsoft + Rich's Hackathon Runnerup, 2022",
        company: `@Rich Products Corp.`,
        cardimg: require(`@/assets/bytes/cake.png`),
        logo: require(`@/assets/stories/rich-logo.png`),
        tag: "",
        misc: "",
      },
      {
        id: 2,
        val: 2,
        overline: "Responsive web design",
        title: "Student Online Advising Records",
        company: `@UITS, IUB`,
        cardimg: require(`@/assets/bytes/soar.png`),
        logo: require(`@/assets/stories/iu-logo.jpeg`),
        tag: "",
        misc: "",
      },
      {
        id: 3,
        val: 3,
        overline: "Speculative design",
        title: "Postmodern feminism: Extra Human Body Ornament",
        company: `@Ms.HCI Project, IUB`,
        cardimg: require(`@/assets/bytes/speculative.png`),
        logo: require(`@/assets/stories/iu-logo.jpeg`),
        tag: "",
        misc: "",
      },
      {
        id: 4,
        val: 4,
        overline: "Inclusive design",
        title: "Accessibility Analysis of Medium app",
        company: `@Ms.HCI Project, IUB`,
        cardimg: require(`@/assets/bytes/medium.png`),
        logo: require(`@/assets/stories/iu-logo.jpeg`),
        tag: "",
        misc: "",
      },
      {
        id: 5,
        val: 5,
        overline: "Visual design",
        title: "Evoking Emotions Through Design Elements",
        company: `@Ms.HCI Project, IUB`,
        cardimg: require(`@/assets/bytes/visual.png`),
        logo: require(`@/assets/stories/iu-logo.jpeg`),
        tag: "",
        misc: "",
      },
      // {
      //   id: 5,
      //   overline: "Design system",
      //   title: "Component Library for Rich's Global UI COE",
      //   company: `@Rich Products corp`,
      //   cardimg: require(`@/assets/bytes/designsystem.png`),
      //   logo: require(`@/assets/stories/rich-logo.png`),
      //   tag: "",
      //   misc: "",
      // },
      {
        id: 6,
        val: 6,
        overline: "UX research",
        title: "STAR - Sales Trend Analysis Report",
        company: `@Rich Products corp`,
        cardimg: require(`@/assets/bytes/uxresearch.png`),
        logo: require(`@/assets/stories/rich-logo.png`),
        tag: "",
        misc: "",
      },
      {
        id: 7,
        val: 7,
        overline: "User personas",
        title: "Enterprise Data Platform Team Personas",
        company: `@Rich Products corp`,
        cardimg: require(`@/assets/bytes/personas.png`),
        logo: require(`@/assets/stories/rich-logo.png`),
        tag: "",
        misc: "",
      },
      {
        id: 8,
        val: 1,
        overline: "User-centered design",
        title: "Microsoft + Rich's Hackathon Runnerup, 2022",
        company: `@Rich Products Corp.`,
        cardimg: require(`@/assets/bytes/cake.png`),
        logo: require(`@/assets/stories/rich-logo.png`),
        tag: "",
        misc: "",
      },
      {
        id: 9,
        val: 2,
        overline: "Responsive web design",
        title: "Student Online Advising Records",
        company: `@UITS, IUB`,
        cardimg: require(`@/assets/bytes/soar.png`),
        logo: require(`@/assets/stories/iu-logo.jpeg`),
        tag: "",
        misc: "",
      },
      {
        id: 10,
        val: 3,
        overline: "Speculative design",
        title: "Postmodern feminism: Extra Human Body Ornament",
        company: `@Ms.HCI Project, IUB`,
        cardimg: require(`@/assets/bytes/speculative.png`),
        logo: require(`@/assets/stories/iu-logo.jpeg`),
        tag: "",
        misc: "",
      },
      // {
      //   id: 8,
      //   overline: "Mobile programming",
      //   title: "Team Members and Coworkers Socialization app",
      //   company: `@Rich Products corp`,
      //   cardimg: require(`@/assets/bytes/Programming.png`),
      //   logo: require(`@/assets/stories/rich-logo.png`),
      //   tag: "",
      //   misc: "",
      // },
    ],
  }),
};
</script>

<style lang="scss">
.shorts {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);

  .slides {
    //   .byte {
    //     transform: perspective(1500px) rotateY(15deg);
    // // border-radius: 1rem;
    // box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    // transition: transform 1s ease 0s;

    // &:hover {
    //   transform: perspective(3000px) rotateY(5deg);
    // }
    //   }

    .byte {
      animation: moveleft 35s 2s linear infinite;
    }
    // .byte:hover {
    //   transform: scale(1.05) translateY(3px);
    //   transition: all 200ms ease;
      
    // }
  }
}
@keyframes moveleft {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-77vw, 0, 0); 
  }
}

.slides {
  max-width: 100vw;
  overflow-x: scroll;
  position: relative;
  scrollbar-color: #d5ac68 #f1db9d;
  scrollbar-width: thin;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  &:hover{
    .byte{
      animation-play-state: paused;
    }
  }
}

.scaleup {
  transform: scale(1.05) translateY(3px);
      transition: all 200ms ease;
}
.pseduo-track {
  background-color: #f1db9d;
  height: 1px;
  width: 100%;
  position: relative;
  top: -3px;
  z-index: -10;
}

@media (any-hover: none) {
  .pseduo-track {
    display: none;
  }
}

.slides::-webkit-scrollbar {
  height: 10px;
}

.slides::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
}

.slides::-webkit-scrollbar-thumb {
  height: 2px;
  background-color: #242424;
  
}

.slides::-webkit-scrollbar-thumb:hover {
  background-color: #191919;
}

.slides::-webkit-scrollbar:vertical {
  display: none;
}
</style>
