import * as React from "react";

const linkStyle =
  "inline-block text-gray-600 underline hover:text-gray-900 hover:text-underline py-1";

const Footer = () => (
  <footer className="bg-white border-t border-gray-400 shadow">
    <div className="container max-w-4xl mx-auto flex py-8">
      <div className="w-full mx-auto flex flex-wrap">
        <div className="flex w-full md:w-1/2 ">
          <div className="px-8">
            <h3 className="font-bold text-gray-900">About</h3>
            <p className="py-4 text-gray-600 text-sm">
              Project by Kristin Baumann as part of the Data Vis Society
              Challenge 2021.{" "}
              <a
                className={linkStyle}
                href="https://github.com/kristinbaumann/datavis-freelancers-employees"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
            </p>
          </div>
        </div>

        <div className="flex w-full md:w-1/2">
          <div className="px-8">
            <h3 className="font-bold text-gray-900">
              Follow me or get in contact
            </h3>
            <ul className="list-reset items-center text-sm pt-3">
              <li>
                <a
                  className={linkStyle}
                  href="https://www.kristin-baumann.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </li>
              <li>
                <a
                  className={linkStyle}
                  href="https://twitter.com/kristin_baumann"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
