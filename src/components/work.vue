<template>
  <section class="layout-container black bottom-line" style="background: #f9f9fb">
    <div class="layout-container__inner py-0">
      <!-- style="margin-top:-3rem;" -->
      <div class="projectlist mt-10">
        <v-row wrap>
          <v-col cols="12" md="6" >
            <!-- NOTIFICATIONS -->
            <v-sheet
              @click.stop="$router.push('/notifications')"
              target="_blank"
              class="pointer workcard ma-2 fill-height smooth-shadow"
            >
              <div class="">
                <div class="px-6 pt-6">
                  <div class="d-flex align-center">
                    <div class="body-1 font-italic font-weight-light mb-1">
                      Ushur
                    </div>
                    <div class="ml-2"
                      :style="'background:black;height: 2px; width:2rem;opacity:0.5;'"
                    ></div>
                  </div>
                  <div class="font-weight-medium text-h5 mb-4">
                    Notification Center
                  </div>
                  <div class="darkbg lighten-1">
                    <v-responsive>
                      <v-img
                        :src="require(`@/assets/media/notifications/hero.png`)"
                      ></v-img>
                    </v-responsive>
                  </div>
                </div>
                <div class="workcard_right px-6 pt-4">
                  <div>
                    <div
                      class="d-flex align-center body-1 caption text-uppercase mt-2"
                    >
                      <span>UX/UI Design</span
                      ><span class="mx-2">&#x2022;</span> <span>Shipped</span
                      ><span class="mx-2">&#x2022;</span>
                      <v-chip small class="white body-1 caption greybg"
                        >B2B SaaS</v-chip
                      >
                    </div>
                  </div>
                  <div class="align-end justify-end mt-4">
                    <p class="body-1">
                      Real-time updates for solution developers of no-code app to address
                      critical events impacting customers.
                    </p>
                    <v-btn
                      plain
                      large
                      class="bottom-line--light text-uppercase font-weight-medium pa-0"
                      @click.stop="$router.push('/notifications')"
                      target="_blank"
                    >
                      read more
                      <v-icon class="ml-2" dark> mdi-arrow-right </v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="6">
            <!-- NOTIFICATIONS -->
            <v-sheet
              @click.stop="$router.push('/aisuggest')"
              target="_blank"
              class="pointer workcard ma-2 fill-height smooth-shadow"
            >
              <div class="">
                <div class="px-6 pt-6">
                  <div class="d-flex align-center">
                    <div class="body-1 font-italic font-weight-light mb-1">
                      Ushur
                    </div>
                    <div class="ml-2"
                      :style="'background:black;height: 2px; width:2rem;opacity:0.5;'"
                    ></div>
                  </div>
                  <div class="font-weight-medium text-h5 mb-4">
                    AI Smart Suggest
                  </div>
                  <div class="frame-border">
                    <v-responsive>
                      <v-img
                        :src="require(`@/assets/media/aisuggest/aicropped.gif`)"
                      ></v-img>
                    </v-responsive>
                  </div>
                </div>
                <div class="workcard_right px-6 pt-4">
                  <div>
                    <div
                      class="d-flex align-center body-1 caption text-uppercase mt-2"
                    >
                      <span>UX/UI Design</span
                      ><span class="mx-2">&#x2022;</span> <span>Launched</span
                      ><span class="mx-2">&#x2022;</span>
                      <v-chip small class="white body-1 caption greybg"
                        >B2B SaaS</v-chip
                      >
                    </div>
                  </div>
                  <div class="align-end justify-end mt-4">
                    <p class="body-1">
                      Generative AI writing assistant to help users write engaging customer facing content & build
                      workflows faster.
                    </p>
                    <v-btn
                      plain
                      large
                      class="bottom-line--light text-uppercase font-weight-medium pa-0"
                      @click.stop="$router.push('/aisuggest')"
                      target="_blank"
                    >
                      read more
                      <v-icon class="ml-2" dark> mdi-arrow-right </v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="6">
            <!-- Planner -->
            <v-sheet
              @click.stop="$router.push('/plan')"
              target="_blank"
              class="pointer workcard ma-2 fill-height smooth-shadow"
            >
              <div class="">
                <div class="px-6 pt-6">
                  <div class="d-flex align-center">
                    <div class="body-1 font-italic font-weight-light mb-1">
                      Indiana University
                    </div>
                    <div class="ml-2"
                      :style="'background:black;height: 2px; width:2rem;opacity:0.5;'"
                    ></div>
                  </div>
                  <!-- <div class="body-1 font-italic font-weight-light mb-1">
                    Indiana University
                  </div> -->
                  <div class="font-weight-medium text-h5 mb-4">
                    Course Planner
                  </div>
                  <div class="">
                    <v-responsive>
                      <v-img
                        :src="require(`@/assets/media/plan/plan.png`)"
                      ></v-img>
                    </v-responsive>
                  </div>
                </div>
                <div class="workcard_right px-6 pt-4">
                  <div>
                    <div
                      class="d-flex align-center body-1 caption text-uppercase mt-2"
                    >
                      <span>UX/UI Design</span
                      ><span class="mx-2">&#x2022;</span> <span>Launched</span
                      ><span class="mx-2">&#x2022;</span>
                      <v-chip small class="white body-1 caption greybg"
                        >B2C</v-chip
                      >
                    </div>
                  </div>
                  <div class="align-end justify-end mt-4">
                    <p class="body-1">
                      Designed an internal tool for 40k+ students and 150+
                      advisors reducing 100's of hours of manual effort.
                    </p>
                    <v-btn
                      plain
                      large
                      class="bottom-line--light text-uppercase font-weight-medium pa-0"
                      @click.stop="$router.push('/plan')"
                      target="_blank"
                    >
                      read more
                      <v-icon class="ml-2" dark> mdi-arrow-right </v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="6">
            <!-- Planner -->
            <v-sheet
              @click.stop="$router.push('/therm')"
              target="_blank"
              class="pointer workcard ma-2 fill-height smooth-shadow"
            >
              <div class="">
                <div class="px-6 pt-6">
                  <div class="d-flex align-center">
                    <div class="body-1 font-italic font-weight-light mb-1">
                      Sensehawk
                    </div>
                    <div class="ml-2"
                      :style="'background:black;height: 2px; width:2rem;opacity:0.5;'"
                    ></div>
                  </div>
                  <!-- <div class="body-1 font-italic font-weight-light mb-1">
                    Sensehawk
                  </div> -->
                  <div class="font-weight-medium text-h5 mb-4">
                    Solar Defect Management
                  </div>
                  <div class="">
                    <v-responsive>
                      <v-img
                        :src="require(`@/assets/media/sensehawk/hero.png`)"
                      ></v-img>
                    </v-responsive>
                  </div>
                </div>
                <div class="workcard_right px-6 pt-4">
                  <div>
                    <div
                      class="d-flex align-center body-1 caption text-uppercase mt-2"
                    >
                      <span>UX/UI Design</span
                      ><span class="mx-2">&#x2022;</span> <span>Launched</span
                      ><span class="mx-2">&#x2022;</span>
                      <v-chip small class="white body-1 caption greybg"
                        >B2B SAAS</v-chip
                      >
                    </div>
                  </div>
                  <div class="align-end justify-end mt-4">
                    <p class="body-1">
                      Simplified a defect management tool for solar asset construction
                      managers that raised $30M.
                    </p>
                    <v-btn
                      plain
                      large
                      class="bottom-line--light text-uppercase font-weight-medium pa-0"
                      @click.stop="$router.push('/therm')"
                      target="_blank"
                    >
                      read more
                      <v-icon class="ml-2" dark> mdi-arrow-right </v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <!-- CAPSTONE -->
        <!-- <v-sheet flat @click="$router.push('/capstone')"
      class=" transparent pointer capstone-container workcard mt-15"
    >
      <div class="">
        <v-row justify-space-between wrap>
          <v-col
            xs12
            sm7
            md8
            class="capstone-container--left pt-15"
          >
            <v-responsive>
              <v-img
                :src="
                  require(`@/assets/media/capstone/capstone-main.png`)
                "
              ></v-img>
            </v-responsive>
          </v-col>
          <v-col
            xs12
            sm5
            md4
            class="capstone-container--right workcard_right pa-10"
          >
            <div>
              <div style="opacity:0.8;" class="mt-2">
                <v-img
                  class="mr-2"
                  style="float:left;"
                  contain
                  width="48"
                  height="24"
                  :src="require(`@/assets/media/capstone/wlab.png`)"
                ></v-img>
                <div>WonderLab Science Museum
                </div>
              </div>
              <div class="text-h5 mt-4">
                Empathy with endangered corals using immersive tech
              </div>
              <div class="d-flex mt-4 opacity-6 align-center">
                <span>Interaction Design</span><span class="mx-1">&#x2022;</span> <span>Capstone</span><span class="mx-1">&#x2022;</span><v-chip class="opacity-1 body-1">AR| ML | AI</v-chip>
              </div>
             
            </div>
            <div class="align-end justify-end">
              <v-btn @click.stop="$router.push('/capstone')"
                dark
                plain
                block
                large
                class="my-4  bottom-line--light d-flex justify-space-between text--lighten-4 title text-capitalize font-weight-medium pa-0"
                
              >
                Project Overview
                <v-icon class="ml-2" dark>
                  mdi-arrow-right
                </v-icon>
              </v-btn>
              <p class="body-1 opacity-6">   
                Prototyped three interactive games for children to spark empathy for coral reefs.
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-sheet>  -->

        <!-- STR -->
        <!-- <v-sheet flat
      @click.stop="$router.push('/streamanity')" 
      class=" transparent pointer streamanity-container workcard mt-15"
    >
      <div class="">
        <v-row justify-space-between wrap>
          <v-col
            xs12
            sm7
            md8
            
            class="streamanity-container--left pt-15"
          >
            <v-responsive>
              <v-img
                :src="
                  require(`@/assets/media/streamanity/str-m.png`)
                "
              ></v-img>
            </v-responsive>
          </v-col>
          <v-col
            xs12
            sm5
            md4
            class="streamanity-container--right workcard_right pa-8"
          >
            <div>
              <div style="opacity:0.8;" class="mt-2">
                <v-img
                  class="mr-2"
                  style="float:left;"
                  contain
                  width="24"
                  height="24"
                  :src="require(`@/assets/str-logo.png`)"
                ></v-img>
                <div>Streamanity</div>
              </div>
              <div class="text-h5 mt-4">
                Video streaming platform for
                bitcoin content creators
              </div> 
              <div class="d-flex align-center mt-4 body-1 opacity-6">
                <span>Product Design</span><span class="mx-2">&#x2022;</span> <span>Coded MVP </span><span class="mx-2">&#x2022;</span> <v-chip class="opacity-1 body-1">Shipped</v-chip>
              </div>
              
            </div>
            <div class="align-end justify-end">
              <v-btn 
                dark
                plain
                block
                large
                class="view--btn my-4 white--text bottom-line--light d-flex justify-space-between  title text-capitalize font-weight-medium pa-0"
                @click.stop="$router.push('/streamanity')"
              >
                View Case Study
                <v-icon class="ml-2" dark>
                  mdi-arrow-right
                </v-icon>
              </v-btn>
              <p class="body-1 opacity-6">
                Helping 1000+ content creators monetize their videos and earn with micropayments.
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-sheet> -->

        <!-- SALESFORCE -->
        <!-- <v-sheet flat  href='https://medium.com/@sourya-design/designing-the-free-trial-experience-for-the-worlds-largest-crm-platform-ux-ui-case-study-7a154de74027' target="_blank"
      class=" transparent pointer salesforce-container workcard mt-15"
    >
      <div class="">
        <v-row justify-space-between wrap>
          <v-col
            xs12
            sm7
            md8
            class="salesforce-container--left pt-16 px-10"
          >
            <v-responsive>
              <v-img
                :src="
                  require(`@/assets/media/salesforce/salesforce-main.png`)
                "
              ></v-img>
            </v-responsive>
          </v-col>
          <v-col
            xs12
            sm5
            md4
            class="salesforce-container--right workcard_right pa-8"
          >
            <div>
              <div style="opacity:0.8;" class="mt-2">
                <v-img
                  class="mr-2"
                  style="float:left;"
                  contain
                  width="24"
                  height="24"
                  :src="require(`@/assets/media/salesforce/sf-logo.png`)"
                ></v-img>
                <div>Salesforce</div>
              </div>
              <div class="text-h5 mt-4">
                Designing the Salesforce free trial form experience
              </div>
              <div class="d-flex align-center flex-wrap mt-4 body-1 opacity-6">
                <span>Sponsored Course Work</span> <span class="mx-2">&#x2022;</span> <v-chip class="opacity-1 body-1">Externship</v-chip>
              </div>
             
            </div>
            <div class="align-end justify-end">
              <v-btn
                dark
                plain
                block
                large
                class="my-4  bottom-line--light d-flex justify-space-between text--lighten-4 title text-capitalize font-weight-medium pa-0"
                href='https://medium.com/@sourya-design/designing-the-free-trial-experience-for-the-worlds-largest-crm-platform-ux-ui-case-study-7a154de74027' target="_blank"
              >
                View Case Study
                <v-icon class="ml-2" dark>
                  mdi-arrow-right
                </v-icon>
              </v-btn>
              <p class="body-1 opacity-6">   
                Redesigned salesforce free-trial form by converting insights from market research to actionable design elements.
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-sheet> -->
        <!-- <section class="layout-container mainbg">
      <div class="layout-container__inner py-10">
        <div
          class="white--text"
          :class="$vuetify.breakpoint.mdAndUp ? ' display-2' : 'display-1'"
        >
          Indiana University 
        </div>
        <div
          class="body-2 white--text "
        >
          <v-chip dark class="ma-2 ml-0 cardbgdark">
            2021-2022
          </v-chip>
          <v-chip dark class="ma-2 cardbgdark">
            Enterprise web app
          </v-chip>
            <v-chip dark class="ma-2 cardbgdark">
            Shipped feature
          </v-chip>
        </div>
      </div>
    </section>
    <section class="layout-container courseplan-container">
      <section class="layout-container__inner">
        <div class="content-container">
          <v-row row justify-space-between wrap>
            <v-col xs12 sm9>
              <v-responsive>
                <v-img
                  :src="
                    require(`@/assets/media/streamanity/streamanity-landing.png`)
                  "
                ></v-img>
              </v-responsive>
            </v-col>
            <v-col xs12 sm3>
              <div class="pt-10">
                <div class="content-title white--text">
                  Course Planner Review
                </div>
                <p class="content-body white--text my-5 ">
                  Bitcoin based video streaming and content monetization
                  platform for small-scale content creators to earn money
                  directly from their followers.
                </p>
                <v-btn
                  large
                  class="mt-6 text-capitalize"
                  @click="$router.to('/streamanity')"
                >
                  CASE STUDY
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </section>
    </section> -->
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/project/section-title";
export default {
  components: { SectionTitle },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">
// .workcard_right {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// }

.projectlist {
  // display: grid;
  // grid-gap: 20px;
  // transition: all 0.3s ease;
  // padding: 0 20px;
  // grid-template-columns: repeat(2, 1fr) !important;
  // .workcard {
  //   width:500px;
  //   height: 500px;
  // }
  .workcard {
    min-height: 420px;
    cursor: pointer;
    // color:white;
    // background: rgb(26, 26, 27);
    background: white;
    color: black;
    // border-radius: 16px;
  }
}

.work {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}
.frame-border {
  border: 4px solid #8574d3c8;
  border-radius: 16px;
}

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .streamanity-container--right {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
}

// .plan-container {
//   &--left {
//     background: #97395a;
//   }
//   &--right {
//     color: #ffd5ea;
//     background: #1c0115;
//     // background: rgb(0,0,0);

//     // background: linear-gradient(124deg, rgba(0,0,0,1) 0%, rgba(42,6,6,1) 100%);
//     // background-image: linear-gradient(135deg, rgba(0, 81, 194, 0.1), rgba(45, 129, 247, 0.1));
//   }
// }
// .ai-container {
//   &--left {
//     background: #b2a1ff;
//   }
//   &--right {
//     background: #120d2b;
//     background: rgb(255, 255, 255);
//     color: #d6d1ec;

//     // background: linear-gradient(124deg, rgba(0,0,0,1) 0%, rgba(42,6,6,1) 100%);
//     // background-image: linear-gradient(135deg, rgba(0, 81, 194, 0.1), rgba(45, 129, 247, 0.1));
//   }
//   transition: all 300ms;
//   // transform: rotate(1deg);

//   &:hover {
//     // border: 2px solid white;
//     // transform: rotate(0deg);
//   }
// }

// .notifications-container {
//   // background: white;
//   &--left {
//     // background: #fbf2a2;
//     background: black;
//     color: white;
//   }
//   &--right {
//     color: #fff9c5;
//     background: black;
//     // background: #1b190b;
//   }
//   // border-top-left-radius: 250px 15px;
//   //   border-bottom-left-radius: 20px 115px;
//   //   border-bottom-right-radius: 105px 15px;
//   // background: #fff;
//   transition: all 300ms;
//   // transform: rotate(1deg);

//   &:hover {
//     // background:#fbf2a2;
//     // border: 2px solid white;
//     // transform: rotate(0deg);
//   }
// }

// .therm-container {
//   &--left {
//     background: #1576b7;
//   }
//   &--right {
//     color: #8dbdda;
//     background: #0d1724;
//     // background: rgb(0,0,0);

//     // background: linear-gradient(124deg, rgba(0,0,0,1) 0%, rgba(42,6,6,1) 100%);
//     // background-image: linear-gradient(135deg, rgba(0, 81, 194, 0.1), rgba(45, 129, 247, 0.1));
//   }
// }
.salesforce-container {
  &--left {
    background: #3b598a;
  }
  &--right {
    color: #9fc1dd;
    background: #000b1b;
    // background: rgb(0,0,0);

    // background: linear-gradient(124deg, rgba(0,0,0,1) 0%, rgba(42,6,6,1) 100%);
    // background-image: linear-gradient(135deg, rgba(0, 81, 194, 0.1), rgba(45, 129, 247, 0.1));
  }
}
.capstone-container {
  &--left {
    background: #ffed75;
  }
  &--right {
    color: #f7f4cc;
    background: #241f10;
    // background: rgb(0,0,0);

    // background: linear-gradient(124deg, rgba(0,0,0,1) 0%, rgba(42,6,6,1) 100%);
    // background-image: linear-gradient(135deg, rgba(0, 81, 194, 0.1), rgba(45, 129, 247, 0.1));
  }
}

.v-btn__content {
  opacity: 1 !important;
}
</style>