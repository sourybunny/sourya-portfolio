<template>
  <main class="project-section">
    <div class="sensehawk-bg">
      <v-img
        height="50%"
        width="50%"
        class="mx-auto mt-16"
        :src="require(`@/assets/media/aisuggest/main.png`)"
      ></v-img>
    </div>
    <article class="white">
      <section class="inner-section" style="width: 70%; margin-left: 17.5%">
        <v-layout wrap class="align-start justify-space-between">
          <v-flex xs8>
            <sectionTitle :title="'Ushur /'"></sectionTitle>
            <projectHeader
              :title="'AI Smart Suggest'"
              :description="project_desc"
            ></projectHeader>
            <sectionContent>
              <div style="margin-bottom: 2rem; width: 85%">
                Ushur helps citizen developers (users) create workflows using
                no-code drag and drop modules and deploy them to customers in
                insurance, healthcare and financial companies.

                <!-- <br> -->
              </div>
            </sectionContent>
            <sectionTitle :title="'Overview'"></sectionTitle>
            <v-layout wrap class="align-start justify-space-between mt-4">
              <v-flex xs12 sm6>
                <section-content :title="'Opportunity'">
                  <div>
                    Citizen developers (users) struggle with language as they
                    build customer facing forms using Ushur drag and drop
                    modules such as SMS, email and form builder modules.
                  </div>
                </section-content>
              </v-flex>
              <v-flex xs12 sm5>
                <section-content :title="'Outcome'">
                  <div>
                    I designed a gen AI writing assistant that helps developers
                    build workflows faster by eliminating the language barrier.
                  </div>
                </section-content>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs3>
            <sectionTitle :title="'Info'"></sectionTitle>
            <sectionContent :title="'Role'">
              <div>
                UX Designer (Market research, Ideation, concept design, visual
                design)
              </div>
            </sectionContent>
            <sectionContent :title="'Timeline'">
              <v-img
                class="mt-3"
                width="100%"
                :src="require(`@/assets/media/aisuggest/timeline.png`)"
              ></v-img>
            </sectionContent>
            <sectionContent :title="'Tools'">
              <div>Figma</div>
            </sectionContent>
            <sectionContent :title="'Team'">
              <div>2 Designers,</div>
              <div>2 Product managers,</div>
              <div>AI & Engg. team</div>
            </sectionContent>
          </v-flex>
        </v-layout>
      </section>
    </article>
    <!-- <article class="white--text">
    </article> -->
    <article class="white">
      <section class="inner-section">
        <sectionTitle :title="'Empathizing with users'"></sectionTitle>
        <section-overview :title="'Who is it for?'">
          <div>
            The users are citizen developers. A day in life of the user involves
            building app (step by step workflow) by drag and drop of modules
            like email, SMS and form elements for different use cases like
            insurance claim submission etc. People need help in 2 areas:
            Consistency & Reducing effort to write.
          </div>
        </section-overview>
        <v-img
          class="mx-auto mt-4"
          :src="require(`@/assets/media/aisuggest/user.png`)"
        ></v-img>
        <!-- <div class="text-center font-weight-medium text-h4 mx-auto my-6" style="width: 70%">
          What if the user had an assistant that wrote stuff for them?
        </div> -->
        <section-highlight>
          What if the user had an assistant that wrote stuff for them?
        </section-highlight>
        <sectionTitle :title="'Identifying design opportunity'"></sectionTitle>
        <section-overview :title="'Value for user'">
          <div>
            The main goal of this project was to figure out what our users need
            and how we can help them. The more time it takes for these tasks,
            the more an AI assistant makes sense to have. But they still want to
            be in charge; they just want the assistant to make their work easier
            and faster.
          </div>
        </section-overview>
        <div class="greybg pa-6">
          <section-highlight class="py-2">
            What opportunities exist for us?
            <p class="text-center body-1 mt-2">
              There are 4 primary use cases we believe writing assistance is well
              suited for:
            </p>
        </section-highlight>
          <v-layout wrap class="my-3 py-3 mx-4 justify-space-between">
            <v-flex xs3 class="mx-auto text-center">
              <img
                width="50%"
                :src="require(`@/assets/media/aisuggest/tone.png`)"
              />
              <div>
                <div class="font-weight-medium">Changing tone</div>
                <span class="font-italic font-weight-light">“Make it sound formal”</span>
              </div>
            </v-flex>
            <v-flex xs3 class="mx-auto text-center">
              <img
              width="50%"
                :src="require(`@/assets/media/aisuggest/verbosity.png`)"
              />
              <div>
                <div class="font-weight-medium">Changing Verbosity</div>
                <span class="font-italic font-weight-light">“Make it short”</span>
              </div>
            </v-flex>
            <v-flex xs3 class="mx-auto text-center">
              <img
              width="50%"
                :src="require(`@/assets/media/aisuggest/prompt.png`)"
              />
              <div>
                <div class="font-weight-medium">Ask to write</div>
                <span class="font-italic font-weight-light">“Write a welcome message to customer”</span>
              </div>
            </v-flex>
            <v-flex xs3 class="mx-auto text-center">
              <img
              width="50%"
                :src="require(`@/assets/media/aisuggest/continue.png`)"
              />
              <div>
                <div class="font-weight-medium">Complete sentence</div>
                <span class="font-italic font-weight-light">“Continue writing”</span>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </section>
    </article>
    <div class="is-relative">
      <img
        class="is-absolute is-center"
        :src="require(`@/assets/media/aisuggest/arrow5.png`)"
      />
    </div>
    <article class="greybg">
      <div v-if="show_process">
        <section class="inner-section">
          <sectionTitle :title="'Market Study'"></sectionTitle>
          <section-overview :title="'Understanding  — industry patterns'">
            <div>
              I did an initial market research and analyzed 10+ apps to
              understand what patterns are followed by AI writing assistants.
              This helped in brainstorming ways we could use ai assistant in the
              app.
            </div>
          </section-overview>
          <Accordion :title="'Show value upfront'">
            <template v-slot:main>
              <div>
                Give best recommendation upfront and later ask for custom input
              </div>
            </template>
          </Accordion>
          <Accordion :title="'Default style'">
            <template v-slot:main>
              <div>
                Have a default style and allow the user to set or change later.
              </div>
            </template>
          </Accordion>
          <Accordion :title="'Customize'">
            <template v-slot:main>
              <div>Optional to provide custom instructions</div>
            </template>
          </Accordion>
          <Accordion :title="'Advanced options'">
            <template v-slot:main>
              <div>Custom word count or length</div>
            </template>
          </Accordion>
          <Accordion :title="'Ask context'">
            <template v-slot:main>
              <div>Examples can be insurance, marketing etc..</div>
            </template>
          </Accordion>
          <Accordion :title="'Quick Categories'">
            <template v-slot:main>
              <div>
                Shorter, easy, simple, longer, formal , professional, empathetic
                (good for healthcare), humorous, friendly, casual, polite
              </div>
            </template>
          </Accordion>
          <Accordion :title="'Tell what to expect'">
            <template v-slot:main>
              <div>Nudges to inform what value to expect.</div>
            </template>
          </Accordion>
        </section>
        <!-- </article> -->

        <div class="is-relative">
          <img
            class="is-absolute"
            style="top: -6rem"
            :src="require(`@/assets/media/aisuggest/arrow2.png`)"
          />
        </div>
        <section class="inner-section">
          <sectionTitle
            :title="'Brainstorming and Affinity mapping'"
          ></sectionTitle>
          <section-overview :title="'Brainstorming ideas'">
            <div>
              I dived into a brainstorming session with my co-designer who
              helped me familiarize with the product and various text fields of
              the app. Together we grouped all the ideas into text manipulation
              and interactions.
            </div>
          </section-overview>
        </section>
        <section>
          <v-layout wrap class="my-3 py-3 mx-4 justify-space-between">
            <v-flex xs12 sm4>
              <img
                width="100%"
                :src="require(`@/assets/media/aisuggest/1.png`)"
              />
              <section-content :title="'Final design'">
                I used an outline button to indicate selected state which is
                visually light
              </section-content>
            </v-flex>
            <v-flex xs12 sm4>
              <img
                width="100%"
                :src="require(`@/assets/media/aisuggest/3.png`)"
              />
              <section-content :title="'Final design'">
                I used an outline button to indicate selected state which is
                visually light
              </section-content>
            </v-flex>
            <v-flex xs12 sm4>
              <img
                width="100%"
                :src="require(`@/assets/media/aisuggest/2.png`)"
              />
              <section-content :title="'Final design'">
                I used an outline button to indicate selected state which is
                visually light
              </section-content>
            </v-flex>
          </v-layout>
        </section>
        <div class="is-relative">
          <img
            class="is-absolute"
            style="right: 6rem"
            :src="require(`@/assets/media/aisuggest/arrow1.png`)"
          />
        </div>
        <section class="inner-section">
          <sectionTitle :title="'Scoping'"></sectionTitle>
          <section-overview :title="'The where, what and how?'">
            <div>
              While there was no limitation to identify use cases and explore
              divergent ideas, the initial scope from the product managers was
              set to prioritize delivering a poc that can be made functional by
              the engineering team in 2 weeks, which gave us time of a couple
              days to design.
            </div>
          </section-overview>
        </section>
        <section class="py-4 px-4 inner-section">
          <img
            width="100%"
            :src="require(`@/assets/media/aisuggest/what.png`)"
          />
          <img
            width="100%"
            :src="require(`@/assets/media/aisuggest/stories.png`)"
          />
          <!-- <img    
              width="100%"
              :src="require(`@/assets/media/aisuggest/scope.png`)"
            /> -->
        </section>
      </div>
      <div v-else>
        <v-btn class="mx-auto is-center" @click.stop="show_process=!show_process">Show Process</v-btn>
      </div>
      <v-btn v-if="show_process" class="mx-auto is-center" @click.stop="show_process=!show_process">Hide Process</v-btn>
    </article>

    <div class="is-relative">
      <img
        class="is-absolute is-center"
        :src="require(`@/assets/media/aisuggest/arrow4.png`)"
      />
    </div>
    <article class="paleorange">
      <section class="inner-section">
        <sectionTitle :title="'Key considerations'"></sectionTitle>
        <section-overview :title="'Design Principles'">
          <div>
            I set some design principles to guide the concept design. The
            citizen developers are not tech savvy which meant the feature should
            obscure any technicality and make it
            <strong>quick, friendly and easy to use.</strong>
            Our goal was to have the user use the feature effortlessly and get
            the job done.
          </div>
        </section-overview>
        <!-- <v-layout wrap class="my-6">
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'01'"
              :title="'Light & Simple'"
            >
              The citizen developers are not tech savvy which meant the feature
              should obscure any technicality and make it friendly and easy to
              use.
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content is_number="true" :number="'02'" :title="'Control'">
              Losing map context, time taking ticket creation because of too
              many options
            </section-content>
          </v-flex>
        </v-layout> -->
      </section>

      <section class="inner-section">
        <sectionTitle :title="'Concept #1'"></sectionTitle>
        <section-overview :title="'Inline suggestion on the fly.'">
          <div>
            For the key groups, we ideated solutions taking a divergent approach
          </div>
        </section-overview>
      </section>
      <v-img :src="require(`@/assets/media/aisuggest/in.png`)"></v-img>
      <section class="inner-section mt-4">
        <callout class="my-4 mx-auto">
          <div>
            While this is a quick and easy way for the user to improve their
            text with least effort, it’s risky if the user’s text is
            automatically replaced by ai suggested text that doesn’t meet the
            user’s needs.
          </div>
        </callout>
      </section>
      <section class="inner-section mt-10">
        <sectionTitle :title="'Concept #2'"></sectionTitle>
        <section-overview :title="'Multi-suggest dropdown'">
          <div>Modify recommended suggestion</div>
        </section-overview>
      </section>
      <v-img
        class="mx-auto"
        :src="require(`@/assets/media/aisuggest/dd.png`)"
      ></v-img>
      <section class="inner-section">
        <callout class="mx-auto my-4">
          <div>
            Challenge: There is no character constraint for text fields
            currently in the app due to which the generated suggestions based on
            user's text could be too lengthy for a dropdown affecting the
            readability.
          </div>
        </callout>
      </section>
      <section class="inner-section mt-10">
        <sectionTitle :title="'Concept #3'"></sectionTitle>
        <section-overview :title="'Single suggestion as flyout panel'">
          <div>Modify recommended suggestion</div>
        </section-overview>
      </section>
      <section>
        <!-- <v-img
          class="mx-auto"
          width="90%"
          :src="require(`@/assets/media/aisuggest/concept3.png`)"
        ></v-img> -->
        <v-img
          class="mx-auto"
          :src="require(`@/assets/media/aisuggest/pn.png`)"
        ></v-img>
        <section class="inner-section mt-4">
          <callout class="mx-auto" success="true">
            <div>
              Showing single suggestion solves the readability issues for longer
              text fields and allowing user to modify it gives more
              customization and control to user.
            </div>
          </callout>
        </section>
      </section>
    </article>
    <div class="is-relative">
      <img
        class="is-absolute is-center"
        :src="require(`@/assets/media/aisuggest/arrow5.png`)"
      />
    </div>
    <article class="white">
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
      <section class="inner-section">
        <sectionTitle :title="'Design'"></sectionTitle>
        <section-overview :title="'Design Proposal'">
          <div>
            Since we had limited time to implement, it was essential to
            prioritize and de-scope the design to deliver a functional proof of
            concept.
          </div>
        </section-overview>
      </section>
    </article>
    <article class="white">
      <section class="inner-section">
        <sectionTitle :title="'What I learned'"></sectionTitle>
        <section-overview :title="'Reflecting on project outcomes'">
          <div>
            Working in a startup can sometimes be daunting but I loved solving
            the challenges I came across. The new product addresses different
            skills levels of users due to functionality that mirrors users’
            mental models. The startup was acquired by Reliance Industries after
            the launch of Therm viewer 2.0 which also led to 20% increase in new
            customers managing large and multiple solar assets
          </div>
        </section-overview>
        <v-layout row wrap class="my-6">
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'01'"
              :title="'Working under constraints'"
            >
              Due to the COVID lockdown, my research process had limitations but
              I addressed this by leading the testing sessions with our internal
              team members and using prior work to fill in the missing parts. As
              a sole designer and component developer, I used my time
              effectively to contribute to both design and code.
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'02'"
              :title="'Putting the developer hat on'"
            >
              Being a designer not only meant I empathize with the users but
              also with the developer in my team. I had to understand the
              challenges they are facing and consider their perspectives. This
              helped me collaborate better and translate my designs exactly the
              way I wanted.
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
  },
  data: () => {
    return {
      project_desc: "An ai assistant to help users build workflows faster.",
      show_process: false
    };
  },
};
</script>

<style lang="scss" scoped>
.project-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sensehawk-bg {
  background: linear-gradient(148deg, #31ba99 0%, #1187d3 87.72%);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: end;
}

.inner-section {
  width: 65%;
  margin: 0 auto 1rem;
}

article {
  padding: 4rem 0;
}
</style>