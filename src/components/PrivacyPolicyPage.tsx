import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="prose mx-auto py-8 text-xl">
      <h1 className="text-4xl">Privacy Policy</h1>
      <p>Last updated: September 25, 2025</p>

      <h2 className="text-2xl py-3 ">Introduction</h2>
      <p>
        Welcome to my portfolio. This privacy policy explains how we collect,
        use, and share information about you when you visit this website.
      </p>

      <h2 className="text-2xl py-3 ">Data Collection and Use</h2>
      <p>
        We use Google Analytics to collect information about your visit. This
        helps us understand how visitors use the site so we can improve it.
        Google Analytics collects data such as your IP address, browser type,
        pages visited, and the time of your visit. This data is aggregated and
        anonymized.
      </p>
      <p>
        For more information on how Google uses data, please visit{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#000080] cursor-pointer font-bold italic"
        >
          Google's Privacy & Terms page
        </a>
        .
      </p>

      <h2 className="text-2xl py-3 ">Cookies</h2>
      <p>
        This website uses cookies to help it function and to support our
        analytics. A cookie is a small file placed on your device. You can
        instruct your browser to refuse all cookies or to indicate when a cookie
        is being sent.
      </p>

      <h2 className="text-2xl py-3 ">How to Opt-Out</h2>
      <p>
        You can opt-out of Google Analytics tracking by installing the Google
        Analytics Opt-out Browser Add-on. You can download it{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#000080] cursor-pointer font-bold italic"
        >
          here
        </a>
        .
      </p>
      <p>
        If you have any questions about this Privacy Policy, be sure that i'm
        not using the data this is just a show off that i can link google analytics to a website.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
