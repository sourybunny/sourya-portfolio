<template>
  <main class="project-section">
    <div class="builder-bg mt-4 py-12">
      <v-img
        class="mx-auto"
        height="80%"
        width="80%"
        :src="require(`@/assets/media/builder/builder.png`)"
      ></v-img>
    </div>
    <article class="white">
      <div class="stickynav">
        <div class="subnavigation glass-header">
          <a href="#overview">Overview</a>
          <a href="#users">Users</a>
          <a href="#pain">Pain Points</a>

          <a href="#process">Process</a>
          <a href="#concepts">Ideation</a>
          <a href="#design">Design</a>
          <a href="#reflection">Reflection</a>
        </div>
      </div>
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
                However, the current platform suffers from an
                <span class="font-weight-medium">
                  outdated UI and usability issues, resulting in errors that
                  hinder developer efficiency</span
                >
                and impact key business goals.

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
                    current design is not scalable leading to a frustrating
                    experience. Users found it
                    <span class="font-weight-medium">
                      outdated and fraught with friction points leading to high
                      error rate.</span
                    >
                  </div>
                </section-content>
              </v-flex>
              <v-flex xs12 sm5>
                <section-content :title="'Outcome'">
                  <div>
                    I led the complete overhaul of the form builder feature,
                    <span class="font-weight-medium">
                      improved usability maximizing efficiency & user
                      satisifaction.</span
                    >
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
    </article>
    <article class="greybg" id="users">
      <section class="inner-section">
        <sectionTitle :title="'The users'"></sectionTitle>
        <section-overview :title="'is it for?'" :emphasize="'Who'" :left="true">
          <div>
            The users are <span class="font-weight-medium">non-technical developers</span> who want a simpler and faster
            way to create applications tailored to various business needs. A day
            in life of the user involves building app (step by step workflow) by
            <span class="font-weight-medium">drag and drop of modules like email, SMS and form elements</span>.
          </div>
        </section-overview>
        <div class="mx-auto pa-4">
          <img
            width="100%"
            height="100%"
            :src="require(`@/assets/media/builder/context.png`)"
          />
          <div class="text-center my-4">
            User builds and tests app using no-code Ushur platform.
          </div>
        </div>
      </section>
    </article>
    <article class="" id="pain">
      <section class="inner-section">
        <sectionTitle
          :title="'why redesign is required?'"
          :is_dark="true"
        ></sectionTitle>
        <section-overview
          :title="'Pain Points'"
          :emphasize="'Current'"
          :left="true"
          :is_dark="true"
        >
          I collaborated with other designers, customer feedback team to collate
          all the pain points and together we prioritized
          <span class="font-weight-medium white--text">
            high impact issues that need need to be addressed immediately.
          </span>
        </section-overview>
        <div class="mx-auto mb-8 text-center darkbg" >
          <img 
              width="70%"
              :src="require(`@/assets/media/builder/builderpersona.png`)"
            />
        </div>
        <div class="content">
          <div class="pain-points">
            <div class="pain-point">
              <div class="pain-title">
                Poor Error Visibility & Visual Hierarchy
              </div>
              <div class="pain-description">
                Errors in workflow steps are not clearly visible and poor visual
                hierarchy makes it hard to identify which steps have validation
                issues or missing configurations
              </div>
              <div class="metric">
                Spends 25% of time hunting for hidden errors
              </div>
            </div>
    
            <div class="pain-point">
              <div class="pain-title">Scroll & Drag-Drop Issues</div>
              <div class="pain-description">
                Scrolling behavior interferes with drag-and-drop functionality,
                making it difficult to move elements across different parts of
                the workflow.
              </div>
              <div class="metric">
                Takes multiple attempts to drag-drop from bottom.
              </div>
            </div>
    
            <div class="pain-point">
              <div class="pain-title">Poor Module Scalability</div>
              <div class="pain-description">
                Module interface doesn't scale well when workflows grow complex
                - becomes overwhelming with many elements and poor visual
                hierarchy
              </div>
              <div class="metric">
                Workflows with 4+ modules become difficult to edit
              </div>
            </div>
    
            <div class="pain-point">
              <div class="pain-title">
                No Mobile Preview During Form Building
              </div>
              <div class="pain-description">
                Testing is time-consuming as it's hard to visualize how the form
                would appear and function in mobile view while building
              </div>
              <div class="metric">
                Takes 20+ clicks to set up standard 8-field form
              </div>
            </div>
          </div>
        </div>
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
          <sectionTitle :title="'Journey'"></sectionTitle>
          <section-overview
            :title="'Understanding —'"
            :emphasize="'User Journey'"
            :right="true"
          >
            <div>
              <span class="font-weight-medium"
                >I shadowed users building workflows to understand their
                behavior</span
              >

              in each step starting from creating workflow steps to building a
              form and launching the workflow. Using the platform myself helped
              me put myself in the shoes of te user.
            </div>
          </section-overview>
          <div class="mx-auto pa-4 greybg">
            <img
              width="100%"
              height="100%"
              :src="require(`@/assets/media/builder/flow.png`)"
            />
          </div>
          <div class="mx-auto pa-4 greybg">
            <img
              width="100%"
              height="100%"
              :src="require(`@/assets/media/builder/journey.png`)"
            />
          </div>
          <div class="mx-auto pa-4 greybg">
            <img
              width="100%"
              height="100%"
              :src="require(`@/assets/media/builder/current.png`)"
            />
          </div>
        </section>
        <div class="is-relative">
          <img
            class="is-absolute"
            style="top: -6rem"
            :src="require(`@/assets/media/aisuggest/arrow2.png`)"
          />
        </div>
        <section class="inner-section">
          <sectionTitle :title="'Pain Points'"></sectionTitle>
          <section-overview
            :title="'Identifying —'"
            :emphasize="'Pain Points'"
            :right="true"
          >
            I led a collaborative exercise with the design team to
            systematically map user frustrations through affinity mapping
            sessions and user journey walkthroughs.<span
              class="font-weight-medium"
              >Cross-referencing these findings with support ticket
              analysis.</span
            >
            and user feedback helped us prioritize which pain points had the
            highest business impact.
          </section-overview>

          <div class="greybg pa-6">
            <section-highlight class="py-2">
              Prioritizing pain points
              <p class="text-center body-1 mt-2"></p>
              <img
                width="100%"
                :src="require(`@/assets/media/builder/painpoints.png`)"
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

        <!-- </article> -->
        <section class="inner-section">
          <sectionTitle :title="'Constraints'"></sectionTitle>
          <section-overview
            :title="'Challenges and'"
            :emphasize="'Constraints'"
            :right="true"
          >
            <div>
              Involving developers and tech team to design review sessions
              early-on in the process helped uncover constraints. Collaboration
              with developers helped me
              <span class="font-weight-medium"
                >turn technical limitations into design innovation
                opportunities.</span
              >
            </div>
          </section-overview>
          <div>
            <!-- <h1 class="white--text">Every Second Counts in Banking Support</h1> -->
            <div class="impact-statement">
              <h1 class="impact-text black--text">
                The core problem is a
                <span class="impact-highlight red--text">
                  mismatch between how added form fields appear in the builder
                  versus the final customer mobile view.</span
                >
              </h1>
              <p>
                Users configure fields in the panel but struggle to visualize
                how these elements will actually look and behave on mobile
                devices, leading to poor customer experiences and post-launch
                fixes.
              </p>
            </div>
          </div>

          <div class="text-center my-2 grey--text font-weight-medium">
            Main challenge is the complex technical architecture of elements.
          </div>
          <div class="greybg">
            <img
              width="90%"
              :src="require(`@/assets/media/builder/constraints.png`)"
            />
          </div>
          <div
            class="headline my-8 font-italic font-weight-medium"
            style="max-width: 800px"
          >
            "A mobile previewer beside the form builder would solve this
            perfectly, but wasn't technically feasible. So I asked: How might we
            solve mobile visualization within existing constraints?"
          </div>
          <div>
            Key Design Strategy: Transformed the builder's field list from
            abstract configuration items into mobile-representative previews
            that give users immediate visual feedback about how their forms will
            appear to customers, bridging the mental model gap within the
            current technical framework. I focused on redesigning the visual
            hierarchy and field representation within the existing builder
            interface. By making form elements in the configuration panel more
            closely mirror their mobile appearance - including proper spacing,
            typography scaling, and interaction states - users could better
            visualize the final customer experience without requiring a separate
            preview component.
          </div>
          <!-- <v-flex xs12 sm4>
                    <section-card :title="'Tell what to expect'">
                      <template v-slot>
                        <div>Nudges to inform what value to expect.</div>
                      </template>
                    </section-card>
                  </v-flex> -->
        </section>
        <section class="inner-section">
          <sectionTitle :title="'Design review 1-2'"></sectionTitle>
          <section-overview
            :title="'Market'"
            :emphasize="'Research'"
            :right="true"
          >
            <div>
              <span class="font-weight-medium"
                >Our platform's mental model differs significantly from industry
                standards.</span
              >
              While most form builders use the familiar left-to-right, Ushur's
              workflow builder uses a bottom-to-top flow structure leading to
              steeper learning curve.
            </div>
          </section-overview>
          <div class="text-center my-2 grey--text font-weight-medium">
            Insights from 10 similar B2B apps with form builder
          </div>
          <v-layout row wrap align-start justify-space-between mt-4 pa-4>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'8/10'">
                <div>have draggable form fields from left to right</div>
              </section-card>
            </v-flex>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'7/10'">
                <div>have a way to preview the form</div>
              </section-card>
            </v-flex>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'10/10 '">
                <template v-slot>
                  <div>used progressive disclosure for properties</div>
                </template>
              </section-card>
            </v-flex>
          </v-layout>
        </section>

        <section class="inner-section">
          <sectionTitle :title="'Design review 1-2'"></sectionTitle>
          <section-overview
            :title="'Feedback on'"
            :emphasize="'Ideation'"
            :right="true"
          >
            <div>
              I came up with concepts that are feasible based on the timeline
              and capacity while also presenting long term solutions to the team
              that would significantly improve the user experience.
            </div>
          </section-overview>
          <div></div>
          <div class="text-center my-4 grey--text font-weight-medium">
            4 design concepts addressing immediate issues and long term
            feasibility
          </div>
          <div class="greybg pa-4">
            <img
              width="90%"
              :src="require(`@/assets/media/builder/ideation.png`)"
            />
          </div>
          <!-- <v-flex xs12 sm4>
                    <section-card :title="'Tell what to expect'">
                      <template v-slot>
                        <div>Nudges to inform what value to expect.</div>
                      </template>
                    </section-card>
                  </v-flex> -->
        </section>

        <section class="inner-section">
          <sectionTitle :title="'Design review 3-4'"></sectionTitle>
          <section-overview
            :title="'Design'"
            :emphasize="'Direction'"
            :right="true"
          >
            <div>
              <div>
                Understanding the broader product vision allowed us to
                <span class="font-weight-medium"
                  >prioritize features that would deliver immediate user value
                  while building a foundation for advanced capabilities</span
                >
                like AI-assisted workflow generation and writing
                assistant.Feedback from the team helped choose a design
                direction.
              </div>
            </div>
          </section-overview>
          <div class="text-center my-2 grey--text font-weight-medium">
            Chosen direction
          </div>
          <div class="darkbg text-center pa-8">
            <img
              width="100%"
              :src="require(`@/assets/media/builder/direction.png`)"
            />
          </div>
        </section>
        <section class="inner-section">
          <sectionTitle :title="'Design review 7-8'"></sectionTitle>
          <section-overview
            :title="'and visual design'"
            :emphasize="'Iterations  '"
            :left="true"
          >
            <div>
              I reviewed designs with the product manager, design manager to
              understand future scope, business impact. This helped
              <span class="font-weight-medium"
                >align design decisions with strategic business goals and ensure
                the redesign would scale</span
              >
              with Ushur's evolving platform needs
            </div>
          </section-overview>
          <div class="text-center my-2 grey--text font-weight-medium">
            Iterations
          </div>
        </section>
        <div class="greybg text-center pa-8">
          <v-layout row wrap align-start justify-center mt-4>
            <v-flex xs12 sm4>
              <v-img
                :src="require(`@/assets/media/builder/iteration2.png`)"
              ></v-img>
              <div class="light--text">Iteration 1</div>
            </v-flex>

            <v-flex xs12 sm4>
              <v-img
                class="px-4"
                :src="require(`@/assets/media/builder/iteration1.png`)"
              ></v-img>
              <div class="light--text">Iteration 2</div>
            </v-flex>
            <v-flex xs12 sm4>
              <v-img
                class="px-4"
                :src="require(`@/assets/media/builder/iteration3.png`)"
              ></v-img>
              <div class="light--text">Iteration 3</div>
            </v-flex>
          </v-layout>
        </div>
      </div>

      <div v-else>
        <v-btn
          class="mx-auto is-center text-capitalize yellow"
          rounded
          raised
          x-large
          outlined
          @click.stop="show_process = !show_process"
        >
          I want to see 👀 Process<img
        /></v-btn>
      </div>

      <section>
        <div class="greybg text-center pa-8">
          <img
            width="100%"
            :src="require(`@/assets/media/builder/compare1.png`)"
          />
        </div>
      </section>
      <section>
        <div class="greybg text-center pa-8">
          <img
            width="100%"
            :src="require(`@/assets/media/builder/compare2.png`)"
          />
        </div>
      </section>
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
    <article id="design">
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
        "Redesigning no-code interface to help developers build workflows 3x faster 💨",
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
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 8px;
  // box-shadow:
  //     0 8px 32px rgba(31, 38, 135, 0.25),
  //     inset 0 1px 0 rgba(255, 255, 255, 0.6),
  //     0 2px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* Enhanced glass effect with gradient overlay */
