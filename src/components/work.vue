<template>
  <div >
    <section class="layout-container bottom-line">
      <div class="layout-container__inner " style="padding:0;">
        <div  class="text-h4 white--text font-weight-bold" style="padding:4rem;" >
          Explore my selected
          <span
            class="font-weight-bold tangram_yellow--text selectedwork-gradient"
            >work</span
          >
        </div>
   

 <!-- SENSEHAWK -->
    <v-card flat @click.stop="$router.push('/therm')" target="_blank"
      class=" transparent pointer plan-container workcard "
    >
      <div class="">
        <v-layout justify-space-between wrap>
          <v-flex
            xs12
            sm7
            md8
            class="therm-container--left pt-15"
          >
            <v-responsive>
              <v-img
                :src="
                  require(`@/assets/media/therm/therm-main.png`)
                "
              ></v-img>
            </v-responsive>
          </v-flex>
          <v-flex
            xs12
            sm5
            md4
            class="therm-container--right workcard_right pa-8"
          >
            <div>
              <div style="opacity:0.8;" class="mt-2">
                <v-img
                  class="mr-2"
                  style="float:left;"
                  contain
                  width="24"
                  height="24"
                  :src="require(`@/assets/sensehawk logo.jpg`)"
                ></v-img>
                <div>Sensehawk</div>
              </div>
              <div class="text-h5 mt-4">
               Defect management for solar asset construction managers
              </div>
              <div class="d-flex align-center mt-4 body-1 opacity-6">
                <span>Coded MVP</span><span class="mx-2">&#x2022;</span> <span>Shipped</span><span  class="mx-2">&#x2022;</span> <v-chip class="opacity-1 body-1">B2B SaaS</v-chip>
              </div>
              
            </div>
            <div class="align-end justify-end">
              <v-btn
                dark
                plain
                block
                large
                class="my-4  bottom-line--light d-flex justify-space-between text--lighten-4 title text-capitalize font-weight-medium pa-0"
                @click.stop="$router.push(
                 '/therm'
                )"
                target="_blank"
              >
                View Case Study
                <v-icon class="ml-2" dark>
                  mdi-arrow-right
                </v-icon>
              </v-btn>
              <p class="body-1 opacity-6">
                Improved user engagement and usability of web interface for managers to track and assign defects to field technicians.
              </p>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </v-card>
    <!-- PLANNER -->
     <v-card flat @click="$router.push('/plan')" target="_blank"
      class=" transparent pointer plan-container workcard mt-15"
    >
      <div class="">
        <v-layout justify-space-between wrap>
          <v-flex
            xs12
            sm7
            md8
            class="plan-container--left pt-10 pr-10"
          >
            <v-responsive>
              <v-img
                :src="
                  require(`@/assets/media/plan/plan.png`)
                "
              ></v-img>
            </v-responsive>
          </v-flex>
          <v-flex
            xs12
            sm5
            md4
            class="plan-container--right workcard_right pa-8"
          >
            <!-- <section class="flex-column justify-end"> -->
            <div>
              <div style="opacity:0.8;" class="mt-2">
                <v-img
                  class="mr-2"
                  style="float:left;"
                  contain
                  width="24"
                  height="24"
                  :src="require(`@/assets/stories/iu-logo.jpeg`)"
                ></v-img>
                <div>Indiana University</div>
              </div>
              <div class="text-h5 mt-4">
                Helping advisors and students with a course plan review
              </div>
              <div class="d-flex align-center mt-4 body-1 opacity-6">
                <span>UX/UI Design</span><span class="mx-2">&#x2022;</span> <span>Shipped</span><span  class="mx-2">&#x2022;</span> <v-chip class="opacity-1 body-1">B2C</v-chip>
              </div>
              <!-- <p class="body-1  my-5 ">
                  Helping bitcoin based content creators monetize their videos and
                  earn money directy from their followers.
                </p> -->
            </div>
            <div class="align-end justify-end">
              <v-btn
                dark
                plain
                block
                large
                class="my-4  bottom-line--light d-flex justify-space-between text--lighten-4 title text-capitalize font-weight-medium pa-0"
                @click.stop="$router.push(
                 '/plan'
                )"
                target="_blank"
              >
                View Case Study
                <v-icon class="ml-2" dark>
                  mdi-arrow-right
                </v-icon>
              </v-btn>
              <p class="body-1 opacity-6">
                Designed an internal tool for students to smoothly plan courses and get review from their advisors.
              </p>
            </div>
            <!-- </section> -->
          </v-flex>
        </v-layout>
      </div>
    </v-card>

         <!-- CAPSTONE -->
         <v-card flat @click="$router.push('/capstone')"
      class=" transparent pointer capstone-container workcard mt-15"
    >
      <div class="">
        <v-layout justify-space-between wrap>
          <v-flex
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
          </v-flex>
          <v-flex
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
                Designed and prototyped a series of four interactive experiences for children to spark empathy for coral reefs.
              </p>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </v-card> 



    
       <!-- STR -->
       <v-card flat
      @click.stop="$router.push('/streamanity')" 
      class=" transparent pointer streamanity-container workcard mt-15"
    >
      <div class="">
        <v-layout justify-space-between wrap>
          <v-flex
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
          </v-flex>
          <v-flex
            xs12
            sm5
            md4
            class="streamanity-container--right workcard_right pa-8"
          >
            <!-- <section class="flex-column justify-end"> -->
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
                Helping bitcoin based content creators monetize their videos and
                earn money directly from their followers.
              </p>
            </div>
            <!-- </section> -->
          </v-flex>
        </v-layout>
      </div>
    </v-card>

 <!-- SALESFORCE -->
 <!-- <v-card flat  href='https://medium.com/@sourya-design/designing-the-free-trial-experience-for-the-worlds-largest-crm-platform-ux-ui-case-study-7a154de74027' target="_blank"
      class=" transparent pointer salesforce-container workcard mt-15"
    >
      <div class="">
        <v-layout justify-space-between wrap>
          <v-flex
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
          </v-flex>
          <v-flex
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
          </v-flex>
        </v-layout>
      </div>
    </v-card> -->
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
          <v-layout row justify-space-between wrap>
            <v-flex xs12 sm9>
              <v-responsive>
                <v-img
                  :src="
                    require(`@/assets/media/streamanity/streamanity-landing.png`)
                  "
                ></v-img>
              </v-responsive>
            </v-flex>
            <v-flex xs12 sm3>
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
            </v-flex>
          </v-layout>
        </div>
      </section>
    </section> -->
  </div>

  </section>

  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      title: "rhgj",
      projects: [
        {
          id: 1,
          name: "Streamanity",
          meta: "Content monetization in Bitcoin",
          tags:
            "Social | Product, UX Design, Leadership | Developed & Shipped Product",
          description:
            "Designing a video platform for Bitcoin SV users to monetize their video content and earn money.",
          extra: "",
          to: "/streamanity",
          img: require(`@/assets/media/home/stream-home.png`),
          bg: "streamanity_green",
          type: "internal",
          client: "Keyport Labs Pvt Ltd",
        },
        {
          id: 2,
          name: "SOAR",
          meta: "Student academic advising app",
          tags: "Product, UX Design, Leadership | Developed & Shipped Product",
          description:
            "Designing Indiana University's student academic advising app (SOAR) for a mobile-first experience",
          extra: "",
          to: "/soar",
          img: require(`@/assets/media/home/soar-home.png`),
          bg: "streamanity_green",
          type: "internal",
          client: "Indiana University: Enterprise Student Systems",
        },
        {
          id: 3,
          name: "Piggie",
          meta: "Linking student goals to their savings.",
          tags: "Fintech | UX Design",
          description:
            "An app that links student goals to their savings and educates them on best behaviors and budgeting.",
          extra: "",
          to: "https://www.behance.net/gallery/139742913/Financial-wellbeing",
          img: require(`@/assets/media/home/piggiee-home.png`),
          bg: "piggie_blue",
          type: "external",
          client: "Academic Project",
        },
        // {
        //   id: 2,
        //   name: "LuFe",
        //   tags: "Public Health | User Research, UX Design | Bootcamp Project",
        //   description:
        //     "Lufe is a re-imagined public toilet system that helps users to find clean and hygienic toilets easily and motivatesthem to use public toilets.",
        //   extra: "",
        //   to: "/lufe",
        //   img: require(`@/assets/media/streamanity/streamanity-home.png`),
        //   bg: 'lufi_blue'
        // },
      ],
    };
  },
};
</script>

