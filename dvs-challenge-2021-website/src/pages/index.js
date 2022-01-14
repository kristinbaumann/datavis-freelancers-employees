import * as React from "react";

const FlourishEmbed = ({ vis_id }) => {
  return (
    <>
      <iframe
        src={"https://flo.uri.sh/visualisation/" + vis_id + "/embed"}
        title="Interactive or visual content"
        className="flourish-embed-iframe"
        frameBorder="0"
        scrolling="no"
        style={{ width: "100%", height: "600px" }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
      <div
        style={{
          width: "100%!",
          marginTop: "4px!important",
          textAlign: "right!important",
        }}
      >
        <a
          className="flourish-credit"
          href={
            "https://public.flourish.studio/visualisation/" +
            vis_id +
            "/?utm_source=embed&utm_campaign=visualisation/" +
            vis_id
          }
          target="_top"
          style={{ textDecoration: "none!important" }}
        >
          <img
            alt="Made with Flourish"
            src="https://public.flourish.studio/resources/made_with_flourish.svg"
            style={{
              width: "105px!important",
              height: "16px!important",
              border: "none!important",
              margin: "0!important",
            }}
          />{" "}
        </a>
      </div>
    </>
  );
};

const IndexPage = () => {
  return (
    <div>
      <header className="bg-green-900 text-gray-100 pt-16 pb-10 text-center">
        <h1 className="font-semibold font-rammetto lg:text-5xl sm:text-4xl text-2xl pb-4">
          The Data Vis Industry for Employees and Freelancers
        </h1>
        <p className="lg:text-2xl sm:text-lg text-sm font-light">
          A comparison of wertzu, xyz and zabc
        </p>
      </header>
      <div className="md:container md:mx-auto">
        <div className="key insight">
          <p>Here comes a great insight in this chapter</p>
        </div>
        <div>VIS comes here</div>
        <div>more detailed text here</div>

        <FlourishEmbed vis_id={8397690} />
        <p className="py-9">Tesdsds</p>
        <FlourishEmbed vis_id={8398316} />
        <p className="py-9">Tesdsds</p>
      </div>
    </div>
  );
};

export default IndexPage;
