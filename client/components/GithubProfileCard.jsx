import React from "react";
import ScrollToTop from "react-scroll-to-top";
import ContactUs from "./ContactUs";

import { Card, Container } from "reactstrap";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container
        className="d-flex justify-content-center
"
      >
        <div className="p-2">
          <h2 className="text-white text-center">Reach Out to me!</h2>

          <p className="text-white mt-3">{prof.bio}</p>
        </div>
      </Container>
      <ContactUs />
      <div className="text-center p-3">
        © 2022 Copyright:
        <a className="text-white" href="https://vaishalparikh.tech/">
          Vaishal Parikh
        </a>
      </div>

      <ScrollToTop
        smooth
        top="20"
        height="15px"
        className="btn-icon-only rounded-circle btn-sm"
      />
    </Card>
  );
};

export default GithubProfileCard;
