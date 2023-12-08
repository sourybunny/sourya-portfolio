<template>
  <main class="project-section">
    <div class="plan-bg pt-4">
      <v-img
        class="mx-auto"
        width="70%"
        :src="require(`@/assets/media/plan/main.png`)"
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
            <sectionTitle :title="'Indiana University /'"></sectionTitle>
            <projectHeader
              :title="'🗒️ Planner Review '"
              :description="project_desc"
            ></projectHeader>
            <sectionContent>
              <div>
                The School of Music at IU have approached our team with a
                specific problem. Every semester, at least 700 undergraduate
                <span class="font-weight-medium"
                  >students plan courses for upcoming semester and send them to
                  their advisors for review
                </span>
                to get approval for enrollment. With only two advisors to review
                during the peak enrollment time and an
                <span class="font-weight-medium"
                  >inefficient workflow led to frustration</span
                >
                for both students and advisors.

                <div class="mt-4">
                  My task was to simplify this process using a new digital tool.
                  The goal for this project was to
                  <span class="font-weight-medium"
                    >build a solution and not to make the most effective
                    solution.</span
                  >
                </div>

                <!-- <br> -->
              </div>
            </sectionContent>
            <sectionTitle :title="'Overview'"></sectionTitle>
            <v-layout wrap class="align-start justify-space-between mt-4">
              <v-flex xs12 sm6>
                <section-content :title="'Challenge'">
                  <div>
                    How can we make it easier for students and advisors to
                    review courses effectively?
                  </div>
                </section-content>
              </v-flex>
              <v-flex xs12 sm5>
                <section-content :title="'Outcome'">
                  <div>
                    I designed a course planner for students to submit plans and
                    get review and guidance from advisors.
                  </div>
                </section-content>
              </v-flex>
              <v-flex xs12>
                <sectionTitle :title="'Scope and Constraints'"></sectionTitle>
                <sectionContent>
                  <div>
                    Due to the high urgency of the problem, we needed an
                    immediate solution to enable communication b/w students and
                    advisors to ease the frustration. PM helped me roughly
                    understand what needs to be built and provided me with
                    <span class="font-weight-medium">
                      initial functional requirements for MVP which guided my
                      design process.</span
                    >
                  </div>
                  <div>
                    As the Rivet 2.0 design system was still an early adoption,
                    we had discussions where I took charge in convincing the dev
                    team to migrate to latest design system to speed up the
                    design and development. Being familiar with the current code
                    and newly released design system helped me influence the dev
                    team to migrate early on avoiding any rework.
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
                :src="require(`@/assets/media/notifications/timeline.png`)"
              ></v-img>
            </sectionContent>
            <sectionContent :title="'Tools'">
              <div>Figma</div>
            </sectionContent>
            <sectionContent :title="'Team'">
              <div>Lead Designer - Me</div>
              <div>1 Product manager</div>
              <div>1 Sr. UX Designer (Mentor)</div>
              <div>5 Developers</div>
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
          “ I influenced the dev team to migrate and use the latest design system to speed up the delivery and avoid rework ”
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
        <section-overview
          :title="'Discovering - '"
          :emphasize="'major actors'"
          :right="true"
        >
          <div>
            I used proto-personas to help us stay anchored on the users and
            avoid letting our desires for features trump user needs.
          </div>
        </section-overview>
        <img
          width="100%"
          height="100%"
          class="px-6"
          :src="require(`@/assets/media/plan/users.png`)"
        />
      </section>
    </article>
    <article class="">
      <section class="inner-section">
        <sectionTitle :title="'Context & needs'" :is_dark="true"></sectionTitle>
        <section-overview
          :title="'Understanding students’ and advisors’ '"
          :emphasize="'current experience'"
          :right="true"
          :is_dark="true"
        >
          I dived into an intensive research sprint by conducting stakeholder
          interviews and participated in product discussions with the team.
        </section-overview>
        <div
          class="pa-8 mb-8 d-flex justify-space-between align-start darkbg flex-wrap flex-sm-nowrap"
        >
          <sectionContent>
            <div class="light--text">
              I sought to understand how users managed their days, which tools
              they used, and to uncover any pain points or unmet needs. Then I
              explored the systems myself and watched demo sessions to conduct a
              heuristic analysis. These steps helped me map out the existing
              user flow.
            </div>
          </sectionContent>
          <img
            width="100%"
            height="100%"
            class="px-6"
            :src="require(`@/assets/media/plan/interview.png`)"
          />
        </div>
        <div class="mx-auto pa-4">
          <img
            width="100%"
            height="100%"
            :src="require(`@/assets/media/plan/workflow.png`)"
          />
        </div>
        
        <section-highlight
          :is_underline="true"
          :is_quote="true"
          :is_dark="true"
          :sticker="'righthand'"
        >
          “ There was a gap in communication between students and advisors costing 100's of additional hours of time for advisors”
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
    <article id="insights" class="white">
      <section class="inner-section">
        <sectionTitle :title="'Insights'"></sectionTitle>
        <section-overview
          :title="'Major Findings & Uncovered '"
          :emphasize="'Insights'"
          :right="true"
        >
          Based on the demos and follow-up interviews, these were the most
          pressing issues that needed to be addressed.
        </section-overview>
        <v-layout wrap class="my-6">
          <v-flex xs12 sm6>
            <section-content
              class="mr-12"
              is_number="true"
              :number="'01'"
              :title="'Discoverability'"
            >
              Most students had a hard time finding features due to poor
              outdated interface. There were also usability issues that led to
              people not able to find major CTAs.
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'02'"
              :title="'Intrusive communication'"
            >
              Students were not notified of the progress of their plan. This led
              them to often email professors during the peak enrollment time.
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'03'"
              :title="'Tedious and unorganized'"
            >
              Advisors find it difficult to download and organize to keep track
              of plans submitted by their students for review. They also
              expressed that they can guide better and reduce resubmission
              requests if they had visibility of past plans sent by students.
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'04'"
              :title="'Visibility'"
            >
              There is lack of transparency and visibility over which advisor is
              reviewing and what’s the progress. It is common to have an
              intermediate advisor who first reviews and then sends for final
              review to main advisor
            </section-content>
          </v-flex>
        </v-layout>
      </section>
      <section class="darkbg py-16 my-16">
        <div class="inner-section white--text">
          <section-highlight>
            How might we make plan review
            <span style="color: #ecd444">discoverable</span>,
            <span style="color: #f5795d">unintrusive</span>, impart a sense of
            <span style="color: #00cbab">transparency</span> and
            <span style="color: #9775ff">progression</span> ?
          </section-highlight>
        </div>
      </section>
      <section class="inner-section">
        <sectionTitle :title="'Ideation'"></sectionTitle>
        <section-overview
          :title="' Goal-oriented problem solving'"
          :emphasize="'Ideation —'"
          :left="true"
        >
          <div>
            I found many issues while doing research for this project but I
            narrowed it down into the main issues that would solve the problem.
            By boiling down my research into these goals, it helps me make sure
            my later design decision are grounded in my user research and
            actually solve the problem.
          </div>
        </section-overview>
        <img
          width="100%"
          height="100%"
          class="px-6"
          :src="require(`@/assets/media/plan/ideation.png`)"
        />
      </section>
    </article>
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
    <article class="" id="solution">
      <section class="inner-section">
        <sectionTitle
          :title="'Solution #1 to discoverability'"
          :is_dark="true"
        ></sectionTitle>
        <section-overview
          :title="'to simplify submission'"
          :emphasize="'Reducing steps —'"
          :left="true"
          :is_dark="true"
        >
          <div>
            80% of the students find the current submission process tedious and
            frustrating due to usability issues and feature discoverability. I
            reduced the submission to 2 steps.
          </div>
        </section-overview>
      </section>
      <img
        width="100%"
        height="100%"
        class="px-6"
        :src="require(`@/assets/media/plan/discoverability.png`)"
      />
      <section class="inner-section">
        <sectionTitle
          :title="'Solution #2 to discoverability'"
          :is_dark="true"
        ></sectionTitle>
        <section-overview
          :title="'Showing alerts and plan status'"
          :is_dark="true"
        >
          <div>
            Students found it frustrating to not know the status of their plan
            and if the advisor is reviewing. To solve this, I clearly indicated
            status of each plan submitted on the main page. I kept alerts to
            quickly view when there is an update.
          </div>
        </section-overview>
        <img
          width="100%"
          height="100%"
          class="px-6"
          :src="require(`@/assets/media/plan/discoverability-2.png`)"
        />
      </section>

      <section class="inner-section">
        <sectionTitle
          :title="'Solution to Communication'"
          :is_dark="true"
        ></sectionTitle>
        <section-overview :title="'Limiting no. of responses '" :is_dark="true">
          <div>
            Advisors worried if students would send multiple comments if they
            are allowed to resubmit plan anytime. To solve this, we decided to
            limit to one comment until advisor responds. This also meant
            students would be careful before submitting.
          </div>
        </section-overview>
        <img
          width="100%"
          height="100%"
          class="px-6"
          :src="require(`@/assets/media/plan/communication.png`)"
        />
      </section>
      <section class="inner-section">
        <sectionTitle
          :title="' Tedious and unorganized'"
          :is_dark="true"
        ></sectionTitle>
        <section-overview
          :title="'View all plans in a centralized dashboard '"
          :is_dark="true"
        >
          <div>
            Advisors worried if students would send multiple comments if they
            are allowed to resubmit plan anytime. To solve this, we decided to
            limit to one comment until advisor responds. This also meant
            students would be careful before submitting.
          </div>
        </section-overview>
        <img
          width="100%"
          height="100%"
          class="px-6"
          :src="require(`@/assets/media/plan/tedious.png`)"
        />
      </section>
      <section class="inner-section">
        <sectionTitle
          :title="'Visibility and transparency'"
          :is_dark="true"
        ></sectionTitle>
        <section-overview
          :title="'Compare previous and latest plan'"
          :is_dark="true"
        >
          <div>
            Advisors mentioned they often spend time looking for previous plans
            submitted by students to compare with latest changes based on
            recommendations. I created a threaded comment view that shows the
            timestamp of each comment with a snapshot of the student’s plan.
          </div>
        </section-overview>
        <img
          width="100%"
          height="100%"
          class="px-6"
          :src="require(`@/assets/media/plan/compare.png`)"
        />
      </section>
    </article>

    <article class="white">
      <section id="uat" class="inner-section">
        <sectionTitle :title="'Testing'" :is_dark="false"></sectionTitle>
        <section-overview
          :title="'Usability Test —'"
          :emphasize="'Results & Findings'"
          :right="true"
        >
          <div>
            Since advisors have a busy schedule, It was difficult to recruit for
            testing. So, I managed to test with my interview participants and
            sent out a Qualtrics survey to the rest of the advisors that
            received 120+ responses.
          </div>
          <div>
            I recruited students and did 2 remote moderated tests while sending
            another survey that received 150+ responses from undergraduate
            students.
          </div>
        </section-overview>
        <!-- <v-img
                class="mt-3"
                width="100%"
                :src="require(`@/assets/media/notifications/anim1.gif`)"
              ></v-img> -->
      </section>
      <section class="inner-section">
        <sectionTitle
          :title="'Task #1: Understanding the context'"
          :is_dark="false"
        ></sectionTitle>
        <section-overview
          :title="'is it for?'"
          :emphasize="' What '"
          :left="true"
        >
          <div>
            After giving a brief description, I showed the screens and asked if
            the students were able to understand what the screens are for.
            Almost all of them understood and described the context correctly.
          </div>
        </section-overview>
        <div class="greybg pa-3">
          <img
            width="100%"
            height="100%"
            class="px-6"
            :src="require(`@/assets/media/plan/context.png`)"
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
          :title="'Task #2:  Discoverability of main actions'"
          :is_dark="false"
        ></sectionTitle>
        <section-overview
          :title="' to resubmit and view comments?'"
          :emphasize="' How '"
          :left="true"
        >
          <div>
            I tested if students were able to understand the flow of submitting,
            viewing advisor comments and resubmitting after making changes to
            plan. The heat map shows a successful no. of students being able to
            identify major actions.
          </div>
        </section-overview>
        <img
          width="100%"
          height="100%"
          class="px-6"
          :src="require(`@/assets/media/plan/resubmit.png`)"
        />
        <!-- <v-img
                class="mt-3"
                width="100%"
                :src="require(`@/assets/media/notifications/anim1.gif`)"
              ></v-img> -->
      </section>
      <section class="inner-section">
        <sectionTitle
          :title="'Task #3: Advisor view to send feedback'"
          :is_dark="false"
        ></sectionTitle>
        <section-overview
          :title="' to compare and send comment?'"
          :emphasize="' How '"
          :left="true"
        >
          <div>
            While advisors were able to discover main actions, the screen itself
            posed a challenge due to information overload. They liked that they
            are able to compare old plans but way it was presented is
            overwhelming.
          </div>
        </section-overview>
        <div class="greybg pa-3">
          <img
            width="100%"
            height="100%"
            class="px-6"
            :src="require(`@/assets/media/plan/comp.png`)"
          />
        </div>
        <!-- <v-img
                class="mt-3"
                width="100%"
                :src="require(`@/assets/media/notifications/anim1.gif`)"
              ></v-img> -->
      </section>
    </article>
    <article id="reflection" class="greybg">
      <section class="inner-section">
        <sectionTitle :title="'What I learned'"></sectionTitle>
        <section-overview
          :title="'on project outcomes'"
          :emphasize="'Reflecting'"
          :left="true"
        >
          Our team did multiple demoes during the project to academic owners and
          other stakeholders. Everyone was positive and excited to use the
          system for the upcoming semester. We developed an MVP in 2 months and
          released the interface to 1500 students initially.
        </section-overview>
        <v-layout wrap class="my-6">
          <v-flex xs12 sm6>
            <section-content
              class="mr-12"
              is_number="true"
              :number="'01'"
              :title="'MVP first approach'"
            >
              We were hard on time and decided to take a step by step approach
              by prioritizing necessary functionalities that address the needs
              and solve the problems of our users. This helped me to be focused
              and goal oriented than building a feature rich system.
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'02'"
              :title="'Communicate with developers in each step'"
            >
              Being a developer once, It was easy for me to realize the
              development efforts for each feature. Communicating with
              developers during every step by attending PBRs helped me
              understand their challenges and limitations. I tried to integrate
              designs in an existing system rather than building something from
              scratch.
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
        "A web app for students to plan courses and get reviewed from their advisors.",
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
.plan-bg {
  background: linear-gradient(128deg, #841d4e 0%, #390a0a 82.55%);
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


<!-- <template>
  <div>

    <div class="iframe-container">
      <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="100%"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEaXvUe3394u2kcpQkjVTKd%2Fcase-study-ppt%3Fpage-id%3D102%253A19964%26node-id%3D103-19973%26scaling%3Dscale-down-width&hide-ui=1"
        allowfullscreen></iframe>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss">
.iframe-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style> -->
