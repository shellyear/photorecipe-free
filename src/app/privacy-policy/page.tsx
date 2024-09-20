import LeftArrow from "@/components/icons/LeftArrow";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="p-5">
        <a className="btn btn-ghost" href="/">
          <LeftArrow className="w-5 h-5" />
          Back
        </a>
        <h1 className="text-3xl font-medium pb-6">Privacy Policy</h1>
        <div className="leading-relaxed">
          Your privacy is important to us. It is PhotoRecipe&apos;s policy to respect
          your privacy regarding any information we may collect from you across
          our website, and other sites we own and operate.
          <br />
          <br />
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we&apos;re collecting it
          and how it will be used.
          <br />
          <br />
          You can sign up with your Google account so your PhotoRecipe&apos;s account
          username will be prefilled with your name and your public profile
          picture.
          <br />
          <br />
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we&apos;ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorised access, disclosure, copying, use or
          modification.
          <br />
          <br />
          We don&apos;t share any personally identifying information publicly or with
          third-parties, except when required to by law.
          <br />
          <br />
          We act in the capacity of a data controller and a data processor with
          regard to the personal data processed through PhotoRecipe and the
          services in terms of the applicable data protection laws, including
          the EU General Data Protection Regulation (GDPR).
          <br />
          <br />
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective privacy policies.
          <br />
          <br />
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
          <br />
          <br />
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us.
          <br />
          <br />
          This policy is effective as of 10 September 2024.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
