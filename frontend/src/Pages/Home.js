import React from "react";
import { Container } from "react-bootstrap";
// import axios from "axios";
import "../App.css";
import "@popperjs/core";
import "../bootstrap.min.css";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const Home = () => {
  // // const getdata = async () => {
  // //   const response = await axios.get("http://api.alquran.cloud/v1/surah");
  // //   console.log(response.data.data);
  // };

  return (
    <>
      <NavigationBar />
      <main>
        <Container>
          {/* <Button onClick={getdata}>Tambah</Button>
          sdsad */}
          <Hero />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
