<template>
  <main class="project-section">
    <div class="builder-bg mx-16 mt-4">
      <v-img
        height="100%"
        width="100%"
        :src="require(`@/assets/media/notifications/banner3.png`)"
      ></v-img>
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
            <sectionTitle :title="'Ushur /'"></sectionTitle>
            <projectHeader
              :title="'🧑‍💻 Workflow Builder '"
              :description="project_desc"
            ></projectHeader>
            <sectionContent>
              <div>
                Ushur is a
                <span class="font-weight-medium"
                  >no-code 💻 conversational-AI platform where solution
                  developers
                </span>
                create and lauch apps to Fortune100 customers, solutions that
                <span class="font-weight-medium"
                  >impact millions of end users.</span
                >
                However, the current platform suffers from an outdated UI and
                usability issues, resulting in errors that hinder developer
                efficiency and impact key business goals.

                <div class="mt-4">
                  I collaborated closely with product and customer experience
                  team and led the redesign under the guidance of my Design
                  Manager. As the sole designer, handled ideation, wireframes,
                  high-fidelity mockups, and streamlined dev handoff.
                </div>

                <!-- <br> -->
              </div>
            </sectionContent>
            <sectionTitle :title="'Overview'"></sectionTitle>
            <v-layout wrap class="align-start justify-space-between mt-4">
              <v-flex xs12 sm6>
                <section-content :title="'Problem'">
                  <div>
                    Users found it challenging to use the drag-&-drop interface
                    and hard to discover primary features. The main objective of
                    this redesign is to tackle identified challenges and enhance
                    their work efficiency.
                  </div>
                </section-content>
              </v-flex>
              <v-flex xs12 sm5>
                <section-content :title="'Outcome'">
                  <div>
                    I overhauled the flow builder, improved usability,
                    redesigned & modernized the UI with industry standards
                    maximizing efficiency & user satisifaction.
                  </div>
                </section-content>
              </v-flex>
              <v-flex xs12>
                <sectionTitle :title="'Scope and Constraints'"></sectionTitle>
                <sectionContent>
                  <div>
                    I self-initiated the project following discussions with the
                    design team, identifying a longstanding, high-impact, and
                    critical issue in the design backlog. The goal was to
                    enhance and simplify a complex tool without disrupting the
                    existing user journey.
                  </div>
                  <div class="mt-2">
                    Initial focus was on revamping one part of product -
                    drag-and-drop UI—a key component of the product. However,
                    deeper insights from the customer feedback expanded the
                    scope to redesigning the form builder UI, a crucial
                    component for users. This transformation reflected a
                    strategic move to address broader user needs and improve
                    overall usability.
                  </div>
                </sectionContent>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm3>
            <sectionTitle :title="'Info'"></sectionTitle>
            <sectionContent :title="'Role'">
              <div>UX Designer</div>
            </sectionContent>
            <sectionContent :title="'Timeline'">
              <v-img
                class="mt-3"
                width="100%"
                :src="require(`@/assets/media/builder/timeline.png`)"
              ></v-img>
            </sectionContent>
            <sectionContent :title="'Tools'">
              <div>Figma</div>
            </sectionContent>
            <sectionContent :title="'Team'">
              <div>Designer - Me</div>
              <div>1 Product manager</div>
              <div>1 Design manager</div>
              <div>Engineering team</div>
            </sectionContent>
          </v-flex>
        </v-layout>
      </section>

      <section class="inner-section">
        <section-highlight
          :is_underline="true"
          :is_quote="true"
          :sticker="'dontknow'"
        >
          “ We know users found the UI confusing. But, ”
          <template v-slot:description>
            <!-- <sectionContent style="width: 65%; margin: 2rem auto 0rem">
                Adhering to a set launch date required us to prioritize engineering
                over design. Key milestones were determined by engineering estimates,
                and the time allocated for design was essentially 5 days. 
              </sectionContent> -->
          </template>
        </section-highlight>
      </section>
    </article>
    <article class="greybg" id="users">
      <section class="inner-section">
        <sectionTitle :title="'The users'"></sectionTitle>
        <section-overview :title="'is it for?'" :emphasize="'Who'" :left="true">
          <div>
            The users are non-technical developers who want a simpler and faster
            way to create applications tailored to various business needs. A day
            in life of the user involves building app (step by step workflow) by
            drag and drop of modules like email, SMS and form elements.
          </div>
        </section-overview>
        <div
          class="my-3 py-3 mx-4 justify-space-between align-center d-flex flex-wrap flex-sm-nowrap"
        >
          <div class="mx-auto text-center">
            <img
              width="40%"
              :src="require(`@/assets/media/aisuggest/idea1.png`)"
            />
            <div>
              <div class="font-weight-medium">Business problem</div>
              <span class="font-italic font-weight-light"
                >“Customer wants to claim Insurance easily”</span
              >
            </div>
          </div>
          <img
            class="mx-4"
            width="40"
            height="20"
            :src="require(`@/assets/media/aisuggest/arrow-right.png`)"
          />
          <div class="mx-auto white text-center smooth-shadow pa-8 rounded-xl">
            <img
              width="40%"
              :src="require(`@/assets/media/aisuggest/dev.png`)"
            />
            <div>
              <div class="font-weight-medium">Citizen developer - User</div>
              <span class="font-italic font-weight-light"
                >“Build solution (workflow) using Ushur No-code app”</span
              >
            </div>
          </div>
          <img
            class="mx-4"
            width="40"
            height="20"
            :src="require(`@/assets/media/aisuggest/arrow-right.png`)"
          />
          <div class="mx-auto text-center">
            <img
              width="40%"
              :src="require(`@/assets/media/aisuggest/phone.png`)"
            />
            <div>
              <div class="font-weight-medium">Launch to customer</div>
              <span class="font-italic font-weight-light"
                >“Customer receives app link to smartphone”</span
              >
            </div>
          </div>
        </div>
        <div class="text-center">
          A citizen developer is an employee with no/low coding knowledge who
          creates software applications.
        </div>
        <div class="mx-auto pa-4">
          <img
            width="100%"
            height="100%"
            :src="require(`@/assets/media/builder/context.png`)"
          />
          <div class="text-center  my-4">
            User builds and tests app using no-code Ushur platform. 
          </div>
        </div>
      </section>
    </article>
    <article class="">
      <section class="inner-section">
        <sectionTitle :title="'Context & needs'" :is_dark="true"></sectionTitle>
        <section-overview
          :title="'is it needed?'"
          :emphasize="'Why'"
          :left="true"
          :is_dark="true"
        >
          Users found the tool to be complex
          <span class="font-weight-medium white--text">
            critical events that risk customer drop off .
          </span>
        </section-overview>
        <section-highlight
          :is_underline="true"
          :is_quote="true"
          :is_dark="true"
          :sticker="'righthand'"
        >
          “ The most important thing for citizen developers is being aware of
          launched campaigns and performance, critical workflow failures that
          impact end customers.”
          <template v-slot:description>
            <!-- <sectionContent style="width: 65%; margin: 2rem auto 0rem">
                Adhering to a set launch date required us to prioritize engineering
                over design. Key milestones were determined by engineering estimates,
                and the time allocated for design was essentially 5 days. 
              </sectionContent> -->
          </template>
        </section-highlight>
      </section>
    </article>
    <div class="is-relative">
      <img
        class="is-absolute is-center"
        :src="require(`@/assets/media/aisuggest/arrow5.png`)"
      />
    </div>
    <article id="process" class="white">
      <div v-if="show_process">
        <section class="inner-section">
          <sectionTitle :title="'Market Study'"></sectionTitle>
          <section-overview
            :title="'Understanding —'"
            :emphasize="'Industry Patterns'"
            :right="true"
          >
            <div>
              To understand how other B2B products do with their notification
              system, I analyzed a few products to gauge the main features and
              functionalities.
              <span class="font-weight-medium"
                >I created list of various themes and patterns that emerged from
                the study to guide my process.</span
              >
            </div>
          </section-overview>
          <div class="mx-auto pa-4 greybg">
            <img
              width="100%"
              height="100%"
              :src="require(`@/assets/media/notifications/market.png`)"
            />
          </div>
          <v-layout row wrap align-start justify-space-between mt-4 pa-4>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'Segmented control'">
                <div>
                  Tabs and segmented buttons to segregate important events.
                </div>
              </section-card>
            </v-flex>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'Grouping and stacking'">
                <div>
                  Grouping by categories or source of notification to digest
                  information quickly.
                </div>
              </section-card>
            </v-flex>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'Prioritizing'">
                <template v-slot>
                  <div>
                    Visual indication to highlight and draw attention to high
                    impact & critical events.
                  </div>
                </template>
              </section-card>
            </v-flex>

            <!-- <v-flex xs12 sm4>
                <section-card :title="'Tell what to expect'">
                  <template v-slot>
                    <div>Nudges to inform what value to expect.</div>
                  </template>
                </section-card>
              </v-flex> -->
          </v-layout>
        </section>
        <div class="is-relative">
          <img
            class="is-absolute"
            style="top: -6rem"
            :src="require(`@/assets/media/aisuggest/arrow2.png`)"
          />
        </div>
        <section class="inner-section">
          <sectionTitle :title="'Questions and unknowns'"></sectionTitle>
          <section-overview
            :title="'Dealing with —'"
            :emphasize="'Unknowns'"
            :right="true"
          >
            The themes and patterns helped me
            <span class="font-weight-medium"> ask clarifying questions</span>
            and identify cases that haven't emerged during the kickoff. At this
            point, the requirements from product team were rough (some details
            of events listed in spreadsheet). But,
            <span class="font-weight-medium">
              these aren't enough to frame the content of each
              notification.</span
            >
            So, I used my judgement on making some guesses.
          </section-overview>

          <div class="greybg pa-6">
            <section-highlight class="py-2">
              Some unknowns...
              <p class="text-center body-1 mt-2"></p>
              <img
                width="70%"
                :src="require(`@/assets/media/notifications/unknowns.png`)"
              />
            </section-highlight>
          </div>
        </section>
        <div class="is-relative">
          <img
            class="is-absolute"
            style="right: 6rem"
            :src="require(`@/assets/media/aisuggest/arrow1.png`)"
          />
        </div>
        <section class="inner-section">
          <sectionTitle :title="'Assumptions'"></sectionTitle>
          <section-overview
            :title="'to fill the gaps'"
            :emphasize="'Assumptions'"
            :left="true"
          >
            Since I couldn't do user interviews to know their expectations, in
            order to fill the gap, I discussed with team and we made some
            assumptions and design considerations.
          </section-overview>

          <div class="greybg pa-6">
            <section-highlight class="py-2">
              Things to consider...
              <p class="text-center body-1 mt-2"></p>
              <img
                width="70%"
                :src="
                  require(`@/assets/media/notifications/considerations.png`)
                "
              />
            </section-highlight>
          </div>
        </section>

        <!-- </article> -->

        <section class="inner-section mt-12">
          <sectionTitle :title="'Design review 1-2'"></sectionTitle>
          <section-overview
            :title="'Overcoming'"
            :emphasize="'constraints'"
            :right="true"
          >
            <div>
              <span class="font-weight-medium">Absence of top nav</span> posed a
              challenge to place the bell elsewhere. I came up with many options
              and discussing with the team helped me
              <span class="font-weight-medium"
                >analyze pros and cons and decide on an optimal location for the
                bell so it's discoverable & prominent.</span
              >
            </div>
          </section-overview>
          <div class="text-center my-2 grey--text font-weight-medium">
            4 design options for placing the bell.
          </div>
          <div class="greybg text-center pa-8">
            <img
              width="80%"
              :src="require(`@/assets/media/notifications/bellposition.png`)"
            />
          </div>
        </section>

        <section class="inner-section">
          <sectionTitle :title="'Design review 3-4'"></sectionTitle>
          <section-overview
            :title="'critical events'"
            :emphasize="'Prioritizing'"
            :left="true"
          >
            <div>
              While grouping events by source made most sense for the user,
              there's a risk of missing a critical event when it's stacked to
              bottom. Adhering to the goal to keep it easy to use, we chose to
              categorize them into
              <span class="font-weight-medium"
                >primary and informational tabs.
              </span>
            </div>
          </section-overview>
          <div class="text-center my-2 grey--text font-weight-medium">
            3 design options for prioritizing and anchoring the notifications.
          </div>
          <div class="greybg pa-4">
            <v-layout row wrap align-end justify-space-between mt-4 pb-4>
              <v-flex xs12 sm4>
                <img
                  width="90%"
                  :src="require(`@/assets/media/notifications/page.png`)"
                />
                <div class="light--text text-center">Full page view</div>
              </v-flex>
              <v-flex xs12 sm4>
                <img
                  width="90%"
                  :src="require(`@/assets/media/notifications/drawer.png`)"
                />
                <div class="light--text text-center">Drawer</div>
              </v-flex>
              <v-flex xs12 sm4>
                <img
                  width="90%"
                  :src="require(`@/assets/media/notifications/panel.png`)"
                />
                <div class="light--text text-center">Side panel</div>
              </v-flex>

              <!-- <v-flex xs12 sm4>
                    <section-card :title="'Tell what to expect'">
                      <template v-slot>
                        <div>Nudges to inform what value to expect.</div>
                      </template>
                    </section-card>
                  </v-flex> -->
            </v-layout>
          </div>
        </section>

        <section class="inner-section">
          <sectionTitle :title="'Design review 5-6'"></sectionTitle>
          <section-overview
            :title="'Information'"
            :emphasize="'hierarchy'"
            :right="true"
          >
            <div>
              While I did not have relevant examples of what information to
              display for campaign related activities, I took references based
              on other events in the spreadsheet to design the information so
              it's easy to scan quickly.
            </div>
          </section-overview>
          <div class="text-center my-2 grey--text font-weight-medium">
            Design options for quickly digesting content of notification.
          </div>
          <div class="greybg text-center pa-8">
            <img
              width="100%"
              :src="require(`@/assets/media/notifications/cards.png`)"
            />
          </div>
        </section>
        <section class="inner-section">
          <sectionTitle :title="'Design review 7-8'"></sectionTitle>
          <section-overview
            :title="'Providing user with'"
            :emphasize="'control and delightful animations'"
            :right="true"
          >
            <div>
              After discussing, we believed it would be meaningful to allow the
              user to mark a notification as read or unread for refering it
              back. I prototyped different motion designs to our team to get
              feedback on a read/unread visual indicator. As a team, we came up
              with
              <span class="font-weight-medium"
                >decisions on when & how a notification will be marked as read
                or unread.</span
              >
            </div>
          </section-overview>
          <div class="text-center my-2 grey--text font-weight-medium">
            Design options for read / unread indicator
          </div>
        </section>
        <div class="darkbg text-center pa-8">
          <v-layout row wrap align-start justify-center mt-4>
            <v-flex xs12 sm3>
              <v-img
                :src="require(`@/assets/media/notifications/dot3.png`)"
              ></v-img>
              <div class="light--text">Iteration 1</div>
            </v-flex>
            <v-img
              class="mx-2"
              width="20"
              height="40"
              :src="require(`@/assets/media/aisuggest/arrow-right.png`)"
            ></v-img>
            <v-flex xs12 sm3>
              <v-img
                class="px-4"
                :src="require(`@/assets/media/notifications/colorhover.gif`)"
              ></v-img>
              <div class="light--text">Iteration 2</div>
            </v-flex>
            <v-img
              class="mx-2"
              width="20"
              height="40"
              :src="require(`@/assets/media/aisuggest/arrow-right.png`)"
            ></v-img>
            <v-flex xs12 sm4>
              <video width="80%" autoplay muted loop>
                <source
                  :src="require(`@/assets/media/notifications/dot1.mp4`)"
                  type="video/mp4"
                />
                Your browser does not support HTML video.
              </video>
              <div class="light--text">Iteration 3</div>
            </v-flex>
          </v-layout>
        </div>
        <div class="greybg">
          <v-layout row wrap align-end justify-center pa-12>
            <v-flex xs12 sm5>
              <img
                width="100%"
                :src="
                  require(`@/assets/media/notifications/bell conditions.png`)
                "
              />
              <div class="light--text text-center">Conditions</div>
            </v-flex>
            <v-flex xs12 sm4>
              <img
                width="100%"
                class="px-4"
                :src="require(`@/assets/media/notifications/states.png`)"
              />
              <div class="light--text text-center">Transition flow</div>
            </v-flex>
          </v-layout>
        </div>
      </div>

      <div v-else>
        <v-btn
          class="mx-auto is-center text-capitalize"
          rounded
          raised
          x-large
          outlined
          @click.stop="show_process = !show_process"
        >
          ❤️ I want to see 👀 Process<img
            :src="require(`@/assets/media/me/right-down.svg`)"
            alt="arrow"
        /></v-btn>
      </div>
      <v-btn
        rounded
        raised
        outlined
        v-if="show_process"
        class="mx-auto is-center text-capitalize"
        @click.stop="show_process = !show_process"
        >Hide Process</v-btn
      >
    </article>

    <div class="is-relative">
      <img
        class="is-absolute is-center"
        :src="require(`@/assets/media/aisuggest/arrow4.png`)"
      />
    </div>

    <!-- <article class="white">
        <section class="inner-section">
          <sectionTitle :title="'Technical constraints'"></sectionTitle>
          <section-overview :title="'Challenges'">
            <div>
              After presenting the concept with product managers, although we
              collectively chose concept #3 as the right direction to go forward,
              the API was still at an early stage and had a limitation of being
              able to generate only 3 recommendations at a time based off of
              original text. This led us to choose a different design direction
              and scoping the concept #3 one to future.
            </div>
          </section-overview>
        </section>
      </article> -->
    <article>
      <section class="inner-section">
        <sectionTitle
          :title="'Part-1: Modules Redesign'"
          :is_dark="true"
        ></sectionTitle>
        <section-overview
          :title="'Module Shelf'"
          :emphasize="'Final design —'"
          :left="true"
          :is_dark="true"
        >
          <div>
            In the first part of design, I solved the scroll issues associated
            with the module container by creating a more scalable design and
            future proofing it to accomodate more modules.
          </div>
        </section-overview>
        <div class="d-flex justify-center">
          <img
            width="100%"
            height="100%"
            :src="require(`@/assets/media/builder/inspector.png`)"
          />
        </div>
        <!-- <v-img
                class="mt-3"
                width="100%"
                :src="require(`@/assets/media/notifications/anim1.gif`)"
              ></v-img> -->
      </section>
      <section class="inner-section">
        <sectionTitle
          :title="'Part-2: Form Builder Redesign'"
          :is_dark="true"
        ></sectionTitle>
        <section-overview
          :title="'Form module'"
          :emphasize="'Final design —'"
          :left="true"
          :is_dark="true"
        >
          <div>
            In the second part of design, I solved the usability issues making
            it difficult and confusing to design a form using the form module
            builder. A consistent design was followed for a seamless experience
            placing the fields on the left and allowing to drop them to the
            right to build the form.
          </div>
        </section-overview>
        <div class="d-flex justify-center">
          <img
            width="100%"
            height="100%"
            :src="require(`@/assets/media/builder/form.png`)"
          />
        </div>
        <!-- <v-img
                class="mt-3"
                width="100%"
                :src="require(`@/assets/media/notifications/anim1.gif`)"
              ></v-img> -->
      </section>
    </article>
    <article id="reflection" class="white">
      <section class="inner-section">
        <sectionTitle :title="'What I learned'"></sectionTitle>
        <section-overview
          :title="'on project outcomes'"
          :emphasize="'Reflecting'"
          :left="true"
        >
          The feature was loved by everyone as it brought a new layer of delight
          to a technical product and influenced how other features should follow
          similar patterns going forward.
        </section-overview>
        <v-layout wrap class="my-6">
          <v-flex xs12 sm6>
            <section-content
              class="mr-12"
              is_number="true"
              :number="'01'"
              :title="'Pushing boundaries with limited data'"
            >
              As the product was still in early stage, it was essential to work
              with limited data and understanding of target audience by making
              assumptions and taking feedback early on.
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'02'"
              :title="'Ask questions'"
            >
              Speaking up and asking clarifying questions to familiarize myself
              with product played a pivotal role in avoiding design pitfalls
              later on.
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'03'"
              :title="'Ambiguity is good'"
            >
              Not having a clear and direct direction allowed me to be creative
              and make the design scalable.
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
        "Redesigning no-code interface to help developers build workflows 10x faster 💨",
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
.builder-bg {
  background: linear-gradient(148deg, #6fcf97 0%, #6fcf97 87.72%);
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