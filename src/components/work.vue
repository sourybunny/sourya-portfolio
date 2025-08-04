<template>
  <section
    class="layout-container black bottom-line"
    style="background: #f9f9fb"
  >
    <div class="layout-container__inner py-0">
      <sectionTitle :title="'work'" :is_dark="true"></sectionTitle>
      <div class="projectlist mx-auto mt-10">
        <v-row wrap>
          <v-col cols="12" md="6" class="mt-6">
            <!-- AGENT ASSIST -->
            <div
              @click.stop="$router.push('/agentassist')"
              target="_blank"
              class="pointer workcard"
            >
              <div class="agentassist-card smooth-shadow">
                <div>
                  <div class="darkbg lighten-1 card-image">
                    <img
                      width="100%"
                      :src="require(`@/assets/media/agentassist/agentassisthero.png`)"
                    />
                  </div>
                </div>
                <!-- <div class="workcard_right px-6 pt-4">
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
                </div> -->
              </div>
              <div class="d-flex align-center mt-4">
                <div class="caption font-italic font-weight-light mb-1">
                  Citi Bank
                </div>
                <div
                  class="ml-2"
                  :style="'background:grey;height: 2px; width:2rem;opacity:0.5;'"
                ></div>
              </div>
              <div class="font-weight-medium text-h5">Agent Assist 🔒</div>
              <div>
                <div
                  class="d-flex align-center body-1 caption text-uppercase font-weight-light mt-1"
                >
                  <span>UX Design</span><span class="mx-2">&#x2022;</span>
                  <span>Launched</span><span class="mx-2">&#x2022;</span>
                  <v-chip small class="darkbg lighten-1 white--text body-1 caption"
                    >Enterprise</v-chip
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mt-6">
            <!-- NOTIFICATIONS -->
            <div
              @click.stop="$router.push('/notifications')"
              target="_blank"
              class="pointer workcard"
            >
              <div class="notifications-card smooth-shadow">
                <div>
                  <div class="darkbg lighten-1 card-image">
                    <img
                      width="100%"
                      :src="require(`@/assets/media/notifications/hero.png`)"
                    />
                  </div>
                </div>
                <!-- <div class="workcard_right px-6 pt-4">
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
                </div> -->
              </div>
              <div class="d-flex align-center mt-4">
                <div class="caption font-italic font-weight-light mb-1">
                  Ushur
                </div>
                <div
                  class="ml-2"
                  :style="'background:grey;height: 2px; width:2rem;opacity:0.5;'"
                ></div>
              </div>
              <div class="font-weight-medium text-h5">Notification Center</div>
              <div>
                <div
                  class="d-flex align-center body-1 caption text-uppercase font-weight-light mt-1"
                >
                  <span>UX Design</span><span class="mx-2">&#x2022;</span>
                  <span>Shipped</span><span class="mx-2">&#x2022;</span>
                  <v-chip small class="darkbg lighten-1 white--text body-1 caption"
                    >B2B SaaS</v-chip
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mt-6">
            <!-- FORMBUILDER -->
            <div
              @click.stop="$router.push('/builder')"
              target="_blank"
              class="pointer workcard"
            >
              <div class="builder-card smooth-shadow">
                <div>
                  <div class="darkbg lighten-1 card-image">
                    <img
                      width="100%"
                      :src="require(`@/assets/media/builder/formbuilder.png`)"
                    />
                  </div>
                </div>
                <!-- <div class="workcard_right px-6 pt-4">
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
                </div> -->
              </div>
              <div class="d-flex align-center mt-4">
                <div class="caption font-italic font-weight-light mb-1">
                  Ushur
                </div>
                <div
                  class="ml-2"
                  :style="'background:grey;height: 2px; width:2rem;opacity:0.5;'"
                ></div>
              </div>
              <div class="font-weight-medium text-h5">No-Code Workflow Builder</div>
              <div>
                <div
                  class="d-flex align-center body-1 caption text-uppercase font-weight-light mt-1"
                >
                  <span>UX Design</span><span class="mx-2">&#x2022;</span>
                  <span>Shipped</span><span class="mx-2">&#x2022;</span>
                  <v-chip small class="darkbg lighten-1 white--text body-1 caption"
                    >B2B SaaS</v-chip
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mt-6">
            <!-- AI Suggest -->
            <div
              @click.stop="$router.push('/aisuggest')"
              target="_blank"
              class="pointer workcard"
            >
              <div class="ai-card smooth-shadow fill-height">
                <div>
                  <div class="card-image">
                    <img
                      width="100%"
                      :src="require(`@/assets/media/aisuggest/aicropped.gif`)"
                    />
                  </div>
                </div>
                <!-- <div class="workcard_right px-6 pt-4">
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
                </div> -->
              </div>
              <div class="d-flex align-center mt-4">
                <div class="caption font-italic font-weight-light mb-1">
                  Ushur
                </div>
                <div
                  class="ml-2"
                  :style="'background:grey;height: 2px; width:2rem;opacity:0.5;'"
                ></div>
              </div>
              <div class="font-weight-medium text-h5">
                AI Smart Suggest
              </div>
              <div>
                <div
                  class="d-flex align-center body-1 caption text-uppercase font-weight-light mt-1"
                >
                  <span>UX Design</span><span class="mx-2">&#x2022;</span>
                  <span>Gen AI</span><span class="mx-2">&#x2022;</span>
                  <span>Launched</span><span class="mx-2">&#x2022;</span>
                  <v-chip small class="darkbg lighten-1 white--text body-1 caption"
                    >B2B SaaS</v-chip
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mt-6">
            <!-- PLANNEr -->
            <div
              @click.stop="$router.push('/plan')"
              target="_blank"
              class="pointer workcard"
            >
              <div class="plan-card smooth-shadow">
                <div>
                  <div class="card-image">
                    <img
                      width="100%"
                      :src="require(`@/assets/media/plan/planner-hero2.png`)"
                    />
                  </div>
                </div>
                <!-- <div class="workcard_right px-6 pt-4">
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
                </div> -->
              </div>
              <div class="d-flex align-center mt-4">
                <div class="caption font-italic font-weight-light mb-1">
                  Indiana University
                </div>
                <div
                  class="ml-2"
                  :style="'background:grey;height: 2px; width:2rem;opacity:0.5;'"
                ></div>
              </div>
              <div class="font-weight-medium text-h5">Course Planner</div>
              <div>
                <div
                  class="d-flex align-center body-1 caption text-uppercase font-weight-light mt-1"
                >
                  <span>UX design</span><span class="mx-2">&#x2022;</span>
                  <span>Usability test</span><span class="mx-2">&#x2022;</span>

                  <span>Launched</span><span class="mx-2">&#x2022;</span>
                  <v-chip small class="darkbg lighten-1 white--text body-1 caption"
                    >B2C</v-chip
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mt-6">
            <!-- THERM -->
            <div
              @click.stop="$router.push('/therm')"
              target="_blank"
              class="pointer workcard"
            >
              <div class="sh-card smooth-shadow">
                <div>
                  <div class="card-image">
                    <img
                      width="100%"
                      :src="require(`@/assets/media/sensehawk/hero.png`)"
                    />
                  </div>
                </div>
                <!-- <div class="workcard_right px-6 pt-4">
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
                </div> -->
              </div>
              <div class="d-flex align-center mt-4">
                <div class="caption font-italic font-weight-light mb-1">
                  Sensehawk
                </div>
                <div
                  class="ml-2"
                  :style="'background:grey;height: 2px; width:2rem;opacity:0.5;'"
                ></div>
              </div>
              <div class="font-weight-medium text-h5">
                Solar Defect Management
              </div>
              <div>
                <div
                  class="d-flex align-center body-1 caption text-uppercase font-weight-light mt-1"
                >
                <span>Front-end</span><span class="mx-2">&#x2022;</span>
                  <span>UX</span><span class="mx-2">&#x2022;</span>
                  <span>ML app</span><span class="mx-2">&#x2022;</span>
                  <span>Launched</span><span class="mx-2">&#x2022;</span>

                  <v-chip small class="darkbg lighten-1 white--text body-1 caption"
                    >B2B SaaS</v-chip
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mt-6">
            <!-- THERM -->
            <div
              @click.stop="$router.push('/capstone')"
              target="_blank"
              class="pointer workcard"
            >
              <div class="capstone-card smooth-shadow">
                <div>
                  <div class="card-image">
                    <img
                      width="100%"
                      :src="
                        require(`@/assets/media/capstone/capstone-hero.png`)
                      "
                    />
                  </div>
                </div>
                <!-- <div class="workcard_right px-6 pt-4">
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
                </div> -->
              </div>
              <div class="d-flex align-center mt-4">
                <div class="caption font-italic font-weight-light mb-1">
                  Wonder Lab
                </div>
                <div
                  class="ml-2"
                  :style="'background:grey;height: 2px; width:2rem;opacity:0.5;'"
                ></div>
              </div>
              <div class="font-weight-medium text-h5">
                Museum AR/AI/ML 
              </div>
              <div>
                <div
                  class="d-flex align-center body-1 caption text-uppercase font-weight-light mt-1"
                >
                <span>Augmented reality</span><span class="mx-2">&#x2022;</span>
                  <span>Gen AI</span><span class="mx-2">&#x2022;</span>
                  <span>Game UX</span><span class="mx-2">&#x2022;</span>
                  <span>Launched</span><span class="mx-2">&#x2022;</span>

                  <v-chip small class="darkbg lighten-1 white--text body-1 caption"
                    >Course project</v-chip
                  >
                </div>
              </div>

            </div>
          </v-col>
          <v-col cols="12" md="6" class="mt-6">
            <!-- STR -->
            <div
              @click.stop="$router.push('/streamanity')"
              target="_blank"
              class="pointer workcard"
            >
              <div class="str-card smooth-shadow">
                <div>
                  <div class="card-image">
                    <img
                      width="100%"
                      :src="require(`@/assets/media/streamanity/str.png`)"
                    />
                  </div>
                </div>
                <!-- <div class="workcard_right px-6 pt-4">
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
                </div> -->
              </div>
              <div class="d-flex align-center mt-4">
                <div class="caption font-italic font-weight-light mb-1">
                  Streamanity
                </div>
                <div
                  class="ml-2"
                  :style="'background:grey;height: 2px; width:2rem;opacity:0.5;'"
                ></div>
              </div>
              <div class="font-weight-medium text-h5">
                Video Streaming app
              </div>
              <div>
                <div
                  class="d-flex align-center body-1 caption text-uppercase font-weight-light mt-1"
                >
                  <span>UX</span><span class="mx-2">&#x2022;</span>
                  <span>MVP</span><span class="mx-2">&#x2022;</span>

                  <span>Launched</span><span class="mx-2">&#x2022;</span>
                  <v-chip small class="darkbg lighten-1 white--text body-1 caption"
                    >B2C</v-chip
                  >
                </div>
              </div>
            </div>
          </v-col>
          <!-- <v-col cols="12" md="6">
            <v-sheet
              @click.stop="$router.push('/plan')"
              target="_blank"
              class="pointer workcard plan-card ma-2 fill-height smooth-shadow "
            >
              <div class="">
                <div class="px-6 pt-6">
                  <div class="d-flex align-center">
                    <div class="body-1 font-italic font-weight-light mb-1">
                      Indiana University
                    </div>
                    <div
                      class="ml-2"
                      :style="'background:grey;height: 2px; width:2rem;opacity:0.5;'"
                    ></div>
                  </div>
                  <div class="font-weight-medium text-h5 mb-4">
                    Course Planner
                  </div>
                  <div class="mb-6">
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
          </v-col> -->
          <!-- <v-col cols="12" md="6">
            <v-sheet
              @click.stop="$router.push('/therm')"
              target="_blank"
              class="pointer workcard sh-card ma-2 fill-height smooth-shadow rounded-lg"
            >
              <div class="">
                <div class="px-6 pt-6">
                  <div class="d-flex align-center">
                    <div class="body-1 font-italic font-weight-light mb-1">
                      Sensehawk
                    </div>
                    <div
                      class="ml-2"
                      :style="'background:black;height: 2px; width:2rem;opacity:0.5;'"
                    ></div>
                  </div>
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
          </v-col> -->
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
import sectionOverview from "@/components/project/section-overview.vue";
export default {
  components: { SectionTitle, sectionOverview },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.projectlist {
  margin-bottom: 2rem;
  .workcard {
    background: black;
    // min-height: 440px;
    height: max-content;
    cursor: pointer;
    color: white;
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

// NEW
.builder-card {
  background: linear-gradient(25deg, #66555a 13.08%, #384147 95.82%);
  border-radius: 1rem;
}
.agentassist-card{
  background: linear-gradient(22deg, #4666f0 13.08%, #94adf9 95.82%);
  background: linear-gradient(22deg, #e8626b 13.08%, #62a1e0 95.82%);

  border-radius: 1rem;
}
.notifications-card {
  background: linear-gradient(262deg, #f68479 13.08%, #fee382 95.82%);
  border-radius: 1rem;
}
.ai-card {
  background: linear-gradient(280deg, #3a3535 17.03%, #3e3243 90.28%);
  border-radius: 1rem;

}
.plan-card {
  background: linear-gradient(280deg, #323337 17.03%, #31343f 90.28%);
  background: linear-gradient(280deg, #6f7178 17.03%, #4b4d57 90.28%);
  border-radius: 1rem;
}
.sh-card {
  background: linear-gradient(295deg, #8877df 25.41%, #6bbac1 97.08%);
  border-radius: 1rem;
}
.capstone-card {
  background: linear-gradient(295deg, #ffda75 25.41%, #ffed75 97.08%);

  border-radius: 1rem;
}
.str-card {
  background: linear-gradient(280deg, #323337 17.03%, #31343f 90.28%);
  border-radius: 1rem;
}
.workcard {
  .card-image {
    // padding: 2rem 0 2rem;
    transform-origin: 50% 100%;
    transition: border-radius 0.2s, transform 0.2s, box-shadow 0.5s;

    transform: scale(0.88);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
    box-shadow: -1px -3px 19.399999618530273px rgba(0, 0, 0, 0.16);

    img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
  &:hover {
    .card-image {
      transform: scale(1);
      border-radius: 1rem;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.12);
    }
  }
}
.v-btn__content {
  opacity: 1 !important;
}
</style>