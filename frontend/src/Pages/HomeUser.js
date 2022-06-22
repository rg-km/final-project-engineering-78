import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import "@popperjs/core";
import "../bootstrap.min.css";
import NavigationBarUser from "../Components/NavigationBarUser";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const HomeUser = () => {
  return (
    <>
      <NavigationBarUser />
      <main>
        <Container>
          <Hero />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default HomeUser;
