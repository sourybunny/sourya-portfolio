<template>
  <main class="project-section">
    <div class="notifications-bg">
      <v-img :src="require(`@/assets/media/subway/banner2.png`)"></v-img>
    </div>
    <article class="white">
      <!-- <div class="stickynav">
          <div class="subnavigation glass-header">
            <a href="#overview">Overview</a>
            <a href="#users">Users</a>
            <a href="#process">Process</a>
            <a href="#principles">Design Principles</a>
            <a href="#concepts">Concepts</a>
            <a href="#design">Design</a>
            <a href="#reflection">Reflection</a>
          </div>
        </div> -->
      <section
        id="overview"
        class="inner-section"
        style="width: 70%; margin-left: 17.5%"
      >
        <v-layout wrap class="align-start justify-space-between">
          <v-flex xs12 sm8>
            <sectionTitle
              :title="'MathWorks: Design Challenge (Passed) /'"
            ></sectionTitle>
            <projectHeader
              :title="'🚉 Subway Planner '"
              :description="project_desc"
            ></projectHeader>
            <sectionContent>
              <div>
                <!-- <br> -->
                Produce a high-level design of an application to allow a
                transportation engineer to design a new subway system for a
                given city. The application should enable the transportation
                engineer to define the stations and connections layout that
                supports the best connection for high-traffic routes during
                high-peak traffic times. The app should display the map of the
                city, the information on population and traffic during the day.
              </div>
            </sectionContent>
            <sectionTitle :title="'Overview'"></sectionTitle>
            <v-layout wrap class="align-start justify-space-between mt-4">
              <v-flex xs12 sm6>
                <section-content :title="'Problem'">
                  <div>
                    There are many factors to consider while planning subway
                    stations and it is hard to make decisions without analyzing
                    the city’s data.
                  </div>
                </section-content>
              </v-flex>
              <v-flex xs12 sm5>
                <section-content :title="'Outcome'">
                  <div>
                    I designed a data-driven GIS app that helps engineers to
                    choose plans with optimal routes within budget and help to
                    make informed decisions.
                  </div>
                </section-content>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm3>
            <sectionTitle :title="'Info'"></sectionTitle>
            <sectionContent :title="'Role'">
              <div>
                UX Designer (Problem definition, Ideation, Wireframing, visual
                design)
              </div>
            </sectionContent>
            <sectionContent :title="'Timeline'"> 20 hrs </sectionContent>
            <sectionContent :title="'Tools'">
              <div>Figma</div>
            </sectionContent>
            <sectionContent :title="'Team'">
              <div>Designer - Me</div>
            </sectionContent>
          </v-flex>
        </v-layout>
      </section>
    </article>
    <article class="pb-0">
      <section class="inner-section">
        <sectionTitle :title="'SOLUTION'" :is_dark="true"></sectionTitle>
        <section-overview
          :title="'Design'"
          :emphasize="'Subway planner'"
          :right="true"
          :is_dark="true"
        >
          I dived into an intensive research sprint by conducting stakeholder
          interviews and participated in product discussions with the team.
        </section-overview>
        <div class="mx-auto pa-4">
          <img width="100%" :src="require(`@/assets/media/subway/mock1.png`)" />
        </div>
      </section>
    </article>
    <article id="insights" class="white">
      <section class="inner-section">
        <sectionTitle :title="'Insights'"></sectionTitle>
        <section-overview
          :title="'Major'"
          :emphasize="'pain points'"
          :right="true"
        >
          The following pain points were extracted from the problem statement
          that guided my design process moving forward.
        </section-overview>
        <v-layout wrap class="my-6">
          <v-flex xs12 sm6>
            <section-content
              class="mr-12"
              is_number="true"
              :number="'01'"
              :title="'Unorganized'"
            >
              Unorganized data storage as they are from different sources
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'02'"
              :title="'Decision making'"
            >
              Too many variables to consider and unable to prioritize
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'03'"
              :title="'Not at one place'"
            >
              Data is available on different platforms but not on same map
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'04'"
              :title="'Difficult to compare'"
            >
              No easy way to compare different solutions & then decide
            </section-content>
          </v-flex>
        </v-layout>
      </section>
      <section class="inner-section">
        <section-highlight
          :is_underline="true"
          :is_quote="true"
          :is_dark="true"
          :sticker="'righthand'"
        >
          “ The most important thing for transportation engineers is to create
          subway routes within budget and consider multiple factors to choose
          station locations”
        </section-highlight>
      </section>
    </article>
    <article>
      <section class="inner-section">
        <sectionTitle is_dark="false" :title="'Design goals'"></sectionTitle>
        <section-overview
          :title="'User '"
          :emphasize="'needs & goals'"
          :right="true"
          is_dark="false"
        >
          I dived into an intensive research sprint by conducting stakeholder
          interviews and participated in product discussions with the team.
        </section-overview>
        <div class="mx-auto">
          <img
            width="100%"
            height="100%"
            :src="require(`@/assets/media/subway/userstories.png`)"
          />
        </div>
      </section>
    </article>
    <article class="white">
      <section class="inner-section">
        <sectionTitle :title="'Design'"></sectionTitle>
        <section-overview
          :title="'Design  '"
          :emphasize="'Highlights'"
          :right="true"
        >
          Based on the demos and follow-up interviews, these were the most
          pressing issues that needed to be addressed.
        </section-overview>
      </section>
      <div class="mx-auto pa-12">
        <!-- <p class="mx-auto text-center">
          Accessible data visualizations to make informed decisions in creating
          subway routes
        </p> -->
        <section-highlight :is_underline="true" :is_quote="true">
          #1. Accessible data visualizations to make informed decisions in
          creating subway routes
        </section-highlight>
        <img
          class="mb-8"
          width="100%"
          height="100%"
          :src="require(`@/assets/media/subway/design1.png`)"
        />
        <hr />
        <section-highlight :is_underline="true" :is_quote="true">
          #2. AI powered route suggestions to optimize cost and route efficiency
        </section-highlight>
        <img
          class="mb-8"
          width="100%"
          height="100%"
          :src="require(`@/assets/media/subway/design2.png`)"
        />
        <hr />

        <section-highlight :is_underline="true" :is_quote="true">
          #3. Help compare multiple plans based on various factors
        </section-highlight>
        <img
          class="mb-8"
          width="100%"
          height="100%"
          :src="require(`@/assets/media/subway/design3.png`)"
        />
      </div>
    </article>
    <!-- <article id="insights" class="white">
      <section class="inner-section">
        <sectionTitle :title="'Ideation'"></sectionTitle>
        <section-overview
          :title="'Initial  '"
          :emphasize="'Ideas'"
          :right="true"
        >
          Based on the demos and follow-up interviews, these were the most
          pressing issues that needed to be addressed.
        </section-overview>
        <div class="mx-auto">
          <img
            width="100%"
            height="100%"
            :src="require(`@/assets/media/subway/ideas.png`)"
          />
        </div>
        <sectionTitle :title="'Exploration'"></sectionTitle>
        <section-overview
          :title="'Feasible  '"
          :emphasize="'Ideas'"
          :right="true"
        >
          Based on the demos and follow-up interviews, these were the most
          pressing issues that needed to be addressed.
        </section-overview>
        <div class="mx-auto">
          <img
            width="100%"
            height="100%"
            :src="require(`@/assets/media/subway/feasible.png`)"
          />
          <img
            width="100%"
            height="100%"
            :src="require(`@/assets/media/subway/sketches.png`)"
          />
        </div>
      </section>
    </article> -->

    <article id="reflection" class="white">
      <section class="inner-section">
        <sectionTitle :title="'What I learned'"></sectionTitle>
        <section-overview
          :title="'on project outcomes'"
          :emphasize="'Reflecting'"
          :left="true"
        >
          I enjoyed doing this assignment and cleared the design challenge
          round. The panel was impressed with the level of details and thought
          process put in the project with little research available.
        </section-overview>
        <v-layout wrap class="my-6">
          <v-flex xs12 sm6>
            <section-content
              class="mr-12"
              is_number="true"
              :number="'01'"
              :title="'Assumptions help to navigate an unknown space'"
            >
              This project was a great learning experience to be creative and
              put myself in the shoes of the users. I made assumptions and
              worked under constraints of time.
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'02'"
              :title="'Research when there is a blocker'"
            >
              Doing competitive research has been extremely helpful in understanding similar target users and analyzing the features.
            </section-content>
          </v-flex>
        </v-layout>
      </section>
    </article>
    <Contact />
  </main>
