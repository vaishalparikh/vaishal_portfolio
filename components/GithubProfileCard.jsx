import React from "react";
import ScrollToTop from "react-scroll-to-top";
import ContactUs from "./ContactUs";

import { Card, Container } from "reactstrap";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section bg-gradient-info shadow border-0">
      <Container
        className="d-flex justify-content-center
"
      >
        <div className="p-1">
          <h2 className="text-white text-center">Reach Out to me!</h2>

          <p className="text-white mt-3">{prof.bio}</p>
        </div>
      </Container>
      <ContactUs />


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
