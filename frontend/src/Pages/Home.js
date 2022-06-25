import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import "@popperjs/core";
import "../bootstrap.min.css";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import BookCard from "../Components/BookCard";
import Buku from "../Components/Buku";
import Beranda from "../Pages/Beranda";

const Home = () => {
  return (
    <>
      {/* <NavigationBar /> */}
      <main>
        <Container>
          <Beranda />
        </Container>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
