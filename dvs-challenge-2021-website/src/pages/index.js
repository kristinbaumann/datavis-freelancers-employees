import * as React from "react";

import FlourishEmbed from "../components/FlourishEmbed";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const containerStyle = "container w-full md:max-w-3xl mx-auto px-4 md:px-6";
const linkStyle = "underline"; //"text-green-500 no-underline hover:underline";

const TextSection = ({ children }) => {
  return (
    <p className="text-lg text-gray-700 leading-loose py-6 text-justify">
      {children}
    </p>
  );
};

const ChapterHeadline = ({ children }) => (
  <h2 className="pt-9 pb-2 text-4xl font-bold font-serif">{children}</h2>
);

const Highlight = ({ t, children }) => {
  let type = "";
  switch (t) {
    case "fr": {
      type = "freelancer";
      break;
    }
    case "em": {
      type = "employee";
      break;
    }
    case "b": {
      type = "both";
      break;
    }
    default:
  }
  return <span className={`text-${type}`}>{children}</span>;
};
const Hl = Highlight;

const IndexPage = () => {
  return (
    // general for whole page
    <div className="bg-gray-100 font-sans leading-normal tracking-normal text-gray-800 ">
      <Hero />

      {/* Chapter: Introduction */}
      <div className={containerStyle + " pb-4 pt-4"}>
        <TextSection>
          Wherever you look, data is getting collected in one way or another. So
          also the need to actually find insights in large data sets and making
          them easily understandable with visualizations is constantly on the
          rise. Simultaneously the data vis industry is growing. But how is this
          industry different for freelancers compared to employees? What is
          similar regardless of whether you work in a permanent position or
          self-employed?
          <br /> <br />
          The{" "}
          <a
            className={linkStyle}
            target="_blank"
            rel="noreferrer"
            href="https://www.datavisualizationsociety.org/survey"
          >
            Annual Data Visualization State of the Industry Survey
          </a>{" "}
          conducted by the{" "}
          <a
            className={linkStyle}
            target="_blank"
            rel="noreferrer"
            href="https://www.datavisualizationsociety.org/"
          >
            Data Visualization Society
          </a>{" "}
          asks a variety of questions about different topics that are analysed
          and visualised in the following.
          <br />
          <br />
          Interested in a specific aspect? Skip ahead to{" "}
          <a className={linkStyle} href="#positions">
            Positions
          </a>
          ,{" "}
          <a className={linkStyle} href="#audiences">
            Target Audiences
          </a>
          ,{" "}
          <a className={linkStyle} href="#channels">
            Communication Channels
          </a>
          ,{" "}
          <a className={linkStyle} href="#tech">
            Technologies{" "}
          </a>
          or{" "}
          <a className={linkStyle} href="#conclusion">
            Conclusion
          </a>
          .
        </TextSection>
      </div>

      <div className={containerStyle}>
        <hr class="border-b-1 border-gray-400 mb-8" />
      </div>

      <div className={containerStyle}>
        <ChapterHeadline>1.) Freelancer or Employee</ChapterHeadline>
        <TextSection>
          Below is the distribution of respondents’ roles or rather roles
          combinations grouped to differentiate between employees, freelancers
          and others. With up to 7 possible answers, people you describe their
          roles as a data visualizer in many combinations. <br />
          While the viz shows that the{" "}
          <Hl t="em">majority of people are employees</Hl> and{" "}
          <Hl t="fr">freelancers make up only about a fifth</Hl> of the number
          of employees, there is also a{" "}
          <Hl t="b">group of people who work simultaneously as both</Hl>, in a
          permanent position as well as self-employed.
          <br />
          Other role combinations (like respondents who selected that they are
          hobbyists, students or academics) make up a smaller proportion when
          viewed individually.
        </TextSection>
      </div>

      <FlourishEmbed vis_id={8405920} />

      <div className={containerStyle}>
        <blockquote className="border-l-4 border-gray-500 italic my-8 pl-8 md:pl-12">
          <b>Note:</b> <br />
          The following sections analyse the responses differentiated between
          freelancers and employees based on the answer to this first question.
          To get distinctive results while maintaining enough data points, the
          definition is the following:
          <ul>
            <li>
              <b>Employees</b>: Respondents who answered this question by only
              selecting "Position in an organization with some dataviz job
              responsibilities" and no other role (this also excludes people
              with the additional answers of freelancer)
            </li>
            <li>
              <b>Freelancers</b>: Respondents who answered this question by at
              least selecting "Freelance/Consultant/Independent contractor" but
              not selecting the employee answer (so this allows role
              combinations like freelancer and students or freelancer and
              academic)
            </li>
          </ul>
        </blockquote>
      </div>

      <div className={containerStyle}>
        <hr class="border-b-1 border-gray-400 mb-8" />
      </div>

      <div className={containerStyle}>
        <ChapterHeadline>
          2.) Positions - Which hat are you wearing?
        </ChapterHeadline>
        <TextSection>
          In the subsequent dot plot it is apparent that the position that
          people fill in teams - and with that the tasks that they are
          undertaking - are quite different for freelancers and employees.{" "}
          <br />
          The majority of freelancers are{" "}
          <Hl t="fr">working as designers, also as analysts or developers</Hl>,
          but <Hl t="em">employees are mostly analysts</Hl> and{" "}
          <Hl t="em">more often in leadership roles</Hl>.
        </TextSection>
      </div>
      <FlourishEmbed vis_id={8420535} />

      <div className={containerStyle}>
        <ChapterHeadline>
          3.) Target Audiences - Who is (hopefully) seeing your viz?
        </ChapterHeadline>
        <TextSection>
          When working in the data vis industry, respondents target specific
          audiences with their viz. These target audiences vary also quite a
          lot.
          <br />
          Employees make a viz{" "}
          <Hl t="em">
            mostly for executives, product or project managers or (other)
            analysts.{" "}
          </Hl>
          Freelancers also target these groups, but they do it way less, since
          they mainly produce a viz{" "}
          <Hl t="fr">
            for the general public, executives, researches or policy makers
          </Hl>
          .
        </TextSection>
      </div>
      <FlourishEmbed vis_id={8398594} />

      <div className={containerStyle}>
        <ChapterHeadline>
          4.) Communication Channels - How do you present your finished work?
        </ChapterHeadline>
        <TextSection>
          Creating an intriguing data viz is important, but nothing without the
          proper delivery to your target audience. <br />
          The top three communication channels are similar for both employees
          and freelancers:{" "}
          <Hl t="b">
            in the form of presentations, in dashboards or in documents/reports.
          </Hl>
          <br />
          But stronger differences follow:{" "}
          <Hl t="fr">
            freelancers rely on webpages, social media, scrollytelling or
            physical results
          </Hl>{" "}
          (like a print or installation) more often than employees.{" "}
          <Hl t="em">Employees prefer sending emails</Hl> with their work.
        </TextSection>
      </div>
      <FlourishEmbed vis_id={8398514} />

      <div className={containerStyle}>
        <ChapterHeadline>5.) Technologies</ChapterHeadline>
        <TextSection>
          What tools and technologies do you use to create your vis?
        </TextSection>
      </div>

      <FlourishEmbed vis_id={8398316} />
      <div className={containerStyle}>
        <TextSection>
          for both groups: Excel on top position by far. good second place
          Tableau. on third place PowerPoint. for ems also strong PowerBI. but
          looks different for frees ...
        </TextSection>
      </div>

      <div className={containerStyle}>
        <hr class="border-b-1 border-gray-400 mb-8" />
      </div>

      <div className={containerStyle}>
        <ChapterHeadline>6.) Conclusion</ChapterHeadline>
        <TextSection>
          Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
          purus, in mattis tortor sollicitudin pretium. Phasellus at diam
          posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam,
          pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
          condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
          turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
          rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
          molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
          molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio
          risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla
          eget sem dictum elementum. <br />
          <br />
          freelance designer -- easier changeable per project? searched for on a
          project by project basis. different laws make it easier to work as
          designer freelancer than other role in freelance. seldom company with
          freelance leadership -- stability, festangestellt. for freelancers
          mainly general public, for ems mainly executives → more than half of
          all people answered for these two responses (among others). ems →
          other team members from product teams (executives, analysts, PMs) fr
          more not in own team → researchers, policy makers, scientists, med
          staff
        </TextSection>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
