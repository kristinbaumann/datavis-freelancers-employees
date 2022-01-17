import * as React from "react";

import FlourishEmbed from "../components/FlourishEmbed";
import Footer from "../components/Footer";

const containerStyle = "container w-full md:max-w-3xl mx-auto px-4 md:px-6";

const Hero = () => (
  <div className="bg-white border-b border-gray-400 shadow">
    <div className="font-sans py-6">
      <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-6 text-3xl md:text-5xl text-center leading-10">
        The Data Vis Industry for <br />
        <span className="text-freelancer italic font-serif">
          Freelancers
        </span>{" "}
        and <span className="text-employee italic font-serif">Employees</span>
      </h1>
      <p className="text-l md:text-xl font-normal text-gray-600 text-center">
        A comparison of Target Audiences, Communication Channels and Tools
      </p>
    </div>
  </div>
);

const TextSection = ({ children }) => {
  return <p className="text-l text-gray-800 leading-loose py-6">{children}</p>;
};

const ChapterHeadline = ({ children }) => (
  <h2 className="py-2 text-3xl font-bold font-serif">{children}</h2>
);

const IndexPage = () => {
  return (
    // general for whole page
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Hero />

      {/* intro */}
      <div className={containerStyle}>
        <TextSection>
          Welcome fellow and miminal monochrome blog fan. This starter template
          provides a starting point to create your own minimal monochrome blog
          using Tailwind CSS and vanilla Javascript.
          <br />
          <br />
          The basic blog page layout is available and all using the default
          Tailwind CSS classes (although there are a few hardcoded style tags).
          If you are going to use this in your project, you will want to convert
          the classes into components.
        </TextSection>
      </div>

      {/* Chapter 1: Distribution */}
      <div className={containerStyle}>
        <ChapterHeadline>
          Distribution (how many Freelancers / how many Employees)
        </ChapterHeadline>
      </div>
      <FlourishEmbed vis_id={8405920} />

      <div className={containerStyle}>
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
          eget sem dictum elementum.
        </TextSection>

        <blockquote className="border-l-4 border-gray-500 italic my-8 pl-8 md:pl-12">
          Example of blockquote - Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
          ligula.
        </blockquote>
      </div>

      <div className={containerStyle}>
        <ChapterHeadline>Positions</ChapterHeadline>
        <TextSection>fsdasf asdfsdaf saf</TextSection>
      </div>
      <FlourishEmbed vis_id={8420535} />
      <div className={containerStyle}>
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
          eget sem dictum elementum.
        </TextSection>
      </div>

      <div className={containerStyle}>
        <ChapterHeadline>Target Audiences</ChapterHeadline>
        <TextSection>fsdasf asdfsdaf saf</TextSection>
      </div>

      <FlourishEmbed vis_id={8398594} />
      <div className={containerStyle}>
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
          eget sem dictum elementum.
        </TextSection>
      </div>

      <div className={containerStyle}>
        <ChapterHeadline>Communication Channels</ChapterHeadline>
        <TextSection>fsdasf asdfsdaf saf</TextSection>
      </div>
      <FlourishEmbed vis_id={8398514} />
      <div className={containerStyle}>
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
          eget sem dictum elementum.
        </TextSection>
      </div>

      <div className={containerStyle}>
        <ChapterHeadline>Tools</ChapterHeadline>
        <TextSection>fsdasf asdfsdaf saf</TextSection>
      </div>

      <FlourishEmbed vis_id={8398316} />
      <div className={containerStyle}>
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
          eget sem dictum elementum.
        </TextSection>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
