<template>
  <main class="project-section">
    <div>
      <img
        width="100%"
        :src="require(`@/assets/media/agentassist/banner.png`)"
      />
    </div>
    <article class="white">
      <div class="stickynav">
        <div class="subnavigation glass-header">
          <a href="#overview">Overview</a>
          <a href="#users">Users</a>
          <a href="#userjourney">User Journey</a>
          <a href="#principles">Design Principles</a>
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
            <sectionTitle :title="'Citi Bank /'"></sectionTitle>
            <projectHeader
              :title="'AI- Agent Assist '"
              :description="project_desc"
            ></projectHeader>
            <sectionContent>
              <div>
                Citi Bank's
                <span class="font-weight-medium"
                  >customer support agents work across multiple lines of
                  business, each requiring different applications and distinct
                  processes for handling customer inquiries.</span
                >
                As the lead UX designer, I created an intuitive, contextual
                AI-powered widget that integrates seamlessly across Citi's
                diverse banking applications and business lines, delivering
                real-time customer context, guided workflows tailored to each
                LOB, and intelligent recommendations that adapt to different
                processes.

                <!-- <br> -->
              </div>
            </sectionContent>
            <sectionTitle :title="'Business Impact'"></sectionTitle>

            <div class="mt-8 py-8 px-4 metric-card">
              <img
              width="100%"
              :src="require(`@/assets/media/agentassist/topmetrics.png`)"
            />
          </div>
          <img
            width="100%" class="mt-8"
            :src="require(`@/assets/media/agentassist/savings.png`)"
          />
            <sectionTitle :title="'Overview'"></sectionTitle>
            <v-layout wrap class="align-start justify-space-between mt-4">
              <v-flex xs12 sm6>
                <section-content :title="'Problem'">
                  <div>
                    <!-- Customer support agents in personal banking struggle with
                    fragmented systems, outdated interfaces, and information
                    silos, leading to longer call times, multiple transfers, and
                    frustrated customers. -->
                    Banking customer support agents handle 40-50 calls daily
                    with 8-12 minute average handle times and only 70%
                    first-call resolution rates.
                  </div>
                </section-content>
              </v-flex>
              <v-flex xs12 sm5>
                <section-content :title="'Outcome'">
                  <div>
                    I designed an AI-powered real-time support system that
                    provides contextual guidance during live interactions saving
                    millions of operational costs
                  </div>
                </section-content>
              </v-flex>

              <v-flex xs12>
                <sectionTitle :title="'Business Goals'"></sectionTitle>
                <sectionContent>
                  <div>
                    <li>Reduce Average Handling Time (AHT)</li>
                    <li>Improve First Call Resolution (FCR)</li>
                    <li>Decrease new agent training time</li>
                  </div>
                </sectionContent>
              </v-flex>
              <v-flex xs12>
                <sectionTitle
                  :title="'Design Challenge and Constraints'"
                ></sectionTitle>
                <sectionContent>
                  <div>
                    <li>Integration with 3 legacy banking systems (Sawgrass, Olympus, Eclipse)</li>
                    <li>
                      Inconsistent processes across multiple business lines
                    </li>
                    <li>Compliance with financial regulations and Risk team</li>
                    <li>
                      Real-time performance requirements (< 1 second response)
                    </li>
                    <li>Varying agent technical skills and experience</li>
                  </div>
                </sectionContent>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm3>
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
                :src="require(`@/assets/media/agentassist/timeline.png`)"
              ></v-img>
            </sectionContent>
            <sectionContent :title="'Tools'">
              <div>Figma</div>
            </sectionContent>
            <sectionContent :title="'Team'">
              <div>1 Designer (myself),</div>
              <div>2 Product Owners,</div>
              <div>AI & Model dev. team</div>
            </sectionContent>
            <!-- <sectionContent :title="'Press release'">
              <div class="border-1 greybg pa-2">
                <a
                  class="d-flex align-center"
                  style="color: black"
                  href="https://ushur.com/company/news-press/ushur-launches-studio-to-bring-customer-experience-automation-to-business-users/"
                  target="_blank"
                  >View feature launch
                  <img
                    :src="require(`@/assets/media/aisuggest/link.svg`)"
                    alt="arrow"
                /></a>
              </div>
            </sectionContent> -->
          </v-flex>
        </v-layout>
      </section>
    </article>
    <section class="inner-section">
      <sectionTitle
        is_dark="true"
        :title="'Why is it a problem for business'"
      ></sectionTitle>

      <div>
        <!-- <h1 class="white--text">Every Second Counts in Banking Support</h1> -->
        <div class="impact-statement white--text">
          <h1 class="impact-text">
            With
            <span class="impact-highlight">60 million calls annually</span>,
            every second reduction in call handle time saves
            <span class="impact-highlight">$0.7 million</span> in operational
            costs.
          </h1>
        </div>
        <div class="clock-section">
          <div class="clock">1 SEC</div>
          <div class="equals">=</div>
          <div class="money-icon">💰</div>
        </div>
      </div>
    </section>
    <article class="greybg pb-0" id="users">
      <section class="inner-section">
        <sectionTitle :title="'Empathizing with users'"></sectionTitle>
        <section-overview
          :title="'is it for?'"
          :emphasize="'Who —'"
          :left="true"
        >
          <div>
            Our primary users are
            <span class="font-weight-medium font-italic"
              >customer support agents
            </span>
            who interact with customers in personal banking through IVR (voice)
            system across multiple business lines such as branded cards, CRS and
            Retail.
          </div>
        </section-overview>
        <!-- <img width="100%" :src="require(`@/assets/media/agentassist/pains.png`)" /> -->
      </section>
    </article>

    <section class="greybg">
      <section-highlight>
        Multiple Systems, One Frustrated Agent
        <template v-slot:description>
          <sectionContent style="width: 75%; margin: 1rem auto 0rem">
            The chaotic reality of customer support agent
          </sectionContent>
        </template>
      </section-highlight>
      <v-layout wrap class="align-start justify-center">
        <v-flex xs12 sm6>
          <img
            width="100%"
            :src="require(`@/assets/media/agentassist/persona.gif`)"
          />
        </v-flex>
        <v-flex xs12 sm4>
          <div class="mx-12">
            <div class="pain-point">
              <div class="pain-icon">🔍</div>
              <div class="pain-text">
                Information scattered across 7 different systems
              </div>
            </div>

            <div class="pain-point">
              <div class="pain-icon">⏰</div>
              <div class="pain-text">
                Manual data entry eating up valuable time
              </div>
            </div>

            <div class="pain-point">
              <div class="pain-icon">📞</div>
              <div class="pain-text">
                Customers calling back due to incomplete information
              </div>
            </div>

            <div class="pain-point">
              <div class="pain-icon">😰</div>
              <div class="pain-text">High stress levels during peak hours</div>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <div class="pa-12">
        <img
          width="100%"
          :src="require(`@/assets/media/agentassist/usermetric.png`)"
        />
      </div>
    </section>
    <div style="background: #151b24">
      <section class="inner-section">
        <img
          width="100%"
          :src="require(`@/assets/media/agentassist/pains.png`)"
        />
      </section>
    </div>

    <article class="white" id="userjourney">
      <section-highlight>
        Deep Dive - Agent Journey
        <template v-slot:description>
          <sectionContent>
            From Call Preparation to Post-Call Documentation
          </sectionContent>
        </template>
      </section-highlight>
      <div class="journey-grid">
        <div class="row-header">PHASES</div>
        <div class="phase-header">
          <div class="phase-icon">🎯</div>
          <div>PRE-CALL</div>
          <div class="phase-time">30 seconds</div>
        </div>
        <div class="phase-header">
          <div class="phase-icon">📞</div>
          <div>CALL START</div>
          <div class="phase-time">First 60 seconds</div>
        </div>
        <div class="phase-header">
          <div class="phase-icon">🔍</div>
          <div>INVESTIGATION</div>
          <div class="phase-time">2-5 minutes</div>
        </div>
        <div class="phase-header">
          <div class="phase-icon">✅</div>
          <div>RESOLUTION</div>
          <div class="phase-time">1-3 minutes</div>
        </div>
        <div class="phase-header">
          <div class="phase-icon">📝</div>
          <div>POST-CALL</div>
          <div class="phase-time">1-2 minutes</div>
        </div>

        <div class="row-header">AGENT ACTIONS</div>
        <div class="cell actions-cell">
          <div class="bullet-point">Reviews IVR summary</div>
          <div class="bullet-point">Sets up workspace</div>
        </div>
        <div class="cell actions-cell">
          <div class="bullet-point">Greets customer warmly</div>
          <div class="bullet-point">Struggles to understand intent</div>
          <div class="bullet-point">Asks customer to repeat information</div>
        </div>
        <div class="cell actions-cell">
          <div class="bullet-point">Verifies customer identity</div>
          <div class="bullet-point">Switches between 5-8 systems</div>
          <div class="bullet-point">Manually searches</div>
          <div class="bullet-point">Asks customer to wait frequently</div>
        </div>
        <div class="cell actions-cell">
          <div class="bullet-point">Follows complex manual procedures</div>
          <div class="bullet-point">May need to transfer call</div>
          <div class="bullet-point">Double-checks compliance steps</div>
        </div>
        <div class="cell actions-cell">
          <div class="bullet-point">Manually writes detailed notes</div>
          <div class="bullet-point">Adds final notes</div>
          <div class="bullet-point">Updates case status</div>
          <div class="bullet-point">Prepares for next call</div>
        </div>

        <div class="row-header">CURRENT EMOTIONS</div>
        <div class="cell emotions-cell">
          <div>😰</div>
          <div class="emotion-label">Unprepared</div>
        </div>
        <div class="cell emotions-cell">
          <div>😓</div>
          <div class="emotion-label">Uncertain</div>
        </div>
        <div class="cell emotions-cell">
          <div>😤</div>
          <div class="emotion-label">Frustrated</div>
        </div>
        <div class="cell emotions-cell">
          <div>😮‍💨</div>
          <div class="emotion-label">Overwhelmed</div>
        </div>
        <div class="cell emotions-cell">
          <div>😴</div>
          <div class="emotion-label">Drained</div>
        </div>

        <div class="row-header">CURRENT PAIN POINTS</div>
        <div class="cell pain-points-cell">
          <div class="bullet-point">No context about incoming call</div>
          <div class="bullet-point">Cold start with every customer</div>
          <div class="bullet-point">Guessing customer intent</div>
        </div>
        <div class="cell pain-points-cell">
          <div class="bullet-point">Repetitive information gathering</div>
          <div class="bullet-point">Customer frustration</div>
          <div class="bullet-point">Unclear call purpose initially</div>
        </div>
        <div class="cell pain-points-cell">
          <div class="bullet-point">Switching between multiple systems</div>
          <div class="bullet-point">Manual knowledge base searches</div>
          <div class="bullet-point">Information scattered across platforms</div>
        </div>
        <div class="cell pain-points-cell">
          <div class="bullet-point">Complex procedures to remember</div>
          <div class="bullet-point">Risk of process errors</div>
          <div class="bullet-point">Inconsistent service delivery</div>
        </div>
        <div class="cell pain-points-cell">
          <div class="bullet-point">Time-consuming manual notes</div>
          <div class="bullet-point">Risk of missing key details</div>
          <div class="bullet-point">Delayed case closure</div>
        </div>
        <div class="row-header">OPPORTUNITIES</div>
        <div class="cell tools-cell">
          <div class="feature-tag">IVR Summary</div>
          <div class="feature-tag">Customer Context</div>
          <div class="bullet-point">AI-generated call preview</div>
          <div class="bullet-point">Likely intent prediction</div>
          <div class="bullet-point">Customer sentiment analysis</div>
        </div>
        <div class="cell tools-cell">
          <div class="feature-tag">Call Transcription</div>
          <div class="feature-tag">Intent Recognition</div>
          <div class="bullet-point">Real-time speech-to-text</div>
          <div class="bullet-point">Key phrase highlighting</div>
          <div class="bullet-point">Conversation flow tracking</div>
        </div>
        <div class="cell tools-cell">
          <div class="feature-tag">Search & Launch</div>
          <div class="feature-tag">Knowledge Center</div>
          <div class="bullet-point">centralized workflows</div>
          <div class="bullet-point">Contextual articles</div>
          <div class="bullet-point">Policy recommendations</div>
        </div>
        <div class="cell tools-cell">
          <div class="feature-tag">Guided Workflows</div>
          <div class="feature-tag">Smart Actions</div>
          <div class="bullet-point">Step-by-step guidance</div>
          <div class="bullet-point">Automated processes</div>
          <div class="bullet-point">Compliance checks</div>
        </div>
        <div class="cell tools-cell">
          <div class="feature-tag">Auto Summary</div>
          <div class="feature-tag">Smart Notes</div>
          <div class="bullet-point">AI-generated summary</div>
          <div class="bullet-point">Key actions captured</div>
        </div>
        <!-- AI Solutions -->
      </div>
    </article>

    <article id="principles" class="white">
      <section class="inner-section">
        <sectionTitle :title="'Key considerations'"></sectionTitle>
        <section-overview
          :title="'Design'"
          :emphasize="'Principles'"
          :right="true"
        >
          <div>
            Each principle addresses a specific pain point we identified in our
            research, ensuring that every design decision serves the agent's
            ultimate goal: resolving customer issues quickly and accurately.
          </div>
        </section-overview>
        <v-layout row wrap align-start justify-space-between mb-12>
          <v-flex xs12 sm6>
            <section-card
              class="ma-2"
              :title="'🎯 Contextual Intelligence'"
              :is_light="true"
            >
              <div>Right information at the right time</div>
            </section-card>
          </v-flex>
          <v-flex xs12 sm6>
            <section-card
              class="ma-2"
              :title="'🧠 Cognitive Load Reduction:'"
              :is_light="true"
            >
              <div>Minimize mental effort required</div>
            </section-card>
          </v-flex>
          <v-flex xs12 sm6>
            <section-card
              class="ma-2"
              :title="'🔒 Trust & Transparency'"
              :is_light="true"
            >
              <div>Clear AI confidence levels and reasoning</div>
            </section-card>
          </v-flex>
          <v-flex xs12 sm6>
            <section-card
              class="ma-2"
              :title="'Seamless Integration'"
              :is_light="true"
            >
              <div>Feels native to existing workflow</div>
            </section-card>
          </v-flex>
        </v-layout>
      </section>
    </article>
    <article id="concepts" class="greybg">
      <section class="inner-section">
        <sectionTitle :title="'Concepts'"></sectionTitle>
        <section-overview
          :title="'Ideation & '"
          :emphasize="'Concept Development'"
          :right="true"
        >
          <div>
            I used a structured approach to map identified pain points directly
            to potential solutions, ensuring every design decision addressed
            real user needs.
          </div>
        </section-overview>
        <sectionTitle :title="'Process'"></sectionTitle>
        <sectionContent>
          <div>
            <li>Design workshops: 2 workshops with frontline agents</li>
            <li>
              Workflow Mapping: Redesigned processes for top 5 inquiry types
            </li>
            <li>
              Technical Feasibility: Collaborated with engineering on AI/ML
              capabilities
            </li>
            <li>
              Compliance Review: Ensured all concepts met banking regulations
            </li>
          </div>
        </sectionContent>
      </section>
      <div style="background: #151b24">
        <section class="inner-section">
          <img
            width="100%"
            :src="require(`@/assets/media/agentassist/ideas.png`)"
          />
        </section>
      </div>
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
    <article>
      <section id="design" class="inner-section">
        <sectionTitle :title="'Design'" :is_dark="true"></sectionTitle>
        <section-overview
          :title="'Design - Launched'"
          :emphasize="'Final'"
          :left="true"
          :is_dark="true"
        >
          <div>
            I designed the information hierarchy, prioritizing frequently-used
            agent functions to reduce cognitive load for agents during
            high-pressure customer interactions, enabling them to quickly locate
            relevant information and complete tasks efficiently without
            navigating through complex menu structures or multiple system
            layers.
          </div>
        </section-overview>
      </section>
      <section class="pa-16 mt-16">
        <v-layout wrap align-end>
          <v-flex xs12 sm4>
            <section-overview
              class="mr-10"
              :title="'🎯 Intent Recognition &'"
              :emphasize="'Sentiment Analysis'"
              :right="true"
              :is_dark="true"
              :vertical="true"
            >
              <div>
                A unified system launches guided workflows with contextual AI
                recommendations for streamlined service delivery
              </div>
            </section-overview>
          </v-flex>
          <v-flex xs12 sm8>
            <img
              width="100%"
              :src="require(`@/assets/media/agentassist/precall.png`)"
            />
          </v-flex>
        </v-layout>
      </section>
      <section class="pa-16 mt-16">
        <v-layout wrap align-end>
          <v-flex xs12 sm8>
            <img
              width="100%"
              :src="require(`@/assets/media/agentassist/precall.png`)"
            />
          </v-flex>
          <v-flex xs12 sm4>
            <section-overview
              class="ml-10"
              :title="'🚀 Centralized'"
              :emphasize="'Guided Workflows'"
              :right="true"
              :is_dark="true"
              :vertical="true"
            >
              <div>
                AI suggests smart responses and guided workflows that agents can
                launch and complete actions for the customer.
              </div>
            </section-overview>
          </v-flex>
        </v-layout>
      </section>
      <section class="pa-16 mt-16">
        <v-layout wrap align-end>
          <v-flex xs12 sm4>
            <section-overview
              class="mr-10"
              :title="'📚 Contextual'"
              :emphasize="'Knowledge Recommendations'"
              :right="true"
              :is_dark="true"
              :vertical="true"
            >
              <div>
                AI contextually recommends relevant articles and procedures from
                knowledge hub without leaving the application
              </div>
            </section-overview>
          </v-flex>
          <v-flex xs12 sm8>
            <img
              width="100%"
              :src="require(`@/assets/media/agentassist/knowledge.png`)"
            />
          </v-flex>
        </v-layout>
      </section>
      <section class="pa-16 mt-16">
        <v-layout wrap align-end>
          <v-flex xs12 sm8>
            <img
              width="100%"
              :src="require(`@/assets/media/agentassist/summary.png`)"
            />
          </v-flex>
          <v-flex xs12 sm4>
            <section-overview
              class="ml-10"
              :title="'✨ Generative'"
              :emphasize="'Call Summary'"
              :right="true"
              :is_dark="true"
              :vertical="true"
            >
              <div>
                Automated call transcription with AI-generated summaries
                including key actions taken, reducing manual work
              </div>
            </section-overview>
          </v-flex>
        </v-layout>
      </section>
    </article>
    <article id="reflection" class="white">
      <img
        width="100%"
        :src="require(`@/assets/media/agentassist/compare2.png`)"
      />
      <section class="inner-section">
        <sectionTitle :title="'What I learned'"></sectionTitle>
        <section-overview
          :title="'on project outcomes'"
          :emphasize="'Reflecting'"
          :left="true"
        >
          The most challenging aspect was balancing AI transparency with
          cognitive load reduction Creating the right level of visibility—enough
          to build trust but not so much as to create decision
          paralysis—required multiple iterations and extensive testing with real
          agents during live calls.
        </section-overview>

        <v-layout wrap class="my-6">
          <v-flex xs12 sm6>
            <section-content
              class="mr-12"
              is_number="true"
              :number="'01'"
              :title="'Deep user research is non-negotiable for enterprise AI design'"
            >
              Focus groups with real agents revealed pain points that
              stakeholder interviews alone could not capture. Through detailed
              feedback sessions, agents described how frantically navigating
              through apps while maintaining customer rapport creates unique
              design challenges. I learned that in high-stress, mission-critical
              environments, even minor interface friction becomes amplified—what
              might be a small annoyance in other contexts becomes a significant
              barrier when agents are handling frustrated customers under time
              pressure.
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'02'"
              :title="'Success of AI features depends on positioning it as assistant, not replacement'"
            >
              The biggest breakthrough came when we shifted from "AI will make
              you more efficient" to "AI will handle the tedious work so you can
              focus on helping customers." This reframing transformed agent
              perception from threat to support system. I learned that change
              management and positioning are as critical as the actual interface
              design when introducing AI into existing workflows.
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
      project_desc: "Reducing Call Times by 50% & Saving $20M Annually",
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

