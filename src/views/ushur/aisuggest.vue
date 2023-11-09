<template>
  <main class="project-section">
    <div class="genai-bg mt-4 px-12 py-12">
      <!-- <v-img
        height="50%"
        width="50%"
        class="mx-auto mt-16"
        :src="require(`@/assets/media/aisuggest/main.png`)"
      ></v-img> -->

      <video
        width="90% "
        class="mx-auto elevation-0 rounded"
        autoplay
        loop
        muted
      >
        <source
          :src="require(`@/assets/media/aisuggest/genAIdemo2.mp4`)"
          type="video/mp4"
        />
        Your browser does not support HTML video.
      </video>
      <div class="white--text body-2 mt-2 px-14 text-center font-weight-medium">
        From Ushur website - Marketing the feature launch
      </div>
    </div>
    <article class="white">
      <div class="stickynav">
        <div class="subnavigation glass-header">
          <a href="#overview">Overview</a>
          <a href="#users">Users</a>
          <a href="#process">Process</a>
          <a href="#principles">Design Principles</a>
          <a href="#concepts">Concepts</a>
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
              :title="'AI Smart Suggest'"
              :description="project_desc"
            ></projectHeader>
            <sectionContent>
              <div>
                Citizen developers (users) create business solutions using
                Ushur's no-code drag and drop platform and launch them to
                customers in insurance, healthcare and financial companies. The
                developers gather business requirements to build solutions (app
                like engagements) for end users.

                <!-- <br> -->
              </div>
            </sectionContent>
            <sectionTitle :title="'Overview'"></sectionTitle>
            <v-layout wrap class="align-start justify-space-between mt-4">
              <v-flex xs12 sm6>
                <section-content :title="'Opportunity'">
                  <div>
                    How can we use generative AI to make it easier for users who
                    struggle with language while building apps using the no-code
                    platform.
                  </div>
                </section-content>
              </v-flex>
              <v-flex xs12 sm5>
                <section-content :title="'Outcome'">
                  <div>
                    I designed a smart writing assistant for non-technical
                    developers (users) making their job easier and 2x faster.
                  </div>
                </section-content>
              </v-flex>
              <v-flex xs12>
                <sectionTitle :title="'Scope and Constraints'"></sectionTitle>
                <sectionContent>
                  <div>
                    In the landscape of enterprise SaaS products, there's a
                    growing trend of integrating AI into products to enhance
                    user experiences.
                    <span class="font-weight-medium"
                      >I'm proud of this project because we were able to explore
                      a new field and design within a week.</span
                    >
                    And, having a set launch date for the feature demo coupled
                    with technical limitations created a challenging
                    environment.
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
            <sectionContent :title="'Press release'">
              <div class="border-1 greybg pa-2">
                <a class="d-flex align-center "
                  style="color: black"
                  href="https://ushur.com/company/news-press/ushur-launches-studio-to-bring-customer-experience-automation-to-business-users/"
                  target="_blank"
                  >View feature launch <img
                  :src="require(`@/assets/media/aisuggest/link.svg`)"
                  alt="arrow"
                /></a
                >
                <!-- <v-img :src="require(`@/assets/media/aisuggest/link.svg`)">
                </v-img> -->
                
              </div>
            </sectionContent>
          </v-flex>
        </v-layout>
      </section>
      <section class="inner-section">
        <section-highlight :is_underline="true" :is_quote="true" :sticker="'serious'">
          “ A fixed deadline with the absence of sufficient user research
          created an intense environment with time constraints. ”
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
        <sectionTitle :title="'Empathizing with users'"></sectionTitle>
        <section-overview
          :title="'is it for?'"
          :emphasize="'Who —'"
          :left="true"
        >
          <div>
            Based on past user research, I tried to determine how this feature
            can bring valuable benefits to our users, who are
            <span class="font-weight-medium font-italic"
              >citizen developers.
            </span>
          </div>
        </section-overview>
        <div class="my-3 py-3 mx-4 justify-space-between align-center d-flex">
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
        <section-highlight>
          A rapid shift towards AI has changed people's expectation of how they
          work.
          <template v-slot:description>
            <sectionContent style="width: 75%; margin: 2rem auto 0rem">
              Users waste so much time in perfecting their writing style as they
              write customer facing text. While there are many AI writing tools,
              there isn't an
              <strong class="font-weight-medium"
                >enterprise tailored contextual writing assistant</strong
              >
              for Ushur platform.
            </sectionContent>
          </template>
        </section-highlight>
        <div class="mx-auto justify-space-between align-center d-flex">
          <img
            width="100%"
            height="100%"
            :src="require(`@/assets/media/aisuggest/context2.png`)"
          />
        </div>
        <div class="text-center my-4">
          Users drag and drop text input fields, email fields etc and write
          agreements, policies, ask questions to take input from end user who
          uses this solution on their smartphone.
        </div>
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
      </section>
    </article>
    <article class="white">
      <section class="inner-section">
        <sectionTitle :title="'Identifying design opportunity'"></sectionTitle>
        <section-overview :title="'for user'" :emphasize="'Value'" :left="true">
          <div>
            Their role primarily revolves around applying logic to construct
            apps and crafting customer-facing text. Users want assistance in two
            key areas:
            <span class="font-weight-medium"
              ><em>ensuring consistency and reducing the effort </em></span
            >
            in the writing process.
          </div>
        </section-overview>
        <section-highlight :is_underline="true" :is_quote="true" :sticker="'secret'">
          “ We know users wanted help. But they still want to be in charge;”
          they just want an assistant to make their work easier and faster."
          <template v-slot:description>
            <!-- <sectionContent style="width: 65%; margin: 2rem auto 0rem">
              Adhering to a set launch date required us to prioritize engineering
              over design. Key milestones were determined by engineering estimates,
              and the time allocated for design was essentially 5 days. 
            </sectionContent> -->
          </template>
        </section-highlight>
        <div class="greybg pa-6">
          <section-highlight class="py-2">
            What opportunities exist for us?
            <p class="text-center body-1 mt-2">
              There are 4 primary use cases we believe writing assistance is
              well suited for:
            </p>
          </section-highlight>
          <v-layout wrap class="my-3 py-3 mx-4 justify-space-between">
            <v-flex xs6 sm3 class="mx-auto text-center">
              <img
                width="50%"
                :src="require(`@/assets/media/aisuggest/tone.png`)"
              />
              <div>
                <div class="font-weight-medium">Changing tone</div>
                <span class="font-italic font-weight-light"
                  >“Make it sound formal”</span
                >
              </div>
            </v-flex>
            <v-flex xs6 sm3 class="mx-auto text-center">
              <img
                width="50%"
                :src="require(`@/assets/media/aisuggest/verbosity.png`)"
              />
              <div>
                <div class="font-weight-medium">Changing Verbosity</div>
                <span class="font-italic font-weight-light"
                  >“Make it short”</span
                >
              </div>
            </v-flex>
            <v-flex xs6 sm3 class="mx-auto text-center">
              <img
                width="50%"
                :src="require(`@/assets/media/aisuggest/prompt.png`)"
              />
              <div>
                <div class="font-weight-medium">Ask to write</div>
                <span class="font-italic font-weight-light"
                  >“Write a welcome message to customer”</span
                >
              </div>
            </v-flex>
            <v-flex xs6 sm3 class="mx-auto text-center">
              <img
                width="50%"
                :src="require(`@/assets/media/aisuggest/continue.png`)"
              />
              <div>
                <div class="font-weight-medium">Complete sentence</div>
                <span class="font-italic font-weight-light"
                  >“Continue writing”</span
                >
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
    <article id="process" class="greybg">
      <div v-if="show_process">
        <section class="inner-section">
          <sectionTitle :title="'Market Study'"></sectionTitle>
          <section-overview
            :title="'Understanding —'"
            :emphasize="'Industry Patterns'"
            :right="true"
          >
            <div>
              I did an initial market research and analyzed 10+ apps to
              understand what patterns are followed by AI writing assistants.
              This
              <span class="font-weight-medium"
                >helped in brainstorming how we could use ai assistant and drive
                our planning phase.</span
              >
              These are the key insights that defined the launch version of the
              product:
            </div>
          </section-overview>
          <v-layout row wrap align-start justify-space-between>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'Show value upfront'">
                <div>Give best recommendation upfront and customize later.</div>
              </section-card>
            </v-flex>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'Default tone'">
                <div>
                  Have a default tone and allow the user to set or change later.
                </div>
              </section-card>
            </v-flex>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'Prompt Input'">
                <template v-slot>
                  <div>
                    Optional to provide custom prompt based instructions
                  </div>
                </template>
              </section-card>
            </v-flex>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'Advanced options'">
                <template v-slot>
                  <div>Customize word count or length of sentences.</div>
                </template>
              </section-card>
            </v-flex>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'Ask/get context'">
                <template v-slot>
                  <div>Examples can be insurance, marketing etc..</div>
                </template>
              </section-card>
            </v-flex>
            <v-flex xs12 sm4>
              <section-card class="ma-2" :title="'Quick Categories'">
                <template v-slot>
                  <div>
                    Provide a quick way to change tone or customize suggestions.
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
        <!-- </article> -->

        <div class="is-relative">
          <img
            class="is-absolute"
            style="top: -6rem"
            :src="require(`@/assets/media/aisuggest/arrow2.png`)"
          />
        </div>
        <section class="inner-section mt-12">
          <sectionTitle
            :title="'Brainstorming and Affinity mapping'"
          ></sectionTitle>
          <section-overview
            :title="'— Generate ideas'"
            :emphasize="'Brainstorming'"
            :left="true"
          >
            <div>
              I dived into a brainstorming session with my co-designer who
              helped me familiarize with the product and high impact areas of
              the app. Together we
              <span class="font-weight-medium"
                >grouped all the ideas and prioritized those with high value add
                and feasible for demo launch phase.</span
              >
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
              <section-content :title="'#1. Manipulation'">
                Manipulating tone and sentence structure
              </section-content>
            </v-flex>
            <v-flex xs12 sm4>
              <img
                width="100%"
                :src="require(`@/assets/media/aisuggest/3.png`)"
              />
              <section-content :title="'#2. Enterprise defaults'">
                Brand and Persona based configuration
              </section-content>
            </v-flex>
            <v-flex xs12 sm4>
              <img
                width="100%"
                :src="require(`@/assets/media/aisuggest/2.png`)"
              />
              <section-content :title="'#3. Interaction'">
                Control and ease of use
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
          <section-overview
            :title="'The —'"
            :emphasize="'Where, what & how'"
            :right="true"
          >
            <div>
              While there was no limitation to identify use cases and explore
              divergent ideas, the
              <span class="font-weight-medium"
                >initial scope from the product managers was set to prioritize
                delivering a poc</span
              >
              that can be made functional by the engineering team in 2 weeks,
              which gave us time of a couple days to design.
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
        <v-btn
          dark x-large rounded
          class="mx-auto is-center text-lowercase"
          @click.stop="show_process = !show_process"
          >👀 I want to see Process ❤️</v-btn
        >
      </div>
      <v-btn
        dark
        v-if="show_process"
        class="mx-auto is-center text-lowercase"
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
    <article id="principles" class="white">
      <section class="inner-section">
        <sectionTitle :title="'Key considerations'"></sectionTitle>
        <section-overview
          :title="'Design'"
          :emphasize="'Principles'"
          :right="true"
        >
          <div>
            I set some design principles to guide the concept design. The
            citizen developers are not tech savvy which meant the feature should
            obscure any technicality and make it
            <span class="font-weight-medium"
              >quick, friendly and easy to use.</span
            >
          </div>
        </section-overview>
        <v-layout row wrap align-start justify-space-between mb-12>
          <v-flex xs12 sm6>
            <section-card
              class="ma-2"
              :title="'Less is more'"
              :has_icon="true"
              :icon="`lessismore`"
              :is_light="true"
            >
              <div>Our value should always be faster and more lightweight.</div>
            </section-card>
          </v-flex>
          <v-flex xs12 sm6>
            <section-card
              class="ma-2"
              :title="'Tailor to context'"
              :has_icon="true"
              :icon="`tailor`"
              :is_light="true"
            >
              <div>
                Understand where people are, what they're doing, and their level
                of trust in us.
              </div>
            </section-card>
          </v-flex>
        </v-layout>
      </section>
    </article>
    <article id="concepts" class="greybg">
      <section class="inner-section">
        <sectionTitle :title="'Challenging Assumptions'"></sectionTitle>
        <section-overview
          :title="'& Interaction models'"
          :emphasize="'Concepts'"
          :left="true"
        >
          <div>
            One of the challenges we faced in this process was
            choosing the interaction model for feature discoverability and presenting suggestions in context.
            These were the questions we had in mind.
            <li>Is the design unintrusive, yet noticeable?</li>
            <li>Does the user understand how to view the suggestions and expectation of what the feature is going to do.</li>
          </div>
        </section-overview>
        <div class="text-center grey--text font-weight-medium">
          3 design options for presenting suggestions to the user
        </div>
        <v-layout wrap class="my-3 py-3 mx-4 justify-space-between">
          <v-flex xs3 class="mx-auto text-center">
            <img
              width="100%"
              :src="require(`@/assets/media/aisuggest/quick.png`)"
            />
          </v-flex>
          <v-flex xs3 class="mx-auto text-center">
            <img
              width="100%"
              :src="require(`@/assets/media/aisuggest/under.png`)"
            />
          </v-flex>
          <v-flex xs5 class="mx-auto text-center">
            <img
              width="100%"
              :src="require(`@/assets/media/aisuggest/fly.png`)"
            />
          </v-flex>
        </v-layout>
      </section>
      <section class="inner-section">
        <sectionTitle :title="'Concept #1'"></sectionTitle>
        <section-overview
          :title="'suggestions on the fly'"
          :emphasize="'Inline'"
          :left="true"
        >
          <div>
            Quick actions to prompt user to improve their text. Actions are
            dynamically chosen based on the context. Ex; If it's lengthy, an
            action could be to make it short. Original text is replaced
            automatically as the user chooses an action.
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
            user’s expectation which diminishes trust.
          </div>
        </callout>
        <callout class="mx-auto">
          <div>
            Technical constraint: After reviewing with PMs, we realized current
            capacity of API. It's expensive for the API to be contextually
            present and detect if there's enough content and context to suggest
            improvements.
          </div>
        </callout>
      </section>
      <section class="inner-section mt-10">
        <sectionTitle :title="'Concept #2'"></sectionTitle>
        <section-overview
          :title="'Suggestions in a'"
          :emphasize="'dropdown'"
          :right="true"
        >
          <div>
            Multiple suggestions that the user can choose from giving more
            control to user. A prompt based customization for advanced text
            enhancement while keeping the quick actions for least effort.
          </div>
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
        <section-overview
          :title="'Suggestions in a'"
          :emphasize="'flyout panel'"
          :right="true"
        >
          <div>
            A flyout panel to show suggestions while having a history of quick
            actions applied by user.
          </div>
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
          :title="'proposal'"
          :emphasize="'Final design —'"
          :left="true"
          :is_dark="true"
        >
          <div>
            Since we had limited time to implement, it was essential to
            prioritize and de-scope the design to deliver a functional proof of
            concept. Our goal was to have the user use the feature effortlessly
            and get the job done.
          </div>
        </section-overview>
        <video
          width="100%"
          class="mx-auto elevation-4 rounded"
          controls
          autoplay
          muted
        >
          <source
            :src="require(`@/assets/media/aisuggest/genAIdemo.mp4`)"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
        <div class="white--text body-2 text-center">
          Final design in context, feature launched 🚀
        </div>
        <div class="white--text body-2 mt-3 text-center opacity-7">
          Credits to Hayuk (Motion designer) for promoting the feature.
        </div>
        <div class="white--text pa-4">
          <section-highlight>
            User Journeys
            <p class="text-center body-1 mt-2">
              We narrowed our scope down to serve 2 scenarios
            </p>
          </section-highlight>
          <v-layout wrap class="my-6 mx-4 justify-space-between">
            <v-flex xs6 sm5 class="mx-auto text-center">
              <img
                width="20%"
                :src="require(`@/assets/media/aisuggest/label.png`)"
              />
              <div>
                <div class="font-weight-medium">Short field labels</div>
                <span class="font-italic font-weight-light"
                  >Short text such as form title, field labels for input,
                  checkbox and radio fields.</span
                >
              </div>
            </v-flex>
            <v-flex xs6 sm5 class="mx-auto text-center">
              <img
                width="20%"
                :src="require(`@/assets/media/aisuggest/email.png`)"
              />
              <div>
                <div class="font-weight-medium">Long text fields</div>
                <span class="font-italic font-weight-light"
                  >Long text fields such as display text, wysiwyg editor, email
                  modules</span
                >
              </div>
            </v-flex>
          </v-layout>
        </div>
        <div class="greybg pa-4 my-4 mx-auto rounded" style="width: 90%">
          <section-highlight>
            Scenario 1
            <p class="text-center body-1 mt-2">
              Improving sentence structure and consistency
            </p>
          </section-highlight>
          <div class="my-6 mx-4 px-12 justify-center d-flex justify-center">
            <img
              width="30%"
              :src="require(`@/assets/media/aisuggest/avatar1.png`)"
            />
            <div class="ml-6">
              <div class="font-weight-medium text-h5">Meet John</div>
              <div class="font-weight-light mt-2">
                John is a citizen developer who likes to feel in control of his
                work.
              </div>
              <div class="font-weight-light mt-4">
                While he is building a form, he struggles to write customer
                facing text and needs help...
              </div>
            </div>
          </div>
        </div>
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
          Making the experience seamless and integrated in the user's work while
          also giving enough visibility to the feature was difficult. This is
          one of the projects that's driven by technical team & development
          constraints.
        </section-overview>

        <v-layout wrap class="my-6">
          <v-flex xs12 sm6>
            <section-content
              class="mr-12"
              is_number="true"
              :number="'01'"
              :title="'Learn to navigate the project with limited research and embrace ambiguity'"
            >
              Some projects might have a smaller scope and due to the tight
              deadline and limited research or none at all. Doing my own
              research such as market study, and then listing Jobs-to-be-done
              (JTBDs) and validating them with stakeholders helped navigate the
              project even in ambiguity.
            </section-content>
          </v-flex>
          <v-flex xs12 sm6>
            <section-content
              is_number="true"
              :number="'02'"
              :title="'Communication with stakeholders is the key'"
            >
              Although we had only a week's time for the project, sharing the
              design direction often with stakeholders helped us to stay
              anchored to the MVP and realize the technical capabilities early
              on.
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
        "An assistant to help solution developers build workflows faster.",
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
@media screen and (max-width: 500px) {
  .stickynav {
    display: none;
  }
}
</style>