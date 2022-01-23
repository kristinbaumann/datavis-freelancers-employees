import * as React from "react";

const FlourishEmbed = ({ vis_id }) => {
  return (
    <div className="w-full max-w-6xl mx-auto py-4 px-1">
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
    </div>
  );
};

export default FlourishEmbed;
