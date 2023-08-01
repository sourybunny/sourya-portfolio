<template>
    <main class="project-section">
        <div class="sensehawk-bg">
            <v-img max-width="60%" class="mx-auto mt-16"
                :src="require(`@/assets/media/sensehawk/sensehawk-hero.png`)"></v-img>
        </div>
        <article class="white">
            <section class="inner-section">
                <v-layout wrap class="align-start justify-space-between">
                    <v-flex xs10 sm9>
                        <sectionTitle :title="'Project'"></sectionTitle>
                        <projectHeader :title="'Therm: GIS jobsite management'" :description="project_desc"></projectHeader>
                        <sectionContent>
                            <div>Therm viewer is the web interface that
                                helps maintenance teams and managers to track, fix defects, claim warranty on solar PV
                                modules to save costs and energy loss.
                                <!-- <br> -->
                                My job was to understand Therm Viewer, establish
                                ground zero of existing usability, Identify focus areas, design a solution, and test it with
                                users.
                            </div>
                        </sectionContent>
                        <sectionTitle :title="'Overview'"></sectionTitle>
                        <v-layout wrap class="align-start justify-space-between mt-4">
                            <v-flex xs12 sm6>
                                <section-content :title="'Problem'">
                                    <div>
                                        The app was built as a pilot project initially for small projects and had
                                        usability
                                        issues with a SUS score 58, but it needed to scale as the business scaled.
                                    </div>
                                </section-content>
                            </v-flex>
                            <v-flex xs12 sm5>
                                <section-content :title="'Outcome'">
                                    <div>
                                        I improved the usability and user engagement by redesigning and simplifying the
                                        defect
                                        management process.
                                    </div>
                                </section-content>
                            </v-flex>
                        </v-layout>
                        <sectionTitle :title="'About Sensehawk'"></sectionTitle>
                        <section-content>
                            <div>
                                SenseHawk is a solar asset management startup that provides digital suite of tools
                                designed to optimize the entire solar asset lifecycle. It conducts drone based
                                inspection of sites at the end of each phase of construction and uses machine
                                learning
                                to detect anomalies and equipment malfunctions.
                            </div>
                        </section-content>
                    </v-flex>
                    <v-flex xs2 sm2>
                        <sectionTitle :title="'Info'"></sectionTitle>
                        <sectionContent :title="'Role'">
                            <div>UX/UI Designer & Developer</div>
                        </sectionContent>
                        <sectionContent :title="'Timeline'">
                            <div>Apr - July, 21</div>
                        </sectionContent>
                        <sectionContent :title="'Tools'">
                            <div>Figma </div>
                            <div>Vue & Mapbox.Js</div>
                        </sectionContent>
                        <sectionContent :title="'Team'">
                            <div>CTO</div>
                            <div>1 Engineering manager</div>
                            <div>1 Designer (Me)</div>
                            <div>3 Developers</div>
                        </sectionContent>
                    </v-flex>
                </v-layout>
            </section>
        </article>
        <article class="white--text">
            <section class="inner-section">
                <sectionTitle :title="'Therm: Before'"></sectionTitle>
                <section-content>
                    <v-layout class="justify-space-between">
                        <v-flex xs12 sm4 class="mr-4">
                            <p>Therm was already present in Sensehawk before I started working on it, but it was in
                                the
                                initial phase. When the developer built that platform, there was no design team
                                involved
                                since it began as a small project that later turned into a more significant part of
                                Sensehawk.</p>
                        </v-flex>
                        <v-flex xs12 sm8>
                            <v-img :src="require(`@/assets/media/sensehawk/old.png`)"></v-img>
                        </v-flex>
                    </v-layout>
                </section-content>
                <sectionTitle :title="'Therm: My design outcome'"></sectionTitle>
            </section>
            <Therm />
            <!-- <v-img width="100%" :src="require(`@/assets/media/sensehawk/sensehawk-hero.png`)"></v-img> -->
        </article>
        <article class="white">
            <section class="inner-section">
                <sectionTitle :title="'Business Goals'"></sectionTitle>
                <section-overview :title="'Business Goals'">
                    <div>
                        The founders wanted to scale the product for large projects and increase customer retention by
                        providing frictionless experience.
                    </div>
                </section-overview>
                <sectionTitle :title="'User Problems'"></sectionTitle>
                <section-overview :title="'Problem Overview'">
                    <div>
                        Therm app has a SUS score of 58 and there were complaints from customers about usability issues and
                        low satisfaction. The application was developed as a micro-service separated from the product suite
                        leading to poor user journey.
                    </div>
                </section-overview>
                <sectionTitle :title="'Target Users'"></sectionTitle>
                <section-overview :title="'Empathizing with Users'">
                    <div>
                        To understand the pain points, I did usability tests followed by a SUS test after the end of each 30
                        min session. Since it was during COVID lockdown, we found very few participants for the study, so I
                        also conducted the tests within our internal team to find usability issues and used past research
                        done by the PM and CTO to fill any gaps in the research.
                    </div>
                </section-overview>
                <sectionTitle :title="'Design Process'"></sectionTitle>
                <section-overview :title="'My Approach'">
                    <div>
                        The existing product(MVP) was built to handle small scale projects and the team knew they were in
                        design and engineering debt. I studied the pain points and user drop-off rates through usability
                        testing, audit, and customer feedback.
                    </div>
                </section-overview>
            </section>
        </article>
        <sectionTitle class="inner-section white--text my-8" :title="'Audit'"></sectionTitle>
        <v-img width="100%" :src="require(`@/assets/media/sensehawk/audit.png`)"></v-img>
        <article class="white">
            <sectionHighlight :title="'Initial Hypothesis'">
                I hypothesized that the existing usability issues were responsible for low user satisfaction.
            </sectionHighlight>
        </article>
        <article class="white--text">
            <section class="inner-section">
                <sectionTitle :title="'Challenges in Existing System'"></sectionTitle>
                <section-overview :title="'Identifying Major Usability Problems'">
                    <div>
                        I conducted heuristic analysis to find 10+ issues and had conversations with the CTO to improve the
                        app.

                        <p>We decided to completely redesign with a range of feature improvements.</p>
                    </div>
                </section-overview>
            </section>

            <sectionTitle class="inner-section" :title="'Problem 1: Hidden Filters (Discoverability & Navigation)'">
            </sectionTitle>

            <v-img width="100%" :src="require(`@/assets/media/sensehawk/hiddenfilters.png`)"></v-img>
            <sectionTitle class="inner-section"
                :title="'Problem 2: Time taking to create tickets for each defect on map (Too many input options)'">
            </sectionTitle>
            <v-img width="100%" :src="require(`@/assets/media/sensehawk/timetaking.png`)"></v-img>

            <sectionTitle class="inner-section"
                :title="'Problem 3: Hard to scan information quickly (Lack of visual hierarchy)'">
            </sectionTitle>
            <v-img width="100%" :src="require(`@/assets/media/sensehawk/hardtoscan.png`)"></v-img>

            <sectionTitle class="inner-section" :title="'Problem 4: Unintuitive filtering of tickets'"></sectionTitle>
            <v-img width="100%" :src="require(`@/assets/media/sensehawk/hardtofilter.png`)"></v-img>






        </article>
        <article class="white">
            <section class="inner-section">
                <sectionTitle :title="'Research Findings: Summary'"></sectionTitle>
                <section-overview :title="'Major Findings and Pain Points'">
                    <div>
                        I categorized the problems under 5 major themes by prioritizing the 20% of table stakes that will
                        solve 80% of the problems in the app.
                    </div>
                </section-overview>
                <v-layout wrap class="my-6">
                    <v-flex xs12 sm6>
                        <section-content is_number="true" :number="'01'" :title="'Hidden filters'">
                            Nested filters, infinite scroll and hidden selected filters made it difficult to use the major
                            filters
                        </section-content>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <section-content is_number="true" :number="'02'" :title="'Time taking to create tickets '">
                            Losing map context, time taking ticket creation because of too many options
                        </section-content>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <section-content is_number="true" :number="'03'" :title="'Information density'">
                            Visually bulky design of ticket list made it hard to scan important information quickly
                        </section-content>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <section-content is_number="true" :number="'04'" :title="'Unintuitive filtering of tickets'">
                            Drop-downs hiding the filter options and selected filters are not being displayed
                        </section-content>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <section-content is_number="true" :number="'05'"
                            :title="'Missed opportunity to drive decision making'">
                            No high level overview of defects to give actionable insights
                        </section-content>
                    </v-flex>
                </v-layout>


            </section>
        </article>
        <article class="white--text">
            <sectionHighlight :title="'Main Problem'">
                Creating tickets manually was time taking which led to reduced user engagement and satisfaction.
            </sectionHighlight>
        </article>
        <article class="white">
            <section class="inner-section">
                <sectionTitle :title="'Ideation: Crafting the Experience'"></sectionTitle>
                <section-overview :title="'Exploring: Quantity over quality'">
                    <div>
                        Before getting into the details, I laid down some conditions that are going to determine an
                        effective user flow and it was necessary to create a layout that is accessible and easy to discover
                        information.
                    </div>
                </section-overview>
                <v-layout wrap class="my-6">
                    <v-flex xs12 sm6>
                        <section-content is_number="true" :number="'01'" :title="'Intuitive and transparent'">
                            Allow the user to know their current state and next step to take. Make information visible.
                        </section-content>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <section-content is_number="true" :number="'02'" :title="'Reduce clicks and task time '">
                            Reduce the time taken to complete tasks by automating things using the data.
                        </section-content>
                    </v-flex>
                </v-layout>
                <sectionTitle :title="'Concept 1'"></sectionTitle>
                <section-overview :title="'Making filters visible'">
                    <div>
                        I removed the tabs to ensure better visibility of defect types so the users need not go back and
                        forth.
                        Changing the date and inverter selection from scrollable accordion to visible dropdowns allowed more
                        control and focus by reducing the no. of clicks required to filter.
                    </div>
                </section-overview>
            </section>
            <img width="100%" height="100%" :src="require(`@/assets/media/sensehawk/filters.png`)" />
            <section class="inner-section">
                <sectionTitle :title="'Concept 2'"></sectionTitle>
                <section-overview :title="'Automate task creation'">
                    <div>
                        By using defects data, I thought it would be easier to create a system generated list of tasks for
                        each defect and presenting only limited options to user to reduce the time taken to create and
                        assign tickets and increase task completion rate.
                    </div>
                </section-overview>
            </section>
            <img width="100%" height="100%" :src="require(`@/assets/media/sensehawk/automate.png`)" />
            <section class="inner-section">
                <sectionTitle :title="'Chosen Direction'"></sectionTitle>
                <section-overview :title="'Design Direction'">
                    <div>
                        After having a feedback session with the team, we decided to go ahead with drop-downs, auto
                        generated task list based on defects identified. After a few iterations, I came up with a layout
                        that is easily accessible and improved filter visibility.
                    </div>
                </section-overview>
            </section>
            <img width="100%" height="100%" :src="require(`@/assets/media/sensehawk/direction.png`)" />
        </article>
        <article class="white--text">
            <section class="inner-section">
                <sectionTitle :title="'Solutions'"></sectionTitle>
                <section-overview :title="'Hi-fidelity Prototypes and coded MVP'">
                    <div>
                        After creating hi-fidelity mockups on Figma, I helped the team with coding the component library,
                        keyboard interactions and integrated Mapbox.Js for filtering the defects on map layers
                    </div>
                </section-overview>
                <sectionTitle :title="'Solution to Problem 1: Hidden Filters (Discoverability & Navigation)'">
                </sectionTitle>
                <section-overview :title="'Improving filters visibility '">
                    <div>
                        Showing all the filters, selected filters with the map view and defect list so it’s easy to toggle
                        and users need not remember what they selected
                    </div>
                </section-overview>
                <img class="mb-10" width="100%" height="100%" :src="require(`@/assets/media/sensehawk/filter.gif`)" />
                <sectionTitle :title="'Solution to Problem 2: Time taking to create tickets'">
                </sectionTitle>
                <section-overview :title="'Reducing steps to show value sooner'">
                    <div>
                        Using a single list for defects (as tasks) to reduce complexity and showing fewer options ex; ‘add
                        assignee’ to reduce drop off and increase task completion rate.
                    </div>
                </section-overview>
                <img class="mb-10" width="100%" height="100%"
                    :src="require(`@/assets/media/sensehawk/selectedfilters.png`)" />
                <sectionTitle :title="'Solution to Problem 3: Visually bulky'"></sectionTitle>
                <section-overview :title="'Minimal list for better readability'">
                    <div>
                        I removed the bulky visuals and drop-shadows to give a minimal look that is easy to scan information
                        and perform bulk actions.
                    </div>
                </section-overview>
                <img class="mb-10" width="100%" height="100%" :src="require(`@/assets/media/sensehawk/density.png`)" />
                <sectionTitle :title="'Solution to Problem 4: Lack of insights '"></sectionTitle>
                <section-overview :title="'Driving informed decision-making '">
                    <div>
                        I designed chart based data visualization to show analytics about defects per inverter for the
                        managers since they relied on spreadsheets for this information. This visualization helps them take
                        necessary actions.
                    </div>
                </section-overview>
                <img class="mb-10" width="100%" height="100%" :src="require(`@/assets/media/sensehawk/charts.gif`)" />
            </section>
        </article>
        <article class="white">
            <section class="inner-section">
                <sectionTitle :title="'Usability Testing'"></sectionTitle>
                <section-overview :title="'Guerrilla Testing'">
                    <div>
                        I created multiple variants and validated my assumptions early-on by quickly testing with internal
                        team
                        members.
                    </div>
                </section-overview>
                <v-layout wrap class="my-3 justify-space-between">
                    <v-flex xs12 sm5>
                        <img width="100%" :src="require(`@/assets/media/sensehawk/itr1.png`)" />
                        <section-content :title="'Iteration'">
                            Users found the filled state of selected inverters to be bulky and distracting on the map
                        </section-content>
                    </v-flex>
                    <v-flex xs12 sm5>
                        <img width="100%" :src="require(`@/assets/media/sensehawk/itr1final.png`)" />
                        <section-content :title="'Final design'">
                            I used an outline button to indicate selected state which is visually light
                        </section-content>
                    </v-flex>
                </v-layout>
                <v-layout wrap class="my-3 justify-space-between">
                    <v-flex xs12 sm5>
                        <img width="100%" :src="require(`@/assets/media/sensehawk/itr2.png`)" />
                        <section-content :title="'Iteration'">
                            Users found the strike-through was not intuitive and the felt the dots did not seem like they
                            were filters.
                        </section-content>
                    </v-flex>
                    <v-flex xs12 sm5>
                        <img width="100%" :src="require(`@/assets/media/sensehawk/itr2final.png`)" />
                        <section-content :title="'Final Design'">
                            I changed the dots to checkboxes to indicate a clickable state. Users found this version more
                            relevant to the defect type indicator on the list view
                        </section-content>
                    </v-flex>
                </v-layout>
            </section>
        </article>
        <article class="white">
            <section class="inner-section">
                <sectionTitle :title="'What I learned'"></sectionTitle>
                <section-overview :title="'Reflecting on project outcomes'">
                    <div>
                        Working in a startup can sometimes be daunting but I loved solving the challenges I came across.
                        The new product addresses different skills levels of users due to functionality that mirrors users’
                        mental models. The startup was acquired by Reliance Industries after the launch of Therm viewer 2.0
                        which also led to 20% increase in new customers managing large and multiple solar assets
                    </div>
                </section-overview>
                <v-layout row wrap class="my-6">
                    <v-flex xs12 sm6>
                        <section-content is_number="true" :number="'01'" :title="'Working under constraints'">
                            Due to the COVID lockdown, my research process had limitations but I addressed this by leading
                            the testing sessions with our internal team members and using prior work to fill in the missing
                            parts. As a sole designer and component developer, I used my time effectively to contribute to
                            both design and code.
                        </section-content>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <section-content is_number="true" :number="'02'" :title="'Putting the developer hat on'">
                            Being a designer not only meant I empathize with the users but also with the developer in my
                            team. I had to understand the challenges they are facing and consider their perspectives. This
                            helped me collaborate better and translate my designs exactly the way I wanted.
                        </section-content>
                    </v-flex>
                </v-layout>
            </section>
        </article>
        <article class="white--text">
            <section class="inner-section">
                <sectionTitle :title="'From my team'"></sectionTitle>
                <!-- <project-testimonials :title="'Kuldeep Yadav'">
                    “Sourya took the UX lead role in her final project with us and we couldn’t be more pleased with her
                    collaborative nature and her UX research and design skills.”
                </project-testimonials> -->
                <project-testimonials :title="'Prajwal Bharadwaj'">
                    Sourya's passion for design and her attention to detail are truly inspiring. She is a true problem
                    solver and a key asset to any team. 
                    <!-- Her contributions at
                    Sensehawk have left a lasting impact, and I have no doubt that she will continue to make a
                    significant difference in the field of UX design wherever she goes. -->
                </project-testimonials>
            </section>
        </article>
        <article class="white">
            <section class="inner-section">
                <sectionTitle :title="'Appendix: Technicalities of the project'"></sectionTitle>
                <section-overview :title="'Thermography: The Why, what & how?'">
                    <div>
                        I started this project by learning about thermography. Sensehawk uses data captured from 100s of
                        acres of solar asset and uses ML to identify 20+ defects on the solar panels. This helps O&M
                        managers to claim warranty or fix issues on time with the help of technicians.
                    </div>
                </section-overview>
                <img width="100%" height="100%" :src="require(`@/assets/media/sensehawk/technicality.png`)" />
                <sectionTitle class="mt-6" :title="'Structure of inverters and comoponents in a solar field'">
                </sectionTitle>
                <img width="100%" height="100%" :src="require(`@/assets/media/sensehawk/structure.png`)" />
            </section>
        </article>
        <Contact />
    </main>
</template>

<script>
import projectHeader from '../components/project/project-header.vue';
import projectTestimonials from '../components/project/project-testimonials.vue';
import sectionTitle from '../components/project/section-title.vue';
import sectionOverview from '../components/project/section-overview.vue';
import sectionContent from '../components/project/section-content.vue';
import sectionHighlight from '../components/project/section-highlight.vue';
import Contact from "../components/contact.vue";
import Therm from "./Therm.vue";


export default {
    components: {
        sectionContent, sectionOverview, sectionTitle, projectHeader, sectionHighlight, projectTestimonials, Contact, Therm
    },
    data: () => {
        return (

            {
                project_desc: 'A map based tool that simplifies defect management for supervisors of solar assets',
            }
        )

    }
}
</script>

<style lang="scss" scoped>
.project-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sensehawk-bg {
    background: linear-gradient(148deg, #31BA99 0%, #1187D3 87.72%);
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