.glass-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.2) 100%
  );
  border-radius: inherit;
  pointer-events: none;
  z-index: -1;
}

.glass-header:hover {
  background: rgba(255, 255, 255, 0.45);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 12px 40px rgba(31, 38, 135, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 4px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-1px);
}

.subnavigation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.3rem 0.5rem;
  z-index: 100;
  margin-top: 8rem;
  top: 1rem;
  right: 0.5rem;
  position: fixed;
  min-width: 120px;
}

.subnavigation a {
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
  font-size: 12px;
  margin: 0.2rem 0;
  padding: 0.25rem 0.5rem;
  text-align: left;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
}

.subnavigation a:hover {
  color: rgba(0, 0, 0, 0.95);
  background: rgba(255, 255, 255, 0.4);
  transform: translateX(-2px);
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.subnavigation a:active {
  transform: translateX(-1px);
  background: rgba(255, 255, 255, 0.5);
}

/* Active state for current section */
.subnavigation a.active {
  color: rgba(0, 0, 0, 0.9);
  background: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.builder-bg {
  background: linear-gradient(148deg, #acdbf2 0%, #e3b0f1 87.72%);
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

.pain-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
}

.pain-point {
  background: #2a2d3a;
  border-radius: 15px;
  padding: 25px;
  border-left: 5px solid #e74c3c;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.pain-point:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  background: #323548;
}

.pain-point::before {
  content: "😤";
  position: absolute;
  top: -10px;
  right: 20px;
  font-size: 24px;
  background: #2a2d3a;
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.pain-title {
  font-size: 18px;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 10px;
}

.pain-description {
  font-size: 14px;
  color: #a0aec0;
  margin-bottom: 15px;
  line-height: 1.5;
}

.metric {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
}

@media (max-width: 768px) {
  .pain-points {
    grid-template-columns: 1fr;
  }

  .user-info {
    flex-direction: column;
    text-align: center;
  }

  body {
    padding: 20px 10px;
  }

  .header,
  .content {
    padding: 20px;
  }
}
.impact-statement {
  background: linear-gradient(
    135deg,
    rgba(239, 68, 68, 0.2),
    rgba(245, 158, 11, 0.2)
  );
  border: 2px solid rgba(239, 68, 68, 0.3);
  border-radius: 20px;
  padding: 40px;
  margin: 60px 0;
  position: relative;
  overflow: hidden;
}

.impact-statement::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ef4444, #f59e0b, #eab308);
}

.impact-text {
  font-size: clamp(18px, 3vw, 26px);
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 20px;
}

.impact-highlight {
  color: #fbbf24;
  font-weight: 700;
}
</style>
