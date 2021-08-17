import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Results from "../../components/Results";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Results />
    </>
  );
};

export default Home;
