import * as React from "react";
import { Helmet } from "react-helmet";

import shareImage from "../images/share_image_1.jpg";

const HelmetComponent = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Freelancers and Employees in the Data Vis Industry</title>
    <link
      rel="canonical"
      href="https://datavis-freelancers-employees.kristin-baumann.com/"
    />
    <meta
      name="description"
      content="Comparison of Freelancers and Employees in the Data Vis Society Survey 2021"
    />
    <meta
      property="og:image"
      content={`https://datavis-freelancers-employees.kristin-baumann.com${shareImage}`}
    />
  </Helmet>
);

export default HelmetComponent;
