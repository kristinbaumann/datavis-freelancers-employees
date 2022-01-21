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
          While the vis shows that the{" "}
          <Hl t="em">majority of people are employees</Hl> and{" "}
          <Hl t="fr">freelancers make up only about a fifth</Hl> of the number
          of employees, there is also a group of people who work simultaneously
          as both, in a permanent position as well as self-employed.
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
          <div className="pl-5">
            <ul className="list-disc list-outside">
              <li>
                <b>Employees</b>: Respondents who answered this question by only
                selecting "Position in an organization with some dataviz job
                responsibilities" and no other role (this also excludes people
                with the additional answers of freelancer)
              </li>
              <li>
                <b>Freelancers</b>: Respondents who answered this question by at
                least selecting "Freelance/Consultant/Independent contractor"
                but not selecting the employee answer (so this allows role
                combinations like freelancer and students or freelancer and
                academic)
              </li>
            </ul>
          </div>
        </blockquote>
      </div>

      <div className={containerStyle}>
        <hr class="border-b-1 border-gray-400 mb-8" />
      </div>

      <div className={containerStyle} id="positions">
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

      <div className={containerStyle} id="audiences">
        <ChapterHeadline>
          3.) Target Audiences - Who is (hopefully) seeing your vis?
        </ChapterHeadline>
        <TextSection>
          When working in the data vis industry, respondents target specific
          audiences with their vis. These target audiences vary also quite a
          lot.
          <br />
          Employees make a vis{" "}
          <Hl t="em">
            mostly for executives, product or project managers or (other)
            analysts.{" "}
          </Hl>
          Freelancers also target these groups, but they do it way less, since
          they mainly produce a vis{" "}
          <Hl t="fr">
            for the general public, executives, researches or policy makers
          </Hl>
          .
        </TextSection>
      </div>
      <FlourishEmbed vis_id={8398594} />

      <div className={containerStyle} id="channels">
        <ChapterHeadline>
          4.) Communication Channels - How do you present your finished work?
        </ChapterHeadline>
        <TextSection>
          Creating an intriguing data vis is important, but nothing without the
          proper delivery to your target audience. <br />
          The top three communication channels are similar for both employees
          and freelancers: in the form of presentations, in dashboards or in
          documents/reports.
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

      <div className={containerStyle} id="tech">
        <ChapterHeadline>
          5.) Tools & Technologies - How do you actually create your vis?
        </ChapterHeadline>
        <TextSection>
          In this last dot plot it becomes clear that the top three tools are
          similar for employees and freelancers, but the discrepancies between
          first, second and third is stronger compared to the communication
          channels: Excel, Tableau and PowerPoint.
          <br />
          While <Hl t="em">employees also fall back on PowerBI</Hl>,{" "}
          <Hl t="fr">
            freelancers use way more often Illustrator or just pen and paper
          </Hl>
          . Respondents prefer coding in Python, R and D3.
        </TextSection>
      </div>

      <FlourishEmbed vis_id={8398316} />

      <div className={containerStyle} id="conclusion">
        <ChapterHeadline>6.) Conclusion</ChapterHeadline>
        <TextSection>
          We might have different images of a stereotype employee and cliché
          freelancer in our head, shaped for example by media or personal
          experiences. This analysis with the underlying survey data hopefully
          sharpens this image to allow a more general view on the different
          aspects.
          <br />
          Picking the strongest differences from all aspects, the respondents of
          the survey seem to show a freelancer who is more focused on the
          creative side of the data vis industry. A designer who is using
          Illustrator to a create vis in a scrollytelling website or for social
          media to target the general public or specific decision makers.
          <br />
          On the other hand we might imagine an employee in an analyst or
          leadership position who is creating data vis with Excel, Tableau or
          PowerPoint to deliver them to executives via presentations, dashboards
          or even via Email.
          <br />
          The working environment where individuals thrive in differs from
          person to person. As work takes up a lot if time in everyones lives, I
          wish you the power to continuously improve your work environment which
          might also include a switch between working in permanent position and
          as a self-employed freelancer 🤞
        </TextSection>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
