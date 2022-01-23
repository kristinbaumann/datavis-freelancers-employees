import * as React from "react";

import FlourishEmbed from "../components/FlourishEmbed";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HelmetComponent from "../components/HelmetComponent";

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
  <h2 className="pt-9 pb-2 text-4xl font-bold">{children}</h2>
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
    <div className="bg-gray-100 font-sans leading-normal tracking-normal text-gray-800 ">
      <HelmetComponent />
      <Hero />

      {/* Chapter: Introduction */}
      <div className={containerStyle + " pb-4 pt-4"}>
        <TextSection>
          Wherever you look, data is getting collected in one way or another.
          Therefore the need to find insights in large data sets and make them
          easily understandable using visualizations is constantly on the rise.
          More people are joining the data visualization industry and have to
          decide how they want to work in it. So what are the differences
          between freelancers and employees?
          <br /> <br />
          The following analysis based on results from the{" "}
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
          will provide some answers and might help you in the decision process
          on whether to join as a freelancer or an employee and evaluate
          possible work environments.
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
            Technologies
          </a>
          , or{" "}
          <a className={linkStyle} href="#conclusion">
            Conclusion
          </a>
          .
        </TextSection>
      </div>

      <div className={containerStyle}>
        <hr className="border-b-1 border-gray-400 mb-8" />
      </div>

      <div className={containerStyle}>
        <ChapterHeadline>Freelancer or Employee</ChapterHeadline>
        <TextSection>
          The chart below shows the distribution of the respondents’ roles
          grouped to differentiate between employees, freelancers, and others.
          They described their roles by selecting up to seven options in this
          multiple choice question, resulting in many different role
          combinations.
          <br />
          The <Hl t="em">majority of the respondents are solely employees</Hl>.
          People who work exclusively as{" "}
          <Hl t="fr">freelancers make up only about a fifth</Hl> of the number
          of employees. But there is also a considerable number of people who
          work simultaneously in a permanent position as well as self-employed.
          <br />
          Other role combinations (like respondents who selected that they are
          hobbyists, students, or academics) make up smaller proportions when
          viewed individually.
        </TextSection>
      </div>

      <FlourishEmbed vis_id={8405920} />

      <div className={containerStyle}>
        <blockquote className="border-l-4 border-gray-500 italic my-8 pl-8 md:pl-12">
          <b>Note:</b> <br />
          The following sections analyze the responses differentiated between
          freelancers and employees based on the answer to this first question.
          To get distinctive results while maintaining enough data points, the
          definition is as follows:
          <div className="pl-5">
            <ul className="list-disc list-outside">
              <li>
                <b>Employees</b>: Respondents who answered by only selecting{" "}
                "Position in an organization with some dataviz job
                responsibilities" and no other role
              </li>
              <li>
                <b>Freelancers</b>: Respondents who selected at least
                "Freelance/Consultant/Independent contractor" and not "Position
                in an organization with some dataviz job responsibilities" (
                this allows role combinations like freelancer and students or
                freelancer and academic)
              </li>
            </ul>
          </div>
        </blockquote>
      </div>

      <div className={containerStyle}>
        <hr className="border-b-1 border-gray-400 mb-8" />
      </div>

      <div className={containerStyle} id="positions">
        <ChapterHeadline>
          Positions - Which hat are you wearing?
        </ChapterHeadline>
        <TextSection>
          The subsequent dot plot indicates that the positions that people fill
          in teams - and with that, the tasks they are undertaking - are quite
          different for freelancers and employees. <br />
          The majority of freelancers are{" "}
          <Hl t="fr">
            working mostly as designers, also as analysts or developers
          </Hl>
          , while <Hl t="em">employees are mostly analysts</Hl> and{" "}
          <Hl t="em">more often in leadership roles</Hl>.
        </TextSection>
      </div>
      <FlourishEmbed vis_id={8420535} />

      <div className={containerStyle} id="audiences">
        <ChapterHeadline>
          Target Audiences - Who is (hopefully) seeing your vis?
        </ChapterHeadline>
        <TextSection>
          The respondents answered that they created their vis for specific
          audiences. These target audiences varied quite a lot.
          <br />
          Employees made their visualizations{" "}
          <Hl t="em">
            mostly for executives, product or project managers, or (other)
            analysts.{" "}
          </Hl>
          Freelancers also targeted these same groups, but less often since they
          mainly produced their visualizations{" "}
          <Hl t="fr">
            for the general public, executives, researchers, or policymakers
          </Hl>
          .
        </TextSection>
      </div>
      <FlourishEmbed vis_id={8398594} />

      <div className={containerStyle} id="channels">
        <ChapterHeadline>
          Communication Channels - How do you present your finished work?
        </ChapterHeadline>
        <TextSection>
          Creating an intriguing data vis is important, but also needs the
          proper delivery to your target audience. <br />
          The top three communication channels - presentations, dashboards, and
          documents/reports - are similar for both employees and freelancers.
          <br />
          But stronger differences follow:{" "}
          <Hl t="fr">
            freelancers rely on web pages, social media, scrollytelling, or
            physical displays
          </Hl>{" "}
          (like a print or installation) more often than employees.{" "}
          <Hl t="em">Employees prefer sending their work via emails</Hl>.
        </TextSection>
      </div>
      <FlourishEmbed vis_id={8398514} />

      <div className={containerStyle} id="tech">
        <ChapterHeadline>
          Tools & Technologies - How do you create your vis?
        </ChapterHeadline>
        <TextSection>
          The dot plot below demonstrates that the top three tools are similar
          for both employees and freelancers, with the tool of choice being
          Excel by a significant margin, followed by Tableau and PowerPoint.
          <br />
          While <Hl t="em">employees also fall back on PowerBI</Hl>,{" "}
          <Hl t="fr">
            freelancers prefer using Adobe Illustrator or just pen and paper
          </Hl>
          . In general, respondents prefer coding in Python, R, and D3.
        </TextSection>
      </div>

      <FlourishEmbed vis_id={8398316} />

      <div className={containerStyle} id="conclusion">
        <ChapterHeadline>Conclusion</ChapterHeadline>
        <TextSection>
          Looking only at the strongest differences between employees and
          freelancers, two stereotypes emerge:
          <br />
          On one hand, there is the freelancer who is more focused on the
          creative side, a designer using Illustrator to create visualizations
          for a scrollytelling website or social media to target the general
          public or specific decision-makers.
          <br />
          On the other hand, there is the employee, an analyst or manager who is
          creating data visualizations with Excel, Tableau, or PowerPoint and
          delivers them to executives via presentations, dashboards, or even
          Email.
          <br />
          <br />
          Of course, the reality is way more diverse than these stereotypes are.
          The perfect working environment one can thrive in means something
          different for everybody. I hope this analysis helps you in your
          decision process on whether to go freelance or work in a permanent
          position - or even do both simultaneously 🤞
        </TextSection>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