</template>
    
    <script>
import projectHeader from "@/components/project/project-header.vue";
import projectTestimonials from "@/components/project/project-testimonials.vue";
import sectionTitle from "@/components/project/section-title.vue";
import sectionOverview from "@/components/project/section-overview.vue";
import sectionContent from "@/components/project/section-content.vue";
import sectionHighlight from "@/components/project/section-highlight.vue";
import Contact from "@/components/contact.vue";
import Accordion from "@/components/project/accordion.vue";
import Callout from "@/components/project/callout.vue";
import SectionCard from "@/components/project/section-card.vue";

export default {
  components: {
    sectionContent,
    sectionOverview,
    sectionTitle,
    projectHeader,
    sectionHighlight,
    projectTestimonials,
    Contact,
    Accordion,
    Callout,
    SectionCard,
  },
  data: () => {
    return {
      project_desc:
        "A web app for engineers to plan a new subway system for a city.",
      show_process: false,
    };
  },
};
</script>
    
    <style lang="scss" scoped>
.project-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.stickynav {
  position: absolute;
}
.glass-header {
  background: rgba(255, 255, 255, 0.176);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease; /* Add a transition for hover effect */
}

.subnavigation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  z-index: 100;
  margin-top: 8rem;
  top: 1rem;
  right: 0.5rem;
  position: fixed;

  a {
    color: #6f6f6f;
    font-weight: 500;
    font-size: 12px;
    margin: 0.3rem;
    text-align: right;
    &:hover {
      color: #474747;
    }
  }
}
.notifications-bg {
  background: #3855b3;
  //   display: flex;
  //   flex-direction: column;
  //   align-content: center;
  //   justify-content: end;
  //   max-width: 80%;
  //   margin: auto;
}
.smooth-shadow {
  box-shadow: 1.1px 0.8px 12.8px -21px rgba(0, 0, 0, 0.035),
    9px 6px 102px -21px rgba(0, 0, 0, 0.07);
}
@media screen and (max-width: 500px) {
  .stickynav {
    display: none;
  }
}
</style>