<style lang="scss">
.workcard_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.work {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  
}
.streamanity-container {
  // background: #579c70;

  &--left {
    background: #579c70;
    
  }
  &--right {
    color: #a8dbbb;
    background: #09120e;
    
  }
}
@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .streamanity-container--right {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
}
.plan-container {
  &--left {
    background: #6d2c42;
  }
  &--right {
    color: #ffd5ea;
    background: #070005;
// background: rgb(0,0,0);

// background: linear-gradient(124deg, rgba(0,0,0,1) 0%, rgba(42,6,6,1) 100%);
    // background-image: linear-gradient(135deg, rgba(0, 81, 194, 0.1), rgba(45, 129, 247, 0.1));
  }
}

.therm-container {

&--left {
  background: #1576b7;
}
&--right {
  color: #8DBDDA;
  background: #0a101a;
// background: rgb(0,0,0);

// background: linear-gradient(124deg, rgba(0,0,0,1) 0%, rgba(42,6,6,1) 100%);
  // background-image: linear-gradient(135deg, rgba(0, 81, 194, 0.1), rgba(45, 129, 247, 0.1));
}
}
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
  background: #FFED75;
}
&--right {
  color: #f7f4cc;
  background: #241f10;
// background: rgb(0,0,0);

// background: linear-gradient(124deg, rgba(0,0,0,1) 0%, rgba(42,6,6,1) 100%);
  // background-image: linear-gradient(135deg, rgba(0, 81, 194, 0.1), rgba(45, 129, 247, 0.1));
}
}

.streamanity-dot {
  width: 1.5rem;
  height: 1.5rem;
  // border-radius: 50%;
  background: #489b65;
  // left:-0.7%;
  // top: 35%;
}
.v-btn__content {
  opacity: 1 !important;
}
</style>