.genai-bg {
  background: linear-gradient(148deg, #ff9c85 0%, #d66c54 87.72%);
  background: linear-gradient(148deg, #9b85ff 0%, #48328b 87.72%);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: end;
  max-width: 80%;
  margin: auto;
}
.smooth-shadow {
  box-shadow: 1.1px 0.8px 12.8px -33px rgba(0, 0, 0, 0.035),
    9px 6px 102px -33px rgba(0, 0, 0, 0.07);
}
.border-1 {
  border: 1px solid grey;
}
.pain-points {
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.pain-point {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  animation: slideIn 0.6s ease-out forwards;
  opacity: 0;
  transform: translateX(30px);
}

.pain-point:nth-child(1) {
  animation-delay: 0.2s;
}
.pain-point:nth-child(2) {
  animation-delay: 0.4s;
}
.pain-point:nth-child(3) {
  animation-delay: 0.6s;
}
.pain-point:nth-child(4) {
  animation-delay: 0.8s;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.pain-icon {
  font-size: 40px;
  margin-right: 20px;
  min-width: 60px;
  text-align: center;
}

.pain-text {
  font-size: 18px;
  color: #333;
  font-weight: 500;
  line-height: 1.4;
}

@media screen and (max-width: 500px) {
  .stickynav {
    display: none;
  }
}

.journey-grid {
  display: grid;
  grid-template-columns: 200px repeat(5, 1fr);
  margin: 0 40px 40px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.row-header {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  padding: 20px 16px;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  position: relative;
}

.row-header::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4px;
}

.phase-header {
  padding: 24px 16px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  border-right: 1px solid rgba(148, 163, 184, 0.2);
  position: relative;
  transition: transform 0.3s ease;
}

.phase-header:hover {
  transform: scale(1.02);
}
.phase-icon {
  font-size: 32px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.phase-time {
  font-size: 11px;
  opacity: 0.7;
  font-weight: 400;
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 12px;
}

.cell {
  background: white;
  padding: 16px;
  font-size: 12px;
  line-height: 1.5;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  border-right: 1px solid rgba(148, 163, 184, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.emotions-cell {
  text-align: center;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
}

.emotion-label {
  font-size: 11px;
  color: #374151;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.pain-points-cell {
  background: linear-gradient(135deg, #f7f3f3 0%, #f9eeee 100%);
}

.opportunities-cell {
  background: linear-gradient(135deg, #f3faf5 0%, #ebf8ef 100%);
}

.metrics-cell {
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.metric-value {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 6px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.bullet-point {
  position: relative;
  padding-left: 12px;
  margin-bottom: 6px;
  font-size: 12px;
  transition: color 0.3s ease;
}

.bullet-point::before {
  content: "●";
  position: absolute;
  left: 0;
  color: #6b7280;
  font-weight: bold;
}

.feature-tag {
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 9px;
  font-weight: 600;
  margin: 2px 2px 4px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
  transition: transform 0.2s ease;
}

@media (max-width: 1200px) {
  .journey-grid {
    grid-template-columns: 160px repeat(5, 1fr);
    margin: 0 20px 40px;
  }
}

@media (max-width: 768px) {
  .journey-grid {
    grid-template-columns: 120px repeat(5, 1fr);
    margin: 0 10px 40px;
  }

  .cell {
    padding: 12px;
    font-size: 11px;
    min-height: 100px;
  }

  .row-header {
    padding: 16px 8px;
    font-size: 11px;
  }

  .phase-header {
    padding: 16px 8px;
    font-size: 12px;
  }

  .phase-icon {
    font-size: 24px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.journey-container {
  animation: fadeInUp 0.8s ease-out;
}

.phase-header {
  animation: fadeInUp 0.8s ease-out;
  animation-delay: 0.1s;
  animation-fill-mode: both;
}

.phase-header:nth-child(2) {
  animation-delay: 0.1s;
}
.phase-header:nth-child(3) {
  animation-delay: 0.2s;
}
.phase-header:nth-child(4) {
  animation-delay: 0.3s;
}
.phase-header:nth-child(5) {
  animation-delay: 0.4s;
}
.phase-header:nth-child(6) {
  animation-delay: 0.5s;
}

.clock-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 60px 0;
  flex-wrap: wrap;
}

.clock {
  width: 120px;
  height: 120px;
  border: 4px solid rgba(96, 165, 250, 0.3);
  border-top-color: #60a5fa;
  border-radius: 50%;
  animation: spin 3s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  color: #60a5fa;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.equals {
  font-size: 48px;
  font-weight: 800;
  color: #fbbf24;
}

.money-icon {
  font-size: 80px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .clock-section {
    gap: 20px;
  }

  .clock {
    width: 80px;
    height: 80px;
    font-size: 16px;
  }

  .equals {
    font-size: 32px;
  }

  .money-icon {
    font-size: 60px;
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
.metric-card {
  border: 1px solid rgb(237, 243, 255);
  border-radius: 0.5rem;
  background:#fafefa
}
</style>